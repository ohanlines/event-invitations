(ns app.core
  (:require [ajax.core :refer [GET]]))

(defn ^:export init []
  (js/console.log "HALO 1")
  (js/console.log "HALO 2"))

(comment

  (GET "http://localhost:8890/greet"
       {:handler (fn [response]
                   (js/console.log response))}
       )

  (js/console.log "HUHU")

  )
