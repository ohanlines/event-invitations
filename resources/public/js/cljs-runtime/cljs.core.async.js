goog.provide('cljs.core.async');

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40074 = (function (f,blockable,meta40075){
this.f = f;
this.blockable = blockable;
this.meta40075 = meta40075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40076,meta40075__$1){
var self__ = this;
var _40076__$1 = this;
return (new cljs.core.async.t_cljs$core$async40074(self__.f,self__.blockable,meta40075__$1));
}));

(cljs.core.async.t_cljs$core$async40074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40076){
var self__ = this;
var _40076__$1 = this;
return self__.meta40075;
}));

(cljs.core.async.t_cljs$core$async40074.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40074.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40074.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async40074.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async40074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta40075","meta40075",-776030781,null)], null);
}));

(cljs.core.async.t_cljs$core$async40074.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40074.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40074");

(cljs.core.async.t_cljs$core$async40074.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async40074");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40074.
 */
cljs.core.async.__GT_t_cljs$core$async40074 = (function cljs$core$async$__GT_t_cljs$core$async40074(f,blockable,meta40075){
return (new cljs.core.async.t_cljs$core$async40074(f,blockable,meta40075));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__40073 = arguments.length;
switch (G__40073) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async40074(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__40111 = arguments.length;
switch (G__40111) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__40120 = arguments.length;
switch (G__40120) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__40129 = arguments.length;
switch (G__40129) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_43523 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_43523) : fn1.call(null,val_43523));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_43523) : fn1.call(null,val_43523));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__40150 = arguments.length;
switch (G__40150) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___43525 = n;
var x_43526 = (0);
while(true){
if((x_43526 < n__5636__auto___43525)){
(a[x_43526] = (0));

var G__43527 = (x_43526 + (1));
x_43526 = G__43527;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__43530 = (i + (1));
i = G__43530;
continue;
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40158 = (function (flag,meta40159){
this.flag = flag;
this.meta40159 = meta40159;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40158.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40160,meta40159__$1){
var self__ = this;
var _40160__$1 = this;
return (new cljs.core.async.t_cljs$core$async40158(self__.flag,meta40159__$1));
}));

(cljs.core.async.t_cljs$core$async40158.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40160){
var self__ = this;
var _40160__$1 = this;
return self__.meta40159;
}));

(cljs.core.async.t_cljs$core$async40158.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40158.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async40158.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40158.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async40158.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta40159","meta40159",359422065,null)], null);
}));

(cljs.core.async.t_cljs$core$async40158.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40158.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40158");

(cljs.core.async.t_cljs$core$async40158.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async40158");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40158.
 */
cljs.core.async.__GT_t_cljs$core$async40158 = (function cljs$core$async$__GT_t_cljs$core$async40158(flag,meta40159){
return (new cljs.core.async.t_cljs$core$async40158(flag,meta40159));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async40158(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40164 = (function (flag,cb,meta40165){
this.flag = flag;
this.cb = cb;
this.meta40165 = meta40165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async40164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40166,meta40165__$1){
var self__ = this;
var _40166__$1 = this;
return (new cljs.core.async.t_cljs$core$async40164(self__.flag,self__.cb,meta40165__$1));
}));

(cljs.core.async.t_cljs$core$async40164.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40166){
var self__ = this;
var _40166__$1 = this;
return self__.meta40165;
}));

(cljs.core.async.t_cljs$core$async40164.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async40164.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async40164.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async40164.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async40164.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta40165","meta40165",1318502747,null)], null);
}));

