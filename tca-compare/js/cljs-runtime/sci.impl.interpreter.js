goog.provide('sci.impl.interpreter');

sci.impl.interpreter.macros = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 19, [new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),"null",new cljs.core.Symbol(null,"try","try",-1273693247,null),"null",new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),"null",new cljs.core.Symbol(null,"let","let",358118826,null),"null",new cljs.core.Symbol(null,"fn","fn",465265323,null),"null",new cljs.core.Symbol(null,"do","do",1686842252,null),"null",new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),"null",new cljs.core.Symbol(null,"defn","defn",-126010802,null),"null",new cljs.core.Symbol(null,"if","if",1181717262,null),"null",new cljs.core.Symbol(null,"or","or",1876275696,null),"null",new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),"null",new cljs.core.Symbol(null,"require","require",1172530194,null),"null",new cljs.core.Symbol(null,"syntax-quote","syntax-quote",407366680,null),"null",new cljs.core.Symbol(null,"set!","set!",250714521,null),"null",new cljs.core.Symbol(null,".",".",1975675962,null),"null",new cljs.core.Symbol(null,"quote","quote",1377916282,null),"null",new cljs.core.Symbol(null,"case","case",-1510733573,null),"null",new cljs.core.Symbol(null,"and","and",668631710,null),"null",new cljs.core.Symbol(null,"def","def",597100991,null),"null"], null), null);
/**
 * The and macro from clojure.core.
 */
sci.impl.interpreter.eval_and = (function sci$impl$interpreter$eval_and(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
if(xs){
var G__110132 = xs;
args__$2 = G__110132;
continue;
} else {
return v;
}
} else {
return v;
}
} else {
return true;
}
break;
}
});
/**
 * The or macro from clojure.core.
 */
sci.impl.interpreter.eval_or = (function sci$impl$interpreter$eval_or(ctx,args){
var args__$1 = cljs.core.seq(args);
var args__$2 = args__$1;
while(true){
if(args__$2){
var x = cljs.core.first(args__$2);
var xs = cljs.core.next(args__$2);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,x) : sci.impl.interpreter.interpret.call(null,ctx,x));
if(cljs.core.truth_(v)){
return v;
} else {
if(xs){
var G__110143 = xs;
args__$2 = G__110143;
continue;
} else {
return v;
}
}
} else {
return null;
}
break;
}
});
/**
 * The let macro from clojure.core
 */
sci.impl.interpreter.eval_let = (function sci$impl$interpreter$eval_let(var_args){
var args__4742__auto__ = [];
var len__4736__auto___110145 = arguments.length;
var i__4737__auto___110147 = (0);
while(true){
if((i__4737__auto___110147 < len__4736__auto___110145)){
args__4742__auto__.push((arguments[i__4737__auto___110147]));

var G__110152 = (i__4737__auto___110147 + (1));
i__4737__auto___110147 = G__110152;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_let.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,let_bindings,exprs){
var ctx__$1 = (function (){var ctx__$1 = ctx;
var let_bindings__$1 = let_bindings;
while(true){
var let_name = cljs.core.first(let_bindings__$1);
var let_bindings__$2 = cljs.core.rest(let_bindings__$1);
var let_val = cljs.core.first(let_bindings__$2);
var rest_let_bindings = cljs.core.next(let_bindings__$2);
var val_tag = (function (){var temp__5735__auto__ = cljs.core.meta(let_val);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(m);
} else {
return null;
}
})();
var let_name__$1 = (cljs.core.truth_(val_tag)?cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(let_name,cljs.core.update,new cljs.core.Keyword(null,"tag","tag",-1290361223),((function (ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag){
return (function (t){
if(cljs.core.truth_(t)){
return t;
} else {
return val_tag;
}
});})(ctx__$1,let_bindings__$1,let_name,let_bindings__$2,let_val,rest_let_bindings,val_tag))
):let_name);
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,let_val) : sci.impl.interpreter.interpret.call(null,ctx__$1,let_val));
var ctx__$2 = cljs.core.assoc_in(ctx__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),let_name__$1], null),v);
if(cljs.core.not(rest_let_bindings)){
return ctx__$2;
} else {
var G__110162 = ctx__$2;
var G__110163 = rest_let_bindings;
ctx__$1 = G__110162;
let_bindings__$1 = G__110163;
continue;
}
break;
}
})();
if(cljs.core.truth_(exprs)){
var exprs__$1 = exprs;
while(true){
var e = cljs.core.first(exprs__$1);
var ret = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx__$1,e) : sci.impl.interpreter.interpret.call(null,ctx__$1,e));
var nexprs = cljs.core.next(exprs__$1);
if(nexprs){
var G__110171 = nexprs;
exprs__$1 = G__110171;
continue;
} else {
return ret;
}
break;
}
} else {
return null;
}
}));

(sci.impl.interpreter.eval_let.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_let.cljs$lang$applyTo = (function (seq109038){
var G__109039 = cljs.core.first(seq109038);
var seq109038__$1 = cljs.core.next(seq109038);
var G__109040 = cljs.core.first(seq109038__$1);
var seq109038__$2 = cljs.core.next(seq109038__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__109039,G__109040,seq109038__$2);
}));

sci.impl.interpreter.eval_if = (function sci$impl$interpreter$eval_if(ctx,expr){
var cond = cljs.core.first(expr);
var expr__$1 = cljs.core.rest(expr);
var then = cljs.core.first(expr__$1);
var expr__$2 = cljs.core.rest(expr__$1);
var else$ = cljs.core.first(expr__$2);
if(cljs.core.truth_((sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,cond) : sci.impl.interpreter.interpret.call(null,ctx,cond)))){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,then) : sci.impl.interpreter.interpret.call(null,ctx,then));
} else {
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,else$) : sci.impl.interpreter.interpret.call(null,ctx,else$));
}
});
sci.impl.interpreter.eval_def = (function sci$impl$interpreter$eval_def(ctx,p__109082){
var vec__109083 = p__109082;
var _def = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109083,(0),null);
var var_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109083,(1),null);
var _QMARK_docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109083,(2),null);
var _QMARK_init = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109083,(3),null);
var docstring = (cljs.core.truth_(_QMARK_init)?_QMARK_docstring:null);
var init = (cljs.core.truth_(docstring)?_QMARK_init:_QMARK_docstring);
var init__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,init) : sci.impl.interpreter.interpret.call(null,ctx,init));
var m = cljs.core.meta(var_name);
var m__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,m) : sci.impl.interpreter.interpret.call(null,ctx,m));
var cnn = sci.impl.vars.getName(new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m__$1));
var assoc_in_env = (function (env){
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null));
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(the_current_ns,var_name);
var prev__$1 = (((!(sci.impl.vars.var_QMARK_(prev))))?sci.impl.vars.__GT_SciVar(prev,cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cnn),cljs.core.str.cljs$core$IFn$_invoke$arity$1(var_name)),cljs.core.meta(prev)):prev);
var v = (cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("sci.impl","var.unbound","sci.impl/var.unbound",-1824207647),init__$1)))?(function (){var G__109090 = prev__$1;
cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__109090,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return G__109090;
})():(function (){
sci.impl.vars.bindRoot(prev__$1,init__$1);

cljs.core.alter_meta_BANG_.cljs$core$IFn$_invoke$arity$variadic(prev__$1,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m__$1], 0));

return prev__$1;
})()
);
var the_current_ns__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(the_current_ns,var_name,v);
return cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),the_current_ns__$1);
});
var env = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),assoc_in_env);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,var_name], null));
});
sci.impl.interpreter.resolve_symbol = (function sci$impl$interpreter$resolve_symbol(ctx,sym){
var bindings = ctx.get(new cljs.core.Keyword(null,"bindings","bindings",1271397192));
var temp__5733__auto__ = cljs.core.find(bindings,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var v = temp__5733__auto__;
return cljs.core.second(v);
} else {
return sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Could not resolve symbol: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym),"\nks:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx)))].join(''),sym);
}
});
sci.impl.interpreter.parse_libspec = (function sci$impl$interpreter$parse_libspec(libspec){
if(cljs.core.sequential_QMARK_(libspec)){
var vec__109103 = libspec;
var seq__109104 = cljs.core.seq(vec__109103);
var first__109105 = cljs.core.first(seq__109104);
var seq__109104__$1 = cljs.core.next(seq__109104);
var lib_name = first__109105;
var opts = seq__109104__$1;
var ret = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),lib_name], null);
var G__109110 = opts;
var vec__109111 = G__109110;
var seq__109112 = cljs.core.seq(vec__109111);
var first__109113 = cljs.core.first(seq__109112);
var seq__109112__$1 = cljs.core.next(seq__109112);
var opt_name = first__109113;
var first__109113__$1 = cljs.core.first(seq__109112__$1);
var seq__109112__$2 = cljs.core.next(seq__109112__$1);
var fst_opt = first__109113__$1;
var rst_opts = seq__109112__$2;
var ret__$1 = ret;
var G__109110__$1 = G__109110;
while(true){
var ret__$2 = ret__$1;
var vec__109119 = G__109110__$1;
var seq__109120 = cljs.core.seq(vec__109119);
var first__109121 = cljs.core.first(seq__109120);
var seq__109120__$1 = cljs.core.next(seq__109120);
var opt_name__$1 = first__109121;
var first__109121__$1 = cljs.core.first(seq__109120__$1);
var seq__109120__$2 = cljs.core.next(seq__109120__$1);
var fst_opt__$1 = first__109121__$1;
var rst_opts__$1 = seq__109120__$2;
if(cljs.core.not(opt_name__$1)){
return ret__$2;
} else {
var G__109122 = opt_name__$1;
var G__109122__$1 = (((G__109122 instanceof cljs.core.Keyword))?G__109122.fqn:null);
switch (G__109122__$1) {
case "as":
var G__110188 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"as","as",1148689641),fst_opt__$1);
var G__110189 = rst_opts__$1;
ret__$1 = G__110188;
G__109110__$1 = G__110189;
continue;

break;
case "reload":
case "reload-all":
case "verbose":
var G__110190 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,new cljs.core.Keyword(null,"reload","reload",863702807),true);
var G__110191 = cljs.core.cons(fst_opt__$1,rst_opts__$1);
ret__$1 = G__110190;
G__109110__$1 = G__110191;
continue;

