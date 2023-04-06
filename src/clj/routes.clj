(ns routes
  (:require [io.pedestal.http.body-params :as body-params]
            [cheshire.core :refer [generate-string]]
            [env :refer [env]]))

(def coba
  {:name "ohan"})

(defn passing-env [request]
  {:status  200
   :body    {:gmaps-api-key (env :google-maps-api-key)}
   :headers {"Content-Type" "application/json"}})

(defn invitee-map [request]
  (let [invitee  (get-in request [:query-params :name])]
    {:status 200 :body coba
     :headers {"Content-Type" "application/json"}}))

(def edn-to-json
  {:name  ::edn-to-json
   :leave (fn [context]
            (let [response       (get context :response)
                  update-body    (update response :body #(generate-string %))
                  update-context (assoc context :response update-body)
                  _              (println "NEW CONTEXT: " update-context)]
              update-context))})

(def routes
  #{["/greet" :get [edn-to-json invitee-map] :route-name :greet]
    ["/env" :get [edn-to-json passing-env] :route-name :env]})

(comment
  (def m {:response {:status 200 :body {:nama "ahmad" :umur 12}}})

  (update-in m [:response :body] #(generate-string %))

  (assoc m :response {:map "baru"})

  m

  (let [env (-> "env.edn" slurp read-string)]
    (:test-env env))

  (env :google-maps-api-key)

  )
