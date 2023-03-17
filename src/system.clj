(ns system
  (:require [com.stuartsierra.component :as component]       ;; <1>
            ;; [com.stuartsierra.component.repl :refer [reset set-init start stop system]]      ;; <2>
            [io.pedestal.http :as http]                      ;; <3>
            [pedestal]                                       ;; <4>
            [routes]))                                       ;; <5>

(defn new-system
  [env]                                                      ;; <1>
  (component/system-map
   :service-map                                              ;; <2>
   {:env          env                                        ;; <3>
    ::http/routes routes/routes                              ;; <4>
    ::http/type   :jetty
    ::http/port   8890
    ::http/join?  false}

   :pedestal                                                 ;; <5>
   (component/using                                          ;; <6>
    (pedestal/new-pedestal)
    [:service-map])))

;; (set-init (constantly (new-system :prod)))                   ;; <1>