break;
case "refer":
case "rename":
case "exclude":
case "only":
var G__110193 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ret__$2,opt_name__$1,fst_opt__$1);
var G__110194 = rst_opts__$1;
ret__$1 = G__110193;
G__109110__$1 = G__110194;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__109122__$1)].join('')));

}
}
break;
}
} else {
if((libspec instanceof cljs.core.Symbol)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lib-name","lib-name",1158024282),libspec], null);
} else {
throw (new Error(["Invalid libspec: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(libspec)].join('')));

}
}
});
sci.impl.interpreter.handle_refer_all = (function sci$impl$interpreter$handle_refer_all(the_current_ns,the_loaded_ns,include_sym_QMARK_,rename_sym,only){
var only__$1 = (cljs.core.truth_(only)?cljs.core.set(only):null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,p__109128){
var vec__109129 = p__109128;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109129,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109129,(1),null);
if(cljs.core.truth_((((k instanceof cljs.core.Symbol))?(function (){var and__4115__auto__ = (include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1 ? include_sym_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : include_sym_QMARK_.call(null,k));
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not(only__$1)) || (cljs.core.contains_QMARK_(only__$1,k)));
} else {
return and__4115__auto__;
}
})():false))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(k) : rename_sym.call(null,k)),v);
} else {
return ns;
}
}),the_current_ns,the_loaded_ns);
});
sci.impl.interpreter.handle_require_libspec_env = (function sci$impl$interpreter$handle_require_libspec_env(env,use_QMARK_,current_ns,the_loaded_ns,lib_name,p__109142){
var map__109143 = p__109142;
var map__109143__$1 = (((((!((map__109143 == null))))?(((((map__109143.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__109143.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109143):map__109143);
var _parsed_libspec = map__109143__$1;
var as = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109143__$1,new cljs.core.Keyword(null,"as","as",1148689641));
var refer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109143__$1,new cljs.core.Keyword(null,"refer","refer",-964295553));
var rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109143__$1,new cljs.core.Keyword(null,"rename","rename",1508157613));
var exclude = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109143__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109143__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var the_current_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null));
var the_current_ns__$1 = (cljs.core.truth_(as)?cljs.core.assoc_in(the_current_ns,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aliases","aliases",1346874714),as], null),lib_name):the_current_ns);
var rename_sym = (cljs.core.truth_(rename)?(function (sym){
var or__4126__auto__ = (rename.cljs$core$IFn$_invoke$arity$1 ? rename.cljs$core$IFn$_invoke$arity$1(sym) : rename.call(null,sym));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return sym;
}
}):cljs.core.identity);
var include_sym_QMARK_ = (cljs.core.truth_(exclude)?(function (){var excludes = cljs.core.set(exclude);
return (function (sym){
return (!(cljs.core.contains_QMARK_(excludes,sym)));
});
})():cljs.core.constantly(true));
var the_current_ns__$2 = (cljs.core.truth_(refer)?(cljs.core.truth_((function (){var or__4126__auto__ = (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),refer) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword(null,"all","all",892129742),refer));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return use_QMARK_;
}
})())?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,null):((cljs.core.sequential_QMARK_(refer))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ns,sym){
if(cljs.core.truth_(include_sym_QMARK_(sym))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ns,(rename_sym.cljs$core$IFn$_invoke$arity$1 ? rename_sym.cljs$core$IFn$_invoke$arity$1(sym) : rename_sym.call(null,sym)),(function (){var temp__5733__auto__ = cljs.core.find(the_loaded_ns,sym);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__109151 = temp__5733__auto__;
var _k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109151,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109151,(1),null);
return v;
} else {
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1(sym)," does not exist"].join('')));
}
})());
} else {
return ns;
}
}),the_current_ns__$1,refer):(function(){throw (new Error(":refer value must be a sequential collection of symbols"))})()
)):(cljs.core.truth_(use_QMARK_)?sci.impl.interpreter.handle_refer_all(the_current_ns__$1,the_loaded_ns,include_sym_QMARK_,rename_sym,only):the_current_ns__$1
));
var env__$1 = cljs.core.assoc_in(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),current_ns], null),the_current_ns__$2);
return env__$1;
});
sci.impl.interpreter.handle_require_libspec = (function sci$impl$interpreter$handle_require_libspec(ctx,libspec){
var map__109154 = sci.impl.interpreter.parse_libspec(libspec);
var map__109154__$1 = (((((!((map__109154 == null))))?(((((map__109154.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__109154.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109154):map__109154);
var parsed_libspec = map__109154__$1;
var lib_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109154__$1,new cljs.core.Keyword(null,"lib-name","lib-name",1158024282));
var reload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109154__$1,new cljs.core.Keyword(null,"reload","reload",863702807));
var env_STAR_ = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
var env = cljs.core.deref(env_STAR_);
var cnn = sci.impl.vars.current_ns_name();
var namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var use_QMARK_ = new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881).cljs$core$IFn$_invoke$arity$1(ctx);
var temp__5733__auto__ = (cljs.core.truth_(reload)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name));
if(cljs.core.truth_(temp__5733__auto__)){
var the_loaded_ns = temp__5733__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
var temp__5733__auto____$1 = new cljs.core.Keyword(null,"load-fn","load-fn",-2121144334).cljs$core$IFn$_invoke$arity$1(env);
if(cljs.core.truth_(temp__5733__auto____$1)){
var load_fn = temp__5733__auto____$1;
var temp__5733__auto____$2 = (function (){var G__109159 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),lib_name], null);
return (load_fn.cljs$core$IFn$_invoke$arity$1 ? load_fn.cljs$core$IFn$_invoke$arity$1(G__109159) : load_fn.call(null,G__109159));
})();
if(cljs.core.truth_(temp__5733__auto____$2)){
var map__109160 = temp__5733__auto____$2;
var map__109160__$1 = (((((!((map__109160 == null))))?(((((map__109160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__109160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109160):map__109160);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109160__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109160__$1,new cljs.core.Keyword(null,"source","source",-433931539));
try{sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns),sci.impl.vars.current_file,file]));

try{var G__109163_110218 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"bindings","bindings",1271397192),cljs.core.PersistentArrayMap.EMPTY);
var G__109164_110219 = source;
(sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_string_STAR_.cljs$core$IFn$_invoke$arity$2(G__109163_110218,G__109164_110219) : sci.impl.interpreter.eval_string_STAR_.call(null,G__109163_110218,G__109164_110219));
}finally {sci.impl.vars.pop_thread_bindings();
}}catch (e109162){if((e109162 instanceof Error)){
var e_110223 = e109162;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(env_STAR_,cljs.core.update,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([lib_name], 0));

throw e_110223;
} else {
throw e109162;

}
}
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(env_STAR_,(function (env__$1){
var namespaces__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(env__$1,new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469));
var the_loaded_ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces__$1,lib_name);
return sci.impl.interpreter.handle_require_libspec_env(env__$1,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec);
}));
} else {
var or__4126__auto__ = (cljs.core.truth_(reload)?(function (){var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(namespaces,lib_name);
if(cljs.core.truth_(temp__5735__auto__)){
var the_loaded_ns = temp__5735__auto__;
return cljs.core.reset_BANG_(env_STAR_,sci.impl.interpreter.handle_require_libspec_env(env,use_QMARK_,cnn,the_loaded_ns,lib_name,parsed_libspec));
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
} else {
throw (new Error(["Could not require ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(lib_name),"."].join('')));
}
}
});
sci.impl.interpreter.eval_require = (function sci$impl$interpreter$eval_require(var_args){
var args__4742__auto__ = [];
var len__4736__auto___110224 = arguments.length;
var i__4737__auto___110225 = (0);
while(true){
if((i__4737__auto___110225 < len__4736__auto___110224)){
args__4742__auto__.push((arguments[i__4737__auto___110225]));

var G__110226 = (i__4737__auto___110225 + (1));
i__4737__auto___110225 = G__110226;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_require.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
var libspecs = cljs.core.PersistentVector.EMPTY;
var current_libspec = null;
var args__$1 = args;
while(true){
if(cljs.core.truth_(args__$1)){
var ret = (function (){var G__109179 = ctx;
var G__109180 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109179,G__109180) : sci.impl.interpreter.interpret.call(null,G__109179,G__109180));
})();
if((ret instanceof cljs.core.Symbol)){
var G__110227 = (function (){var G__109181 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__109181,current_libspec);
} else {
return G__109181;
}
})();
var G__110229 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
var G__110230 = cljs.core.next(args__$1);
libspecs = G__110227;
current_libspec = G__110229;
args__$1 = G__110230;
continue;
} else {
if((ret instanceof cljs.core.Keyword)){
var G__110232 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_libspec,ret));
var G__110233 = null;
var G__110234 = cljs.core.next(args__$1);
libspecs = G__110232;
current_libspec = G__110233;
args__$1 = G__110234;
continue;
} else {
var G__110235 = (function (){var G__109184 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__109184,current_libspec);
} else {
return G__109184;
}
})();
var G__110236 = ret;
var G__110237 = cljs.core.next(args__$1);
libspecs = G__110235;
current_libspec = G__110236;
args__$1 = G__110237;
continue;

}
}
} else {
var libspecs__$1 = (function (){var G__109186 = libspecs;
if(cljs.core.truth_(current_libspec)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__109186,current_libspec);
} else {
return G__109186;
}
})();
return cljs.core.run_BANG_(((function (libspecs,current_libspec,args__$1,libspecs__$1){
return (function (p1__109168_SHARP_){
return sci.impl.interpreter.handle_require_libspec(ctx,p1__109168_SHARP_);
});})(libspecs,current_libspec,args__$1,libspecs__$1))
,libspecs__$1);
}
break;
}
}));

