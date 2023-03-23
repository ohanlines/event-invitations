(ns app.core
  (:require [ajax.core :refer [GET]]
            [helix.core :refer [defnc $]]
            [helix.dom :as d]
            ["react-dom/client" :as dom]))

(defnc app []
  (d/div "COBA 123"))

(defn ^:export init []
  (let [root (dom/createRoot (js/document.getElementById "app"))]
    (.render root ($ app))
    (js/console.log "HALO 1")
    (js/console.log "HALO 2"))
  )

(comment

  (GET "http://localhost:8890/greet"
       {:handler (fn [response]
                   (js/console.log response))}
       )

  (js/console.log "HUHU")

  )
