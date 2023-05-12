(ns utils)

(defn generate-uuid []
  (.toString (java.util.UUID/randomUUID)))

(defn get-env [k]
  (let [env (-> "env.edn"
                slurp
                read-string)]
    (env k)))
