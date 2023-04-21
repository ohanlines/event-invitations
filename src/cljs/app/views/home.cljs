(ns app.views.home
  (:require [app.views.components :as c]
            [reagent.core :as r]))

(defn home-page []
  (let [error-map @c/error-pop-up-state]
    [:<>

     ;; === ERROR POP UP =========================
     [c/error-pop-up error-map]

     ;; === CONTENT ==============================
     [:div {:class-name "snap-y snap-mandatory bg-gradient-to-r from-purple-300 to-pink-100 w-screen h-screen overflow-scroll"}

      ;; welcome speech
      [:div {:class-name "snap-start w-screen h-screen flex items-center justify-center"}
       [:p "Welcome Speech"]]

      ;; photo session
      [:div {:class-name "snap-start w-screen h-screen flex items-center justify-center"}
       [c/carousel-photo]]

      ;; d-day countdown
      [:div {:class-name "snap-start w-screen h-screen flex flex-col items-center justify-center"}
       [:p "D-day Countdown"]
       [c/date-timer]]

      ;; event location
      [:div {:class-name "snap-start w-screen h-screen flex flex-col items-center justify-center"}
       [:p "Event Location"]
       [:p "enter"]
       [c/event-location]]

      ;; attendance form
      [:div {:class-name "snap-start w-screen h-screen flex flex-col items-center justify-center"}
       [:p "Attendance Form"]
       [:> c/attendee-form]]

      ;; comment form and display
      [:div {:class-name "snap-start w-screen h-screen flex items-center justify-center"}
       [:p "Comment Form and Display"]]

      ]]))

(comment

  (swap! image-idx inc)

  (swap! image-idx dec)

  @image-idx
  )
