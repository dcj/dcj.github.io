goog.provide('sci.impl.io');
sci.impl.io.in$ = (function (){var _STAR_unrestricted_STAR__orig_val__106178 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__106179 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__106179);

try{var G__106181 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*in*","*in*",1130010229,null));
sci.impl.vars.unbind(G__106181);

return G__106181;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__106178);
}})();
sci.impl.io.out = (function (){var _STAR_unrestricted_STAR__orig_val__106184 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__106185 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__106185);

try{var G__106187 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*out*","*out*",1277591796,null));
sci.impl.vars.unbind(G__106187);

return G__106187;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__106184);
}})();
sci.impl.io.err = (function (){var _STAR_unrestricted_STAR__orig_val__106188 = sci.impl.unrestrict._STAR_unrestricted_STAR_;
var _STAR_unrestricted_STAR__temp_val__106189 = true;
(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__temp_val__106189);

try{var G__106191 = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"*err*","*err*",2070937226,null));
sci.impl.vars.unbind(G__106191);

return G__106191;
}finally {(sci.impl.unrestrict._STAR_unrestricted_STAR_ = _STAR_unrestricted_STAR__orig_val__106188);
}})();
sci.impl.io.print_meta = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-meta*","*print-meta*",-919406644,null),false);
sci.impl.io.print_length = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),null);
sci.impl.io.print_level = sci.impl.vars.dynamic_var.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),null);
sci.impl.io.pr = (function sci$impl$io$pr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___106423 = arguments.length;
var i__4737__auto___106424 = (0);
while(true){
if((i__4737__auto___106424 < len__4736__auto___106423)){
args__4742__auto__.push((arguments[i__4737__auto___106424]));

var G__106426 = (i__4737__auto___106424 + (1));
i__4737__auto___106424 = G__106426;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__106198 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__106199 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__106200 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__106201 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__106202 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__106203 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__106201);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__106202);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__106203);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__106200);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__106199);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__106198);
}}));

(sci.impl.io.pr.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr.cljs$lang$applyTo = (function (seq106194){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq106194));
}));

sci.impl.io.flush = (function sci$impl$io$flush(){
return null;
});
sci.impl.io.newline = (function sci$impl$io$newline(){
return (sci.impl.io.println.cljs$core$IFn$_invoke$arity$0 ? sci.impl.io.println.cljs$core$IFn$_invoke$arity$0() : sci.impl.io.println.call(null));
});
/**
 * pr to a string, returning it
 */
sci.impl.io.pr_str = (function sci$impl$io$pr_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___106455 = arguments.length;
var i__4737__auto___106456 = (0);
while(true){
if((i__4737__auto___106456 < len__4736__auto___106455)){
args__4742__auto__.push((arguments[i__4737__auto___106456]));

var G__106457 = (i__4737__auto___106456 + (1));
i__4737__auto___106456 = G__106457;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.pr_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__106240 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__106241 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__106242 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__106243 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__106244 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__106245 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__106243);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__106244);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__106245);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__106242);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__106241);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__106240);
}}));

(sci.impl.io.pr_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.pr_str.cljs$lang$applyTo = (function (seq106227){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq106227));
}));

sci.impl.io.prn = (function sci$impl$io$prn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___106465 = arguments.length;
var i__4737__auto___106466 = (0);
while(true){
if((i__4737__auto___106466 < len__4736__auto___106465)){
args__4742__auto__.push((arguments[i__4737__auto___106466]));

var G__106468 = (i__4737__auto___106466 + (1));
i__4737__auto___106466 = G__106468;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__106260 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__106261 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__106262 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__106263 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__106264 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__106265 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__106263);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__106264);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__106265);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__106262);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__106261);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__106260);
}}));

(sci.impl.io.prn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn.cljs$lang$applyTo = (function (seq106253){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq106253));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.prn_str = (function sci$impl$io$prn_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___106474 = arguments.length;
var i__4737__auto___106476 = (0);
while(true){
if((i__4737__auto___106476 < len__4736__auto___106474)){
args__4742__auto__.push((arguments[i__4737__auto___106476]));

var G__106479 = (i__4737__auto___106476 + (1));
i__4737__auto___106476 = G__106479;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.prn_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__106278 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__106279 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__106280 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__106281 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__106282 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__106283 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__106281);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__106282);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__106283);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.prn_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__106280);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__106279);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__106278);
}}));

(sci.impl.io.prn_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.prn_str.cljs$lang$applyTo = (function (seq106274){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq106274));
}));

