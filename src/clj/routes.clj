(ns routes
  (:require [io.pedestal.http.body-params :as body-params]
            [cheshire.core :refer [generate-string]]))

(defn invitee-map [request]
  (let [invitee  (get-in request [:query-params :name])]
    {:status 200 :body {:name invitee}}))

(def edn-to-json
  {:name  ::edn-to-json
   :leave (fn [context] ;;(update context :body #(generate-string %))
            (let [response    (get context :response)
                  update-body (update response :body #(generate-string %))
                  update-context (assoc context :response update-body)
                  _ (println "NEW CONTEXT: " update-context)]
              update-context))})

(def routes
  #{["/greet" :get [edn-to-json invitee-map] :route-name :greet]})

(comment
  (def m {:response {:status 200 :body {:nama "ahmad" :umur 12}}})

  (update-in m [:response :body] #(generate-string %))

  (assoc m :response {:map "baru"})

  m
  )
