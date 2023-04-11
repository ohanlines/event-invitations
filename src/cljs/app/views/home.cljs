(ns app.views.home
  (:require [app.views.components :as c]
            [reagent.core :as r]))

(defn home-page []
  [:div {:class-name "snap-y snap-mandatory bg-gradient-to-r from-purple-300 to-pink-100 w-screen h-screen overflow-scroll"}

   ;; === WELCOME SPEECH =========================
   [:div {:class-name "snap-start w-screen h-screen flex items-center justify-center"}
    [:p "Welcome Speech"]]

   ;; === PHOTO SESSION ==========================
   [:div {:class-name "snap-start w-screen h-screen flex items-center justify-center"}
    [c/carousel-photo]
    ]

   ;; === D-DAY COUNTDOWN =======================
   [:div {:class-name "snap-start w-screen h-screen flex flex-col items-center justify-center"}
    [:p "D-day Countdown"]
    [c/date-timer]]

   ;; === EVENT LOCATION =========================
   [:div {:class-name "snap-start w-screen h-screen flex flex-col items-center justify-center"}
    [:p "Event Location"]
    [:p "enter"]
    [c/event-location]
    ]

   ;; === ATTENDANCE FORM ========================
   [:div {:class-name "snap-start w-screen h-screen flex flex-col items-center justify-center"}
    [:p "Attendance Form"]
    [c/attendee-form]]

   ;; === COMMENT FORM AND DISPLAY ===============
   [:div {:class-name "snap-start w-screen h-screen flex items-center justify-center"}
    [:p "Comment Form and Display"]]

   ])

(comment

  (swap! image-idx inc)

  (swap! image-idx dec)

  @image-idx
  )
