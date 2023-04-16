(ns server.routes
  (:require [io.pedestal.http.body-params :as body-params]
            [io.pedestal.interceptor.error :refer [error-dispatch]]
            [cheshire.core :refer [generate-string]]
            [db :as db]
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

;; tambahin error
(defn insert-attendee [request]
  (try (let [body (get request :json-params)
             _    (println "BODY: " request)
             ;; __   (println "BODY: " response)

             {:keys [nama hadir jumlah]} body
             insert                      (db/insert-to-attendees nama hadir jumlah)
             ;; _ (println "nama: " nama)
             ]
         {:body   "tes"
          :status  200})
       (catch Exception e
         {:status 500
          :body   (str "Error: " e)})))

;; belom kepake
(def service-error-handler
  (error-dispatch [ctx ex]

    [{:exception-type :java.lang.ArithmeticException :interceptor ::another-bad-one}]
    (assoc ctx :response {:status 400 :body "Another bad one"})

    [{:exception-type :java.lang.ArithmeticException}]
    (assoc ctx :response {:status 400 :body "A bad one"})

    :else
    (assoc ctx :io.pedestal.interceptor.chain/error ex)))

;; belom kepake
(def show-ctx-on-leave
  {:name ::show-ctx-on-leave
   :leave (fn [context] (println "CONTEXT LEAVE: " context))
   :enter (fn [context]
            (let [_ (println "CONTEXT ENTER: " context)]
              context))})

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
    ["/env" :get [edn-to-json passing-env] :route-name :env]
    ["/api/insert-attendee" :post [(body-params/body-params) insert-attendee] :route-name :insert-attendee]})

(comment
  (def m {:response {:status 200 :body {:nama "ahmad" :umur 12}}})

  (update-in m [:response :body] #(generate-string %))

  (assoc m :response {:map "baru"})

  m

  (let [env (-> "env.edn" slurp read-string)]
    (:test-env env))

  (env :google-maps-api-key)

  )