(sci.impl.interpreter.eval_require.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_require.cljs$lang$applyTo = (function (seq109172){
var G__109173 = cljs.core.first(seq109172);
var seq109172__$1 = cljs.core.next(seq109172);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__109173,seq109172__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_require_state,sci.impl.interpreter.eval_require);
sci.impl.interpreter.eval_use = (function sci$impl$interpreter$eval_use(var_args){
var args__4742__auto__ = [];
var len__4736__auto___110238 = arguments.length;
var i__4737__auto___110239 = (0);
while(true){
if((i__4737__auto___110239 < len__4736__auto___110238)){
args__4742__auto__.push((arguments[i__4737__auto___110239]));

var G__110240 = (i__4737__auto___110239 + (1));
i__4737__auto___110239 = G__110240;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_use.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","use","sci.impl/use",1724565881),true),args);
}));

(sci.impl.interpreter.eval_use.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_use.cljs$lang$applyTo = (function (seq109195){
var G__109196 = cljs.core.first(seq109195);
var seq109195__$1 = cljs.core.next(seq109195);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__109196,seq109195__$1);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_use_state,sci.impl.interpreter.eval_use);
sci.impl.interpreter.eval_case = (function sci$impl$interpreter$eval_case(ctx,p__109206){
var vec__109207 = p__109206;
var _case = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109207,(0),null);
var map__109210 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109207,(1),null);
var map__109210__$1 = (((((!((map__109210 == null))))?(((((map__109210.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__109210.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109210):map__109210);
var case_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109210__$1,new cljs.core.Keyword(null,"case-map","case-map",955082964));
var case_val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109210__$1,new cljs.core.Keyword(null,"case-val","case-val",880926521));
var case_default = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109210__$1,new cljs.core.Keyword(null,"case-default","case-default",1140470708));
var v = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,case_val) : sci.impl.interpreter.interpret.call(null,ctx,case_val));
var temp__5733__auto__ = cljs.core.find(case_map,v);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__109215 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109215,(0),null);
var found = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109215,(1),null);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,found) : sci.impl.interpreter.interpret.call(null,ctx,found));
} else {
if(cljs.core.vector_QMARK_(case_default)){
var G__109218 = ctx;
var G__109219 = cljs.core.second(case_default);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109218,G__109219) : sci.impl.interpreter.interpret.call(null,G__109218,G__109219));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')));
}
}
});
sci.impl.interpreter.eval_try = (function sci$impl$interpreter$eval_try(ctx,expr){
var map__109220 = new cljs.core.Keyword("sci.impl","try","sci.impl/try",2142624741).cljs$core$IFn$_invoke$arity$1(expr);
var map__109220__$1 = (((((!((map__109220 == null))))?(((((map__109220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__109220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109220):map__109220);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109220__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var catches = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109220__$1,new cljs.core.Keyword(null,"catches","catches",-1478797617));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109220__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
try{var _STAR_in_try_STAR__orig_val__109237 = sci.impl.utils._STAR_in_try_STAR_;
var _STAR_in_try_STAR__temp_val__109238 = true;
(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__temp_val__109238);

try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,body) : sci.impl.interpreter.interpret.call(null,ctx,body));
}finally {(sci.impl.utils._STAR_in_try_STAR_ = _STAR_in_try_STAR__orig_val__109237);
}}catch (e109225){if((e109225 instanceof Error)){
var e = e109225;
var temp__5733__auto__ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,c){
var clazz = new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(c);
if((e instanceof clazz)){
return cljs.core.reduced(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sci.impl.interpreter","try-result","sci.impl.interpreter/try-result",1789456125),(function (){var G__109229 = cljs.core.assoc_in(ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Keyword(null,"binding","binding",539932593).cljs$core$IFn$_invoke$arity$1(c)], null),e);
var G__109230 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(c);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109229,G__109230) : sci.impl.interpreter.interpret.call(null,G__109229,G__109230));
})()], null));
} else {
return null;
}
}),null,catches);
if(cljs.core.truth_(temp__5733__auto__)){
var vec__109231 = temp__5733__auto__;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109231,(0),null);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109231,(1),null);
return r;
} else {
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,body);
}
} else {
throw e109225;

}
}finally {(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,finally$) : sci.impl.interpreter.interpret.call(null,ctx,finally$));
}});
sci.impl.interpreter.eval_throw = (function sci$impl$interpreter$eval_throw(ctx,p__109239){
var vec__109240 = p__109239;
var _throw = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109240,(0),null);
var ex = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109240,(1),null);
var ex__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.interpret.call(null,ctx,ex));
throw ex__$1;
});
sci.impl.interpreter.eval_static_method_invocation = (function sci$impl$interpreter$eval_static_method_invocation(ctx,expr){
return sci.impl.interop.invoke_static_method(cljs.core.first(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__109243_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__109243_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__109243_SHARP_));
}),cljs.core.rest(expr)));
});
sci.impl.interpreter.eval_constructor_invocation = (function sci$impl$interpreter$eval_constructor_invocation(ctx,p__109249){
var vec__109250 = p__109249;
var _new = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109250,(0),null);
var constructor$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109250,(1),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109250,(2),null);
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__109244_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__109244_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__109244_SHARP_));
}),args);
return sci.impl.interop.invoke_constructor(constructor$,args__$1);
});
sci.impl.interpreter.eval_instance_method_invocation = (function sci$impl$interpreter$eval_instance_method_invocation(p__109262,p__109263){
var map__109265 = p__109262;
var map__109265__$1 = (((((!((map__109265 == null))))?(((((map__109265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__109265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109265):map__109265);
var ctx = map__109265__$1;
var class__GT_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109265__$1,new cljs.core.Keyword(null,"class->opts","class->opts",2061906477));
var vec__109266 = p__109263;
var _dot = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109266,(0),null);
var instance_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109266,(1),null);
var method_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109266,(2),null);
var args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109266,(3),null);
var _expr = vec__109266;
var instance_meta = cljs.core.meta(instance_expr);
var tag_class = new cljs.core.Keyword(null,"tag-class","tag-class",714967874).cljs$core$IFn$_invoke$arity$1(instance_meta);
var instance_expr_STAR_ = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,instance_expr) : sci.impl.interpreter.interpret.call(null,ctx,instance_expr));
if(cljs.core.map_QMARK_(instance_expr_STAR_)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instance_expr_STAR_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(method_str,(1))));
} else {
var instance_class = (function (){var or__4126__auto__ = tag_class;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.type(instance_expr_STAR_);
}
})();
var instance_class_name = instance_class.name;
var instance_class_symbol = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(instance_class_name);
var allowed_QMARK_ = (function (){var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,new cljs.core.Keyword(null,"allow","allow",-1857325745));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(class__GT_opts,instance_class_symbol);
}
})();
var target_class = (cljs.core.truth_(allowed_QMARK_)?instance_class:(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"public-class","public-class",1127293019).cljs$core$IFn$_invoke$arity$1(ctx);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(instance_expr_STAR_) : f.call(null,instance_expr_STAR_));
} else {
return null;
}
})());
if(cljs.core.truth_(target_class)){
} else {
sci.impl.utils.throw_error_with_location.cljs$core$IFn$_invoke$arity$2(["Method ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_str)," on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_class)," not allowed!"].join(''),instance_expr);
}

var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__109254_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__109254_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__109254_SHARP_));
}),args);
return sci.impl.interop.invoke_instance_method(instance_expr_STAR_,target_class,method_str,args__$1);
}
});
sci.impl.interpreter.eval_in_ns = (function sci$impl$interpreter$eval_in_ns(ctx,p__109276){
var vec__109277 = p__109276;
var _in_ns = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109277,(0),null);
var ns_expr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109277,(1),null);
var ns_sym = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_expr) : sci.impl.interpreter.interpret.call(null,ctx,ns_expr));
sci.impl.utils.set_namespace_BANG_(ctx,ns_sym,null);

return null;
});
sci.impl.interpreter.eval_refer = (function sci$impl$interpreter$eval_refer(var_args){
var args__4742__auto__ = [];
var len__4736__auto___110263 = arguments.length;
var i__4737__auto___110264 = (0);
while(true){
if((i__4737__auto___110264 < len__4736__auto___110263)){
args__4742__auto__.push((arguments[i__4737__auto___110264]));

var G__110267 = (i__4737__auto___110264 + (1));
i__4737__auto___110264 = G__110267;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.interpreter.eval_refer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_refer.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,ns_sym,exprs){
var ns_sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,ns_sym) : sci.impl.interpreter.interpret.call(null,ctx,ns_sym));
var exprs__$1 = exprs;
while(true){
if(cljs.core.truth_(exprs__$1)){
var vec__109283 = exprs__$1;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109283,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109283,(1),null);
var G__109286_110271 = k;
var G__109286_110272__$1 = (((G__109286_110271 instanceof cljs.core.Keyword))?G__109286_110271.fqn:null);
switch (G__109286_110272__$1) {
case "exclude":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__109286_110271,G__109286_110272__$1,vec__109283,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn,new cljs.core.Keyword(null,"refer","refer",-964295553),ns_sym__$1,new cljs.core.Keyword(null,"exclude","exclude",-1230250334)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,cljs.core.PersistentHashSet.EMPTY),v);
});})(exprs__$1,G__109286_110271,G__109286_110272__$1,vec__109283,k,v,ns_sym__$1))
);

break;
case "only":
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx),((function (exprs__$1,G__109286_110271,G__109286_110272__$1,vec__109283,k,v,ns_sym__$1){
return (function (env){
var cnn = sci.impl.vars.current_ns_name();
var other_ns = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),ns_sym__$1], null));
var other_vars = cljs.core.select_keys(other_ns,v);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(env,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn], null),cljs.core.merge,other_vars);
});})(exprs__$1,G__109286_110271,G__109286_110272__$1,vec__109283,k,v,ns_sym__$1))
);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__109286_110272__$1)].join('')));

}

var G__110275 = cljs.core.nnext(exprs__$1);
exprs__$1 = G__110275;
continue;
} else {
return null;
}
break;
}
}));

(sci.impl.interpreter.eval_refer.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.interpreter.eval_refer.cljs$lang$applyTo = (function (seq109280){
var G__109281 = cljs.core.first(seq109280);
var seq109280__$1 = cljs.core.next(seq109280);
var G__109282 = cljs.core.first(seq109280__$1);
var seq109280__$2 = cljs.core.next(seq109280__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__109281,G__109282,seq109280__$2);
}));

cljs.core.vreset_BANG_(sci.impl.utils.eval_refer_state,sci.impl.interpreter.eval_refer);
sci.impl.interpreter.eval_resolve = (function sci$impl$interpreter$eval_resolve(ctx,sym){
var sym__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,sym) : sci.impl.interpreter.interpret.call(null,ctx,sym));
return cljs.core.second(sci.impl.analyzer.lookup(ctx,sym__$1,false));
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_resolve_state,sci.impl.interpreter.eval_resolve);
sci.impl.interpreter.macroexpand_1 = (function sci$impl$interpreter$macroexpand_1(ctx,expr){
var original_expr = expr;
if(cljs.core.seq_QMARK_(expr)){
var op = cljs.core.first(expr);
if((op instanceof cljs.core.Symbol)){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(sci.impl.analyzer.special_syms,op))){
return expr;
} else {
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"for","for",316745208,null),null], null), null),op)){
return sci.impl.analyzer.analyze(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword("sci.impl","macroexpanding","sci.impl/macroexpanding",2113471825),true),expr);
} else {
var f = sci.impl.analyzer.resolve_symbol.cljs$core$IFn$_invoke$arity$3(ctx,op,true);
var f__$1 = (cljs.core.truth_(((sci.impl.vars.var_QMARK_(f))?sci.impl.vars.isMacro(f):false))?cljs.core.deref(f):f);
if(cljs.core.truth_(sci.impl.analyzer.macro_QMARK_(f__$1))){
var f__$2 = (cljs.core.truth_((function (){var G__109291 = new cljs.core.Keyword(null,"needs-ctx","needs-ctx",-35514403);
var G__109292 = (function (){var G__109293 = f__$1;
var G__109293__$1 = (((G__109293 == null))?null:cljs.core.meta(G__109293));
if((G__109293__$1 == null)){
return null;
} else {
return new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978).cljs$core$IFn$_invoke$arity$1(G__109293__$1);
}
})();
return (sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(G__109291,G__109292) : sci.impl.utils.kw_identical_QMARK_.call(null,G__109291,G__109292));
})())?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(f__$1,ctx):f__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(f__$2,original_expr,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(ctx),cljs.core.rest(expr));
} else {
return expr;
}

}
}
} else {
return expr;
}
} else {
return expr;
}
});
sci.impl.interpreter.macroexpand = (function sci$impl$interpreter$macroexpand(ctx,form){
var ex = sci.impl.interpreter.macroexpand_1(ctx,form);
if((ex === form)){
return form;
} else {
return (sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.macroexpand.cljs$core$IFn$_invoke$arity$2(ctx,ex) : sci.impl.interpreter.macroexpand.call(null,ctx,ex));
}
});
sci.impl.interpreter.eval_import = (function sci$impl$interpreter$eval_import(var_args){
var args__4742__auto__ = [];
var len__4736__auto___110278 = arguments.length;
var i__4737__auto___110279 = (0);
while(true){
if((i__4737__auto___110279 < len__4736__auto___110278)){
args__4742__auto__.push((arguments[i__4737__auto___110279]));

var G__110282 = (i__4737__auto___110279 + (1));
i__4737__auto___110279 = G__110282;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sci.impl.interpreter.eval_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sci.impl.interpreter.eval_import.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,import_symbols_or_lists){
var specs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__109297_SHARP_){
if(((cljs.core.seq_QMARK_(p1__109297_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(p1__109297_SHARP_))))){
return cljs.core.second(p1__109297_SHARP_);
} else {
return p1__109297_SHARP_;
}
}),import_symbols_or_lists);
var env = new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx);
return cljs.core.run_BANG_((function (spec){
var vec__109304 = (((spec instanceof cljs.core.Symbol))?(function (){var s = cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec);
var last_dot = clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
var package_PLUS_class_name = (cljs.core.truth_(last_dot)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),last_dot)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(last_dot + (1)),((s).length)))], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec], null)], null));
return package_PLUS_class_name;
})():(function (){var p = cljs.core.first(spec);
var cs = cljs.core.rest(spec);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cs], null);
})());
var package$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109304,(0),null);
var classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109304,(1),null);
var seq__109310 = cljs.core.seq(classes);
var chunk__109311 = null;
var count__109312 = (0);
var i__109313 = (0);
while(true){
if((i__109313 < count__109312)){
var class$ = chunk__109311.cljs$core$IIndexed$_nth$arity$2(null,i__109313);
var fq_class_name_110289 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_110289))){
var cnn_110290 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_110290,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name_110289);
} else {
var temp__5733__auto___110291 = sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5733__auto___110291)){
var rec_110293 = temp__5733__auto___110291;
var cnn_110294 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_110294,class$], null),rec_110293);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_110289)].join('')));
}
}


