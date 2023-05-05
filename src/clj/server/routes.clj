(ns server.routes
  (:require [db :as db]
            [env :refer [env]]
            [cheshire.core :refer [generate-string]]
            [handler.attendees :as ha]
            [handler.comments :as hc]
            [io.pedestal.http :as http]
            [io.pedestal.interceptor.error :as error]
            [io.pedestal.interceptor.chain :as chain]
            [io.pedestal.http.body-params :as body-params]))

(defn passing-env [request]
  {:status  200
   :body    {:gmaps-api-key (env :google-maps-api-key)}
   :headers {"Content-Type" "application/json"}})

(def service-error-handler
  (error/error-dispatch [ctx ex]
                        [{:exception-type :java.lang.AssertionError}]
                        (let [{:keys [exception-type exception]} (ex-data ex)

                              _ (println "EX-TYPE: " exception-type)
                              _ (println "EX: " exception)]
                          (assoc ctx :response {:status 500 :body (.getMessage exception)}))

                        :else (assoc ctx ::chain/error ex)))

(def edn-to-json
  {:name  ::edn-to-json
   :leave (fn [context]
            (let [response       (get context :response)
                  update-body    (update response :body #(generate-string %))
                  update-context (assoc context :response update-body)
                  _              (println "NEW CONTEXT (edn-to-json): " update-context)]
              update-context))})

(def common-interceptor [(body-params/body-params) http/html-body edn-to-json service-error-handler])

(def routes
  #{["/env" :get [edn-to-json passing-env] :route-name :env]
    ["/api/insert-attendee" :post (conj common-interceptor ha/input-schema-check ha/insert-attendee) :route-name :insert-attendee]
    ["/api/show-comments" :get (conj common-interceptor hc/show-comments) :route-name :show-comments]})

;; ===============================================
(comment

  )
