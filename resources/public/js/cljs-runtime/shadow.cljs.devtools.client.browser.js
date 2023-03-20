goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___47607 = arguments.length;
var i__5770__auto___47608 = (0);
while(true){
if((i__5770__auto___47608 < len__5769__auto___47607)){
args__5775__auto__.push((arguments[i__5770__auto___47608]));

var G__47609 = (i__5770__auto___47608 + (1));
i__5770__auto___47608 = G__47609;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq47120){
var G__47121 = cljs.core.first(seq47120);
var seq47120__$1 = cljs.core.next(seq47120);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47121,seq47120__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__47140 = cljs.core.seq(sources);
var chunk__47141 = null;
var count__47142 = (0);
var i__47143 = (0);
while(true){
if((i__47143 < count__47142)){
var map__47168 = chunk__47141.cljs$core$IIndexed$_nth$arity$2(null,i__47143);
var map__47168__$1 = cljs.core.__destructure_map(map__47168);
var src = map__47168__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47168__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47168__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47168__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47168__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47173){var e_47610 = e47173;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_47610);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_47610.message)].join('')));
}

var G__47611 = seq__47140;
var G__47612 = chunk__47141;
var G__47613 = count__47142;
var G__47614 = (i__47143 + (1));
seq__47140 = G__47611;
chunk__47141 = G__47612;
count__47142 = G__47613;
i__47143 = G__47614;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47140);
if(temp__5804__auto__){
var seq__47140__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47140__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47140__$1);
var G__47615 = cljs.core.chunk_rest(seq__47140__$1);
var G__47616 = c__5568__auto__;
var G__47617 = cljs.core.count(c__5568__auto__);
var G__47618 = (0);
seq__47140 = G__47615;
chunk__47141 = G__47616;
count__47142 = G__47617;
i__47143 = G__47618;
continue;
} else {
var map__47177 = cljs.core.first(seq__47140__$1);
var map__47177__$1 = cljs.core.__destructure_map(map__47177);
var src = map__47177__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47177__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47177__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47177__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47177__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e47178){var e_47619 = e47178;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_47619);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_47619.message)].join('')));
}

var G__47620 = cljs.core.next(seq__47140__$1);
var G__47621 = null;
var G__47622 = (0);
var G__47623 = (0);
seq__47140 = G__47620;
chunk__47141 = G__47621;
count__47142 = G__47622;
i__47143 = G__47623;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__47188 = cljs.core.seq(js_requires);
var chunk__47189 = null;
var count__47190 = (0);
var i__47191 = (0);
while(true){
if((i__47191 < count__47190)){
var js_ns = chunk__47189.cljs$core$IIndexed$_nth$arity$2(null,i__47191);
var require_str_47624 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_47624);


var G__47625 = seq__47188;
var G__47626 = chunk__47189;
var G__47627 = count__47190;
var G__47628 = (i__47191 + (1));
seq__47188 = G__47625;
chunk__47189 = G__47626;
count__47190 = G__47627;
i__47191 = G__47628;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47188);
if(temp__5804__auto__){
var seq__47188__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47188__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47188__$1);
var G__47629 = cljs.core.chunk_rest(seq__47188__$1);
var G__47630 = c__5568__auto__;
var G__47631 = cljs.core.count(c__5568__auto__);
var G__47632 = (0);
seq__47188 = G__47629;
chunk__47189 = G__47630;
count__47190 = G__47631;
i__47191 = G__47632;
continue;
} else {
var js_ns = cljs.core.first(seq__47188__$1);
var require_str_47633 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_47633);


