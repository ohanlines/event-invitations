(ns db
  (:require [env :refer [env]]
            [utils :refer [generate-uuid]]
            [next.jdbc :as jdbc]
            [honey.sql :as sql]
            [honey.sql.helpers :refer [select from where insert-into values]]))

;; === DB SCHEMA =================================
(def my-db-schema
  {:dbtype   "mysql"
   :dbname   (env :db-name)
   :user     (env :db-username)
   :password (env :db-password)
   :host     (env :db-host)})

(def my-db (jdbc/get-datasource my-db-schema))

;; === EXECUTING ATTENDEES TABLE =================
(defn show-attendees []
  (jdbc/execute!
   my-db
   (sql/format
    (-> (select [:*])
        (from [:attendees])))))

(defn insert-to-attendees [name attend num-attend]
  (let [uuid (generate-uuid)]
    (jdbc/execute!
     my-db
     (sql/format
      (-> (insert-into :attendees)
          (values [{:id                uuid
                    :name              name
                    :attend            attend
                    :brought_attendees num-attend}]))))))

;; ===============================================
(comment
  (jdbc/execute!
   my-db
   (let [uuid    (generate-uuid)
         sql-str (str "insert into attendees(id, name, attend, brought_attendees) values('" uuid "', 'ohan', false, '1')")]
     [sql-str]))

  (jdbc/execute!
   my-db
   ["select * from attendees"])

  (jdbc/execute! my-db
                 (sql/format
                  (-> (select [:*])
                      (from [:attendees]))))

  (sql/format
   (-> (insert-into :attendees)
       (values [{:id                "dhy82r8b2fy"
                 :name              "ohan"
                 :attend            false
                 :brought_attendees 3}])))

  (insert-to-attendees "asti" "true" "2")

  (:attendees/id ((show-attendees) 0))

  )
