goog.provide('sci.impl.utils');
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.error","realized-beyond-max","sci.error/realized-beyond-max",-1094268187),new cljs.core.Keyword("sci","error","sci/error",-979082803));
sci.impl.utils.constant_QMARK_ = (function sci$impl$utils$constant_QMARK_(x){
return ((typeof x === 'number') || (typeof x === 'string') || ((x instanceof cljs.core.Keyword)));
});
sci.impl.utils.mark_resolve_sym = (function sci$impl$utils$mark_resolve_sym(sym){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(sym,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"resolve-sym","resolve-sym",-1193683260));
}));
});
sci.impl.utils.eval_QMARK_ = (function sci$impl$utils$eval_QMARK_(x){
var G__105668 = x;
var G__105668__$1 = (((G__105668 == null))?null:cljs.core.meta(G__105668));
if((G__105668__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__105668__$1);
}
});
sci.impl.utils.kw_identical_QMARK_ = cljs.core.keyword_identical_QMARK_;
sci.impl.utils.gensym_STAR_ = (function sci$impl$utils$gensym_STAR_(var_args){
var G__105673 = arguments.length;
switch (G__105673) {
case 0:
return sci.impl.utils.gensym_STAR_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return sci.impl.utils.gensym_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.utils.gensym_STAR_.cljs$core$IFn$_invoke$arity$0 = (function (){
return sci.impl.utils.mark_resolve_sym(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0());
}));

(sci.impl.utils.gensym_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (prefix){
return sci.impl.utils.mark_resolve_sym(cljs.core.gensym.cljs$core$IFn$_invoke$arity$1(prefix));
}));

(sci.impl.utils.gensym_STAR_.cljs$lang$maxFixedArity = 1);

sci.impl.utils.mark_eval_call = (function sci$impl$utils$mark_eval_call(expr){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(expr,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"call","call",-519999866));
}));
});
sci.impl.utils.mark_eval = (function sci$impl$utils$mark_eval(expr){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(expr,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978),new cljs.core.Keyword(null,"eval","eval",-1103567905));
}));
});
sci.impl.utils.throw_error_with_location = (function sci$impl$utils$throw_error_with_location(var_args){
var G__105695 = arguments.length;
switch (G__105695) {
case 2:
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2 = (function (msg,iobj){
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3(msg,iobj,cljs.core.PersistentArrayMap.EMPTY);
}));

(sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$3 = (function (msg,iobj,data){
var map__105701 = cljs.core.meta(iobj);
var map__105701__$1 = (((((!((map__105701 == null))))?(((((map__105701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__105701):map__105701);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105701__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__105701__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)," [at ",(function (){var temp__5735__auto__ = cljs.core.deref(sci.impl.vars.current_file);
if(cljs.core.truth_(temp__5735__auto__)){
var v = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),", "].join('');
} else {
return null;
}
})(),"line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column),"]"].join('');
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(msg__$1,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sci","error","sci/error",-979082803),new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),data], 0)));
}));

(sci.impl.utils.throw_error_with_location.cljs$lang$maxFixedArity = 3);

sci.impl.utils._STAR_in_try_STAR_ = false;
sci.impl.utils.rethrow_with_location_of_node = (function sci$impl$utils$rethrow_with_location_of_node(ctx,e,node){
if(cljs.core.not(sci.impl.utils._STAR_in_try_STAR_)){
var ex_msg = e.message;
if(cljs.core.truth_((function (){var and__4115__auto__ = ex_msg;
if(cljs.core.truth_(and__4115__auto__)){
return clojure.string.includes_QMARK_(ex_msg,"[at");
} else {
return and__4115__auto__;
}
})())){
throw e;
} else {
var map__105722_105903 = cljs.core.meta(node);
var map__105722_105904__$1 = (((((!((map__105722_105903 == null))))?(((((map__105722_105903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__105722_105903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__105722_105903):map__105722_105903);
var line_105905 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__105722_105904__$1,new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(ctx));
var column_105906 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__105722_105904__$1,new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(ctx));
if(cljs.core.truth_((function (){var and__4115__auto__ = line_105905;
if(cljs.core.truth_(and__4115__auto__)){
return column_105906;
} else {
return and__4115__auto__;
}
})())){
var m_105913 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ex_msg),(cljs.core.truth_(ex_msg)?" ":null),"[at ",(function (){var temp__5735__auto__ = cljs.core.deref(sci.impl.vars.current_file);
if(cljs.core.truth_(temp__5735__auto__)){
var v = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),", "].join('');
} else {
return null;
}
})(),"line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_105905),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_105906),"]"].join('');
var new_exception_105914 = (function (){var d = cljs.core.ex_data(e);
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(m_105913,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("sci","error","sci/error",-979082803),new cljs.core.Keyword(null,"line","line",212345235),line_105905,new cljs.core.Keyword(null,"column","column",2078222095),column_105906,new cljs.core.Keyword(null,"message","message",-406056002),m_105913], null),d], 0)),e);
})();
throw new_exception_105914;
} else {
throw e;
}
}

throw e;
} else {
throw e;
}
});
/**
 * Only adds metadata to obj if d is not nil and if obj already has meta
 */