var G__47634 = cljs.core.next(seq__47188__$1);
var G__47635 = null;
var G__47636 = (0);
var G__47637 = (0);
seq__47188 = G__47634;
chunk__47189 = G__47635;
count__47190 = G__47636;
i__47191 = G__47637;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__47219){
var map__47222 = p__47219;
var map__47222__$1 = cljs.core.__destructure_map(map__47222);
var msg = map__47222__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47222__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47222__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47224(s__47225){
return (new cljs.core.LazySeq(null,(function (){
var s__47225__$1 = s__47225;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__47225__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__47233 = cljs.core.first(xs__6360__auto__);
var map__47233__$1 = cljs.core.__destructure_map(map__47233);
var src = map__47233__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47233__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47233__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__47225__$1,map__47233,map__47233__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__47222,map__47222__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47224_$_iter__47226(s__47227){
return (new cljs.core.LazySeq(null,((function (s__47225__$1,map__47233,map__47233__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__47222,map__47222__$1,msg,info,reload_info){
return (function (){
var s__47227__$1 = s__47227;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__47227__$1);
if(temp__5804__auto____$1){
var s__47227__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__47227__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__47227__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__47229 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__47228 = (0);
while(true){
if((i__47228 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__47228);
cljs.core.chunk_append(b__47229,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__47638 = (i__47228 + (1));
i__47228 = G__47638;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__47229),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47224_$_iter__47226(cljs.core.chunk_rest(s__47227__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__47229),null);
}
} else {
var warning = cljs.core.first(s__47227__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47224_$_iter__47226(cljs.core.rest(s__47227__$2)));
}
} else {
return null;
}
break;
}
});})(s__47225__$1,map__47233,map__47233__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__47222,map__47222__$1,msg,info,reload_info))
,null,null));
});})(s__47225__$1,map__47233,map__47233__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__47222,map__47222__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__47224(cljs.core.rest(s__47225__$1)));
} else {
var G__47639 = cljs.core.rest(s__47225__$1);
s__47225__$1 = G__47639;
continue;
}
} else {
var G__47640 = cljs.core.rest(s__47225__$1);
s__47225__$1 = G__47640;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__47246_47641 = cljs.core.seq(warnings);
var chunk__47247_47642 = null;
var count__47248_47643 = (0);
var i__47249_47644 = (0);
while(true){
if((i__47249_47644 < count__47248_47643)){
var map__47269_47645 = chunk__47247_47642.cljs$core$IIndexed$_nth$arity$2(null,i__47249_47644);
var map__47269_47646__$1 = cljs.core.__destructure_map(map__47269_47645);
var w_47647 = map__47269_47646__$1;
var msg_47648__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47269_47646__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_47649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47269_47646__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_47650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47269_47646__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_47651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47269_47646__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_47651)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_47649),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_47650),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_47648__$1)].join(''));


var G__47652 = seq__47246_47641;
var G__47653 = chunk__47247_47642;
var G__47654 = count__47248_47643;
var G__47655 = (i__47249_47644 + (1));
seq__47246_47641 = G__47652;
chunk__47247_47642 = G__47653;
count__47248_47643 = G__47654;
i__47249_47644 = G__47655;
continue;
} else {
var temp__5804__auto___47656 = cljs.core.seq(seq__47246_47641);
if(temp__5804__auto___47656){
var seq__47246_47657__$1 = temp__5804__auto___47656;
if(cljs.core.chunked_seq_QMARK_(seq__47246_47657__$1)){
var c__5568__auto___47658 = cljs.core.chunk_first(seq__47246_47657__$1);
var G__47659 = cljs.core.chunk_rest(seq__47246_47657__$1);
var G__47660 = c__5568__auto___47658;
var G__47661 = cljs.core.count(c__5568__auto___47658);
var G__47662 = (0);
seq__47246_47641 = G__47659;
chunk__47247_47642 = G__47660;
count__47248_47643 = G__47661;
i__47249_47644 = G__47662;
continue;
} else {
var map__47273_47663 = cljs.core.first(seq__47246_47657__$1);
var map__47273_47664__$1 = cljs.core.__destructure_map(map__47273_47663);
var w_47665 = map__47273_47664__$1;
var msg_47666__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47273_47664__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_47667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47273_47664__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_47668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47273_47664__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_47669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47273_47664__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_47669)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_47667),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_47668),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_47666__$1)].join(''));