var G__110297 = seq__109310;
var G__110298 = chunk__109311;
var G__110299 = count__109312;
var G__110300 = (i__109313 + (1));
seq__109310 = G__110297;
chunk__109311 = G__110298;
count__109312 = G__110299;
i__109313 = G__110300;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__109310);
if(temp__5735__auto__){
var seq__109310__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__109310__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__109310__$1);
var G__110301 = cljs.core.chunk_rest(seq__109310__$1);
var G__110302 = c__4556__auto__;
var G__110303 = cljs.core.count(c__4556__auto__);
var G__110304 = (0);
seq__109310 = G__110301;
chunk__109311 = G__110302;
count__109312 = G__110303;
i__109313 = G__110304;
continue;
} else {
var class$ = cljs.core.first(seq__109310__$1);
var fq_class_name_110305 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(package$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(package$),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''):class$));
if(cljs.core.truth_(sci.impl.interop.resolve_class(ctx,fq_class_name_110305))){
var cnn_110306 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_110306,new cljs.core.Keyword(null,"imports","imports",-1249933394),class$], null),fq_class_name_110305);
} else {
var temp__5733__auto___110307 = sci.impl.records.resolve_record_class.cljs$core$IFn$_invoke$arity$3(ctx,package$,class$);
if(cljs.core.truth_(temp__5733__auto___110307)){
var rec_110308 = temp__5733__auto___110307;
var cnn_110309 = sci.impl.vars.current_ns_name();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(env,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),cnn_110309,class$], null),rec_110308);
} else {
throw (new Error(["Unable to resolve classname: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fq_class_name_110305)].join('')));
}
}


var G__110311 = cljs.core.next(seq__109310__$1);
var G__110312 = null;
var G__110313 = (0);
var G__110314 = (0);
seq__109310 = G__110311;
chunk__109311 = G__110312;
count__109312 = G__110313;
i__109313 = G__110314;
continue;
}
} else {
return null;
}
}
break;
}
}),specs);
}));

(sci.impl.interpreter.eval_import.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sci.impl.interpreter.eval_import.cljs$lang$applyTo = (function (seq109298){
var G__109299 = cljs.core.first(seq109298);
var seq109298__$1 = cljs.core.next(seq109298);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__109299,seq109298__$1);
}));

sci.impl.interpreter.eval_set_BANG_ = (function sci$impl$interpreter$eval_set_BANG_(ctx,p__109334){
var vec__109339 = p__109334;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109339,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109339,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109339,(2),null);
var obj__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,obj) : sci.impl.interpreter.interpret.call(null,ctx,obj));
var v__$1 = (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,v) : sci.impl.interpreter.interpret.call(null,ctx,v));
if(sci.impl.vars.var_QMARK_(obj__$1)){
return sci.impl.types.setVal(obj__$1,v__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Cannot set ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(obj__$1)," to ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__$1)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"v","v",21465059),v__$1], null));
}
});
sci.impl.interpreter.eval_do_STAR_ = (function sci$impl$interpreter$eval_do_STAR_(ctx,exprs){
var G__109358 = exprs;
var vec__109359 = G__109358;
var seq__109360 = cljs.core.seq(vec__109359);
var first__109361 = cljs.core.first(seq__109360);
var seq__109360__$1 = cljs.core.next(seq__109360);
var expr = first__109361;
var exprs__$1 = seq__109360__$1;
var G__109358__$1 = G__109358;
while(true){
var vec__109362 = G__109358__$1;
var seq__109363 = cljs.core.seq(vec__109362);
var first__109364 = cljs.core.first(seq__109363);
var seq__109363__$1 = cljs.core.next(seq__109363);
var expr__$1 = first__109364;
var exprs__$2 = seq__109363__$1;
var ret = (function (){try{return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,expr__$1) : sci.impl.interpreter.interpret.call(null,ctx,expr__$1));
}catch (e109365){if((e109365 instanceof Error)){
var e = e109365;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr__$1);
} else {
throw e109365;

}
}})();
var temp__5733__auto__ = cljs.core.seq(exprs__$2);
if(temp__5733__auto__){
var exprs__$3 = temp__5733__auto__;
var G__110320 = exprs__$3;
G__109358__$1 = G__110320;
continue;
} else {
return ret;
}
break;
}
});
sci.impl.interpreter.eval_do = (function sci$impl$interpreter$eval_do(ctx,expr){
var temp__5735__auto__ = cljs.core.next(expr);
if(temp__5735__auto__){
var exprs = temp__5735__auto__;
return sci.impl.interpreter.eval_do_STAR_(ctx,exprs);
} else {
return null;
}
});
sci.impl.interpreter.fn_call = (function sci$impl$interpreter$fn_call(ctx,f,args){
var G__109561 = cljs.core.count(args);
switch (G__109561) {
case (0):
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

break;
case (1):
var arg109371 = (function (){var G__109565 = ctx;
var G__109566 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109565,G__109566) : sci.impl.interpreter.interpret.call(null,G__109565,G__109566));
})();
var args__$1 = cljs.core.rest(args);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(arg109371) : f.call(null,arg109371));

break;
case (2):
var arg109372 = (function (){var G__109567 = ctx;
var G__109568 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109567,G__109568) : sci.impl.interpreter.interpret.call(null,G__109567,G__109568));
})();
var args__$1 = cljs.core.rest(args);
var arg109373 = (function (){var G__109569 = ctx;
var G__109570 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109569,G__109570) : sci.impl.interpreter.interpret.call(null,G__109569,G__109570));
})();
var args__$2 = cljs.core.rest(args__$1);
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(arg109372,arg109373) : f.call(null,arg109372,arg109373));

break;
case (3):
var arg109374 = (function (){var G__109571 = ctx;
var G__109572 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109571,G__109572) : sci.impl.interpreter.interpret.call(null,G__109571,G__109572));
})();
var args__$1 = cljs.core.rest(args);
var arg109375 = (function (){var G__109573 = ctx;
var G__109574 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109573,G__109574) : sci.impl.interpreter.interpret.call(null,G__109573,G__109574));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg109376 = (function (){var G__109575 = ctx;
var G__109576 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109575,G__109576) : sci.impl.interpreter.interpret.call(null,G__109575,G__109576));
})();
var args__$3 = cljs.core.rest(args__$2);
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(arg109374,arg109375,arg109376) : f.call(null,arg109374,arg109375,arg109376));

break;
case (4):
var arg109377 = (function (){var G__109577 = ctx;
var G__109578 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109577,G__109578) : sci.impl.interpreter.interpret.call(null,G__109577,G__109578));
})();
var args__$1 = cljs.core.rest(args);
var arg109378 = (function (){var G__109579 = ctx;
var G__109580 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109579,G__109580) : sci.impl.interpreter.interpret.call(null,G__109579,G__109580));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg109379 = (function (){var G__109582 = ctx;
var G__109583 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109582,G__109583) : sci.impl.interpreter.interpret.call(null,G__109582,G__109583));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg109380 = (function (){var G__109584 = ctx;
var G__109585 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109584,G__109585) : sci.impl.interpreter.interpret.call(null,G__109584,G__109585));
})();
var args__$4 = cljs.core.rest(args__$3);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(arg109377,arg109378,arg109379,arg109380) : f.call(null,arg109377,arg109378,arg109379,arg109380));

break;
case (5):
var arg109381 = (function (){var G__109586 = ctx;
var G__109587 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109586,G__109587) : sci.impl.interpreter.interpret.call(null,G__109586,G__109587));
})();
var args__$1 = cljs.core.rest(args);
var arg109382 = (function (){var G__109588 = ctx;
var G__109589 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109588,G__109589) : sci.impl.interpreter.interpret.call(null,G__109588,G__109589));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg109383 = (function (){var G__109590 = ctx;
var G__109591 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109590,G__109591) : sci.impl.interpreter.interpret.call(null,G__109590,G__109591));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg109384 = (function (){var G__109595 = ctx;
var G__109596 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109595,G__109596) : sci.impl.interpreter.interpret.call(null,G__109595,G__109596));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg109385 = (function (){var G__109597 = ctx;
var G__109598 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109597,G__109598) : sci.impl.interpreter.interpret.call(null,G__109597,G__109598));
})();
var args__$5 = cljs.core.rest(args__$4);
return (f.cljs$core$IFn$_invoke$arity$5 ? f.cljs$core$IFn$_invoke$arity$5(arg109381,arg109382,arg109383,arg109384,arg109385) : f.call(null,arg109381,arg109382,arg109383,arg109384,arg109385));

break;
case (6):
var arg109386 = (function (){var G__109599 = ctx;
var G__109600 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109599,G__109600) : sci.impl.interpreter.interpret.call(null,G__109599,G__109600));
})();
var args__$1 = cljs.core.rest(args);
var arg109387 = (function (){var G__109601 = ctx;
var G__109602 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109601,G__109602) : sci.impl.interpreter.interpret.call(null,G__109601,G__109602));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg109388 = (function (){var G__109603 = ctx;
var G__109604 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109603,G__109604) : sci.impl.interpreter.interpret.call(null,G__109603,G__109604));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg109389 = (function (){var G__109605 = ctx;
var G__109606 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109605,G__109606) : sci.impl.interpreter.interpret.call(null,G__109605,G__109606));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg109390 = (function (){var G__109607 = ctx;
var G__109608 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109607,G__109608) : sci.impl.interpreter.interpret.call(null,G__109607,G__109608));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg109391 = (function (){var G__109609 = ctx;
var G__109610 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109609,G__109610) : sci.impl.interpreter.interpret.call(null,G__109609,G__109610));
})();
var args__$6 = cljs.core.rest(args__$5);
return (f.cljs$core$IFn$_invoke$arity$6 ? f.cljs$core$IFn$_invoke$arity$6(arg109386,arg109387,arg109388,arg109389,arg109390,arg109391) : f.call(null,arg109386,arg109387,arg109388,arg109389,arg109390,arg109391));

break;
case (7):
var arg109392 = (function (){var G__109611 = ctx;
var G__109612 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109611,G__109612) : sci.impl.interpreter.interpret.call(null,G__109611,G__109612));
})();
var args__$1 = cljs.core.rest(args);
var arg109393 = (function (){var G__109613 = ctx;
var G__109614 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109613,G__109614) : sci.impl.interpreter.interpret.call(null,G__109613,G__109614));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg109394 = (function (){var G__109617 = ctx;
var G__109618 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109617,G__109618) : sci.impl.interpreter.interpret.call(null,G__109617,G__109618));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg109395 = (function (){var G__109619 = ctx;
var G__109620 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109619,G__109620) : sci.impl.interpreter.interpret.call(null,G__109619,G__109620));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg109396 = (function (){var G__109621 = ctx;
var G__109622 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109621,G__109622) : sci.impl.interpreter.interpret.call(null,G__109621,G__109622));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg109397 = (function (){var G__109623 = ctx;
var G__109624 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109623,G__109624) : sci.impl.interpreter.interpret.call(null,G__109623,G__109624));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg109398 = (function (){var G__109625 = ctx;
var G__109626 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109625,G__109626) : sci.impl.interpreter.interpret.call(null,G__109625,G__109626));
})();
var args__$7 = cljs.core.rest(args__$6);
return (f.cljs$core$IFn$_invoke$arity$7 ? f.cljs$core$IFn$_invoke$arity$7(arg109392,arg109393,arg109394,arg109395,arg109396,arg109397,arg109398) : f.call(null,arg109392,arg109393,arg109394,arg109395,arg109396,arg109397,arg109398));

