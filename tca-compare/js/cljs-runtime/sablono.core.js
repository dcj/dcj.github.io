goog.provide('sablono.core');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
/**
 * The React.js create element function.
 */
sablono.core.create_element = module$node_modules$react$index.createElement;
/**
 * The React.js Fragment.
 */
sablono.core.fragment = module$node_modules$react$index.Fragment;
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__100262__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__99689 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var seq__99690 = cljs.core.seq(vec__99689);
var first__99691 = cljs.core.first(seq__99690);
var seq__99690__$1 = cljs.core.next(seq__99690);
var tag = first__99691;
var body = seq__99690__$1;
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(body),cljs.core.first(args)], 0))], null),cljs.core.rest(body));
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first(args)], null),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__100262 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__100270__i = 0, G__100270__a = new Array(arguments.length -  0);
while (G__100270__i < G__100270__a.length) {G__100270__a[G__100270__i] = arguments[G__100270__i + 0]; ++G__100270__i;}
  args = new cljs.core.IndexedSeq(G__100270__a,0,null);
} 
return G__100262__delegate.call(this,args);};
G__100262.cljs$lang$maxFixedArity = 0;
G__100262.cljs$lang$applyTo = (function (arglist__100271){
var args = cljs.core.seq(arglist__100271);
return G__100262__delegate(args);
});
G__100262.cljs$core$IFn$_invoke$arity$variadic = G__100262__delegate;
return G__100262;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4529__auto__ = (function sablono$core$update_arglists_$_iter__99700(s__99701){
return (new cljs.core.LazySeq(null,(function (){
var s__99701__$1 = s__99701;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__99701__$1);
if(temp__5735__auto__){
var s__99701__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__99701__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__99701__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__99703 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__99702 = (0);
while(true){
if((i__99702 < size__4528__auto__)){
var args = cljs.core._nth(c__4527__auto__,i__99702);
cljs.core.chunk_append(b__99703,cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__100274 = (i__99702 + (1));
i__99702 = G__100274;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__99703),sablono$core$update_arglists_$_iter__99700(cljs.core.chunk_rest(s__99701__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__99703),null);
}
} else {
var args = cljs.core.first(s__99701__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__99700(cljs.core.rest(s__99701__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4742__auto__ = [];
var len__4736__auto___100281 = arguments.length;
var i__4737__auto___100282 = (0);
while(true){
if((i__4737__auto___100282 < len__4736__auto___100281)){
args__4742__auto__.push((arguments[i__4737__auto___100282]));

var G__100283 = (i__4737__auto___100282 + (1));
i__4737__auto___100282 = G__100283;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4529__auto__ = (function sablono$core$iter__99716(s__99717){
return (new cljs.core.LazySeq(null,(function (){
var s__99717__$1 = s__99717;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__99717__$1);
if(temp__5735__auto__){
var s__99717__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__99717__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__99717__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__99719 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__99718 = (0);
while(true){
if((i__99718 < size__4528__auto__)){
var style = cljs.core._nth(c__4527__auto__,i__99718);
cljs.core.chunk_append(b__99719,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__100295 = (i__99718 + (1));
i__99718 = G__100295;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__99719),sablono$core$iter__99716(cljs.core.chunk_rest(s__99717__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__99719),null);
}
} else {
var style = cljs.core.first(s__99717__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style], 0)),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__99716(cljs.core.rest(s__99717__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(styles);
}));

(sablono.core.include_css.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(sablono.core.include_css.cljs$lang$applyTo = (function (seq99714){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq99714));
}));

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to99727 = (function sablono$core$link_to99727(var_args){
var args__4742__auto__ = [];
var len__4736__auto___100308 = arguments.length;
var i__4737__auto___100309 = (0);
while(true){
if((i__4737__auto___100309 < len__4736__auto___100308)){
args__4742__auto__.push((arguments[i__4737__auto___100309]));

var G__100310 = (i__4737__auto___100309 + (1));
i__4737__auto___100309 = G__100310;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to99727.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.link_to99727.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0))], null),content], null);
}));

(sablono.core.link_to99727.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.link_to99727.cljs$lang$applyTo = (function (seq99730){
var G__99731 = cljs.core.first(seq99730);
var seq99730__$1 = cljs.core.next(seq99730);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__99731,seq99730__$1);
}));


sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to99727);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to99736 = (function sablono$core$mail_to99736(var_args){
var args__4742__auto__ = [];
var len__4736__auto___100315 = arguments.length;
var i__4737__auto___100316 = (0);
while(true){
if((i__4737__auto___100316 < len__4736__auto___100315)){
args__4742__auto__.push((arguments[i__4737__auto___100316]));

var G__100326 = (i__4737__auto___100316 + (1));
i__4737__auto___100316 = G__100326;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to99736.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.mail_to99736.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__99739){
var vec__99740 = p__99739;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99740,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4126__auto__ = content;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return e_mail;
}
})()], null);
}));

(sablono.core.mail_to99736.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.mail_to99736.cljs$lang$applyTo = (function (seq99737){
var G__99738 = cljs.core.first(seq99737);
var seq99737__$1 = cljs.core.next(seq99737);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__99738,seq99737__$1);
}));


sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to99736);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list99755 = (function sablono$core$unordered_list99755(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4529__auto__ = (function sablono$core$unordered_list99755_$_iter__99756(s__99757){
return (new cljs.core.LazySeq(null,(function (){
var s__99757__$1 = s__99757;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__99757__$1);
if(temp__5735__auto__){
var s__99757__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__99757__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__99757__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__99759 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__99758 = (0);
while(true){
if((i__99758 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__99758);
cljs.core.chunk_append(b__99759,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__100340 = (i__99758 + (1));
i__99758 = G__100340;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__99759),sablono$core$unordered_list99755_$_iter__99756(cljs.core.chunk_rest(s__99757__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__99759),null);
}
} else {
var x = cljs.core.first(s__99757__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list99755_$_iter__99756(cljs.core.rest(s__99757__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list99755);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list99760 = (function sablono$core$ordered_list99760(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4529__auto__ = (function sablono$core$ordered_list99760_$_iter__99761(s__99762){
return (new cljs.core.LazySeq(null,(function (){
var s__99762__$1 = s__99762;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__99762__$1);
if(temp__5735__auto__){
var s__99762__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__99762__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__99762__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__99764 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__99763 = (0);
while(true){
if((i__99763 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__99763);
cljs.core.chunk_append(b__99764,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__100350 = (i__99763 + (1));
i__99763 = G__100350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__99764),sablono$core$ordered_list99760_$_iter__99761(cljs.core.chunk_rest(s__99762__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__99764),null);
}
} else {
var x = cljs.core.first(s__99762__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list99760_$_iter__99761(cljs.core.rest(s__99762__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list99760);
/**
 * Create an image element.
 */
sablono.core.image99767 = (function sablono$core$image99767(var_args){
var G__99769 = arguments.length;
switch (G__99769) {
case 1:
return sablono.core.image99767.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image99767.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.image99767.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0))], null)], null);
}));

(sablono.core.image99767.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([src], 0)),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
}));

(sablono.core.image99767.cljs$lang$maxFixedArity = 2);


sablono.core.image = sablono.core.wrap_attrs(sablono.core.image99767);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__99774_SHARP_,p2__99775_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__99774_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__99775_SHARP_),"]"].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__99780_SHARP_,p2__99781_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__99780_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__99781_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__99788 = arguments.length;
switch (G__99788) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3);

/**
 * Creates a color input field.
 */
sablono.core.color_field99801 = (function sablono$core$color_field99801(var_args){
var G__99804 = arguments.length;
switch (G__99804) {
case 1:
return sablono.core.color_field99801.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field99801.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.color_field99801.cljs$core$IFn$_invoke$arity$1 = (function (name__99668__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__99668__auto__);
}));

(sablono.core.color_field99801.cljs$core$IFn$_invoke$arity$2 = (function (name__99668__auto__,value__99669__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__99668__auto__,value__99669__auto__);
}));

(sablono.core.color_field99801.cljs$lang$maxFixedArity = 2);


sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field99801);

/**
 * Creates a date input field.
 */
sablono.core.date_field99808 = (function sablono$core$date_field99808(var_args){
var G__99810 = arguments.length;
switch (G__99810) {
case 1:
return sablono.core.date_field99808.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field99808.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.date_field99808.cljs$core$IFn$_invoke$arity$1 = (function (name__99668__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__99668__auto__);
}));

(sablono.core.date_field99808.cljs$core$IFn$_invoke$arity$2 = (function (name__99668__auto__,value__99669__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__99668__auto__,value__99669__auto__);
}));

(sablono.core.date_field99808.cljs$lang$maxFixedArity = 2);


sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field99808);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field99815 = (function sablono$core$datetime_field99815(var_args){
var G__99817 = arguments.length;
switch (G__99817) {
case 1:
return sablono.core.datetime_field99815.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field99815.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_field99815.cljs$core$IFn$_invoke$arity$1 = (function (name__99668__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__99668__auto__);
}));

(sablono.core.datetime_field99815.cljs$core$IFn$_invoke$arity$2 = (function (name__99668__auto__,value__99669__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__99668__auto__,value__99669__auto__);
}));

(sablono.core.datetime_field99815.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field99815);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field99821 = (function sablono$core$datetime_local_field99821(var_args){
var G__99823 = arguments.length;
switch (G__99823) {
case 1:
return sablono.core.datetime_local_field99821.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field99821.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.datetime_local_field99821.cljs$core$IFn$_invoke$arity$1 = (function (name__99668__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__99668__auto__);
}));

(sablono.core.datetime_local_field99821.cljs$core$IFn$_invoke$arity$2 = (function (name__99668__auto__,value__99669__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__99668__auto__,value__99669__auto__);
}));

(sablono.core.datetime_local_field99821.cljs$lang$maxFixedArity = 2);


sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field99821);

/**
 * Creates a email input field.
 */
sablono.core.email_field99827 = (function sablono$core$email_field99827(var_args){
var G__99830 = arguments.length;
switch (G__99830) {
case 1:
return sablono.core.email_field99827.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field99827.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.email_field99827.cljs$core$IFn$_invoke$arity$1 = (function (name__99668__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__99668__auto__);
}));

(sablono.core.email_field99827.cljs$core$IFn$_invoke$arity$2 = (function (name__99668__auto__,value__99669__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__99668__auto__,value__99669__auto__);
}));

(sablono.core.email_field99827.cljs$lang$maxFixedArity = 2);


sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field99827);

/**
 * Creates a file input field.
 */
sablono.core.file_field99832 = (function sablono$core$file_field99832(var_args){
var G__99834 = arguments.length;
switch (G__99834) {
case 1:
return sablono.core.file_field99832.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field99832.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.file_field99832.cljs$core$IFn$_invoke$arity$1 = (function (name__99668__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__99668__auto__);
}));

(sablono.core.file_field99832.cljs$core$IFn$_invoke$arity$2 = (function (name__99668__auto__,value__99669__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__99668__auto__,value__99669__auto__);
}));

(sablono.core.file_field99832.cljs$lang$maxFixedArity = 2);


sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field99832);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field99838 = (function sablono$core$hidden_field99838(var_args){
var G__99840 = arguments.length;
switch (G__99840) {
case 1:
return sablono.core.hidden_field99838.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field99838.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.hidden_field99838.cljs$core$IFn$_invoke$arity$1 = (function (name__99668__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__99668__auto__);
}));

(sablono.core.hidden_field99838.cljs$core$IFn$_invoke$arity$2 = (function (name__99668__auto__,value__99669__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__99668__auto__,value__99669__auto__);
}));

(sablono.core.hidden_field99838.cljs$lang$maxFixedArity = 2);


sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field99838);

/**
 * Creates a month input field.
 */
sablono.core.month_field99843 = (function sablono$core$month_field99843(var_args){
var G__99845 = arguments.length;
switch (G__99845) {
case 1:
return sablono.core.month_field99843.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field99843.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.month_field99843.cljs$core$IFn$_invoke$arity$1 = (function (name__99668__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__99668__auto__);
}));

(sablono.core.month_field99843.cljs$core$IFn$_invoke$arity$2 = (function (name__99668__auto__,value__99669__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__99668__auto__,value__99669__auto__);
}));

(sablono.core.month_field99843.cljs$lang$maxFixedArity = 2);


sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field99843);

/**
 * Creates a number input field.
 */
sablono.core.number_field99849 = (function sablono$core$number_field99849(var_args){
var G__99863 = arguments.length;
switch (G__99863) {
case 1:
return sablono.core.number_field99849.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field99849.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.number_field99849.cljs$core$IFn$_invoke$arity$1 = (function (name__99668__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__99668__auto__);
}));

(sablono.core.number_field99849.cljs$core$IFn$_invoke$arity$2 = (function (name__99668__auto__,value__99669__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__99668__auto__,value__99669__auto__);
}));

(sablono.core.number_field99849.cljs$lang$maxFixedArity = 2);


sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field99849);

/**
 * Creates a password input field.
 */
sablono.core.password_field99870 = (function sablono$core$password_field99870(var_args){
var G__99874 = arguments.length;
switch (G__99874) {
case 1:
return sablono.core.password_field99870.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field99870.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.password_field99870.cljs$core$IFn$_invoke$arity$1 = (function (name__99668__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__99668__auto__);
}));

(sablono.core.password_field99870.cljs$core$IFn$_invoke$arity$2 = (function (name__99668__auto__,value__99669__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__99668__auto__,value__99669__auto__);
}));

(sablono.core.password_field99870.cljs$lang$maxFixedArity = 2);


sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field99870);

/**
 * Creates a range input field.
 */
sablono.core.range_field99880 = (function sablono$core$range_field99880(var_args){
var G__99882 = arguments.length;
switch (G__99882) {
case 1:
return sablono.core.range_field99880.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field99880.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.range_field99880.cljs$core$IFn$_invoke$arity$1 = (function (name__99668__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__99668__auto__);
}));

(sablono.core.range_field99880.cljs$core$IFn$_invoke$arity$2 = (function (name__99668__auto__,value__99669__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__99668__auto__,value__99669__auto__);
}));

(sablono.core.range_field99880.cljs$lang$maxFixedArity = 2);


sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field99880);

/**
 * Creates a search input field.
 */
sablono.core.search_field99894 = (function sablono$core$search_field99894(var_args){
var G__99902 = arguments.length;
switch (G__99902) {
case 1:
return sablono.core.search_field99894.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field99894.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.search_field99894.cljs$core$IFn$_invoke$arity$1 = (function (name__99668__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__99668__auto__);
}));

(sablono.core.search_field99894.cljs$core$IFn$_invoke$arity$2 = (function (name__99668__auto__,value__99669__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__99668__auto__,value__99669__auto__);
}));

(sablono.core.search_field99894.cljs$lang$maxFixedArity = 2);


sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field99894);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field99917 = (function sablono$core$tel_field99917(var_args){
var G__99924 = arguments.length;
switch (G__99924) {
case 1:
return sablono.core.tel_field99917.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field99917.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.tel_field99917.cljs$core$IFn$_invoke$arity$1 = (function (name__99668__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__99668__auto__);
}));

(sablono.core.tel_field99917.cljs$core$IFn$_invoke$arity$2 = (function (name__99668__auto__,value__99669__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__99668__auto__,value__99669__auto__);
}));

(sablono.core.tel_field99917.cljs$lang$maxFixedArity = 2);


sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field99917);