sci.impl.utils.vary_meta_STAR_ = (function sci$impl$utils$vary_meta_STAR_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___105916 = arguments.length;
var i__4737__auto___105918 = (0);
while(true){
if((i__4737__auto___105918 < len__4736__auto___105916)){
args__4742__auto__.push((arguments[i__4737__auto___105918]));

var G__105920 = (i__4737__auto___105918 + (1));
i__4737__auto___105918 = G__105920;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.utils.vary_meta_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.utils.vary_meta_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (obj,f,args){
if(cljs.core.truth_((((((!((obj == null))))?(((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.meta(obj):false))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vary_meta,obj,f,args);
} else {
return obj;
}
}));

(sci.impl.utils.vary_meta_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.utils.vary_meta_STAR_.cljs$lang$applyTo = (function (seq105734){
var G__105735 = cljs.core.first(seq105734);
var seq105734__$1 = cljs.core.next(seq105734);
var G__105736 = cljs.core.first(seq105734__$1);
var seq105734__$2 = cljs.core.next(seq105734__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__105735,G__105736,seq105734__$2);
}));

/**
 * Only adds metadata to obj if d is not nil and if meta on obj isn't already nil.
 */
sci.impl.utils.merge_meta = (function sci$impl$utils$merge_meta(obj,d){
if(cljs.core.truth_((function (){var and__4115__auto__ = d;
if(cljs.core.truth_(and__4115__auto__)){
if((!((obj == null)))){
if((((obj.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IWithMeta$)))){
return true;
} else {
return false;
}
} else {
return false;
}
} else {
return and__4115__auto__;
}
})())){
var temp__5733__auto__ = cljs.core.meta(obj);
if(cljs.core.truth_(temp__5733__auto__)){
var m = temp__5733__auto__;
return cljs.core.with_meta(obj,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,d], 0)));
} else {
return obj;
}
} else {
return obj;
}
});
sci.impl.utils.strip_core_ns = (function sci$impl$utils$strip_core_ns(sym){
var G__105763 = cljs.core.namespace(sym);
switch (G__105763) {
case "clojure.core":
case "cljs.core":
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(sym));

break;
default:
return sym;

}
});
sci.impl.utils.allowed_loop = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("loop"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"allow","allow",-1857325745)], null));
sci.impl.utils.allowed_recur = cljs.core.with_meta(cljs.core.symbol.cljs$core$IFn$_invoke$arity$1("recur"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"allow","allow",-1857325745)], null));
sci.impl.utils.walk_STAR_ = (function sci$impl$utils$walk_STAR_(inner,form){
if(cljs.core.truth_(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(form)))){
return form;
} else {
if(cljs.core.list_QMARK_(form)){
return cljs.core.with_meta(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form)),cljs.core.meta(form));
} else {
if(cljs.core.map_entry_QMARK_(form)){
return (new cljs.core.MapEntry((function (){var G__105769 = cljs.core.key(form);
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__105769) : inner.call(null,G__105769));
})(),(function (){var G__105770 = cljs.core.val(form);
return (inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(G__105770) : inner.call(null,G__105770));
})(),null));
} else {
if(cljs.core.seq_QMARK_(form)){
return cljs.core.with_meta(cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form)),cljs.core.meta(form));
} else {
if(cljs.core.record_QMARK_(form)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (r,x){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(r,(inner.cljs$core$IFn$_invoke$arity$1 ? inner.cljs$core$IFn$_invoke$arity$1(x) : inner.call(null,x)));
}),form,form);
} else {
if(cljs.core.coll_QMARK_(form)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(form),cljs.core.map.cljs$core$IFn$_invoke$arity$2(inner,form));
} else {
return form;

}
}
}
}
}
}
});
/**
 * Prewalk with metadata preservation. Does not prewalk :sci.impl/op nodes.
 */