(cljs.core.async.t_cljs$core$async40164.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async40164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40164");

(cljs.core.async.t_cljs$core$async40164.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async40164");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40164.
 */
cljs.core.async.__GT_t_cljs$core$async40164 = (function cljs$core$async$__GT_t_cljs$core$async40164(flag,cb,meta40165){
return (new cljs.core.async.t_cljs$core$async40164(flag,cb,meta40165));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async40164(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40173_SHARP_){
var G__40177 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40173_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40177) : fret.call(null,G__40177));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__40175_SHARP_){
var G__40178 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__40175_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__40178) : fret.call(null,G__40178));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__43539 = (i + (1));
i = G__43539;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___43546 = arguments.length;
var i__5770__auto___43547 = (0);
while(true){
if((i__5770__auto___43547 < len__5769__auto___43546)){
args__5775__auto__.push((arguments[i__5770__auto___43547]));

var G__43548 = (i__5770__auto___43547 + (1));
i__5770__auto___43547 = G__43548;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__40185){
var map__40188 = p__40185;
var map__40188__$1 = cljs.core.__destructure_map(map__40188);
var opts = map__40188__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq40181){
var G__40182 = cljs.core.first(seq40181);
var seq40181__$1 = cljs.core.next(seq40181);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40182,seq40181__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__40205 = arguments.length;
switch (G__40205) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__39991__auto___43560 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39992__auto__ = (function (){var switch__39722__auto__ = (function (state_40250){
var state_val_40251 = (state_40250[(1)]);
if((state_val_40251 === (7))){
var inst_40246 = (state_40250[(2)]);
var state_40250__$1 = state_40250;
var statearr_40260_43561 = state_40250__$1;
(statearr_40260_43561[(2)] = inst_40246);

(statearr_40260_43561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (1))){
var state_40250__$1 = state_40250;
var statearr_40261_43562 = state_40250__$1;
(statearr_40261_43562[(2)] = null);

(statearr_40261_43562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (4))){
var inst_40225 = (state_40250[(7)]);
var inst_40225__$1 = (state_40250[(2)]);
var inst_40226 = (inst_40225__$1 == null);
var state_40250__$1 = (function (){var statearr_40263 = state_40250;
(statearr_40263[(7)] = inst_40225__$1);

return statearr_40263;
})();
if(cljs.core.truth_(inst_40226)){
var statearr_40264_43563 = state_40250__$1;
(statearr_40264_43563[(1)] = (5));

} else {
var statearr_40265_43564 = state_40250__$1;
(statearr_40265_43564[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (13))){
var state_40250__$1 = state_40250;
var statearr_40272_43565 = state_40250__$1;
(statearr_40272_43565[(2)] = null);

(statearr_40272_43565[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (6))){
var inst_40225 = (state_40250[(7)]);
var state_40250__$1 = state_40250;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40250__$1,(11),to,inst_40225);
} else {
if((state_val_40251 === (3))){
var inst_40248 = (state_40250[(2)]);
var state_40250__$1 = state_40250;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40250__$1,inst_40248);
} else {
if((state_val_40251 === (12))){
var state_40250__$1 = state_40250;
var statearr_40273_43567 = state_40250__$1;
(statearr_40273_43567[(2)] = null);

(statearr_40273_43567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (2))){
var state_40250__$1 = state_40250;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40250__$1,(4),from);
} else {
if((state_val_40251 === (11))){
var inst_40235 = (state_40250[(2)]);
var state_40250__$1 = state_40250;
if(cljs.core.truth_(inst_40235)){
var statearr_40274_43570 = state_40250__$1;
(statearr_40274_43570[(1)] = (12));

} else {
var statearr_40275_43572 = state_40250__$1;
(statearr_40275_43572[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (9))){
var state_40250__$1 = state_40250;
var statearr_40280_43573 = state_40250__$1;
(statearr_40280_43573[(2)] = null);

(statearr_40280_43573[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (5))){
var state_40250__$1 = state_40250;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40281_43574 = state_40250__$1;
(statearr_40281_43574[(1)] = (8));

} else {
var statearr_40282_43575 = state_40250__$1;
(statearr_40282_43575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (14))){
var inst_40244 = (state_40250[(2)]);
var state_40250__$1 = state_40250;
var statearr_40283_43576 = state_40250__$1;
(statearr_40283_43576[(2)] = inst_40244);

(statearr_40283_43576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (10))){
var inst_40232 = (state_40250[(2)]);
var state_40250__$1 = state_40250;
var statearr_40284_43577 = state_40250__$1;
(statearr_40284_43577[(2)] = inst_40232);

(statearr_40284_43577[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40251 === (8))){
var inst_40229 = cljs.core.async.close_BANG_(to);
var state_40250__$1 = state_40250;
var statearr_40287_43578 = state_40250__$1;
(statearr_40287_43578[(2)] = inst_40229);

(statearr_40287_43578[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39723__auto__ = null;
var cljs$core$async$state_machine__39723__auto____0 = (function (){
var statearr_40293 = [null,null,null,null,null,null,null,null];
(statearr_40293[(0)] = cljs$core$async$state_machine__39723__auto__);

(statearr_40293[(1)] = (1));

return statearr_40293;
});
var cljs$core$async$state_machine__39723__auto____1 = (function (state_40250){
while(true){
var ret_value__39724__auto__ = (function (){try{while(true){
var result__39725__auto__ = switch__39722__auto__(state_40250);
if(cljs.core.keyword_identical_QMARK_(result__39725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39725__auto__;
}
break;
}
}catch (e40294){if((e40294 instanceof Object)){
var ex__39726__auto__ = e40294;
var statearr_40295_43581 = state_40250;
(statearr_40295_43581[(5)] = ex__39726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40250);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40294;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43583 = state_40250;
state_40250 = G__43583;
continue;
} else {
return ret_value__39724__auto__;
}
break;
}
});
cljs$core$async$state_machine__39723__auto__ = function(state_40250){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39723__auto____1.call(this,state_40250);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39723__auto____0;
cljs$core$async$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39723__auto____1;
return cljs$core$async$state_machine__39723__auto__;
})()
})();
var state__39993__auto__ = (function (){var statearr_40298 = f__39992__auto__();
(statearr_40298[(6)] = c__39991__auto___43560);

return statearr_40298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39993__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__40304){
var vec__40307 = p__40304;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40307,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40307,(1),null);
var job = vec__40307;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__39991__auto___43587 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39992__auto__ = (function (){var switch__39722__auto__ = (function (state_40315){
var state_val_40316 = (state_40315[(1)]);
if((state_val_40316 === (1))){
var state_40315__$1 = state_40315;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40315__$1,(2),res,v);
} else {
if((state_val_40316 === (2))){
var inst_40312 = (state_40315[(2)]);
var inst_40313 = cljs.core.async.close_BANG_(res);
var state_40315__$1 = (function (){var statearr_40319 = state_40315;
(statearr_40319[(7)] = inst_40312);

return statearr_40319;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_40315__$1,inst_40313);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____0 = (function (){
var statearr_40324 = [null,null,null,null,null,null,null,null];
(statearr_40324[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__);

(statearr_40324[(1)] = (1));

return statearr_40324;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____1 = (function (state_40315){
while(true){
var ret_value__39724__auto__ = (function (){try{while(true){
var result__39725__auto__ = switch__39722__auto__(state_40315);
if(cljs.core.keyword_identical_QMARK_(result__39725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39725__auto__;
}
break;
}
}catch (e40327){if((e40327 instanceof Object)){
var ex__39726__auto__ = e40327;
var statearr_40330_43592 = state_40315;
(statearr_40330_43592[(5)] = ex__39726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40327;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43595 = state_40315;
state_40315 = G__43595;
continue;
} else {
return ret_value__39724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__ = function(state_40315){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____1.call(this,state_40315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__;
})()
})();
var state__39993__auto__ = (function (){var statearr_40332 = f__39992__auto__();
(statearr_40332[(6)] = c__39991__auto___43587);

return statearr_40332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39993__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__40336){
var vec__40343 = p__40336;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40343,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__40343,(1),null);
var job = vec__40343;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___43597 = n;
var __43598 = (0);
while(true){
if((__43598 < n__5636__auto___43597)){
var G__40351_43599 = type;
var G__40351_43600__$1 = (((G__40351_43599 instanceof cljs.core.Keyword))?G__40351_43599.fqn:null);
switch (G__40351_43600__$1) {
case "compute":
var c__39991__auto___43603 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43598,c__39991__auto___43603,G__40351_43599,G__40351_43600__$1,n__5636__auto___43597,jobs,results,process__$1,async){
return (function (){
var f__39992__auto__ = (function (){var switch__39722__auto__ = ((function (__43598,c__39991__auto___43603,G__40351_43599,G__40351_43600__$1,n__5636__auto___43597,jobs,results,process__$1,async){
return (function (state_40369){
var state_val_40370 = (state_40369[(1)]);
if((state_val_40370 === (1))){
var state_40369__$1 = state_40369;
var statearr_40376_43605 = state_40369__$1;
(statearr_40376_43605[(2)] = null);

(statearr_40376_43605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40370 === (2))){
var state_40369__$1 = state_40369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40369__$1,(4),jobs);
} else {
if((state_val_40370 === (3))){
var inst_40367 = (state_40369[(2)]);
var state_40369__$1 = state_40369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40369__$1,inst_40367);
} else {
if((state_val_40370 === (4))){
var inst_40358 = (state_40369[(2)]);
var inst_40359 = process__$1(inst_40358);
var state_40369__$1 = state_40369;
if(cljs.core.truth_(inst_40359)){
var statearr_40388_43610 = state_40369__$1;
(statearr_40388_43610[(1)] = (5));

} else {
var statearr_40389_43611 = state_40369__$1;
(statearr_40389_43611[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40370 === (5))){
var state_40369__$1 = state_40369;
var statearr_40393_43612 = state_40369__$1;
(statearr_40393_43612[(2)] = null);

(statearr_40393_43612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40370 === (6))){
var state_40369__$1 = state_40369;
var statearr_40395_43613 = state_40369__$1;
(statearr_40395_43613[(2)] = null);

(statearr_40395_43613[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40370 === (7))){
var inst_40364 = (state_40369[(2)]);
var state_40369__$1 = state_40369;
var statearr_40401_43614 = state_40369__$1;
(statearr_40401_43614[(2)] = inst_40364);

(statearr_40401_43614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__43598,c__39991__auto___43603,G__40351_43599,G__40351_43600__$1,n__5636__auto___43597,jobs,results,process__$1,async))
;
return ((function (__43598,switch__39722__auto__,c__39991__auto___43603,G__40351_43599,G__40351_43600__$1,n__5636__auto___43597,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____0 = (function (){
var statearr_40409 = [null,null,null,null,null,null,null];
(statearr_40409[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__);

(statearr_40409[(1)] = (1));

return statearr_40409;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____1 = (function (state_40369){
while(true){
var ret_value__39724__auto__ = (function (){try{while(true){
var result__39725__auto__ = switch__39722__auto__(state_40369);
if(cljs.core.keyword_identical_QMARK_(result__39725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39725__auto__;
}
break;
}
}catch (e40410){if((e40410 instanceof Object)){
var ex__39726__auto__ = e40410;
var statearr_40411_43618 = state_40369;
(statearr_40411_43618[(5)] = ex__39726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40410;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43619 = state_40369;
state_40369 = G__43619;
continue;
} else {
return ret_value__39724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__ = function(state_40369){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____1.call(this,state_40369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__;
})()
;})(__43598,switch__39722__auto__,c__39991__auto___43603,G__40351_43599,G__40351_43600__$1,n__5636__auto___43597,jobs,results,process__$1,async))
})();
var state__39993__auto__ = (function (){var statearr_40417 = f__39992__auto__();
(statearr_40417[(6)] = c__39991__auto___43603);

return statearr_40417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39993__auto__);
});})(__43598,c__39991__auto___43603,G__40351_43599,G__40351_43600__$1,n__5636__auto___43597,jobs,results,process__$1,async))
);


break;
case "async":
var c__39991__auto___43620 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__43598,c__39991__auto___43620,G__40351_43599,G__40351_43600__$1,n__5636__auto___43597,jobs,results,process__$1,async){
return (function (){
var f__39992__auto__ = (function (){var switch__39722__auto__ = ((function (__43598,c__39991__auto___43620,G__40351_43599,G__40351_43600__$1,n__5636__auto___43597,jobs,results,process__$1,async){
return (function (state_40435){
var state_val_40436 = (state_40435[(1)]);
if((state_val_40436 === (1))){
var state_40435__$1 = state_40435;
var statearr_40444_43621 = state_40435__$1;
(statearr_40444_43621[(2)] = null);

(statearr_40444_43621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40436 === (2))){
var state_40435__$1 = state_40435;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40435__$1,(4),jobs);
} else {
if((state_val_40436 === (3))){
var inst_40433 = (state_40435[(2)]);
var state_40435__$1 = state_40435;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40435__$1,inst_40433);
} else {
if((state_val_40436 === (4))){
var inst_40424 = (state_40435[(2)]);
var inst_40425 = async(inst_40424);
var state_40435__$1 = state_40435;
if(cljs.core.truth_(inst_40425)){
var statearr_40465_43624 = state_40435__$1;
(statearr_40465_43624[(1)] = (5));

} else {
var statearr_40470_43625 = state_40435__$1;
(statearr_40470_43625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40436 === (5))){
var state_40435__$1 = state_40435;
var statearr_40474_43627 = state_40435__$1;
(statearr_40474_43627[(2)] = null);

(statearr_40474_43627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40436 === (6))){
var state_40435__$1 = state_40435;
var statearr_40480_43628 = state_40435__$1;
(statearr_40480_43628[(2)] = null);

(statearr_40480_43628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40436 === (7))){
var inst_40430 = (state_40435[(2)]);
var state_40435__$1 = state_40435;
var statearr_40482_43630 = state_40435__$1;
(statearr_40482_43630[(2)] = inst_40430);

(statearr_40482_43630[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__43598,c__39991__auto___43620,G__40351_43599,G__40351_43600__$1,n__5636__auto___43597,jobs,results,process__$1,async))
;
return ((function (__43598,switch__39722__auto__,c__39991__auto___43620,G__40351_43599,G__40351_43600__$1,n__5636__auto___43597,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____0 = (function (){
var statearr_40484 = [null,null,null,null,null,null,null];
(statearr_40484[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__);

(statearr_40484[(1)] = (1));

return statearr_40484;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____1 = (function (state_40435){
while(true){
var ret_value__39724__auto__ = (function (){try{while(true){
var result__39725__auto__ = switch__39722__auto__(state_40435);
if(cljs.core.keyword_identical_QMARK_(result__39725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39725__auto__;
}
break;
}
}catch (e40487){if((e40487 instanceof Object)){
var ex__39726__auto__ = e40487;
var statearr_40490_43632 = state_40435;
(statearr_40490_43632[(5)] = ex__39726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40435);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40487;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43633 = state_40435;
state_40435 = G__43633;
continue;
} else {
return ret_value__39724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__ = function(state_40435){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____1.call(this,state_40435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__;
})()
;})(__43598,switch__39722__auto__,c__39991__auto___43620,G__40351_43599,G__40351_43600__$1,n__5636__auto___43597,jobs,results,process__$1,async))
})();
var state__39993__auto__ = (function (){var statearr_40495 = f__39992__auto__();
(statearr_40495[(6)] = c__39991__auto___43620);

return statearr_40495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39993__auto__);
});})(__43598,c__39991__auto___43620,G__40351_43599,G__40351_43600__$1,n__5636__auto___43597,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__40351_43600__$1)].join('')));

}

var G__43635 = (__43598 + (1));
__43598 = G__43635;
continue;
} else {
}
break;
}

var c__39991__auto___43636 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39992__auto__ = (function (){var switch__39722__auto__ = (function (state_40525){
var state_val_40526 = (state_40525[(1)]);
if((state_val_40526 === (7))){
var inst_40521 = (state_40525[(2)]);
var state_40525__$1 = state_40525;
var statearr_40531_43638 = state_40525__$1;
(statearr_40531_43638[(2)] = inst_40521);

(statearr_40531_43638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40526 === (1))){
var state_40525__$1 = state_40525;
var statearr_40534_43639 = state_40525__$1;
(statearr_40534_43639[(2)] = null);

(statearr_40534_43639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40526 === (4))){
var inst_40501 = (state_40525[(7)]);
var inst_40501__$1 = (state_40525[(2)]);
var inst_40504 = (inst_40501__$1 == null);
var state_40525__$1 = (function (){var statearr_40538 = state_40525;
(statearr_40538[(7)] = inst_40501__$1);

return statearr_40538;
})();
if(cljs.core.truth_(inst_40504)){
var statearr_40539_43640 = state_40525__$1;
(statearr_40539_43640[(1)] = (5));

} else {
var statearr_40541_43644 = state_40525__$1;
(statearr_40541_43644[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40526 === (6))){
var inst_40509 = (state_40525[(8)]);
var inst_40501 = (state_40525[(7)]);
var inst_40509__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_40512 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_40513 = [inst_40501,inst_40509__$1];
var inst_40514 = (new cljs.core.PersistentVector(null,2,(5),inst_40512,inst_40513,null));
var state_40525__$1 = (function (){var statearr_40559 = state_40525;
(statearr_40559[(8)] = inst_40509__$1);

return statearr_40559;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40525__$1,(8),jobs,inst_40514);
} else {
if((state_val_40526 === (3))){
var inst_40523 = (state_40525[(2)]);
var state_40525__$1 = state_40525;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40525__$1,inst_40523);
} else {
if((state_val_40526 === (2))){
var state_40525__$1 = state_40525;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40525__$1,(4),from);
} else {
if((state_val_40526 === (9))){
var inst_40518 = (state_40525[(2)]);
var state_40525__$1 = (function (){var statearr_40571 = state_40525;
(statearr_40571[(9)] = inst_40518);

return statearr_40571;
})();
var statearr_40572_43646 = state_40525__$1;
(statearr_40572_43646[(2)] = null);

(statearr_40572_43646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40526 === (5))){
var inst_40506 = cljs.core.async.close_BANG_(jobs);
var state_40525__$1 = state_40525;
var statearr_40576_43647 = state_40525__$1;
(statearr_40576_43647[(2)] = inst_40506);

(statearr_40576_43647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40526 === (8))){
var inst_40509 = (state_40525[(8)]);
var inst_40516 = (state_40525[(2)]);
var state_40525__$1 = (function (){var statearr_40578 = state_40525;
(statearr_40578[(10)] = inst_40516);

return statearr_40578;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40525__$1,(9),results,inst_40509);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____0 = (function (){
var statearr_40579 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40579[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__);

(statearr_40579[(1)] = (1));

return statearr_40579;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____1 = (function (state_40525){
while(true){
var ret_value__39724__auto__ = (function (){try{while(true){
var result__39725__auto__ = switch__39722__auto__(state_40525);
if(cljs.core.keyword_identical_QMARK_(result__39725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39725__auto__;
}
break;
}
}catch (e40580){if((e40580 instanceof Object)){
var ex__39726__auto__ = e40580;
var statearr_40582_43648 = state_40525;
(statearr_40582_43648[(5)] = ex__39726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40580;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43649 = state_40525;
state_40525 = G__43649;
continue;
} else {
return ret_value__39724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__ = function(state_40525){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____1.call(this,state_40525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__;
})()
})();
var state__39993__auto__ = (function (){var statearr_40585 = f__39992__auto__();
(statearr_40585[(6)] = c__39991__auto___43636);

return statearr_40585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39993__auto__);
}));


var c__39991__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39992__auto__ = (function (){var switch__39722__auto__ = (function (state_40629){
var state_val_40630 = (state_40629[(1)]);
if((state_val_40630 === (7))){
var inst_40625 = (state_40629[(2)]);
var state_40629__$1 = state_40629;
var statearr_40635_43651 = state_40629__$1;
(statearr_40635_43651[(2)] = inst_40625);

(statearr_40635_43651[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40630 === (20))){
var state_40629__$1 = state_40629;
var statearr_40636_43658 = state_40629__$1;
(statearr_40636_43658[(2)] = null);

(statearr_40636_43658[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40630 === (1))){
var state_40629__$1 = state_40629;
var statearr_40641_43659 = state_40629__$1;
(statearr_40641_43659[(2)] = null);

(statearr_40641_43659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40630 === (4))){
var inst_40589 = (state_40629[(7)]);
var inst_40589__$1 = (state_40629[(2)]);
var inst_40590 = (inst_40589__$1 == null);
var state_40629__$1 = (function (){var statearr_40646 = state_40629;
(statearr_40646[(7)] = inst_40589__$1);

return statearr_40646;
})();
if(cljs.core.truth_(inst_40590)){
var statearr_40647_43660 = state_40629__$1;
(statearr_40647_43660[(1)] = (5));

} else {
var statearr_40648_43661 = state_40629__$1;
(statearr_40648_43661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40630 === (15))){
var inst_40606 = (state_40629[(8)]);
var state_40629__$1 = state_40629;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40629__$1,(18),to,inst_40606);
} else {
if((state_val_40630 === (21))){
var inst_40620 = (state_40629[(2)]);
var state_40629__$1 = state_40629;
var statearr_40652_43662 = state_40629__$1;
(statearr_40652_43662[(2)] = inst_40620);

(statearr_40652_43662[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40630 === (13))){
var inst_40622 = (state_40629[(2)]);
var state_40629__$1 = (function (){var statearr_40655 = state_40629;
(statearr_40655[(9)] = inst_40622);

return statearr_40655;
})();
var statearr_40656_43663 = state_40629__$1;
(statearr_40656_43663[(2)] = null);

(statearr_40656_43663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40630 === (6))){
var inst_40589 = (state_40629[(7)]);
var state_40629__$1 = state_40629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40629__$1,(11),inst_40589);
} else {
if((state_val_40630 === (17))){
var inst_40615 = (state_40629[(2)]);
var state_40629__$1 = state_40629;
if(cljs.core.truth_(inst_40615)){
var statearr_40657_43664 = state_40629__$1;
(statearr_40657_43664[(1)] = (19));

} else {
var statearr_40658_43665 = state_40629__$1;
(statearr_40658_43665[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40630 === (3))){
var inst_40627 = (state_40629[(2)]);
var state_40629__$1 = state_40629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40629__$1,inst_40627);
} else {
if((state_val_40630 === (12))){
var inst_40600 = (state_40629[(10)]);
var state_40629__$1 = state_40629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40629__$1,(14),inst_40600);
} else {
if((state_val_40630 === (2))){
var state_40629__$1 = state_40629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40629__$1,(4),results);
} else {
if((state_val_40630 === (19))){
var state_40629__$1 = state_40629;
var statearr_40659_43666 = state_40629__$1;
(statearr_40659_43666[(2)] = null);

(statearr_40659_43666[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40630 === (11))){
var inst_40600 = (state_40629[(2)]);
var state_40629__$1 = (function (){var statearr_40661 = state_40629;
(statearr_40661[(10)] = inst_40600);

return statearr_40661;
})();
var statearr_40662_43667 = state_40629__$1;
(statearr_40662_43667[(2)] = null);

(statearr_40662_43667[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40630 === (9))){
var state_40629__$1 = state_40629;
var statearr_40667_43668 = state_40629__$1;
(statearr_40667_43668[(2)] = null);

(statearr_40667_43668[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40630 === (5))){
var state_40629__$1 = state_40629;
if(cljs.core.truth_(close_QMARK_)){
var statearr_40668_43669 = state_40629__$1;
(statearr_40668_43669[(1)] = (8));

} else {
var statearr_40669_43670 = state_40629__$1;
(statearr_40669_43670[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40630 === (14))){
var inst_40606 = (state_40629[(8)]);
var inst_40609 = (state_40629[(11)]);
var inst_40606__$1 = (state_40629[(2)]);
var inst_40608 = (inst_40606__$1 == null);
var inst_40609__$1 = cljs.core.not(inst_40608);
var state_40629__$1 = (function (){var statearr_40670 = state_40629;
(statearr_40670[(8)] = inst_40606__$1);

(statearr_40670[(11)] = inst_40609__$1);

return statearr_40670;
})();
if(inst_40609__$1){
var statearr_40671_43671 = state_40629__$1;
(statearr_40671_43671[(1)] = (15));

} else {
var statearr_40672_43672 = state_40629__$1;
(statearr_40672_43672[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40630 === (16))){
var inst_40609 = (state_40629[(11)]);
var state_40629__$1 = state_40629;
var statearr_40673_43673 = state_40629__$1;
(statearr_40673_43673[(2)] = inst_40609);

(statearr_40673_43673[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40630 === (10))){
var inst_40597 = (state_40629[(2)]);
var state_40629__$1 = state_40629;
var statearr_40674_43675 = state_40629__$1;
(statearr_40674_43675[(2)] = inst_40597);

(statearr_40674_43675[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40630 === (18))){
var inst_40612 = (state_40629[(2)]);
var state_40629__$1 = state_40629;
var statearr_40675_43676 = state_40629__$1;
(statearr_40675_43676[(2)] = inst_40612);

(statearr_40675_43676[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40630 === (8))){
var inst_40594 = cljs.core.async.close_BANG_(to);
var state_40629__$1 = state_40629;
var statearr_40682_43677 = state_40629__$1;
(statearr_40682_43677[(2)] = inst_40594);

(statearr_40682_43677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____0 = (function (){
var statearr_40704 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40704[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__);

(statearr_40704[(1)] = (1));

return statearr_40704;
});
var cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____1 = (function (state_40629){
while(true){
var ret_value__39724__auto__ = (function (){try{while(true){
var result__39725__auto__ = switch__39722__auto__(state_40629);
if(cljs.core.keyword_identical_QMARK_(result__39725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39725__auto__;
}
break;
}
}catch (e40705){if((e40705 instanceof Object)){
var ex__39726__auto__ = e40705;
var statearr_40706_43679 = state_40629;
(statearr_40706_43679[(5)] = ex__39726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40705;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43681 = state_40629;
state_40629 = G__43681;
continue;
} else {
return ret_value__39724__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__ = function(state_40629){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____1.call(this,state_40629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__39723__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__39723__auto__;
})()
})();
var state__39993__auto__ = (function (){var statearr_40707 = f__39992__auto__();
(statearr_40707[(6)] = c__39991__auto__);

return statearr_40707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39993__auto__);
}));

return c__39991__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__40710 = arguments.length;
switch (G__40710) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__40716 = arguments.length;
switch (G__40716) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__40746 = arguments.length;
switch (G__40746) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__39991__auto___43706 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39992__auto__ = (function (){var switch__39722__auto__ = (function (state_40787){
var state_val_40788 = (state_40787[(1)]);
if((state_val_40788 === (7))){
var inst_40777 = (state_40787[(2)]);
var state_40787__$1 = state_40787;
var statearr_40801_43713 = state_40787__$1;
(statearr_40801_43713[(2)] = inst_40777);

(statearr_40801_43713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40788 === (1))){
var state_40787__$1 = state_40787;
var statearr_40814_43714 = state_40787__$1;
(statearr_40814_43714[(2)] = null);

(statearr_40814_43714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40788 === (4))){
var inst_40751 = (state_40787[(7)]);
var inst_40751__$1 = (state_40787[(2)]);
var inst_40756 = (inst_40751__$1 == null);
var state_40787__$1 = (function (){var statearr_40827 = state_40787;
(statearr_40827[(7)] = inst_40751__$1);

return statearr_40827;
})();
if(cljs.core.truth_(inst_40756)){
var statearr_40830_43715 = state_40787__$1;
(statearr_40830_43715[(1)] = (5));

} else {
var statearr_40831_43716 = state_40787__$1;
(statearr_40831_43716[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40788 === (13))){
var state_40787__$1 = state_40787;
var statearr_40832_43717 = state_40787__$1;
(statearr_40832_43717[(2)] = null);

(statearr_40832_43717[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40788 === (6))){
var inst_40751 = (state_40787[(7)]);
var inst_40763 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_40751) : p.call(null,inst_40751));
var state_40787__$1 = state_40787;
if(cljs.core.truth_(inst_40763)){
var statearr_40833_43718 = state_40787__$1;
(statearr_40833_43718[(1)] = (9));

} else {
var statearr_40834_43719 = state_40787__$1;
(statearr_40834_43719[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40788 === (3))){
var inst_40781 = (state_40787[(2)]);
var state_40787__$1 = state_40787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40787__$1,inst_40781);
} else {
if((state_val_40788 === (12))){
var state_40787__$1 = state_40787;
var statearr_40837_43720 = state_40787__$1;
(statearr_40837_43720[(2)] = null);

(statearr_40837_43720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40788 === (2))){
var state_40787__$1 = state_40787;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40787__$1,(4),ch);
} else {
if((state_val_40788 === (11))){
var inst_40751 = (state_40787[(7)]);
var inst_40767 = (state_40787[(2)]);
var state_40787__$1 = state_40787;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_40787__$1,(8),inst_40767,inst_40751);
} else {
if((state_val_40788 === (9))){
var state_40787__$1 = state_40787;
var statearr_40844_43729 = state_40787__$1;
(statearr_40844_43729[(2)] = tc);

(statearr_40844_43729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40788 === (5))){
var inst_40759 = cljs.core.async.close_BANG_(tc);
var inst_40760 = cljs.core.async.close_BANG_(fc);
var state_40787__$1 = (function (){var statearr_40847 = state_40787;
(statearr_40847[(8)] = inst_40759);

return statearr_40847;
})();
var statearr_40849_43738 = state_40787__$1;
(statearr_40849_43738[(2)] = inst_40760);

(statearr_40849_43738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40788 === (14))){
var inst_40775 = (state_40787[(2)]);
var state_40787__$1 = state_40787;
var statearr_40854_43739 = state_40787__$1;
(statearr_40854_43739[(2)] = inst_40775);

(statearr_40854_43739[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40788 === (10))){
var state_40787__$1 = state_40787;
var statearr_40856_43740 = state_40787__$1;
(statearr_40856_43740[(2)] = fc);

(statearr_40856_43740[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40788 === (8))){
var inst_40770 = (state_40787[(2)]);
var state_40787__$1 = state_40787;
if(cljs.core.truth_(inst_40770)){
var statearr_40863_43747 = state_40787__$1;
(statearr_40863_43747[(1)] = (12));

} else {
var statearr_40864_43748 = state_40787__$1;
(statearr_40864_43748[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39723__auto__ = null;
var cljs$core$async$state_machine__39723__auto____0 = (function (){
var statearr_40872 = [null,null,null,null,null,null,null,null,null];
(statearr_40872[(0)] = cljs$core$async$state_machine__39723__auto__);

(statearr_40872[(1)] = (1));

return statearr_40872;
});
var cljs$core$async$state_machine__39723__auto____1 = (function (state_40787){
while(true){
var ret_value__39724__auto__ = (function (){try{while(true){
var result__39725__auto__ = switch__39722__auto__(state_40787);
if(cljs.core.keyword_identical_QMARK_(result__39725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39725__auto__;
}
break;
}
}catch (e40880){if((e40880 instanceof Object)){
var ex__39726__auto__ = e40880;
var statearr_40885_43749 = state_40787;
(statearr_40885_43749[(5)] = ex__39726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40787);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40880;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43750 = state_40787;
state_40787 = G__43750;
continue;
} else {
return ret_value__39724__auto__;
}
break;
}
});
cljs$core$async$state_machine__39723__auto__ = function(state_40787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39723__auto____1.call(this,state_40787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39723__auto____0;
cljs$core$async$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39723__auto____1;
return cljs$core$async$state_machine__39723__auto__;
})()
})();
var state__39993__auto__ = (function (){var statearr_40887 = f__39992__auto__();
(statearr_40887[(6)] = c__39991__auto___43706);

return statearr_40887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39993__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__39991__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39992__auto__ = (function (){var switch__39722__auto__ = (function (state_40922){
var state_val_40923 = (state_40922[(1)]);
if((state_val_40923 === (7))){
var inst_40917 = (state_40922[(2)]);
var state_40922__$1 = state_40922;
var statearr_40930_43753 = state_40922__$1;
(statearr_40930_43753[(2)] = inst_40917);

(statearr_40930_43753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40923 === (1))){
var inst_40896 = init;
var state_40922__$1 = (function (){var statearr_40933 = state_40922;
(statearr_40933[(7)] = inst_40896);

return statearr_40933;
})();
var statearr_40934_43755 = state_40922__$1;
(statearr_40934_43755[(2)] = null);

(statearr_40934_43755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40923 === (4))){
var inst_40901 = (state_40922[(8)]);
var inst_40901__$1 = (state_40922[(2)]);
var inst_40902 = (inst_40901__$1 == null);
var state_40922__$1 = (function (){var statearr_40939 = state_40922;
(statearr_40939[(8)] = inst_40901__$1);

return statearr_40939;
})();
if(cljs.core.truth_(inst_40902)){
var statearr_40942_43762 = state_40922__$1;
(statearr_40942_43762[(1)] = (5));

} else {
var statearr_40943_43763 = state_40922__$1;
(statearr_40943_43763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40923 === (6))){
var inst_40896 = (state_40922[(7)]);
var inst_40901 = (state_40922[(8)]);
var inst_40905 = (state_40922[(9)]);
var inst_40905__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_40896,inst_40901) : f.call(null,inst_40896,inst_40901));
var inst_40906 = cljs.core.reduced_QMARK_(inst_40905__$1);
var state_40922__$1 = (function (){var statearr_40946 = state_40922;
(statearr_40946[(9)] = inst_40905__$1);

return statearr_40946;
})();
if(inst_40906){
var statearr_40947_43764 = state_40922__$1;
(statearr_40947_43764[(1)] = (8));

} else {
var statearr_40948_43765 = state_40922__$1;
(statearr_40948_43765[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40923 === (3))){
var inst_40919 = (state_40922[(2)]);
var state_40922__$1 = state_40922;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40922__$1,inst_40919);
} else {
if((state_val_40923 === (2))){
var state_40922__$1 = state_40922;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40922__$1,(4),ch);
} else {
if((state_val_40923 === (9))){
var inst_40905 = (state_40922[(9)]);
var inst_40896 = inst_40905;
var state_40922__$1 = (function (){var statearr_40950 = state_40922;
(statearr_40950[(7)] = inst_40896);

return statearr_40950;
})();
var statearr_40951_43769 = state_40922__$1;
(statearr_40951_43769[(2)] = null);

(statearr_40951_43769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40923 === (5))){
var inst_40896 = (state_40922[(7)]);
var state_40922__$1 = state_40922;
var statearr_40952_43770 = state_40922__$1;
(statearr_40952_43770[(2)] = inst_40896);

(statearr_40952_43770[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40923 === (10))){
var inst_40915 = (state_40922[(2)]);
var state_40922__$1 = state_40922;
var statearr_40956_43771 = state_40922__$1;
(statearr_40956_43771[(2)] = inst_40915);

(statearr_40956_43771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40923 === (8))){
var inst_40905 = (state_40922[(9)]);
var inst_40910 = cljs.core.deref(inst_40905);
var state_40922__$1 = state_40922;
var statearr_40960_43776 = state_40922__$1;
(statearr_40960_43776[(2)] = inst_40910);

(statearr_40960_43776[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__39723__auto__ = null;
var cljs$core$async$reduce_$_state_machine__39723__auto____0 = (function (){
var statearr_40968 = [null,null,null,null,null,null,null,null,null,null];
(statearr_40968[(0)] = cljs$core$async$reduce_$_state_machine__39723__auto__);

(statearr_40968[(1)] = (1));

return statearr_40968;
});
var cljs$core$async$reduce_$_state_machine__39723__auto____1 = (function (state_40922){
while(true){
var ret_value__39724__auto__ = (function (){try{while(true){
var result__39725__auto__ = switch__39722__auto__(state_40922);
if(cljs.core.keyword_identical_QMARK_(result__39725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39725__auto__;
}
break;
}
}catch (e40971){if((e40971 instanceof Object)){
var ex__39726__auto__ = e40971;
var statearr_40974_43780 = state_40922;
(statearr_40974_43780[(5)] = ex__39726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40971;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43786 = state_40922;
state_40922 = G__43786;
continue;
} else {
return ret_value__39724__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__39723__auto__ = function(state_40922){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__39723__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__39723__auto____1.call(this,state_40922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__39723__auto____0;
cljs$core$async$reduce_$_state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__39723__auto____1;
return cljs$core$async$reduce_$_state_machine__39723__auto__;
})()
})();
var state__39993__auto__ = (function (){var statearr_40980 = f__39992__auto__();
(statearr_40980[(6)] = c__39991__auto__);

return statearr_40980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39993__auto__);
}));

return c__39991__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__39991__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39992__auto__ = (function (){var switch__39722__auto__ = (function (state_40993){
var state_val_40994 = (state_40993[(1)]);
if((state_val_40994 === (1))){
var inst_40988 = cljs.core.async.reduce(f__$1,init,ch);
var state_40993__$1 = state_40993;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_40993__$1,(2),inst_40988);
} else {
if((state_val_40994 === (2))){
var inst_40990 = (state_40993[(2)]);
var inst_40991 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_40990) : f__$1.call(null,inst_40990));
var state_40993__$1 = state_40993;
return cljs.core.async.impl.ioc_helpers.return_chan(state_40993__$1,inst_40991);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__39723__auto__ = null;
var cljs$core$async$transduce_$_state_machine__39723__auto____0 = (function (){
var statearr_41004 = [null,null,null,null,null,null,null];
(statearr_41004[(0)] = cljs$core$async$transduce_$_state_machine__39723__auto__);

(statearr_41004[(1)] = (1));

return statearr_41004;
});
var cljs$core$async$transduce_$_state_machine__39723__auto____1 = (function (state_40993){
while(true){
var ret_value__39724__auto__ = (function (){try{while(true){
var result__39725__auto__ = switch__39722__auto__(state_40993);
if(cljs.core.keyword_identical_QMARK_(result__39725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39725__auto__;
}
break;
}
}catch (e41012){if((e41012 instanceof Object)){
var ex__39726__auto__ = e41012;
var statearr_41013_43796 = state_40993;
(statearr_41013_43796[(5)] = ex__39726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_40993);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41012;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43797 = state_40993;
state_40993 = G__43797;
continue;
} else {
return ret_value__39724__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__39723__auto__ = function(state_40993){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__39723__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__39723__auto____1.call(this,state_40993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__39723__auto____0;
cljs$core$async$transduce_$_state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__39723__auto____1;
return cljs$core$async$transduce_$_state_machine__39723__auto__;
})()
})();
var state__39993__auto__ = (function (){var statearr_41019 = f__39992__auto__();
(statearr_41019[(6)] = c__39991__auto__);

return statearr_41019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39993__auto__);
}));

return c__39991__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__41027 = arguments.length;
switch (G__41027) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__39991__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39992__auto__ = (function (){var switch__39722__auto__ = (function (state_41075){
var state_val_41076 = (state_41075[(1)]);
if((state_val_41076 === (7))){
var inst_41056 = (state_41075[(2)]);
var state_41075__$1 = state_41075;
var statearr_41090_43809 = state_41075__$1;
(statearr_41090_43809[(2)] = inst_41056);

(statearr_41090_43809[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41076 === (1))){
var inst_41039 = cljs.core.seq(coll);
var inst_41040 = inst_41039;
var state_41075__$1 = (function (){var statearr_41093 = state_41075;
(statearr_41093[(7)] = inst_41040);

return statearr_41093;
})();
var statearr_41097_43811 = state_41075__$1;
(statearr_41097_43811[(2)] = null);

(statearr_41097_43811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41076 === (4))){
var inst_41040 = (state_41075[(7)]);
var inst_41053 = cljs.core.first(inst_41040);
var state_41075__$1 = state_41075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41075__$1,(7),ch,inst_41053);
} else {
if((state_val_41076 === (13))){
var inst_41068 = (state_41075[(2)]);
var state_41075__$1 = state_41075;
var statearr_41105_43815 = state_41075__$1;
(statearr_41105_43815[(2)] = inst_41068);

(statearr_41105_43815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41076 === (6))){
var inst_41059 = (state_41075[(2)]);
var state_41075__$1 = state_41075;
if(cljs.core.truth_(inst_41059)){
var statearr_41108_43816 = state_41075__$1;
(statearr_41108_43816[(1)] = (8));

} else {
var statearr_41111_43817 = state_41075__$1;
(statearr_41111_43817[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41076 === (3))){
var inst_41072 = (state_41075[(2)]);
var state_41075__$1 = state_41075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41075__$1,inst_41072);
} else {
if((state_val_41076 === (12))){
var state_41075__$1 = state_41075;
var statearr_41113_43825 = state_41075__$1;
(statearr_41113_43825[(2)] = null);

(statearr_41113_43825[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41076 === (2))){
var inst_41040 = (state_41075[(7)]);
var state_41075__$1 = state_41075;
if(cljs.core.truth_(inst_41040)){
var statearr_41115_43832 = state_41075__$1;
(statearr_41115_43832[(1)] = (4));

} else {
var statearr_41116_43836 = state_41075__$1;
(statearr_41116_43836[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41076 === (11))){
var inst_41065 = cljs.core.async.close_BANG_(ch);
var state_41075__$1 = state_41075;
var statearr_41119_43839 = state_41075__$1;
(statearr_41119_43839[(2)] = inst_41065);

(statearr_41119_43839[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41076 === (9))){
var state_41075__$1 = state_41075;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41122_43840 = state_41075__$1;
(statearr_41122_43840[(1)] = (11));

} else {
var statearr_41123_43841 = state_41075__$1;
(statearr_41123_43841[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41076 === (5))){
var inst_41040 = (state_41075[(7)]);
var state_41075__$1 = state_41075;
var statearr_41130_43843 = state_41075__$1;
(statearr_41130_43843[(2)] = inst_41040);

(statearr_41130_43843[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41076 === (10))){
var inst_41070 = (state_41075[(2)]);
var state_41075__$1 = state_41075;
var statearr_41134_43844 = state_41075__$1;
(statearr_41134_43844[(2)] = inst_41070);

(statearr_41134_43844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41076 === (8))){
var inst_41040 = (state_41075[(7)]);
var inst_41061 = cljs.core.next(inst_41040);
var inst_41040__$1 = inst_41061;
var state_41075__$1 = (function (){var statearr_41135 = state_41075;
(statearr_41135[(7)] = inst_41040__$1);

return statearr_41135;
})();
var statearr_41136_43850 = state_41075__$1;
(statearr_41136_43850[(2)] = null);

(statearr_41136_43850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39723__auto__ = null;
var cljs$core$async$state_machine__39723__auto____0 = (function (){
var statearr_41142 = [null,null,null,null,null,null,null,null];
(statearr_41142[(0)] = cljs$core$async$state_machine__39723__auto__);

(statearr_41142[(1)] = (1));

return statearr_41142;
});
var cljs$core$async$state_machine__39723__auto____1 = (function (state_41075){
while(true){
var ret_value__39724__auto__ = (function (){try{while(true){
var result__39725__auto__ = switch__39722__auto__(state_41075);
if(cljs.core.keyword_identical_QMARK_(result__39725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39725__auto__;
}
break;
}
}catch (e41146){if((e41146 instanceof Object)){
var ex__39726__auto__ = e41146;
var statearr_41149_43851 = state_41075;
(statearr_41149_43851[(5)] = ex__39726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41146;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43852 = state_41075;
state_41075 = G__43852;
continue;
} else {
return ret_value__39724__auto__;
}
break;
}
});
cljs$core$async$state_machine__39723__auto__ = function(state_41075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39723__auto____1.call(this,state_41075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39723__auto____0;
cljs$core$async$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39723__auto____1;
return cljs$core$async$state_machine__39723__auto__;
})()
})();
var state__39993__auto__ = (function (){var statearr_41151 = f__39992__auto__();
(statearr_41151[(6)] = c__39991__auto__);

return statearr_41151;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39993__auto__);
}));

return c__39991__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_43853 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_43853(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_43855 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_43855(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_43865 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_43865(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_43868 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_43868(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41195 = (function (ch,cs,meta41196){
this.ch = ch;
this.cs = cs;
this.meta41196 = meta41196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41197,meta41196__$1){
var self__ = this;
var _41197__$1 = this;
return (new cljs.core.async.t_cljs$core$async41195(self__.ch,self__.cs,meta41196__$1));
}));

(cljs.core.async.t_cljs$core$async41195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41197){
var self__ = this;
var _41197__$1 = this;
return self__.meta41196;
}));

(cljs.core.async.t_cljs$core$async41195.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41195.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async41195.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41195.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async41195.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async41195.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async41195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta41196","meta41196",-1622005843,null)], null);
}));

(cljs.core.async.t_cljs$core$async41195.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41195");

(cljs.core.async.t_cljs$core$async41195.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async41195");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41195.
 */
cljs.core.async.__GT_t_cljs$core$async41195 = (function cljs$core$async$__GT_t_cljs$core$async41195(ch,cs,meta41196){
return (new cljs.core.async.t_cljs$core$async41195(ch,cs,meta41196));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async41195(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__39991__auto___43877 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39992__auto__ = (function (){var switch__39722__auto__ = (function (state_41393){
var state_val_41395 = (state_41393[(1)]);
if((state_val_41395 === (7))){
var inst_41389 = (state_41393[(2)]);
var state_41393__$1 = state_41393;
var statearr_41408_43879 = state_41393__$1;
(statearr_41408_43879[(2)] = inst_41389);

(statearr_41408_43879[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (20))){
var inst_41262 = (state_41393[(7)]);
var inst_41275 = cljs.core.first(inst_41262);
var inst_41276 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41275,(0),null);
var inst_41277 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41275,(1),null);
var state_41393__$1 = (function (){var statearr_41410 = state_41393;
(statearr_41410[(8)] = inst_41276);

return statearr_41410;
})();
if(cljs.core.truth_(inst_41277)){
var statearr_41415_43888 = state_41393__$1;
(statearr_41415_43888[(1)] = (22));

} else {
var statearr_41416_43892 = state_41393__$1;
(statearr_41416_43892[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (27))){
var inst_41319 = (state_41393[(9)]);
var inst_41225 = (state_41393[(10)]);
var inst_41314 = (state_41393[(11)]);
var inst_41312 = (state_41393[(12)]);
var inst_41319__$1 = cljs.core._nth(inst_41312,inst_41314);
var inst_41320 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41319__$1,inst_41225,done);
var state_41393__$1 = (function (){var statearr_41418 = state_41393;
(statearr_41418[(9)] = inst_41319__$1);

return statearr_41418;
})();
if(cljs.core.truth_(inst_41320)){
var statearr_41423_43896 = state_41393__$1;
(statearr_41423_43896[(1)] = (30));

} else {
var statearr_41424_43897 = state_41393__$1;
(statearr_41424_43897[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (1))){
var state_41393__$1 = state_41393;
var statearr_41426_43898 = state_41393__$1;
(statearr_41426_43898[(2)] = null);

(statearr_41426_43898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (24))){
var inst_41262 = (state_41393[(7)]);
var inst_41288 = (state_41393[(2)]);
var inst_41289 = cljs.core.next(inst_41262);
var inst_41234 = inst_41289;
var inst_41235 = null;
var inst_41236 = (0);
var inst_41237 = (0);
var state_41393__$1 = (function (){var statearr_41434 = state_41393;
(statearr_41434[(13)] = inst_41236);

(statearr_41434[(14)] = inst_41237);

(statearr_41434[(15)] = inst_41235);

(statearr_41434[(16)] = inst_41288);

(statearr_41434[(17)] = inst_41234);

return statearr_41434;
})();
var statearr_41435_43904 = state_41393__$1;
(statearr_41435_43904[(2)] = null);

(statearr_41435_43904[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (39))){
var state_41393__$1 = state_41393;
var statearr_41440_43905 = state_41393__$1;
(statearr_41440_43905[(2)] = null);

(statearr_41440_43905[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (4))){
var inst_41225 = (state_41393[(10)]);
var inst_41225__$1 = (state_41393[(2)]);
var inst_41226 = (inst_41225__$1 == null);
var state_41393__$1 = (function (){var statearr_41441 = state_41393;
(statearr_41441[(10)] = inst_41225__$1);

return statearr_41441;
})();
if(cljs.core.truth_(inst_41226)){
var statearr_41442_43910 = state_41393__$1;
(statearr_41442_43910[(1)] = (5));

} else {
var statearr_41444_43911 = state_41393__$1;
(statearr_41444_43911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (15))){
var inst_41236 = (state_41393[(13)]);
var inst_41237 = (state_41393[(14)]);
var inst_41235 = (state_41393[(15)]);
var inst_41234 = (state_41393[(17)]);
var inst_41256 = (state_41393[(2)]);
var inst_41259 = (inst_41237 + (1));
var tmp41437 = inst_41236;
var tmp41438 = inst_41235;
var tmp41439 = inst_41234;
var inst_41234__$1 = tmp41439;
var inst_41235__$1 = tmp41438;
var inst_41236__$1 = tmp41437;
var inst_41237__$1 = inst_41259;
var state_41393__$1 = (function (){var statearr_41446 = state_41393;
(statearr_41446[(18)] = inst_41256);

(statearr_41446[(13)] = inst_41236__$1);

(statearr_41446[(14)] = inst_41237__$1);

(statearr_41446[(15)] = inst_41235__$1);

(statearr_41446[(17)] = inst_41234__$1);

return statearr_41446;
})();
var statearr_41447_43917 = state_41393__$1;
(statearr_41447_43917[(2)] = null);

(statearr_41447_43917[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (21))){
var inst_41292 = (state_41393[(2)]);
var state_41393__$1 = state_41393;
var statearr_41451_43920 = state_41393__$1;
(statearr_41451_43920[(2)] = inst_41292);

(statearr_41451_43920[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (31))){
var inst_41319 = (state_41393[(9)]);
var inst_41323 = done(null);
var inst_41324 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41319);
var state_41393__$1 = (function (){var statearr_41453 = state_41393;
(statearr_41453[(19)] = inst_41323);

return statearr_41453;
})();
var statearr_41454_43922 = state_41393__$1;
(statearr_41454_43922[(2)] = inst_41324);

(statearr_41454_43922[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (32))){
var inst_41314 = (state_41393[(11)]);
var inst_41312 = (state_41393[(12)]);
var inst_41311 = (state_41393[(20)]);
var inst_41313 = (state_41393[(21)]);
var inst_41332 = (state_41393[(2)]);
var inst_41334 = (inst_41314 + (1));
var tmp41448 = inst_41312;
var tmp41449 = inst_41311;
var tmp41450 = inst_41313;
var inst_41311__$1 = tmp41449;
var inst_41312__$1 = tmp41448;
var inst_41313__$1 = tmp41450;
var inst_41314__$1 = inst_41334;
var state_41393__$1 = (function (){var statearr_41456 = state_41393;
(statearr_41456[(22)] = inst_41332);

(statearr_41456[(11)] = inst_41314__$1);

(statearr_41456[(12)] = inst_41312__$1);

(statearr_41456[(20)] = inst_41311__$1);

(statearr_41456[(21)] = inst_41313__$1);

return statearr_41456;
})();
var statearr_41458_43926 = state_41393__$1;
(statearr_41458_43926[(2)] = null);

(statearr_41458_43926[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (40))){
var inst_41353 = (state_41393[(23)]);
var inst_41357 = done(null);
var inst_41358 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_41353);
var state_41393__$1 = (function (){var statearr_41462 = state_41393;
(statearr_41462[(24)] = inst_41357);

return statearr_41462;
})();
var statearr_41463_43929 = state_41393__$1;
(statearr_41463_43929[(2)] = inst_41358);

(statearr_41463_43929[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (33))){
var inst_41337 = (state_41393[(25)]);
var inst_41340 = cljs.core.chunked_seq_QMARK_(inst_41337);
var state_41393__$1 = state_41393;
if(inst_41340){
var statearr_41465_43934 = state_41393__$1;
(statearr_41465_43934[(1)] = (36));

} else {
var statearr_41467_43935 = state_41393__$1;
(statearr_41467_43935[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (13))){
var inst_41249 = (state_41393[(26)]);
var inst_41253 = cljs.core.async.close_BANG_(inst_41249);
var state_41393__$1 = state_41393;
var statearr_41470_43936 = state_41393__$1;
(statearr_41470_43936[(2)] = inst_41253);

(statearr_41470_43936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (22))){
var inst_41276 = (state_41393[(8)]);
var inst_41285 = cljs.core.async.close_BANG_(inst_41276);
var state_41393__$1 = state_41393;
var statearr_41472_43939 = state_41393__$1;
(statearr_41472_43939[(2)] = inst_41285);

(statearr_41472_43939[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (36))){
var inst_41337 = (state_41393[(25)]);
var inst_41342 = cljs.core.chunk_first(inst_41337);
var inst_41343 = cljs.core.chunk_rest(inst_41337);
var inst_41344 = cljs.core.count(inst_41342);
var inst_41311 = inst_41343;
var inst_41312 = inst_41342;
var inst_41313 = inst_41344;
var inst_41314 = (0);
var state_41393__$1 = (function (){var statearr_41473 = state_41393;
(statearr_41473[(11)] = inst_41314);

(statearr_41473[(12)] = inst_41312);

(statearr_41473[(20)] = inst_41311);

(statearr_41473[(21)] = inst_41313);

return statearr_41473;
})();
var statearr_41474_43948 = state_41393__$1;
(statearr_41474_43948[(2)] = null);

(statearr_41474_43948[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (41))){
var inst_41337 = (state_41393[(25)]);
var inst_41360 = (state_41393[(2)]);
var inst_41361 = cljs.core.next(inst_41337);
var inst_41311 = inst_41361;
var inst_41312 = null;
var inst_41313 = (0);
var inst_41314 = (0);
var state_41393__$1 = (function (){var statearr_41476 = state_41393;
(statearr_41476[(11)] = inst_41314);

(statearr_41476[(12)] = inst_41312);

(statearr_41476[(27)] = inst_41360);

(statearr_41476[(20)] = inst_41311);

(statearr_41476[(21)] = inst_41313);

return statearr_41476;
})();
var statearr_41478_43951 = state_41393__$1;
(statearr_41478_43951[(2)] = null);

(statearr_41478_43951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (43))){
var state_41393__$1 = state_41393;
var statearr_41479_43952 = state_41393__$1;
(statearr_41479_43952[(2)] = null);

(statearr_41479_43952[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (29))){
var inst_41372 = (state_41393[(2)]);
var state_41393__$1 = state_41393;
var statearr_41480_43953 = state_41393__$1;
(statearr_41480_43953[(2)] = inst_41372);

(statearr_41480_43953[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (44))){
var inst_41386 = (state_41393[(2)]);
var state_41393__$1 = (function (){var statearr_41481 = state_41393;
(statearr_41481[(28)] = inst_41386);

return statearr_41481;
})();
var statearr_41482_43957 = state_41393__$1;
(statearr_41482_43957[(2)] = null);

(statearr_41482_43957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (6))){
var inst_41303 = (state_41393[(29)]);
var inst_41302 = cljs.core.deref(cs);
var inst_41303__$1 = cljs.core.keys(inst_41302);
var inst_41304 = cljs.core.count(inst_41303__$1);
var inst_41305 = cljs.core.reset_BANG_(dctr,inst_41304);
var inst_41310 = cljs.core.seq(inst_41303__$1);
var inst_41311 = inst_41310;
var inst_41312 = null;
var inst_41313 = (0);
var inst_41314 = (0);
var state_41393__$1 = (function (){var statearr_41487 = state_41393;
(statearr_41487[(30)] = inst_41305);

(statearr_41487[(29)] = inst_41303__$1);

(statearr_41487[(11)] = inst_41314);

(statearr_41487[(12)] = inst_41312);

(statearr_41487[(20)] = inst_41311);

(statearr_41487[(21)] = inst_41313);

return statearr_41487;
})();
var statearr_41489_43972 = state_41393__$1;
(statearr_41489_43972[(2)] = null);

(statearr_41489_43972[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (28))){
var inst_41311 = (state_41393[(20)]);
var inst_41337 = (state_41393[(25)]);
var inst_41337__$1 = cljs.core.seq(inst_41311);
var state_41393__$1 = (function (){var statearr_41490 = state_41393;
(statearr_41490[(25)] = inst_41337__$1);

return statearr_41490;
})();
if(inst_41337__$1){
var statearr_41491_43973 = state_41393__$1;
(statearr_41491_43973[(1)] = (33));

} else {
var statearr_41492_43974 = state_41393__$1;
(statearr_41492_43974[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (25))){
var inst_41314 = (state_41393[(11)]);
var inst_41313 = (state_41393[(21)]);
var inst_41316 = (inst_41314 < inst_41313);
var inst_41317 = inst_41316;
var state_41393__$1 = state_41393;
if(cljs.core.truth_(inst_41317)){
var statearr_41493_43976 = state_41393__$1;
(statearr_41493_43976[(1)] = (27));

} else {
var statearr_41494_43977 = state_41393__$1;
(statearr_41494_43977[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (34))){
var state_41393__$1 = state_41393;
var statearr_41496_43978 = state_41393__$1;
(statearr_41496_43978[(2)] = null);

(statearr_41496_43978[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (17))){
var state_41393__$1 = state_41393;
var statearr_41497_43979 = state_41393__$1;
(statearr_41497_43979[(2)] = null);

(statearr_41497_43979[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (3))){
var inst_41391 = (state_41393[(2)]);
var state_41393__$1 = state_41393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41393__$1,inst_41391);
} else {
if((state_val_41395 === (12))){
var inst_41297 = (state_41393[(2)]);
var state_41393__$1 = state_41393;
var statearr_41499_43980 = state_41393__$1;
(statearr_41499_43980[(2)] = inst_41297);

(statearr_41499_43980[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (2))){
var state_41393__$1 = state_41393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41393__$1,(4),ch);
} else {
if((state_val_41395 === (23))){
var state_41393__$1 = state_41393;
var statearr_41504_43981 = state_41393__$1;
(statearr_41504_43981[(2)] = null);

(statearr_41504_43981[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (35))){
var inst_41369 = (state_41393[(2)]);
var state_41393__$1 = state_41393;
var statearr_41506_43987 = state_41393__$1;
(statearr_41506_43987[(2)] = inst_41369);

(statearr_41506_43987[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (19))){
var inst_41262 = (state_41393[(7)]);
var inst_41266 = cljs.core.chunk_first(inst_41262);
var inst_41267 = cljs.core.chunk_rest(inst_41262);
var inst_41268 = cljs.core.count(inst_41266);
var inst_41234 = inst_41267;
var inst_41235 = inst_41266;
var inst_41236 = inst_41268;
var inst_41237 = (0);
var state_41393__$1 = (function (){var statearr_41512 = state_41393;
(statearr_41512[(13)] = inst_41236);

(statearr_41512[(14)] = inst_41237);

(statearr_41512[(15)] = inst_41235);

(statearr_41512[(17)] = inst_41234);

return statearr_41512;
})();
var statearr_41513_43993 = state_41393__$1;
(statearr_41513_43993[(2)] = null);

(statearr_41513_43993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (11))){
var inst_41262 = (state_41393[(7)]);
var inst_41234 = (state_41393[(17)]);
var inst_41262__$1 = cljs.core.seq(inst_41234);
var state_41393__$1 = (function (){var statearr_41516 = state_41393;
(statearr_41516[(7)] = inst_41262__$1);

return statearr_41516;
})();
if(inst_41262__$1){
var statearr_41517_43996 = state_41393__$1;
(statearr_41517_43996[(1)] = (16));

} else {
var statearr_41518_43997 = state_41393__$1;
(statearr_41518_43997[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (9))){
var inst_41300 = (state_41393[(2)]);
var state_41393__$1 = state_41393;
var statearr_41519_43998 = state_41393__$1;
(statearr_41519_43998[(2)] = inst_41300);

(statearr_41519_43998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (5))){
var inst_41232 = cljs.core.deref(cs);
var inst_41233 = cljs.core.seq(inst_41232);
var inst_41234 = inst_41233;
var inst_41235 = null;
var inst_41236 = (0);
var inst_41237 = (0);
var state_41393__$1 = (function (){var statearr_41521 = state_41393;
(statearr_41521[(13)] = inst_41236);

(statearr_41521[(14)] = inst_41237);

(statearr_41521[(15)] = inst_41235);

(statearr_41521[(17)] = inst_41234);

return statearr_41521;
})();
var statearr_41525_44004 = state_41393__$1;
(statearr_41525_44004[(2)] = null);

(statearr_41525_44004[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (14))){
var state_41393__$1 = state_41393;
var statearr_41526_44011 = state_41393__$1;
(statearr_41526_44011[(2)] = null);

(statearr_41526_44011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (45))){
var inst_41383 = (state_41393[(2)]);
var state_41393__$1 = state_41393;
var statearr_41527_44012 = state_41393__$1;
(statearr_41527_44012[(2)] = inst_41383);

(statearr_41527_44012[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (26))){
var inst_41303 = (state_41393[(29)]);
var inst_41374 = (state_41393[(2)]);
var inst_41379 = cljs.core.seq(inst_41303);
var state_41393__$1 = (function (){var statearr_41528 = state_41393;
(statearr_41528[(31)] = inst_41374);

return statearr_41528;
})();
if(inst_41379){
var statearr_41529_44017 = state_41393__$1;
(statearr_41529_44017[(1)] = (42));

} else {
var statearr_41530_44022 = state_41393__$1;
(statearr_41530_44022[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (16))){
var inst_41262 = (state_41393[(7)]);
var inst_41264 = cljs.core.chunked_seq_QMARK_(inst_41262);
var state_41393__$1 = state_41393;
if(inst_41264){
var statearr_41532_44029 = state_41393__$1;
(statearr_41532_44029[(1)] = (19));

} else {
var statearr_41533_44030 = state_41393__$1;
(statearr_41533_44030[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (38))){
var inst_41366 = (state_41393[(2)]);
var state_41393__$1 = state_41393;
var statearr_41536_44031 = state_41393__$1;
(statearr_41536_44031[(2)] = inst_41366);

(statearr_41536_44031[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (30))){
var state_41393__$1 = state_41393;
var statearr_41540_44032 = state_41393__$1;
(statearr_41540_44032[(2)] = null);

(statearr_41540_44032[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (10))){
var inst_41237 = (state_41393[(14)]);
var inst_41235 = (state_41393[(15)]);
var inst_41248 = cljs.core._nth(inst_41235,inst_41237);
var inst_41249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41248,(0),null);
var inst_41250 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41248,(1),null);
var state_41393__$1 = (function (){var statearr_41541 = state_41393;
(statearr_41541[(26)] = inst_41249);

return statearr_41541;
})();
if(cljs.core.truth_(inst_41250)){
var statearr_41543_44045 = state_41393__$1;
(statearr_41543_44045[(1)] = (13));

} else {
var statearr_41544_44046 = state_41393__$1;
(statearr_41544_44046[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (18))){
var inst_41295 = (state_41393[(2)]);
var state_41393__$1 = state_41393;
var statearr_41545_44047 = state_41393__$1;
(statearr_41545_44047[(2)] = inst_41295);

(statearr_41545_44047[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (42))){
var state_41393__$1 = state_41393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41393__$1,(45),dchan);
} else {
if((state_val_41395 === (37))){
var inst_41225 = (state_41393[(10)]);
var inst_41353 = (state_41393[(23)]);
var inst_41337 = (state_41393[(25)]);
var inst_41353__$1 = cljs.core.first(inst_41337);
var inst_41354 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_41353__$1,inst_41225,done);
var state_41393__$1 = (function (){var statearr_41548 = state_41393;
(statearr_41548[(23)] = inst_41353__$1);

return statearr_41548;
})();
if(cljs.core.truth_(inst_41354)){
var statearr_41549_44057 = state_41393__$1;
(statearr_41549_44057[(1)] = (39));

} else {
var statearr_41553_44058 = state_41393__$1;
(statearr_41553_44058[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41395 === (8))){
var inst_41236 = (state_41393[(13)]);
var inst_41237 = (state_41393[(14)]);
var inst_41239 = (inst_41237 < inst_41236);
var inst_41240 = inst_41239;
var state_41393__$1 = state_41393;
if(cljs.core.truth_(inst_41240)){
var statearr_41554_44059 = state_41393__$1;
(statearr_41554_44059[(1)] = (10));

} else {
var statearr_41556_44060 = state_41393__$1;
(statearr_41556_44060[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__39723__auto__ = null;
var cljs$core$async$mult_$_state_machine__39723__auto____0 = (function (){
var statearr_41563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41563[(0)] = cljs$core$async$mult_$_state_machine__39723__auto__);

(statearr_41563[(1)] = (1));

return statearr_41563;
});
var cljs$core$async$mult_$_state_machine__39723__auto____1 = (function (state_41393){
while(true){
var ret_value__39724__auto__ = (function (){try{while(true){
var result__39725__auto__ = switch__39722__auto__(state_41393);
if(cljs.core.keyword_identical_QMARK_(result__39725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39725__auto__;
}
break;
}
}catch (e41564){if((e41564 instanceof Object)){
var ex__39726__auto__ = e41564;
var statearr_41567_44061 = state_41393;
(statearr_41567_44061[(5)] = ex__39726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41393);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41564;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44062 = state_41393;
state_41393 = G__44062;
continue;
} else {
return ret_value__39724__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__39723__auto__ = function(state_41393){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__39723__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__39723__auto____1.call(this,state_41393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__39723__auto____0;
cljs$core$async$mult_$_state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__39723__auto____1;
return cljs$core$async$mult_$_state_machine__39723__auto__;
})()
})();
var state__39993__auto__ = (function (){var statearr_41570 = f__39992__auto__();
(statearr_41570[(6)] = c__39991__auto___43877);

return statearr_41570;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39993__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__41573 = arguments.length;
switch (G__41573) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_44065 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_44065(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_44069 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_44069(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_44070 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_44070(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_44077 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_44077(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_44078 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_44078(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___44107 = arguments.length;
var i__5770__auto___44112 = (0);
while(true){
if((i__5770__auto___44112 < len__5769__auto___44107)){
args__5775__auto__.push((arguments[i__5770__auto___44112]));

var G__44116 = (i__5770__auto___44112 + (1));
i__5770__auto___44112 = G__44116;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__41604){
var map__41605 = p__41604;
var map__41605__$1 = cljs.core.__destructure_map(map__41605);
var opts = map__41605__$1;
var statearr_41610_44123 = state;
(statearr_41610_44123[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_41612_44132 = state;
(statearr_41612_44132[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_41613_44133 = state;
(statearr_41613_44133[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq41599){
var G__41600 = cljs.core.first(seq41599);
var seq41599__$1 = cljs.core.next(seq41599);
var G__41601 = cljs.core.first(seq41599__$1);
var seq41599__$2 = cljs.core.next(seq41599__$1);
var G__41602 = cljs.core.first(seq41599__$2);
var seq41599__$3 = cljs.core.next(seq41599__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41600,G__41601,G__41602,seq41599__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41627 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41628){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta41628 = meta41628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41629,meta41628__$1){
var self__ = this;
var _41629__$1 = this;
return (new cljs.core.async.t_cljs$core$async41627(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta41628__$1));
}));

(cljs.core.async.t_cljs$core$async41627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41629){
var self__ = this;
var _41629__$1 = this;
return self__.meta41628;
}));

(cljs.core.async.t_cljs$core$async41627.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41627.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async41627.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41627.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41627.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41627.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41627.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41627.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async41627.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta41628","meta41628",458777303,null)], null);
}));

(cljs.core.async.t_cljs$core$async41627.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41627");

(cljs.core.async.t_cljs$core$async41627.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async41627");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41627.
 */
cljs.core.async.__GT_t_cljs$core$async41627 = (function cljs$core$async$__GT_t_cljs$core$async41627(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41628){
return (new cljs.core.async.t_cljs$core$async41627(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta41628));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async41627(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__39991__auto___44184 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39992__auto__ = (function (){var switch__39722__auto__ = (function (state_41710){
var state_val_41711 = (state_41710[(1)]);
if((state_val_41711 === (7))){
var inst_41665 = (state_41710[(2)]);
var state_41710__$1 = state_41710;
if(cljs.core.truth_(inst_41665)){
var statearr_41714_44185 = state_41710__$1;
(statearr_41714_44185[(1)] = (8));

} else {
var statearr_41715_44186 = state_41710__$1;
(statearr_41715_44186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (20))){
var inst_41658 = (state_41710[(7)]);
var state_41710__$1 = state_41710;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41710__$1,(23),out,inst_41658);
} else {
if((state_val_41711 === (1))){
var inst_41639 = calc_state();
var inst_41640 = cljs.core.__destructure_map(inst_41639);
var inst_41641 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41640,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41642 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41640,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41643 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41640,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_41644 = inst_41639;
var state_41710__$1 = (function (){var statearr_41716 = state_41710;
(statearr_41716[(8)] = inst_41644);

(statearr_41716[(9)] = inst_41643);

(statearr_41716[(10)] = inst_41641);

(statearr_41716[(11)] = inst_41642);

return statearr_41716;
})();
var statearr_41718_44187 = state_41710__$1;
(statearr_41718_44187[(2)] = null);

(statearr_41718_44187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (24))){
var inst_41647 = (state_41710[(12)]);
var inst_41644 = inst_41647;
var state_41710__$1 = (function (){var statearr_41719 = state_41710;
(statearr_41719[(8)] = inst_41644);

return statearr_41719;
})();
var statearr_41720_44188 = state_41710__$1;
(statearr_41720_44188[(2)] = null);

(statearr_41720_44188[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (4))){
var inst_41660 = (state_41710[(13)]);
var inst_41658 = (state_41710[(7)]);
var inst_41657 = (state_41710[(2)]);
var inst_41658__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41657,(0),null);
var inst_41659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_41657,(1),null);
var inst_41660__$1 = (inst_41658__$1 == null);
var state_41710__$1 = (function (){var statearr_41722 = state_41710;
(statearr_41722[(13)] = inst_41660__$1);

(statearr_41722[(7)] = inst_41658__$1);

(statearr_41722[(14)] = inst_41659);

return statearr_41722;
})();
if(cljs.core.truth_(inst_41660__$1)){
var statearr_41725_44192 = state_41710__$1;
(statearr_41725_44192[(1)] = (5));

} else {
var statearr_41726_44193 = state_41710__$1;
(statearr_41726_44193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (15))){
var inst_41648 = (state_41710[(15)]);
var inst_41679 = (state_41710[(16)]);
var inst_41679__$1 = cljs.core.empty_QMARK_(inst_41648);
var state_41710__$1 = (function (){var statearr_41731 = state_41710;
(statearr_41731[(16)] = inst_41679__$1);

return statearr_41731;
})();
if(inst_41679__$1){
var statearr_41733_44201 = state_41710__$1;
(statearr_41733_44201[(1)] = (17));

} else {
var statearr_41734_44202 = state_41710__$1;
(statearr_41734_44202[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (21))){
var inst_41647 = (state_41710[(12)]);
var inst_41644 = inst_41647;
var state_41710__$1 = (function (){var statearr_41735 = state_41710;
(statearr_41735[(8)] = inst_41644);

return statearr_41735;
})();
var statearr_41736_44204 = state_41710__$1;
(statearr_41736_44204[(2)] = null);

(statearr_41736_44204[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (13))){
var inst_41672 = (state_41710[(2)]);
var inst_41673 = calc_state();
var inst_41644 = inst_41673;
var state_41710__$1 = (function (){var statearr_41737 = state_41710;
(statearr_41737[(17)] = inst_41672);

(statearr_41737[(8)] = inst_41644);

return statearr_41737;
})();
var statearr_41739_44205 = state_41710__$1;
(statearr_41739_44205[(2)] = null);

(statearr_41739_44205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (22))){
var inst_41699 = (state_41710[(2)]);
var state_41710__$1 = state_41710;
var statearr_41741_44206 = state_41710__$1;
(statearr_41741_44206[(2)] = inst_41699);

(statearr_41741_44206[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (6))){
var inst_41659 = (state_41710[(14)]);
var inst_41663 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_41659,change);
var state_41710__$1 = state_41710;
var statearr_41742_44214 = state_41710__$1;
(statearr_41742_44214[(2)] = inst_41663);

(statearr_41742_44214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (25))){
var state_41710__$1 = state_41710;
var statearr_41744_44216 = state_41710__$1;
(statearr_41744_44216[(2)] = null);

(statearr_41744_44216[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (17))){
var inst_41649 = (state_41710[(18)]);
var inst_41659 = (state_41710[(14)]);
var inst_41681 = (inst_41649.cljs$core$IFn$_invoke$arity$1 ? inst_41649.cljs$core$IFn$_invoke$arity$1(inst_41659) : inst_41649.call(null,inst_41659));
var inst_41682 = cljs.core.not(inst_41681);
var state_41710__$1 = state_41710;
var statearr_41748_44217 = state_41710__$1;
(statearr_41748_44217[(2)] = inst_41682);

(statearr_41748_44217[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (3))){
var inst_41703 = (state_41710[(2)]);
var state_41710__$1 = state_41710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41710__$1,inst_41703);
} else {
if((state_val_41711 === (12))){
var state_41710__$1 = state_41710;
var statearr_41750_44218 = state_41710__$1;
(statearr_41750_44218[(2)] = null);

(statearr_41750_44218[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (2))){
var inst_41644 = (state_41710[(8)]);
var inst_41647 = (state_41710[(12)]);
var inst_41647__$1 = cljs.core.__destructure_map(inst_41644);
var inst_41648 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41647__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_41649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41647__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_41650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41647__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_41710__$1 = (function (){var statearr_41751 = state_41710;
(statearr_41751[(18)] = inst_41649);

(statearr_41751[(15)] = inst_41648);

(statearr_41751[(12)] = inst_41647__$1);

return statearr_41751;
})();
return cljs.core.async.ioc_alts_BANG_(state_41710__$1,(4),inst_41650);
} else {
if((state_val_41711 === (23))){
var inst_41690 = (state_41710[(2)]);
var state_41710__$1 = state_41710;
if(cljs.core.truth_(inst_41690)){
var statearr_41753_44219 = state_41710__$1;
(statearr_41753_44219[(1)] = (24));

} else {
var statearr_41754_44220 = state_41710__$1;
(statearr_41754_44220[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (19))){
var inst_41685 = (state_41710[(2)]);
var state_41710__$1 = state_41710;
var statearr_41755_44221 = state_41710__$1;
(statearr_41755_44221[(2)] = inst_41685);

(statearr_41755_44221[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (11))){
var inst_41659 = (state_41710[(14)]);
var inst_41669 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_41659);
var state_41710__$1 = state_41710;
var statearr_41757_44231 = state_41710__$1;
(statearr_41757_44231[(2)] = inst_41669);

(statearr_41757_44231[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (9))){
var inst_41676 = (state_41710[(19)]);
var inst_41659 = (state_41710[(14)]);
var inst_41648 = (state_41710[(15)]);
var inst_41676__$1 = (inst_41648.cljs$core$IFn$_invoke$arity$1 ? inst_41648.cljs$core$IFn$_invoke$arity$1(inst_41659) : inst_41648.call(null,inst_41659));
var state_41710__$1 = (function (){var statearr_41758 = state_41710;
(statearr_41758[(19)] = inst_41676__$1);

return statearr_41758;
})();
if(cljs.core.truth_(inst_41676__$1)){
var statearr_41759_44232 = state_41710__$1;
(statearr_41759_44232[(1)] = (14));

} else {
var statearr_41760_44233 = state_41710__$1;
(statearr_41760_44233[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (5))){
var inst_41660 = (state_41710[(13)]);
var state_41710__$1 = state_41710;
var statearr_41761_44235 = state_41710__$1;
(statearr_41761_44235[(2)] = inst_41660);

(statearr_41761_44235[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (14))){
var inst_41676 = (state_41710[(19)]);
var state_41710__$1 = state_41710;
var statearr_41762_44237 = state_41710__$1;
(statearr_41762_44237[(2)] = inst_41676);

(statearr_41762_44237[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (26))){
var inst_41695 = (state_41710[(2)]);
var state_41710__$1 = state_41710;
var statearr_41764_44238 = state_41710__$1;
(statearr_41764_44238[(2)] = inst_41695);

(statearr_41764_44238[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (16))){
var inst_41687 = (state_41710[(2)]);
var state_41710__$1 = state_41710;
if(cljs.core.truth_(inst_41687)){
var statearr_41766_44241 = state_41710__$1;
(statearr_41766_44241[(1)] = (20));

} else {
var statearr_41767_44242 = state_41710__$1;
(statearr_41767_44242[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (10))){
var inst_41701 = (state_41710[(2)]);
var state_41710__$1 = state_41710;
var statearr_41769_44243 = state_41710__$1;
(statearr_41769_44243[(2)] = inst_41701);

(statearr_41769_44243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (18))){
var inst_41679 = (state_41710[(16)]);
var state_41710__$1 = state_41710;
var statearr_41770_44244 = state_41710__$1;
(statearr_41770_44244[(2)] = inst_41679);

(statearr_41770_44244[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41711 === (8))){
var inst_41658 = (state_41710[(7)]);
var inst_41667 = (inst_41658 == null);
var state_41710__$1 = state_41710;
if(cljs.core.truth_(inst_41667)){
var statearr_41771_44245 = state_41710__$1;
(statearr_41771_44245[(1)] = (11));

} else {
var statearr_41772_44249 = state_41710__$1;
(statearr_41772_44249[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__39723__auto__ = null;
var cljs$core$async$mix_$_state_machine__39723__auto____0 = (function (){
var statearr_41774 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41774[(0)] = cljs$core$async$mix_$_state_machine__39723__auto__);

(statearr_41774[(1)] = (1));

return statearr_41774;
});
var cljs$core$async$mix_$_state_machine__39723__auto____1 = (function (state_41710){
while(true){
var ret_value__39724__auto__ = (function (){try{while(true){
var result__39725__auto__ = switch__39722__auto__(state_41710);
if(cljs.core.keyword_identical_QMARK_(result__39725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39725__auto__;
}
break;
}
}catch (e41775){if((e41775 instanceof Object)){
var ex__39726__auto__ = e41775;
var statearr_41777_44261 = state_41710;
(statearr_41777_44261[(5)] = ex__39726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41710);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41775;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44262 = state_41710;
state_41710 = G__44262;
continue;
} else {
return ret_value__39724__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__39723__auto__ = function(state_41710){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__39723__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__39723__auto____1.call(this,state_41710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__39723__auto____0;
cljs$core$async$mix_$_state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__39723__auto____1;
return cljs$core$async$mix_$_state_machine__39723__auto__;
})()
})();
var state__39993__auto__ = (function (){var statearr_41781 = f__39992__auto__();
(statearr_41781[(6)] = c__39991__auto___44184);

return statearr_41781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39993__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_44263 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_44263(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_44269 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_44269(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_44270 = (function() {
var G__44271 = null;
var G__44271__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__44271__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__44271 = function(p,v){
switch(arguments.length){
case 1:
return G__44271__1.call(this,p);
case 2:
return G__44271__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44271.cljs$core$IFn$_invoke$arity$1 = G__44271__1;
G__44271.cljs$core$IFn$_invoke$arity$2 = G__44271__2;
return G__44271;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__41805 = arguments.length;
switch (G__41805) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44270(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44270(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41813 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta41814){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta41814 = meta41814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41815,meta41814__$1){
var self__ = this;
var _41815__$1 = this;
return (new cljs.core.async.t_cljs$core$async41813(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta41814__$1));
}));

(cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41815){
var self__ = this;
var _41815__$1 = this;
return self__.meta41814;
}));

(cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async41813.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async41813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta41814","meta41814",634948331,null)], null);
}));

(cljs.core.async.t_cljs$core$async41813.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41813");

(cljs.core.async.t_cljs$core$async41813.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async41813");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41813.
 */
cljs.core.async.__GT_t_cljs$core$async41813 = (function cljs$core$async$__GT_t_cljs$core$async41813(ch,topic_fn,buf_fn,mults,ensure_mult,meta41814){
return (new cljs.core.async.t_cljs$core$async41813(ch,topic_fn,buf_fn,mults,ensure_mult,meta41814));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__41812 = arguments.length;
switch (G__41812) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__41809_SHARP_){
if(cljs.core.truth_((p1__41809_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__41809_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__41809_SHARP_.call(null,topic)))){
return p1__41809_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__41809_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async41813(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__39991__auto___44288 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39992__auto__ = (function (){var switch__39722__auto__ = (function (state_41912){
var state_val_41913 = (state_41912[(1)]);
if((state_val_41913 === (7))){
var inst_41907 = (state_41912[(2)]);
var state_41912__$1 = state_41912;
var statearr_41915_44289 = state_41912__$1;
(statearr_41915_44289[(2)] = inst_41907);

(statearr_41915_44289[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (20))){
var state_41912__$1 = state_41912;
var statearr_41917_44290 = state_41912__$1;
(statearr_41917_44290[(2)] = null);

(statearr_41917_44290[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (1))){
var state_41912__$1 = state_41912;
var statearr_41918_44291 = state_41912__$1;
(statearr_41918_44291[(2)] = null);

(statearr_41918_44291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (24))){
var inst_41888 = (state_41912[(7)]);
var inst_41899 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_41888);
var state_41912__$1 = state_41912;
var statearr_41923_44292 = state_41912__$1;
(statearr_41923_44292[(2)] = inst_41899);

(statearr_41923_44292[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (4))){
var inst_41828 = (state_41912[(8)]);
var inst_41828__$1 = (state_41912[(2)]);
var inst_41829 = (inst_41828__$1 == null);
var state_41912__$1 = (function (){var statearr_41925 = state_41912;
(statearr_41925[(8)] = inst_41828__$1);

return statearr_41925;
})();
if(cljs.core.truth_(inst_41829)){
var statearr_41926_44293 = state_41912__$1;
(statearr_41926_44293[(1)] = (5));

} else {
var statearr_41927_44294 = state_41912__$1;
(statearr_41927_44294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (15))){
var inst_41877 = (state_41912[(2)]);
var state_41912__$1 = state_41912;
var statearr_41928_44295 = state_41912__$1;
(statearr_41928_44295[(2)] = inst_41877);

(statearr_41928_44295[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (21))){
var inst_41904 = (state_41912[(2)]);
var state_41912__$1 = (function (){var statearr_41929 = state_41912;
(statearr_41929[(9)] = inst_41904);

return statearr_41929;
})();
var statearr_41931_44296 = state_41912__$1;
(statearr_41931_44296[(2)] = null);

(statearr_41931_44296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (13))){
var inst_41856 = (state_41912[(10)]);
var inst_41861 = cljs.core.chunked_seq_QMARK_(inst_41856);
var state_41912__$1 = state_41912;
if(inst_41861){
var statearr_41932_44297 = state_41912__$1;
(statearr_41932_44297[(1)] = (16));

} else {
var statearr_41933_44302 = state_41912__$1;
(statearr_41933_44302[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (22))){
var inst_41895 = (state_41912[(2)]);
var state_41912__$1 = state_41912;
if(cljs.core.truth_(inst_41895)){
var statearr_41934_44303 = state_41912__$1;
(statearr_41934_44303[(1)] = (23));

} else {
var statearr_41935_44307 = state_41912__$1;
(statearr_41935_44307[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (6))){
var inst_41828 = (state_41912[(8)]);
var inst_41890 = (state_41912[(11)]);
var inst_41888 = (state_41912[(7)]);
var inst_41888__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_41828) : topic_fn.call(null,inst_41828));
var inst_41889 = cljs.core.deref(mults);
var inst_41890__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_41889,inst_41888__$1);
var state_41912__$1 = (function (){var statearr_41936 = state_41912;
(statearr_41936[(11)] = inst_41890__$1);

(statearr_41936[(7)] = inst_41888__$1);

return statearr_41936;
})();
if(cljs.core.truth_(inst_41890__$1)){
var statearr_41937_44310 = state_41912__$1;
(statearr_41937_44310[(1)] = (19));

} else {
var statearr_41939_44311 = state_41912__$1;
(statearr_41939_44311[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (25))){
var inst_41901 = (state_41912[(2)]);
var state_41912__$1 = state_41912;
var statearr_41941_44312 = state_41912__$1;
(statearr_41941_44312[(2)] = inst_41901);

(statearr_41941_44312[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (17))){
var inst_41856 = (state_41912[(10)]);
var inst_41868 = cljs.core.first(inst_41856);
var inst_41869 = cljs.core.async.muxch_STAR_(inst_41868);
var inst_41870 = cljs.core.async.close_BANG_(inst_41869);
var inst_41871 = cljs.core.next(inst_41856);
var inst_41838 = inst_41871;
var inst_41839 = null;
var inst_41840 = (0);
var inst_41841 = (0);
var state_41912__$1 = (function (){var statearr_41943 = state_41912;
(statearr_41943[(12)] = inst_41841);

(statearr_41943[(13)] = inst_41870);

(statearr_41943[(14)] = inst_41840);

(statearr_41943[(15)] = inst_41839);

(statearr_41943[(16)] = inst_41838);

return statearr_41943;
})();
var statearr_41944_44317 = state_41912__$1;
(statearr_41944_44317[(2)] = null);

(statearr_41944_44317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (3))){
var inst_41909 = (state_41912[(2)]);
var state_41912__$1 = state_41912;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41912__$1,inst_41909);
} else {
if((state_val_41913 === (12))){
var inst_41880 = (state_41912[(2)]);
var state_41912__$1 = state_41912;
var statearr_41948_44321 = state_41912__$1;
(statearr_41948_44321[(2)] = inst_41880);

(statearr_41948_44321[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (2))){
var state_41912__$1 = state_41912;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41912__$1,(4),ch);
} else {
if((state_val_41913 === (23))){
var state_41912__$1 = state_41912;
var statearr_41952_44322 = state_41912__$1;
(statearr_41952_44322[(2)] = null);

(statearr_41952_44322[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (19))){
var inst_41828 = (state_41912[(8)]);
var inst_41890 = (state_41912[(11)]);
var inst_41893 = cljs.core.async.muxch_STAR_(inst_41890);
var state_41912__$1 = state_41912;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41912__$1,(22),inst_41893,inst_41828);
} else {
if((state_val_41913 === (11))){
var inst_41856 = (state_41912[(10)]);
var inst_41838 = (state_41912[(16)]);
var inst_41856__$1 = cljs.core.seq(inst_41838);
var state_41912__$1 = (function (){var statearr_41953 = state_41912;
(statearr_41953[(10)] = inst_41856__$1);

return statearr_41953;
})();
if(inst_41856__$1){
var statearr_41954_44335 = state_41912__$1;
(statearr_41954_44335[(1)] = (13));

} else {
var statearr_41955_44336 = state_41912__$1;
(statearr_41955_44336[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (9))){
var inst_41882 = (state_41912[(2)]);
var state_41912__$1 = state_41912;
var statearr_41956_44337 = state_41912__$1;
(statearr_41956_44337[(2)] = inst_41882);

(statearr_41956_44337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (5))){
var inst_41835 = cljs.core.deref(mults);
var inst_41836 = cljs.core.vals(inst_41835);
var inst_41837 = cljs.core.seq(inst_41836);
var inst_41838 = inst_41837;
var inst_41839 = null;
var inst_41840 = (0);
var inst_41841 = (0);
var state_41912__$1 = (function (){var statearr_41972 = state_41912;
(statearr_41972[(12)] = inst_41841);

(statearr_41972[(14)] = inst_41840);

(statearr_41972[(15)] = inst_41839);

(statearr_41972[(16)] = inst_41838);

return statearr_41972;
})();
var statearr_41973_44352 = state_41912__$1;
(statearr_41973_44352[(2)] = null);

(statearr_41973_44352[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (14))){
var state_41912__$1 = state_41912;
var statearr_41977_44353 = state_41912__$1;
(statearr_41977_44353[(2)] = null);

(statearr_41977_44353[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (16))){
var inst_41856 = (state_41912[(10)]);
var inst_41863 = cljs.core.chunk_first(inst_41856);
var inst_41864 = cljs.core.chunk_rest(inst_41856);
var inst_41865 = cljs.core.count(inst_41863);
var inst_41838 = inst_41864;
var inst_41839 = inst_41863;
var inst_41840 = inst_41865;
var inst_41841 = (0);
var state_41912__$1 = (function (){var statearr_41980 = state_41912;
(statearr_41980[(12)] = inst_41841);

(statearr_41980[(14)] = inst_41840);

(statearr_41980[(15)] = inst_41839);

(statearr_41980[(16)] = inst_41838);

return statearr_41980;
})();
var statearr_41981_44355 = state_41912__$1;
(statearr_41981_44355[(2)] = null);

(statearr_41981_44355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (10))){
var inst_41841 = (state_41912[(12)]);
var inst_41840 = (state_41912[(14)]);
var inst_41839 = (state_41912[(15)]);
var inst_41838 = (state_41912[(16)]);
var inst_41847 = cljs.core._nth(inst_41839,inst_41841);
var inst_41848 = cljs.core.async.muxch_STAR_(inst_41847);
var inst_41849 = cljs.core.async.close_BANG_(inst_41848);
var inst_41850 = (inst_41841 + (1));
var tmp41974 = inst_41840;
var tmp41975 = inst_41839;
var tmp41976 = inst_41838;
var inst_41838__$1 = tmp41976;
var inst_41839__$1 = tmp41975;
var inst_41840__$1 = tmp41974;
var inst_41841__$1 = inst_41850;
var state_41912__$1 = (function (){var statearr_41988 = state_41912;
(statearr_41988[(12)] = inst_41841__$1);

(statearr_41988[(17)] = inst_41849);

(statearr_41988[(14)] = inst_41840__$1);

(statearr_41988[(15)] = inst_41839__$1);

(statearr_41988[(16)] = inst_41838__$1);

return statearr_41988;
})();
var statearr_41989_44356 = state_41912__$1;
(statearr_41989_44356[(2)] = null);

(statearr_41989_44356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (18))){
var inst_41874 = (state_41912[(2)]);
var state_41912__$1 = state_41912;
var statearr_41990_44357 = state_41912__$1;
(statearr_41990_44357[(2)] = inst_41874);

(statearr_41990_44357[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41913 === (8))){
var inst_41841 = (state_41912[(12)]);
var inst_41840 = (state_41912[(14)]);
var inst_41843 = (inst_41841 < inst_41840);
var inst_41844 = inst_41843;
var state_41912__$1 = state_41912;
if(cljs.core.truth_(inst_41844)){
var statearr_41995_44359 = state_41912__$1;
(statearr_41995_44359[(1)] = (10));

} else {
var statearr_41996_44360 = state_41912__$1;
(statearr_41996_44360[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39723__auto__ = null;
var cljs$core$async$state_machine__39723__auto____0 = (function (){
var statearr_42000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42000[(0)] = cljs$core$async$state_machine__39723__auto__);

(statearr_42000[(1)] = (1));

return statearr_42000;
});
var cljs$core$async$state_machine__39723__auto____1 = (function (state_41912){
while(true){
var ret_value__39724__auto__ = (function (){try{while(true){
var result__39725__auto__ = switch__39722__auto__(state_41912);
if(cljs.core.keyword_identical_QMARK_(result__39725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39725__auto__;
}
break;
}
}catch (e42004){if((e42004 instanceof Object)){
var ex__39726__auto__ = e42004;
var statearr_42005_44363 = state_41912;
(statearr_42005_44363[(5)] = ex__39726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_41912);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42004;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44367 = state_41912;
state_41912 = G__44367;
continue;
} else {
return ret_value__39724__auto__;
}
break;
}
});
cljs$core$async$state_machine__39723__auto__ = function(state_41912){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39723__auto____1.call(this,state_41912);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39723__auto____0;
cljs$core$async$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39723__auto____1;
return cljs$core$async$state_machine__39723__auto__;
})()
})();
var state__39993__auto__ = (function (){var statearr_42010 = f__39992__auto__();
(statearr_42010[(6)] = c__39991__auto___44288);

return statearr_42010;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39993__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__42012 = arguments.length;
switch (G__42012) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__42039 = arguments.length;
switch (G__42039) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__42054 = arguments.length;
switch (G__42054) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__39991__auto___44377 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39992__auto__ = (function (){var switch__39722__auto__ = (function (state_42114){
var state_val_42115 = (state_42114[(1)]);
if((state_val_42115 === (7))){
var state_42114__$1 = state_42114;
var statearr_42121_44379 = state_42114__$1;
(statearr_42121_44379[(2)] = null);

(statearr_42121_44379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42115 === (1))){
var state_42114__$1 = state_42114;
var statearr_42123_44380 = state_42114__$1;
(statearr_42123_44380[(2)] = null);

(statearr_42123_44380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42115 === (4))){
var inst_42071 = (state_42114[(7)]);
var inst_42073 = (inst_42071 < cnt);
var state_42114__$1 = state_42114;
if(cljs.core.truth_(inst_42073)){
var statearr_42127_44383 = state_42114__$1;
(statearr_42127_44383[(1)] = (6));

} else {
var statearr_42129_44386 = state_42114__$1;
(statearr_42129_44386[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42115 === (15))){
var inst_42107 = (state_42114[(2)]);
var state_42114__$1 = state_42114;
var statearr_42131_44387 = state_42114__$1;
(statearr_42131_44387[(2)] = inst_42107);

(statearr_42131_44387[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42115 === (13))){
var inst_42100 = cljs.core.async.close_BANG_(out);
var state_42114__$1 = state_42114;
var statearr_42138_44388 = state_42114__$1;
(statearr_42138_44388[(2)] = inst_42100);

(statearr_42138_44388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42115 === (6))){
var state_42114__$1 = state_42114;
var statearr_42139_44393 = state_42114__$1;
(statearr_42139_44393[(2)] = null);

(statearr_42139_44393[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42115 === (3))){
var inst_42109 = (state_42114[(2)]);
var state_42114__$1 = state_42114;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42114__$1,inst_42109);
} else {
if((state_val_42115 === (12))){
var inst_42097 = (state_42114[(8)]);
var inst_42097__$1 = (state_42114[(2)]);
var inst_42098 = cljs.core.some(cljs.core.nil_QMARK_,inst_42097__$1);
var state_42114__$1 = (function (){var statearr_42146 = state_42114;
(statearr_42146[(8)] = inst_42097__$1);

return statearr_42146;
})();
if(cljs.core.truth_(inst_42098)){
var statearr_42147_44396 = state_42114__$1;
(statearr_42147_44396[(1)] = (13));

} else {
var statearr_42151_44401 = state_42114__$1;
(statearr_42151_44401[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42115 === (2))){
var inst_42070 = cljs.core.reset_BANG_(dctr,cnt);
var inst_42071 = (0);
var state_42114__$1 = (function (){var statearr_42156 = state_42114;
(statearr_42156[(7)] = inst_42071);

(statearr_42156[(9)] = inst_42070);

return statearr_42156;
})();
var statearr_42158_44402 = state_42114__$1;
(statearr_42158_44402[(2)] = null);

(statearr_42158_44402[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42115 === (11))){
var inst_42071 = (state_42114[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_42114,(10),Object,null,(9));
var inst_42083 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_42071) : chs__$1.call(null,inst_42071));
var inst_42084 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_42071) : done.call(null,inst_42071));
var inst_42085 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_42083,inst_42084);
var state_42114__$1 = state_42114;
var statearr_42162_44403 = state_42114__$1;
(statearr_42162_44403[(2)] = inst_42085);


cljs.core.async.impl.ioc_helpers.process_exception(state_42114__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42115 === (9))){
var inst_42071 = (state_42114[(7)]);
var inst_42087 = (state_42114[(2)]);
var inst_42088 = (inst_42071 + (1));
var inst_42071__$1 = inst_42088;
var state_42114__$1 = (function (){var statearr_42164 = state_42114;
(statearr_42164[(7)] = inst_42071__$1);

(statearr_42164[(10)] = inst_42087);

return statearr_42164;
})();
var statearr_42165_44415 = state_42114__$1;
(statearr_42165_44415[(2)] = null);

(statearr_42165_44415[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42115 === (5))){
var inst_42095 = (state_42114[(2)]);
var state_42114__$1 = (function (){var statearr_42171 = state_42114;
(statearr_42171[(11)] = inst_42095);

return statearr_42171;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42114__$1,(12),dchan);
} else {
if((state_val_42115 === (14))){
var inst_42097 = (state_42114[(8)]);
var inst_42102 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_42097);
var state_42114__$1 = state_42114;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42114__$1,(16),out,inst_42102);
} else {
if((state_val_42115 === (16))){
var inst_42104 = (state_42114[(2)]);
var state_42114__$1 = (function (){var statearr_42175 = state_42114;
(statearr_42175[(12)] = inst_42104);

return statearr_42175;
})();
var statearr_42177_44426 = state_42114__$1;
(statearr_42177_44426[(2)] = null);

(statearr_42177_44426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42115 === (10))){
var inst_42078 = (state_42114[(2)]);
var inst_42079 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_42114__$1 = (function (){var statearr_42178 = state_42114;
(statearr_42178[(13)] = inst_42078);

return statearr_42178;
})();
var statearr_42180_44437 = state_42114__$1;
(statearr_42180_44437[(2)] = inst_42079);


cljs.core.async.impl.ioc_helpers.process_exception(state_42114__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42115 === (8))){
var inst_42092 = (state_42114[(2)]);
var state_42114__$1 = state_42114;
var statearr_42183_44438 = state_42114__$1;
(statearr_42183_44438[(2)] = inst_42092);

(statearr_42183_44438[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39723__auto__ = null;
var cljs$core$async$state_machine__39723__auto____0 = (function (){
var statearr_42189 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42189[(0)] = cljs$core$async$state_machine__39723__auto__);

(statearr_42189[(1)] = (1));

return statearr_42189;
});
var cljs$core$async$state_machine__39723__auto____1 = (function (state_42114){
while(true){
var ret_value__39724__auto__ = (function (){try{while(true){
var result__39725__auto__ = switch__39722__auto__(state_42114);
if(cljs.core.keyword_identical_QMARK_(result__39725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39725__auto__;
}
break;
}
}catch (e42193){if((e42193 instanceof Object)){
var ex__39726__auto__ = e42193;
var statearr_42195_44447 = state_42114;
(statearr_42195_44447[(5)] = ex__39726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42193;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44449 = state_42114;
state_42114 = G__44449;
continue;
} else {
return ret_value__39724__auto__;
}
break;
}
});
cljs$core$async$state_machine__39723__auto__ = function(state_42114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39723__auto____1.call(this,state_42114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39723__auto____0;
cljs$core$async$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39723__auto____1;
return cljs$core$async$state_machine__39723__auto__;
})()
})();
var state__39993__auto__ = (function (){var statearr_42197 = f__39992__auto__();
(statearr_42197[(6)] = c__39991__auto___44377);

return statearr_42197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39993__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__42204 = arguments.length;
switch (G__42204) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39991__auto___44462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39992__auto__ = (function (){var switch__39722__auto__ = (function (state_42257){
var state_val_42258 = (state_42257[(1)]);
if((state_val_42258 === (7))){
var inst_42228 = (state_42257[(7)]);
var inst_42229 = (state_42257[(8)]);
var inst_42228__$1 = (state_42257[(2)]);
var inst_42229__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42228__$1,(0),null);
var inst_42230 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42228__$1,(1),null);
var inst_42231 = (inst_42229__$1 == null);
var state_42257__$1 = (function (){var statearr_42265 = state_42257;
(statearr_42265[(7)] = inst_42228__$1);

(statearr_42265[(8)] = inst_42229__$1);

(statearr_42265[(9)] = inst_42230);

return statearr_42265;
})();
if(cljs.core.truth_(inst_42231)){
var statearr_42267_44465 = state_42257__$1;
(statearr_42267_44465[(1)] = (8));

} else {
var statearr_42268_44466 = state_42257__$1;
(statearr_42268_44466[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42258 === (1))){
var inst_42217 = cljs.core.vec(chs);
var inst_42218 = inst_42217;
var state_42257__$1 = (function (){var statearr_42272 = state_42257;
(statearr_42272[(10)] = inst_42218);

return statearr_42272;
})();
var statearr_42273_44467 = state_42257__$1;
(statearr_42273_44467[(2)] = null);

(statearr_42273_44467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42258 === (4))){
var inst_42218 = (state_42257[(10)]);
var state_42257__$1 = state_42257;
return cljs.core.async.ioc_alts_BANG_(state_42257__$1,(7),inst_42218);
} else {
if((state_val_42258 === (6))){
var inst_42247 = (state_42257[(2)]);
var state_42257__$1 = state_42257;
var statearr_42275_44472 = state_42257__$1;
(statearr_42275_44472[(2)] = inst_42247);

(statearr_42275_44472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42258 === (3))){
var inst_42250 = (state_42257[(2)]);
var state_42257__$1 = state_42257;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42257__$1,inst_42250);
} else {
if((state_val_42258 === (2))){
var inst_42218 = (state_42257[(10)]);
var inst_42221 = cljs.core.count(inst_42218);
var inst_42222 = (inst_42221 > (0));
var state_42257__$1 = state_42257;
if(cljs.core.truth_(inst_42222)){
var statearr_42285_44477 = state_42257__$1;
(statearr_42285_44477[(1)] = (4));

} else {
var statearr_42290_44478 = state_42257__$1;
(statearr_42290_44478[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42258 === (11))){
var inst_42218 = (state_42257[(10)]);
var inst_42239 = (state_42257[(2)]);
var tmp42279 = inst_42218;
var inst_42218__$1 = tmp42279;
var state_42257__$1 = (function (){var statearr_42294 = state_42257;
(statearr_42294[(11)] = inst_42239);

(statearr_42294[(10)] = inst_42218__$1);

return statearr_42294;
})();
var statearr_42296_44481 = state_42257__$1;
(statearr_42296_44481[(2)] = null);

(statearr_42296_44481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42258 === (9))){
var inst_42229 = (state_42257[(8)]);
var state_42257__$1 = state_42257;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42257__$1,(11),out,inst_42229);
} else {
if((state_val_42258 === (5))){
var inst_42245 = cljs.core.async.close_BANG_(out);
var state_42257__$1 = state_42257;
var statearr_42303_44496 = state_42257__$1;
(statearr_42303_44496[(2)] = inst_42245);

(statearr_42303_44496[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42258 === (10))){
var inst_42242 = (state_42257[(2)]);
var state_42257__$1 = state_42257;
var statearr_42307_44500 = state_42257__$1;
(statearr_42307_44500[(2)] = inst_42242);

(statearr_42307_44500[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42258 === (8))){
var inst_42218 = (state_42257[(10)]);
var inst_42228 = (state_42257[(7)]);
var inst_42229 = (state_42257[(8)]);
var inst_42230 = (state_42257[(9)]);
var inst_42234 = (function (){var cs = inst_42218;
var vec__42224 = inst_42228;
var v = inst_42229;
var c = inst_42230;
return (function (p1__42201_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__42201_SHARP_);
});
})();
var inst_42235 = cljs.core.filterv(inst_42234,inst_42218);
var inst_42218__$1 = inst_42235;
var state_42257__$1 = (function (){var statearr_42312 = state_42257;
(statearr_42312[(10)] = inst_42218__$1);

return statearr_42312;
})();
var statearr_42313_44516 = state_42257__$1;
(statearr_42313_44516[(2)] = null);

(statearr_42313_44516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39723__auto__ = null;
var cljs$core$async$state_machine__39723__auto____0 = (function (){
var statearr_42315 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42315[(0)] = cljs$core$async$state_machine__39723__auto__);

(statearr_42315[(1)] = (1));

return statearr_42315;
});
var cljs$core$async$state_machine__39723__auto____1 = (function (state_42257){
while(true){
var ret_value__39724__auto__ = (function (){try{while(true){
var result__39725__auto__ = switch__39722__auto__(state_42257);
if(cljs.core.keyword_identical_QMARK_(result__39725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39725__auto__;
}
break;
}
}catch (e42317){if((e42317 instanceof Object)){
var ex__39726__auto__ = e42317;
var statearr_42318_44541 = state_42257;
(statearr_42318_44541[(5)] = ex__39726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42317;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44547 = state_42257;
state_42257 = G__44547;
continue;
} else {
return ret_value__39724__auto__;
}
break;
}
});
cljs$core$async$state_machine__39723__auto__ = function(state_42257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39723__auto____1.call(this,state_42257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39723__auto____0;
cljs$core$async$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39723__auto____1;
return cljs$core$async$state_machine__39723__auto__;
})()
})();
var state__39993__auto__ = (function (){var statearr_42319 = f__39992__auto__();
(statearr_42319[(6)] = c__39991__auto___44462);

return statearr_42319;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39993__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__42341 = arguments.length;
switch (G__42341) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39991__auto___44566 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39992__auto__ = (function (){var switch__39722__auto__ = (function (state_42380){
var state_val_42382 = (state_42380[(1)]);
if((state_val_42382 === (7))){
var inst_42356 = (state_42380[(7)]);
var inst_42356__$1 = (state_42380[(2)]);
var inst_42359 = (inst_42356__$1 == null);
var inst_42360 = cljs.core.not(inst_42359);
var state_42380__$1 = (function (){var statearr_42391 = state_42380;
(statearr_42391[(7)] = inst_42356__$1);

return statearr_42391;
})();
if(inst_42360){
var statearr_42394_44569 = state_42380__$1;
(statearr_42394_44569[(1)] = (8));

} else {
var statearr_42397_44571 = state_42380__$1;
(statearr_42397_44571[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (1))){
var inst_42351 = (0);
var state_42380__$1 = (function (){var statearr_42400 = state_42380;
(statearr_42400[(8)] = inst_42351);

return statearr_42400;
})();
var statearr_42402_44573 = state_42380__$1;
(statearr_42402_44573[(2)] = null);

(statearr_42402_44573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (4))){
var state_42380__$1 = state_42380;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42380__$1,(7),ch);
} else {
if((state_val_42382 === (6))){
var inst_42372 = (state_42380[(2)]);
var state_42380__$1 = state_42380;
var statearr_42407_44574 = state_42380__$1;
(statearr_42407_44574[(2)] = inst_42372);

(statearr_42407_44574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (3))){
var inst_42374 = (state_42380[(2)]);
var inst_42376 = cljs.core.async.close_BANG_(out);
var state_42380__$1 = (function (){var statearr_42414 = state_42380;
(statearr_42414[(9)] = inst_42374);

return statearr_42414;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_42380__$1,inst_42376);
} else {
if((state_val_42382 === (2))){
var inst_42351 = (state_42380[(8)]);
var inst_42353 = (inst_42351 < n);
var state_42380__$1 = state_42380;
if(cljs.core.truth_(inst_42353)){
var statearr_42423_44575 = state_42380__$1;
(statearr_42423_44575[(1)] = (4));

} else {
var statearr_42426_44576 = state_42380__$1;
(statearr_42426_44576[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (11))){
var inst_42351 = (state_42380[(8)]);
var inst_42364 = (state_42380[(2)]);
var inst_42365 = (inst_42351 + (1));
var inst_42351__$1 = inst_42365;
var state_42380__$1 = (function (){var statearr_42434 = state_42380;
(statearr_42434[(10)] = inst_42364);

(statearr_42434[(8)] = inst_42351__$1);

return statearr_42434;
})();
var statearr_42437_44578 = state_42380__$1;
(statearr_42437_44578[(2)] = null);

(statearr_42437_44578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (9))){
var state_42380__$1 = state_42380;
var statearr_42442_44579 = state_42380__$1;
(statearr_42442_44579[(2)] = null);

(statearr_42442_44579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (5))){
var state_42380__$1 = state_42380;
var statearr_42446_44580 = state_42380__$1;
(statearr_42446_44580[(2)] = null);

(statearr_42446_44580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (10))){
var inst_42369 = (state_42380[(2)]);
var state_42380__$1 = state_42380;
var statearr_42454_44581 = state_42380__$1;
(statearr_42454_44581[(2)] = inst_42369);

(statearr_42454_44581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42382 === (8))){
var inst_42356 = (state_42380[(7)]);
var state_42380__$1 = state_42380;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42380__$1,(11),out,inst_42356);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39723__auto__ = null;
var cljs$core$async$state_machine__39723__auto____0 = (function (){
var statearr_42464 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42464[(0)] = cljs$core$async$state_machine__39723__auto__);

(statearr_42464[(1)] = (1));

return statearr_42464;
});
var cljs$core$async$state_machine__39723__auto____1 = (function (state_42380){
while(true){
var ret_value__39724__auto__ = (function (){try{while(true){
var result__39725__auto__ = switch__39722__auto__(state_42380);
if(cljs.core.keyword_identical_QMARK_(result__39725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39725__auto__;
}
break;
}
}catch (e42468){if((e42468 instanceof Object)){
var ex__39726__auto__ = e42468;
var statearr_42471_44592 = state_42380;
(statearr_42471_44592[(5)] = ex__39726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42468;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44597 = state_42380;
state_42380 = G__44597;
continue;
} else {
return ret_value__39724__auto__;
}
break;
}
});
cljs$core$async$state_machine__39723__auto__ = function(state_42380){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39723__auto____1.call(this,state_42380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39723__auto____0;
cljs$core$async$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39723__auto____1;
return cljs$core$async$state_machine__39723__auto__;
})()
})();
var state__39993__auto__ = (function (){var statearr_42476 = f__39992__auto__();
(statearr_42476[(6)] = c__39991__auto___44566);

return statearr_42476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39993__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42515 = (function (f,ch,meta42487,_,fn1,meta42516){
this.f = f;
this.ch = ch;
this.meta42487 = meta42487;
this._ = _;
this.fn1 = fn1;
this.meta42516 = meta42516;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42517,meta42516__$1){
var self__ = this;
var _42517__$1 = this;
return (new cljs.core.async.t_cljs$core$async42515(self__.f,self__.ch,self__.meta42487,self__._,self__.fn1,meta42516__$1));
}));

(cljs.core.async.t_cljs$core$async42515.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42517){
var self__ = this;
var _42517__$1 = this;
return self__.meta42516;
}));

(cljs.core.async.t_cljs$core$async42515.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42515.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async42515.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async42515.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__42482_SHARP_){
var G__42544 = (((p1__42482_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__42482_SHARP_) : self__.f.call(null,p1__42482_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__42544) : f1.call(null,G__42544));
});
}));

(cljs.core.async.t_cljs$core$async42515.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42487","meta42487",-296625266,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async42486","cljs.core.async/t_cljs$core$async42486",-386520486,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta42516","meta42516",1630913702,null)], null);
}));

(cljs.core.async.t_cljs$core$async42515.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42515.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42515");

(cljs.core.async.t_cljs$core$async42515.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async42515");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42515.
 */
cljs.core.async.__GT_t_cljs$core$async42515 = (function cljs$core$async$__GT_t_cljs$core$async42515(f,ch,meta42487,_,fn1,meta42516){
return (new cljs.core.async.t_cljs$core$async42515(f,ch,meta42487,_,fn1,meta42516));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42486 = (function (f,ch,meta42487){
this.f = f;
this.ch = ch;
this.meta42487 = meta42487;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42488,meta42487__$1){
var self__ = this;
var _42488__$1 = this;
return (new cljs.core.async.t_cljs$core$async42486(self__.f,self__.ch,meta42487__$1));
}));

(cljs.core.async.t_cljs$core$async42486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42488){
var self__ = this;
var _42488__$1 = this;
return self__.meta42487;
}));

(cljs.core.async.t_cljs$core$async42486.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42486.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42486.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42486.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42486.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async42515(self__.f,self__.ch,self__.meta42487,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__42580 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__42580) : self__.f.call(null,G__42580));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async42486.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42486.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async42486.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42487","meta42487",-296625266,null)], null);
}));

(cljs.core.async.t_cljs$core$async42486.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42486.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42486");

(cljs.core.async.t_cljs$core$async42486.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async42486");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42486.
 */
cljs.core.async.__GT_t_cljs$core$async42486 = (function cljs$core$async$__GT_t_cljs$core$async42486(f,ch,meta42487){
return (new cljs.core.async.t_cljs$core$async42486(f,ch,meta42487));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async42486(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42606 = (function (f,ch,meta42607){
this.f = f;
this.ch = ch;
this.meta42607 = meta42607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42608,meta42607__$1){
var self__ = this;
var _42608__$1 = this;
return (new cljs.core.async.t_cljs$core$async42606(self__.f,self__.ch,meta42607__$1));
}));

(cljs.core.async.t_cljs$core$async42606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42608){
var self__ = this;
var _42608__$1 = this;
return self__.meta42607;
}));

(cljs.core.async.t_cljs$core$async42606.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42606.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42606.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42606.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42606.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42606.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async42606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42607","meta42607",438485026,null)], null);
}));

(cljs.core.async.t_cljs$core$async42606.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42606");

(cljs.core.async.t_cljs$core$async42606.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async42606");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42606.
 */
cljs.core.async.__GT_t_cljs$core$async42606 = (function cljs$core$async$__GT_t_cljs$core$async42606(f,ch,meta42607){
return (new cljs.core.async.t_cljs$core$async42606(f,ch,meta42607));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async42606(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42644 = (function (p,ch,meta42645){
this.p = p;
this.ch = ch;
this.meta42645 = meta42645;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42646,meta42645__$1){
var self__ = this;
var _42646__$1 = this;
return (new cljs.core.async.t_cljs$core$async42644(self__.p,self__.ch,meta42645__$1));
}));

(cljs.core.async.t_cljs$core$async42644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42646){
var self__ = this;
var _42646__$1 = this;
return self__.meta42645;
}));

(cljs.core.async.t_cljs$core$async42644.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42644.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42644.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async42644.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42644.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async42644.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42644.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async42644.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta42645","meta42645",1819829447,null)], null);
}));

(cljs.core.async.t_cljs$core$async42644.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42644.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42644");

(cljs.core.async.t_cljs$core$async42644.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async42644");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42644.
 */
cljs.core.async.__GT_t_cljs$core$async42644 = (function cljs$core$async$__GT_t_cljs$core$async42644(p,ch,meta42645){
return (new cljs.core.async.t_cljs$core$async42644(p,ch,meta42645));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async42644(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__42667 = arguments.length;
switch (G__42667) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39991__auto___44634 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39992__auto__ = (function (){var switch__39722__auto__ = (function (state_42727){
var state_val_42728 = (state_42727[(1)]);
if((state_val_42728 === (7))){
var inst_42722 = (state_42727[(2)]);
var state_42727__$1 = state_42727;
var statearr_42731_44635 = state_42727__$1;
(statearr_42731_44635[(2)] = inst_42722);

(statearr_42731_44635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42728 === (1))){
var state_42727__$1 = state_42727;
var statearr_42736_44637 = state_42727__$1;
(statearr_42736_44637[(2)] = null);

(statearr_42736_44637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42728 === (4))){
var inst_42708 = (state_42727[(7)]);
var inst_42708__$1 = (state_42727[(2)]);
var inst_42709 = (inst_42708__$1 == null);
var state_42727__$1 = (function (){var statearr_42740 = state_42727;
(statearr_42740[(7)] = inst_42708__$1);

return statearr_42740;
})();
if(cljs.core.truth_(inst_42709)){
var statearr_42742_44638 = state_42727__$1;
(statearr_42742_44638[(1)] = (5));

} else {
var statearr_42743_44639 = state_42727__$1;
(statearr_42743_44639[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42728 === (6))){
var inst_42708 = (state_42727[(7)]);
var inst_42713 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_42708) : p.call(null,inst_42708));
var state_42727__$1 = state_42727;
if(cljs.core.truth_(inst_42713)){
var statearr_42744_44640 = state_42727__$1;
(statearr_42744_44640[(1)] = (8));

} else {
var statearr_42746_44641 = state_42727__$1;
(statearr_42746_44641[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42728 === (3))){
var inst_42724 = (state_42727[(2)]);
var state_42727__$1 = state_42727;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42727__$1,inst_42724);
} else {
if((state_val_42728 === (2))){
var state_42727__$1 = state_42727;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42727__$1,(4),ch);
} else {
if((state_val_42728 === (11))){
var inst_42716 = (state_42727[(2)]);
var state_42727__$1 = state_42727;
var statearr_42751_44646 = state_42727__$1;
(statearr_42751_44646[(2)] = inst_42716);

(statearr_42751_44646[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42728 === (9))){
var state_42727__$1 = state_42727;
var statearr_42768_44647 = state_42727__$1;
(statearr_42768_44647[(2)] = null);

(statearr_42768_44647[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42728 === (5))){
var inst_42711 = cljs.core.async.close_BANG_(out);
var state_42727__$1 = state_42727;
var statearr_42769_44651 = state_42727__$1;
(statearr_42769_44651[(2)] = inst_42711);

(statearr_42769_44651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42728 === (10))){
var inst_42719 = (state_42727[(2)]);
var state_42727__$1 = (function (){var statearr_42771 = state_42727;
(statearr_42771[(8)] = inst_42719);

return statearr_42771;
})();
var statearr_42772_44652 = state_42727__$1;
(statearr_42772_44652[(2)] = null);

(statearr_42772_44652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42728 === (8))){
var inst_42708 = (state_42727[(7)]);
var state_42727__$1 = state_42727;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42727__$1,(11),out,inst_42708);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39723__auto__ = null;
var cljs$core$async$state_machine__39723__auto____0 = (function (){
var statearr_42773 = [null,null,null,null,null,null,null,null,null];
(statearr_42773[(0)] = cljs$core$async$state_machine__39723__auto__);

(statearr_42773[(1)] = (1));

return statearr_42773;
});
var cljs$core$async$state_machine__39723__auto____1 = (function (state_42727){
while(true){
var ret_value__39724__auto__ = (function (){try{while(true){
var result__39725__auto__ = switch__39722__auto__(state_42727);
if(cljs.core.keyword_identical_QMARK_(result__39725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39725__auto__;
}
break;
}
}catch (e42776){if((e42776 instanceof Object)){
var ex__39726__auto__ = e42776;
var statearr_42779_44655 = state_42727;
(statearr_42779_44655[(5)] = ex__39726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42727);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42776;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44665 = state_42727;
state_42727 = G__44665;
continue;
} else {
return ret_value__39724__auto__;
}
break;
}
});
cljs$core$async$state_machine__39723__auto__ = function(state_42727){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39723__auto____1.call(this,state_42727);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39723__auto____0;
cljs$core$async$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39723__auto____1;
return cljs$core$async$state_machine__39723__auto__;
})()
})();
var state__39993__auto__ = (function (){var statearr_42792 = f__39992__auto__();
(statearr_42792[(6)] = c__39991__auto___44634);

return statearr_42792;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39993__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__42803 = arguments.length;
switch (G__42803) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__39991__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39992__auto__ = (function (){var switch__39722__auto__ = (function (state_42930){
var state_val_42931 = (state_42930[(1)]);
if((state_val_42931 === (7))){
var inst_42905 = (state_42930[(2)]);
var state_42930__$1 = state_42930;
var statearr_42937_44675 = state_42930__$1;
(statearr_42937_44675[(2)] = inst_42905);

(statearr_42937_44675[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (20))){
var inst_42861 = (state_42930[(7)]);
var inst_42886 = (state_42930[(2)]);
var inst_42887 = cljs.core.next(inst_42861);
var inst_42834 = inst_42887;
var inst_42835 = null;
var inst_42836 = (0);
var inst_42837 = (0);
var state_42930__$1 = (function (){var statearr_42939 = state_42930;
(statearr_42939[(8)] = inst_42834);

(statearr_42939[(9)] = inst_42836);

(statearr_42939[(10)] = inst_42837);

(statearr_42939[(11)] = inst_42886);

(statearr_42939[(12)] = inst_42835);

return statearr_42939;
})();
var statearr_42940_44681 = state_42930__$1;
(statearr_42940_44681[(2)] = null);

(statearr_42940_44681[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (1))){
var state_42930__$1 = state_42930;
var statearr_42941_44682 = state_42930__$1;
(statearr_42941_44682[(2)] = null);

(statearr_42941_44682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (4))){
var inst_42823 = (state_42930[(13)]);
var inst_42823__$1 = (state_42930[(2)]);
var inst_42824 = (inst_42823__$1 == null);
var state_42930__$1 = (function (){var statearr_42944 = state_42930;
(statearr_42944[(13)] = inst_42823__$1);

return statearr_42944;
})();
if(cljs.core.truth_(inst_42824)){
var statearr_42945_44689 = state_42930__$1;
(statearr_42945_44689[(1)] = (5));

} else {
var statearr_42946_44690 = state_42930__$1;
(statearr_42946_44690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (15))){
var state_42930__$1 = state_42930;
var statearr_42952_44691 = state_42930__$1;
(statearr_42952_44691[(2)] = null);

(statearr_42952_44691[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (21))){
var state_42930__$1 = state_42930;
var statearr_42953_44692 = state_42930__$1;
(statearr_42953_44692[(2)] = null);

(statearr_42953_44692[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (13))){
var inst_42834 = (state_42930[(8)]);
var inst_42836 = (state_42930[(9)]);
var inst_42837 = (state_42930[(10)]);
var inst_42835 = (state_42930[(12)]);
var inst_42857 = (state_42930[(2)]);
var inst_42858 = (inst_42837 + (1));
var tmp42949 = inst_42834;
var tmp42950 = inst_42836;
var tmp42951 = inst_42835;
var inst_42834__$1 = tmp42949;
var inst_42835__$1 = tmp42951;
var inst_42836__$1 = tmp42950;
var inst_42837__$1 = inst_42858;
var state_42930__$1 = (function (){var statearr_42961 = state_42930;
(statearr_42961[(8)] = inst_42834__$1);

(statearr_42961[(14)] = inst_42857);

(statearr_42961[(9)] = inst_42836__$1);

(statearr_42961[(10)] = inst_42837__$1);

(statearr_42961[(12)] = inst_42835__$1);

return statearr_42961;
})();
var statearr_42970_44693 = state_42930__$1;
(statearr_42970_44693[(2)] = null);

(statearr_42970_44693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (22))){
var state_42930__$1 = state_42930;
var statearr_42991_44694 = state_42930__$1;
(statearr_42991_44694[(2)] = null);

(statearr_42991_44694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (6))){
var inst_42823 = (state_42930[(13)]);
var inst_42832 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_42823) : f.call(null,inst_42823));
var inst_42833 = cljs.core.seq(inst_42832);
var inst_42834 = inst_42833;
var inst_42835 = null;
var inst_42836 = (0);
var inst_42837 = (0);
var state_42930__$1 = (function (){var statearr_42995 = state_42930;
(statearr_42995[(8)] = inst_42834);

(statearr_42995[(9)] = inst_42836);

(statearr_42995[(10)] = inst_42837);

(statearr_42995[(12)] = inst_42835);

return statearr_42995;
})();
var statearr_43000_44701 = state_42930__$1;
(statearr_43000_44701[(2)] = null);

(statearr_43000_44701[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (17))){
var inst_42861 = (state_42930[(7)]);
var inst_42879 = cljs.core.chunk_first(inst_42861);
var inst_42880 = cljs.core.chunk_rest(inst_42861);
var inst_42881 = cljs.core.count(inst_42879);
var inst_42834 = inst_42880;
var inst_42835 = inst_42879;
var inst_42836 = inst_42881;
var inst_42837 = (0);
var state_42930__$1 = (function (){var statearr_43002 = state_42930;
(statearr_43002[(8)] = inst_42834);

(statearr_43002[(9)] = inst_42836);

(statearr_43002[(10)] = inst_42837);

(statearr_43002[(12)] = inst_42835);

return statearr_43002;
})();
var statearr_43004_44703 = state_42930__$1;
(statearr_43004_44703[(2)] = null);

(statearr_43004_44703[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (3))){
var inst_42907 = (state_42930[(2)]);
var state_42930__$1 = state_42930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42930__$1,inst_42907);
} else {
if((state_val_42931 === (12))){
var inst_42895 = (state_42930[(2)]);
var state_42930__$1 = state_42930;
var statearr_43009_44707 = state_42930__$1;
(statearr_43009_44707[(2)] = inst_42895);

(statearr_43009_44707[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (2))){
var state_42930__$1 = state_42930;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42930__$1,(4),in$);
} else {
if((state_val_42931 === (23))){
var inst_42903 = (state_42930[(2)]);
var state_42930__$1 = state_42930;
var statearr_43015_44710 = state_42930__$1;
(statearr_43015_44710[(2)] = inst_42903);

(statearr_43015_44710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (19))){
var inst_42890 = (state_42930[(2)]);
var state_42930__$1 = state_42930;
var statearr_43020_44712 = state_42930__$1;
(statearr_43020_44712[(2)] = inst_42890);

(statearr_43020_44712[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (11))){
var inst_42834 = (state_42930[(8)]);
var inst_42861 = (state_42930[(7)]);
var inst_42861__$1 = cljs.core.seq(inst_42834);
var state_42930__$1 = (function (){var statearr_43024 = state_42930;
(statearr_43024[(7)] = inst_42861__$1);

return statearr_43024;
})();
if(inst_42861__$1){
var statearr_43026_44713 = state_42930__$1;
(statearr_43026_44713[(1)] = (14));

} else {
var statearr_43035_44714 = state_42930__$1;
(statearr_43035_44714[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (9))){
var inst_42897 = (state_42930[(2)]);
var inst_42898 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_42930__$1 = (function (){var statearr_43036 = state_42930;
(statearr_43036[(15)] = inst_42897);

return statearr_43036;
})();
if(cljs.core.truth_(inst_42898)){
var statearr_43038_44715 = state_42930__$1;
(statearr_43038_44715[(1)] = (21));

} else {
var statearr_43040_44716 = state_42930__$1;
(statearr_43040_44716[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (5))){
var inst_42826 = cljs.core.async.close_BANG_(out);
var state_42930__$1 = state_42930;
var statearr_43041_44718 = state_42930__$1;
(statearr_43041_44718[(2)] = inst_42826);

(statearr_43041_44718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (14))){
var inst_42861 = (state_42930[(7)]);
var inst_42863 = cljs.core.chunked_seq_QMARK_(inst_42861);
var state_42930__$1 = state_42930;
if(inst_42863){
var statearr_43042_44723 = state_42930__$1;
(statearr_43042_44723[(1)] = (17));

} else {
var statearr_43045_44724 = state_42930__$1;
(statearr_43045_44724[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (16))){
var inst_42893 = (state_42930[(2)]);
var state_42930__$1 = state_42930;
var statearr_43046_44725 = state_42930__$1;
(statearr_43046_44725[(2)] = inst_42893);

(statearr_43046_44725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42931 === (10))){
var inst_42837 = (state_42930[(10)]);
var inst_42835 = (state_42930[(12)]);
var inst_42855 = cljs.core._nth(inst_42835,inst_42837);
var state_42930__$1 = state_42930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42930__$1,(13),out,inst_42855);
} else {
if((state_val_42931 === (18))){
var inst_42861 = (state_42930[(7)]);
var inst_42884 = cljs.core.first(inst_42861);
var state_42930__$1 = state_42930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42930__$1,(20),out,inst_42884);
} else {
if((state_val_42931 === (8))){
var inst_42836 = (state_42930[(9)]);
var inst_42837 = (state_42930[(10)]);
var inst_42842 = (inst_42837 < inst_42836);
var inst_42843 = inst_42842;
var state_42930__$1 = state_42930;
if(cljs.core.truth_(inst_42843)){
var statearr_43054_44727 = state_42930__$1;
(statearr_43054_44727[(1)] = (10));

} else {
var statearr_43055_44728 = state_42930__$1;
(statearr_43055_44728[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__39723__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__39723__auto____0 = (function (){
var statearr_43057 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43057[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__39723__auto__);

(statearr_43057[(1)] = (1));

return statearr_43057;
});
var cljs$core$async$mapcat_STAR__$_state_machine__39723__auto____1 = (function (state_42930){
while(true){
var ret_value__39724__auto__ = (function (){try{while(true){
var result__39725__auto__ = switch__39722__auto__(state_42930);
if(cljs.core.keyword_identical_QMARK_(result__39725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39725__auto__;
}
break;
}
}catch (e43059){if((e43059 instanceof Object)){
var ex__39726__auto__ = e43059;
var statearr_43060_44740 = state_42930;
(statearr_43060_44740[(5)] = ex__39726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43059;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44742 = state_42930;
state_42930 = G__44742;
continue;
} else {
return ret_value__39724__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__39723__auto__ = function(state_42930){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__39723__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__39723__auto____1.call(this,state_42930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__39723__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__39723__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__39723__auto__;
})()
})();
var state__39993__auto__ = (function (){var statearr_43061 = f__39992__auto__();
(statearr_43061[(6)] = c__39991__auto__);

return statearr_43061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39993__auto__);
}));

return c__39991__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43063 = arguments.length;
switch (G__43063) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__43070 = arguments.length;
switch (G__43070) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__43073 = arguments.length;
switch (G__43073) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39991__auto___44755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39992__auto__ = (function (){var switch__39722__auto__ = (function (state_43103){
var state_val_43104 = (state_43103[(1)]);
if((state_val_43104 === (7))){
var inst_43098 = (state_43103[(2)]);
var state_43103__$1 = state_43103;
var statearr_43106_44758 = state_43103__$1;
(statearr_43106_44758[(2)] = inst_43098);

(statearr_43106_44758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43104 === (1))){
var inst_43074 = null;
var state_43103__$1 = (function (){var statearr_43111 = state_43103;
(statearr_43111[(7)] = inst_43074);

return statearr_43111;
})();
var statearr_43113_44759 = state_43103__$1;
(statearr_43113_44759[(2)] = null);

(statearr_43113_44759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43104 === (4))){
var inst_43081 = (state_43103[(8)]);
var inst_43081__$1 = (state_43103[(2)]);
var inst_43083 = (inst_43081__$1 == null);
var inst_43084 = cljs.core.not(inst_43083);
var state_43103__$1 = (function (){var statearr_43114 = state_43103;
(statearr_43114[(8)] = inst_43081__$1);

return statearr_43114;
})();
if(inst_43084){
var statearr_43115_44773 = state_43103__$1;
(statearr_43115_44773[(1)] = (5));

} else {
var statearr_43118_44774 = state_43103__$1;
(statearr_43118_44774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43104 === (6))){
var state_43103__$1 = state_43103;
var statearr_43122_44775 = state_43103__$1;
(statearr_43122_44775[(2)] = null);

(statearr_43122_44775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43104 === (3))){
var inst_43100 = (state_43103[(2)]);
var inst_43101 = cljs.core.async.close_BANG_(out);
var state_43103__$1 = (function (){var statearr_43124 = state_43103;
(statearr_43124[(9)] = inst_43100);

return statearr_43124;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43103__$1,inst_43101);
} else {
if((state_val_43104 === (2))){
var state_43103__$1 = state_43103;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43103__$1,(4),ch);
} else {
if((state_val_43104 === (11))){
var inst_43081 = (state_43103[(8)]);
var inst_43091 = (state_43103[(2)]);
var inst_43074 = inst_43081;
var state_43103__$1 = (function (){var statearr_43126 = state_43103;
(statearr_43126[(10)] = inst_43091);

(statearr_43126[(7)] = inst_43074);

return statearr_43126;
})();
var statearr_43128_44776 = state_43103__$1;
(statearr_43128_44776[(2)] = null);

(statearr_43128_44776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43104 === (9))){
var inst_43081 = (state_43103[(8)]);
var state_43103__$1 = state_43103;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43103__$1,(11),out,inst_43081);
} else {
if((state_val_43104 === (5))){
var inst_43081 = (state_43103[(8)]);
var inst_43074 = (state_43103[(7)]);
var inst_43086 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43081,inst_43074);
var state_43103__$1 = state_43103;
if(inst_43086){
var statearr_43131_44780 = state_43103__$1;
(statearr_43131_44780[(1)] = (8));

} else {
var statearr_43132_44781 = state_43103__$1;
(statearr_43132_44781[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43104 === (10))){
var inst_43094 = (state_43103[(2)]);
var state_43103__$1 = state_43103;
var statearr_43133_44782 = state_43103__$1;
(statearr_43133_44782[(2)] = inst_43094);

(statearr_43133_44782[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43104 === (8))){
var inst_43074 = (state_43103[(7)]);
var tmp43130 = inst_43074;
var inst_43074__$1 = tmp43130;
var state_43103__$1 = (function (){var statearr_43137 = state_43103;
(statearr_43137[(7)] = inst_43074__$1);

return statearr_43137;
})();
var statearr_43138_44783 = state_43103__$1;
(statearr_43138_44783[(2)] = null);

(statearr_43138_44783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39723__auto__ = null;
var cljs$core$async$state_machine__39723__auto____0 = (function (){
var statearr_43147 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43147[(0)] = cljs$core$async$state_machine__39723__auto__);

(statearr_43147[(1)] = (1));

return statearr_43147;
});
var cljs$core$async$state_machine__39723__auto____1 = (function (state_43103){
while(true){
var ret_value__39724__auto__ = (function (){try{while(true){
var result__39725__auto__ = switch__39722__auto__(state_43103);
if(cljs.core.keyword_identical_QMARK_(result__39725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39725__auto__;
}
break;
}
}catch (e43152){if((e43152 instanceof Object)){
var ex__39726__auto__ = e43152;
var statearr_43153_44784 = state_43103;
(statearr_43153_44784[(5)] = ex__39726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43152;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44785 = state_43103;
state_43103 = G__44785;
continue;
} else {
return ret_value__39724__auto__;
}
break;
}
});
cljs$core$async$state_machine__39723__auto__ = function(state_43103){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39723__auto____1.call(this,state_43103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39723__auto____0;
cljs$core$async$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39723__auto____1;
return cljs$core$async$state_machine__39723__auto__;
})()
})();
var state__39993__auto__ = (function (){var statearr_43156 = f__39992__auto__();
(statearr_43156[(6)] = c__39991__auto___44755);

return statearr_43156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39993__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43175 = arguments.length;
switch (G__43175) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39991__auto___44791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39992__auto__ = (function (){var switch__39722__auto__ = (function (state_43226){
var state_val_43227 = (state_43226[(1)]);
if((state_val_43227 === (7))){
var inst_43222 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43235_44792 = state_43226__$1;
(statearr_43235_44792[(2)] = inst_43222);

(statearr_43235_44792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (1))){
var inst_43182 = (new Array(n));
var inst_43183 = inst_43182;
var inst_43184 = (0);
var state_43226__$1 = (function (){var statearr_43239 = state_43226;
(statearr_43239[(7)] = inst_43184);

(statearr_43239[(8)] = inst_43183);

return statearr_43239;
})();
var statearr_43240_44798 = state_43226__$1;
(statearr_43240_44798[(2)] = null);

(statearr_43240_44798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (4))){
var inst_43187 = (state_43226[(9)]);
var inst_43187__$1 = (state_43226[(2)]);
var inst_43188 = (inst_43187__$1 == null);
var inst_43189 = cljs.core.not(inst_43188);
var state_43226__$1 = (function (){var statearr_43241 = state_43226;
(statearr_43241[(9)] = inst_43187__$1);

return statearr_43241;
})();
if(inst_43189){
var statearr_43246_44803 = state_43226__$1;
(statearr_43246_44803[(1)] = (5));

} else {
var statearr_43251_44804 = state_43226__$1;
(statearr_43251_44804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (15))){
var inst_43216 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43252_44808 = state_43226__$1;
(statearr_43252_44808[(2)] = inst_43216);

(statearr_43252_44808[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (13))){
var state_43226__$1 = state_43226;
var statearr_43253_44809 = state_43226__$1;
(statearr_43253_44809[(2)] = null);

(statearr_43253_44809[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (6))){
var inst_43184 = (state_43226[(7)]);
var inst_43212 = (inst_43184 > (0));
var state_43226__$1 = state_43226;
if(cljs.core.truth_(inst_43212)){
var statearr_43255_44810 = state_43226__$1;
(statearr_43255_44810[(1)] = (12));

} else {
var statearr_43256_44811 = state_43226__$1;
(statearr_43256_44811[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (3))){
var inst_43224 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43226__$1,inst_43224);
} else {
if((state_val_43227 === (12))){
var inst_43183 = (state_43226[(8)]);
var inst_43214 = cljs.core.vec(inst_43183);
var state_43226__$1 = state_43226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43226__$1,(15),out,inst_43214);
} else {
if((state_val_43227 === (2))){
var state_43226__$1 = state_43226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43226__$1,(4),ch);
} else {
if((state_val_43227 === (11))){
var inst_43202 = (state_43226[(2)]);
var inst_43204 = (new Array(n));
var inst_43183 = inst_43204;
var inst_43184 = (0);
var state_43226__$1 = (function (){var statearr_43269 = state_43226;
(statearr_43269[(7)] = inst_43184);

(statearr_43269[(8)] = inst_43183);

(statearr_43269[(10)] = inst_43202);

return statearr_43269;
})();
var statearr_43272_44813 = state_43226__$1;
(statearr_43272_44813[(2)] = null);

(statearr_43272_44813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (9))){
var inst_43183 = (state_43226[(8)]);
var inst_43197 = cljs.core.vec(inst_43183);
var state_43226__$1 = state_43226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43226__$1,(11),out,inst_43197);
} else {
if((state_val_43227 === (5))){
var inst_43184 = (state_43226[(7)]);
var inst_43183 = (state_43226[(8)]);
var inst_43192 = (state_43226[(11)]);
var inst_43187 = (state_43226[(9)]);
var inst_43191 = (inst_43183[inst_43184] = inst_43187);
var inst_43192__$1 = (inst_43184 + (1));
var inst_43193 = (inst_43192__$1 < n);
var state_43226__$1 = (function (){var statearr_43276 = state_43226;
(statearr_43276[(11)] = inst_43192__$1);

(statearr_43276[(12)] = inst_43191);

return statearr_43276;
})();
if(cljs.core.truth_(inst_43193)){
var statearr_43277_44814 = state_43226__$1;
(statearr_43277_44814[(1)] = (8));

} else {
var statearr_43278_44815 = state_43226__$1;
(statearr_43278_44815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (14))){
var inst_43219 = (state_43226[(2)]);
var inst_43220 = cljs.core.async.close_BANG_(out);
var state_43226__$1 = (function (){var statearr_43282 = state_43226;
(statearr_43282[(13)] = inst_43219);

return statearr_43282;
})();
var statearr_43284_44816 = state_43226__$1;
(statearr_43284_44816[(2)] = inst_43220);

(statearr_43284_44816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (10))){
var inst_43207 = (state_43226[(2)]);
var state_43226__$1 = state_43226;
var statearr_43285_44817 = state_43226__$1;
(statearr_43285_44817[(2)] = inst_43207);

(statearr_43285_44817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43227 === (8))){
var inst_43183 = (state_43226[(8)]);
var inst_43192 = (state_43226[(11)]);
var tmp43279 = inst_43183;
var inst_43183__$1 = tmp43279;
var inst_43184 = inst_43192;
var state_43226__$1 = (function (){var statearr_43292 = state_43226;
(statearr_43292[(7)] = inst_43184);

(statearr_43292[(8)] = inst_43183__$1);

return statearr_43292;
})();
var statearr_43294_44821 = state_43226__$1;
(statearr_43294_44821[(2)] = null);

(statearr_43294_44821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39723__auto__ = null;
var cljs$core$async$state_machine__39723__auto____0 = (function (){
var statearr_43301 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43301[(0)] = cljs$core$async$state_machine__39723__auto__);

(statearr_43301[(1)] = (1));

return statearr_43301;
});
var cljs$core$async$state_machine__39723__auto____1 = (function (state_43226){
while(true){
var ret_value__39724__auto__ = (function (){try{while(true){
var result__39725__auto__ = switch__39722__auto__(state_43226);
if(cljs.core.keyword_identical_QMARK_(result__39725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39725__auto__;
}
break;
}
}catch (e43307){if((e43307 instanceof Object)){
var ex__39726__auto__ = e43307;
var statearr_43308_44822 = state_43226;
(statearr_43308_44822[(5)] = ex__39726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43226);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43307;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44823 = state_43226;
state_43226 = G__44823;
continue;
} else {
return ret_value__39724__auto__;
}
break;
}
});
cljs$core$async$state_machine__39723__auto__ = function(state_43226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39723__auto____1.call(this,state_43226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39723__auto____0;
cljs$core$async$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39723__auto____1;
return cljs$core$async$state_machine__39723__auto__;
})()
})();
var state__39993__auto__ = (function (){var statearr_43318 = f__39992__auto__();
(statearr_43318[(6)] = c__39991__auto___44791);

return statearr_43318;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39993__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43324 = arguments.length;
switch (G__43324) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__39991__auto___44825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__39992__auto__ = (function (){var switch__39722__auto__ = (function (state_43369){
var state_val_43370 = (state_43369[(1)]);
if((state_val_43370 === (7))){
var inst_43365 = (state_43369[(2)]);
var state_43369__$1 = state_43369;
var statearr_43371_44829 = state_43369__$1;
(statearr_43371_44829[(2)] = inst_43365);

(statearr_43371_44829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43370 === (1))){
var inst_43325 = [];
var inst_43326 = inst_43325;
var inst_43327 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43369__$1 = (function (){var statearr_43372 = state_43369;
(statearr_43372[(7)] = inst_43327);

(statearr_43372[(8)] = inst_43326);

return statearr_43372;
})();
var statearr_43374_44830 = state_43369__$1;
(statearr_43374_44830[(2)] = null);

(statearr_43374_44830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43370 === (4))){
var inst_43330 = (state_43369[(9)]);
var inst_43330__$1 = (state_43369[(2)]);
var inst_43331 = (inst_43330__$1 == null);
var inst_43332 = cljs.core.not(inst_43331);
var state_43369__$1 = (function (){var statearr_43377 = state_43369;
(statearr_43377[(9)] = inst_43330__$1);

return statearr_43377;
})();
if(inst_43332){
var statearr_43378_44831 = state_43369__$1;
(statearr_43378_44831[(1)] = (5));

} else {
var statearr_43380_44836 = state_43369__$1;
(statearr_43380_44836[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43370 === (15))){
var inst_43326 = (state_43369[(8)]);
var inst_43357 = cljs.core.vec(inst_43326);
var state_43369__$1 = state_43369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43369__$1,(18),out,inst_43357);
} else {
if((state_val_43370 === (13))){
var inst_43352 = (state_43369[(2)]);
var state_43369__$1 = state_43369;
var statearr_43381_44837 = state_43369__$1;
(statearr_43381_44837[(2)] = inst_43352);

(statearr_43381_44837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43370 === (6))){
var inst_43326 = (state_43369[(8)]);
var inst_43354 = inst_43326.length;
var inst_43355 = (inst_43354 > (0));
var state_43369__$1 = state_43369;
if(cljs.core.truth_(inst_43355)){
var statearr_43382_44841 = state_43369__$1;
(statearr_43382_44841[(1)] = (15));

} else {
var statearr_43383_44842 = state_43369__$1;
(statearr_43383_44842[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43370 === (17))){
var inst_43362 = (state_43369[(2)]);
var inst_43363 = cljs.core.async.close_BANG_(out);
var state_43369__$1 = (function (){var statearr_43386 = state_43369;
(statearr_43386[(10)] = inst_43362);

return statearr_43386;
})();
var statearr_43388_44843 = state_43369__$1;
(statearr_43388_44843[(2)] = inst_43363);

(statearr_43388_44843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43370 === (3))){
var inst_43367 = (state_43369[(2)]);
var state_43369__$1 = state_43369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43369__$1,inst_43367);
} else {
if((state_val_43370 === (12))){
var inst_43326 = (state_43369[(8)]);
var inst_43345 = cljs.core.vec(inst_43326);
var state_43369__$1 = state_43369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43369__$1,(14),out,inst_43345);
} else {
if((state_val_43370 === (2))){
var state_43369__$1 = state_43369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43369__$1,(4),ch);
} else {
if((state_val_43370 === (11))){
var inst_43330 = (state_43369[(9)]);
var inst_43334 = (state_43369[(11)]);
var inst_43326 = (state_43369[(8)]);
var inst_43342 = inst_43326.push(inst_43330);
var tmp43392 = inst_43326;
var inst_43326__$1 = tmp43392;
var inst_43327 = inst_43334;
var state_43369__$1 = (function (){var statearr_43396 = state_43369;
(statearr_43396[(7)] = inst_43327);

(statearr_43396[(8)] = inst_43326__$1);

(statearr_43396[(12)] = inst_43342);

return statearr_43396;
})();
var statearr_43397_44847 = state_43369__$1;
(statearr_43397_44847[(2)] = null);

(statearr_43397_44847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43370 === (9))){
var inst_43327 = (state_43369[(7)]);
var inst_43338 = cljs.core.keyword_identical_QMARK_(inst_43327,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_43369__$1 = state_43369;
var statearr_43398_44851 = state_43369__$1;
(statearr_43398_44851[(2)] = inst_43338);

(statearr_43398_44851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43370 === (5))){
var inst_43335 = (state_43369[(13)]);
var inst_43330 = (state_43369[(9)]);
var inst_43334 = (state_43369[(11)]);
var inst_43327 = (state_43369[(7)]);
var inst_43334__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43330) : f.call(null,inst_43330));
var inst_43335__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43334__$1,inst_43327);
var state_43369__$1 = (function (){var statearr_43402 = state_43369;
(statearr_43402[(13)] = inst_43335__$1);

(statearr_43402[(11)] = inst_43334__$1);

return statearr_43402;
})();
if(inst_43335__$1){
var statearr_43403_44856 = state_43369__$1;
(statearr_43403_44856[(1)] = (8));

} else {
var statearr_43404_44857 = state_43369__$1;
(statearr_43404_44857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43370 === (14))){
var inst_43330 = (state_43369[(9)]);
var inst_43334 = (state_43369[(11)]);
var inst_43347 = (state_43369[(2)]);
var inst_43348 = [];
var inst_43349 = inst_43348.push(inst_43330);
var inst_43326 = inst_43348;
var inst_43327 = inst_43334;
var state_43369__$1 = (function (){var statearr_43408 = state_43369;
(statearr_43408[(7)] = inst_43327);

(statearr_43408[(8)] = inst_43326);

(statearr_43408[(14)] = inst_43347);

(statearr_43408[(15)] = inst_43349);

return statearr_43408;
})();
var statearr_43409_44861 = state_43369__$1;
(statearr_43409_44861[(2)] = null);

(statearr_43409_44861[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43370 === (16))){
var state_43369__$1 = state_43369;
var statearr_43410_44862 = state_43369__$1;
(statearr_43410_44862[(2)] = null);

(statearr_43410_44862[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43370 === (10))){
var inst_43340 = (state_43369[(2)]);
var state_43369__$1 = state_43369;
if(cljs.core.truth_(inst_43340)){
var statearr_43412_44863 = state_43369__$1;
(statearr_43412_44863[(1)] = (11));

} else {
var statearr_43413_44864 = state_43369__$1;
(statearr_43413_44864[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43370 === (18))){
var inst_43359 = (state_43369[(2)]);
var state_43369__$1 = state_43369;
var statearr_43414_44865 = state_43369__$1;
(statearr_43414_44865[(2)] = inst_43359);

(statearr_43414_44865[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43370 === (8))){
var inst_43335 = (state_43369[(13)]);
var state_43369__$1 = state_43369;
var statearr_43417_44866 = state_43369__$1;
(statearr_43417_44866[(2)] = inst_43335);

(statearr_43417_44866[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__39723__auto__ = null;
var cljs$core$async$state_machine__39723__auto____0 = (function (){
var statearr_43418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43418[(0)] = cljs$core$async$state_machine__39723__auto__);

(statearr_43418[(1)] = (1));

return statearr_43418;
});
var cljs$core$async$state_machine__39723__auto____1 = (function (state_43369){
while(true){
var ret_value__39724__auto__ = (function (){try{while(true){
var result__39725__auto__ = switch__39722__auto__(state_43369);
if(cljs.core.keyword_identical_QMARK_(result__39725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__39725__auto__;
}
break;
}
}catch (e43420){if((e43420 instanceof Object)){
var ex__39726__auto__ = e43420;
var statearr_43431_44870 = state_43369;
(statearr_43431_44870[(5)] = ex__39726__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43420;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__39724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44871 = state_43369;
state_43369 = G__44871;
continue;
} else {
return ret_value__39724__auto__;
}
break;
}
});
cljs$core$async$state_machine__39723__auto__ = function(state_43369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__39723__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__39723__auto____1.call(this,state_43369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__39723__auto____0;
cljs$core$async$state_machine__39723__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__39723__auto____1;
return cljs$core$async$state_machine__39723__auto__;
})()
})();
var state__39993__auto__ = (function (){var statearr_43436 = f__39992__auto__();
(statearr_43436[(6)] = c__39991__auto___44825);

return statearr_43436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__39993__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
