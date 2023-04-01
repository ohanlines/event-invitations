(ns app.views.home
  (:require ["@heroicons/react/24/solid" :refer [BeakerIcon]]))

(defn home-page []
  [:div
   [:p "Welcome Home"]
   [:div {:class-name "flex overflow-x-scroll"}
    [:div {:class-name "w-64 flex-shrink-0"}
     [:img {:src "/img/img-1.jpg" :alt "IMG-1"}]]
    [:div {:class-name "w-64 flex-shrink-0"}
     [:img {:src "/img/img-2.jpg" :alt "IMG-2"}]]
    [:div {:class-name "w-64 flex-shrink-0"}
     [:img {:src "/img/img-3.jpg" :alt "IMG-3"}]]

    [:div {:class-name "card"}
     [:p "Asti"]]

    [:div {:class-name "card"}
     [:p "test"]
     [:> BeakerIcon {:class-name "h-6 w-6 text-blue-500"}]
     ]
    ]

   [:div {:class-name "w-64 grid grid-cols-1"}
    [:div {:class-name "card p-0 relative overflow-hidden"}
     [:img {:class-name "object-cover transition-opacity duration-150 ease-in-out"
            :src        "/img/img-1.jpg"}]]]


   ])