break;
case (8):
var arg109399 = (function (){var G__109636 = ctx;
var G__109637 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109636,G__109637) : sci.impl.interpreter.interpret.call(null,G__109636,G__109637));
})();
var args__$1 = cljs.core.rest(args);
var arg109400 = (function (){var G__109640 = ctx;
var G__109641 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109640,G__109641) : sci.impl.interpreter.interpret.call(null,G__109640,G__109641));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg109401 = (function (){var G__109648 = ctx;
var G__109649 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109648,G__109649) : sci.impl.interpreter.interpret.call(null,G__109648,G__109649));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg109402 = (function (){var G__109654 = ctx;
var G__109655 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109654,G__109655) : sci.impl.interpreter.interpret.call(null,G__109654,G__109655));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg109403 = (function (){var G__109659 = ctx;
var G__109661 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109659,G__109661) : sci.impl.interpreter.interpret.call(null,G__109659,G__109661));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg109404 = (function (){var G__109676 = ctx;
var G__109677 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109676,G__109677) : sci.impl.interpreter.interpret.call(null,G__109676,G__109677));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg109405 = (function (){var G__109686 = ctx;
var G__109687 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109686,G__109687) : sci.impl.interpreter.interpret.call(null,G__109686,G__109687));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg109406 = (function (){var G__109688 = ctx;
var G__109689 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109688,G__109689) : sci.impl.interpreter.interpret.call(null,G__109688,G__109689));
})();
var args__$8 = cljs.core.rest(args__$7);
return (f.cljs$core$IFn$_invoke$arity$8 ? f.cljs$core$IFn$_invoke$arity$8(arg109399,arg109400,arg109401,arg109402,arg109403,arg109404,arg109405,arg109406) : f.call(null,arg109399,arg109400,arg109401,arg109402,arg109403,arg109404,arg109405,arg109406));

break;
case (9):
var arg109407 = (function (){var G__109692 = ctx;
var G__109693 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109692,G__109693) : sci.impl.interpreter.interpret.call(null,G__109692,G__109693));
})();
var args__$1 = cljs.core.rest(args);
var arg109408 = (function (){var G__109694 = ctx;
var G__109695 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109694,G__109695) : sci.impl.interpreter.interpret.call(null,G__109694,G__109695));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg109409 = (function (){var G__109696 = ctx;
var G__109697 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109696,G__109697) : sci.impl.interpreter.interpret.call(null,G__109696,G__109697));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg109410 = (function (){var G__109699 = ctx;
var G__109700 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109699,G__109700) : sci.impl.interpreter.interpret.call(null,G__109699,G__109700));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg109411 = (function (){var G__109702 = ctx;
var G__109703 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109702,G__109703) : sci.impl.interpreter.interpret.call(null,G__109702,G__109703));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg109412 = (function (){var G__109704 = ctx;
var G__109705 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109704,G__109705) : sci.impl.interpreter.interpret.call(null,G__109704,G__109705));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg109413 = (function (){var G__109706 = ctx;
var G__109707 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109706,G__109707) : sci.impl.interpreter.interpret.call(null,G__109706,G__109707));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg109414 = (function (){var G__109708 = ctx;
var G__109709 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109708,G__109709) : sci.impl.interpreter.interpret.call(null,G__109708,G__109709));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg109415 = (function (){var G__109711 = ctx;
var G__109712 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109711,G__109712) : sci.impl.interpreter.interpret.call(null,G__109711,G__109712));
})();
var args__$9 = cljs.core.rest(args__$8);
return (f.cljs$core$IFn$_invoke$arity$9 ? f.cljs$core$IFn$_invoke$arity$9(arg109407,arg109408,arg109409,arg109410,arg109411,arg109412,arg109413,arg109414,arg109415) : f.call(null,arg109407,arg109408,arg109409,arg109410,arg109411,arg109412,arg109413,arg109414,arg109415));

break;
case (10):
var arg109416 = (function (){var G__109715 = ctx;
var G__109716 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109715,G__109716) : sci.impl.interpreter.interpret.call(null,G__109715,G__109716));
})();
var args__$1 = cljs.core.rest(args);
var arg109417 = (function (){var G__109718 = ctx;
var G__109719 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109718,G__109719) : sci.impl.interpreter.interpret.call(null,G__109718,G__109719));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg109418 = (function (){var G__109721 = ctx;
var G__109722 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109721,G__109722) : sci.impl.interpreter.interpret.call(null,G__109721,G__109722));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg109419 = (function (){var G__109723 = ctx;
var G__109724 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109723,G__109724) : sci.impl.interpreter.interpret.call(null,G__109723,G__109724));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg109420 = (function (){var G__109726 = ctx;
var G__109727 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109726,G__109727) : sci.impl.interpreter.interpret.call(null,G__109726,G__109727));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg109421 = (function (){var G__109729 = ctx;
var G__109730 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109729,G__109730) : sci.impl.interpreter.interpret.call(null,G__109729,G__109730));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg109422 = (function (){var G__109731 = ctx;
var G__109732 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109731,G__109732) : sci.impl.interpreter.interpret.call(null,G__109731,G__109732));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg109423 = (function (){var G__109734 = ctx;
var G__109735 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109734,G__109735) : sci.impl.interpreter.interpret.call(null,G__109734,G__109735));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg109424 = (function (){var G__109736 = ctx;
var G__109737 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109736,G__109737) : sci.impl.interpreter.interpret.call(null,G__109736,G__109737));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg109425 = (function (){var G__109738 = ctx;
var G__109739 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109738,G__109739) : sci.impl.interpreter.interpret.call(null,G__109738,G__109739));
})();
var args__$10 = cljs.core.rest(args__$9);
return (f.cljs$core$IFn$_invoke$arity$10 ? f.cljs$core$IFn$_invoke$arity$10(arg109416,arg109417,arg109418,arg109419,arg109420,arg109421,arg109422,arg109423,arg109424,arg109425) : f.call(null,arg109416,arg109417,arg109418,arg109419,arg109420,arg109421,arg109422,arg109423,arg109424,arg109425));

break;
case (11):
var arg109426 = (function (){var G__109742 = ctx;
var G__109743 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109742,G__109743) : sci.impl.interpreter.interpret.call(null,G__109742,G__109743));
})();
var args__$1 = cljs.core.rest(args);
var arg109427 = (function (){var G__109744 = ctx;
var G__109745 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109744,G__109745) : sci.impl.interpreter.interpret.call(null,G__109744,G__109745));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg109428 = (function (){var G__109747 = ctx;
var G__109748 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109747,G__109748) : sci.impl.interpreter.interpret.call(null,G__109747,G__109748));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg109429 = (function (){var G__109749 = ctx;
var G__109750 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109749,G__109750) : sci.impl.interpreter.interpret.call(null,G__109749,G__109750));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg109430 = (function (){var G__109752 = ctx;
var G__109753 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109752,G__109753) : sci.impl.interpreter.interpret.call(null,G__109752,G__109753));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg109431 = (function (){var G__109754 = ctx;
var G__109755 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109754,G__109755) : sci.impl.interpreter.interpret.call(null,G__109754,G__109755));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg109432 = (function (){var G__109756 = ctx;
var G__109757 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109756,G__109757) : sci.impl.interpreter.interpret.call(null,G__109756,G__109757));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg109433 = (function (){var G__109758 = ctx;
var G__109759 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109758,G__109759) : sci.impl.interpreter.interpret.call(null,G__109758,G__109759));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg109434 = (function (){var G__109762 = ctx;
var G__109763 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109762,G__109763) : sci.impl.interpreter.interpret.call(null,G__109762,G__109763));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg109435 = (function (){var G__109764 = ctx;
var G__109765 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109764,G__109765) : sci.impl.interpreter.interpret.call(null,G__109764,G__109765));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg109436 = (function (){var G__109766 = ctx;
var G__109767 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109766,G__109767) : sci.impl.interpreter.interpret.call(null,G__109766,G__109767));
})();
var args__$11 = cljs.core.rest(args__$10);
return (f.cljs$core$IFn$_invoke$arity$11 ? f.cljs$core$IFn$_invoke$arity$11(arg109426,arg109427,arg109428,arg109429,arg109430,arg109431,arg109432,arg109433,arg109434,arg109435,arg109436) : f.call(null,arg109426,arg109427,arg109428,arg109429,arg109430,arg109431,arg109432,arg109433,arg109434,arg109435,arg109436));

break;
case (12):
var arg109437 = (function (){var G__109768 = ctx;
var G__109769 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109768,G__109769) : sci.impl.interpreter.interpret.call(null,G__109768,G__109769));
})();
var args__$1 = cljs.core.rest(args);
var arg109438 = (function (){var G__109770 = ctx;
var G__109771 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109770,G__109771) : sci.impl.interpreter.interpret.call(null,G__109770,G__109771));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg109439 = (function (){var G__109772 = ctx;
var G__109773 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109772,G__109773) : sci.impl.interpreter.interpret.call(null,G__109772,G__109773));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg109440 = (function (){var G__109775 = ctx;
var G__109776 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109775,G__109776) : sci.impl.interpreter.interpret.call(null,G__109775,G__109776));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg109441 = (function (){var G__109778 = ctx;
var G__109779 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109778,G__109779) : sci.impl.interpreter.interpret.call(null,G__109778,G__109779));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg109442 = (function (){var G__109780 = ctx;
var G__109781 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109780,G__109781) : sci.impl.interpreter.interpret.call(null,G__109780,G__109781));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg109443 = (function (){var G__109782 = ctx;
var G__109783 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109782,G__109783) : sci.impl.interpreter.interpret.call(null,G__109782,G__109783));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg109444 = (function (){var G__109785 = ctx;
var G__109786 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109785,G__109786) : sci.impl.interpreter.interpret.call(null,G__109785,G__109786));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg109445 = (function (){var G__109787 = ctx;
var G__109788 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109787,G__109788) : sci.impl.interpreter.interpret.call(null,G__109787,G__109788));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg109446 = (function (){var G__109790 = ctx;
var G__109791 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109790,G__109791) : sci.impl.interpreter.interpret.call(null,G__109790,G__109791));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg109447 = (function (){var G__109793 = ctx;
var G__109794 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109793,G__109794) : sci.impl.interpreter.interpret.call(null,G__109793,G__109794));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg109448 = (function (){var G__109795 = ctx;
var G__109796 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109795,G__109796) : sci.impl.interpreter.interpret.call(null,G__109795,G__109796));
})();
var args__$12 = cljs.core.rest(args__$11);
return (f.cljs$core$IFn$_invoke$arity$12 ? f.cljs$core$IFn$_invoke$arity$12(arg109437,arg109438,arg109439,arg109440,arg109441,arg109442,arg109443,arg109444,arg109445,arg109446,arg109447,arg109448) : f.call(null,arg109437,arg109438,arg109439,arg109440,arg109441,arg109442,arg109443,arg109444,arg109445,arg109446,arg109447,arg109448));

