goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__46603,p__46604){
var map__46605 = p__46603;
var map__46605__$1 = cljs.core.__destructure_map(map__46605);
var svc = map__46605__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46605__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46605__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46605__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__46606 = p__46604;
var map__46606__$1 = cljs.core.__destructure_map(map__46606);
var msg = map__46606__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46606__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46606__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46606__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46606__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__46639,p__46640){
var map__46648 = p__46639;
var map__46648__$1 = cljs.core.__destructure_map(map__46648);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46648__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__46649 = p__46640;
var map__46649__$1 = cljs.core.__destructure_map(map__46649);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46649__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__46663,p__46664){
var map__46665 = p__46663;
var map__46665__$1 = cljs.core.__destructure_map(map__46665);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46665__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46665__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__46666 = p__46664;
var map__46666__$1 = cljs.core.__destructure_map(map__46666);
var msg = map__46666__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__46666__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__46677,tid){
var map__46684 = p__46677;
var map__46684__$1 = cljs.core.__destructure_map(map__46684);
var svc = map__46684__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46684__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__46694 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__46695 = null;
var count__46696 = (0);
var i__46697 = (0);
while(true){
if((i__46697 < count__46696)){
var vec__46708 = chunk__46695.cljs$core$IIndexed$_nth$arity$2(null,i__46697);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46708,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46708,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__46730 = seq__46694;
var G__46731 = chunk__46695;
var G__46732 = count__46696;
var G__46733 = (i__46697 + (1));
seq__46694 = G__46730;
chunk__46695 = G__46731;
count__46696 = G__46732;
i__46697 = G__46733;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__46694);
if(temp__5804__auto__){
var seq__46694__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46694__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__46694__$1);
var G__46735 = cljs.core.chunk_rest(seq__46694__$1);
var G__46736 = c__5568__auto__;
var G__46737 = cljs.core.count(c__5568__auto__);
var G__46738 = (0);
seq__46694 = G__46735;
chunk__46695 = G__46736;
count__46696 = G__46737;
i__46697 = G__46738;
continue;
} else {
var vec__46713 = cljs.core.first(seq__46694__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46713,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46713,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__46739 = cljs.core.next(seq__46694__$1);
var G__46740 = null;
var G__46741 = (0);
var G__46742 = (0);
seq__46694 = G__46739;
chunk__46695 = G__46740;
count__46696 = G__46741;
i__46697 = G__46742;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__46685_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__46685_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__46686_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__46686_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__46687_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__46687_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__46688_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__46688_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__46718){
var map__46719 = p__46718;
var map__46719__$1 = cljs.core.__destructure_map(map__46719);
var svc = map__46719__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46719__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__46719__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