/**
 * Creates a text input field.
 */
sablono.core.text_field99944 = (function sablono$core$text_field99944(var_args){
var G__99948 = arguments.length;
switch (G__99948) {
case 1:
return sablono.core.text_field99944.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field99944.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_field99944.cljs$core$IFn$_invoke$arity$1 = (function (name__99668__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__99668__auto__);
}));

(sablono.core.text_field99944.cljs$core$IFn$_invoke$arity$2 = (function (name__99668__auto__,value__99669__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__99668__auto__,value__99669__auto__);
}));

(sablono.core.text_field99944.cljs$lang$maxFixedArity = 2);


sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field99944);

/**
 * Creates a time input field.
 */
sablono.core.time_field99961 = (function sablono$core$time_field99961(var_args){
var G__99966 = arguments.length;
switch (G__99966) {
case 1:
return sablono.core.time_field99961.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field99961.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.time_field99961.cljs$core$IFn$_invoke$arity$1 = (function (name__99668__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__99668__auto__);
}));

(sablono.core.time_field99961.cljs$core$IFn$_invoke$arity$2 = (function (name__99668__auto__,value__99669__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__99668__auto__,value__99669__auto__);
}));

(sablono.core.time_field99961.cljs$lang$maxFixedArity = 2);


sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field99961);