break;
case (13):
var arg109449 = (function (){var G__109800 = ctx;
var G__109801 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109800,G__109801) : sci.impl.interpreter.interpret.call(null,G__109800,G__109801));
})();
var args__$1 = cljs.core.rest(args);
var arg109450 = (function (){var G__109803 = ctx;
var G__109804 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109803,G__109804) : sci.impl.interpreter.interpret.call(null,G__109803,G__109804));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg109451 = (function (){var G__109805 = ctx;
var G__109806 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109805,G__109806) : sci.impl.interpreter.interpret.call(null,G__109805,G__109806));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg109452 = (function (){var G__109807 = ctx;
var G__109808 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109807,G__109808) : sci.impl.interpreter.interpret.call(null,G__109807,G__109808));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg109453 = (function (){var G__109810 = ctx;
var G__109811 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109810,G__109811) : sci.impl.interpreter.interpret.call(null,G__109810,G__109811));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg109454 = (function (){var G__109814 = ctx;
var G__109815 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109814,G__109815) : sci.impl.interpreter.interpret.call(null,G__109814,G__109815));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg109455 = (function (){var G__109817 = ctx;
var G__109818 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109817,G__109818) : sci.impl.interpreter.interpret.call(null,G__109817,G__109818));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg109456 = (function (){var G__109819 = ctx;
var G__109820 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109819,G__109820) : sci.impl.interpreter.interpret.call(null,G__109819,G__109820));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg109457 = (function (){var G__109821 = ctx;
var G__109822 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109821,G__109822) : sci.impl.interpreter.interpret.call(null,G__109821,G__109822));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg109458 = (function (){var G__109824 = ctx;
var G__109825 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109824,G__109825) : sci.impl.interpreter.interpret.call(null,G__109824,G__109825));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg109459 = (function (){var G__109826 = ctx;
var G__109827 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109826,G__109827) : sci.impl.interpreter.interpret.call(null,G__109826,G__109827));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg109460 = (function (){var G__109828 = ctx;
var G__109829 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109828,G__109829) : sci.impl.interpreter.interpret.call(null,G__109828,G__109829));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg109461 = (function (){var G__109830 = ctx;
var G__109831 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109830,G__109831) : sci.impl.interpreter.interpret.call(null,G__109830,G__109831));
})();
var args__$13 = cljs.core.rest(args__$12);
return (f.cljs$core$IFn$_invoke$arity$13 ? f.cljs$core$IFn$_invoke$arity$13(arg109449,arg109450,arg109451,arg109452,arg109453,arg109454,arg109455,arg109456,arg109457,arg109458,arg109459,arg109460,arg109461) : f.call(null,arg109449,arg109450,arg109451,arg109452,arg109453,arg109454,arg109455,arg109456,arg109457,arg109458,arg109459,arg109460,arg109461));

break;
case (14):
var arg109462 = (function (){var G__109835 = ctx;
var G__109836 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109835,G__109836) : sci.impl.interpreter.interpret.call(null,G__109835,G__109836));
})();
var args__$1 = cljs.core.rest(args);
var arg109463 = (function (){var G__109837 = ctx;
var G__109838 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109837,G__109838) : sci.impl.interpreter.interpret.call(null,G__109837,G__109838));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg109464 = (function (){var G__109839 = ctx;
var G__109840 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109839,G__109840) : sci.impl.interpreter.interpret.call(null,G__109839,G__109840));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg109465 = (function (){var G__109841 = ctx;
var G__109842 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109841,G__109842) : sci.impl.interpreter.interpret.call(null,G__109841,G__109842));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg109466 = (function (){var G__109843 = ctx;
var G__109844 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109843,G__109844) : sci.impl.interpreter.interpret.call(null,G__109843,G__109844));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg109467 = (function (){var G__109846 = ctx;
var G__109847 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109846,G__109847) : sci.impl.interpreter.interpret.call(null,G__109846,G__109847));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg109468 = (function (){var G__109853 = ctx;
var G__109854 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109853,G__109854) : sci.impl.interpreter.interpret.call(null,G__109853,G__109854));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg109469 = (function (){var G__109855 = ctx;
var G__109856 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109855,G__109856) : sci.impl.interpreter.interpret.call(null,G__109855,G__109856));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg109470 = (function (){var G__109857 = ctx;
var G__109858 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109857,G__109858) : sci.impl.interpreter.interpret.call(null,G__109857,G__109858));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg109471 = (function (){var G__109859 = ctx;
var G__109860 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109859,G__109860) : sci.impl.interpreter.interpret.call(null,G__109859,G__109860));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg109472 = (function (){var G__109861 = ctx;
var G__109862 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109861,G__109862) : sci.impl.interpreter.interpret.call(null,G__109861,G__109862));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg109473 = (function (){var G__109863 = ctx;
var G__109864 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109863,G__109864) : sci.impl.interpreter.interpret.call(null,G__109863,G__109864));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg109474 = (function (){var G__109865 = ctx;
var G__109866 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109865,G__109866) : sci.impl.interpreter.interpret.call(null,G__109865,G__109866));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg109475 = (function (){var G__109867 = ctx;
var G__109868 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109867,G__109868) : sci.impl.interpreter.interpret.call(null,G__109867,G__109868));
})();
var args__$14 = cljs.core.rest(args__$13);
return (f.cljs$core$IFn$_invoke$arity$14 ? f.cljs$core$IFn$_invoke$arity$14(arg109462,arg109463,arg109464,arg109465,arg109466,arg109467,arg109468,arg109469,arg109470,arg109471,arg109472,arg109473,arg109474,arg109475) : f.call(null,arg109462,arg109463,arg109464,arg109465,arg109466,arg109467,arg109468,arg109469,arg109470,arg109471,arg109472,arg109473,arg109474,arg109475));

break;
case (15):
var arg109476 = (function (){var G__109872 = ctx;
var G__109873 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109872,G__109873) : sci.impl.interpreter.interpret.call(null,G__109872,G__109873));
})();
var args__$1 = cljs.core.rest(args);
var arg109477 = (function (){var G__109874 = ctx;
var G__109875 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109874,G__109875) : sci.impl.interpreter.interpret.call(null,G__109874,G__109875));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg109478 = (function (){var G__109876 = ctx;
var G__109877 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109876,G__109877) : sci.impl.interpreter.interpret.call(null,G__109876,G__109877));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg109479 = (function (){var G__109878 = ctx;
var G__109879 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109878,G__109879) : sci.impl.interpreter.interpret.call(null,G__109878,G__109879));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg109480 = (function (){var G__109880 = ctx;
var G__109881 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109880,G__109881) : sci.impl.interpreter.interpret.call(null,G__109880,G__109881));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg109481 = (function (){var G__109887 = ctx;
var G__109888 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109887,G__109888) : sci.impl.interpreter.interpret.call(null,G__109887,G__109888));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg109482 = (function (){var G__109890 = ctx;
var G__109891 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109890,G__109891) : sci.impl.interpreter.interpret.call(null,G__109890,G__109891));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg109483 = (function (){var G__109892 = ctx;
var G__109893 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109892,G__109893) : sci.impl.interpreter.interpret.call(null,G__109892,G__109893));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg109484 = (function (){var G__109894 = ctx;
var G__109895 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109894,G__109895) : sci.impl.interpreter.interpret.call(null,G__109894,G__109895));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg109485 = (function (){var G__109896 = ctx;
var G__109897 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109896,G__109897) : sci.impl.interpreter.interpret.call(null,G__109896,G__109897));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg109486 = (function (){var G__109898 = ctx;
var G__109899 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109898,G__109899) : sci.impl.interpreter.interpret.call(null,G__109898,G__109899));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg109487 = (function (){var G__109900 = ctx;
var G__109901 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109900,G__109901) : sci.impl.interpreter.interpret.call(null,G__109900,G__109901));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg109488 = (function (){var G__109902 = ctx;
var G__109903 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109902,G__109903) : sci.impl.interpreter.interpret.call(null,G__109902,G__109903));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg109489 = (function (){var G__109904 = ctx;
var G__109905 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109904,G__109905) : sci.impl.interpreter.interpret.call(null,G__109904,G__109905));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg109490 = (function (){var G__109906 = ctx;
var G__109907 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109906,G__109907) : sci.impl.interpreter.interpret.call(null,G__109906,G__109907));
})();
var args__$15 = cljs.core.rest(args__$14);
return (f.cljs$core$IFn$_invoke$arity$15 ? f.cljs$core$IFn$_invoke$arity$15(arg109476,arg109477,arg109478,arg109479,arg109480,arg109481,arg109482,arg109483,arg109484,arg109485,arg109486,arg109487,arg109488,arg109489,arg109490) : f.call(null,arg109476,arg109477,arg109478,arg109479,arg109480,arg109481,arg109482,arg109483,arg109484,arg109485,arg109486,arg109487,arg109488,arg109489,arg109490));

break;
case (16):
var arg109491 = (function (){var G__109908 = ctx;
var G__109909 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109908,G__109909) : sci.impl.interpreter.interpret.call(null,G__109908,G__109909));
})();
var args__$1 = cljs.core.rest(args);
var arg109492 = (function (){var G__109912 = ctx;
var G__109913 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109912,G__109913) : sci.impl.interpreter.interpret.call(null,G__109912,G__109913));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg109493 = (function (){var G__109914 = ctx;
var G__109915 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109914,G__109915) : sci.impl.interpreter.interpret.call(null,G__109914,G__109915));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg109494 = (function (){var G__109916 = ctx;
var G__109917 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109916,G__109917) : sci.impl.interpreter.interpret.call(null,G__109916,G__109917));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg109495 = (function (){var G__109919 = ctx;
var G__109920 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109919,G__109920) : sci.impl.interpreter.interpret.call(null,G__109919,G__109920));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg109496 = (function (){var G__109923 = ctx;
var G__109924 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109923,G__109924) : sci.impl.interpreter.interpret.call(null,G__109923,G__109924));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg109497 = (function (){var G__109925 = ctx;
var G__109926 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109925,G__109926) : sci.impl.interpreter.interpret.call(null,G__109925,G__109926));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg109498 = (function (){var G__109927 = ctx;
var G__109928 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109927,G__109928) : sci.impl.interpreter.interpret.call(null,G__109927,G__109928));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg109499 = (function (){var G__109929 = ctx;
var G__109930 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109929,G__109930) : sci.impl.interpreter.interpret.call(null,G__109929,G__109930));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg109500 = (function (){var G__109931 = ctx;
var G__109932 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109931,G__109932) : sci.impl.interpreter.interpret.call(null,G__109931,G__109932));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg109501 = (function (){var G__109933 = ctx;
var G__109934 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109933,G__109934) : sci.impl.interpreter.interpret.call(null,G__109933,G__109934));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg109502 = (function (){var G__109935 = ctx;
var G__109936 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109935,G__109936) : sci.impl.interpreter.interpret.call(null,G__109935,G__109936));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg109503 = (function (){var G__109937 = ctx;
var G__109938 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109937,G__109938) : sci.impl.interpreter.interpret.call(null,G__109937,G__109938));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg109504 = (function (){var G__109939 = ctx;
var G__109940 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109939,G__109940) : sci.impl.interpreter.interpret.call(null,G__109939,G__109940));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg109505 = (function (){var G__109941 = ctx;
var G__109942 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109941,G__109942) : sci.impl.interpreter.interpret.call(null,G__109941,G__109942));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg109506 = (function (){var G__109943 = ctx;
var G__109944 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109943,G__109944) : sci.impl.interpreter.interpret.call(null,G__109943,G__109944));
})();
var args__$16 = cljs.core.rest(args__$15);
return (f.cljs$core$IFn$_invoke$arity$16 ? f.cljs$core$IFn$_invoke$arity$16(arg109491,arg109492,arg109493,arg109494,arg109495,arg109496,arg109497,arg109498,arg109499,arg109500,arg109501,arg109502,arg109503,arg109504,arg109505,arg109506) : f.call(null,arg109491,arg109492,arg109493,arg109494,arg109495,arg109496,arg109497,arg109498,arg109499,arg109500,arg109501,arg109502,arg109503,arg109504,arg109505,arg109506));

