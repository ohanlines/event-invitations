(ns routes)

(defn respond-hello [request]
  (let [invitee (get-in request [:query-params :name])
        greeting (str "Kapada Yth. " invitee)]
    {:status 200 :body greeting}))

(def routes
  #{["/greet" :get respond-hello :route-name :greet]})
