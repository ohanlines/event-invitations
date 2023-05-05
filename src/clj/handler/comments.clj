(ns handler.comments
  (:require [db :as db]
            ))

(defn show-comments [request]
  (let [data     (db/show-comments)
        new-data (->> data
                      (map vals)
                      (map vec)
                      (mapv #(zipmap [:nama :comment] %)))]
    {:status 200
     :body   new-data}))

(comment
  (->> (db/show-comments)
       (map vals)
       (map vec)
       (mapv #(zipmap [:nama :comment] %)))

  )
