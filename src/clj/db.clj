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
    (-> (select :*)
        (from :attendees)))))

(defn show-comments []
  (jdbc/execute!
   my-db
   (sql/format
    (-> (select :name :comment)
        (from :attendees)
        (where [:<> :comment ""])))))

(defn insert-to-attendees [name attend num-attend comment]
  (let [uuid (generate-uuid)]
    (jdbc/execute!
     my-db
     (sql/format
      (-> (insert-into :attendees)
          (values [{:id                uuid
                    :name              name
                    :attend            attend
                    :brought_attendees num-attend
                    :comment           comment}]))))))

;; ===============================================
(comment
  (sql/format
   (-> (select :name)
       (from :attendees)
       (where [:name "is not null"])))

  (:attendees/id ((show-attendees) 0))

  (jdbc/execute!
   my-db
   (sql/format
    (-> (select :name :comment)
        (from :attendees)
        (where [:<> :comment ""]))))

  )
