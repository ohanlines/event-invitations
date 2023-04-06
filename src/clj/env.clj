(ns env)

(defn env [k]
  (let [env (-> "env.edn"
                slurp
                read-string)]
    (env k)))