sci.impl.utils.prewalk = (function sci$impl$utils$prewalk(f,form){
return sci.impl.utils.walk_STAR_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(sci.impl.utils.prewalk,f),(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(form) : f.call(null,form)));
});
/**
 * Fetches namespaces from env if it exists. Else, if `create?`,
 *   produces one regardless of the existince of the namespace in env and
 *   adds it to env before returning it.
 */
sci.impl.utils.namespace_object = (function sci$impl$utils$namespace_object(env,ns_sym,create_QMARK_,attr_map){
var env_STAR_ = cljs.core.deref(env);
var ns_map = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym], null));
var or__4126__auto__ = new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(ns_map);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.truth_((function (){var or__4126__auto____$1 = ns_map;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return create_QMARK_;
}
})())){
var ns_obj = sci.impl.vars.__GT_SciNamespace(ns_sym,attr_map);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym,new cljs.core.Keyword(null,"obj","obj",981763962)], null),ns_obj);

return ns_obj;
} else {
return null;
}
}
});
sci.impl.utils.set_namespace_BANG_ = (function sci$impl$utils$set_namespace_BANG_(ctx,ns_sym,attr_map){
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var attr_map__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.meta(ns_sym),attr_map], 0));
var ns_obj = sci.impl.utils.namespace_object(env,ns_sym,true,attr_map__$1);
return sci.impl.types.setVal(sci.impl.vars.current_ns,ns_obj);
});
sci.impl.utils.eval_form_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_require_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_use_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_resolve_state = cljs.core.volatile_BANG_(null);
sci.impl.utils.eval_refer_state = cljs.core.volatile_BANG_(null);
/**
 * Like partition-by but splits collection only when `pred` returns
 *   a truthy value. E.g. `(split-when odd? [1 2 3 4 5]) => ((1 2) (3 4) (5))`
 */
sci.impl.utils.split_when = (function sci$impl$utils$split_when(pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__5735__auto__ = cljs.core.seq(coll);
if(temp__5735__auto__){
var s = temp__5735__auto__;
var fst = cljs.core.first(s);
var f = cljs.core.complement(pred);
var run = cljs.core.cons(fst,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__105823_SHARP_){
return f(p1__105823_SHARP_);
}),cljs.core.next(s)));
return cljs.core.cons(run,(function (){var G__105832 = pred;
var G__105833 = (new cljs.core.LazySeq(null,(function (){
return cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(run),s);
}),null,null));
return (sci.impl.utils.split_when.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.split_when.cljs$core$IFn$_invoke$arity$2(G__105832,G__105833) : sci.impl.utils.split_when.call(null,G__105832,G__105833));
})());
} else {
return null;
}
}),null,null));
});

//# sourceMappingURL=sci.impl.utils.js.map
