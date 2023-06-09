(defproject event-invitations "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url  "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.11.1"]

                 ;; server routing
                 [io.pedestal/pedestal.service "0.5.7"]
                 [io.pedestal/pedestal.route "0.5.7"]
                 [io.pedestal/pedestal.jetty "0.5.7"]
                 [com.stuartsierra/component "0.4.0"]
                 [org.slf4j/slf4j-simple "1.7.28"]
                 [com.stuartsierra/component.repl "0.2.0"]

                 ;; client routing
                 [reagent "1.2.0"]
                 [metosin/reitit "0.6.0"]
                 [metosin/reitit-spec "0.6.0"]
                 [metosin/reitit-frontend "0.6.0"]

                 ;; database
                 [com.github.seancorfield/next.jdbc "1.3.865"]
                 [com.github.seancorfield/honeysql "2.4.1011"]
                 [mysql/mysql-connector-java "8.0.32"]

                 ;; etc
                 [clj-pdf "2.6.3"]
                 [cheshire "5.11.0"]
                 [prismatic/schema "1.4.1"]
                 [com.draines/postal "2.0.5"]
                 [org.clojure/data.csv "1.0.1"]
                 [clojurewerkz/quartzite "2.1.0"]]
  :main ^:skip-aot user
  :target-path "target/%s"
  :source-paths ["src/clj" "dev"]
  :repl-options {:init-ns user}
  :aliases {"server" ["run" "-m" "user"]}
  :profiles {:uberjar {:aot      :all
                       :jvm-opts ["-Dclojure.compiler.direct-linking=true"]}
             :cljs    {:source-paths ["src/cljs"]
                       :dependencies [[com.taoensso/encore "3.54.0"]
                                      [thheller/shadow-cljs "2.22.4"]
                                      [cljs-ajax "0.8.4"]
                                      [lilactown/helix "0.1.10"]
                                      ]}})
