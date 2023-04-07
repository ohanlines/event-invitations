(ns app.views.components
  (:require [reagent.core :as r]
            [ajax.core :refer [GET]]))

;; === EVENT LOCATION ============================
(def api-key (r/atom ""))

(GET "http://localhost:8890/env"
     {:handler (fn [response]
                 (let [key-str (response "gmaps-api-key")]
                   (swap! api-key #(str key-str))))})

(defn event-location []
  (let [src (str "https://www.google.com/maps/embed/v1/view?key=" @api-key "&center=40.712776,-74.005974&zoom=12")]
    [:iframe
     {:src          src
      :width        "600"
      :height       "450"
      :frame-border "0"
      :style        {:border "0"}}]))
