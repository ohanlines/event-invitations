(ns app.views.components
  (:require [reagent.core :as r]
            [ajax.core :refer [GET]]))

;; === D-DAY COUNTDOWN ===========================
;; (def coba-1 (r/atom 9999999))
;; (r/rswap)

;; (def date-now (r/atom (js/Date.)))
;; (def date-start )
(defonce date-interval
  (let [date-now (js/Date.)
        date-end (js/Date. 2023 3 10 23 59 59)
        interval-ms (- (.getTime date-end) (.getTime date-now))]
    (r/atom interval-ms)))

(defonce time-updater (js/setInterval (swap! date-interval #(- % 1000)) 1000))

(defn timer []
  (let [d-day-interval    (quot @date-interval (* 1000 60 60 24))
        d-hour-interval   (quot @date-interval (* 1000 60 60))
        d-minute-interval (rem (quot @date-interval (* 1000 60)) 60)
        d-second-interval (rem (quot @date-interval 1000) 60)]
    [:div
     [:p "day-interval " d-day-interval]
     [:p "hour-interval " d-hour-interval]
     [:p "minute-interval " d-minute-interval]
     [:p "second-interval " d-second-interval]]))


;; (-> @timer)

;; (js/Date. 2023 3 10 23 59 59)

;; (-> (js/Date.) .toTimeString)

;; month idx inc
;; (let [d-start           @timer
;;       d-end             (js/Date. 2023 3 11 1 0 0)
;;       interval-ms       (- (.getTime d-end) (.getTime d-start))
;;       d-day-interval    (quot interval-ms (* 1000 60 60 24))
;;       d-hour-interval   (quot interval-ms (* 1000 60 60))
;;       d-minute-interval (rem (quot interval-ms (* 1000 60)) 60)]
;;   {:start-day       (.toTimeString d-start)
;;    :end-day         (.toTimeString d-end)
;;    :day-interval    d-day-interval
;;    :hour-interval   d-hour-interval
;;    :minute-interval d-minute-interval})

;; (js/Date. "2024-01-01T00:00:00Z")

;; (/ 395 60)

;; (-> @timer .toTimeString)

;; (-> js/Date. .toTimeString)

;; (js/Date.)

;; (js/Date. "2023-04-09T12:00:00Z")

;; (let [date (js/Date. "2023-04-09T12:00:00Z")
;;       local-offset (-> date .getTimezoneOffset (* -1) (* 60 1000))
;;       local-date (js/Date. (+ (.getTime date) local-offset))]
;;   ;; (str local-date)
;;   (str (js/Date. (+ (.getTime date) local-offset)))
;;   )

;; (js/console.log (.-timeZone (.resolvedOptions (js/Intl.DateTimeFormat))))

;; (.-timeZone (.resolvedOptions (js/Intl.DateTimeFormat)))

;; (.getTimezoneOffset (js/Date.))

;; (js/Date.UTC 2023 3 10 13 0 0)

;; (let [date-utc    (js/Date.UTC 2023 3 10 12 0 0)
;;       date-offset (.getTimezoneOffset (js/Date.))
;;       calc-date   (+ date-utc (* date-offset 60 1000))]
;;   (-> calc-date
;;       js/Date.
;;       .toTimeString))

;; ;; Create a new Date object representing the current date and time
;; (def now (js/Date.))

;; ;; Get the timezone offset (in minutes) for the current timezone
;; (def timezone-offset (-> now .getTimezoneOffset (/  60)))
;; (js/console.log timezone-offset)

;; === EVENT LOCATION ============================
(def api-key (r/atom ""))

(GET "http://localhost:8890/env"
     {:handler (fn [response]
                 (let [key-str (response "gmaps-api-key")]
                   (swap! api-key #(str key-str))))})

(defn event-location []
  (let [src (str "https://www.google.com/maps/embed/v1/view?key=" @api-key "&center=40.712776,-74.005974&zoom=12")]
    [:iframe
     {:src          src
      :width        "600"
      :height       "450"
      :frame-border "0"
      :style        {:border "0"}}]))
