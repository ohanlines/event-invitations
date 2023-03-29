(ns app.views.home
  )

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
    ]
   ])