sci.impl.io.print = (function sci$impl$io$print(var_args){
var args__4742__auto__ = [];
var len__4736__auto___106488 = arguments.length;
var i__4737__auto___106491 = (0);
while(true){
if((i__4737__auto___106491 < len__4736__auto___106488)){
args__4742__auto__.push((arguments[i__4737__auto___106491]));

var G__106492 = (i__4737__auto___106491 + (1));
i__4737__auto___106491 = G__106492;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__106296 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__106297 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_length_STAR__temp_val__106298 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__106299 = cljs.core.deref(sci.impl.io.print_level);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__106298);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__106299);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs));
}finally {(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__106297);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__106296);
}}));

(sci.impl.io.print.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print.cljs$lang$applyTo = (function (seq106292){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq106292));
}));

/**
 * pr to a string, returning it
 */
sci.impl.io.print_str = (function sci$impl$io$print_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___106511 = arguments.length;
var i__4737__auto___106512 = (0);
while(true){
if((i__4737__auto___106512 < len__4736__auto___106511)){
args__4742__auto__.push((arguments[i__4737__auto___106512]));

var G__106513 = (i__4737__auto___106512 + (1));
i__4737__auto___106512 = G__106513;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.print_str.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__106321 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__106322 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__106323 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__106324 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__106325 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__106326 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__106324);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__106325);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__106326);

try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.print_str,objs);
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__106323);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__106322);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__106321);
}}));

(sci.impl.io.print_str.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.print_str.cljs$lang$applyTo = (function (seq106316){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq106316));
}));

sci.impl.io.println = (function sci$impl$io$println(var_args){
var args__4742__auto__ = [];
var len__4736__auto___106517 = arguments.length;
var i__4737__auto___106519 = (0);
while(true){
if((i__4737__auto___106519 < len__4736__auto___106517)){
args__4742__auto__.push((arguments[i__4737__auto___106519]));

var G__106521 = (i__4737__auto___106519 + (1));
i__4737__auto___106519 = G__106521;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sci.impl.io.println.cljs$core$IFn$_invoke$arity$variadic = (function (objs){
var _STAR_print_length_STAR__orig_val__106332 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR__orig_val__106333 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_meta_STAR__orig_val__106334 = cljs.core._STAR_print_meta_STAR_;
var _STAR_print_length_STAR__temp_val__106335 = cljs.core.deref(sci.impl.io.print_length);
var _STAR_print_level_STAR__temp_val__106336 = cljs.core.deref(sci.impl.io.print_level);
var _STAR_print_meta_STAR__temp_val__106337 = cljs.core.deref(sci.impl.io.print_meta);
(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__temp_val__106335);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__temp_val__106336);

(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__temp_val__106337);

try{return cljs.core.deref(sci.impl.io.out).append(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.println_str,objs));
}finally {(cljs.core._STAR_print_meta_STAR_ = _STAR_print_meta_STAR__orig_val__106334);

(cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR__orig_val__106333);

(cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR__orig_val__106332);
}}));

(sci.impl.io.println.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sci.impl.io.println.cljs$lang$applyTo = (function (seq106329){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq106329));
}));

sci.impl.io.with_out_str = (function sci$impl$io$with_out_str(var_args){
var args__4742__auto__ = [];
var len__4736__auto___106531 = arguments.length;
var i__4737__auto___106532 = (0);
while(true){
if((i__4737__auto___106532 < len__4736__auto___106531)){
args__4742__auto__.push((arguments[i__4737__auto___106532]));

var G__106533 = (i__4737__auto___106532 + (1));
i__4737__auto___106532 = G__106533;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.io.with_out_str.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,body){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"s__106361__auto__","s__106361__auto__",-1394674478,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"goog.string.StringBuffer","goog.string.StringBuffer",-1220229842,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","binding","cljs.core/binding",2050379843,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*out*","cljs.core/*out*",-1813565621,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__106361__auto__","s__106361__auto__",-1394674478,null),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([body,(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"s__106361__auto__","s__106361__auto__",-1394674478,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))));
}));

(sci.impl.io.with_out_str.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.io.with_out_str.cljs$lang$applyTo = (function (seq106364){
var G__106365 = cljs.core.first(seq106364);
var seq106364__$1 = cljs.core.next(seq106364);
var G__106367 = cljs.core.first(seq106364__$1);
var seq106364__$2 = cljs.core.next(seq106364__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__106365,G__106367,seq106364__$2);
}));


//# sourceMappingURL=sci.impl.io.js.map
