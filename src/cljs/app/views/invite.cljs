(ns app.views.invite)

(defn invite-page [context]
  (let [welcome-name (get-in context [:query-params :name])
        welcome-str  (if welcome-name welcome-name "STRANGER")]
    [:div {:class-name "bg-fuchsia-100 absolute inset-0 flex flex-col justify-center items-center"}
     [:p {:class-name "text-base"}
       "Kepada Yth."]
     [:p {:class-name "text-4xl"}
       welcome-str]
     [:div {:class-name "bg-fuchsia-300 p-2 mt-4 rounded cursor-pointer"
            :on-click   #(js/window.location.assign "http://localhost:5001/")}
      [:p {:class-name "text-xl"}
        "Buka Undangan"]]

      ]
     ))
