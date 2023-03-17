(ns pedestal                                                          ;; <1>
  (:require [com.stuartsierra.component :as component]                ;; <2>
            [io.pedestal.http :as http]))                             ;; <3>

(defn test?
  [service-map]
  (= :test (:env service-map)))

(defrecord Pedestal [service-map                                      ;; <1>
                     service]                                         ;; <2>
  component/Lifecycle                                                 ;; <3>
  (start [this]
    (if service
      this
      (cond-> service-map                                             ;; <1>
        true                      http/create-server                  ;; <2>
        (not (test? service-map)) http/start                          ;; <3>
        true                      ((partial assoc this :service)))))  ;; <4>
  (stop [this]
    (when (and service (not (test? service-map)))                     ;; <1>
      (http/stop service))
    (assoc this :service nil)))                                       ;; <2>

(defn new-pedestal
  []
  (map->Pedestal {}))
