(ns handler.attendees
  (:require [db :as db]
            [schema.core :as sc]
            [clojure.string :as cs]))

;; === INSERT DATA TO TABLE ======================
(defn insert-attendee [request]
  (try (let [body (get request :json-params)
             _    (println "BODY: " request)

             {:keys [nama hadir jumlah]} body

             insert (db/insert-to-attendees nama hadir jumlah)
             body   {:name              nama
                     :attend            hadir
                     :brought_attendees jumlah}]
         {:status  200
          :headers {"Content-Type" "application/json"}
          :body    body})
       (catch Exception e
         (println "ERROR: " e)
         {:status 500
          :body   "Sudah ada yang menginput dengan nama ini, silahkan menggunakan nama lain"})))

;; === INTERCEPTOR SCHEMA CHECKING ===============
(sc/defschema request-schema
  {(sc/required-key :nama)   (sc/pred (fn [x]
                                       (println x)
                                       (and
                                        (string? x)
                                        (not= 0 (count x)))))
   (sc/required-key :hadir)  sc/Bool
   (sc/required-key :jumlah) sc/Num})

(def input-schema-check
  {:name  ::input-keys-check
   :enter (fn [context]
            (let [req        (get-in context [:request :json-params])
                  _          (println "ENTER REQ: " req)
                  req-schema request-schema]
              (try (sc/validate req-schema req)
                   context
                   (catch Exception e
                     (let [error e]
                       (println "SCHEMA ERR: " (.getMessage error))
                       (if (cs/includes? error "missing-required-key")
                         (throw (AssertionError. "Input Keys Error, keys must be :nama, :hadir, and :jumlah"))
                         (throw (AssertionError. "Terdapat Kesalahan pada Input"))))))))})

;; ===============================================
(comment

  (try (sc/validate (sc/pred (fn [x]
                               (println x)
                               (and
                                (string? x)
                                (not= 0 (count x)))))
                    "")
       (catch Exception e
         (println "ERR!!")))

  )
