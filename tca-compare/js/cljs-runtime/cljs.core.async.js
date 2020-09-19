goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__103321 = arguments.length;
switch (G__103321) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async103323 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async103323 = (function (f,blockable,meta103324){
this.f = f;
this.blockable = blockable;
this.meta103324 = meta103324;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async103323.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_103325,meta103324__$1){
var self__ = this;
var _103325__$1 = this;
return (new cljs.core.async.t_cljs$core$async103323(self__.f,self__.blockable,meta103324__$1));
}));

(cljs.core.async.t_cljs$core$async103323.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_103325){
var self__ = this;
var _103325__$1 = this;
return self__.meta103324;
}));

(cljs.core.async.t_cljs$core$async103323.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async103323.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async103323.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async103323.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async103323.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta103324","meta103324",-1962430671,null)], null);
}));

(cljs.core.async.t_cljs$core$async103323.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async103323.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async103323");

(cljs.core.async.t_cljs$core$async103323.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async103323");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async103323.
 */
cljs.core.async.__GT_t_cljs$core$async103323 = (function cljs$core$async$__GT_t_cljs$core$async103323(f__$1,blockable__$1,meta103324){
return (new cljs.core.async.t_cljs$core$async103323(f__$1,blockable__$1,meta103324));
});

}

return (new cljs.core.async.t_cljs$core$async103323(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__103342 = arguments.length;
switch (G__103342) {
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
var G__103347 = arguments.length;
switch (G__103347) {
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
var G__103359 = arguments.length;
switch (G__103359) {
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
var val_106116 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_106116) : fn1.call(null,val_106116));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_106116) : fn1.call(null,val_106116));
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
var G__103361 = arguments.length;
switch (G__103361) {
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
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
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
var n__4613__auto___106148 = n;
var x_106159 = (0);
while(true){
if((x_106159 < n__4613__auto___106148)){
(a[x_106159] = x_106159);

var G__106161 = (x_106159 + (1));
x_106159 = G__106161;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async103379 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async103379 = (function (flag,meta103380){
this.flag = flag;
this.meta103380 = meta103380;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async103379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_103381,meta103380__$1){
var self__ = this;
var _103381__$1 = this;
return (new cljs.core.async.t_cljs$core$async103379(self__.flag,meta103380__$1));
}));

(cljs.core.async.t_cljs$core$async103379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_103381){
var self__ = this;
var _103381__$1 = this;
return self__.meta103380;
}));

(cljs.core.async.t_cljs$core$async103379.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async103379.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async103379.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async103379.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async103379.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta103380","meta103380",2081679325,null)], null);
}));

(cljs.core.async.t_cljs$core$async103379.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async103379.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async103379");

(cljs.core.async.t_cljs$core$async103379.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async103379");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async103379.
 */
cljs.core.async.__GT_t_cljs$core$async103379 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async103379(flag__$1,meta103380){
return (new cljs.core.async.t_cljs$core$async103379(flag__$1,meta103380));
});

}

return (new cljs.core.async.t_cljs$core$async103379(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async103385 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async103385 = (function (flag,cb,meta103386){
this.flag = flag;
this.cb = cb;
this.meta103386 = meta103386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async103385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_103387,meta103386__$1){
var self__ = this;
var _103387__$1 = this;
return (new cljs.core.async.t_cljs$core$async103385(self__.flag,self__.cb,meta103386__$1));
}));

(cljs.core.async.t_cljs$core$async103385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_103387){
var self__ = this;
var _103387__$1 = this;
return self__.meta103386;
}));

(cljs.core.async.t_cljs$core$async103385.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async103385.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async103385.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async103385.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async103385.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta103386","meta103386",-1377682934,null)], null);
}));

(cljs.core.async.t_cljs$core$async103385.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async103385.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async103385");

(cljs.core.async.t_cljs$core$async103385.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async103385");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async103385.
 */
cljs.core.async.__GT_t_cljs$core$async103385 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async103385(flag__$1,cb__$1,meta103386){
return (new cljs.core.async.t_cljs$core$async103385(flag__$1,cb__$1,meta103386));
});

}