break;
case (17):
var arg109507 = (function (){var G__109945 = ctx;
var G__109946 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109945,G__109946) : sci.impl.interpreter.interpret.call(null,G__109945,G__109946));
})();
var args__$1 = cljs.core.rest(args);
var arg109508 = (function (){var G__109947 = ctx;
var G__109948 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109947,G__109948) : sci.impl.interpreter.interpret.call(null,G__109947,G__109948));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg109509 = (function (){var G__109949 = ctx;
var G__109950 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109949,G__109950) : sci.impl.interpreter.interpret.call(null,G__109949,G__109950));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg109510 = (function (){var G__109951 = ctx;
var G__109952 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109951,G__109952) : sci.impl.interpreter.interpret.call(null,G__109951,G__109952));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg109511 = (function (){var G__109953 = ctx;
var G__109954 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109953,G__109954) : sci.impl.interpreter.interpret.call(null,G__109953,G__109954));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg109512 = (function (){var G__109955 = ctx;
var G__109956 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109955,G__109956) : sci.impl.interpreter.interpret.call(null,G__109955,G__109956));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg109513 = (function (){var G__109957 = ctx;
var G__109958 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109957,G__109958) : sci.impl.interpreter.interpret.call(null,G__109957,G__109958));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg109514 = (function (){var G__109959 = ctx;
var G__109960 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109959,G__109960) : sci.impl.interpreter.interpret.call(null,G__109959,G__109960));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg109515 = (function (){var G__109961 = ctx;
var G__109962 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109961,G__109962) : sci.impl.interpreter.interpret.call(null,G__109961,G__109962));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg109516 = (function (){var G__109963 = ctx;
var G__109964 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109963,G__109964) : sci.impl.interpreter.interpret.call(null,G__109963,G__109964));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg109517 = (function (){var G__109965 = ctx;
var G__109966 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109965,G__109966) : sci.impl.interpreter.interpret.call(null,G__109965,G__109966));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg109518 = (function (){var G__109967 = ctx;
var G__109968 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109967,G__109968) : sci.impl.interpreter.interpret.call(null,G__109967,G__109968));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg109519 = (function (){var G__109969 = ctx;
var G__109970 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109969,G__109970) : sci.impl.interpreter.interpret.call(null,G__109969,G__109970));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg109520 = (function (){var G__109971 = ctx;
var G__109972 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109971,G__109972) : sci.impl.interpreter.interpret.call(null,G__109971,G__109972));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg109521 = (function (){var G__109973 = ctx;
var G__109974 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109973,G__109974) : sci.impl.interpreter.interpret.call(null,G__109973,G__109974));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg109522 = (function (){var G__109975 = ctx;
var G__109976 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109975,G__109976) : sci.impl.interpreter.interpret.call(null,G__109975,G__109976));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg109523 = (function (){var G__109977 = ctx;
var G__109978 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109977,G__109978) : sci.impl.interpreter.interpret.call(null,G__109977,G__109978));
})();
var args__$17 = cljs.core.rest(args__$16);
return (f.cljs$core$IFn$_invoke$arity$17 ? f.cljs$core$IFn$_invoke$arity$17(arg109507,arg109508,arg109509,arg109510,arg109511,arg109512,arg109513,arg109514,arg109515,arg109516,arg109517,arg109518,arg109519,arg109520,arg109521,arg109522,arg109523) : f.call(null,arg109507,arg109508,arg109509,arg109510,arg109511,arg109512,arg109513,arg109514,arg109515,arg109516,arg109517,arg109518,arg109519,arg109520,arg109521,arg109522,arg109523));

break;
case (18):
var arg109524 = (function (){var G__109979 = ctx;
var G__109980 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109979,G__109980) : sci.impl.interpreter.interpret.call(null,G__109979,G__109980));
})();
var args__$1 = cljs.core.rest(args);
var arg109525 = (function (){var G__109981 = ctx;
var G__109982 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109981,G__109982) : sci.impl.interpreter.interpret.call(null,G__109981,G__109982));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg109526 = (function (){var G__109983 = ctx;
var G__109984 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109983,G__109984) : sci.impl.interpreter.interpret.call(null,G__109983,G__109984));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg109527 = (function (){var G__109985 = ctx;
var G__109986 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109985,G__109986) : sci.impl.interpreter.interpret.call(null,G__109985,G__109986));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg109528 = (function (){var G__109987 = ctx;
var G__109988 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109987,G__109988) : sci.impl.interpreter.interpret.call(null,G__109987,G__109988));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg109529 = (function (){var G__109989 = ctx;
var G__109990 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109989,G__109990) : sci.impl.interpreter.interpret.call(null,G__109989,G__109990));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg109530 = (function (){var G__109991 = ctx;
var G__109992 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109991,G__109992) : sci.impl.interpreter.interpret.call(null,G__109991,G__109992));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg109531 = (function (){var G__109993 = ctx;
var G__109994 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109993,G__109994) : sci.impl.interpreter.interpret.call(null,G__109993,G__109994));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg109532 = (function (){var G__109995 = ctx;
var G__109996 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109995,G__109996) : sci.impl.interpreter.interpret.call(null,G__109995,G__109996));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg109533 = (function (){var G__109997 = ctx;
var G__109998 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109997,G__109998) : sci.impl.interpreter.interpret.call(null,G__109997,G__109998));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg109534 = (function (){var G__109999 = ctx;
var G__110000 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__109999,G__110000) : sci.impl.interpreter.interpret.call(null,G__109999,G__110000));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg109535 = (function (){var G__110001 = ctx;
var G__110002 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110001,G__110002) : sci.impl.interpreter.interpret.call(null,G__110001,G__110002));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg109536 = (function (){var G__110003 = ctx;
var G__110004 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110003,G__110004) : sci.impl.interpreter.interpret.call(null,G__110003,G__110004));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg109537 = (function (){var G__110005 = ctx;
var G__110006 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110005,G__110006) : sci.impl.interpreter.interpret.call(null,G__110005,G__110006));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg109538 = (function (){var G__110007 = ctx;
var G__110008 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110007,G__110008) : sci.impl.interpreter.interpret.call(null,G__110007,G__110008));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg109539 = (function (){var G__110009 = ctx;
var G__110010 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110009,G__110010) : sci.impl.interpreter.interpret.call(null,G__110009,G__110010));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg109540 = (function (){var G__110011 = ctx;
var G__110012 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110011,G__110012) : sci.impl.interpreter.interpret.call(null,G__110011,G__110012));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg109541 = (function (){var G__110013 = ctx;
var G__110014 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110013,G__110014) : sci.impl.interpreter.interpret.call(null,G__110013,G__110014));
})();
var args__$18 = cljs.core.rest(args__$17);
return (f.cljs$core$IFn$_invoke$arity$18 ? f.cljs$core$IFn$_invoke$arity$18(arg109524,arg109525,arg109526,arg109527,arg109528,arg109529,arg109530,arg109531,arg109532,arg109533,arg109534,arg109535,arg109536,arg109537,arg109538,arg109539,arg109540,arg109541) : f.call(null,arg109524,arg109525,arg109526,arg109527,arg109528,arg109529,arg109530,arg109531,arg109532,arg109533,arg109534,arg109535,arg109536,arg109537,arg109538,arg109539,arg109540,arg109541));

break;
case (19):
var arg109542 = (function (){var G__110015 = ctx;
var G__110016 = cljs.core.first(args);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110015,G__110016) : sci.impl.interpreter.interpret.call(null,G__110015,G__110016));
})();
var args__$1 = cljs.core.rest(args);
var arg109543 = (function (){var G__110017 = ctx;
var G__110018 = cljs.core.first(args__$1);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110017,G__110018) : sci.impl.interpreter.interpret.call(null,G__110017,G__110018));
})();
var args__$2 = cljs.core.rest(args__$1);
var arg109544 = (function (){var G__110019 = ctx;
var G__110020 = cljs.core.first(args__$2);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110019,G__110020) : sci.impl.interpreter.interpret.call(null,G__110019,G__110020));
})();
var args__$3 = cljs.core.rest(args__$2);
var arg109545 = (function (){var G__110021 = ctx;
var G__110022 = cljs.core.first(args__$3);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110021,G__110022) : sci.impl.interpreter.interpret.call(null,G__110021,G__110022));
})();
var args__$4 = cljs.core.rest(args__$3);
var arg109546 = (function (){var G__110023 = ctx;
var G__110024 = cljs.core.first(args__$4);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110023,G__110024) : sci.impl.interpreter.interpret.call(null,G__110023,G__110024));
})();
var args__$5 = cljs.core.rest(args__$4);
var arg109547 = (function (){var G__110025 = ctx;
var G__110026 = cljs.core.first(args__$5);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110025,G__110026) : sci.impl.interpreter.interpret.call(null,G__110025,G__110026));
})();
var args__$6 = cljs.core.rest(args__$5);
var arg109548 = (function (){var G__110027 = ctx;
var G__110028 = cljs.core.first(args__$6);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110027,G__110028) : sci.impl.interpreter.interpret.call(null,G__110027,G__110028));
})();
var args__$7 = cljs.core.rest(args__$6);
var arg109549 = (function (){var G__110029 = ctx;
var G__110030 = cljs.core.first(args__$7);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110029,G__110030) : sci.impl.interpreter.interpret.call(null,G__110029,G__110030));
})();
var args__$8 = cljs.core.rest(args__$7);
var arg109550 = (function (){var G__110031 = ctx;
var G__110032 = cljs.core.first(args__$8);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110031,G__110032) : sci.impl.interpreter.interpret.call(null,G__110031,G__110032));
})();
var args__$9 = cljs.core.rest(args__$8);
var arg109551 = (function (){var G__110033 = ctx;
var G__110034 = cljs.core.first(args__$9);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110033,G__110034) : sci.impl.interpreter.interpret.call(null,G__110033,G__110034));
})();
var args__$10 = cljs.core.rest(args__$9);
var arg109552 = (function (){var G__110035 = ctx;
var G__110036 = cljs.core.first(args__$10);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110035,G__110036) : sci.impl.interpreter.interpret.call(null,G__110035,G__110036));
})();
var args__$11 = cljs.core.rest(args__$10);
var arg109553 = (function (){var G__110037 = ctx;
var G__110038 = cljs.core.first(args__$11);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110037,G__110038) : sci.impl.interpreter.interpret.call(null,G__110037,G__110038));
})();
var args__$12 = cljs.core.rest(args__$11);
var arg109554 = (function (){var G__110039 = ctx;
var G__110040 = cljs.core.first(args__$12);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110039,G__110040) : sci.impl.interpreter.interpret.call(null,G__110039,G__110040));
})();
var args__$13 = cljs.core.rest(args__$12);
var arg109555 = (function (){var G__110041 = ctx;
var G__110042 = cljs.core.first(args__$13);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110041,G__110042) : sci.impl.interpreter.interpret.call(null,G__110041,G__110042));
})();
var args__$14 = cljs.core.rest(args__$13);
var arg109556 = (function (){var G__110043 = ctx;
var G__110044 = cljs.core.first(args__$14);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110043,G__110044) : sci.impl.interpreter.interpret.call(null,G__110043,G__110044));
})();
var args__$15 = cljs.core.rest(args__$14);
var arg109557 = (function (){var G__110045 = ctx;
var G__110046 = cljs.core.first(args__$15);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110045,G__110046) : sci.impl.interpreter.interpret.call(null,G__110045,G__110046));
})();
var args__$16 = cljs.core.rest(args__$15);
var arg109558 = (function (){var G__110047 = ctx;
var G__110048 = cljs.core.first(args__$16);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110047,G__110048) : sci.impl.interpreter.interpret.call(null,G__110047,G__110048));
})();
var args__$17 = cljs.core.rest(args__$16);
var arg109559 = (function (){var G__110049 = ctx;
var G__110050 = cljs.core.first(args__$17);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110049,G__110050) : sci.impl.interpreter.interpret.call(null,G__110049,G__110050));
})();
var args__$18 = cljs.core.rest(args__$17);
var arg109560 = (function (){var G__110051 = ctx;
var G__110052 = cljs.core.first(args__$18);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110051,G__110052) : sci.impl.interpreter.interpret.call(null,G__110051,G__110052));
})();
var args__$19 = cljs.core.rest(args__$18);
return (f.cljs$core$IFn$_invoke$arity$19 ? f.cljs$core$IFn$_invoke$arity$19(arg109542,arg109543,arg109544,arg109545,arg109546,arg109547,arg109548,arg109549,arg109550,arg109551,arg109552,arg109553,arg109554,arg109555,arg109556,arg109557,arg109558,arg109559,arg109560) : f.call(null,arg109542,arg109543,arg109544,arg109545,arg109546,arg109547,arg109548,arg109549,arg109550,arg109551,arg109552,arg109553,arg109554,arg109555,arg109556,arg109557,arg109558,arg109559,arg109560));

