(ns worker.send-email
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
            [clojurewerkz.quartzite.schedule.cron :refer [schedule daily-at-hour-and-minute]]))

;; pdf csv file location
(def loc ((get-env :auto-mailer-config) :file-resource))

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
  (let [col-title     ["nama" "kehadiran" "jumlah orang bawaan"]
        filtered-data (filter #(= coming? (% 1)) (dbmap-to-vec))
        butlast-data  (mapv butlast filtered-data)
        new-data      (vec (concat [col-title] butlast-data))
        coming-flag   (case coming?
                        true  "hadir"
                        false "tidak-hadir")
        file-name     (str loc coming-flag ".csv")]
    (with-open [writer (io/writer file-name)]
      (csv/write-csv writer new-data))
    file-name))

;; === GENERATE CSV DATA TO PDF CHART ============
(defn read-column [filename column-index]
  (let [data (csv/read-csv filename)]
      (map #(nth % column-index) data)))

;; sum attendee who say yes or no
(defn count-attendees [filename]
  (let [reader (io/reader filename)]
    (->> (read-column reader 1)
         (drop 1)
         (count))))

;; sum total attendees from present attendee
(defn sum-attendees [filename]
  (let [reader (io/reader filename)]
    (->> (read-column reader 2)
         (drop 1)
         (mapv #(read-string %))
         (reduce + 0))))

;; writes pdf for showing attendees presence and comments, return pdf name
(defn write-pdf [presence-file not-presence-file]
  (let [filter-data-by-comment (filterv #(not (empty? (% 3))) (dbmap-to-vec))
        data-name-comment      (mapv #(vector (% 0) (% 3)) filter-data-by-comment)
        col-header             (vector
                                (mapv
                                 #(vector :pdf-cell
                                          {:background-color [255 135 240]}
                                          [:chunk {:style "bold"} %])
                                 ["Name" "Comment"]))
        col-name-comment       (vec
                                (for [data data-name-comment]
                                  [[:pdf-cell (data 0)]
                                   [:pdf-cell (data 1)]]))
        file-name              (str loc "attendees-stats-and-comments.pdf")
        attendee-say-yes       (count-attendees presence-file)
        attendee-say-no        (count-attendees not-presence-file)
        total-present          (sum-attendees presence-file)]
    (pdf [{:title         "Attendees Data"
           :author        "Ahmad Rauhan"
           :size          :a4
           :orientation   :portrait
           :left-margin   20
           :right-margin  20
           :top-margin    10
           :bottom-margin 10}

          ;; opening
          [:paragraph {:align             :justified
                       :spacing-after     10
                       :first-line-indent 10}
           "Pie Chart di bawah ini nunjukin persentase orang yang ngisi bakal hadir atau engga pada acara xxx label \"Hadir\" maksudnya orang itu milih select hadir di form, kalau \"Tidak Hadir\" berarti ya milih tidak hadir di form. Total dari jumlah bawaan orang yang hadir sekitar "
           [:chunk {:color [255 135 240] :style "bold"} total-present]]

          ;; show percentage of attendees
          [:pdf-table {:horizontal-align :center}
           nil
           [[:pdf-cell [:chart {:type       :pie-chart
                                :title      "Percentage of Attendees Presence"
                                :width      200
                                :height     200
                                :background [255 255 255]}
                        ["Hadir" attendee-say-yes]
                        ["Tidak Hadir" attendee-say-no]]]]]

          ;; enter 5 times
          [:spacer 5]

          ;; comments from attendees table
          [:chunk {:style "bold"
                   :size  16}
           "Comments from attendees"]
          (vec
           (concat
            [:pdf-table {:width-percent 100}
             [20 80]]
            col-header
            col-name-comment))]
         file-name)
    file-name))

;; === SENDING EMAIL AUTOMATICALLY ===============
(defjob send-email
  [ctx]
  (try (let [{:keys [user pass to]} (get-env :auto-mailer-config)
             data-present           (write-csv :coming? true)
             data-not-present       (write-csv :coming? false)
             pdf-presence           (write-pdf
                                     (str loc "hadir.csv")
                                     (str loc "tidak-hadir.csv"))]
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
                                      :content (io/file pdf-presence)}
                                     {:type    :attachment
                                      :content (io/file data-present)}
                                     {:type    :attachment
                                      :content (io/file data-not-present)}]})
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
                                   (daily-at-hour-and-minute 9 0))))]

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

(with-open [writer (io/writer "resources/generated-file/out-file.csv")]
  (csv/write-csv writer
                 [["abc"]
                  ["ghi" "jkl"]
                  [123 12321321]]))

(sum-attendees "resources/generated-file/hadir.csv")

  )