return (new cljs.core.async.t_cljs$core$async103385(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

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
return (function (p1__103389_SHARP_){
var G__103392 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__103389_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__103392) : fret.call(null,G__103392));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__103390_SHARP_){
var G__103393 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__103390_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__103393) : fret.call(null,G__103393));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__106192 = (i + (1));
i = G__106192;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
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
var args__4742__auto__ = [];
var len__4736__auto___106204 = arguments.length;
var i__4737__auto___106206 = (0);
while(true){
if((i__4737__auto___106206 < len__4736__auto___106204)){
args__4742__auto__.push((arguments[i__4737__auto___106206]));

var G__106209 = (i__4737__auto___106206 + (1));
i__4737__auto___106206 = G__106209;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__103399){
var map__103400 = p__103399;
var map__103400__$1 = (((((!((map__103400 == null))))?(((((map__103400.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__103400.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__103400):map__103400);
var opts = map__103400__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq103396){
var G__103397 = cljs.core.first(seq103396);
var seq103396__$1 = cljs.core.next(seq103396);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__103397,seq103396__$1);
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
var G__103408 = arguments.length;
switch (G__103408) {
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
var c__103244__auto___106226 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_103460){
var state_val_103461 = (state_103460[(1)]);
if((state_val_103461 === (7))){
var inst_103456 = (state_103460[(2)]);
var state_103460__$1 = state_103460;
var statearr_103465_106231 = state_103460__$1;
(statearr_103465_106231[(2)] = inst_103456);

(statearr_103465_106231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103461 === (1))){
var state_103460__$1 = state_103460;
var statearr_103466_106232 = state_103460__$1;
(statearr_103466_106232[(2)] = null);

(statearr_103466_106232[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103461 === (4))){
var inst_103433 = (state_103460[(7)]);
var inst_103433__$1 = (state_103460[(2)]);
var inst_103440 = (inst_103433__$1 == null);
var state_103460__$1 = (function (){var statearr_103467 = state_103460;
(statearr_103467[(7)] = inst_103433__$1);

return statearr_103467;
})();
if(cljs.core.truth_(inst_103440)){
var statearr_103468_106233 = state_103460__$1;
(statearr_103468_106233[(1)] = (5));

} else {
var statearr_103469_106234 = state_103460__$1;
(statearr_103469_106234[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103461 === (13))){
var state_103460__$1 = state_103460;
var statearr_103471_106235 = state_103460__$1;
(statearr_103471_106235[(2)] = null);

(statearr_103471_106235[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103461 === (6))){
var inst_103433 = (state_103460[(7)]);
var state_103460__$1 = state_103460;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_103460__$1,(11),to,inst_103433);
} else {
if((state_val_103461 === (3))){
var inst_103458 = (state_103460[(2)]);
var state_103460__$1 = state_103460;
return cljs.core.async.impl.ioc_helpers.return_chan(state_103460__$1,inst_103458);
} else {
if((state_val_103461 === (12))){
var state_103460__$1 = state_103460;
var statearr_103472_106247 = state_103460__$1;
(statearr_103472_106247[(2)] = null);

(statearr_103472_106247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103461 === (2))){
var state_103460__$1 = state_103460;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103460__$1,(4),from);
} else {
if((state_val_103461 === (11))){
var inst_103449 = (state_103460[(2)]);
var state_103460__$1 = state_103460;
if(cljs.core.truth_(inst_103449)){
var statearr_103473_106248 = state_103460__$1;
(statearr_103473_106248[(1)] = (12));

} else {
var statearr_103474_106249 = state_103460__$1;
(statearr_103474_106249[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103461 === (9))){
var state_103460__$1 = state_103460;
var statearr_103475_106250 = state_103460__$1;
(statearr_103475_106250[(2)] = null);

(statearr_103475_106250[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103461 === (5))){
var state_103460__$1 = state_103460;
if(cljs.core.truth_(close_QMARK_)){
var statearr_103476_106251 = state_103460__$1;
(statearr_103476_106251[(1)] = (8));

} else {
var statearr_103477_106252 = state_103460__$1;
(statearr_103477_106252[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103461 === (14))){
var inst_103454 = (state_103460[(2)]);
var state_103460__$1 = state_103460;
var statearr_103478_106254 = state_103460__$1;
(statearr_103478_106254[(2)] = inst_103454);

(statearr_103478_106254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103461 === (10))){
var inst_103446 = (state_103460[(2)]);
var state_103460__$1 = state_103460;
var statearr_103479_106255 = state_103460__$1;
(statearr_103479_106255[(2)] = inst_103446);

(statearr_103479_106255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103461 === (8))){
var inst_103443 = cljs.core.async.close_BANG_(to);
var state_103460__$1 = state_103460;
var statearr_103480_106257 = state_103460__$1;
(statearr_103480_106257[(2)] = inst_103443);

(statearr_103480_106257[(1)] = (10));


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
var cljs$core$async$state_machine__103041__auto__ = null;
var cljs$core$async$state_machine__103041__auto____0 = (function (){
var statearr_103481 = [null,null,null,null,null,null,null,null];
(statearr_103481[(0)] = cljs$core$async$state_machine__103041__auto__);

(statearr_103481[(1)] = (1));

return statearr_103481;
});
var cljs$core$async$state_machine__103041__auto____1 = (function (state_103460){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_103460);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e103483){var ex__103044__auto__ = e103483;
var statearr_103484_106266 = state_103460;
(statearr_103484_106266[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_103460[(4)]))){
var statearr_103489_106268 = state_103460;
(statearr_103489_106268[(1)] = cljs.core.first((state_103460[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106271 = state_103460;
state_103460 = G__106271;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
cljs$core$async$state_machine__103041__auto__ = function(state_103460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__103041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__103041__auto____1.call(this,state_103460);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__103041__auto____0;
cljs$core$async$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__103041__auto____1;
return cljs$core$async$state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_103490 = f__103245__auto__();
(statearr_103490[(6)] = c__103244__auto___106226);

return statearr_103490;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
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
var process = (function (p__103497){
var vec__103498 = p__103497;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103498,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103498,(1),null);
var job = vec__103498;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__103244__auto___106276 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_103505){
var state_val_103506 = (state_103505[(1)]);
if((state_val_103506 === (1))){
var state_103505__$1 = state_103505;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_103505__$1,(2),res,v);
} else {
if((state_val_103506 === (2))){
var inst_103502 = (state_103505[(2)]);
var inst_103503 = cljs.core.async.close_BANG_(res);
var state_103505__$1 = (function (){var statearr_103507 = state_103505;
(statearr_103507[(7)] = inst_103502);

return statearr_103507;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_103505__$1,inst_103503);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____0 = (function (){
var statearr_103512 = [null,null,null,null,null,null,null,null];
(statearr_103512[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__);

(statearr_103512[(1)] = (1));

return statearr_103512;
});
var cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____1 = (function (state_103505){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_103505);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e103513){var ex__103044__auto__ = e103513;
var statearr_103514_106284 = state_103505;
(statearr_103514_106284[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_103505[(4)]))){
var statearr_103515_106285 = state_103505;
(statearr_103515_106285[(1)] = cljs.core.first((state_103505[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106287 = state_103505;
state_103505 = G__106287;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__ = function(state_103505){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____1.call(this,state_103505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_103519 = f__103245__auto__();
(statearr_103519[(6)] = c__103244__auto___106276);

return statearr_103519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__103523){
var vec__103524 = p__103523;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103524,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__103524,(1),null);
var job = vec__103524;
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
var n__4613__auto___106300 = n;
var __106301 = (0);
while(true){
if((__106301 < n__4613__auto___106300)){
var G__103531_106302 = type;
var G__103531_106303__$1 = (((G__103531_106302 instanceof cljs.core.Keyword))?G__103531_106302.fqn:null);
switch (G__103531_106303__$1) {
case "compute":
var c__103244__auto___106306 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__106301,c__103244__auto___106306,G__103531_106302,G__103531_106303__$1,n__4613__auto___106300,jobs,results,process,async){
return (function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = ((function (__106301,c__103244__auto___106306,G__103531_106302,G__103531_106303__$1,n__4613__auto___106300,jobs,results,process,async){
return (function (state_103547){
var state_val_103548 = (state_103547[(1)]);
if((state_val_103548 === (1))){
var state_103547__$1 = state_103547;
var statearr_103552_106356 = state_103547__$1;
(statearr_103552_106356[(2)] = null);

(statearr_103552_106356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103548 === (2))){
var state_103547__$1 = state_103547;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103547__$1,(4),jobs);
} else {
if((state_val_103548 === (3))){
var inst_103542 = (state_103547[(2)]);
var state_103547__$1 = state_103547;
return cljs.core.async.impl.ioc_helpers.return_chan(state_103547__$1,inst_103542);
} else {
if((state_val_103548 === (4))){
var inst_103534 = (state_103547[(2)]);
var inst_103535 = process(inst_103534);
var state_103547__$1 = state_103547;
if(cljs.core.truth_(inst_103535)){
var statearr_103553_106360 = state_103547__$1;
(statearr_103553_106360[(1)] = (5));

} else {
var statearr_103554_106362 = state_103547__$1;
(statearr_103554_106362[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103548 === (5))){
var state_103547__$1 = state_103547;
var statearr_103555_106363 = state_103547__$1;
(statearr_103555_106363[(2)] = null);

(statearr_103555_106363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103548 === (6))){
var state_103547__$1 = state_103547;
var statearr_103556_106369 = state_103547__$1;
(statearr_103556_106369[(2)] = null);

(statearr_103556_106369[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103548 === (7))){
var inst_103540 = (state_103547[(2)]);
var state_103547__$1 = state_103547;
var statearr_103557_106371 = state_103547__$1;
(statearr_103557_106371[(2)] = inst_103540);

(statearr_103557_106371[(1)] = (3));


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
});})(__106301,c__103244__auto___106306,G__103531_106302,G__103531_106303__$1,n__4613__auto___106300,jobs,results,process,async))
;
return ((function (__106301,switch__103040__auto__,c__103244__auto___106306,G__103531_106302,G__103531_106303__$1,n__4613__auto___106300,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____0 = (function (){
var statearr_103560 = [null,null,null,null,null,null,null];
(statearr_103560[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__);

(statearr_103560[(1)] = (1));

return statearr_103560;
});
var cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____1 = (function (state_103547){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_103547);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e103561){var ex__103044__auto__ = e103561;
var statearr_103562_106375 = state_103547;
(statearr_103562_106375[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_103547[(4)]))){
var statearr_103563_106376 = state_103547;
(statearr_103563_106376[(1)] = cljs.core.first((state_103547[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106378 = state_103547;
state_103547 = G__106378;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__ = function(state_103547){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____1.call(this,state_103547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__;
})()
;})(__106301,switch__103040__auto__,c__103244__auto___106306,G__103531_106302,G__103531_106303__$1,n__4613__auto___106300,jobs,results,process,async))
})();
var state__103246__auto__ = (function (){var statearr_103564 = f__103245__auto__();
(statearr_103564[(6)] = c__103244__auto___106306);

return statearr_103564;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
});})(__106301,c__103244__auto___106306,G__103531_106302,G__103531_106303__$1,n__4613__auto___106300,jobs,results,process,async))
);


break;
case "async":
var c__103244__auto___106382 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__106301,c__103244__auto___106382,G__103531_106302,G__103531_106303__$1,n__4613__auto___106300,jobs,results,process,async){
return (function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = ((function (__106301,c__103244__auto___106382,G__103531_106302,G__103531_106303__$1,n__4613__auto___106300,jobs,results,process,async){
return (function (state_103580){
var state_val_103581 = (state_103580[(1)]);
if((state_val_103581 === (1))){
var state_103580__$1 = state_103580;
var statearr_103583_106386 = state_103580__$1;
(statearr_103583_106386[(2)] = null);

(statearr_103583_106386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103581 === (2))){
var state_103580__$1 = state_103580;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103580__$1,(4),jobs);
} else {
if((state_val_103581 === (3))){
var inst_103578 = (state_103580[(2)]);
var state_103580__$1 = state_103580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_103580__$1,inst_103578);
} else {
if((state_val_103581 === (4))){
var inst_103570 = (state_103580[(2)]);
var inst_103571 = async(inst_103570);
var state_103580__$1 = state_103580;
if(cljs.core.truth_(inst_103571)){
var statearr_103584_106402 = state_103580__$1;
(statearr_103584_106402[(1)] = (5));

} else {
var statearr_103585_106410 = state_103580__$1;
(statearr_103585_106410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103581 === (5))){
var state_103580__$1 = state_103580;
var statearr_103589_106411 = state_103580__$1;
(statearr_103589_106411[(2)] = null);

(statearr_103589_106411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103581 === (6))){
var state_103580__$1 = state_103580;
var statearr_103590_106412 = state_103580__$1;
(statearr_103590_106412[(2)] = null);

(statearr_103590_106412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103581 === (7))){
var inst_103576 = (state_103580[(2)]);
var state_103580__$1 = state_103580;
var statearr_103591_106413 = state_103580__$1;
(statearr_103591_106413[(2)] = inst_103576);

(statearr_103591_106413[(1)] = (3));


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
});})(__106301,c__103244__auto___106382,G__103531_106302,G__103531_106303__$1,n__4613__auto___106300,jobs,results,process,async))
;
return ((function (__106301,switch__103040__auto__,c__103244__auto___106382,G__103531_106302,G__103531_106303__$1,n__4613__auto___106300,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____0 = (function (){
var statearr_103598 = [null,null,null,null,null,null,null];
(statearr_103598[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__);

(statearr_103598[(1)] = (1));

return statearr_103598;
});
var cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____1 = (function (state_103580){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_103580);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e103600){var ex__103044__auto__ = e103600;
var statearr_103601_106433 = state_103580;
(statearr_103601_106433[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_103580[(4)]))){
var statearr_103602_106434 = state_103580;
(statearr_103602_106434[(1)] = cljs.core.first((state_103580[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106435 = state_103580;
state_103580 = G__106435;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__ = function(state_103580){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____1.call(this,state_103580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__;
})()
;})(__106301,switch__103040__auto__,c__103244__auto___106382,G__103531_106302,G__103531_106303__$1,n__4613__auto___106300,jobs,results,process,async))
})();
var state__103246__auto__ = (function (){var statearr_103605 = f__103245__auto__();
(statearr_103605[(6)] = c__103244__auto___106382);

return statearr_103605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
});})(__106301,c__103244__auto___106382,G__103531_106302,G__103531_106303__$1,n__4613__auto___106300,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__103531_106303__$1)].join('')));

}

var G__106436 = (__106301 + (1));
__106301 = G__106436;
continue;
} else {
}
break;
}

var c__103244__auto___106437 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_103629){
var state_val_103630 = (state_103629[(1)]);
if((state_val_103630 === (7))){
var inst_103625 = (state_103629[(2)]);
var state_103629__$1 = state_103629;
var statearr_103635_106443 = state_103629__$1;
(statearr_103635_106443[(2)] = inst_103625);

(statearr_103635_106443[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103630 === (1))){
var state_103629__$1 = state_103629;
var statearr_103636_106447 = state_103629__$1;
(statearr_103636_106447[(2)] = null);

(statearr_103636_106447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103630 === (4))){
var inst_103609 = (state_103629[(7)]);
var inst_103609__$1 = (state_103629[(2)]);
var inst_103610 = (inst_103609__$1 == null);
var state_103629__$1 = (function (){var statearr_103640 = state_103629;
(statearr_103640[(7)] = inst_103609__$1);

return statearr_103640;
})();
if(cljs.core.truth_(inst_103610)){
var statearr_103642_106453 = state_103629__$1;
(statearr_103642_106453[(1)] = (5));

} else {
var statearr_103643_106454 = state_103629__$1;
(statearr_103643_106454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103630 === (6))){
var inst_103615 = (state_103629[(8)]);
var inst_103609 = (state_103629[(7)]);
var inst_103615__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_103616 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_103617 = [inst_103609,inst_103615__$1];
var inst_103618 = (new cljs.core.PersistentVector(null,2,(5),inst_103616,inst_103617,null));
var state_103629__$1 = (function (){var statearr_103644 = state_103629;
(statearr_103644[(8)] = inst_103615__$1);

return statearr_103644;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_103629__$1,(8),jobs,inst_103618);
} else {
if((state_val_103630 === (3))){
var inst_103627 = (state_103629[(2)]);
var state_103629__$1 = state_103629;
return cljs.core.async.impl.ioc_helpers.return_chan(state_103629__$1,inst_103627);
} else {
if((state_val_103630 === (2))){
var state_103629__$1 = state_103629;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103629__$1,(4),from);
} else {
if((state_val_103630 === (9))){
var inst_103622 = (state_103629[(2)]);
var state_103629__$1 = (function (){var statearr_103645 = state_103629;
(statearr_103645[(9)] = inst_103622);

return statearr_103645;
})();
var statearr_103649_106467 = state_103629__$1;
(statearr_103649_106467[(2)] = null);

(statearr_103649_106467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103630 === (5))){
var inst_103612 = cljs.core.async.close_BANG_(jobs);
var state_103629__$1 = state_103629;
var statearr_103650_106471 = state_103629__$1;
(statearr_103650_106471[(2)] = inst_103612);

(statearr_103650_106471[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103630 === (8))){
var inst_103615 = (state_103629[(8)]);
var inst_103620 = (state_103629[(2)]);
var state_103629__$1 = (function (){var statearr_103651 = state_103629;
(statearr_103651[(10)] = inst_103620);

return statearr_103651;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_103629__$1,(9),results,inst_103615);
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
var cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____0 = (function (){
var statearr_103652 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_103652[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__);

(statearr_103652[(1)] = (1));

return statearr_103652;
});
var cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____1 = (function (state_103629){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_103629);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e103653){var ex__103044__auto__ = e103653;
var statearr_103654_106477 = state_103629;
(statearr_103654_106477[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_103629[(4)]))){
var statearr_103655_106480 = state_103629;
(statearr_103655_106480[(1)] = cljs.core.first((state_103629[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106483 = state_103629;
state_103629 = G__106483;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__ = function(state_103629){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____1.call(this,state_103629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_103656 = f__103245__auto__();
(statearr_103656[(6)] = c__103244__auto___106437);

return statearr_103656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
}));


var c__103244__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_103702){
var state_val_103703 = (state_103702[(1)]);
if((state_val_103703 === (7))){
var inst_103698 = (state_103702[(2)]);
var state_103702__$1 = state_103702;
var statearr_103705_106495 = state_103702__$1;
(statearr_103705_106495[(2)] = inst_103698);

(statearr_103705_106495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103703 === (20))){
var state_103702__$1 = state_103702;
var statearr_103706_106499 = state_103702__$1;
(statearr_103706_106499[(2)] = null);

(statearr_103706_106499[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103703 === (1))){
var state_103702__$1 = state_103702;
var statearr_103707_106500 = state_103702__$1;
(statearr_103707_106500[(2)] = null);

(statearr_103707_106500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103703 === (4))){
var inst_103659 = (state_103702[(7)]);
var inst_103659__$1 = (state_103702[(2)]);
var inst_103660 = (inst_103659__$1 == null);
var state_103702__$1 = (function (){var statearr_103709 = state_103702;
(statearr_103709[(7)] = inst_103659__$1);

return statearr_103709;
})();
if(cljs.core.truth_(inst_103660)){
var statearr_103710_106518 = state_103702__$1;
(statearr_103710_106518[(1)] = (5));

} else {
var statearr_103711_106520 = state_103702__$1;
(statearr_103711_106520[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103703 === (15))){
var inst_103676 = (state_103702[(8)]);
var state_103702__$1 = state_103702;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_103702__$1,(18),to,inst_103676);
} else {
if((state_val_103703 === (21))){
var inst_103693 = (state_103702[(2)]);
var state_103702__$1 = state_103702;
var statearr_103717_106522 = state_103702__$1;
(statearr_103717_106522[(2)] = inst_103693);

(statearr_103717_106522[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103703 === (13))){
var inst_103695 = (state_103702[(2)]);
var state_103702__$1 = (function (){var statearr_103718 = state_103702;
(statearr_103718[(9)] = inst_103695);

return statearr_103718;
})();
var statearr_103719_106523 = state_103702__$1;
(statearr_103719_106523[(2)] = null);

(statearr_103719_106523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103703 === (6))){
var inst_103659 = (state_103702[(7)]);
var state_103702__$1 = state_103702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103702__$1,(11),inst_103659);
} else {
if((state_val_103703 === (17))){
var inst_103686 = (state_103702[(2)]);
var state_103702__$1 = state_103702;
if(cljs.core.truth_(inst_103686)){
var statearr_103720_106528 = state_103702__$1;
(statearr_103720_106528[(1)] = (19));

} else {
var statearr_103721_106529 = state_103702__$1;
(statearr_103721_106529[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103703 === (3))){
var inst_103700 = (state_103702[(2)]);
var state_103702__$1 = state_103702;
return cljs.core.async.impl.ioc_helpers.return_chan(state_103702__$1,inst_103700);
} else {
if((state_val_103703 === (12))){
var inst_103673 = (state_103702[(10)]);
var state_103702__$1 = state_103702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103702__$1,(14),inst_103673);
} else {
if((state_val_103703 === (2))){
var state_103702__$1 = state_103702;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103702__$1,(4),results);
} else {
if((state_val_103703 === (19))){
var state_103702__$1 = state_103702;
var statearr_103723_106537 = state_103702__$1;
(statearr_103723_106537[(2)] = null);

(statearr_103723_106537[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103703 === (11))){
var inst_103673 = (state_103702[(2)]);
var state_103702__$1 = (function (){var statearr_103724 = state_103702;
(statearr_103724[(10)] = inst_103673);

return statearr_103724;
})();
var statearr_103725_106538 = state_103702__$1;
(statearr_103725_106538[(2)] = null);

(statearr_103725_106538[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103703 === (9))){
var state_103702__$1 = state_103702;
var statearr_103726_106539 = state_103702__$1;
(statearr_103726_106539[(2)] = null);

(statearr_103726_106539[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103703 === (5))){
var state_103702__$1 = state_103702;
if(cljs.core.truth_(close_QMARK_)){
var statearr_103728_106540 = state_103702__$1;
(statearr_103728_106540[(1)] = (8));

} else {
var statearr_103729_106541 = state_103702__$1;
(statearr_103729_106541[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103703 === (14))){
var inst_103676 = (state_103702[(8)]);
var inst_103676__$1 = (state_103702[(2)]);
var inst_103677 = (inst_103676__$1 == null);
var inst_103679 = cljs.core.not(inst_103677);
var state_103702__$1 = (function (){var statearr_103731 = state_103702;
(statearr_103731[(8)] = inst_103676__$1);

return statearr_103731;
})();
if(inst_103679){
var statearr_103732_106542 = state_103702__$1;
(statearr_103732_106542[(1)] = (15));

} else {
var statearr_103733_106543 = state_103702__$1;
(statearr_103733_106543[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103703 === (16))){
var state_103702__$1 = state_103702;
var statearr_103734_106544 = state_103702__$1;
(statearr_103734_106544[(2)] = false);

(statearr_103734_106544[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103703 === (10))){
var inst_103670 = (state_103702[(2)]);
var state_103702__$1 = state_103702;
var statearr_103735_106547 = state_103702__$1;
(statearr_103735_106547[(2)] = inst_103670);

(statearr_103735_106547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103703 === (18))){
var inst_103683 = (state_103702[(2)]);
var state_103702__$1 = state_103702;
var statearr_103736_106548 = state_103702__$1;
(statearr_103736_106548[(2)] = inst_103683);

(statearr_103736_106548[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103703 === (8))){
var inst_103667 = cljs.core.async.close_BANG_(to);
var state_103702__$1 = state_103702;
var statearr_103737_106562 = state_103702__$1;
(statearr_103737_106562[(2)] = inst_103667);

(statearr_103737_106562[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____0 = (function (){
var statearr_103738 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_103738[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__);

(statearr_103738[(1)] = (1));

return statearr_103738;
});
var cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____1 = (function (state_103702){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_103702);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e103739){var ex__103044__auto__ = e103739;
var statearr_103740_106568 = state_103702;
(statearr_103740_106568[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_103702[(4)]))){
var statearr_103741_106569 = state_103702;
(statearr_103741_106569[(1)] = cljs.core.first((state_103702[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106573 = state_103702;
state_103702 = G__106573;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__ = function(state_103702){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____1.call(this,state_103702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__103041__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_103742 = f__103245__auto__();
(statearr_103742[(6)] = c__103244__auto__);

return statearr_103742;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
}));

return c__103244__auto__;
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
var G__103746 = arguments.length;
switch (G__103746) {
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
var G__103756 = arguments.length;
switch (G__103756) {
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
var G__103768 = arguments.length;
switch (G__103768) {
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
var c__103244__auto___106593 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_103801){
var state_val_103802 = (state_103801[(1)]);
if((state_val_103802 === (7))){
var inst_103797 = (state_103801[(2)]);
var state_103801__$1 = state_103801;
var statearr_103814_106594 = state_103801__$1;
(statearr_103814_106594[(2)] = inst_103797);

(statearr_103814_106594[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103802 === (1))){
var state_103801__$1 = state_103801;
var statearr_103817_106595 = state_103801__$1;
(statearr_103817_106595[(2)] = null);

(statearr_103817_106595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103802 === (4))){
var inst_103775 = (state_103801[(7)]);
var inst_103775__$1 = (state_103801[(2)]);
var inst_103776 = (inst_103775__$1 == null);
var state_103801__$1 = (function (){var statearr_103821 = state_103801;
(statearr_103821[(7)] = inst_103775__$1);

return statearr_103821;
})();
if(cljs.core.truth_(inst_103776)){
var statearr_103822_106596 = state_103801__$1;
(statearr_103822_106596[(1)] = (5));

} else {
var statearr_103823_106597 = state_103801__$1;
(statearr_103823_106597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103802 === (13))){
var state_103801__$1 = state_103801;
var statearr_103826_106605 = state_103801__$1;
(statearr_103826_106605[(2)] = null);

(statearr_103826_106605[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103802 === (6))){
var inst_103775 = (state_103801[(7)]);
var inst_103784 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_103775) : p.call(null,inst_103775));
var state_103801__$1 = state_103801;
if(cljs.core.truth_(inst_103784)){
var statearr_103830_106610 = state_103801__$1;
(statearr_103830_106610[(1)] = (9));

} else {
var statearr_103831_106611 = state_103801__$1;
(statearr_103831_106611[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103802 === (3))){
var inst_103799 = (state_103801[(2)]);
var state_103801__$1 = state_103801;
return cljs.core.async.impl.ioc_helpers.return_chan(state_103801__$1,inst_103799);
} else {
if((state_val_103802 === (12))){
var state_103801__$1 = state_103801;
var statearr_103833_106612 = state_103801__$1;
(statearr_103833_106612[(2)] = null);

(statearr_103833_106612[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103802 === (2))){
var state_103801__$1 = state_103801;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103801__$1,(4),ch);
} else {
if((state_val_103802 === (11))){
var inst_103775 = (state_103801[(7)]);
var inst_103788 = (state_103801[(2)]);
var state_103801__$1 = state_103801;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_103801__$1,(8),inst_103788,inst_103775);
} else {
if((state_val_103802 === (9))){
var state_103801__$1 = state_103801;
var statearr_103837_106617 = state_103801__$1;
(statearr_103837_106617[(2)] = tc);

(statearr_103837_106617[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103802 === (5))){
var inst_103778 = cljs.core.async.close_BANG_(tc);
var inst_103781 = cljs.core.async.close_BANG_(fc);
var state_103801__$1 = (function (){var statearr_103838 = state_103801;
(statearr_103838[(8)] = inst_103778);

return statearr_103838;
})();
var statearr_103839_106618 = state_103801__$1;
(statearr_103839_106618[(2)] = inst_103781);

(statearr_103839_106618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103802 === (14))){
var inst_103795 = (state_103801[(2)]);
var state_103801__$1 = state_103801;
var statearr_103840_106622 = state_103801__$1;
(statearr_103840_106622[(2)] = inst_103795);

(statearr_103840_106622[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103802 === (10))){
var state_103801__$1 = state_103801;
var statearr_103841_106627 = state_103801__$1;
(statearr_103841_106627[(2)] = fc);

(statearr_103841_106627[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103802 === (8))){
var inst_103790 = (state_103801[(2)]);
var state_103801__$1 = state_103801;
if(cljs.core.truth_(inst_103790)){
var statearr_103842_106635 = state_103801__$1;
(statearr_103842_106635[(1)] = (12));

} else {
var statearr_103843_106636 = state_103801__$1;
(statearr_103843_106636[(1)] = (13));

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
var cljs$core$async$state_machine__103041__auto__ = null;
var cljs$core$async$state_machine__103041__auto____0 = (function (){
var statearr_103846 = [null,null,null,null,null,null,null,null,null];
(statearr_103846[(0)] = cljs$core$async$state_machine__103041__auto__);

(statearr_103846[(1)] = (1));

return statearr_103846;
});
var cljs$core$async$state_machine__103041__auto____1 = (function (state_103801){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_103801);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e103852){var ex__103044__auto__ = e103852;
var statearr_103853_106643 = state_103801;
(statearr_103853_106643[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_103801[(4)]))){
var statearr_103854_106645 = state_103801;
(statearr_103854_106645[(1)] = cljs.core.first((state_103801[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106647 = state_103801;
state_103801 = G__106647;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
cljs$core$async$state_machine__103041__auto__ = function(state_103801){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__103041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__103041__auto____1.call(this,state_103801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__103041__auto____0;
cljs$core$async$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__103041__auto____1;
return cljs$core$async$state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_103855 = f__103245__auto__();
(statearr_103855[(6)] = c__103244__auto___106593);

return statearr_103855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
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
var c__103244__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_103880){
var state_val_103881 = (state_103880[(1)]);
if((state_val_103881 === (7))){
var inst_103876 = (state_103880[(2)]);
var state_103880__$1 = state_103880;
var statearr_103884_106655 = state_103880__$1;
(statearr_103884_106655[(2)] = inst_103876);

(statearr_103884_106655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103881 === (1))){
var inst_103859 = init;
var inst_103860 = inst_103859;
var state_103880__$1 = (function (){var statearr_103885 = state_103880;
(statearr_103885[(7)] = inst_103860);

return statearr_103885;
})();
var statearr_103886_106660 = state_103880__$1;
(statearr_103886_106660[(2)] = null);

(statearr_103886_106660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103881 === (4))){
var inst_103863 = (state_103880[(8)]);
var inst_103863__$1 = (state_103880[(2)]);
var inst_103864 = (inst_103863__$1 == null);
var state_103880__$1 = (function (){var statearr_103887 = state_103880;
(statearr_103887[(8)] = inst_103863__$1);

return statearr_103887;
})();
if(cljs.core.truth_(inst_103864)){
var statearr_103888_106664 = state_103880__$1;
(statearr_103888_106664[(1)] = (5));

} else {
var statearr_103889_106665 = state_103880__$1;
(statearr_103889_106665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103881 === (6))){
var inst_103863 = (state_103880[(8)]);
var inst_103867 = (state_103880[(9)]);
var inst_103860 = (state_103880[(7)]);
var inst_103867__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_103860,inst_103863) : f.call(null,inst_103860,inst_103863));
var inst_103868 = cljs.core.reduced_QMARK_(inst_103867__$1);
var state_103880__$1 = (function (){var statearr_103890 = state_103880;
(statearr_103890[(9)] = inst_103867__$1);

return statearr_103890;
})();
if(inst_103868){
var statearr_103891_106669 = state_103880__$1;
(statearr_103891_106669[(1)] = (8));

} else {
var statearr_103892_106673 = state_103880__$1;
(statearr_103892_106673[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103881 === (3))){
var inst_103878 = (state_103880[(2)]);
var state_103880__$1 = state_103880;
return cljs.core.async.impl.ioc_helpers.return_chan(state_103880__$1,inst_103878);
} else {
if((state_val_103881 === (2))){
var state_103880__$1 = state_103880;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103880__$1,(4),ch);
} else {
if((state_val_103881 === (9))){
var inst_103867 = (state_103880[(9)]);
var inst_103860 = inst_103867;
var state_103880__$1 = (function (){var statearr_103893 = state_103880;
(statearr_103893[(7)] = inst_103860);

return statearr_103893;
})();
var statearr_103894_106674 = state_103880__$1;
(statearr_103894_106674[(2)] = null);

(statearr_103894_106674[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103881 === (5))){
var inst_103860 = (state_103880[(7)]);
var state_103880__$1 = state_103880;
var statearr_103895_106676 = state_103880__$1;
(statearr_103895_106676[(2)] = inst_103860);

(statearr_103895_106676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103881 === (10))){
var inst_103874 = (state_103880[(2)]);
var state_103880__$1 = state_103880;
var statearr_103897_106678 = state_103880__$1;
(statearr_103897_106678[(2)] = inst_103874);

(statearr_103897_106678[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103881 === (8))){
var inst_103867 = (state_103880[(9)]);
var inst_103870 = cljs.core.deref(inst_103867);
var state_103880__$1 = state_103880;
var statearr_103898_106681 = state_103880__$1;
(statearr_103898_106681[(2)] = inst_103870);

(statearr_103898_106681[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__103041__auto__ = null;
var cljs$core$async$reduce_$_state_machine__103041__auto____0 = (function (){
var statearr_103900 = [null,null,null,null,null,null,null,null,null,null];
(statearr_103900[(0)] = cljs$core$async$reduce_$_state_machine__103041__auto__);

(statearr_103900[(1)] = (1));

return statearr_103900;
});
var cljs$core$async$reduce_$_state_machine__103041__auto____1 = (function (state_103880){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_103880);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e103902){var ex__103044__auto__ = e103902;
var statearr_103903_106685 = state_103880;
(statearr_103903_106685[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_103880[(4)]))){
var statearr_103904_106690 = state_103880;
(statearr_103904_106690[(1)] = cljs.core.first((state_103880[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106691 = state_103880;
state_103880 = G__106691;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__103041__auto__ = function(state_103880){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__103041__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__103041__auto____1.call(this,state_103880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__103041__auto____0;
cljs$core$async$reduce_$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__103041__auto____1;
return cljs$core$async$reduce_$_state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_103905 = f__103245__auto__();
(statearr_103905[(6)] = c__103244__auto__);

return statearr_103905;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
}));

return c__103244__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__103244__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_103913){
var state_val_103914 = (state_103913[(1)]);
if((state_val_103914 === (1))){
var inst_103908 = cljs.core.async.reduce(f__$1,init,ch);
var state_103913__$1 = state_103913;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_103913__$1,(2),inst_103908);
} else {
if((state_val_103914 === (2))){
var inst_103910 = (state_103913[(2)]);
var inst_103911 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_103910) : f__$1.call(null,inst_103910));
var state_103913__$1 = state_103913;
return cljs.core.async.impl.ioc_helpers.return_chan(state_103913__$1,inst_103911);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__103041__auto__ = null;
var cljs$core$async$transduce_$_state_machine__103041__auto____0 = (function (){
var statearr_103922 = [null,null,null,null,null,null,null];
(statearr_103922[(0)] = cljs$core$async$transduce_$_state_machine__103041__auto__);

(statearr_103922[(1)] = (1));

return statearr_103922;
});
var cljs$core$async$transduce_$_state_machine__103041__auto____1 = (function (state_103913){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_103913);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e103923){var ex__103044__auto__ = e103923;
var statearr_103924_106705 = state_103913;
(statearr_103924_106705[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_103913[(4)]))){
var statearr_103925_106706 = state_103913;
(statearr_103925_106706[(1)] = cljs.core.first((state_103913[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106713 = state_103913;
state_103913 = G__106713;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__103041__auto__ = function(state_103913){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__103041__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__103041__auto____1.call(this,state_103913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__103041__auto____0;
cljs$core$async$transduce_$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__103041__auto____1;
return cljs$core$async$transduce_$_state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_103927 = f__103245__auto__();
(statearr_103927[(6)] = c__103244__auto__);

return statearr_103927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
}));

return c__103244__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__103931 = arguments.length;
switch (G__103931) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__103244__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_103963){
var state_val_103964 = (state_103963[(1)]);
if((state_val_103964 === (7))){
var inst_103943 = (state_103963[(2)]);
var state_103963__$1 = state_103963;
var statearr_103969_106718 = state_103963__$1;
(statearr_103969_106718[(2)] = inst_103943);

(statearr_103969_106718[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103964 === (1))){
var inst_103937 = cljs.core.seq(coll);
var inst_103938 = inst_103937;
var state_103963__$1 = (function (){var statearr_103970 = state_103963;
(statearr_103970[(7)] = inst_103938);

return statearr_103970;
})();
var statearr_103971_106727 = state_103963__$1;
(statearr_103971_106727[(2)] = null);

(statearr_103971_106727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103964 === (4))){
var inst_103938 = (state_103963[(7)]);
var inst_103941 = cljs.core.first(inst_103938);
var state_103963__$1 = state_103963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_103963__$1,(7),ch,inst_103941);
} else {
if((state_val_103964 === (13))){
var inst_103955 = (state_103963[(2)]);
var state_103963__$1 = state_103963;
var statearr_103980_106736 = state_103963__$1;
(statearr_103980_106736[(2)] = inst_103955);

(statearr_103980_106736[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103964 === (6))){
var inst_103946 = (state_103963[(2)]);
var state_103963__$1 = state_103963;
if(cljs.core.truth_(inst_103946)){
var statearr_103987_106737 = state_103963__$1;
(statearr_103987_106737[(1)] = (8));

} else {
var statearr_103992_106738 = state_103963__$1;
(statearr_103992_106738[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103964 === (3))){
var inst_103959 = (state_103963[(2)]);
var state_103963__$1 = state_103963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_103963__$1,inst_103959);
} else {
if((state_val_103964 === (12))){
var state_103963__$1 = state_103963;
var statearr_104001_106739 = state_103963__$1;
(statearr_104001_106739[(2)] = null);

(statearr_104001_106739[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103964 === (2))){
var inst_103938 = (state_103963[(7)]);
var state_103963__$1 = state_103963;
if(cljs.core.truth_(inst_103938)){
var statearr_104007_106745 = state_103963__$1;
(statearr_104007_106745[(1)] = (4));

} else {
var statearr_104008_106746 = state_103963__$1;
(statearr_104008_106746[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103964 === (11))){
var inst_103952 = cljs.core.async.close_BANG_(ch);
var state_103963__$1 = state_103963;
var statearr_104015_106747 = state_103963__$1;
(statearr_104015_106747[(2)] = inst_103952);

(statearr_104015_106747[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103964 === (9))){
var state_103963__$1 = state_103963;
if(cljs.core.truth_(close_QMARK_)){
var statearr_104016_106748 = state_103963__$1;
(statearr_104016_106748[(1)] = (11));

} else {
var statearr_104018_106750 = state_103963__$1;
(statearr_104018_106750[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103964 === (5))){
var inst_103938 = (state_103963[(7)]);
var state_103963__$1 = state_103963;
var statearr_104019_106758 = state_103963__$1;
(statearr_104019_106758[(2)] = inst_103938);

(statearr_104019_106758[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103964 === (10))){
var inst_103957 = (state_103963[(2)]);
var state_103963__$1 = state_103963;
var statearr_104020_106760 = state_103963__$1;
(statearr_104020_106760[(2)] = inst_103957);

(statearr_104020_106760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_103964 === (8))){
var inst_103938 = (state_103963[(7)]);
var inst_103948 = cljs.core.next(inst_103938);
var inst_103938__$1 = inst_103948;
var state_103963__$1 = (function (){var statearr_104021 = state_103963;
(statearr_104021[(7)] = inst_103938__$1);

return statearr_104021;
})();
var statearr_104022_106761 = state_103963__$1;
(statearr_104022_106761[(2)] = null);

(statearr_104022_106761[(1)] = (2));


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
var cljs$core$async$state_machine__103041__auto__ = null;
var cljs$core$async$state_machine__103041__auto____0 = (function (){
var statearr_104031 = [null,null,null,null,null,null,null,null];
(statearr_104031[(0)] = cljs$core$async$state_machine__103041__auto__);

(statearr_104031[(1)] = (1));

return statearr_104031;
});
var cljs$core$async$state_machine__103041__auto____1 = (function (state_103963){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_103963);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e104032){var ex__103044__auto__ = e104032;
var statearr_104033_106766 = state_103963;
(statearr_104033_106766[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_103963[(4)]))){
var statearr_104034_106767 = state_103963;
(statearr_104034_106767[(1)] = cljs.core.first((state_103963[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__106768 = state_103963;
state_103963 = G__106768;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
cljs$core$async$state_machine__103041__auto__ = function(state_103963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__103041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__103041__auto____1.call(this,state_103963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__103041__auto____0;
cljs$core$async$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__103041__auto____1;
return cljs$core$async$state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_104037 = f__103245__auto__();
(statearr_104037[(6)] = c__103244__auto__);

return statearr_104037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
}));

return c__103244__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__104040 = arguments.length;
switch (G__104040) {
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
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_106790 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_106790(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_106802 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_106802(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_106807 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_106807(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_106812 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_106812(m);
}
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async104119 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async104119 = (function (ch,cs,meta104120){
this.ch = ch;
this.cs = cs;
this.meta104120 = meta104120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async104119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_104121,meta104120__$1){
var self__ = this;
var _104121__$1 = this;
return (new cljs.core.async.t_cljs$core$async104119(self__.ch,self__.cs,meta104120__$1));
}));

(cljs.core.async.t_cljs$core$async104119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_104121){
var self__ = this;
var _104121__$1 = this;
return self__.meta104120;
}));

(cljs.core.async.t_cljs$core$async104119.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async104119.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async104119.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async104119.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async104119.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async104119.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async104119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta104120","meta104120",2076110387,null)], null);
}));

(cljs.core.async.t_cljs$core$async104119.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async104119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async104119");

(cljs.core.async.t_cljs$core$async104119.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async104119");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async104119.
 */
cljs.core.async.__GT_t_cljs$core$async104119 = (function cljs$core$async$mult_$___GT_t_cljs$core$async104119(ch__$1,cs__$1,meta104120){
return (new cljs.core.async.t_cljs$core$async104119(ch__$1,cs__$1,meta104120));
});

}

return (new cljs.core.async.t_cljs$core$async104119(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__103244__auto___106834 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_104288){
var state_val_104289 = (state_104288[(1)]);
if((state_val_104289 === (7))){
var inst_104284 = (state_104288[(2)]);
var state_104288__$1 = state_104288;
var statearr_104291_106840 = state_104288__$1;
(statearr_104291_106840[(2)] = inst_104284);

(statearr_104291_106840[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (20))){
var inst_104176 = (state_104288[(7)]);
var inst_104194 = cljs.core.first(inst_104176);
var inst_104195 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_104194,(0),null);
var inst_104196 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_104194,(1),null);
var state_104288__$1 = (function (){var statearr_104292 = state_104288;
(statearr_104292[(8)] = inst_104195);

return statearr_104292;
})();
if(cljs.core.truth_(inst_104196)){
var statearr_104293_106841 = state_104288__$1;
(statearr_104293_106841[(1)] = (22));

} else {
var statearr_104294_106845 = state_104288__$1;
(statearr_104294_106845[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (27))){
var inst_104225 = (state_104288[(9)]);
var inst_104227 = (state_104288[(10)]);
var inst_104132 = (state_104288[(11)]);
var inst_104232 = (state_104288[(12)]);
var inst_104232__$1 = cljs.core._nth(inst_104225,inst_104227);
var inst_104233 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_104232__$1,inst_104132,done);
var state_104288__$1 = (function (){var statearr_104296 = state_104288;
(statearr_104296[(12)] = inst_104232__$1);

return statearr_104296;
})();
if(cljs.core.truth_(inst_104233)){
var statearr_104297_106847 = state_104288__$1;
(statearr_104297_106847[(1)] = (30));

} else {
var statearr_104298_106848 = state_104288__$1;
(statearr_104298_106848[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (1))){
var state_104288__$1 = state_104288;
var statearr_104299_106849 = state_104288__$1;
(statearr_104299_106849[(2)] = null);

(statearr_104299_106849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (24))){
var inst_104176 = (state_104288[(7)]);
var inst_104201 = (state_104288[(2)]);
var inst_104202 = cljs.core.next(inst_104176);
var inst_104146 = inst_104202;
var inst_104147 = null;
var inst_104148 = (0);
var inst_104149 = (0);
var state_104288__$1 = (function (){var statearr_104300 = state_104288;
(statearr_104300[(13)] = inst_104148);

(statearr_104300[(14)] = inst_104146);

(statearr_104300[(15)] = inst_104147);

(statearr_104300[(16)] = inst_104201);

(statearr_104300[(17)] = inst_104149);

return statearr_104300;
})();
var statearr_104301_106857 = state_104288__$1;
(statearr_104301_106857[(2)] = null);

(statearr_104301_106857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (39))){
var state_104288__$1 = state_104288;
var statearr_104305_106859 = state_104288__$1;
(statearr_104305_106859[(2)] = null);

(statearr_104305_106859[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (4))){
var inst_104132 = (state_104288[(11)]);
var inst_104132__$1 = (state_104288[(2)]);
var inst_104133 = (inst_104132__$1 == null);
var state_104288__$1 = (function (){var statearr_104306 = state_104288;
(statearr_104306[(11)] = inst_104132__$1);

return statearr_104306;
})();
if(cljs.core.truth_(inst_104133)){
var statearr_104307_106869 = state_104288__$1;
(statearr_104307_106869[(1)] = (5));

} else {
var statearr_104308_106871 = state_104288__$1;
(statearr_104308_106871[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (15))){
var inst_104148 = (state_104288[(13)]);
var inst_104146 = (state_104288[(14)]);
var inst_104147 = (state_104288[(15)]);
var inst_104149 = (state_104288[(17)]);
var inst_104171 = (state_104288[(2)]);
var inst_104173 = (inst_104149 + (1));
var tmp104302 = inst_104148;
var tmp104303 = inst_104146;
var tmp104304 = inst_104147;
var inst_104146__$1 = tmp104303;
var inst_104147__$1 = tmp104304;
var inst_104148__$1 = tmp104302;
var inst_104149__$1 = inst_104173;
var state_104288__$1 = (function (){var statearr_104309 = state_104288;
(statearr_104309[(13)] = inst_104148__$1);

(statearr_104309[(14)] = inst_104146__$1);

(statearr_104309[(15)] = inst_104147__$1);

(statearr_104309[(18)] = inst_104171);

(statearr_104309[(17)] = inst_104149__$1);

return statearr_104309;
})();
var statearr_104310_106878 = state_104288__$1;
(statearr_104310_106878[(2)] = null);

(statearr_104310_106878[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (21))){
var inst_104205 = (state_104288[(2)]);
var state_104288__$1 = state_104288;
var statearr_104322_106879 = state_104288__$1;
(statearr_104322_106879[(2)] = inst_104205);

(statearr_104322_106879[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (31))){
var inst_104232 = (state_104288[(12)]);
var inst_104236 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_104232);
var state_104288__$1 = state_104288;
var statearr_104323_106880 = state_104288__$1;
(statearr_104323_106880[(2)] = inst_104236);

(statearr_104323_106880[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (32))){
var inst_104225 = (state_104288[(9)]);
var inst_104227 = (state_104288[(10)]);
var inst_104224 = (state_104288[(19)]);
var inst_104226 = (state_104288[(20)]);
var inst_104238 = (state_104288[(2)]);
var inst_104239 = (inst_104227 + (1));
var tmp104313 = inst_104225;
var tmp104314 = inst_104224;
var tmp104315 = inst_104226;
var inst_104224__$1 = tmp104314;
var inst_104225__$1 = tmp104313;
var inst_104226__$1 = tmp104315;
var inst_104227__$1 = inst_104239;
var state_104288__$1 = (function (){var statearr_104324 = state_104288;
(statearr_104324[(9)] = inst_104225__$1);

(statearr_104324[(21)] = inst_104238);

(statearr_104324[(10)] = inst_104227__$1);

(statearr_104324[(19)] = inst_104224__$1);

(statearr_104324[(20)] = inst_104226__$1);

return statearr_104324;
})();
var statearr_104325_106886 = state_104288__$1;
(statearr_104325_106886[(2)] = null);

(statearr_104325_106886[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (40))){
var inst_104251 = (state_104288[(22)]);
var inst_104261 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_104251);
var state_104288__$1 = state_104288;
var statearr_104326_106890 = state_104288__$1;
(statearr_104326_106890[(2)] = inst_104261);

(statearr_104326_106890[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (33))){
var inst_104242 = (state_104288[(23)]);
var inst_104244 = cljs.core.chunked_seq_QMARK_(inst_104242);
var state_104288__$1 = state_104288;
if(inst_104244){
var statearr_104333_106891 = state_104288__$1;
(statearr_104333_106891[(1)] = (36));

} else {
var statearr_104334_106892 = state_104288__$1;
(statearr_104334_106892[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (13))){
var inst_104161 = (state_104288[(24)]);
var inst_104168 = cljs.core.async.close_BANG_(inst_104161);
var state_104288__$1 = state_104288;
var statearr_104342_106894 = state_104288__$1;
(statearr_104342_106894[(2)] = inst_104168);

(statearr_104342_106894[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (22))){
var inst_104195 = (state_104288[(8)]);
var inst_104198 = cljs.core.async.close_BANG_(inst_104195);
var state_104288__$1 = state_104288;
var statearr_104343_106899 = state_104288__$1;
(statearr_104343_106899[(2)] = inst_104198);

(statearr_104343_106899[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (36))){
var inst_104242 = (state_104288[(23)]);
var inst_104246 = cljs.core.chunk_first(inst_104242);
var inst_104247 = cljs.core.chunk_rest(inst_104242);
var inst_104248 = cljs.core.count(inst_104246);
var inst_104224 = inst_104247;
var inst_104225 = inst_104246;
var inst_104226 = inst_104248;
var inst_104227 = (0);
var state_104288__$1 = (function (){var statearr_104344 = state_104288;
(statearr_104344[(9)] = inst_104225);

(statearr_104344[(10)] = inst_104227);

(statearr_104344[(19)] = inst_104224);

(statearr_104344[(20)] = inst_104226);

return statearr_104344;
})();
var statearr_104345_106908 = state_104288__$1;
(statearr_104345_106908[(2)] = null);

(statearr_104345_106908[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (41))){
var inst_104242 = (state_104288[(23)]);
var inst_104263 = (state_104288[(2)]);
var inst_104264 = cljs.core.next(inst_104242);
var inst_104224 = inst_104264;
var inst_104225 = null;
var inst_104226 = (0);
var inst_104227 = (0);
var state_104288__$1 = (function (){var statearr_104346 = state_104288;
(statearr_104346[(9)] = inst_104225);

(statearr_104346[(25)] = inst_104263);

(statearr_104346[(10)] = inst_104227);

(statearr_104346[(19)] = inst_104224);

(statearr_104346[(20)] = inst_104226);

return statearr_104346;
})();
var statearr_104347_106916 = state_104288__$1;
(statearr_104347_106916[(2)] = null);

(statearr_104347_106916[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (43))){
var state_104288__$1 = state_104288;
var statearr_104348_106917 = state_104288__$1;
(statearr_104348_106917[(2)] = null);

(statearr_104348_106917[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (29))){
var inst_104272 = (state_104288[(2)]);
var state_104288__$1 = state_104288;
var statearr_104350_106921 = state_104288__$1;
(statearr_104350_106921[(2)] = inst_104272);

(statearr_104350_106921[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (44))){
var inst_104281 = (state_104288[(2)]);
var state_104288__$1 = (function (){var statearr_104352 = state_104288;
(statearr_104352[(26)] = inst_104281);

return statearr_104352;
})();
var statearr_104354_106922 = state_104288__$1;
(statearr_104354_106922[(2)] = null);

(statearr_104354_106922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (6))){
var inst_104215 = (state_104288[(27)]);
var inst_104214 = cljs.core.deref(cs);
var inst_104215__$1 = cljs.core.keys(inst_104214);
var inst_104216 = cljs.core.count(inst_104215__$1);
var inst_104217 = cljs.core.reset_BANG_(dctr,inst_104216);
var inst_104223 = cljs.core.seq(inst_104215__$1);
var inst_104224 = inst_104223;
var inst_104225 = null;
var inst_104226 = (0);
var inst_104227 = (0);
var state_104288__$1 = (function (){var statearr_104355 = state_104288;
(statearr_104355[(9)] = inst_104225);

(statearr_104355[(28)] = inst_104217);

(statearr_104355[(10)] = inst_104227);

(statearr_104355[(19)] = inst_104224);

(statearr_104355[(20)] = inst_104226);

(statearr_104355[(27)] = inst_104215__$1);

return statearr_104355;
})();
var statearr_104356_106930 = state_104288__$1;
(statearr_104356_106930[(2)] = null);

(statearr_104356_106930[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (28))){
var inst_104242 = (state_104288[(23)]);
var inst_104224 = (state_104288[(19)]);
var inst_104242__$1 = cljs.core.seq(inst_104224);
var state_104288__$1 = (function (){var statearr_104357 = state_104288;
(statearr_104357[(23)] = inst_104242__$1);

return statearr_104357;
})();
if(inst_104242__$1){
var statearr_104360_106943 = state_104288__$1;
(statearr_104360_106943[(1)] = (33));

} else {
var statearr_104361_106944 = state_104288__$1;
(statearr_104361_106944[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (25))){
var inst_104227 = (state_104288[(10)]);
var inst_104226 = (state_104288[(20)]);
var inst_104229 = (inst_104227 < inst_104226);
var inst_104230 = inst_104229;
var state_104288__$1 = state_104288;
if(cljs.core.truth_(inst_104230)){
var statearr_104362_106948 = state_104288__$1;
(statearr_104362_106948[(1)] = (27));

} else {
var statearr_104363_106952 = state_104288__$1;
(statearr_104363_106952[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (34))){
var state_104288__$1 = state_104288;
var statearr_104364_106953 = state_104288__$1;
(statearr_104364_106953[(2)] = null);

(statearr_104364_106953[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (17))){
var state_104288__$1 = state_104288;
var statearr_104371_106954 = state_104288__$1;
(statearr_104371_106954[(2)] = null);

(statearr_104371_106954[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (3))){
var inst_104286 = (state_104288[(2)]);
var state_104288__$1 = state_104288;
return cljs.core.async.impl.ioc_helpers.return_chan(state_104288__$1,inst_104286);
} else {
if((state_val_104289 === (12))){
var inst_104210 = (state_104288[(2)]);
var state_104288__$1 = state_104288;
var statearr_104375_106955 = state_104288__$1;
(statearr_104375_106955[(2)] = inst_104210);

(statearr_104375_106955[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (2))){
var state_104288__$1 = state_104288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_104288__$1,(4),ch);
} else {
if((state_val_104289 === (23))){
var state_104288__$1 = state_104288;
var statearr_104379_106958 = state_104288__$1;
(statearr_104379_106958[(2)] = null);

(statearr_104379_106958[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (35))){
var inst_104270 = (state_104288[(2)]);
var state_104288__$1 = state_104288;
var statearr_104383_106964 = state_104288__$1;
(statearr_104383_106964[(2)] = inst_104270);

(statearr_104383_106964[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (19))){
var inst_104176 = (state_104288[(7)]);
var inst_104180 = cljs.core.chunk_first(inst_104176);
var inst_104181 = cljs.core.chunk_rest(inst_104176);
var inst_104182 = cljs.core.count(inst_104180);
var inst_104146 = inst_104181;
var inst_104147 = inst_104180;
var inst_104148 = inst_104182;
var inst_104149 = (0);
var state_104288__$1 = (function (){var statearr_104384 = state_104288;
(statearr_104384[(13)] = inst_104148);

(statearr_104384[(14)] = inst_104146);

(statearr_104384[(15)] = inst_104147);

(statearr_104384[(17)] = inst_104149);

return statearr_104384;
})();
var statearr_104385_106970 = state_104288__$1;
(statearr_104385_106970[(2)] = null);

(statearr_104385_106970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (11))){
var inst_104146 = (state_104288[(14)]);
var inst_104176 = (state_104288[(7)]);
var inst_104176__$1 = cljs.core.seq(inst_104146);
var state_104288__$1 = (function (){var statearr_104389 = state_104288;
(statearr_104389[(7)] = inst_104176__$1);

return statearr_104389;
})();
if(inst_104176__$1){
var statearr_104390_106971 = state_104288__$1;
(statearr_104390_106971[(1)] = (16));

} else {
var statearr_104391_106972 = state_104288__$1;
(statearr_104391_106972[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (9))){
var inst_104212 = (state_104288[(2)]);
var state_104288__$1 = state_104288;
var statearr_104394_106974 = state_104288__$1;
(statearr_104394_106974[(2)] = inst_104212);

(statearr_104394_106974[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (5))){
var inst_104140 = cljs.core.deref(cs);
var inst_104141 = cljs.core.seq(inst_104140);
var inst_104146 = inst_104141;
var inst_104147 = null;
var inst_104148 = (0);
var inst_104149 = (0);
var state_104288__$1 = (function (){var statearr_104401 = state_104288;
(statearr_104401[(13)] = inst_104148);

(statearr_104401[(14)] = inst_104146);

(statearr_104401[(15)] = inst_104147);

(statearr_104401[(17)] = inst_104149);

return statearr_104401;
})();
var statearr_104404_106981 = state_104288__$1;
(statearr_104404_106981[(2)] = null);

(statearr_104404_106981[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (14))){
var state_104288__$1 = state_104288;
var statearr_104405_106982 = state_104288__$1;
(statearr_104405_106982[(2)] = null);

(statearr_104405_106982[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (45))){
var inst_104278 = (state_104288[(2)]);
var state_104288__$1 = state_104288;
var statearr_104407_106985 = state_104288__$1;
(statearr_104407_106985[(2)] = inst_104278);

(statearr_104407_106985[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (26))){
var inst_104215 = (state_104288[(27)]);
var inst_104274 = (state_104288[(2)]);
var inst_104275 = cljs.core.seq(inst_104215);
var state_104288__$1 = (function (){var statearr_104408 = state_104288;
(statearr_104408[(29)] = inst_104274);

return statearr_104408;
})();
if(inst_104275){
var statearr_104412_106987 = state_104288__$1;
(statearr_104412_106987[(1)] = (42));

} else {
var statearr_104413_106988 = state_104288__$1;
(statearr_104413_106988[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (16))){
var inst_104176 = (state_104288[(7)]);
var inst_104178 = cljs.core.chunked_seq_QMARK_(inst_104176);
var state_104288__$1 = state_104288;
if(inst_104178){
var statearr_104415_106989 = state_104288__$1;
(statearr_104415_106989[(1)] = (19));

} else {
var statearr_104416_106990 = state_104288__$1;
(statearr_104416_106990[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (38))){
var inst_104267 = (state_104288[(2)]);
var state_104288__$1 = state_104288;
var statearr_104417_106992 = state_104288__$1;
(statearr_104417_106992[(2)] = inst_104267);

(statearr_104417_106992[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (30))){
var state_104288__$1 = state_104288;
var statearr_104418_106998 = state_104288__$1;
(statearr_104418_106998[(2)] = null);

(statearr_104418_106998[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (10))){
var inst_104147 = (state_104288[(15)]);
var inst_104149 = (state_104288[(17)]);
var inst_104160 = cljs.core._nth(inst_104147,inst_104149);
var inst_104161 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_104160,(0),null);
var inst_104162 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_104160,(1),null);
var state_104288__$1 = (function (){var statearr_104419 = state_104288;
(statearr_104419[(24)] = inst_104161);

return statearr_104419;
})();
if(cljs.core.truth_(inst_104162)){
var statearr_104420_107000 = state_104288__$1;
(statearr_104420_107000[(1)] = (13));

} else {
var statearr_104421_107002 = state_104288__$1;
(statearr_104421_107002[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (18))){
var inst_104208 = (state_104288[(2)]);
var state_104288__$1 = state_104288;
var statearr_104422_107006 = state_104288__$1;
(statearr_104422_107006[(2)] = inst_104208);

(statearr_104422_107006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (42))){
var state_104288__$1 = state_104288;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_104288__$1,(45),dchan);
} else {
if((state_val_104289 === (37))){
var inst_104251 = (state_104288[(22)]);
var inst_104242 = (state_104288[(23)]);
var inst_104132 = (state_104288[(11)]);
var inst_104251__$1 = cljs.core.first(inst_104242);
var inst_104252 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_104251__$1,inst_104132,done);
var state_104288__$1 = (function (){var statearr_104423 = state_104288;
(statearr_104423[(22)] = inst_104251__$1);

return statearr_104423;
})();
if(cljs.core.truth_(inst_104252)){
var statearr_104424_107007 = state_104288__$1;
(statearr_104424_107007[(1)] = (39));

} else {
var statearr_104425_107008 = state_104288__$1;
(statearr_104425_107008[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104289 === (8))){
var inst_104148 = (state_104288[(13)]);
var inst_104149 = (state_104288[(17)]);
var inst_104154 = (inst_104149 < inst_104148);
var inst_104155 = inst_104154;
var state_104288__$1 = state_104288;
if(cljs.core.truth_(inst_104155)){
var statearr_104426_107012 = state_104288__$1;
(statearr_104426_107012[(1)] = (10));

} else {
var statearr_104427_107013 = state_104288__$1;
(statearr_104427_107013[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__103041__auto__ = null;
var cljs$core$async$mult_$_state_machine__103041__auto____0 = (function (){
var statearr_104428 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_104428[(0)] = cljs$core$async$mult_$_state_machine__103041__auto__);

(statearr_104428[(1)] = (1));

return statearr_104428;
});
var cljs$core$async$mult_$_state_machine__103041__auto____1 = (function (state_104288){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_104288);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e104429){var ex__103044__auto__ = e104429;
var statearr_104431_107021 = state_104288;
(statearr_104431_107021[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_104288[(4)]))){
var statearr_104434_107022 = state_104288;
(statearr_104434_107022[(1)] = cljs.core.first((state_104288[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107023 = state_104288;
state_104288 = G__107023;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__103041__auto__ = function(state_104288){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__103041__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__103041__auto____1.call(this,state_104288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__103041__auto____0;
cljs$core$async$mult_$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__103041__auto____1;
return cljs$core$async$mult_$_state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_104436 = f__103245__auto__();
(statearr_104436[(6)] = c__103244__auto___106834);

return statearr_104436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
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
var G__104440 = arguments.length;
switch (G__104440) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_107031 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_107031(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_107032 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_107032(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_107035 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_107035(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_107036 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_107036(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_107039 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_107039(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___107040 = arguments.length;
var i__4737__auto___107041 = (0);
while(true){
if((i__4737__auto___107041 < len__4736__auto___107040)){
args__4742__auto__.push((arguments[i__4737__auto___107041]));

var G__107042 = (i__4737__auto___107041 + (1));
i__4737__auto___107041 = G__107042;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__104454){
var map__104455 = p__104454;
var map__104455__$1 = (((((!((map__104455 == null))))?(((((map__104455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__104455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__104455):map__104455);
var opts = map__104455__$1;
var statearr_104457_107043 = state;
(statearr_104457_107043[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_104459_107044 = state;
(statearr_104459_107044[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_104460_107045 = state;
(statearr_104460_107045[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq104449){
var G__104450 = cljs.core.first(seq104449);
var seq104449__$1 = cljs.core.next(seq104449);
var G__104451 = cljs.core.first(seq104449__$1);
var seq104449__$2 = cljs.core.next(seq104449__$1);
var G__104452 = cljs.core.first(seq104449__$2);
var seq104449__$3 = cljs.core.next(seq104449__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__104450,G__104451,G__104452,seq104449__$3);
}));

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
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
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
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async104465 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async104465 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta104466){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta104466 = meta104466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async104465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_104467,meta104466__$1){
var self__ = this;
var _104467__$1 = this;
return (new cljs.core.async.t_cljs$core$async104465(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta104466__$1));
}));

(cljs.core.async.t_cljs$core$async104465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_104467){
var self__ = this;
var _104467__$1 = this;
return self__.meta104466;
}));

(cljs.core.async.t_cljs$core$async104465.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async104465.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async104465.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async104465.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async104465.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async104465.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async104465.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async104465.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async104465.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta104466","meta104466",111289318,null)], null);
}));

(cljs.core.async.t_cljs$core$async104465.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async104465.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async104465");

(cljs.core.async.t_cljs$core$async104465.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async104465");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async104465.
 */
cljs.core.async.__GT_t_cljs$core$async104465 = (function cljs$core$async$mix_$___GT_t_cljs$core$async104465(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta104466){
return (new cljs.core.async.t_cljs$core$async104465(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta104466));
});

}

return (new cljs.core.async.t_cljs$core$async104465(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__103244__auto___107060 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_104576){
var state_val_104577 = (state_104576[(1)]);
if((state_val_104577 === (7))){
var inst_104489 = (state_104576[(2)]);
var state_104576__$1 = state_104576;
var statearr_104579_107061 = state_104576__$1;
(statearr_104579_107061[(2)] = inst_104489);

(statearr_104579_107061[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (20))){
var inst_104501 = (state_104576[(7)]);
var state_104576__$1 = state_104576;
var statearr_104582_107064 = state_104576__$1;
(statearr_104582_107064[(2)] = inst_104501);

(statearr_104582_107064[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (27))){
var state_104576__$1 = state_104576;
var statearr_104583_107065 = state_104576__$1;
(statearr_104583_107065[(2)] = null);

(statearr_104583_107065[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (1))){
var inst_104476 = (state_104576[(8)]);
var inst_104476__$1 = calc_state();
var inst_104478 = (inst_104476__$1 == null);
var inst_104479 = cljs.core.not(inst_104478);
var state_104576__$1 = (function (){var statearr_104585 = state_104576;
(statearr_104585[(8)] = inst_104476__$1);

return statearr_104585;
})();
if(inst_104479){
var statearr_104586_107070 = state_104576__$1;
(statearr_104586_107070[(1)] = (2));

} else {
var statearr_104587_107071 = state_104576__$1;
(statearr_104587_107071[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (24))){
var inst_104534 = (state_104576[(9)]);
var inst_104525 = (state_104576[(10)]);
var inst_104548 = (state_104576[(11)]);
var inst_104548__$1 = (inst_104525.cljs$core$IFn$_invoke$arity$1 ? inst_104525.cljs$core$IFn$_invoke$arity$1(inst_104534) : inst_104525.call(null,inst_104534));
var state_104576__$1 = (function (){var statearr_104589 = state_104576;
(statearr_104589[(11)] = inst_104548__$1);

return statearr_104589;
})();
if(cljs.core.truth_(inst_104548__$1)){
var statearr_104590_107076 = state_104576__$1;
(statearr_104590_107076[(1)] = (29));

} else {
var statearr_104591_107077 = state_104576__$1;
(statearr_104591_107077[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (4))){
var inst_104492 = (state_104576[(2)]);
var state_104576__$1 = state_104576;
if(cljs.core.truth_(inst_104492)){
var statearr_104592_107081 = state_104576__$1;
(statearr_104592_107081[(1)] = (8));

} else {
var statearr_104594_107082 = state_104576__$1;
(statearr_104594_107082[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (15))){
var inst_104519 = (state_104576[(2)]);
var state_104576__$1 = state_104576;
if(cljs.core.truth_(inst_104519)){
var statearr_104595_107083 = state_104576__$1;
(statearr_104595_107083[(1)] = (19));

} else {
var statearr_104596_107084 = state_104576__$1;
(statearr_104596_107084[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (21))){
var inst_104524 = (state_104576[(12)]);
var inst_104524__$1 = (state_104576[(2)]);
var inst_104525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_104524__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_104526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_104524__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_104527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_104524__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_104576__$1 = (function (){var statearr_104600 = state_104576;
(statearr_104600[(13)] = inst_104526);

(statearr_104600[(12)] = inst_104524__$1);

(statearr_104600[(10)] = inst_104525);

return statearr_104600;
})();
return cljs.core.async.ioc_alts_BANG_(state_104576__$1,(22),inst_104527);
} else {
if((state_val_104577 === (31))){
var inst_104558 = (state_104576[(2)]);
var state_104576__$1 = state_104576;
if(cljs.core.truth_(inst_104558)){
var statearr_104602_107103 = state_104576__$1;
(statearr_104602_107103[(1)] = (32));

} else {
var statearr_104603_107109 = state_104576__$1;
(statearr_104603_107109[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (32))){
var inst_104533 = (state_104576[(14)]);
var state_104576__$1 = state_104576;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_104576__$1,(35),out,inst_104533);
} else {
if((state_val_104577 === (33))){
var inst_104524 = (state_104576[(12)]);
var inst_104501 = inst_104524;
var state_104576__$1 = (function (){var statearr_104607 = state_104576;
(statearr_104607[(7)] = inst_104501);

return statearr_104607;
})();
var statearr_104609_107123 = state_104576__$1;
(statearr_104609_107123[(2)] = null);

(statearr_104609_107123[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (13))){
var inst_104501 = (state_104576[(7)]);
var inst_104508 = inst_104501.cljs$lang$protocol_mask$partition0$;
var inst_104509 = (inst_104508 & (64));
var inst_104510 = inst_104501.cljs$core$ISeq$;
var inst_104511 = (cljs.core.PROTOCOL_SENTINEL === inst_104510);
var inst_104512 = ((inst_104509) || (inst_104511));
var state_104576__$1 = state_104576;
if(cljs.core.truth_(inst_104512)){
var statearr_104610_107136 = state_104576__$1;
(statearr_104610_107136[(1)] = (16));

} else {
var statearr_104611_107141 = state_104576__$1;
(statearr_104611_107141[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (22))){
var inst_104534 = (state_104576[(9)]);
var inst_104533 = (state_104576[(14)]);
var inst_104532 = (state_104576[(2)]);
var inst_104533__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_104532,(0),null);
var inst_104534__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_104532,(1),null);
var inst_104535 = (inst_104533__$1 == null);
var inst_104536 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_104534__$1,change);
var inst_104537 = ((inst_104535) || (inst_104536));
var state_104576__$1 = (function (){var statearr_104614 = state_104576;
(statearr_104614[(9)] = inst_104534__$1);

(statearr_104614[(14)] = inst_104533__$1);

return statearr_104614;
})();
if(cljs.core.truth_(inst_104537)){
var statearr_104615_107154 = state_104576__$1;
(statearr_104615_107154[(1)] = (23));

} else {
var statearr_104617_107159 = state_104576__$1;
(statearr_104617_107159[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (36))){
var inst_104524 = (state_104576[(12)]);
var inst_104501 = inst_104524;
var state_104576__$1 = (function (){var statearr_104618 = state_104576;
(statearr_104618[(7)] = inst_104501);

return statearr_104618;
})();
var statearr_104619_107164 = state_104576__$1;
(statearr_104619_107164[(2)] = null);

(statearr_104619_107164[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (29))){
var inst_104548 = (state_104576[(11)]);
var state_104576__$1 = state_104576;
var statearr_104624_107171 = state_104576__$1;
(statearr_104624_107171[(2)] = inst_104548);

(statearr_104624_107171[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (6))){
var state_104576__$1 = state_104576;
var statearr_104625_107175 = state_104576__$1;
(statearr_104625_107175[(2)] = false);

(statearr_104625_107175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (28))){
var inst_104544 = (state_104576[(2)]);
var inst_104545 = calc_state();
var inst_104501 = inst_104545;
var state_104576__$1 = (function (){var statearr_104626 = state_104576;
(statearr_104626[(15)] = inst_104544);

(statearr_104626[(7)] = inst_104501);

return statearr_104626;
})();
var statearr_104629_107187 = state_104576__$1;
(statearr_104629_107187[(2)] = null);

(statearr_104629_107187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (25))){
var inst_104572 = (state_104576[(2)]);
var state_104576__$1 = state_104576;
var statearr_104631_107190 = state_104576__$1;
(statearr_104631_107190[(2)] = inst_104572);

(statearr_104631_107190[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (34))){
var inst_104570 = (state_104576[(2)]);
var state_104576__$1 = state_104576;
var statearr_104632_107197 = state_104576__$1;
(statearr_104632_107197[(2)] = inst_104570);

(statearr_104632_107197[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (17))){
var state_104576__$1 = state_104576;
var statearr_104633_107202 = state_104576__$1;
(statearr_104633_107202[(2)] = false);

(statearr_104633_107202[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (3))){
var state_104576__$1 = state_104576;
var statearr_104636_107203 = state_104576__$1;
(statearr_104636_107203[(2)] = false);

(statearr_104636_107203[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (12))){
var inst_104574 = (state_104576[(2)]);
var state_104576__$1 = state_104576;
return cljs.core.async.impl.ioc_helpers.return_chan(state_104576__$1,inst_104574);
} else {
if((state_val_104577 === (2))){
var inst_104476 = (state_104576[(8)]);
var inst_104481 = inst_104476.cljs$lang$protocol_mask$partition0$;
var inst_104482 = (inst_104481 & (64));
var inst_104483 = inst_104476.cljs$core$ISeq$;
var inst_104484 = (cljs.core.PROTOCOL_SENTINEL === inst_104483);
var inst_104485 = ((inst_104482) || (inst_104484));
var state_104576__$1 = state_104576;
if(cljs.core.truth_(inst_104485)){
var statearr_104637_107212 = state_104576__$1;
(statearr_104637_107212[(1)] = (5));

} else {
var statearr_104638_107215 = state_104576__$1;
(statearr_104638_107215[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (23))){
var inst_104533 = (state_104576[(14)]);
var inst_104539 = (inst_104533 == null);
var state_104576__$1 = state_104576;
if(cljs.core.truth_(inst_104539)){
var statearr_104639_107218 = state_104576__$1;
(statearr_104639_107218[(1)] = (26));

} else {
var statearr_104640_107220 = state_104576__$1;
(statearr_104640_107220[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (35))){
var inst_104561 = (state_104576[(2)]);
var state_104576__$1 = state_104576;
if(cljs.core.truth_(inst_104561)){
var statearr_104641_107221 = state_104576__$1;
(statearr_104641_107221[(1)] = (36));

} else {
var statearr_104642_107222 = state_104576__$1;
(statearr_104642_107222[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (19))){
var inst_104501 = (state_104576[(7)]);
var inst_104521 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_104501);
var state_104576__$1 = state_104576;
var statearr_104643_107223 = state_104576__$1;
(statearr_104643_107223[(2)] = inst_104521);

(statearr_104643_107223[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (11))){
var inst_104501 = (state_104576[(7)]);
var inst_104505 = (inst_104501 == null);
var inst_104506 = cljs.core.not(inst_104505);
var state_104576__$1 = state_104576;
if(inst_104506){
var statearr_104644_107224 = state_104576__$1;
(statearr_104644_107224[(1)] = (13));

} else {
var statearr_104645_107225 = state_104576__$1;
(statearr_104645_107225[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (9))){
var inst_104476 = (state_104576[(8)]);
var state_104576__$1 = state_104576;
var statearr_104646_107226 = state_104576__$1;
(statearr_104646_107226[(2)] = inst_104476);

(statearr_104646_107226[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (5))){
var state_104576__$1 = state_104576;
var statearr_104647_107232 = state_104576__$1;
(statearr_104647_107232[(2)] = true);

(statearr_104647_107232[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (14))){
var state_104576__$1 = state_104576;
var statearr_104648_107234 = state_104576__$1;
(statearr_104648_107234[(2)] = false);

(statearr_104648_107234[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (26))){
var inst_104534 = (state_104576[(9)]);
var inst_104541 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_104534);
var state_104576__$1 = state_104576;
var statearr_104649_107239 = state_104576__$1;
(statearr_104649_107239[(2)] = inst_104541);

(statearr_104649_107239[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (16))){
var state_104576__$1 = state_104576;
var statearr_104650_107240 = state_104576__$1;
(statearr_104650_107240[(2)] = true);

(statearr_104650_107240[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (38))){
var inst_104566 = (state_104576[(2)]);
var state_104576__$1 = state_104576;
var statearr_104651_107244 = state_104576__$1;
(statearr_104651_107244[(2)] = inst_104566);

(statearr_104651_107244[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (30))){
var inst_104526 = (state_104576[(13)]);
var inst_104534 = (state_104576[(9)]);
var inst_104525 = (state_104576[(10)]);
var inst_104553 = cljs.core.empty_QMARK_(inst_104525);
var inst_104554 = (inst_104526.cljs$core$IFn$_invoke$arity$1 ? inst_104526.cljs$core$IFn$_invoke$arity$1(inst_104534) : inst_104526.call(null,inst_104534));
var inst_104555 = cljs.core.not(inst_104554);
var inst_104556 = ((inst_104553) && (inst_104555));
var state_104576__$1 = state_104576;
var statearr_104652_107246 = state_104576__$1;
(statearr_104652_107246[(2)] = inst_104556);

(statearr_104652_107246[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (10))){
var inst_104476 = (state_104576[(8)]);
var inst_104497 = (state_104576[(2)]);
var inst_104498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_104497,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_104499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_104497,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_104500 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_104497,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_104501 = inst_104476;
var state_104576__$1 = (function (){var statearr_104653 = state_104576;
(statearr_104653[(16)] = inst_104499);

(statearr_104653[(17)] = inst_104500);

(statearr_104653[(7)] = inst_104501);

(statearr_104653[(18)] = inst_104498);

return statearr_104653;
})();
var statearr_104654_107250 = state_104576__$1;
(statearr_104654_107250[(2)] = null);

(statearr_104654_107250[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (18))){
var inst_104516 = (state_104576[(2)]);
var state_104576__$1 = state_104576;
var statearr_104656_107251 = state_104576__$1;
(statearr_104656_107251[(2)] = inst_104516);

(statearr_104656_107251[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (37))){
var state_104576__$1 = state_104576;
var statearr_104657_107252 = state_104576__$1;
(statearr_104657_107252[(2)] = null);

(statearr_104657_107252[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104577 === (8))){
var inst_104476 = (state_104576[(8)]);
var inst_104494 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_104476);
var state_104576__$1 = state_104576;
var statearr_104658_107254 = state_104576__$1;
(statearr_104658_107254[(2)] = inst_104494);

(statearr_104658_107254[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__103041__auto__ = null;
var cljs$core$async$mix_$_state_machine__103041__auto____0 = (function (){
var statearr_104661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_104661[(0)] = cljs$core$async$mix_$_state_machine__103041__auto__);

(statearr_104661[(1)] = (1));

return statearr_104661;
});
var cljs$core$async$mix_$_state_machine__103041__auto____1 = (function (state_104576){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_104576);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e104662){var ex__103044__auto__ = e104662;
var statearr_104663_107260 = state_104576;
(statearr_104663_107260[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_104576[(4)]))){
var statearr_104664_107265 = state_104576;
(statearr_104664_107265[(1)] = cljs.core.first((state_104576[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107266 = state_104576;
state_104576 = G__107266;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__103041__auto__ = function(state_104576){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__103041__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__103041__auto____1.call(this,state_104576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__103041__auto____0;
cljs$core$async$mix_$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__103041__auto____1;
return cljs$core$async$mix_$_state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_104665 = f__103245__auto__();
(statearr_104665[(6)] = c__103244__auto___107060);

return statearr_104665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_107270 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_107270(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_107277 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_107277(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_107278 = (function() {
var G__107279 = null;
var G__107279__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__107279__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__107279 = function(p,v){
switch(arguments.length){
case 1:
return G__107279__1.call(this,p);
case 2:
return G__107279__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__107279.cljs$core$IFn$_invoke$arity$1 = G__107279__1;
G__107279.cljs$core$IFn$_invoke$arity$2 = G__107279__2;
return G__107279;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__104684 = arguments.length;
switch (G__104684) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_107278(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_107278(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


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
var G__104692 = arguments.length;
switch (G__104692) {
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
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__104689_SHARP_){
if(cljs.core.truth_((p1__104689_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__104689_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__104689_SHARP_.call(null,topic)))){
return p1__104689_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__104689_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async104694 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async104694 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta104695){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta104695 = meta104695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async104694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_104696,meta104695__$1){
var self__ = this;
var _104696__$1 = this;
return (new cljs.core.async.t_cljs$core$async104694(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta104695__$1));
}));

(cljs.core.async.t_cljs$core$async104694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_104696){
var self__ = this;
var _104696__$1 = this;
return self__.meta104695;
}));

(cljs.core.async.t_cljs$core$async104694.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async104694.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async104694.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async104694.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async104694.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async104694.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async104694.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async104694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta104695","meta104695",-843797187,null)], null);
}));

(cljs.core.async.t_cljs$core$async104694.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async104694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async104694");

(cljs.core.async.t_cljs$core$async104694.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async104694");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async104694.
 */
cljs.core.async.__GT_t_cljs$core$async104694 = (function cljs$core$async$__GT_t_cljs$core$async104694(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta104695){
return (new cljs.core.async.t_cljs$core$async104694(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta104695));
});

}

return (new cljs.core.async.t_cljs$core$async104694(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__103244__auto___107298 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_104790){
var state_val_104791 = (state_104790[(1)]);
if((state_val_104791 === (7))){
var inst_104786 = (state_104790[(2)]);
var state_104790__$1 = state_104790;
var statearr_104795_107299 = state_104790__$1;
(statearr_104795_107299[(2)] = inst_104786);

(statearr_104795_107299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104791 === (20))){
var state_104790__$1 = state_104790;
var statearr_104796_107300 = state_104790__$1;
(statearr_104796_107300[(2)] = null);

(statearr_104796_107300[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104791 === (1))){
var state_104790__$1 = state_104790;
var statearr_104799_107301 = state_104790__$1;
(statearr_104799_107301[(2)] = null);

(statearr_104799_107301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104791 === (24))){
var inst_104769 = (state_104790[(7)]);
var inst_104778 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_104769);
var state_104790__$1 = state_104790;
var statearr_104801_107302 = state_104790__$1;
(statearr_104801_107302[(2)] = inst_104778);

(statearr_104801_107302[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104791 === (4))){
var inst_104711 = (state_104790[(8)]);
var inst_104711__$1 = (state_104790[(2)]);
var inst_104720 = (inst_104711__$1 == null);
var state_104790__$1 = (function (){var statearr_104804 = state_104790;
(statearr_104804[(8)] = inst_104711__$1);

return statearr_104804;
})();
if(cljs.core.truth_(inst_104720)){
var statearr_104806_107303 = state_104790__$1;
(statearr_104806_107303[(1)] = (5));

} else {
var statearr_104807_107306 = state_104790__$1;
(statearr_104807_107306[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104791 === (15))){
var inst_104763 = (state_104790[(2)]);
var state_104790__$1 = state_104790;
var statearr_104808_107307 = state_104790__$1;
(statearr_104808_107307[(2)] = inst_104763);

(statearr_104808_107307[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104791 === (21))){
var inst_104783 = (state_104790[(2)]);
var state_104790__$1 = (function (){var statearr_104810 = state_104790;
(statearr_104810[(9)] = inst_104783);

return statearr_104810;
})();
var statearr_104812_107308 = state_104790__$1;
(statearr_104812_107308[(2)] = null);

(statearr_104812_107308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104791 === (13))){
var inst_104743 = (state_104790[(10)]);
var inst_104745 = cljs.core.chunked_seq_QMARK_(inst_104743);
var state_104790__$1 = state_104790;
if(inst_104745){
var statearr_104816_107309 = state_104790__$1;
(statearr_104816_107309[(1)] = (16));

} else {
var statearr_104817_107310 = state_104790__$1;
(statearr_104817_107310[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104791 === (22))){
var inst_104775 = (state_104790[(2)]);
var state_104790__$1 = state_104790;
if(cljs.core.truth_(inst_104775)){
var statearr_104819_107311 = state_104790__$1;
(statearr_104819_107311[(1)] = (23));

} else {
var statearr_104820_107312 = state_104790__$1;
(statearr_104820_107312[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104791 === (6))){
var inst_104711 = (state_104790[(8)]);
var inst_104771 = (state_104790[(11)]);
var inst_104769 = (state_104790[(7)]);
var inst_104769__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_104711) : topic_fn.call(null,inst_104711));
var inst_104770 = cljs.core.deref(mults);
var inst_104771__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_104770,inst_104769__$1);
var state_104790__$1 = (function (){var statearr_104824 = state_104790;
(statearr_104824[(11)] = inst_104771__$1);

(statearr_104824[(7)] = inst_104769__$1);

return statearr_104824;
})();
if(cljs.core.truth_(inst_104771__$1)){
var statearr_104827_107314 = state_104790__$1;
(statearr_104827_107314[(1)] = (19));

} else {
var statearr_104831_107315 = state_104790__$1;
(statearr_104831_107315[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104791 === (25))){
var inst_104780 = (state_104790[(2)]);
var state_104790__$1 = state_104790;
var statearr_104833_107316 = state_104790__$1;
(statearr_104833_107316[(2)] = inst_104780);

(statearr_104833_107316[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104791 === (17))){
var inst_104743 = (state_104790[(10)]);
var inst_104754 = cljs.core.first(inst_104743);
var inst_104755 = cljs.core.async.muxch_STAR_(inst_104754);
var inst_104756 = cljs.core.async.close_BANG_(inst_104755);
var inst_104757 = cljs.core.next(inst_104743);
var inst_104729 = inst_104757;
var inst_104730 = null;
var inst_104731 = (0);
var inst_104732 = (0);
var state_104790__$1 = (function (){var statearr_104836 = state_104790;
(statearr_104836[(12)] = inst_104730);

(statearr_104836[(13)] = inst_104731);

(statearr_104836[(14)] = inst_104729);

(statearr_104836[(15)] = inst_104732);

(statearr_104836[(16)] = inst_104756);

return statearr_104836;
})();
var statearr_104839_107317 = state_104790__$1;
(statearr_104839_107317[(2)] = null);

(statearr_104839_107317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104791 === (3))){
var inst_104788 = (state_104790[(2)]);
var state_104790__$1 = state_104790;
return cljs.core.async.impl.ioc_helpers.return_chan(state_104790__$1,inst_104788);
} else {
if((state_val_104791 === (12))){
var inst_104765 = (state_104790[(2)]);
var state_104790__$1 = state_104790;
var statearr_104842_107318 = state_104790__$1;
(statearr_104842_107318[(2)] = inst_104765);

(statearr_104842_107318[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104791 === (2))){
var state_104790__$1 = state_104790;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_104790__$1,(4),ch);
} else {
if((state_val_104791 === (23))){
var state_104790__$1 = state_104790;
var statearr_104849_107319 = state_104790__$1;
(statearr_104849_107319[(2)] = null);

(statearr_104849_107319[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104791 === (19))){
var inst_104711 = (state_104790[(8)]);
var inst_104771 = (state_104790[(11)]);
var inst_104773 = cljs.core.async.muxch_STAR_(inst_104771);
var state_104790__$1 = state_104790;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_104790__$1,(22),inst_104773,inst_104711);
} else {
if((state_val_104791 === (11))){
var inst_104743 = (state_104790[(10)]);
var inst_104729 = (state_104790[(14)]);
var inst_104743__$1 = cljs.core.seq(inst_104729);
var state_104790__$1 = (function (){var statearr_104850 = state_104790;
(statearr_104850[(10)] = inst_104743__$1);

return statearr_104850;
})();
if(inst_104743__$1){
var statearr_104851_107320 = state_104790__$1;
(statearr_104851_107320[(1)] = (13));

} else {
var statearr_104852_107321 = state_104790__$1;
(statearr_104852_107321[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104791 === (9))){
var inst_104767 = (state_104790[(2)]);
var state_104790__$1 = state_104790;
var statearr_104854_107322 = state_104790__$1;
(statearr_104854_107322[(2)] = inst_104767);

(statearr_104854_107322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104791 === (5))){
var inst_104726 = cljs.core.deref(mults);
var inst_104727 = cljs.core.vals(inst_104726);
var inst_104728 = cljs.core.seq(inst_104727);
var inst_104729 = inst_104728;
var inst_104730 = null;
var inst_104731 = (0);
var inst_104732 = (0);
var state_104790__$1 = (function (){var statearr_104855 = state_104790;
(statearr_104855[(12)] = inst_104730);

(statearr_104855[(13)] = inst_104731);

(statearr_104855[(14)] = inst_104729);

(statearr_104855[(15)] = inst_104732);

return statearr_104855;
})();
var statearr_104860_107324 = state_104790__$1;
(statearr_104860_107324[(2)] = null);

(statearr_104860_107324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104791 === (14))){
var state_104790__$1 = state_104790;
var statearr_104864_107325 = state_104790__$1;
(statearr_104864_107325[(2)] = null);

(statearr_104864_107325[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104791 === (16))){
var inst_104743 = (state_104790[(10)]);
var inst_104747 = cljs.core.chunk_first(inst_104743);
var inst_104749 = cljs.core.chunk_rest(inst_104743);
var inst_104751 = cljs.core.count(inst_104747);
var inst_104729 = inst_104749;
var inst_104730 = inst_104747;
var inst_104731 = inst_104751;
var inst_104732 = (0);
var state_104790__$1 = (function (){var statearr_104871 = state_104790;
(statearr_104871[(12)] = inst_104730);

(statearr_104871[(13)] = inst_104731);

(statearr_104871[(14)] = inst_104729);

(statearr_104871[(15)] = inst_104732);

return statearr_104871;
})();
var statearr_104874_107326 = state_104790__$1;
(statearr_104874_107326[(2)] = null);

(statearr_104874_107326[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104791 === (10))){
var inst_104730 = (state_104790[(12)]);
var inst_104731 = (state_104790[(13)]);
var inst_104729 = (state_104790[(14)]);
var inst_104732 = (state_104790[(15)]);
var inst_104737 = cljs.core._nth(inst_104730,inst_104732);
var inst_104738 = cljs.core.async.muxch_STAR_(inst_104737);
var inst_104739 = cljs.core.async.close_BANG_(inst_104738);
var inst_104740 = (inst_104732 + (1));
var tmp104861 = inst_104730;
var tmp104862 = inst_104731;
var tmp104863 = inst_104729;
var inst_104729__$1 = tmp104863;
var inst_104730__$1 = tmp104861;
var inst_104731__$1 = tmp104862;
var inst_104732__$1 = inst_104740;
var state_104790__$1 = (function (){var statearr_104878 = state_104790;
(statearr_104878[(17)] = inst_104739);

(statearr_104878[(12)] = inst_104730__$1);

(statearr_104878[(13)] = inst_104731__$1);

(statearr_104878[(14)] = inst_104729__$1);

(statearr_104878[(15)] = inst_104732__$1);

return statearr_104878;
})();
var statearr_104879_107329 = state_104790__$1;
(statearr_104879_107329[(2)] = null);

(statearr_104879_107329[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104791 === (18))){
var inst_104760 = (state_104790[(2)]);
var state_104790__$1 = state_104790;
var statearr_104880_107330 = state_104790__$1;
(statearr_104880_107330[(2)] = inst_104760);

(statearr_104880_107330[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104791 === (8))){
var inst_104731 = (state_104790[(13)]);
var inst_104732 = (state_104790[(15)]);
var inst_104734 = (inst_104732 < inst_104731);
var inst_104735 = inst_104734;
var state_104790__$1 = state_104790;
if(cljs.core.truth_(inst_104735)){
var statearr_104882_107331 = state_104790__$1;
(statearr_104882_107331[(1)] = (10));

} else {
var statearr_104884_107332 = state_104790__$1;
(statearr_104884_107332[(1)] = (11));

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
var cljs$core$async$state_machine__103041__auto__ = null;
var cljs$core$async$state_machine__103041__auto____0 = (function (){
var statearr_104886 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_104886[(0)] = cljs$core$async$state_machine__103041__auto__);

(statearr_104886[(1)] = (1));

return statearr_104886;
});
var cljs$core$async$state_machine__103041__auto____1 = (function (state_104790){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_104790);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e104888){var ex__103044__auto__ = e104888;
var statearr_104889_107334 = state_104790;
(statearr_104889_107334[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_104790[(4)]))){
var statearr_104891_107335 = state_104790;
(statearr_104891_107335[(1)] = cljs.core.first((state_104790[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107336 = state_104790;
state_104790 = G__107336;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
cljs$core$async$state_machine__103041__auto__ = function(state_104790){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__103041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__103041__auto____1.call(this,state_104790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__103041__auto____0;
cljs$core$async$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__103041__auto____1;
return cljs$core$async$state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_104904 = f__103245__auto__();
(statearr_104904[(6)] = c__103244__auto___107298);

return statearr_104904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
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
var G__104914 = arguments.length;
switch (G__104914) {
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
var G__104923 = arguments.length;
switch (G__104923) {
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
var G__104930 = arguments.length;
switch (G__104930) {
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
var c__103244__auto___107342 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_104994){
var state_val_104995 = (state_104994[(1)]);
if((state_val_104995 === (7))){
var state_104994__$1 = state_104994;
var statearr_104997_107343 = state_104994__$1;
(statearr_104997_107343[(2)] = null);

(statearr_104997_107343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104995 === (1))){
var state_104994__$1 = state_104994;
var statearr_104998_107344 = state_104994__$1;
(statearr_104998_107344[(2)] = null);

(statearr_104998_107344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104995 === (4))){
var inst_104947 = (state_104994[(7)]);
var inst_104948 = (state_104994[(8)]);
var inst_104950 = (inst_104948 < inst_104947);
var state_104994__$1 = state_104994;
if(cljs.core.truth_(inst_104950)){
var statearr_105000_107345 = state_104994__$1;
(statearr_105000_107345[(1)] = (6));

} else {
var statearr_105001_107346 = state_104994__$1;
(statearr_105001_107346[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104995 === (15))){
var inst_104977 = (state_104994[(9)]);
var inst_104982 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_104977);
var state_104994__$1 = state_104994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_104994__$1,(17),out,inst_104982);
} else {
if((state_val_104995 === (13))){
var inst_104977 = (state_104994[(9)]);
var inst_104977__$1 = (state_104994[(2)]);
var inst_104978 = cljs.core.some(cljs.core.nil_QMARK_,inst_104977__$1);
var state_104994__$1 = (function (){var statearr_105004 = state_104994;
(statearr_105004[(9)] = inst_104977__$1);

return statearr_105004;
})();
if(cljs.core.truth_(inst_104978)){
var statearr_105005_107348 = state_104994__$1;
(statearr_105005_107348[(1)] = (14));

} else {
var statearr_105007_107349 = state_104994__$1;
(statearr_105007_107349[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104995 === (6))){
var state_104994__$1 = state_104994;
var statearr_105011_107350 = state_104994__$1;
(statearr_105011_107350[(2)] = null);

(statearr_105011_107350[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104995 === (17))){
var inst_104984 = (state_104994[(2)]);
var state_104994__$1 = (function (){var statearr_105016 = state_104994;
(statearr_105016[(10)] = inst_104984);

return statearr_105016;
})();
var statearr_105017_107351 = state_104994__$1;
(statearr_105017_107351[(2)] = null);

(statearr_105017_107351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104995 === (3))){
var inst_104989 = (state_104994[(2)]);
var state_104994__$1 = state_104994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_104994__$1,inst_104989);
} else {
if((state_val_104995 === (12))){
var _ = (function (){var statearr_105019 = state_104994;
(statearr_105019[(4)] = cljs.core.rest((state_104994[(4)])));

return statearr_105019;
})();
var state_104994__$1 = state_104994;
var ex105015 = (state_104994__$1[(2)]);
var statearr_105020_107355 = state_104994__$1;
(statearr_105020_107355[(5)] = ex105015);


if((ex105015 instanceof Object)){
var statearr_105027_107356 = state_104994__$1;
(statearr_105027_107356[(1)] = (11));

(statearr_105027_107356[(5)] = null);

} else {
throw ex105015;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104995 === (2))){
var inst_104946 = cljs.core.reset_BANG_(dctr,cnt);
var inst_104947 = cnt;
var inst_104948 = (0);
var state_104994__$1 = (function (){var statearr_105033 = state_104994;
(statearr_105033[(7)] = inst_104947);

(statearr_105033[(11)] = inst_104946);

(statearr_105033[(8)] = inst_104948);

return statearr_105033;
})();
var statearr_105036_107357 = state_104994__$1;
(statearr_105036_107357[(2)] = null);

(statearr_105036_107357[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104995 === (11))){
var inst_104953 = (state_104994[(2)]);
var inst_104954 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_104994__$1 = (function (){var statearr_105041 = state_104994;
(statearr_105041[(12)] = inst_104953);

return statearr_105041;
})();
var statearr_105043_107362 = state_104994__$1;
(statearr_105043_107362[(2)] = inst_104954);

(statearr_105043_107362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104995 === (9))){
var inst_104948 = (state_104994[(8)]);
var _ = (function (){var statearr_105047 = state_104994;
(statearr_105047[(4)] = cljs.core.cons((12),(state_104994[(4)])));

return statearr_105047;
})();
var inst_104960 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_104948) : chs__$1.call(null,inst_104948));
var inst_104961 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_104948) : done.call(null,inst_104948));
var inst_104962 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_104960,inst_104961);
var ___$1 = (function (){var statearr_105049 = state_104994;
(statearr_105049[(4)] = cljs.core.rest((state_104994[(4)])));

return statearr_105049;
})();
var state_104994__$1 = state_104994;
var statearr_105051_107372 = state_104994__$1;
(statearr_105051_107372[(2)] = inst_104962);

(statearr_105051_107372[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104995 === (5))){
var inst_104973 = (state_104994[(2)]);
var state_104994__$1 = (function (){var statearr_105053 = state_104994;
(statearr_105053[(13)] = inst_104973);

return statearr_105053;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_104994__$1,(13),dchan);
} else {
if((state_val_104995 === (14))){
var inst_104980 = cljs.core.async.close_BANG_(out);
var state_104994__$1 = state_104994;
var statearr_105060_107384 = state_104994__$1;
(statearr_105060_107384[(2)] = inst_104980);

(statearr_105060_107384[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104995 === (16))){
var inst_104987 = (state_104994[(2)]);
var state_104994__$1 = state_104994;
var statearr_105064_107385 = state_104994__$1;
(statearr_105064_107385[(2)] = inst_104987);

(statearr_105064_107385[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104995 === (10))){
var inst_104948 = (state_104994[(8)]);
var inst_104965 = (state_104994[(2)]);
var inst_104967 = (inst_104948 + (1));
var inst_104948__$1 = inst_104967;
var state_104994__$1 = (function (){var statearr_105069 = state_104994;
(statearr_105069[(8)] = inst_104948__$1);

(statearr_105069[(14)] = inst_104965);

return statearr_105069;
})();
var statearr_105070_107387 = state_104994__$1;
(statearr_105070_107387[(2)] = null);

(statearr_105070_107387[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_104995 === (8))){
var inst_104971 = (state_104994[(2)]);
var state_104994__$1 = state_104994;
var statearr_105072_107389 = state_104994__$1;
(statearr_105072_107389[(2)] = inst_104971);

(statearr_105072_107389[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__103041__auto__ = null;
var cljs$core$async$state_machine__103041__auto____0 = (function (){
var statearr_105077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_105077[(0)] = cljs$core$async$state_machine__103041__auto__);

(statearr_105077[(1)] = (1));

return statearr_105077;
});
var cljs$core$async$state_machine__103041__auto____1 = (function (state_104994){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_104994);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e105078){var ex__103044__auto__ = e105078;
var statearr_105079_107391 = state_104994;
(statearr_105079_107391[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_104994[(4)]))){
var statearr_105081_107393 = state_104994;
(statearr_105081_107393[(1)] = cljs.core.first((state_104994[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107395 = state_104994;
state_104994 = G__107395;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
cljs$core$async$state_machine__103041__auto__ = function(state_104994){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__103041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__103041__auto____1.call(this,state_104994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__103041__auto____0;
cljs$core$async$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__103041__auto____1;
return cljs$core$async$state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_105086 = f__103245__auto__();
(statearr_105086[(6)] = c__103244__auto___107342);

return statearr_105086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
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
var G__105090 = arguments.length;
switch (G__105090) {
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
var c__103244__auto___107400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_105136){
var state_val_105137 = (state_105136[(1)]);
if((state_val_105137 === (7))){
var inst_105110 = (state_105136[(7)]);
var inst_105111 = (state_105136[(8)]);
var inst_105110__$1 = (state_105136[(2)]);
var inst_105111__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_105110__$1,(0),null);
var inst_105112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_105110__$1,(1),null);
var inst_105113 = (inst_105111__$1 == null);
var state_105136__$1 = (function (){var statearr_105140 = state_105136;
(statearr_105140[(7)] = inst_105110__$1);

(statearr_105140[(9)] = inst_105112);

(statearr_105140[(8)] = inst_105111__$1);

return statearr_105140;
})();
if(cljs.core.truth_(inst_105113)){
var statearr_105141_107405 = state_105136__$1;
(statearr_105141_107405[(1)] = (8));

} else {
var statearr_105142_107406 = state_105136__$1;
(statearr_105142_107406[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105137 === (1))){
var inst_105099 = cljs.core.vec(chs);
var inst_105100 = inst_105099;
var state_105136__$1 = (function (){var statearr_105144 = state_105136;
(statearr_105144[(10)] = inst_105100);

return statearr_105144;
})();
var statearr_105146_107408 = state_105136__$1;
(statearr_105146_107408[(2)] = null);

(statearr_105146_107408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105137 === (4))){
var inst_105100 = (state_105136[(10)]);
var state_105136__$1 = state_105136;
return cljs.core.async.ioc_alts_BANG_(state_105136__$1,(7),inst_105100);
} else {
if((state_val_105137 === (6))){
var inst_105131 = (state_105136[(2)]);
var state_105136__$1 = state_105136;
var statearr_105152_107410 = state_105136__$1;
(statearr_105152_107410[(2)] = inst_105131);

(statearr_105152_107410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105137 === (3))){
var inst_105134 = (state_105136[(2)]);
var state_105136__$1 = state_105136;
return cljs.core.async.impl.ioc_helpers.return_chan(state_105136__$1,inst_105134);
} else {
if((state_val_105137 === (2))){
var inst_105100 = (state_105136[(10)]);
var inst_105103 = cljs.core.count(inst_105100);
var inst_105104 = (inst_105103 > (0));
var state_105136__$1 = state_105136;
if(cljs.core.truth_(inst_105104)){
var statearr_105161_107412 = state_105136__$1;
(statearr_105161_107412[(1)] = (4));

} else {
var statearr_105164_107413 = state_105136__$1;
(statearr_105164_107413[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105137 === (11))){
var inst_105100 = (state_105136[(10)]);
var inst_105124 = (state_105136[(2)]);
var tmp105154 = inst_105100;
var inst_105100__$1 = tmp105154;
var state_105136__$1 = (function (){var statearr_105166 = state_105136;
(statearr_105166[(10)] = inst_105100__$1);

(statearr_105166[(11)] = inst_105124);

return statearr_105166;
})();
var statearr_105167_107419 = state_105136__$1;
(statearr_105167_107419[(2)] = null);

(statearr_105167_107419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105137 === (9))){
var inst_105111 = (state_105136[(8)]);
var state_105136__$1 = state_105136;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_105136__$1,(11),out,inst_105111);
} else {
if((state_val_105137 === (5))){
var inst_105129 = cljs.core.async.close_BANG_(out);
var state_105136__$1 = state_105136;
var statearr_105169_107421 = state_105136__$1;
(statearr_105169_107421[(2)] = inst_105129);

(statearr_105169_107421[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105137 === (10))){
var inst_105127 = (state_105136[(2)]);
var state_105136__$1 = state_105136;
var statearr_105172_107426 = state_105136__$1;
(statearr_105172_107426[(2)] = inst_105127);

(statearr_105172_107426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105137 === (8))){
var inst_105110 = (state_105136[(7)]);
var inst_105100 = (state_105136[(10)]);
var inst_105112 = (state_105136[(9)]);
var inst_105111 = (state_105136[(8)]);
var inst_105119 = (function (){var cs = inst_105100;
var vec__105106 = inst_105110;
var v = inst_105111;
var c = inst_105112;
return (function (p1__105087_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__105087_SHARP_);
});
})();
var inst_105120 = cljs.core.filterv(inst_105119,inst_105100);
var inst_105100__$1 = inst_105120;
var state_105136__$1 = (function (){var statearr_105184 = state_105136;
(statearr_105184[(10)] = inst_105100__$1);

return statearr_105184;
})();
var statearr_105186_107427 = state_105136__$1;
(statearr_105186_107427[(2)] = null);

(statearr_105186_107427[(1)] = (2));


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
var cljs$core$async$state_machine__103041__auto__ = null;
var cljs$core$async$state_machine__103041__auto____0 = (function (){
var statearr_105188 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_105188[(0)] = cljs$core$async$state_machine__103041__auto__);

(statearr_105188[(1)] = (1));

return statearr_105188;
});
var cljs$core$async$state_machine__103041__auto____1 = (function (state_105136){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_105136);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e105191){var ex__103044__auto__ = e105191;
var statearr_105194_107428 = state_105136;
(statearr_105194_107428[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_105136[(4)]))){
var statearr_105196_107429 = state_105136;
(statearr_105196_107429[(1)] = cljs.core.first((state_105136[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107430 = state_105136;
state_105136 = G__107430;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
cljs$core$async$state_machine__103041__auto__ = function(state_105136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__103041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__103041__auto____1.call(this,state_105136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__103041__auto____0;
cljs$core$async$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__103041__auto____1;
return cljs$core$async$state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_105199 = f__103245__auto__();
(statearr_105199[(6)] = c__103244__auto___107400);

return statearr_105199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
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
var G__105213 = arguments.length;
switch (G__105213) {
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
var c__103244__auto___107432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_105253){
var state_val_105254 = (state_105253[(1)]);
if((state_val_105254 === (7))){
var inst_105224 = (state_105253[(7)]);
var inst_105224__$1 = (state_105253[(2)]);
var inst_105231 = (inst_105224__$1 == null);
var inst_105232 = cljs.core.not(inst_105231);
var state_105253__$1 = (function (){var statearr_105260 = state_105253;
(statearr_105260[(7)] = inst_105224__$1);

return statearr_105260;
})();
if(inst_105232){
var statearr_105261_107433 = state_105253__$1;
(statearr_105261_107433[(1)] = (8));

} else {
var statearr_105265_107434 = state_105253__$1;
(statearr_105265_107434[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105254 === (1))){
var inst_105219 = (0);
var state_105253__$1 = (function (){var statearr_105268 = state_105253;
(statearr_105268[(8)] = inst_105219);

return statearr_105268;
})();
var statearr_105271_107435 = state_105253__$1;
(statearr_105271_107435[(2)] = null);

(statearr_105271_107435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105254 === (4))){
var state_105253__$1 = state_105253;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_105253__$1,(7),ch);
} else {
if((state_val_105254 === (6))){
var inst_105243 = (state_105253[(2)]);
var state_105253__$1 = state_105253;
var statearr_105276_107436 = state_105253__$1;
(statearr_105276_107436[(2)] = inst_105243);

(statearr_105276_107436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105254 === (3))){
var inst_105245 = (state_105253[(2)]);
var inst_105249 = cljs.core.async.close_BANG_(out);
var state_105253__$1 = (function (){var statearr_105281 = state_105253;
(statearr_105281[(9)] = inst_105245);

return statearr_105281;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_105253__$1,inst_105249);
} else {
if((state_val_105254 === (2))){
var inst_105219 = (state_105253[(8)]);
var inst_105221 = (inst_105219 < n);
var state_105253__$1 = state_105253;
if(cljs.core.truth_(inst_105221)){
var statearr_105282_107437 = state_105253__$1;
(statearr_105282_107437[(1)] = (4));

} else {
var statearr_105283_107438 = state_105253__$1;
(statearr_105283_107438[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105254 === (11))){
var inst_105219 = (state_105253[(8)]);
var inst_105235 = (state_105253[(2)]);
var inst_105236 = (inst_105219 + (1));
var inst_105219__$1 = inst_105236;
var state_105253__$1 = (function (){var statearr_105285 = state_105253;
(statearr_105285[(10)] = inst_105235);

(statearr_105285[(8)] = inst_105219__$1);

return statearr_105285;
})();
var statearr_105286_107439 = state_105253__$1;
(statearr_105286_107439[(2)] = null);

(statearr_105286_107439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105254 === (9))){
var state_105253__$1 = state_105253;
var statearr_105287_107440 = state_105253__$1;
(statearr_105287_107440[(2)] = null);

(statearr_105287_107440[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105254 === (5))){
var state_105253__$1 = state_105253;
var statearr_105288_107441 = state_105253__$1;
(statearr_105288_107441[(2)] = null);

(statearr_105288_107441[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105254 === (10))){
var inst_105240 = (state_105253[(2)]);
var state_105253__$1 = state_105253;
var statearr_105289_107442 = state_105253__$1;
(statearr_105289_107442[(2)] = inst_105240);

(statearr_105289_107442[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105254 === (8))){
var inst_105224 = (state_105253[(7)]);
var state_105253__$1 = state_105253;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_105253__$1,(11),out,inst_105224);
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
var cljs$core$async$state_machine__103041__auto__ = null;
var cljs$core$async$state_machine__103041__auto____0 = (function (){
var statearr_105292 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_105292[(0)] = cljs$core$async$state_machine__103041__auto__);

(statearr_105292[(1)] = (1));

return statearr_105292;
});
var cljs$core$async$state_machine__103041__auto____1 = (function (state_105253){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_105253);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e105295){var ex__103044__auto__ = e105295;
var statearr_105296_107444 = state_105253;
(statearr_105296_107444[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_105253[(4)]))){
var statearr_105298_107445 = state_105253;
(statearr_105298_107445[(1)] = cljs.core.first((state_105253[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107446 = state_105253;
state_105253 = G__107446;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
cljs$core$async$state_machine__103041__auto__ = function(state_105253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__103041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__103041__auto____1.call(this,state_105253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__103041__auto____0;
cljs$core$async$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__103041__auto____1;
return cljs$core$async$state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_105328 = f__103245__auto__();
(statearr_105328[(6)] = c__103244__auto___107432);

return statearr_105328;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async105341 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async105341 = (function (f,ch,meta105342){
this.f = f;
this.ch = ch;
this.meta105342 = meta105342;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async105341.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_105343,meta105342__$1){
var self__ = this;
var _105343__$1 = this;
return (new cljs.core.async.t_cljs$core$async105341(self__.f,self__.ch,meta105342__$1));
}));

(cljs.core.async.t_cljs$core$async105341.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_105343){
var self__ = this;
var _105343__$1 = this;
return self__.meta105342;
}));

(cljs.core.async.t_cljs$core$async105341.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async105341.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async105341.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async105341.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async105341.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async105370 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async105370 = (function (f,ch,meta105342,_,fn1,meta105371){
this.f = f;
this.ch = ch;
this.meta105342 = meta105342;
this._ = _;
this.fn1 = fn1;
this.meta105371 = meta105371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async105370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_105372,meta105371__$1){
var self__ = this;
var _105372__$1 = this;
return (new cljs.core.async.t_cljs$core$async105370(self__.f,self__.ch,self__.meta105342,self__._,self__.fn1,meta105371__$1));
}));

(cljs.core.async.t_cljs$core$async105370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_105372){
var self__ = this;
var _105372__$1 = this;
return self__.meta105371;
}));

(cljs.core.async.t_cljs$core$async105370.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async105370.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async105370.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async105370.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__105333_SHARP_){
var G__105384 = (((p1__105333_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__105333_SHARP_) : self__.f.call(null,p1__105333_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__105384) : f1.call(null,G__105384));
});
}));

(cljs.core.async.t_cljs$core$async105370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta105342","meta105342",1882710682,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async105341","cljs.core.async/t_cljs$core$async105341",-1838551829,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta105371","meta105371",387595218,null)], null);
}));

(cljs.core.async.t_cljs$core$async105370.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async105370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async105370");

(cljs.core.async.t_cljs$core$async105370.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async105370");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async105370.
 */
cljs.core.async.__GT_t_cljs$core$async105370 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async105370(f__$1,ch__$1,meta105342__$1,___$2,fn1__$1,meta105371){
return (new cljs.core.async.t_cljs$core$async105370(f__$1,ch__$1,meta105342__$1,___$2,fn1__$1,meta105371));
});

}

return (new cljs.core.async.t_cljs$core$async105370(self__.f,self__.ch,self__.meta105342,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__105391 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__105391) : self__.f.call(null,G__105391));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async105341.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async105341.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async105341.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta105342","meta105342",1882710682,null)], null);
}));

(cljs.core.async.t_cljs$core$async105341.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async105341.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async105341");

(cljs.core.async.t_cljs$core$async105341.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async105341");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async105341.
 */
cljs.core.async.__GT_t_cljs$core$async105341 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async105341(f__$1,ch__$1,meta105342){
return (new cljs.core.async.t_cljs$core$async105341(f__$1,ch__$1,meta105342));
});

}

return (new cljs.core.async.t_cljs$core$async105341(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async105405 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async105405 = (function (f,ch,meta105406){
this.f = f;
this.ch = ch;
this.meta105406 = meta105406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async105405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_105407,meta105406__$1){
var self__ = this;
var _105407__$1 = this;
return (new cljs.core.async.t_cljs$core$async105405(self__.f,self__.ch,meta105406__$1));
}));

(cljs.core.async.t_cljs$core$async105405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_105407){
var self__ = this;
var _105407__$1 = this;
return self__.meta105406;
}));

(cljs.core.async.t_cljs$core$async105405.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async105405.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async105405.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async105405.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async105405.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async105405.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async105405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta105406","meta105406",1387624210,null)], null);
}));

(cljs.core.async.t_cljs$core$async105405.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async105405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async105405");

(cljs.core.async.t_cljs$core$async105405.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async105405");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async105405.
 */
cljs.core.async.__GT_t_cljs$core$async105405 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async105405(f__$1,ch__$1,meta105406){
return (new cljs.core.async.t_cljs$core$async105405(f__$1,ch__$1,meta105406));
});

}

return (new cljs.core.async.t_cljs$core$async105405(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async105450 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async105450 = (function (p,ch,meta105451){
this.p = p;
this.ch = ch;
this.meta105451 = meta105451;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async105450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_105452,meta105451__$1){
var self__ = this;
var _105452__$1 = this;
return (new cljs.core.async.t_cljs$core$async105450(self__.p,self__.ch,meta105451__$1));
}));

(cljs.core.async.t_cljs$core$async105450.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_105452){
var self__ = this;
var _105452__$1 = this;
return self__.meta105451;
}));

(cljs.core.async.t_cljs$core$async105450.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async105450.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async105450.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async105450.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async105450.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async105450.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async105450.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async105450.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta105451","meta105451",786733983,null)], null);
}));

(cljs.core.async.t_cljs$core$async105450.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async105450.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async105450");

(cljs.core.async.t_cljs$core$async105450.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async105450");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async105450.
 */
cljs.core.async.__GT_t_cljs$core$async105450 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async105450(p__$1,ch__$1,meta105451){
return (new cljs.core.async.t_cljs$core$async105450(p__$1,ch__$1,meta105451));
});

}

return (new cljs.core.async.t_cljs$core$async105450(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__105490 = arguments.length;
switch (G__105490) {
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
var c__103244__auto___107474 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_105523){
var state_val_105524 = (state_105523[(1)]);
if((state_val_105524 === (7))){
var inst_105519 = (state_105523[(2)]);
var state_105523__$1 = state_105523;
var statearr_105525_107475 = state_105523__$1;
(statearr_105525_107475[(2)] = inst_105519);

(statearr_105525_107475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105524 === (1))){
var state_105523__$1 = state_105523;
var statearr_105526_107476 = state_105523__$1;
(statearr_105526_107476[(2)] = null);

(statearr_105526_107476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105524 === (4))){
var inst_105501 = (state_105523[(7)]);
var inst_105501__$1 = (state_105523[(2)]);
var inst_105502 = (inst_105501__$1 == null);
var state_105523__$1 = (function (){var statearr_105527 = state_105523;
(statearr_105527[(7)] = inst_105501__$1);

return statearr_105527;
})();
if(cljs.core.truth_(inst_105502)){
var statearr_105528_107481 = state_105523__$1;
(statearr_105528_107481[(1)] = (5));

} else {
var statearr_105529_107482 = state_105523__$1;
(statearr_105529_107482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105524 === (6))){
var inst_105501 = (state_105523[(7)]);
var inst_105507 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_105501) : p.call(null,inst_105501));
var state_105523__$1 = state_105523;
if(cljs.core.truth_(inst_105507)){
var statearr_105530_107483 = state_105523__$1;
(statearr_105530_107483[(1)] = (8));

} else {
var statearr_105531_107484 = state_105523__$1;
(statearr_105531_107484[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105524 === (3))){
var inst_105521 = (state_105523[(2)]);
var state_105523__$1 = state_105523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_105523__$1,inst_105521);
} else {
if((state_val_105524 === (2))){
var state_105523__$1 = state_105523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_105523__$1,(4),ch);
} else {
if((state_val_105524 === (11))){
var inst_105513 = (state_105523[(2)]);
var state_105523__$1 = state_105523;
var statearr_105532_107489 = state_105523__$1;
(statearr_105532_107489[(2)] = inst_105513);

(statearr_105532_107489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105524 === (9))){
var state_105523__$1 = state_105523;
var statearr_105533_107491 = state_105523__$1;
(statearr_105533_107491[(2)] = null);

(statearr_105533_107491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105524 === (5))){
var inst_105504 = cljs.core.async.close_BANG_(out);
var state_105523__$1 = state_105523;
var statearr_105534_107493 = state_105523__$1;
(statearr_105534_107493[(2)] = inst_105504);

(statearr_105534_107493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105524 === (10))){
var inst_105516 = (state_105523[(2)]);
var state_105523__$1 = (function (){var statearr_105535 = state_105523;
(statearr_105535[(8)] = inst_105516);

return statearr_105535;
})();
var statearr_105538_107494 = state_105523__$1;
(statearr_105538_107494[(2)] = null);

(statearr_105538_107494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105524 === (8))){
var inst_105501 = (state_105523[(7)]);
var state_105523__$1 = state_105523;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_105523__$1,(11),out,inst_105501);
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
var cljs$core$async$state_machine__103041__auto__ = null;
var cljs$core$async$state_machine__103041__auto____0 = (function (){
var statearr_105539 = [null,null,null,null,null,null,null,null,null];
(statearr_105539[(0)] = cljs$core$async$state_machine__103041__auto__);

(statearr_105539[(1)] = (1));

return statearr_105539;
});
var cljs$core$async$state_machine__103041__auto____1 = (function (state_105523){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_105523);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e105542){var ex__103044__auto__ = e105542;
var statearr_105543_107497 = state_105523;
(statearr_105543_107497[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_105523[(4)]))){
var statearr_105544_107503 = state_105523;
(statearr_105544_107503[(1)] = cljs.core.first((state_105523[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107504 = state_105523;
state_105523 = G__107504;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
cljs$core$async$state_machine__103041__auto__ = function(state_105523){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__103041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__103041__auto____1.call(this,state_105523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__103041__auto____0;
cljs$core$async$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__103041__auto____1;
return cljs$core$async$state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_105545 = f__103245__auto__();
(statearr_105545[(6)] = c__103244__auto___107474);

return statearr_105545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__105557 = arguments.length;
switch (G__105557) {
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
var c__103244__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_105638){
var state_val_105639 = (state_105638[(1)]);
if((state_val_105639 === (7))){
var inst_105634 = (state_105638[(2)]);
var state_105638__$1 = state_105638;
var statearr_105649_107506 = state_105638__$1;
(statearr_105649_107506[(2)] = inst_105634);

(statearr_105649_107506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105639 === (20))){
var inst_105599 = (state_105638[(7)]);
var inst_105611 = (state_105638[(2)]);
var inst_105615 = cljs.core.next(inst_105599);
var inst_105581 = inst_105615;
var inst_105582 = null;
var inst_105583 = (0);
var inst_105584 = (0);
var state_105638__$1 = (function (){var statearr_105650 = state_105638;
(statearr_105650[(8)] = inst_105583);

(statearr_105650[(9)] = inst_105584);

(statearr_105650[(10)] = inst_105611);

(statearr_105650[(11)] = inst_105581);

(statearr_105650[(12)] = inst_105582);

return statearr_105650;
})();
var statearr_105653_107511 = state_105638__$1;
(statearr_105653_107511[(2)] = null);

(statearr_105653_107511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105639 === (1))){
var state_105638__$1 = state_105638;
var statearr_105656_107512 = state_105638__$1;
(statearr_105656_107512[(2)] = null);

(statearr_105656_107512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105639 === (4))){
var inst_105569 = (state_105638[(13)]);
var inst_105569__$1 = (state_105638[(2)]);
var inst_105570 = (inst_105569__$1 == null);
var state_105638__$1 = (function (){var statearr_105657 = state_105638;
(statearr_105657[(13)] = inst_105569__$1);

return statearr_105657;
})();
if(cljs.core.truth_(inst_105570)){
var statearr_105658_107514 = state_105638__$1;
(statearr_105658_107514[(1)] = (5));

} else {
var statearr_105659_107515 = state_105638__$1;
(statearr_105659_107515[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105639 === (15))){
var state_105638__$1 = state_105638;
var statearr_105665_107516 = state_105638__$1;
(statearr_105665_107516[(2)] = null);

(statearr_105665_107516[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105639 === (21))){
var state_105638__$1 = state_105638;
var statearr_105666_107517 = state_105638__$1;
(statearr_105666_107517[(2)] = null);

(statearr_105666_107517[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105639 === (13))){
var inst_105583 = (state_105638[(8)]);
var inst_105584 = (state_105638[(9)]);
var inst_105581 = (state_105638[(11)]);
var inst_105582 = (state_105638[(12)]);
var inst_105595 = (state_105638[(2)]);
var inst_105596 = (inst_105584 + (1));
var tmp105660 = inst_105583;
var tmp105661 = inst_105581;
var tmp105662 = inst_105582;
var inst_105581__$1 = tmp105661;
var inst_105582__$1 = tmp105662;
var inst_105583__$1 = tmp105660;
var inst_105584__$1 = inst_105596;
var state_105638__$1 = (function (){var statearr_105681 = state_105638;
(statearr_105681[(8)] = inst_105583__$1);

(statearr_105681[(14)] = inst_105595);

(statearr_105681[(9)] = inst_105584__$1);

(statearr_105681[(11)] = inst_105581__$1);

(statearr_105681[(12)] = inst_105582__$1);

return statearr_105681;
})();
var statearr_105682_107518 = state_105638__$1;
(statearr_105682_107518[(2)] = null);

(statearr_105682_107518[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105639 === (22))){
var state_105638__$1 = state_105638;
var statearr_105683_107519 = state_105638__$1;
(statearr_105683_107519[(2)] = null);

(statearr_105683_107519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105639 === (6))){
var inst_105569 = (state_105638[(13)]);
var inst_105579 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_105569) : f.call(null,inst_105569));
var inst_105580 = cljs.core.seq(inst_105579);
var inst_105581 = inst_105580;
var inst_105582 = null;
var inst_105583 = (0);
var inst_105584 = (0);
var state_105638__$1 = (function (){var statearr_105686 = state_105638;
(statearr_105686[(8)] = inst_105583);

(statearr_105686[(9)] = inst_105584);

(statearr_105686[(11)] = inst_105581);

(statearr_105686[(12)] = inst_105582);

return statearr_105686;
})();
var statearr_105688_107522 = state_105638__$1;
(statearr_105688_107522[(2)] = null);

(statearr_105688_107522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105639 === (17))){
var inst_105599 = (state_105638[(7)]);
var inst_105603 = cljs.core.chunk_first(inst_105599);
var inst_105604 = cljs.core.chunk_rest(inst_105599);
var inst_105605 = cljs.core.count(inst_105603);
var inst_105581 = inst_105604;
var inst_105582 = inst_105603;
var inst_105583 = inst_105605;
var inst_105584 = (0);
var state_105638__$1 = (function (){var statearr_105691 = state_105638;
(statearr_105691[(8)] = inst_105583);

(statearr_105691[(9)] = inst_105584);

(statearr_105691[(11)] = inst_105581);

(statearr_105691[(12)] = inst_105582);

return statearr_105691;
})();
var statearr_105694_107526 = state_105638__$1;
(statearr_105694_107526[(2)] = null);

(statearr_105694_107526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105639 === (3))){
var inst_105636 = (state_105638[(2)]);
var state_105638__$1 = state_105638;
return cljs.core.async.impl.ioc_helpers.return_chan(state_105638__$1,inst_105636);
} else {
if((state_val_105639 === (12))){
var inst_105623 = (state_105638[(2)]);
var state_105638__$1 = state_105638;
var statearr_105698_107527 = state_105638__$1;
(statearr_105698_107527[(2)] = inst_105623);

(statearr_105698_107527[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105639 === (2))){
var state_105638__$1 = state_105638;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_105638__$1,(4),in$);
} else {
if((state_val_105639 === (23))){
var inst_105632 = (state_105638[(2)]);
var state_105638__$1 = state_105638;
var statearr_105700_107528 = state_105638__$1;
(statearr_105700_107528[(2)] = inst_105632);

(statearr_105700_107528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105639 === (19))){
var inst_105618 = (state_105638[(2)]);
var state_105638__$1 = state_105638;
var statearr_105703_107529 = state_105638__$1;
(statearr_105703_107529[(2)] = inst_105618);

(statearr_105703_107529[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105639 === (11))){
var inst_105581 = (state_105638[(11)]);
var inst_105599 = (state_105638[(7)]);
var inst_105599__$1 = cljs.core.seq(inst_105581);
var state_105638__$1 = (function (){var statearr_105707 = state_105638;
(statearr_105707[(7)] = inst_105599__$1);

return statearr_105707;
})();
if(inst_105599__$1){
var statearr_105708_107530 = state_105638__$1;
(statearr_105708_107530[(1)] = (14));

} else {
var statearr_105709_107531 = state_105638__$1;
(statearr_105709_107531[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105639 === (9))){
var inst_105625 = (state_105638[(2)]);
var inst_105627 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_105638__$1 = (function (){var statearr_105710 = state_105638;
(statearr_105710[(15)] = inst_105625);

return statearr_105710;
})();
if(cljs.core.truth_(inst_105627)){
var statearr_105713_107536 = state_105638__$1;
(statearr_105713_107536[(1)] = (21));

} else {
var statearr_105714_107537 = state_105638__$1;
(statearr_105714_107537[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105639 === (5))){
var inst_105572 = cljs.core.async.close_BANG_(out);
var state_105638__$1 = state_105638;
var statearr_105716_107538 = state_105638__$1;
(statearr_105716_107538[(2)] = inst_105572);

(statearr_105716_107538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105639 === (14))){
var inst_105599 = (state_105638[(7)]);
var inst_105601 = cljs.core.chunked_seq_QMARK_(inst_105599);
var state_105638__$1 = state_105638;
if(inst_105601){
var statearr_105719_107539 = state_105638__$1;
(statearr_105719_107539[(1)] = (17));

} else {
var statearr_105720_107540 = state_105638__$1;
(statearr_105720_107540[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105639 === (16))){
var inst_105621 = (state_105638[(2)]);
var state_105638__$1 = state_105638;
var statearr_105728_107541 = state_105638__$1;
(statearr_105728_107541[(2)] = inst_105621);

(statearr_105728_107541[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105639 === (10))){
var inst_105584 = (state_105638[(9)]);
var inst_105582 = (state_105638[(12)]);
var inst_105593 = cljs.core._nth(inst_105582,inst_105584);
var state_105638__$1 = state_105638;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_105638__$1,(13),out,inst_105593);
} else {
if((state_val_105639 === (18))){
var inst_105599 = (state_105638[(7)]);
var inst_105609 = cljs.core.first(inst_105599);
var state_105638__$1 = state_105638;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_105638__$1,(20),out,inst_105609);
} else {
if((state_val_105639 === (8))){
var inst_105583 = (state_105638[(8)]);
var inst_105584 = (state_105638[(9)]);
var inst_105589 = (inst_105584 < inst_105583);
var inst_105591 = inst_105589;
var state_105638__$1 = state_105638;
if(cljs.core.truth_(inst_105591)){
var statearr_105731_107546 = state_105638__$1;
(statearr_105731_107546[(1)] = (10));

} else {
var statearr_105732_107547 = state_105638__$1;
(statearr_105732_107547[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__103041__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__103041__auto____0 = (function (){
var statearr_105733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_105733[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__103041__auto__);

(statearr_105733[(1)] = (1));

return statearr_105733;
});
var cljs$core$async$mapcat_STAR__$_state_machine__103041__auto____1 = (function (state_105638){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_105638);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e105738){var ex__103044__auto__ = e105738;
var statearr_105740_107548 = state_105638;
(statearr_105740_107548[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_105638[(4)]))){
var statearr_105741_107549 = state_105638;
(statearr_105741_107549[(1)] = cljs.core.first((state_105638[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107551 = state_105638;
state_105638 = G__107551;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__103041__auto__ = function(state_105638){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__103041__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__103041__auto____1.call(this,state_105638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__103041__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__103041__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_105743 = f__103245__auto__();
(statearr_105743[(6)] = c__103244__auto__);

return statearr_105743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
}));

return c__103244__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__105749 = arguments.length;
switch (G__105749) {
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
var G__105758 = arguments.length;
switch (G__105758) {
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
var G__105765 = arguments.length;
switch (G__105765) {
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
var c__103244__auto___107559 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_105799){
var state_val_105800 = (state_105799[(1)]);
if((state_val_105800 === (7))){
var inst_105789 = (state_105799[(2)]);
var state_105799__$1 = state_105799;
var statearr_105805_107561 = state_105799__$1;
(statearr_105805_107561[(2)] = inst_105789);

(statearr_105805_107561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105800 === (1))){
var inst_105771 = null;
var state_105799__$1 = (function (){var statearr_105807 = state_105799;
(statearr_105807[(7)] = inst_105771);

return statearr_105807;
})();
var statearr_105808_107565 = state_105799__$1;
(statearr_105808_107565[(2)] = null);

(statearr_105808_107565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105800 === (4))){
var inst_105774 = (state_105799[(8)]);
var inst_105774__$1 = (state_105799[(2)]);
var inst_105775 = (inst_105774__$1 == null);
var inst_105776 = cljs.core.not(inst_105775);
var state_105799__$1 = (function (){var statearr_105811 = state_105799;
(statearr_105811[(8)] = inst_105774__$1);

return statearr_105811;
})();
if(inst_105776){
var statearr_105812_107568 = state_105799__$1;
(statearr_105812_107568[(1)] = (5));

} else {
var statearr_105813_107569 = state_105799__$1;
(statearr_105813_107569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105800 === (6))){
var state_105799__$1 = state_105799;
var statearr_105818_107570 = state_105799__$1;
(statearr_105818_107570[(2)] = null);

(statearr_105818_107570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105800 === (3))){
var inst_105792 = (state_105799[(2)]);
var inst_105793 = cljs.core.async.close_BANG_(out);
var state_105799__$1 = (function (){var statearr_105819 = state_105799;
(statearr_105819[(9)] = inst_105792);

return statearr_105819;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_105799__$1,inst_105793);
} else {
if((state_val_105800 === (2))){
var state_105799__$1 = state_105799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_105799__$1,(4),ch);
} else {
if((state_val_105800 === (11))){
var inst_105774 = (state_105799[(8)]);
var inst_105783 = (state_105799[(2)]);
var inst_105771 = inst_105774;
var state_105799__$1 = (function (){var statearr_105820 = state_105799;
(statearr_105820[(10)] = inst_105783);

(statearr_105820[(7)] = inst_105771);

return statearr_105820;
})();
var statearr_105821_107571 = state_105799__$1;
(statearr_105821_107571[(2)] = null);

(statearr_105821_107571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105800 === (9))){
var inst_105774 = (state_105799[(8)]);
var state_105799__$1 = state_105799;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_105799__$1,(11),out,inst_105774);
} else {
if((state_val_105800 === (5))){
var inst_105774 = (state_105799[(8)]);
var inst_105771 = (state_105799[(7)]);
var inst_105778 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_105774,inst_105771);
var state_105799__$1 = state_105799;
if(inst_105778){
var statearr_105824_107573 = state_105799__$1;
(statearr_105824_107573[(1)] = (8));

} else {
var statearr_105825_107574 = state_105799__$1;
(statearr_105825_107574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105800 === (10))){
var inst_105786 = (state_105799[(2)]);
var state_105799__$1 = state_105799;
var statearr_105826_107582 = state_105799__$1;
(statearr_105826_107582[(2)] = inst_105786);

(statearr_105826_107582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105800 === (8))){
var inst_105771 = (state_105799[(7)]);
var tmp105822 = inst_105771;
var inst_105771__$1 = tmp105822;
var state_105799__$1 = (function (){var statearr_105830 = state_105799;
(statearr_105830[(7)] = inst_105771__$1);

return statearr_105830;
})();
var statearr_105831_107585 = state_105799__$1;
(statearr_105831_107585[(2)] = null);

(statearr_105831_107585[(1)] = (2));


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
var cljs$core$async$state_machine__103041__auto__ = null;
var cljs$core$async$state_machine__103041__auto____0 = (function (){
var statearr_105834 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_105834[(0)] = cljs$core$async$state_machine__103041__auto__);

(statearr_105834[(1)] = (1));

return statearr_105834;
});
var cljs$core$async$state_machine__103041__auto____1 = (function (state_105799){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_105799);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e105835){var ex__103044__auto__ = e105835;
var statearr_105836_107586 = state_105799;
(statearr_105836_107586[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_105799[(4)]))){
var statearr_105837_107587 = state_105799;
(statearr_105837_107587[(1)] = cljs.core.first((state_105799[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107588 = state_105799;
state_105799 = G__107588;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
cljs$core$async$state_machine__103041__auto__ = function(state_105799){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__103041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__103041__auto____1.call(this,state_105799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__103041__auto____0;
cljs$core$async$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__103041__auto____1;
return cljs$core$async$state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_105838 = f__103245__auto__();
(statearr_105838[(6)] = c__103244__auto___107559);

return statearr_105838;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__105849 = arguments.length;
switch (G__105849) {
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
var c__103244__auto___107591 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_105888){
var state_val_105889 = (state_105888[(1)]);
if((state_val_105889 === (7))){
var inst_105884 = (state_105888[(2)]);
var state_105888__$1 = state_105888;
var statearr_105910_107592 = state_105888__$1;
(statearr_105910_107592[(2)] = inst_105884);

(statearr_105910_107592[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105889 === (1))){
var inst_105851 = (new Array(n));
var inst_105852 = inst_105851;
var inst_105853 = (0);
var state_105888__$1 = (function (){var statearr_105911 = state_105888;
(statearr_105911[(7)] = inst_105852);

(statearr_105911[(8)] = inst_105853);

return statearr_105911;
})();
var statearr_105915_107594 = state_105888__$1;
(statearr_105915_107594[(2)] = null);

(statearr_105915_107594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105889 === (4))){
var inst_105856 = (state_105888[(9)]);
var inst_105856__$1 = (state_105888[(2)]);
var inst_105857 = (inst_105856__$1 == null);
var inst_105858 = cljs.core.not(inst_105857);
var state_105888__$1 = (function (){var statearr_105917 = state_105888;
(statearr_105917[(9)] = inst_105856__$1);

return statearr_105917;
})();
if(inst_105858){
var statearr_105919_107602 = state_105888__$1;
(statearr_105919_107602[(1)] = (5));

} else {
var statearr_105921_107603 = state_105888__$1;
(statearr_105921_107603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105889 === (15))){
var inst_105878 = (state_105888[(2)]);
var state_105888__$1 = state_105888;
var statearr_105924_107605 = state_105888__$1;
(statearr_105924_107605[(2)] = inst_105878);

(statearr_105924_107605[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105889 === (13))){
var state_105888__$1 = state_105888;
var statearr_105925_107606 = state_105888__$1;
(statearr_105925_107606[(2)] = null);

(statearr_105925_107606[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105889 === (6))){
var inst_105853 = (state_105888[(8)]);
var inst_105874 = (inst_105853 > (0));
var state_105888__$1 = state_105888;
if(cljs.core.truth_(inst_105874)){
var statearr_105926_107607 = state_105888__$1;
(statearr_105926_107607[(1)] = (12));

} else {
var statearr_105929_107608 = state_105888__$1;
(statearr_105929_107608[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105889 === (3))){
var inst_105886 = (state_105888[(2)]);
var state_105888__$1 = state_105888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_105888__$1,inst_105886);
} else {
if((state_val_105889 === (12))){
var inst_105852 = (state_105888[(7)]);
var inst_105876 = cljs.core.vec(inst_105852);
var state_105888__$1 = state_105888;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_105888__$1,(15),out,inst_105876);
} else {
if((state_val_105889 === (2))){
var state_105888__$1 = state_105888;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_105888__$1,(4),ch);
} else {
if((state_val_105889 === (11))){
var inst_105868 = (state_105888[(2)]);
var inst_105869 = (new Array(n));
var inst_105852 = inst_105869;
var inst_105853 = (0);
var state_105888__$1 = (function (){var statearr_105936 = state_105888;
(statearr_105936[(10)] = inst_105868);

(statearr_105936[(7)] = inst_105852);

(statearr_105936[(8)] = inst_105853);

return statearr_105936;
})();
var statearr_105937_107611 = state_105888__$1;
(statearr_105937_107611[(2)] = null);

(statearr_105937_107611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105889 === (9))){
var inst_105852 = (state_105888[(7)]);
var inst_105866 = cljs.core.vec(inst_105852);
var state_105888__$1 = state_105888;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_105888__$1,(11),out,inst_105866);
} else {
if((state_val_105889 === (5))){
var inst_105852 = (state_105888[(7)]);
var inst_105856 = (state_105888[(9)]);
var inst_105853 = (state_105888[(8)]);
var inst_105861 = (state_105888[(11)]);
var inst_105860 = (inst_105852[inst_105853] = inst_105856);
var inst_105861__$1 = (inst_105853 + (1));
var inst_105862 = (inst_105861__$1 < n);
var state_105888__$1 = (function (){var statearr_105945 = state_105888;
(statearr_105945[(12)] = inst_105860);

(statearr_105945[(11)] = inst_105861__$1);

return statearr_105945;
})();
if(cljs.core.truth_(inst_105862)){
var statearr_105947_107614 = state_105888__$1;
(statearr_105947_107614[(1)] = (8));

} else {
var statearr_105948_107615 = state_105888__$1;
(statearr_105948_107615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105889 === (14))){
var inst_105881 = (state_105888[(2)]);
var inst_105882 = cljs.core.async.close_BANG_(out);
var state_105888__$1 = (function (){var statearr_105951 = state_105888;
(statearr_105951[(13)] = inst_105881);

return statearr_105951;
})();
var statearr_105952_107616 = state_105888__$1;
(statearr_105952_107616[(2)] = inst_105882);

(statearr_105952_107616[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105889 === (10))){
var inst_105872 = (state_105888[(2)]);
var state_105888__$1 = state_105888;
var statearr_105954_107617 = state_105888__$1;
(statearr_105954_107617[(2)] = inst_105872);

(statearr_105954_107617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_105889 === (8))){
var inst_105852 = (state_105888[(7)]);
var inst_105861 = (state_105888[(11)]);
var tmp105949 = inst_105852;
var inst_105852__$1 = tmp105949;
var inst_105853 = inst_105861;
var state_105888__$1 = (function (){var statearr_105955 = state_105888;
(statearr_105955[(7)] = inst_105852__$1);

(statearr_105955[(8)] = inst_105853);

return statearr_105955;
})();
var statearr_105957_107618 = state_105888__$1;
(statearr_105957_107618[(2)] = null);

(statearr_105957_107618[(1)] = (2));


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
var cljs$core$async$state_machine__103041__auto__ = null;
var cljs$core$async$state_machine__103041__auto____0 = (function (){
var statearr_105971 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_105971[(0)] = cljs$core$async$state_machine__103041__auto__);

(statearr_105971[(1)] = (1));

return statearr_105971;
});
var cljs$core$async$state_machine__103041__auto____1 = (function (state_105888){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_105888);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e105972){var ex__103044__auto__ = e105972;
var statearr_105973_107624 = state_105888;
(statearr_105973_107624[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_105888[(4)]))){
var statearr_105974_107625 = state_105888;
(statearr_105974_107625[(1)] = cljs.core.first((state_105888[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107627 = state_105888;
state_105888 = G__107627;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
cljs$core$async$state_machine__103041__auto__ = function(state_105888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__103041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__103041__auto____1.call(this,state_105888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__103041__auto____0;
cljs$core$async$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__103041__auto____1;
return cljs$core$async$state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_105982 = f__103245__auto__();
(statearr_105982[(6)] = c__103244__auto___107591);

return statearr_105982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__105984 = arguments.length;
switch (G__105984) {
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
var c__103244__auto___107630 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_106028){
var state_val_106029 = (state_106028[(1)]);
if((state_val_106029 === (7))){
var inst_106023 = (state_106028[(2)]);
var state_106028__$1 = state_106028;
var statearr_106034_107631 = state_106028__$1;
(statearr_106034_107631[(2)] = inst_106023);

(statearr_106034_107631[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106029 === (1))){
var inst_105985 = [];
var inst_105986 = inst_105985;
var inst_105987 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_106028__$1 = (function (){var statearr_106035 = state_106028;
(statearr_106035[(7)] = inst_105986);

(statearr_106035[(8)] = inst_105987);

return statearr_106035;
})();
var statearr_106036_107632 = state_106028__$1;
(statearr_106036_107632[(2)] = null);

(statearr_106036_107632[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106029 === (4))){
var inst_105990 = (state_106028[(9)]);
var inst_105990__$1 = (state_106028[(2)]);
var inst_105991 = (inst_105990__$1 == null);
var inst_105992 = cljs.core.not(inst_105991);
var state_106028__$1 = (function (){var statearr_106037 = state_106028;
(statearr_106037[(9)] = inst_105990__$1);

return statearr_106037;
})();
if(inst_105992){
var statearr_106038_107633 = state_106028__$1;
(statearr_106038_107633[(1)] = (5));

} else {
var statearr_106039_107635 = state_106028__$1;
(statearr_106039_107635[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106029 === (15))){
var inst_106017 = (state_106028[(2)]);
var state_106028__$1 = state_106028;
var statearr_106040_107641 = state_106028__$1;
(statearr_106040_107641[(2)] = inst_106017);

(statearr_106040_107641[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106029 === (13))){
var state_106028__$1 = state_106028;
var statearr_106041_107643 = state_106028__$1;
(statearr_106041_107643[(2)] = null);

(statearr_106041_107643[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106029 === (6))){
var inst_105986 = (state_106028[(7)]);
var inst_106011 = inst_105986.length;
var inst_106012 = (inst_106011 > (0));
var state_106028__$1 = state_106028;
if(cljs.core.truth_(inst_106012)){
var statearr_106042_107644 = state_106028__$1;
(statearr_106042_107644[(1)] = (12));

} else {
var statearr_106043_107645 = state_106028__$1;
(statearr_106043_107645[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106029 === (3))){
var inst_106025 = (state_106028[(2)]);
var state_106028__$1 = state_106028;
return cljs.core.async.impl.ioc_helpers.return_chan(state_106028__$1,inst_106025);
} else {
if((state_val_106029 === (12))){
var inst_105986 = (state_106028[(7)]);
var inst_106015 = cljs.core.vec(inst_105986);
var state_106028__$1 = state_106028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_106028__$1,(15),out,inst_106015);
} else {
if((state_val_106029 === (2))){
var state_106028__$1 = state_106028;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_106028__$1,(4),ch);
} else {
if((state_val_106029 === (11))){
var inst_105994 = (state_106028[(10)]);
var inst_105990 = (state_106028[(9)]);
var inst_106004 = (state_106028[(2)]);
var inst_106005 = [];
var inst_106006 = inst_106005.push(inst_105990);
var inst_105986 = inst_106005;
var inst_105987 = inst_105994;
var state_106028__$1 = (function (){var statearr_106044 = state_106028;
(statearr_106044[(7)] = inst_105986);

(statearr_106044[(8)] = inst_105987);

(statearr_106044[(11)] = inst_106004);

(statearr_106044[(12)] = inst_106006);

return statearr_106044;
})();
var statearr_106046_107649 = state_106028__$1;
(statearr_106046_107649[(2)] = null);

(statearr_106046_107649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106029 === (9))){
var inst_105986 = (state_106028[(7)]);
var inst_106002 = cljs.core.vec(inst_105986);
var state_106028__$1 = state_106028;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_106028__$1,(11),out,inst_106002);
} else {
if((state_val_106029 === (5))){
var inst_105994 = (state_106028[(10)]);
var inst_105990 = (state_106028[(9)]);
var inst_105987 = (state_106028[(8)]);
var inst_105994__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_105990) : f.call(null,inst_105990));
var inst_105995 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_105994__$1,inst_105987);
var inst_105996 = cljs.core.keyword_identical_QMARK_(inst_105987,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_105997 = ((inst_105995) || (inst_105996));
var state_106028__$1 = (function (){var statearr_106051 = state_106028;
(statearr_106051[(10)] = inst_105994__$1);

return statearr_106051;
})();
if(cljs.core.truth_(inst_105997)){
var statearr_106056_107660 = state_106028__$1;
(statearr_106056_107660[(1)] = (8));

} else {
var statearr_106057_107662 = state_106028__$1;
(statearr_106057_107662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106029 === (14))){
var inst_106020 = (state_106028[(2)]);
var inst_106021 = cljs.core.async.close_BANG_(out);
var state_106028__$1 = (function (){var statearr_106060 = state_106028;
(statearr_106060[(13)] = inst_106020);

return statearr_106060;
})();
var statearr_106062_107665 = state_106028__$1;
(statearr_106062_107665[(2)] = inst_106021);

(statearr_106062_107665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106029 === (10))){
var inst_106009 = (state_106028[(2)]);
var state_106028__$1 = state_106028;
var statearr_106063_107668 = state_106028__$1;
(statearr_106063_107668[(2)] = inst_106009);

(statearr_106063_107668[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_106029 === (8))){
var inst_105994 = (state_106028[(10)]);
var inst_105986 = (state_106028[(7)]);
var inst_105990 = (state_106028[(9)]);
var inst_105999 = inst_105986.push(inst_105990);
var tmp106058 = inst_105986;
var inst_105986__$1 = tmp106058;
var inst_105987 = inst_105994;
var state_106028__$1 = (function (){var statearr_106064 = state_106028;
(statearr_106064[(7)] = inst_105986__$1);

(statearr_106064[(8)] = inst_105987);

(statearr_106064[(14)] = inst_105999);

return statearr_106064;
})();
var statearr_106066_107671 = state_106028__$1;
(statearr_106066_107671[(2)] = null);

(statearr_106066_107671[(1)] = (2));


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
var cljs$core$async$state_machine__103041__auto__ = null;
var cljs$core$async$state_machine__103041__auto____0 = (function (){
var statearr_106074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_106074[(0)] = cljs$core$async$state_machine__103041__auto__);

(statearr_106074[(1)] = (1));

return statearr_106074;
});
var cljs$core$async$state_machine__103041__auto____1 = (function (state_106028){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_106028);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e106077){var ex__103044__auto__ = e106077;
var statearr_106078_107673 = state_106028;
(statearr_106078_107673[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_106028[(4)]))){
var statearr_106079_107674 = state_106028;
(statearr_106079_107674[(1)] = cljs.core.first((state_106028[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__107676 = state_106028;
state_106028 = G__107676;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
cljs$core$async$state_machine__103041__auto__ = function(state_106028){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__103041__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__103041__auto____1.call(this,state_106028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__103041__auto____0;
cljs$core$async$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__103041__auto____1;
return cljs$core$async$state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_106080 = f__103245__auto__();
(statearr_106080[(6)] = c__103244__auto___107630);

return statearr_106080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