var G__47670 = cljs.core.next(seq__47246_47657__$1);
var G__47671 = null;
var G__47672 = (0);
var G__47673 = (0);
seq__47246_47641 = G__47670;
chunk__47247_47642 = G__47671;
count__47248_47643 = G__47672;
i__47249_47644 = G__47673;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__47217_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__47217_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__47303){
var map__47304 = p__47303;
var map__47304__$1 = cljs.core.__destructure_map(map__47304);
var msg = map__47304__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47304__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47304__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__47305 = cljs.core.seq(updates);
var chunk__47307 = null;
var count__47308 = (0);
var i__47309 = (0);
while(true){
if((i__47309 < count__47308)){
var path = chunk__47307.cljs$core$IIndexed$_nth$arity$2(null,i__47309);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__47481_47674 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__47485_47675 = null;
var count__47486_47676 = (0);
var i__47487_47677 = (0);
while(true){
if((i__47487_47677 < count__47486_47676)){
var node_47678 = chunk__47485_47675.cljs$core$IIndexed$_nth$arity$2(null,i__47487_47677);
if(cljs.core.not(node_47678.shadow$old)){
var path_match_47679 = shadow.cljs.devtools.client.browser.match_paths(node_47678.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47679)){
var new_link_47680 = (function (){var G__47513 = node_47678.cloneNode(true);
G__47513.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47679),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47513;
})();
(node_47678.shadow$old = true);

(new_link_47680.onload = ((function (seq__47481_47674,chunk__47485_47675,count__47486_47676,i__47487_47677,seq__47305,chunk__47307,count__47308,i__47309,new_link_47680,path_match_47679,node_47678,path,map__47304,map__47304__$1,msg,updates,reload_info){
return (function (e){
var seq__47514_47681 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47516_47682 = null;
var count__47517_47683 = (0);
var i__47518_47684 = (0);
while(true){
if((i__47518_47684 < count__47517_47683)){
var map__47522_47685 = chunk__47516_47682.cljs$core$IIndexed$_nth$arity$2(null,i__47518_47684);
var map__47522_47686__$1 = cljs.core.__destructure_map(map__47522_47685);
var task_47687 = map__47522_47686__$1;
var fn_str_47688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47522_47686__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47522_47686__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47690 = goog.getObjectByName(fn_str_47688,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47689)].join(''));

(fn_obj_47690.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47690.cljs$core$IFn$_invoke$arity$2(path,new_link_47680) : fn_obj_47690.call(null,path,new_link_47680));


var G__47691 = seq__47514_47681;
var G__47692 = chunk__47516_47682;
var G__47693 = count__47517_47683;
var G__47694 = (i__47518_47684 + (1));
seq__47514_47681 = G__47691;
chunk__47516_47682 = G__47692;
count__47517_47683 = G__47693;
i__47518_47684 = G__47694;
continue;
} else {
var temp__5804__auto___47695 = cljs.core.seq(seq__47514_47681);
if(temp__5804__auto___47695){
var seq__47514_47696__$1 = temp__5804__auto___47695;
if(cljs.core.chunked_seq_QMARK_(seq__47514_47696__$1)){
var c__5568__auto___47697 = cljs.core.chunk_first(seq__47514_47696__$1);
var G__47698 = cljs.core.chunk_rest(seq__47514_47696__$1);
var G__47699 = c__5568__auto___47697;
var G__47700 = cljs.core.count(c__5568__auto___47697);
var G__47701 = (0);
seq__47514_47681 = G__47698;
chunk__47516_47682 = G__47699;
count__47517_47683 = G__47700;
i__47518_47684 = G__47701;
continue;
} else {
var map__47523_47702 = cljs.core.first(seq__47514_47696__$1);
var map__47523_47703__$1 = cljs.core.__destructure_map(map__47523_47702);
var task_47704 = map__47523_47703__$1;
var fn_str_47705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47523_47703__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47523_47703__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47707 = goog.getObjectByName(fn_str_47705,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47706)].join(''));

(fn_obj_47707.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47707.cljs$core$IFn$_invoke$arity$2(path,new_link_47680) : fn_obj_47707.call(null,path,new_link_47680));


var G__47708 = cljs.core.next(seq__47514_47696__$1);
var G__47709 = null;
var G__47710 = (0);
var G__47711 = (0);
seq__47514_47681 = G__47708;
chunk__47516_47682 = G__47709;
count__47517_47683 = G__47710;
i__47518_47684 = G__47711;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47678);
});})(seq__47481_47674,chunk__47485_47675,count__47486_47676,i__47487_47677,seq__47305,chunk__47307,count__47308,i__47309,new_link_47680,path_match_47679,node_47678,path,map__47304,map__47304__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47679], 0));

goog.dom.insertSiblingAfter(new_link_47680,node_47678);


var G__47712 = seq__47481_47674;
var G__47713 = chunk__47485_47675;
var G__47714 = count__47486_47676;
var G__47715 = (i__47487_47677 + (1));
seq__47481_47674 = G__47712;
chunk__47485_47675 = G__47713;
count__47486_47676 = G__47714;
i__47487_47677 = G__47715;
continue;
} else {
var G__47716 = seq__47481_47674;
var G__47717 = chunk__47485_47675;
var G__47718 = count__47486_47676;
var G__47719 = (i__47487_47677 + (1));
seq__47481_47674 = G__47716;
chunk__47485_47675 = G__47717;
count__47486_47676 = G__47718;
i__47487_47677 = G__47719;
continue;
}
} else {
var G__47720 = seq__47481_47674;
var G__47721 = chunk__47485_47675;
var G__47722 = count__47486_47676;
var G__47723 = (i__47487_47677 + (1));
seq__47481_47674 = G__47720;
chunk__47485_47675 = G__47721;
count__47486_47676 = G__47722;
i__47487_47677 = G__47723;
continue;
}
} else {
var temp__5804__auto___47724 = cljs.core.seq(seq__47481_47674);
if(temp__5804__auto___47724){
var seq__47481_47725__$1 = temp__5804__auto___47724;
if(cljs.core.chunked_seq_QMARK_(seq__47481_47725__$1)){
var c__5568__auto___47726 = cljs.core.chunk_first(seq__47481_47725__$1);
var G__47727 = cljs.core.chunk_rest(seq__47481_47725__$1);
var G__47728 = c__5568__auto___47726;
var G__47729 = cljs.core.count(c__5568__auto___47726);
var G__47730 = (0);
seq__47481_47674 = G__47727;
chunk__47485_47675 = G__47728;
count__47486_47676 = G__47729;
i__47487_47677 = G__47730;
continue;
} else {
var node_47731 = cljs.core.first(seq__47481_47725__$1);
if(cljs.core.not(node_47731.shadow$old)){
var path_match_47732 = shadow.cljs.devtools.client.browser.match_paths(node_47731.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47732)){
var new_link_47733 = (function (){var G__47524 = node_47731.cloneNode(true);
G__47524.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47732),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47524;
})();
(node_47731.shadow$old = true);

(new_link_47733.onload = ((function (seq__47481_47674,chunk__47485_47675,count__47486_47676,i__47487_47677,seq__47305,chunk__47307,count__47308,i__47309,new_link_47733,path_match_47732,node_47731,seq__47481_47725__$1,temp__5804__auto___47724,path,map__47304,map__47304__$1,msg,updates,reload_info){
return (function (e){
var seq__47525_47734 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47527_47735 = null;
var count__47528_47736 = (0);
var i__47529_47737 = (0);
while(true){
if((i__47529_47737 < count__47528_47736)){
var map__47533_47738 = chunk__47527_47735.cljs$core$IIndexed$_nth$arity$2(null,i__47529_47737);
var map__47533_47739__$1 = cljs.core.__destructure_map(map__47533_47738);
var task_47740 = map__47533_47739__$1;
var fn_str_47741 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47533_47739__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47742 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47533_47739__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47743 = goog.getObjectByName(fn_str_47741,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47742)].join(''));

(fn_obj_47743.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47743.cljs$core$IFn$_invoke$arity$2(path,new_link_47733) : fn_obj_47743.call(null,path,new_link_47733));


var G__47744 = seq__47525_47734;
var G__47745 = chunk__47527_47735;
var G__47746 = count__47528_47736;
var G__47747 = (i__47529_47737 + (1));
seq__47525_47734 = G__47744;
chunk__47527_47735 = G__47745;
count__47528_47736 = G__47746;
i__47529_47737 = G__47747;
continue;
} else {
var temp__5804__auto___47748__$1 = cljs.core.seq(seq__47525_47734);
if(temp__5804__auto___47748__$1){
var seq__47525_47749__$1 = temp__5804__auto___47748__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47525_47749__$1)){
var c__5568__auto___47750 = cljs.core.chunk_first(seq__47525_47749__$1);
var G__47751 = cljs.core.chunk_rest(seq__47525_47749__$1);
var G__47752 = c__5568__auto___47750;
var G__47753 = cljs.core.count(c__5568__auto___47750);
var G__47754 = (0);
seq__47525_47734 = G__47751;
chunk__47527_47735 = G__47752;
count__47528_47736 = G__47753;
i__47529_47737 = G__47754;
continue;
} else {
var map__47534_47755 = cljs.core.first(seq__47525_47749__$1);
var map__47534_47756__$1 = cljs.core.__destructure_map(map__47534_47755);
var task_47757 = map__47534_47756__$1;
var fn_str_47758 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47534_47756__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47534_47756__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47760 = goog.getObjectByName(fn_str_47758,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47759)].join(''));

(fn_obj_47760.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47760.cljs$core$IFn$_invoke$arity$2(path,new_link_47733) : fn_obj_47760.call(null,path,new_link_47733));


var G__47761 = cljs.core.next(seq__47525_47749__$1);
var G__47762 = null;
var G__47763 = (0);
var G__47764 = (0);
seq__47525_47734 = G__47761;
chunk__47527_47735 = G__47762;
count__47528_47736 = G__47763;
i__47529_47737 = G__47764;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47731);
});})(seq__47481_47674,chunk__47485_47675,count__47486_47676,i__47487_47677,seq__47305,chunk__47307,count__47308,i__47309,new_link_47733,path_match_47732,node_47731,seq__47481_47725__$1,temp__5804__auto___47724,path,map__47304,map__47304__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47732], 0));

goog.dom.insertSiblingAfter(new_link_47733,node_47731);


var G__47765 = cljs.core.next(seq__47481_47725__$1);
var G__47766 = null;
var G__47767 = (0);
var G__47768 = (0);
seq__47481_47674 = G__47765;
chunk__47485_47675 = G__47766;
count__47486_47676 = G__47767;
i__47487_47677 = G__47768;
continue;
} else {
var G__47769 = cljs.core.next(seq__47481_47725__$1);
var G__47770 = null;
var G__47771 = (0);
var G__47772 = (0);
seq__47481_47674 = G__47769;
chunk__47485_47675 = G__47770;
count__47486_47676 = G__47771;
i__47487_47677 = G__47772;
continue;
}
} else {
var G__47773 = cljs.core.next(seq__47481_47725__$1);
var G__47774 = null;
var G__47775 = (0);
var G__47776 = (0);
seq__47481_47674 = G__47773;
chunk__47485_47675 = G__47774;
count__47486_47676 = G__47775;
i__47487_47677 = G__47776;
continue;
}
}
} else {
}
}
break;
}


