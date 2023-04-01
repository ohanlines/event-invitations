(ns app.core
  (:require [ajax.core :refer [GET]]
            [reagent.core :as r]
            [reagent.dom.client :as dom]
            [reitit.core :as rt]
            [reitit.frontend :as rf]
            [reitit.coercion.spec :as rcs]
            [reitit.frontend.easy :as rfe]
            [app.views.invite :refer [invite-page]]
            [app.views.home :refer [home-page]]
            ))

;; === INITIALIZE ROUTER =========================
(def routes
  [["/"
    {:name ::index
     :view home-page}]
   ["/invite"
    {:name ::invite
     :view invite-page}]])

(def router
  (rf/router
    routes
    {:data {:coercion rcs/coercion}}))

;; === SWITCHING PAGE USING REAGENT ATOM =========
(defonce match (r/atom nil))

(defn current-page []
  [:div
   (if @match
     (let [view (:view (:data @match))]
       [view @match]))])

;; === START RENDERING ===========================
(def root (dom/create-root (.getElementById js/document "app")))

(defn init []
  (rfe/start!
   router
   (fn [m] (reset! match m))
   {:use-fragment false})
  (dom/render root [current-page])
  )

(init)

;; ===============================================
(comment

  (GET "http://localhost:8890/greet"
       {:handler (fn [response]
                   (js/console.log response))}
       )

  (js/console.log "HUHU")

  ;; check atom changes after inserting url
  @match

  ;; check router
  (rt/match-by-path router "/invite/ohan")

  )
