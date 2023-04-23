(ns handler.attendees
  (:require [db :as db]
            [schema.core :as sc]))

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
         {:status  200
          :headers {"Content-Type" "application/json"}
          :body    body})
       (catch Exception e
         (println "ERROR: " e)
         {:status 500
          :body   "Sudah ada yang menginput dengan nama ini, silahkan menggunakan nama lain"})))

;; === INTERCEPTOR FOR ERROR CHECKING ============
(def input-keys-check
  {:name  ::input-keys-check
   :enter (fn [context]
            (let [req      (get-in context [:request :json-params])
                  _        (println "ENTER REQ: " req)
                  req-keys (vec (keys req))
                  ]
              (if (= req-keys [:nama :hadir :jumlah])
                context
                (throw (AssertionError. "Input Keys Error, keys must be :nama, :hadir, and :jumlah")))))})

(def input-vals-check
  {:name  ::input-vals-check
   :enter (fn [context]
            (let [req        (get-in context [:request :json-params])
                  req-schema {:nama   (sc/pred (fn [x]
                                                 (println x)
                                                 (and
                                                  (string? x)
                                                  (not= 0 (count x)))))
                              :hadir  sc/Bool
                              :jumlah sc/Num}]
              (try (sc/validate req-schema req)
                   context
                   (catch Exception e
                     (println "SCHEMA ERR: " (.getMessage e))
                     (throw (AssertionError. "Terdapat Kesalahan pada Input"))))))})

;; ===============================================
(comment

  (= [:nama :hadir :jumlahh] [:nama :hadir :jumlah])

  (try (sc/validate (sc/pred (fn [x]
                               (println x)
                               (and
                                (string? x)
                                (not= 0 (count x)))))
                    "")
       (catch Exception e
         (println "ERR!!")))

  )