var G__47777 = seq__47305;
var G__47778 = chunk__47307;
var G__47779 = count__47308;
var G__47780 = (i__47309 + (1));
seq__47305 = G__47777;
chunk__47307 = G__47778;
count__47308 = G__47779;
i__47309 = G__47780;
continue;
} else {
var G__47781 = seq__47305;
var G__47782 = chunk__47307;
var G__47783 = count__47308;
var G__47784 = (i__47309 + (1));
seq__47305 = G__47781;
chunk__47307 = G__47782;
count__47308 = G__47783;
i__47309 = G__47784;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__47305);
if(temp__5804__auto__){
var seq__47305__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47305__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__47305__$1);
var G__47785 = cljs.core.chunk_rest(seq__47305__$1);
var G__47786 = c__5568__auto__;
var G__47787 = cljs.core.count(c__5568__auto__);
var G__47788 = (0);
seq__47305 = G__47785;
chunk__47307 = G__47786;
count__47308 = G__47787;
i__47309 = G__47788;
continue;
} else {
var path = cljs.core.first(seq__47305__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__47535_47789 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__47539_47790 = null;
var count__47540_47791 = (0);
var i__47541_47792 = (0);
while(true){
if((i__47541_47792 < count__47540_47791)){
var node_47793 = chunk__47539_47790.cljs$core$IIndexed$_nth$arity$2(null,i__47541_47792);
if(cljs.core.not(node_47793.shadow$old)){
var path_match_47794 = shadow.cljs.devtools.client.browser.match_paths(node_47793.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47794)){
var new_link_47795 = (function (){var G__47567 = node_47793.cloneNode(true);
G__47567.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47794),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47567;
})();
(node_47793.shadow$old = true);

(new_link_47795.onload = ((function (seq__47535_47789,chunk__47539_47790,count__47540_47791,i__47541_47792,seq__47305,chunk__47307,count__47308,i__47309,new_link_47795,path_match_47794,node_47793,path,seq__47305__$1,temp__5804__auto__,map__47304,map__47304__$1,msg,updates,reload_info){
return (function (e){
var seq__47568_47796 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47570_47797 = null;
var count__47571_47798 = (0);
var i__47572_47799 = (0);
while(true){
if((i__47572_47799 < count__47571_47798)){
var map__47576_47800 = chunk__47570_47797.cljs$core$IIndexed$_nth$arity$2(null,i__47572_47799);
var map__47576_47801__$1 = cljs.core.__destructure_map(map__47576_47800);
var task_47802 = map__47576_47801__$1;
var fn_str_47803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47576_47801__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47576_47801__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47805 = goog.getObjectByName(fn_str_47803,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47804)].join(''));

(fn_obj_47805.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47805.cljs$core$IFn$_invoke$arity$2(path,new_link_47795) : fn_obj_47805.call(null,path,new_link_47795));


var G__47806 = seq__47568_47796;
var G__47807 = chunk__47570_47797;
var G__47808 = count__47571_47798;
var G__47809 = (i__47572_47799 + (1));
seq__47568_47796 = G__47806;
chunk__47570_47797 = G__47807;
count__47571_47798 = G__47808;
i__47572_47799 = G__47809;
continue;
} else {
var temp__5804__auto___47810__$1 = cljs.core.seq(seq__47568_47796);
if(temp__5804__auto___47810__$1){
var seq__47568_47811__$1 = temp__5804__auto___47810__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47568_47811__$1)){
var c__5568__auto___47812 = cljs.core.chunk_first(seq__47568_47811__$1);
var G__47813 = cljs.core.chunk_rest(seq__47568_47811__$1);
var G__47814 = c__5568__auto___47812;
var G__47815 = cljs.core.count(c__5568__auto___47812);
var G__47816 = (0);
seq__47568_47796 = G__47813;
chunk__47570_47797 = G__47814;
count__47571_47798 = G__47815;
i__47572_47799 = G__47816;
continue;
} else {
var map__47577_47817 = cljs.core.first(seq__47568_47811__$1);
var map__47577_47818__$1 = cljs.core.__destructure_map(map__47577_47817);
var task_47819 = map__47577_47818__$1;
var fn_str_47820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47577_47818__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47821 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47577_47818__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47822 = goog.getObjectByName(fn_str_47820,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47821)].join(''));

(fn_obj_47822.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47822.cljs$core$IFn$_invoke$arity$2(path,new_link_47795) : fn_obj_47822.call(null,path,new_link_47795));


var G__47823 = cljs.core.next(seq__47568_47811__$1);
var G__47824 = null;
var G__47825 = (0);
var G__47826 = (0);
seq__47568_47796 = G__47823;
chunk__47570_47797 = G__47824;
count__47571_47798 = G__47825;
i__47572_47799 = G__47826;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47793);
});})(seq__47535_47789,chunk__47539_47790,count__47540_47791,i__47541_47792,seq__47305,chunk__47307,count__47308,i__47309,new_link_47795,path_match_47794,node_47793,path,seq__47305__$1,temp__5804__auto__,map__47304,map__47304__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47794], 0));

goog.dom.insertSiblingAfter(new_link_47795,node_47793);


var G__47827 = seq__47535_47789;
var G__47828 = chunk__47539_47790;
var G__47829 = count__47540_47791;
var G__47830 = (i__47541_47792 + (1));
seq__47535_47789 = G__47827;
chunk__47539_47790 = G__47828;
count__47540_47791 = G__47829;
i__47541_47792 = G__47830;
continue;
} else {
var G__47831 = seq__47535_47789;
var G__47832 = chunk__47539_47790;
var G__47833 = count__47540_47791;
var G__47834 = (i__47541_47792 + (1));
seq__47535_47789 = G__47831;
chunk__47539_47790 = G__47832;
count__47540_47791 = G__47833;
i__47541_47792 = G__47834;
continue;
}
} else {
var G__47835 = seq__47535_47789;
var G__47836 = chunk__47539_47790;
var G__47837 = count__47540_47791;
var G__47838 = (i__47541_47792 + (1));
seq__47535_47789 = G__47835;
chunk__47539_47790 = G__47836;
count__47540_47791 = G__47837;
i__47541_47792 = G__47838;
continue;
}
} else {
var temp__5804__auto___47839__$1 = cljs.core.seq(seq__47535_47789);
if(temp__5804__auto___47839__$1){
var seq__47535_47840__$1 = temp__5804__auto___47839__$1;
if(cljs.core.chunked_seq_QMARK_(seq__47535_47840__$1)){
var c__5568__auto___47841 = cljs.core.chunk_first(seq__47535_47840__$1);
var G__47842 = cljs.core.chunk_rest(seq__47535_47840__$1);
var G__47843 = c__5568__auto___47841;
var G__47844 = cljs.core.count(c__5568__auto___47841);
var G__47845 = (0);
seq__47535_47789 = G__47842;
chunk__47539_47790 = G__47843;
count__47540_47791 = G__47844;
i__47541_47792 = G__47845;
continue;
} else {
var node_47846 = cljs.core.first(seq__47535_47840__$1);
if(cljs.core.not(node_47846.shadow$old)){
var path_match_47847 = shadow.cljs.devtools.client.browser.match_paths(node_47846.getAttribute("href"),path);
if(cljs.core.truth_(path_match_47847)){
var new_link_47848 = (function (){var G__47578 = node_47846.cloneNode(true);
G__47578.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_47847),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__47578;
})();
(node_47846.shadow$old = true);

(new_link_47848.onload = ((function (seq__47535_47789,chunk__47539_47790,count__47540_47791,i__47541_47792,seq__47305,chunk__47307,count__47308,i__47309,new_link_47848,path_match_47847,node_47846,seq__47535_47840__$1,temp__5804__auto___47839__$1,path,seq__47305__$1,temp__5804__auto__,map__47304,map__47304__$1,msg,updates,reload_info){
return (function (e){
var seq__47579_47849 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__47581_47850 = null;
var count__47582_47851 = (0);
var i__47583_47852 = (0);
while(true){
if((i__47583_47852 < count__47582_47851)){
var map__47587_47853 = chunk__47581_47850.cljs$core$IIndexed$_nth$arity$2(null,i__47583_47852);
var map__47587_47854__$1 = cljs.core.__destructure_map(map__47587_47853);
var task_47855 = map__47587_47854__$1;
var fn_str_47856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47587_47854__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47857 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47587_47854__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47858 = goog.getObjectByName(fn_str_47856,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47857)].join(''));

(fn_obj_47858.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47858.cljs$core$IFn$_invoke$arity$2(path,new_link_47848) : fn_obj_47858.call(null,path,new_link_47848));


var G__47859 = seq__47579_47849;
var G__47860 = chunk__47581_47850;
var G__47861 = count__47582_47851;
var G__47862 = (i__47583_47852 + (1));
seq__47579_47849 = G__47859;
chunk__47581_47850 = G__47860;
count__47582_47851 = G__47861;
i__47583_47852 = G__47862;
continue;
} else {
var temp__5804__auto___47863__$2 = cljs.core.seq(seq__47579_47849);
if(temp__5804__auto___47863__$2){
var seq__47579_47864__$1 = temp__5804__auto___47863__$2;
if(cljs.core.chunked_seq_QMARK_(seq__47579_47864__$1)){
var c__5568__auto___47865 = cljs.core.chunk_first(seq__47579_47864__$1);
var G__47866 = cljs.core.chunk_rest(seq__47579_47864__$1);
var G__47867 = c__5568__auto___47865;
var G__47868 = cljs.core.count(c__5568__auto___47865);
var G__47869 = (0);
seq__47579_47849 = G__47866;
chunk__47581_47850 = G__47867;
count__47582_47851 = G__47868;
i__47583_47852 = G__47869;
continue;
} else {
var map__47588_47870 = cljs.core.first(seq__47579_47864__$1);
var map__47588_47871__$1 = cljs.core.__destructure_map(map__47588_47870);
var task_47872 = map__47588_47871__$1;
var fn_str_47873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47588_47871__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_47874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47588_47871__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_47875 = goog.getObjectByName(fn_str_47873,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_47874)].join(''));

(fn_obj_47875.cljs$core$IFn$_invoke$arity$2 ? fn_obj_47875.cljs$core$IFn$_invoke$arity$2(path,new_link_47848) : fn_obj_47875.call(null,path,new_link_47848));


var G__47876 = cljs.core.next(seq__47579_47864__$1);
var G__47877 = null;
var G__47878 = (0);
var G__47879 = (0);
seq__47579_47849 = G__47876;
chunk__47581_47850 = G__47877;
count__47582_47851 = G__47878;
i__47583_47852 = G__47879;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_47846);
});})(seq__47535_47789,chunk__47539_47790,count__47540_47791,i__47541_47792,seq__47305,chunk__47307,count__47308,i__47309,new_link_47848,path_match_47847,node_47846,seq__47535_47840__$1,temp__5804__auto___47839__$1,path,seq__47305__$1,temp__5804__auto__,map__47304,map__47304__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_47847], 0));

goog.dom.insertSiblingAfter(new_link_47848,node_47846);


var G__47880 = cljs.core.next(seq__47535_47840__$1);
var G__47881 = null;
var G__47882 = (0);
var G__47883 = (0);
seq__47535_47789 = G__47880;
chunk__47539_47790 = G__47881;
count__47540_47791 = G__47882;
i__47541_47792 = G__47883;
continue;
} else {
var G__47884 = cljs.core.next(seq__47535_47840__$1);
var G__47885 = null;
var G__47886 = (0);
var G__47887 = (0);
seq__47535_47789 = G__47884;
chunk__47539_47790 = G__47885;
count__47540_47791 = G__47886;
i__47541_47792 = G__47887;
continue;
}
} else {
var G__47888 = cljs.core.next(seq__47535_47840__$1);
var G__47889 = null;
var G__47890 = (0);
var G__47891 = (0);
seq__47535_47789 = G__47888;
chunk__47539_47790 = G__47889;
count__47540_47791 = G__47890;
i__47541_47792 = G__47891;
continue;
}
}
} else {
}
}
break;
}


