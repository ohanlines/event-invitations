(ns app.views.home
  (:require [reagent.core :as r]
            ["@heroicons/react/24/solid" :refer [ChevronLeftIcon ChevronRightIcon]]))

(def image-idx (r/atom 0))

(set-validator! image-idx #(and (>= @image-idx 0) (<= @image-idx 2)))

(def images
  (mapv #(str "/img/" % ".jpg")
    ["img-1" "img-2" "img-3"]))

(defn home-page []
  [:div
   [:p "Welcome Home"]

   [:div {:class-name "max-w-xs relative group"}
    [:div {:class-name "card p-0 relative overflow-hidden"}
     [:img {:class-name "object-cover transition-opacity duration-150 ease-in-out"
            :src        (images @image-idx)}]]

    ;; left arrow
    [:div {:class-name "hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
           :on-click   #(swap! image-idx dec)}
     [:> ChevronLeftIcon {:class-name "h-6 w-6 text-white"}]]

    (js/console.log "IMG IDX: " @image-idx)
    ;; right arrow
    [:div {:class-name "hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer"
           :on-click   #(swap! image-idx inc)}
     [:> ChevronRightIcon {:class-name "h-6 w-6 text-white"}]]]


   ])

(comment

  (swap! image-idx inc)

  (swap! image-idx dec)

  @image-idx
  )
