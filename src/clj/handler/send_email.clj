(ns handler.send-email
  (:require [postal.core :as pc]
            [utils :refer [get-env]]
            [clojurewerkz.quartzite.scheduler :as qs]
            [clojurewerkz.quartzite.triggers :as t]
            [clojurewerkz.quartzite.jobs :as j]
            [clojurewerkz.quartzite.jobs :refer [defjob]]
            [clojurewerkz.quartzite.schedule.simple :refer [schedule with-repeat-count with-interval-in-seconds]]))

(defjob NoOpJob
  [ctx]
  (println "Does nothing"))

(defn print-something
  [& m]
  (println "\nStarting Quartzite Scheduler...")
  (let [s       (-> (qs/initialize) qs/start)
        job     (j/build
                 (j/of-type NoOpJob)
                 (j/with-identity (j/key "jobs.noop.1")))
        tk      (t/key "triggers.1")
        trigger (t/build
                 (t/with-identity tk)
                 (t/start-now)
                 (t/with-schedule (schedule
                                   (with-interval-in-seconds 1))))]
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
