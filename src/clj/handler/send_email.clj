(ns handler.send-email
  (:require [db :as db]
            [postal.core :as pc]
            [utils :refer [get-env]]
            [clojure.java.io :as io]
            [clojure.data.csv :as csv]
            [clj-pdf.core :refer [pdf]]
            [clojurewerkz.quartzite.scheduler :as qs]
            [clojurewerkz.quartzite.triggers :as t]
            [clojurewerkz.quartzite.jobs :as j]
            [clojurewerkz.quartzite.jobs :refer [defjob]]
            [clojurewerkz.quartzite.schedule.daily-interval :refer [schedule with-interval-in-seconds]]))

;; === PROCESSING DB TO CSV ======================
(defn dbmap-to-vec []
  (let [datas (db/show-attendees)]
    (loop [res [] data datas]
      (if (zero? (count data))
        res
        (recur (conj res (-> data first vals rest vec))
               (rest data))))))

;; writes csv for coming and not-coming guest separately return csv name
(defn write-csv [& {:keys [coming?]}]
  (let [col-title     ["nama" "kehadiran" "jumlah orang bawaan" "ucapan"]
        filtered-data (filter #(= coming? (% 1)) (dbmap-to-vec))
        new-data      (vec (concat [col-title] filtered-data))
        coming-flag   (case coming?
                        true  "hadir"
                        false "tidak-hadir")
        file-name     (str "resources/generated-file" coming-flag ".csv")]
    (with-open [writer (io/writer file-name)]
      (csv/write-csv writer new-data))
    file-name))

;; === GENERATE CSV DATA TO PDF CHART ============
(defn write-pdf []
  (let []
    (pdf [{:title         "Attendees Data"
           :author        "Ahmad Rauhan"
           :size          :a4
           :orientation   :portrait
           :left-margin   10
           :right-margin  10
           :top-margin    10
           :bottom-margin 10}
          [:pdf-table {:horizontal-align :center}
           nil
           [[:pdf-cell [:chart {:type       :pie-chart
                                :title      "Percentage of Attendees"
                                :width      300
                                :height     300
                                :background [255 255 255]}
                        ["One" 12]
                        ["Two" 33]]]]
           [[:pdf-cell
             [:pdf-table {:width-percent 100}
              [20 80]
              [[:pdf-cell {:set-border [:right]} "Nama"] [:pdf-cell {:set-border []} "Ucapan"]]]]]]]
         "resources/generated-file/pdf-example.pdf")))

;; === SENDING EMAIL AUTOMATICALLY ===============
(defjob send-email
  [ctx]
  (try (let [{:keys [user pass to]} (get-env :auto-mailer-config)
             data-hadir             (write-csv :coming? true)
             data-tidak-hadir       (write-csv :coming? false)]
         (pc/send-message {:host "smtp-mail.outlook.com"
                           :port 587
                           :tls  true
                           :user user
                           :pass pass}
                          {:from    user
                           :to      to
                           :subject "CSV test!"
                           :body    [{:type    "text/html"
                                      :content "this is test of sending email with attachment"}
                                     {:type    :attachment
                                      :content (io/file data-hadir)}
                                     {:type    :attachment
                                      :content (io/file data-tidak-hadir)}]})
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

;; ===============================================
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

(with-open [writer (io/writer "resources/out-file.csv")]
  (csv/write-csv writer
                 [["abc" "def"]
                  ["ghi" "jkl"]]))

  )
