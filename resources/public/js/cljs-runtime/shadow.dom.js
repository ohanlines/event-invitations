goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_45038 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_45038(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_45043 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_45043(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__43528 = coll;
var G__43529 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__43528,G__43529) : shadow.dom.lazy_native_coll_seq.call(null,G__43528,G__43529));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__43559 = arguments.length;
switch (G__43559) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__43571 = arguments.length;
switch (G__43571) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__43584 = arguments.length;
switch (G__43584) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__43604 = arguments.length;
switch (G__43604) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__43631 = arguments.length;
switch (G__43631) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__43654 = arguments.length;
switch (G__43654) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e43674){if((e43674 instanceof Object)){
var e = e43674;
return console.log("didnt support attachEvent",el,e);
} else {
throw e43674;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__43687 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__43688 = null;
var count__43689 = (0);
var i__43690 = (0);
while(true){
if((i__43690 < count__43689)){
var el = chunk__43688.cljs$core$IIndexed$_nth$arity$2(null,i__43690);
var handler_45062__$1 = ((function (seq__43687,chunk__43688,count__43689,i__43690,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__43687,chunk__43688,count__43689,i__43690,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45062__$1);


var G__45063 = seq__43687;
var G__45064 = chunk__43688;
var G__45065 = count__43689;
var G__45066 = (i__43690 + (1));
seq__43687 = G__45063;
chunk__43688 = G__45064;
count__43689 = G__45065;
i__43690 = G__45066;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43687);
if(temp__5804__auto__){
var seq__43687__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43687__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__43687__$1);
var G__45067 = cljs.core.chunk_rest(seq__43687__$1);
var G__45068 = c__5568__auto__;
var G__45069 = cljs.core.count(c__5568__auto__);
var G__45070 = (0);
seq__43687 = G__45067;
chunk__43688 = G__45068;
count__43689 = G__45069;
i__43690 = G__45070;
continue;
} else {
var el = cljs.core.first(seq__43687__$1);
var handler_45071__$1 = ((function (seq__43687,chunk__43688,count__43689,i__43690,el,seq__43687__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__43687,chunk__43688,count__43689,i__43690,el,seq__43687__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_45071__$1);


var G__45072 = cljs.core.next(seq__43687__$1);
var G__45073 = null;
var G__45074 = (0);
var G__45075 = (0);
seq__43687 = G__45072;
chunk__43688 = G__45073;
count__43689 = G__45074;
i__43690 = G__45075;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__43752 = arguments.length;
switch (G__43752) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__43772 = cljs.core.seq(events);
var chunk__43773 = null;
var count__43774 = (0);
var i__43775 = (0);
while(true){
if((i__43775 < count__43774)){
var vec__43787 = chunk__43773.cljs$core$IIndexed$_nth$arity$2(null,i__43775);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43787,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43787,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45077 = seq__43772;
var G__45078 = chunk__43773;
var G__45079 = count__43774;
var G__45080 = (i__43775 + (1));
seq__43772 = G__45077;
chunk__43773 = G__45078;
count__43774 = G__45079;
i__43775 = G__45080;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43772);
if(temp__5804__auto__){
var seq__43772__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43772__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__43772__$1);
var G__45083 = cljs.core.chunk_rest(seq__43772__$1);
var G__45084 = c__5568__auto__;
var G__45085 = cljs.core.count(c__5568__auto__);
var G__45086 = (0);
seq__43772 = G__45083;
chunk__43773 = G__45084;
count__43774 = G__45085;
i__43775 = G__45086;
continue;
} else {
var vec__43793 = cljs.core.first(seq__43772__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43793,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43793,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__45090 = cljs.core.next(seq__43772__$1);
var G__45091 = null;
var G__45092 = (0);
var G__45093 = (0);
seq__43772 = G__45090;
chunk__43773 = G__45091;
count__43774 = G__45092;
i__43775 = G__45093;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__43799 = cljs.core.seq(styles);
var chunk__43800 = null;
var count__43801 = (0);
var i__43802 = (0);
while(true){
if((i__43802 < count__43801)){
var vec__43818 = chunk__43800.cljs$core$IIndexed$_nth$arity$2(null,i__43802);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43818,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43818,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45094 = seq__43799;
var G__45095 = chunk__43800;
var G__45096 = count__43801;
var G__45097 = (i__43802 + (1));
seq__43799 = G__45094;
chunk__43800 = G__45095;
count__43801 = G__45096;
i__43802 = G__45097;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__43799);
if(temp__5804__auto__){
var seq__43799__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__43799__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__43799__$1);
var G__45098 = cljs.core.chunk_rest(seq__43799__$1);
var G__45099 = c__5568__auto__;
var G__45100 = cljs.core.count(c__5568__auto__);
var G__45101 = (0);
seq__43799 = G__45098;
chunk__43800 = G__45099;
count__43801 = G__45100;
i__43802 = G__45101;
continue;
} else {
var vec__43833 = cljs.core.first(seq__43799__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43833,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43833,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__45102 = cljs.core.next(seq__43799__$1);
var G__45103 = null;
var G__45104 = (0);
var G__45105 = (0);
seq__43799 = G__45102;
chunk__43800 = G__45103;
count__43801 = G__45104;
i__43802 = G__45105;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__43845_45107 = key;
var G__43845_45108__$1 = (((G__43845_45107 instanceof cljs.core.Keyword))?G__43845_45107.fqn:null);
switch (G__43845_45108__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_45115 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_45115,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_45115,"aria-");
}
})())){
el.setAttribute(ks_45115,value);
} else {
(el[ks_45115] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__43899){
var map__43903 = p__43899;
var map__43903__$1 = cljs.core.__destructure_map(map__43903);
var props = map__43903__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43903__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__43906 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43906,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43906,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43906,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__43912 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__43912,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__43912;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__43921 = arguments.length;
switch (G__43921) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__43938){
var vec__43942 = p__43938;
var seq__43943 = cljs.core.seq(vec__43942);
var first__43944 = cljs.core.first(seq__43943);
var seq__43943__$1 = cljs.core.next(seq__43943);
var nn = first__43944;
var first__43944__$1 = cljs.core.first(seq__43943__$1);
var seq__43943__$2 = cljs.core.next(seq__43943__$1);
var np = first__43944__$1;
var nc = seq__43943__$2;
var node = vec__43942;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__43946 = nn;
var G__43947 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__43946,G__43947) : create_fn.call(null,G__43946,G__43947));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__43949 = nn;
var G__43950 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__43949,G__43950) : create_fn.call(null,G__43949,G__43950));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__43954 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43954,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43954,(1),null);
var seq__43958_45139 = cljs.core.seq(node_children);
var chunk__43959_45140 = null;
var count__43960_45141 = (0);
var i__43961_45142 = (0);
while(true){
if((i__43961_45142 < count__43960_45141)){
var child_struct_45143 = chunk__43959_45140.cljs$core$IIndexed$_nth$arity$2(null,i__43961_45142);
var children_45144 = shadow.dom.dom_node(child_struct_45143);
if(cljs.core.seq_QMARK_(children_45144)){
var seq__44051_45157 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45144));
var chunk__44053_45158 = null;
var count__44054_45159 = (0);
var i__44055_45160 = (0);
while(true){
if((i__44055_45160 < count__44054_45159)){
var child_45162 = chunk__44053_45158.cljs$core$IIndexed$_nth$arity$2(null,i__44055_45160);
if(cljs.core.truth_(child_45162)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45162);


var G__45163 = seq__44051_45157;
var G__45164 = chunk__44053_45158;
var G__45165 = count__44054_45159;
var G__45166 = (i__44055_45160 + (1));
seq__44051_45157 = G__45163;
chunk__44053_45158 = G__45164;
count__44054_45159 = G__45165;
i__44055_45160 = G__45166;
continue;
} else {
var G__45169 = seq__44051_45157;
var G__45170 = chunk__44053_45158;
var G__45171 = count__44054_45159;
var G__45172 = (i__44055_45160 + (1));
seq__44051_45157 = G__45169;
chunk__44053_45158 = G__45170;
count__44054_45159 = G__45171;
i__44055_45160 = G__45172;
continue;
}
} else {
var temp__5804__auto___45173 = cljs.core.seq(seq__44051_45157);
if(temp__5804__auto___45173){
var seq__44051_45174__$1 = temp__5804__auto___45173;
if(cljs.core.chunked_seq_QMARK_(seq__44051_45174__$1)){
var c__5568__auto___45175 = cljs.core.chunk_first(seq__44051_45174__$1);
var G__45176 = cljs.core.chunk_rest(seq__44051_45174__$1);
var G__45177 = c__5568__auto___45175;
var G__45178 = cljs.core.count(c__5568__auto___45175);
var G__45179 = (0);
seq__44051_45157 = G__45176;
chunk__44053_45158 = G__45177;
count__44054_45159 = G__45178;
i__44055_45160 = G__45179;
continue;
} else {
var child_45180 = cljs.core.first(seq__44051_45174__$1);
if(cljs.core.truth_(child_45180)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45180);


var G__45181 = cljs.core.next(seq__44051_45174__$1);
var G__45182 = null;
var G__45183 = (0);
var G__45184 = (0);
seq__44051_45157 = G__45181;
chunk__44053_45158 = G__45182;
count__44054_45159 = G__45183;
i__44055_45160 = G__45184;
continue;
} else {
var G__45185 = cljs.core.next(seq__44051_45174__$1);
var G__45186 = null;
var G__45187 = (0);
var G__45188 = (0);
seq__44051_45157 = G__45185;
chunk__44053_45158 = G__45186;
count__44054_45159 = G__45187;
i__44055_45160 = G__45188;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45144);
}


var G__45190 = seq__43958_45139;
var G__45191 = chunk__43959_45140;
var G__45192 = count__43960_45141;
var G__45193 = (i__43961_45142 + (1));
seq__43958_45139 = G__45190;
chunk__43959_45140 = G__45191;
count__43960_45141 = G__45192;
i__43961_45142 = G__45193;
continue;
} else {
var temp__5804__auto___45194 = cljs.core.seq(seq__43958_45139);
if(temp__5804__auto___45194){
var seq__43958_45195__$1 = temp__5804__auto___45194;
if(cljs.core.chunked_seq_QMARK_(seq__43958_45195__$1)){
var c__5568__auto___45196 = cljs.core.chunk_first(seq__43958_45195__$1);
var G__45197 = cljs.core.chunk_rest(seq__43958_45195__$1);
var G__45198 = c__5568__auto___45196;
var G__45199 = cljs.core.count(c__5568__auto___45196);
var G__45200 = (0);
seq__43958_45139 = G__45197;
chunk__43959_45140 = G__45198;
count__43960_45141 = G__45199;
i__43961_45142 = G__45200;
continue;
} else {
var child_struct_45205 = cljs.core.first(seq__43958_45195__$1);
var children_45206 = shadow.dom.dom_node(child_struct_45205);
if(cljs.core.seq_QMARK_(children_45206)){
var seq__44071_45207 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_45206));
var chunk__44073_45208 = null;
var count__44074_45209 = (0);
var i__44075_45210 = (0);
while(true){
if((i__44075_45210 < count__44074_45209)){
var child_45211 = chunk__44073_45208.cljs$core$IIndexed$_nth$arity$2(null,i__44075_45210);
if(cljs.core.truth_(child_45211)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45211);


var G__45212 = seq__44071_45207;
var G__45213 = chunk__44073_45208;
var G__45214 = count__44074_45209;
var G__45215 = (i__44075_45210 + (1));
seq__44071_45207 = G__45212;
chunk__44073_45208 = G__45213;
count__44074_45209 = G__45214;
i__44075_45210 = G__45215;
continue;
} else {
var G__45216 = seq__44071_45207;
var G__45217 = chunk__44073_45208;
var G__45218 = count__44074_45209;
var G__45219 = (i__44075_45210 + (1));
seq__44071_45207 = G__45216;
chunk__44073_45208 = G__45217;
count__44074_45209 = G__45218;
i__44075_45210 = G__45219;
continue;
}
} else {
var temp__5804__auto___45220__$1 = cljs.core.seq(seq__44071_45207);
if(temp__5804__auto___45220__$1){
var seq__44071_45221__$1 = temp__5804__auto___45220__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44071_45221__$1)){
var c__5568__auto___45222 = cljs.core.chunk_first(seq__44071_45221__$1);
var G__45223 = cljs.core.chunk_rest(seq__44071_45221__$1);
var G__45224 = c__5568__auto___45222;
var G__45225 = cljs.core.count(c__5568__auto___45222);
var G__45226 = (0);
seq__44071_45207 = G__45223;
chunk__44073_45208 = G__45224;
count__44074_45209 = G__45225;
i__44075_45210 = G__45226;
continue;
} else {
var child_45227 = cljs.core.first(seq__44071_45221__$1);
if(cljs.core.truth_(child_45227)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_45227);


var G__45228 = cljs.core.next(seq__44071_45221__$1);
var G__45229 = null;
var G__45230 = (0);
var G__45231 = (0);
seq__44071_45207 = G__45228;
chunk__44073_45208 = G__45229;
count__44074_45209 = G__45230;
i__44075_45210 = G__45231;
continue;
} else {
var G__45232 = cljs.core.next(seq__44071_45221__$1);
var G__45233 = null;
var G__45234 = (0);
var G__45235 = (0);
seq__44071_45207 = G__45232;
chunk__44073_45208 = G__45233;
count__44074_45209 = G__45234;
i__44075_45210 = G__45235;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_45206);
}


var G__45236 = cljs.core.next(seq__43958_45195__$1);
var G__45237 = null;
var G__45238 = (0);
var G__45239 = (0);
seq__43958_45139 = G__45236;
chunk__43959_45140 = G__45237;
count__43960_45141 = G__45238;
i__43961_45142 = G__45239;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__44174 = cljs.core.seq(node);
var chunk__44175 = null;
var count__44176 = (0);
var i__44177 = (0);
while(true){
if((i__44177 < count__44176)){
var n = chunk__44175.cljs$core$IIndexed$_nth$arity$2(null,i__44177);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45243 = seq__44174;
var G__45244 = chunk__44175;
var G__45245 = count__44176;
var G__45246 = (i__44177 + (1));
seq__44174 = G__45243;
chunk__44175 = G__45244;
count__44176 = G__45245;
i__44177 = G__45246;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44174);
if(temp__5804__auto__){
var seq__44174__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44174__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44174__$1);
var G__45248 = cljs.core.chunk_rest(seq__44174__$1);
var G__45249 = c__5568__auto__;
var G__45250 = cljs.core.count(c__5568__auto__);
var G__45251 = (0);
seq__44174 = G__45248;
chunk__44175 = G__45249;
count__44176 = G__45250;
i__44177 = G__45251;
continue;
} else {
var n = cljs.core.first(seq__44174__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__45252 = cljs.core.next(seq__44174__$1);
var G__45253 = null;
var G__45254 = (0);
var G__45255 = (0);
seq__44174 = G__45252;
chunk__44175 = G__45253;
count__44176 = G__45254;
i__44177 = G__45255;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__44203 = arguments.length;
switch (G__44203) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__44215 = arguments.length;
switch (G__44215) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__44236 = arguments.length;
switch (G__44236) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45289 = arguments.length;
var i__5770__auto___45290 = (0);
while(true){
if((i__5770__auto___45290 < len__5769__auto___45289)){
args__5775__auto__.push((arguments[i__5770__auto___45290]));

var G__45291 = (i__5770__auto___45290 + (1));
i__5770__auto___45290 = G__45291;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__44277_45297 = cljs.core.seq(nodes);
var chunk__44278_45298 = null;
var count__44279_45299 = (0);
var i__44280_45300 = (0);
while(true){
if((i__44280_45300 < count__44279_45299)){
var node_45301 = chunk__44278_45298.cljs$core$IIndexed$_nth$arity$2(null,i__44280_45300);
fragment.appendChild(shadow.dom._to_dom(node_45301));


var G__45302 = seq__44277_45297;
var G__45303 = chunk__44278_45298;
var G__45304 = count__44279_45299;
var G__45305 = (i__44280_45300 + (1));
seq__44277_45297 = G__45302;
chunk__44278_45298 = G__45303;
count__44279_45299 = G__45304;
i__44280_45300 = G__45305;
continue;
} else {
var temp__5804__auto___45306 = cljs.core.seq(seq__44277_45297);
if(temp__5804__auto___45306){
var seq__44277_45307__$1 = temp__5804__auto___45306;
if(cljs.core.chunked_seq_QMARK_(seq__44277_45307__$1)){
var c__5568__auto___45308 = cljs.core.chunk_first(seq__44277_45307__$1);
var G__45309 = cljs.core.chunk_rest(seq__44277_45307__$1);
var G__45310 = c__5568__auto___45308;
var G__45311 = cljs.core.count(c__5568__auto___45308);
var G__45312 = (0);
seq__44277_45297 = G__45309;
chunk__44278_45298 = G__45310;
count__44279_45299 = G__45311;
i__44280_45300 = G__45312;
continue;
} else {
var node_45313 = cljs.core.first(seq__44277_45307__$1);
fragment.appendChild(shadow.dom._to_dom(node_45313));


var G__45314 = cljs.core.next(seq__44277_45307__$1);
var G__45315 = null;
var G__45316 = (0);
var G__45317 = (0);
seq__44277_45297 = G__45314;
chunk__44278_45298 = G__45315;
count__44279_45299 = G__45316;
i__44280_45300 = G__45317;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq44272){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq44272));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__44298_45326 = cljs.core.seq(scripts);
var chunk__44299_45327 = null;
var count__44300_45328 = (0);
var i__44301_45329 = (0);
while(true){
if((i__44301_45329 < count__44300_45328)){
var vec__44318_45330 = chunk__44299_45327.cljs$core$IIndexed$_nth$arity$2(null,i__44301_45329);
var script_tag_45331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44318_45330,(0),null);
var script_body_45332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44318_45330,(1),null);
eval(script_body_45332);


var G__45339 = seq__44298_45326;
var G__45340 = chunk__44299_45327;
var G__45341 = count__44300_45328;
var G__45342 = (i__44301_45329 + (1));
seq__44298_45326 = G__45339;
chunk__44299_45327 = G__45340;
count__44300_45328 = G__45341;
i__44301_45329 = G__45342;
continue;
} else {
var temp__5804__auto___45343 = cljs.core.seq(seq__44298_45326);
if(temp__5804__auto___45343){
var seq__44298_45344__$1 = temp__5804__auto___45343;
if(cljs.core.chunked_seq_QMARK_(seq__44298_45344__$1)){
var c__5568__auto___45345 = cljs.core.chunk_first(seq__44298_45344__$1);
var G__45346 = cljs.core.chunk_rest(seq__44298_45344__$1);
var G__45347 = c__5568__auto___45345;
var G__45348 = cljs.core.count(c__5568__auto___45345);
var G__45349 = (0);
seq__44298_45326 = G__45346;
chunk__44299_45327 = G__45347;
count__44300_45328 = G__45348;
i__44301_45329 = G__45349;
continue;
} else {
var vec__44332_45350 = cljs.core.first(seq__44298_45344__$1);
var script_tag_45351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44332_45350,(0),null);
var script_body_45352 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44332_45350,(1),null);
eval(script_body_45352);


var G__45353 = cljs.core.next(seq__44298_45344__$1);
var G__45354 = null;
var G__45355 = (0);
var G__45356 = (0);
seq__44298_45326 = G__45353;
chunk__44299_45327 = G__45354;
count__44300_45328 = G__45355;
i__44301_45329 = G__45356;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__44347){
var vec__44348 = p__44347;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44348,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44348,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__44361 = arguments.length;
switch (G__44361) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__44389 = cljs.core.seq(style_keys);
var chunk__44390 = null;
var count__44391 = (0);
var i__44392 = (0);
while(true){
if((i__44392 < count__44391)){
var it = chunk__44390.cljs$core$IIndexed$_nth$arity$2(null,i__44392);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45363 = seq__44389;
var G__45364 = chunk__44390;
var G__45365 = count__44391;
var G__45366 = (i__44392 + (1));
seq__44389 = G__45363;
chunk__44390 = G__45364;
count__44391 = G__45365;
i__44392 = G__45366;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__44389);
if(temp__5804__auto__){
var seq__44389__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44389__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__44389__$1);
var G__45368 = cljs.core.chunk_rest(seq__44389__$1);
var G__45369 = c__5568__auto__;
var G__45370 = cljs.core.count(c__5568__auto__);
var G__45371 = (0);
seq__44389 = G__45368;
chunk__44390 = G__45369;
count__44391 = G__45370;
i__44392 = G__45371;
continue;
} else {
var it = cljs.core.first(seq__44389__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__45376 = cljs.core.next(seq__44389__$1);
var G__45377 = null;
var G__45378 = (0);
var G__45379 = (0);
seq__44389 = G__45376;
chunk__44390 = G__45377;
count__44391 = G__45378;
i__44392 = G__45379;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k44412,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__44436 = k44412;
var G__44436__$1 = (((G__44436 instanceof cljs.core.Keyword))?G__44436.fqn:null);
switch (G__44436__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44412,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__44448){
var vec__44450 = p__44448;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44450,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44450,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44411){
var self__ = this;
var G__44411__$1 = this;
return (new cljs.core.RecordIter((0),G__44411__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44413,other44414){
var self__ = this;
var this44413__$1 = this;
return (((!((other44414 == null)))) && ((((this44413__$1.constructor === other44414.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44413__$1.x,other44414.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44413__$1.y,other44414.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44413__$1.__extmap,other44414.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k44412){
var self__ = this;
var this__5350__auto____$1 = this;
var G__44560 = k44412;
var G__44560__$1 = (((G__44560 instanceof cljs.core.Keyword))?G__44560.fqn:null);
switch (G__44560__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k44412);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__44411){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__44563 = cljs.core.keyword_identical_QMARK_;
var expr__44564 = k__5352__auto__;
if(cljs.core.truth_((pred__44563.cljs$core$IFn$_invoke$arity$2 ? pred__44563.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__44564) : pred__44563.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__44564)))){
return (new shadow.dom.Coordinate(G__44411,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44563.cljs$core$IFn$_invoke$arity$2 ? pred__44563.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__44564) : pred__44563.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__44564)))){
return (new shadow.dom.Coordinate(self__.x,G__44411,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__44411),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__44411){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__44411,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__44420){
var extmap__5385__auto__ = (function (){var G__44594 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44420,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__44420)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44594);
} else {
return G__44594;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__44420),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__44420),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k44611,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__44623 = k44611;
var G__44623__$1 = (((G__44623 instanceof cljs.core.Keyword))?G__44623.fqn:null);
switch (G__44623__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k44611,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__44625){
var vec__44626 = p__44625;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44626,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44626,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__44610){
var self__ = this;
var G__44610__$1 = this;
return (new cljs.core.RecordIter((0),G__44610__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this44612,other44613){
var self__ = this;
var this44612__$1 = this;
return (((!((other44613 == null)))) && ((((this44612__$1.constructor === other44613.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44612__$1.w,other44613.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44612__$1.h,other44613.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this44612__$1.__extmap,other44613.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k44611){
var self__ = this;
var this__5350__auto____$1 = this;
var G__44674 = k44611;
var G__44674__$1 = (((G__44674 instanceof cljs.core.Keyword))?G__44674.fqn:null);
switch (G__44674__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k44611);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__44610){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__44678 = cljs.core.keyword_identical_QMARK_;
var expr__44679 = k__5352__auto__;
if(cljs.core.truth_((pred__44678.cljs$core$IFn$_invoke$arity$2 ? pred__44678.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__44679) : pred__44678.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__44679)))){
return (new shadow.dom.Size(G__44610,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__44678.cljs$core$IFn$_invoke$arity$2 ? pred__44678.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__44679) : pred__44678.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__44679)))){
return (new shadow.dom.Size(self__.w,G__44610,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__44610),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__44610){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__44610,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__44615){
var extmap__5385__auto__ = (function (){var G__44709 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__44615,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__44615)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__44709);
} else {
return G__44709;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__44615),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__44615),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__45502 = (i + (1));
var G__45503 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__45502;
ret = G__45503;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__44764){
var vec__44765 = p__44764;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44765,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44765,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__44779 = arguments.length;
switch (G__44779) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__45543 = ps;
var G__45544 = (i + (1));
el__$1 = G__45543;
i = G__45544;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__44826 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44826,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44826,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44826,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__44832_45547 = cljs.core.seq(props);
var chunk__44833_45548 = null;
var count__44834_45549 = (0);
var i__44835_45550 = (0);
while(true){
if((i__44835_45550 < count__44834_45549)){
var vec__44858_45551 = chunk__44833_45548.cljs$core$IIndexed$_nth$arity$2(null,i__44835_45550);
var k_45552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44858_45551,(0),null);
var v_45553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44858_45551,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_45552);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45552),v_45553);


var G__45555 = seq__44832_45547;
var G__45556 = chunk__44833_45548;
var G__45557 = count__44834_45549;
var G__45558 = (i__44835_45550 + (1));
seq__44832_45547 = G__45555;
chunk__44833_45548 = G__45556;
count__44834_45549 = G__45557;
i__44835_45550 = G__45558;
continue;
} else {
var temp__5804__auto___45560 = cljs.core.seq(seq__44832_45547);
if(temp__5804__auto___45560){
var seq__44832_45561__$1 = temp__5804__auto___45560;
if(cljs.core.chunked_seq_QMARK_(seq__44832_45561__$1)){
var c__5568__auto___45562 = cljs.core.chunk_first(seq__44832_45561__$1);
var G__45565 = cljs.core.chunk_rest(seq__44832_45561__$1);
var G__45567 = c__5568__auto___45562;
var G__45569 = cljs.core.count(c__5568__auto___45562);
var G__45570 = (0);
seq__44832_45547 = G__45565;
chunk__44833_45548 = G__45567;
count__44834_45549 = G__45569;
i__44835_45550 = G__45570;
continue;
} else {
var vec__44867_45571 = cljs.core.first(seq__44832_45561__$1);
var k_45572 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44867_45571,(0),null);
var v_45573 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44867_45571,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_45572);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_45572),v_45573);


var G__45574 = cljs.core.next(seq__44832_45561__$1);
var G__45575 = null;
var G__45576 = (0);
var G__45577 = (0);
seq__44832_45547 = G__45574;
chunk__44833_45548 = G__45575;
count__44834_45549 = G__45576;
i__44835_45550 = G__45577;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__44907 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44907,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44907,(1),null);
var seq__44910_45586 = cljs.core.seq(node_children);
var chunk__44912_45587 = null;
var count__44913_45588 = (0);
var i__44914_45589 = (0);
while(true){
if((i__44914_45589 < count__44913_45588)){
var child_struct_45590 = chunk__44912_45587.cljs$core$IIndexed$_nth$arity$2(null,i__44914_45589);
if((!((child_struct_45590 == null)))){
if(typeof child_struct_45590 === 'string'){
var text_45594 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_45594),child_struct_45590].join(''));
} else {
var children_45595 = shadow.dom.svg_node(child_struct_45590);
if(cljs.core.seq_QMARK_(children_45595)){
var seq__44955_45596 = cljs.core.seq(children_45595);
var chunk__44957_45597 = null;
var count__44958_45598 = (0);
var i__44959_45599 = (0);
while(true){
if((i__44959_45599 < count__44958_45598)){
var child_45600 = chunk__44957_45597.cljs$core$IIndexed$_nth$arity$2(null,i__44959_45599);
if(cljs.core.truth_(child_45600)){
node.appendChild(child_45600);


var G__45601 = seq__44955_45596;
var G__45602 = chunk__44957_45597;
var G__45603 = count__44958_45598;
var G__45604 = (i__44959_45599 + (1));
seq__44955_45596 = G__45601;
chunk__44957_45597 = G__45602;
count__44958_45598 = G__45603;
i__44959_45599 = G__45604;
continue;
} else {
var G__45606 = seq__44955_45596;
var G__45607 = chunk__44957_45597;
var G__45608 = count__44958_45598;
var G__45609 = (i__44959_45599 + (1));
seq__44955_45596 = G__45606;
chunk__44957_45597 = G__45607;
count__44958_45598 = G__45608;
i__44959_45599 = G__45609;
continue;
}
} else {
var temp__5804__auto___45610 = cljs.core.seq(seq__44955_45596);
if(temp__5804__auto___45610){
var seq__44955_45611__$1 = temp__5804__auto___45610;
if(cljs.core.chunked_seq_QMARK_(seq__44955_45611__$1)){
var c__5568__auto___45613 = cljs.core.chunk_first(seq__44955_45611__$1);
var G__45614 = cljs.core.chunk_rest(seq__44955_45611__$1);
var G__45615 = c__5568__auto___45613;
var G__45616 = cljs.core.count(c__5568__auto___45613);
var G__45617 = (0);
seq__44955_45596 = G__45614;
chunk__44957_45597 = G__45615;
count__44958_45598 = G__45616;
i__44959_45599 = G__45617;
continue;
} else {
var child_45618 = cljs.core.first(seq__44955_45611__$1);
if(cljs.core.truth_(child_45618)){
node.appendChild(child_45618);


var G__45620 = cljs.core.next(seq__44955_45611__$1);
var G__45621 = null;
var G__45622 = (0);
var G__45623 = (0);
seq__44955_45596 = G__45620;
chunk__44957_45597 = G__45621;
count__44958_45598 = G__45622;
i__44959_45599 = G__45623;
continue;
} else {
var G__45624 = cljs.core.next(seq__44955_45611__$1);
var G__45625 = null;
var G__45626 = (0);
var G__45627 = (0);
seq__44955_45596 = G__45624;
chunk__44957_45597 = G__45625;
count__44958_45598 = G__45626;
i__44959_45599 = G__45627;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_45595);
}
}


var G__45633 = seq__44910_45586;
var G__45634 = chunk__44912_45587;
var G__45635 = count__44913_45588;
var G__45636 = (i__44914_45589 + (1));
seq__44910_45586 = G__45633;
chunk__44912_45587 = G__45634;
count__44913_45588 = G__45635;
i__44914_45589 = G__45636;
continue;
} else {
var G__45637 = seq__44910_45586;
var G__45638 = chunk__44912_45587;
var G__45639 = count__44913_45588;
var G__45640 = (i__44914_45589 + (1));
seq__44910_45586 = G__45637;
chunk__44912_45587 = G__45638;
count__44913_45588 = G__45639;
i__44914_45589 = G__45640;
continue;
}
} else {
var temp__5804__auto___45641 = cljs.core.seq(seq__44910_45586);
if(temp__5804__auto___45641){
var seq__44910_45642__$1 = temp__5804__auto___45641;
if(cljs.core.chunked_seq_QMARK_(seq__44910_45642__$1)){
var c__5568__auto___45648 = cljs.core.chunk_first(seq__44910_45642__$1);
var G__45649 = cljs.core.chunk_rest(seq__44910_45642__$1);
var G__45650 = c__5568__auto___45648;
var G__45651 = cljs.core.count(c__5568__auto___45648);
var G__45652 = (0);
seq__44910_45586 = G__45649;
chunk__44912_45587 = G__45650;
count__44913_45588 = G__45651;
i__44914_45589 = G__45652;
continue;
} else {
var child_struct_45658 = cljs.core.first(seq__44910_45642__$1);
if((!((child_struct_45658 == null)))){
if(typeof child_struct_45658 === 'string'){
var text_45659 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_45659),child_struct_45658].join(''));
} else {
var children_45660 = shadow.dom.svg_node(child_struct_45658);
if(cljs.core.seq_QMARK_(children_45660)){
var seq__44961_45666 = cljs.core.seq(children_45660);
var chunk__44963_45667 = null;
var count__44964_45668 = (0);
var i__44965_45669 = (0);
while(true){
if((i__44965_45669 < count__44964_45668)){
var child_45673 = chunk__44963_45667.cljs$core$IIndexed$_nth$arity$2(null,i__44965_45669);
if(cljs.core.truth_(child_45673)){
node.appendChild(child_45673);


var G__45678 = seq__44961_45666;
var G__45679 = chunk__44963_45667;
var G__45680 = count__44964_45668;
var G__45681 = (i__44965_45669 + (1));
seq__44961_45666 = G__45678;
chunk__44963_45667 = G__45679;
count__44964_45668 = G__45680;
i__44965_45669 = G__45681;
continue;
} else {
var G__45682 = seq__44961_45666;
var G__45683 = chunk__44963_45667;
var G__45684 = count__44964_45668;
var G__45685 = (i__44965_45669 + (1));
seq__44961_45666 = G__45682;
chunk__44963_45667 = G__45683;
count__44964_45668 = G__45684;
i__44965_45669 = G__45685;
continue;
}
} else {
var temp__5804__auto___45686__$1 = cljs.core.seq(seq__44961_45666);
if(temp__5804__auto___45686__$1){
var seq__44961_45687__$1 = temp__5804__auto___45686__$1;
if(cljs.core.chunked_seq_QMARK_(seq__44961_45687__$1)){
var c__5568__auto___45689 = cljs.core.chunk_first(seq__44961_45687__$1);
var G__45690 = cljs.core.chunk_rest(seq__44961_45687__$1);
var G__45691 = c__5568__auto___45689;
var G__45692 = cljs.core.count(c__5568__auto___45689);
var G__45693 = (0);
seq__44961_45666 = G__45690;
chunk__44963_45667 = G__45691;
count__44964_45668 = G__45692;
i__44965_45669 = G__45693;
continue;
} else {
var child_45694 = cljs.core.first(seq__44961_45687__$1);
if(cljs.core.truth_(child_45694)){
node.appendChild(child_45694);


var G__45699 = cljs.core.next(seq__44961_45687__$1);
var G__45700 = null;
var G__45701 = (0);
var G__45702 = (0);
seq__44961_45666 = G__45699;
chunk__44963_45667 = G__45700;
count__44964_45668 = G__45701;
i__44965_45669 = G__45702;
continue;
} else {
var G__45704 = cljs.core.next(seq__44961_45687__$1);
var G__45705 = null;
var G__45706 = (0);
var G__45707 = (0);
seq__44961_45666 = G__45704;
chunk__44963_45667 = G__45705;
count__44964_45668 = G__45706;
i__44965_45669 = G__45707;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_45660);
}
}


var G__45708 = cljs.core.next(seq__44910_45642__$1);
var G__45709 = null;
var G__45710 = (0);
var G__45711 = (0);
seq__44910_45586 = G__45708;
chunk__44912_45587 = G__45709;
count__44913_45588 = G__45710;
i__44914_45589 = G__45711;
continue;
} else {
var G__45715 = cljs.core.next(seq__44910_45642__$1);
var G__45716 = null;
var G__45717 = (0);
var G__45718 = (0);
seq__44910_45586 = G__45715;
chunk__44912_45587 = G__45716;
count__44913_45588 = G__45717;
i__44914_45589 = G__45718;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___45724 = arguments.length;
var i__5770__auto___45725 = (0);
while(true){
if((i__5770__auto___45725 < len__5769__auto___45724)){
args__5775__auto__.push((arguments[i__5770__auto___45725]));

var G__45727 = (i__5770__auto___45725 + (1));
i__5770__auto___45725 = G__45727;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq44971){
var G__44972 = cljs.core.first(seq44971);
var seq44971__$1 = cljs.core.next(seq44971);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__44972,seq44971__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__44998 = arguments.length;
switch (G__44998) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__39991__auto___45741 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39992__auto__ = (function (){var switch__39722__auto__ = (function (state_45017){
var state_val_45018 = (state_45017[(1)]);
if((state_val_45018 === (1))){
var state_45017__$1 = state_45017;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_45017__$1,(2),once_or_cleanup);
} else {
if((state_val_45018 === (2))){
var inst_45014 = (state_45017[(2)]);
var inst_45015 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_45017__$1 = (function (){var statearr_45020 = state_45017;
(statearr_45020[(7)] = inst_45014);

return statearr_45020;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_45017__$1,inst_45015);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__39723__auto__ = null;
var shadow$dom$state_machine__39723__auto____0 = (function (){
var statearr_45021 = [null,null,null,null,null,null,null,null];
(statearr_45021[(0)] = shadow$dom$state_machine__39723__auto__);

(statearr_45021[(1)] = (1));

return statearr_45021;
});
var shadow$dom$state_machine__39723__auto____1 = (function (state_45017){
while(true){
var ret_value__39724__auto__ = (function (){try{while(true){
var result__39725__auto__ = switch__39722__auto__(state_45017);
if(cljs.core.keyword_identical_QMARK_(result__39725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39725__auto__;
}
break;
}
}catch (e45022){if((e45022 instanceof Object)){
var ex__39726__auto__ = e45022;
var statearr_45023_45764 = state_45017;
(statearr_45023_45764[(5)] = ex__39726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_45017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45022;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45768 = state_45017;
state_45017 = G__45768;
continue;
} else {
return ret_value__39724__auto__;
}
break;
}
});
shadow$dom$state_machine__39723__auto__ = function(state_45017){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__39723__auto____0.call(this);
case 1:
return shadow$dom$state_machine__39723__auto____1.call(this,state_45017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__39723__auto____0;
shadow$dom$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__39723__auto____1;
return shadow$dom$state_machine__39723__auto__;
})()
})();
var state__39993__auto__ = (function (){var statearr_45024 = f__39992__auto__();
(statearr_45024[(6)] = c__39991__auto___45741);

return statearr_45024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39993__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
