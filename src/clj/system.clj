(ns system
  (:require [com.stuartsierra.component :as component]
            ;; [com.stuartsierra.component.repl :refer [reset set-init start stop system]]
            [io.pedestal.http :as http]
            [pedestal]
            [routes]))

(defn new-system
  [env]
  (component/system-map
   :service-map
   {:env          env
    ::http/routes routes/routes
    ::http/type   :jetty
    ::http/port   8890
    ::http/join?  false}

   :pedestal
   (component/using
    (pedestal/new-pedestal)
    [:service-map])))

;; (set-init (constantly (new-system :prod)))