var G__47892 = cljs.core.next(seq__47305__$1);
var G__47893 = null;
var G__47894 = (0);
var G__47895 = (0);
seq__47305 = G__47892;
chunk__47307 = G__47893;
count__47308 = G__47894;
i__47309 = G__47895;
continue;
} else {
var G__47896 = cljs.core.next(seq__47305__$1);
var G__47897 = null;
var G__47898 = (0);
var G__47899 = (0);
seq__47305 = G__47896;
chunk__47307 = G__47897;
count__47308 = G__47898;
i__47309 = G__47899;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__47589){
var map__47590 = p__47589;
var map__47590__$1 = cljs.core.__destructure_map(map__47590);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47590__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__47591,done,error){
var map__47592 = p__47591;
var map__47592__$1 = cljs.core.__destructure_map(map__47592);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47592__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__47593,done,error){
var map__47594 = p__47593;
var map__47594__$1 = cljs.core.__destructure_map(map__47594);
var msg = map__47594__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47594__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47594__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47594__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__47595){
var map__47596 = p__47595;
var map__47596__$1 = cljs.core.__destructure_map(map__47596);
var src = map__47596__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47596__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__47597 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__47597) : done.call(null,G__47597));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__47598){
var map__47599 = p__47598;
var map__47599__$1 = cljs.core.__destructure_map(map__47599);
var msg__$1 = map__47599__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47599__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e47600){var ex = e47600;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__47601){
var map__47602 = p__47601;
var map__47602__$1 = cljs.core.__destructure_map(map__47602);
var env = map__47602__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47602__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__47603){
var map__47604 = p__47603;
var map__47604__$1 = cljs.core.__destructure_map(map__47604);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47604__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47604__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__47605){
var map__47606 = p__47605;
var map__47606__$1 = cljs.core.__destructure_map(map__47606);
var svc = map__47606__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47606__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
