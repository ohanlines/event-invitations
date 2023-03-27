(ns app.core
  (:require [ajax.core :refer [GET]]
            [helix.core :refer [defnc $]]
            [helix.dom :as d]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            [reitit.coercion.spec :as rcs]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            ["react-dom/client" :as dom]))

(defn home-page []
  [:div
   [:h2 "WELCOME TO HOME"]
   (js/console.log "HOME")])

(defn about-page []
  [:div
   [:h2 "WELCOME TO ABOUT"]
   (js/console.log "ABOUT")])

(def routes
  [["/"
    {:name ::index
     :view home-page}]
   ["/about"
    {:name ::about
     :view about-page}]])

(def router
  (rf/router
    routes
    {:data {:coercion rcs/coercion}}))

;; == ratom
(defonce match (r/atom nil))

(defn current-page []
  [:div
   [:ul
    [:li [:a {:href (rfe/href ::frontpage)} "Frontpage"]]
    [:li [:a {:href (rfe/href ::about)} "About"]]
    ]
   (if @match
     (let [view (:view (:data @match))]
       [view @match]))
   ])

;; == init
(defn init []
  (rfe/start!
   router
   (fn [m] (reset! match m))
   {:use-fragment true})
  (rdom/render [current-page] (.getElementById js/document "app")))

(init)
;; (defnc app []
;;   (d/div "COBA 123"))


;; (defn ^:export init []
;;   (let [root (dom/createRoot (js/document.getElementById "app"))]
;;     (.render root ($ app))
;;     (js/console.log "HALO 1")
;;     (js/console.log "HALO 2"))
;;   )

(comment

  (GET "http://localhost:8890/greet"
       {:handler (fn [response]
                   (js/console.log response))}
       )

  (js/console.log "HUHU")

  )
