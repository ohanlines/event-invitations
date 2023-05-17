(ns handler.send-email
  (:require [postal.core :as pc]
            [utils :refer [get-env]]
            [clojurewerkz.quartzite.scheduler :as qs]
            [clojurewerkz.quartzite.triggers :as t]
            [clojurewerkz.quartzite.jobs :as j]
            [clojurewerkz.quartzite.jobs :refer [defjob]]
            [clojurewerkz.quartzite.schedule.daily-interval :refer [schedule with-interval-in-seconds]]))

(defjob send-email
  [ctx]
  (try (let [{:keys [user pass to]} (get-env :auto-mailer-config)]
         (pc/send-message {:host "smtp-mail.outlook.com"
                           :port 587
                           :tls  true
                           :user user
                           :pass pass}
                          {:from    user
                           :to      to
                           :subject "Hi!"
                           :body    "Test"})
         (println "Email sended to: " to))
       (catch Exception e
         (println "ERROR: " (.getMessage e)))))

(defn email-scheduler
  [& m]
  (println "\nStarting Quartzite Scheduler...")
  (let [s       (-> (qs/initialize) qs/start)
        job     (j/build
                 (j/of-type send-email)
                 (j/with-identity (j/key "jobs.send-email.1")))
        trigger (t/build
                 (t/with-identity (t/key "triggers.1"))
                 (t/start-now)
                 (t/with-schedule (schedule
                                   (with-interval-in-seconds 10))))]

    ;; submit for execution
    (qs/schedule s job trigger)))

(comment
  (let [{:keys [user pass to]} (get-env :auto-mailer-config)]
    (pc/send-message {:host "smtp-mail.outlook.com"
                      :port 587
                      :tls  true
                      :user user
                      :pass pass}
                     {:from    user
                      :to      to
                      :subject "Hi!"
                      :body    "Test"}))



  )
