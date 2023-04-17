(ns handler.attendees
  (:require [db :as db]
            [io.pedestal.http.body-params :as body-params]
            [io.pedestal.interceptor.chain :as chain]))

;; === INSERT DATA TO TABLE ======================
(defn insert-attendee [request]
  (try (let [body (get request :json-params)
             _    (println "BODY: " request)

             {:keys [nama hadir jumlah]} body

             insert (db/insert-to-attendees nama hadir jumlah)
             body   {:name              nama
                     :attend            hadir
                     :brought_attendees jumlah}
             ]
         {:status 200
          :body   body
          })
       (catch Exception e
         (println "ERROR: " e)
         {:status 500
          :body   "Sudah ada yang menginput dengan nama ini, silahkan menggunakan nama lain"})))

;; === INTERCEPTOR FOR ERROR HANDLING ============
(def input-check
  {:name ::input-check

   ;; function for checking input keys
   :enter (fn [context]
            (let [req      (get-in context [:request :json-params])
                  _        (println "ENTER REQ: " req)
                  req-keys (vec (keys req))
                  ]
              (if (= req-keys [:nama :hadir :jumlah])
                context
                (throw (AssertionError. "Input Keys Error"))
                )
              ))

   ;; error handling to show AssertionError on body HTTP still not working
   ;; :error (fn [ctx ex]
   ;;          (let [{:keys [exception-type exception]} (ex-data ex)

   ;;                _ (println "EX-TYPE: " exception-type)
   ;;                - (println "EX: " exception)
   ;;                ]
   ;;            (do (println ">>> START")
   ;;                ;; (throw exception)
   ;;                (println ">>> END"))))
   })

;; ===============================================
(comment

  (= [:nama :hadir :jumlahh] [:nama :hadir :jumlah])

  )