break;
default:
var args__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__82028_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__82028_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__82028_SHARP_));
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args__$1);

}
});
sci.impl.interpreter.eval_special_call = (function sci$impl$interpreter$eval_special_call(ctx,f_sym,expr){
var G__110054 = sci.impl.utils.strip_core_ns(f_sym);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,".",".",1975675962,null),G__110054)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_instance_method_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"and","and",668631710,null),G__110054)){
return sci.impl.interpreter.eval_and(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"import","import",241030818,null),G__110054)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_import,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"case","case",-1510733573,null),G__110054)){
return sci.impl.interpreter.eval_case(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"if","if",1181717262,null),G__110054)){
return sci.impl.interpreter.eval_if(ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),G__110054)){
return sci.impl.interpreter.eval_do(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand","macroexpand",1509933344,null),G__110054)){
return sci.impl.interpreter.macroexpand(ctx,(function (){var G__110055 = ctx;
var G__110056 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110055,G__110056) : sci.impl.interpreter.interpret.call(null,G__110055,G__110056));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"def","def",597100991,null),G__110054)){
return sci.impl.interpreter.eval_def(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"let","let",358118826,null),G__110054)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_let,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"in-ns","in-ns",-2089468466,null),G__110054)){
return sci.impl.interpreter.eval_in_ns(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"use","use",-205850897,null),G__110054)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_use,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"set!","set!",250714521,null),G__110054)){
return sci.impl.interpreter.eval_set_BANG_(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"recur","recur",1202958259,null),G__110054)){
return sci.impl.interpreter.fn_call(ctx,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(sci.impl.fns.__GT_Recur,cljs.core.vector),cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"require","require",1172530194,null),G__110054)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_require,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"new","new",-444906321,null),G__110054)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_constructor_invocation(ctx,expr);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"macroexpand-1","macroexpand-1",659241329,null),G__110054)){
return sci.impl.interpreter.macroexpand_1(ctx,(function (){var G__110060 = ctx;
var G__110061 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110060,G__110061) : sci.impl.interpreter.interpret.call(null,G__110060,G__110061));
})());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"refer","refer",676235974,null),G__110054)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(sci.impl.interpreter.eval_refer,ctx,cljs.core.rest(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"lazy-seq","lazy-seq",489632906,null),G__110054)){
return (new cljs.core.LazySeq(null,(function (){var G__110062 = ctx;
var G__110063 = cljs.core.second(expr);
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(G__110062,G__110063) : sci.impl.interpreter.interpret.call(null,G__110062,G__110063));
})(),null,null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"throw","throw",595905694,null),G__110054)){
return sci.impl.interpreter.eval_throw(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"try","try",-1273693247,null),G__110054)){
return sci.impl.interpreter.eval_try(ctx,expr);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"resolve","resolve",56086045,null),G__110054)){
return sci.impl.interpreter.eval_resolve(ctx,cljs.core.second(expr));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"or","or",1876275696,null),G__110054)){
return sci.impl.interpreter.eval_or(ctx,cljs.core.rest(expr));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__110054)].join('')));

}
}
}
}
}
}
}
}
}
}
}
}
}
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
sci.impl.interpreter.eval_call = (function sci$impl$interpreter$eval_call(ctx,expr){
try{var f = cljs.core.first(expr);
var m = cljs.core.meta(f);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
if((((f instanceof cljs.core.Symbol)) && (cljs.core.not(op)))){
return sci.impl.interpreter.eval_special_call(ctx,f,expr);
} else {
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441)) : sci.impl.utils.kw_identical_QMARK_.call(null,op,new cljs.core.Keyword(null,"static-access","static-access",-1860919441))))){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.eval_static_method_invocation(ctx,expr);
}
} else {
var f__$1 = (cljs.core.truth_(op)?(sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,f) : sci.impl.interpreter.interpret.call(null,ctx,f)):f);
if(cljs.core.ifn_QMARK_(f__$1)){
if(cljs.core.truth_(ctx.get(new cljs.core.Keyword(null,"dry-run","dry-run",-1102788647)))){
return null;
} else {
return sci.impl.interpreter.fn_call(ctx,f__$1,cljs.core.rest(expr));
}
} else {
throw (new Error(["Cannot call ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f__$1], 0))," as a function."].join('')));
}

}
}
}catch (e110064){if((e110064 instanceof Error)){
var e = e110064;
return sci.impl.utils.rethrow_with_location_of_node(ctx,e,expr);
} else {
throw e110064;

}
}});
sci.impl.interpreter.fix_meta = (function sci$impl$interpreter$fix_meta(v,old_meta){
if(cljs.core.truth_((((((!((v == null))))?(((((v.cljs$lang$protocol_mask$partition0$ & (262144))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$IWithMeta$))))?true:false):false))?cljs.core.meta(v):false))){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$2(v,(function (m){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(old_meta));
}));
} else {
return v;
}
});
sci.impl.interpreter.interpret = (function sci$impl$interpreter$interpret(ctx,expr){
if((expr instanceof sci.impl.types.EvalVar)){
var v = expr.sci$impl$types$IBox$getVal$arity$1(null);
if(cljs.core.not(sci.impl.vars.isMacro(v))){
return cljs.core.deref(v);
} else {
throw (new Error(["Can't take value of a macro: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),""].join('')));
}
} else {
var m = cljs.core.meta(expr);
var op = (cljs.core.truth_(m)?m.get(new cljs.core.Keyword("sci.impl","op","sci.impl/op",950953978)):null);
var ret = ((cljs.core.not(op))?expr:(function (){var G__110074 = op;
var G__110074__$1 = (((G__110074 instanceof cljs.core.Keyword))?G__110074.fqn:null);
switch (G__110074__$1) {
case "call":
return sci.impl.interpreter.eval_call(ctx,expr);

break;
case "try":
return sci.impl.interpreter.eval_try(ctx,expr);

break;
case "fn":
return sci.impl.fns.eval_fn(ctx,sci.impl.interpreter.interpret,sci.impl.interpreter.eval_do_STAR_,expr);

break;
case "static-access":
return sci.impl.interop.get_static_field(expr);

break;
case "var-value":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(expr,(0));

break;
case "deref!":
var v = cljs.core.first(expr);
var v__$1 = ((sci.impl.vars.var_QMARK_(v))?cljs.core.deref(v):v);
var v__$2 = cljs.core.force(v__$1);
return v__$2;

break;
case "resolve-sym":
return sci.impl.interpreter.resolve_symbol(ctx,expr);

break;
case "needs-ctx":
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(expr,ctx);

break;
default:
if(cljs.core.map_QMARK_(expr)){
return cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__110071_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__110071_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__110071_SHARP_));
}),cljs.core.keys(expr)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__110072_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__110072_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__110072_SHARP_));
}),cljs.core.vals(expr)));
} else {
if(((cljs.core.vector_QMARK_(expr)) || (cljs.core.set_QMARK_(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.empty(expr),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__110073_SHARP_){
return (sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.interpret.cljs$core$IFn$_invoke$arity$2(ctx,p1__110073_SHARP_) : sci.impl.interpreter.interpret.call(null,ctx,p1__110073_SHARP_));
}),expr));
} else {
throw (new Error(["unexpected: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr),", type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(expr)),", meta:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(expr))].join('')));

}
}

}
})());
var ret__$1 = (cljs.core.truth_(m)?sci.impl.interpreter.fix_meta(ret,m):ret);
var temp__5733__auto__ = ctx.get(new cljs.core.Keyword(null,"realize-max","realize-max",-1846442543));
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
return sci.impl.max_or_throw.max_or_throw(ret__$1,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"expression","expression",202311876),expr),n);
} else {
return ret__$1;
}
}
});
sci.impl.interpreter.do_QMARK_ = (function sci$impl$interpreter$do_QMARK_(expr){
return ((cljs.core.list_QMARK_(expr)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"do","do",1686842252,null),cljs.core.first(expr))));
});
sci.impl.interpreter.eval_form = (function sci$impl$interpreter$eval_form(ctx,form){
if(sci.impl.interpreter.do_QMARK_(form)){
var exprs = cljs.core.rest(form);
var ret = null;
while(true){
if(cljs.core.seq(exprs)){
var G__110426 = cljs.core.rest(exprs);
var G__110427 = (function (){var G__110078 = ctx;
var G__110079 = cljs.core.first(exprs);
return (sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2 ? sci.impl.interpreter.eval_form.cljs$core$IFn$_invoke$arity$2(G__110078,G__110079) : sci.impl.interpreter.eval_form.call(null,G__110078,G__110079));
})();
exprs = G__110426;
ret = G__110427;
continue;
} else {
return ret;
}
break;
}
} else {
var analyzed = sci.impl.analyzer.analyze(ctx,form);
var ret = sci.impl.interpreter.interpret(ctx,analyzed);
return ret;
}
});
cljs.core.vreset_BANG_(sci.impl.utils.eval_form_state,sci.impl.interpreter.eval_form);
sci.impl.interpreter.eval_string_STAR_ = (function sci$impl$interpreter$eval_string_STAR_(ctx,s){
sci.impl.vars.push_thread_bindings(cljs.core.PersistentArrayMap.createAsIfByAssoc([sci.impl.vars.current_ns,cljs.core.deref(sci.impl.vars.current_ns)]));

try{var reader = cljs.tools.reader.reader_types.indexing_push_back_reader.cljs$core$IFn$_invoke$arity$1(cljs.tools.reader.reader_types.string_push_back_reader.cljs$core$IFn$_invoke$arity$1(s));
var ret = null;
while(true){
var expr = sci.impl.parser.parse_next.cljs$core$IFn$_invoke$arity$2(ctx,reader);
if(cljs.core.truth_((sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2 ? sci.impl.utils.kw_identical_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr) : sci.impl.utils.kw_identical_QMARK_.call(null,new cljs.core.Keyword("edamame.impl.parser","eof","edamame.impl.parser/eof",720552006),expr)))){
return ret;
} else {
var ret__$1 = sci.impl.interpreter.eval_form(ctx,expr);
var G__110428 = ret__$1;
ret = G__110428;
continue;
}
break;
}
}finally {sci.impl.vars.pop_thread_bindings();
}});
sci.impl.interpreter.eval_string = (function sci$impl$interpreter$eval_string(var_args){
var G__110088 = arguments.length;
switch (G__110088) {
case 1:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$1 = (function (s){
return sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(sci.impl.interpreter.eval_string.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
var init_ctx = sci.impl.opts.init(opts);
var ret = sci.impl.interpreter.eval_string_STAR_(init_ctx,s);
return ret;
}));

(sci.impl.interpreter.eval_string.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=sci.impl.interpreter.js.map