/**
 * Creates a url input field.
 */
sablono.core.url_field99984 = (function sablono$core$url_field99984(var_args){
var G__99991 = arguments.length;
switch (G__99991) {
case 1:
return sablono.core.url_field99984.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field99984.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.url_field99984.cljs$core$IFn$_invoke$arity$1 = (function (name__99668__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__99668__auto__);
}));

(sablono.core.url_field99984.cljs$core$IFn$_invoke$arity$2 = (function (name__99668__auto__,value__99669__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__99668__auto__,value__99669__auto__);
}));

(sablono.core.url_field99984.cljs$lang$maxFixedArity = 2);


sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field99984);

/**
 * Creates a week input field.
 */
sablono.core.week_field100005 = (function sablono$core$week_field100005(var_args){
var G__100016 = arguments.length;
switch (G__100016) {
case 1:
return sablono.core.week_field100005.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field100005.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.week_field100005.cljs$core$IFn$_invoke$arity$1 = (function (name__99668__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__99668__auto__);
}));

(sablono.core.week_field100005.cljs$core$IFn$_invoke$arity$2 = (function (name__99668__auto__,value__99669__auto__){
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__99668__auto__,value__99669__auto__);
}));

(sablono.core.week_field100005.cljs$lang$maxFixedArity = 2);


sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field100005);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box100032 = (function sablono$core$check_box100032(var_args){
var G__100039 = arguments.length;
switch (G__100039) {
case 1:
return sablono.core.check_box100032.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box100032.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box100032.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.check_box100032.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.check_box100032.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box100032.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.check_box100032.cljs$lang$maxFixedArity = 3);


sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box100032);
/**
 * Creates a radio button.
 */
sablono.core.radio_button100057 = (function sablono$core$radio_button100057(var_args){
var G__100064 = arguments.length;
switch (G__100064) {
case 1:
return sablono.core.radio_button100057.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button100057.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button100057.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.radio_button100057.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)))], null)], null);
}));

(sablono.core.radio_button100057.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0))),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button100057.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id([sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([group], 0)),"-",sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
}));

(sablono.core.radio_button100057.cljs$lang$maxFixedArity = 3);


sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button100057);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0)));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options100081 = (function sablono$core$select_options100081(coll){
var iter__4529__auto__ = (function sablono$core$select_options100081_$_iter__100087(s__100088){
return (new cljs.core.LazySeq(null,(function (){
var s__100088__$1 = s__100088;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__100088__$1);
if(temp__5735__auto__){
var s__100088__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__100088__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__100088__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__100090 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__100089 = (0);
while(true){
if((i__100089 < size__4528__auto__)){
var x = cljs.core._nth(c__4527__auto__,i__100089);
cljs.core.chunk_append(b__100090,((cljs.core.sequential_QMARK_(x))?(function (){var vec__100098 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100098,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100098,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100098,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options100081.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options100081.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options100081.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__100596 = (i__100089 + (1));
i__100089 = G__100596;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__100090),sablono$core$select_options100081_$_iter__100087(cljs.core.chunk_rest(s__100088__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__100090),null);
}
} else {
var x = cljs.core.first(s__100088__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__100116 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100116,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100116,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100116,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),(sablono.core.select_options100081.cljs$core$IFn$_invoke$arity$1 ? sablono.core.select_options100081.cljs$core$IFn$_invoke$arity$1(val) : sablono.core.select_options100081.call(null,val))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key(x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options100081_$_iter__100087(cljs.core.rest(s__100088__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options100081);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down100132 = (function sablono$core$drop_down100132(var_args){
var G__100137 = arguments.length;
switch (G__100137) {
case 2:
return sablono.core.drop_down100132.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down100132.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.drop_down100132.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down100132.cljs$core$IFn$_invoke$arity$3(name,options,null);
}));

(sablono.core.drop_down100132.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null),sablono.core.select_options(options,selected)], null);
}));

(sablono.core.drop_down100132.cljs$lang$maxFixedArity = 3);


sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down100132);
/**
 * Creates a text area element.
 */
sablono.core.text_area100154 = (function sablono$core$text_area100154(var_args){
var G__100158 = arguments.length;
switch (G__100158) {
case 1:
return sablono.core.text_area100154.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area100154.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(sablono.core.text_area100154.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name)], null)], null);
}));

(sablono.core.text_area100154.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name(name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id(name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4126__auto__ = value;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return undefined;
}
})()], null)], null);
}));

