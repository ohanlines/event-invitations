goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__40179){
var map__40180 = p__40179;
var map__40180__$1 = cljs.core.__destructure_map(map__40180);
var runtime = map__40180__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40180__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_40405 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_40405)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__40183 = runtime;
var G__40184 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_40405);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__40183,G__40184) : shadow.remote.runtime.shared.process.call(null,G__40183,G__40184));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__40186,res){
var map__40187 = p__40186;
var map__40187__$1 = cljs.core.__destructure_map(map__40187);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40187__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40187__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__40189 = res;
var G__40189__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40189,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__40189);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40189__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__40189__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__40197 = arguments.length;
switch (G__40197) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__40202,msg,handlers,timeout_after_ms){
var map__40204 = p__40202;
var map__40204__$1 = cljs.core.__destructure_map(map__40204);
var runtime = map__40204__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40204__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___40439 = arguments.length;
var i__5770__auto___40441 = (0);
while(true){
if((i__5770__auto___40441 < len__5769__auto___40439)){
args__5775__auto__.push((arguments[i__5770__auto___40441]));

var G__40443 = (i__5770__auto___40441 + (1));
i__5770__auto___40441 = G__40443;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__40209,ev,args){
var map__40210 = p__40209;
var map__40210__$1 = cljs.core.__destructure_map(map__40210);
var runtime = map__40210__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40210__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__40211 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__40214 = null;
var count__40215 = (0);
var i__40216 = (0);
while(true){
if((i__40216 < count__40215)){
var ext = chunk__40214.cljs$core$IIndexed$_nth$arity$2(null,i__40216);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__40448 = seq__40211;
var G__40449 = chunk__40214;
var G__40450 = count__40215;
var G__40451 = (i__40216 + (1));
seq__40211 = G__40448;
chunk__40214 = G__40449;
count__40215 = G__40450;
i__40216 = G__40451;
continue;
} else {
var G__40452 = seq__40211;
var G__40453 = chunk__40214;
var G__40454 = count__40215;
var G__40455 = (i__40216 + (1));
seq__40211 = G__40452;
chunk__40214 = G__40453;
count__40215 = G__40454;
i__40216 = G__40455;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40211);
if(temp__5804__auto__){
var seq__40211__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40211__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40211__$1);
var G__40457 = cljs.core.chunk_rest(seq__40211__$1);
var G__40458 = c__5568__auto__;
var G__40459 = cljs.core.count(c__5568__auto__);
var G__40460 = (0);
seq__40211 = G__40457;
chunk__40214 = G__40458;
count__40215 = G__40459;
i__40216 = G__40460;
continue;
} else {
var ext = cljs.core.first(seq__40211__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__40461 = cljs.core.next(seq__40211__$1);
var G__40462 = null;
var G__40463 = (0);
var G__40464 = (0);
seq__40211 = G__40461;
chunk__40214 = G__40462;
count__40215 = G__40463;
i__40216 = G__40464;
continue;
} else {
var G__40466 = cljs.core.next(seq__40211__$1);
var G__40467 = null;
var G__40468 = (0);
var G__40469 = (0);
seq__40211 = G__40466;
chunk__40214 = G__40467;
count__40215 = G__40468;
i__40216 = G__40469;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq40206){
var G__40207 = cljs.core.first(seq40206);
var seq40206__$1 = cljs.core.next(seq40206);
var G__40208 = cljs.core.first(seq40206__$1);
var seq40206__$2 = cljs.core.next(seq40206__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40207,G__40208,seq40206__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__40256,p__40257){
var map__40258 = p__40256;
var map__40258__$1 = cljs.core.__destructure_map(map__40258);
var runtime = map__40258__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40258__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__40259 = p__40257;
var map__40259__$1 = cljs.core.__destructure_map(map__40259);
var msg = map__40259__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40259__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__40262 = cljs.core.deref(state_ref);
var map__40262__$1 = cljs.core.__destructure_map(map__40262);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40262__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40262__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__40266,msg){
var map__40267 = p__40266;
var map__40267__$1 = cljs.core.__destructure_map(map__40267);
var runtime = map__40267__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40267__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__40276,key,p__40277){
var map__40278 = p__40276;
var map__40278__$1 = cljs.core.__destructure_map(map__40278);
var state = map__40278__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40278__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__40279 = p__40277;
var map__40279__$1 = cljs.core.__destructure_map(map__40279);
var spec = map__40279__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40279__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__40285,key,spec){
var map__40286 = p__40285;
var map__40286__$1 = cljs.core.__destructure_map(map__40286);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40286__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__40288_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__40288_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__40289_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__40289_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__40290_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__40290_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__40291_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__40291_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__40292_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__40292_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__40301,key){
var map__40303 = p__40301;
var map__40303__$1 = cljs.core.__destructure_map(map__40303);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40303__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__40305,msg){
var map__40306 = p__40305;
var map__40306__$1 = cljs.core.__destructure_map(map__40306);
var runtime = map__40306__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40306__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__40325,p__40326){
var map__40328 = p__40325;
var map__40328__$1 = cljs.core.__destructure_map(map__40328);
var runtime = map__40328__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40328__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__40329 = p__40326;
var map__40329__$1 = cljs.core.__destructure_map(map__40329);
var msg = map__40329__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40329__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40329__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__40337 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__40339 = null;
var count__40340 = (0);
var i__40341 = (0);
while(true){
if((i__40341 < count__40340)){
var map__40375 = chunk__40339.cljs$core$IIndexed$_nth$arity$2(null,i__40341);
var map__40375__$1 = cljs.core.__destructure_map(map__40375);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40375__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__40544 = seq__40337;
var G__40545 = chunk__40339;
var G__40546 = count__40340;
var G__40547 = (i__40341 + (1));
seq__40337 = G__40544;
chunk__40339 = G__40545;
count__40340 = G__40546;
i__40341 = G__40547;
continue;
} else {
var G__40548 = seq__40337;
var G__40549 = chunk__40339;
var G__40550 = count__40340;
var G__40551 = (i__40341 + (1));
seq__40337 = G__40548;
chunk__40339 = G__40549;
count__40340 = G__40550;
i__40341 = G__40551;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__40337);
if(temp__5804__auto__){
var seq__40337__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__40337__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__40337__$1);
var G__40555 = cljs.core.chunk_rest(seq__40337__$1);
var G__40556 = c__5568__auto__;
var G__40557 = cljs.core.count(c__5568__auto__);
var G__40558 = (0);
seq__40337 = G__40555;
chunk__40339 = G__40556;
count__40340 = G__40557;
i__40341 = G__40558;
continue;
} else {
var map__40382 = cljs.core.first(seq__40337__$1);
var map__40382__$1 = cljs.core.__destructure_map(map__40382);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40382__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__40560 = cljs.core.next(seq__40337__$1);
var G__40561 = null;
var G__40562 = (0);
var G__40563 = (0);
seq__40337 = G__40560;
chunk__40339 = G__40561;
count__40340 = G__40562;
i__40341 = G__40563;
continue;
} else {
var G__40564 = cljs.core.next(seq__40337__$1);
var G__40565 = null;
var G__40566 = (0);
var G__40567 = (0);
seq__40337 = G__40564;
chunk__40339 = G__40565;
count__40340 = G__40566;
i__40341 = G__40567;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
