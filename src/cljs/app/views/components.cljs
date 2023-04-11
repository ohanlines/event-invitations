(ns app.views.components
  (:require [reagent.core :as r]
            [ajax.core :refer [GET]]
            [clojure.string :as cs]
            ["react" :as react]
            ["@heroicons/react/24/solid" :refer [ChevronLeftIcon ChevronRightIcon]]))

;; === PHOTO SESSION =============================
(def image-idx (r/atom 0))

(defn carousel-photo []
  (let [images (mapv #(str "/img/" % ".jpg")
                     ["img-1" "img-2" "img-3"])]
    [:div {:class-name "max-w-xs relative group"}
     [:div {:class-name "rounded-lg relative overflow-hidden"}
      [:img {:src (images @image-idx)}]]

    ;; left arrow
    (if (not= @image-idx 0)
      [:div {:class-name "hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer"
             :on-click   #(swap! image-idx dec)}
       [:> ChevronLeftIcon {:class-name "h-6 w-6 text-white"}]])

    ;; right arrow
    (if (not= @image-idx 2)
      [:div {:class-name "hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 cursor-pointer"
             :on-click   #(swap! image-idx inc)}
       [:> ChevronRightIcon {:class-name "h-6 w-6 text-white"}]])]))

;; === D-DAY COUNTDOWN ===========================
(def interval-ms (r/atom 0))

(def interval-updater
  (js/setInterval
   #(reset! interval-ms
            (let [date-now    (js/Date.)
                  date-end    (js/Date. 2023 3 10 23 59 59)
                  interval-ms (- (.getTime date-end) (.getTime date-now))]
              interval-ms))
   1000))

(defn date-timer []
  (let [d-day-interval    (quot @interval-ms (* 1000 60 60 24))
        d-hour-interval   (quot @interval-ms (* 1000 60 60))
        d-minute-interval (rem (quot @interval-ms (* 1000 60)) 60)
        d-second-interval (rem (quot @interval-ms 1000) 60)]
    [:div {:class-name ""}
     [:p "day-interval " d-day-interval]
     [:p "hour-interval " d-hour-interval]
     [:p "minute-interval " d-minute-interval]
     [:p "second-interval " d-second-interval]]))

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

;; === ATTENDEE FORM =============================

;; (defn input-text
;;   ([label value on-change]
;;    (let [label-str   label
;;          label-parse (-> label
;;                          (cs/lower-case)
;;                          (cs/replace #" " "-"))
;;          default-map {:type       "text"
;;                       :id         label-parse
;;                       :name       label-parse
;;                       :value      (or value "")
;;                       :on-change  on-change
;;                       :class-name "block p-1 border-2 border-pink-200 rounded-md focus:outline-none"}
;;          divv        [:div {:class-name "my-4"}]
;;          labelv      [:label {:for label-parse} (str label \:)]
;;          inputv      [:input default-map]]
;;      (conj divv labelv inputv)))

;;   ([label value on-change additional-map]
;;    (-> (input-text label value on-change)
;;        (update-in [3 1] #(merge % additional-map)))))

;; (defn attendee-form []
;;   (let [people-name  (r/atom "")
;;         people-count (r/atom "")]
;;     [:div {:class-name "card w-1/4"}
;;      [:form {:method   "POST"}
;;       (input-text "Nama"
;;                   @people-name
;;                   #(swap! people-name (fn [x] (-> x .-target .-value))))
;;       (input-text "Jumlah yg hadir"
;;                   @people-count
;;                   #(swap! people-count (fn [x] (-> x .-target .-value)))
;;                   {:type "number"})
;;       [:button {:type "submit"
;;                 :on-click (fn [e] (.preventDefault e))}
;;        "Submit"]
;;       ]]))

;; (defn attendee-form []
;;   (let [people-name (r/atom "")]
;;     [:div {:class-name "card"}
;;      [:form {:method "POST"}
;;       [:input {:type        "text"
;;                :id          "name"
;;                :value       @people-name
;;                :on-change   #(swap! people-name (fn []
;;                                                   (let [x (.-value (.-target %))]
;;                                                     (js/console.log "X: " x)
;;                                                     x)
;;                                                   ))
;;                :placeholder "huhu"
;;                :class-name  "block p-1 border-2 border-pink-200 rounded-md focus:outline-none"}]
;;       [:button {:type "submit"} "Submit"]]]))

;; (defn attendee-form []
;;   (let [[count set-count] (react/useState 0)]
;;     (r/as-element
;;      [:div
;;       [:p "You clicked " count " times"]
;;       [:button {:on-click #(set-count inc)}
;;        "INC"]])))

(defn attendee-form []
  (let [[name set-name] (react/useState "")]
    (r/as-element
     [:div {:class-name "card"}
      [:form {:method    "POST"
              :on-submit (fn [e]
                           (.preventDefault e)
                           (js/console.log name))}
       [:input {:type        "text"
                :id          "name"
                :value       name
                :on-change   #(set-name (fn [] (.-value (.-target %))))
                :placeholder "huhu"
                :class-name  "block p-1 border-2 border-pink-200 rounded-md focus:outline-none"}]
       [:button {:type "submit"
                 }
        "SUBMIT"]]])))