(sablono.core.text_area100154.cljs$lang$maxFixedArity = 2);


sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area100154);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label100173 = (function sablono$core$label100173(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label100173);
/**
 * Creates a submit button.
 */
sablono.core.submit_button100184 = (function sablono$core$submit_button100184(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button100184);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button100186 = (function sablono$core$reset_button100186(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button100186);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to100205 = (function sablono$core$form_to100205(var_args){
var args__4742__auto__ = [];
var len__4736__auto___100622 = arguments.length;
var i__4737__auto___100623 = (0);
while(true){
if((i__4737__auto___100623 < len__4736__auto___100622)){
args__4742__auto__.push((arguments[i__4737__auto___100623]));

var G__100624 = (i__4737__auto___100623 + (1));
i__4737__auto___100623 = G__100624;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to100205.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(sablono.core.form_to100205.cljs$core$IFn$_invoke$arity$variadic = (function (p__100228,body){
var vec__100232 = p__100228;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100232,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__100232,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
}));

(sablono.core.form_to100205.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(sablono.core.form_to100205.cljs$lang$applyTo = (function (seq100210){
var G__100211 = cljs.core.first(seq100210);
var seq100210__$1 = cljs.core.next(seq100210);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__100211,seq100210__$1);
}));


sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to100205);

//# sourceMappingURL=sablono.core.js.map
