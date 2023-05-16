(ns user
  (:require [clojure.tools.namespace.repl :as ns-tools]
            [com.stuartsierra.component.repl :as crepl]
            [server.system :as system]
            [handler.send-email :refer [print-something]]))

(ns-tools/set-refresh-dirs "src" "dev")

(crepl/set-init (constantly (system/new-system :dev)))

(defn start []
  (crepl/start))

(defn stop []
  (crepl/stop))

(defn reset []
  (stop)
  (ns-tools/refresh :after 'user/start))

(defn -main
  "user entry-point"
  [& args]
  (println "\nCreating your server...")
  (start)
  (print-something))
