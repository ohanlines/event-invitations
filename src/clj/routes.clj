(ns routes)

(defn respond-hello [request]
  (let [invitee  (get-in request [:query-params :name])]
    {:status 200 :body {:name invitee}}))

(def routes
  #{["/greet" :get respond-hello :route-name :greet]})
