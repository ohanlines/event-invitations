(ns app.views.components
  (:require [reagent.core :as r]
            [ajax.core :refer [GET POST]]
            [clojure.string :as cs]
            [cljs.reader :as reader]
            ["react" :as react]
            ["@heroicons/react/24/solid" :refer [ChevronLeftIcon ChevronRightIcon CheckIcon]]))

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
                  date-end    (js/Date. 2023 3 30 23 59 59)
                  new-interval-ms (- (.getTime date-end) (.getTime date-now))]
              new-interval-ms))
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

(GET "http://localhost:8890/api/get-env"
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

;; === ERROR POP UP ==============================
(def error-pop-up-state
  (r/atom {:is-active false
           :text      ""}))

(defn error-pop-up [{:keys [is-active text]}]
  (let [error-css (if is-active
                    "opacity-100 scale-100"
                    "opacity-0 scale-0")]
    [:div {:class-name (str "absolute inset-0 flex justify-center items-center backdrop-filter backdrop-blur-sm z-50 transition-all" error-css)}
     [:div {:class-name "card flex flex-col bg-red-300 text-white"}
      [:p text]
      [:div {:class-name "flex justify-end pt-2"}
       [:div {:class-name "flex justify-center items-center w-20 p-2 bg-white text-black rounded-lg cursor-pointer"
              :on-click   #(reset! error-pop-up-state {:is-active false :text ""})}
        [:p "Tutup"]]]]]))

;; === ATTENDEE FORM =============================
(defn input-text
  ([label value on-change]
   (let [label-str   label
         label-parse (-> label
                         (cs/lower-case)
                         (cs/replace #" " "-"))
         default-map {:type       "text"
                      :id         label-parse
                      :value      value
                      :on-change  on-change
                      :class-name "block w-full p-1 border-2 border-pink-200 rounded-md focus:outline-none"}
         divv        [:div {:class-name "my-4"}]
         labelv      [:label {:for label-parse} (str label \:)]
         inputv      [:input default-map]]
     (conj divv labelv inputv)))

  ([label value on-change additional-map]
   (-> (input-text label value on-change)
       (update-in [3 1] #(merge % additional-map)))))

(defn attendee-form []
  (let [[data set-data] (react/useState {:nama "" :hadir true :jumlah 0 :comment ""})
        [done set-done] (react/useState false)]
    (r/as-element
     (if done
       ;; === SHOWNG CHECK ICON ==================
       [:div {:class-name "flex justify-center items-center transition-all"}
        [:div {:class-name "p-4 bg-green-300 rounded-full"}
         [:> CheckIcon {:class-name "w-6 h-6 text-white"}]]]

       ;; === FORM ===============================
       [:div {:class-name "card w-2/3 sm:w-1/3"}
        [:form {:method    "POST"
                :on-submit (fn [e]
                             (.preventDefault e)
                             (js/console.log "DATA: " data)
                             (POST "http://localhost:8890/api/insert-attendee"
                                   {:body          (.stringify js/JSON (clj->js data))
                                    :headers       {"Content-Type" "application/json"}
                                    :handler       #(if % (set-done true) nil)
                                    :error-handler (fn [err]
                                                     (let [{:keys [failure response status status-text]} err]
                                                       (js/console.log "error map: " err)
                                                       (reset! error-pop-up-state {:is-active true :text response})))})
                             (set-data {:nama "" :hadir true :jumlah 0 :comment ""}))}

         ;; input nama
         (input-text "Nama"
                     (:nama data)
                     #(set-data (assoc data :nama (-> % .-target .-value))))

         ;; hadir selection
         [:div {:class-name "my-4"}
          [:label {:for "hadir"} "Apakah Anda Hadir?"]
          [:select {:id         "hadir"
                    :value      (:hadir data)
                    :on-change  #(set-data (assoc data :hadir (-> % .-target .-value reader/read-string)))
                    :class-name "block w-full p-1 border-2 border-pink-200 rounded-md focus:outline-none"}
           [:option {:value true} "Ya"]
           [:option {:value false} "Tidak"]]]

         ;; input yg hadir
         (input-text "Jumlah yang Hadir"
                     (:jumlah data)
                     #(set-data (assoc data :jumlah (-> % .-target .-value js/parseInt)))
                     {:type "number"})

         ;; input comment
         [:div {:class-name "my-4"}
          [:label {:for "comment"} "Beri Ucapan"]
          [:textarea {:id         "comment"
                      :value      (:comment data)
                      :on-change  #(set-data (assoc data :comment (-> % .-target .-value)))
                      :class-name "block w-full p-1 border-2 border-pink-200 rounded-md focus:outline-none"}]]

         ;; button
         [:button {:type       "submit"
                   :class-name "my-4 w-full p-1 text-white rounded-md bg-pink-300 hover:bg-pink-200"}
        "SUBMIT"]]]))))

;; === COMMENT DISPLAY ===========================
(def comments-map (r/atom nil))

(GET "http://localhost:8890/api/show-comments"
     {:handler (fn [response]
                 (let [data (-> response
                                js/JSON.parse
                                (js->clj :keywordize-keys true))]
                   (reset! comments-map data)
                   (js/console.log "GET comments: " @comments-map)))})

(def comments-map-shifter
  (js/setInterval
   #(reset! comments-map
            (let [data       @comments-map
                  first-data (vector (first data))
                  rest-data  (rest data)]
              (-> rest-data
                  (concat first-data)
                  (vec))))
   5000))

(defn comment-display []
  (let [data (first @comments-map)]
    [:div {:class-name "card w-2/3 sm:w-1/3"}
     [:div {:class-name ""}
      [:p (:comment data)]
      [:p {:class-name "flex justify-end"} "- " (:nama data)]]]))
