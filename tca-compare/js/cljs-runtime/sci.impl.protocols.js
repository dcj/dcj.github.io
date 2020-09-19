goog.provide('sci.impl.protocols');
sci.impl.protocols.defprotocol = (function sci$impl$protocols$defprotocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___107028 = arguments.length;
var i__4737__auto___107029 = (0);
while(true){
if((i__4737__auto___107029 < len__4736__auto___107028)){
args__4742__auto__.push((arguments[i__4737__auto___107029]));

var G__107030 = (i__4737__auto___107029 + (1));
i__4737__auto___107029 = G__107030;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.defprotocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,protocol_name,signatures){
var vec__106649 = (function (){var sig = cljs.core.first(signatures);
if(typeof sig === 'string'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig,cljs.core.rest(signatures)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures], null);
}
})();
var docstring = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106649,(0),null);
var signatures__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106649,(1),null);
var vec__106652 = (function (){var opt = cljs.core.first(signatures__$1);
if((opt instanceof cljs.core.Keyword)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.createAsIfByAssoc([opt,cljs.core.second(signatures__$1)]),cljs.core.nnext(signatures__$1)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,signatures__$1], null);
}
})();
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106652,(0),null);
var signatures__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106652,(1),null);
var current_ns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.current_ns_name());
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,cljs.core.with_meta(protocol_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"doc","doc",1913296891),docstring], null)),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$0()))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"ns","ns",441598760),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","*ns*","cljs.core/*ns*",1155497085,null),null,(1),null))], 0))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__106668){
var vec__106670 = p__106668;
var seq__106671 = cljs.core.seq(vec__106670);
var first__106672 = cljs.core.first(seq__106671);
var seq__106671__$1 = cljs.core.next(seq__106671);
var method_name = first__106672;
var ___$2 = seq__106671__$1;
var fq_name = cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(current_ns,cljs.core.str.cljs$core$IFn$_invoke$arity$1(method_name));
var impls = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmulti","cljs.core/defmulti",723984225,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null))], 0)))),cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword("sci.impl.protocols","reified","sci.impl.protocols/reified",-2019939396),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__106623__auto__","x__106623__auto__",-1209295719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__106624__auto__","args__106624__auto__",-1281228279,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"methods__106625__auto__","methods__106625__auto__",-662484426,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified-methods","cljs.core/-reified-methods",-1833109469,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__106623__auto__","x__106623__auto__",-1209295719,null),null,(1),null))))),null,(1),null)))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"methods__106625__auto__","methods__106625__auto__",-662484426,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__106623__auto__","x__106623__auto__",-1209295719,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__106624__auto__","args__106624__auto__",-1281228279,null),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))], null);
var impls__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"extend-via-metadata","extend-via-metadata",-427346794).cljs$core$IFn$_invoke$arity$1(opts))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(impls,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"x__106631__auto__","x__106631__auto__",1954099995,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"&","&",-2144855648,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"args__106632__auto__","args__106632__auto__",-887947688,null),null,(1),null))], 0))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"meta__106633__auto__","meta__106633__auto__",-1102933011,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","meta","cljs.core/meta",-748218346,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__106631__auto__","x__106631__auto__",1954099995,null),null,(1),null))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"method__106634__auto__","method__106634__auto__",1609052357,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","get","cljs.core/get",-296075407,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"meta__106633__auto__","meta__106633__auto__",-1102933011,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,fq_name,null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0))))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"if","if",1181717262,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__106634__auto__","method__106634__auto__",1609052357,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","apply","cljs.core/apply",1757277831,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"method__106634__auto__","method__106634__auto__",1609052357,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Symbol(null,"x__106631__auto__","x__106631__auto__",1954099995,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"args__106632__auto__","args__106632__auto__",-887947688,null),null,(1),null))], 0)))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"throw","throw",595905694,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"new","new",-444906321,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("js","Error","js/Error",-1692659266,null),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","str","cljs.core/str",-1971828991,null),null,(1),null)),(new cljs.core.List(null,"No implementation of method: ",null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(method_name),null,(1),null)),(new cljs.core.List(null," of protocol: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"var","var",870848730,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null))))),null,(1),null)),(new cljs.core.List(null," found for: ",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","protocol-type-impl","cljs.core/protocol-type-impl",155177701,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"x__106631__auto__","x__106631__auto__",1954099995,null),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))))),null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))))):impls);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),impls__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol(null,"def","def",597100991,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","update","cljs.core/update",-908565906,null),null,(1),null)),(new cljs.core.List(null,protocol_name,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,new cljs.core.Keyword(null,"methods","methods",453930866),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","conj","cljs.core/conj",-460750931,null),null,(1),null)),(new cljs.core.List(null,method_name,null,(1),null))], 0)))),null,(1),null))], 0)))),null,(1),null))], 0))));
}),signatures__$2)], 0))));
return expansion;
}));

(sci.impl.protocols.defprotocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.defprotocol.cljs$lang$applyTo = (function (seq106637){
var G__106638 = cljs.core.first(seq106637);
var seq106637__$1 = cljs.core.next(seq106637);
var G__106639 = cljs.core.first(seq106637__$1);
var seq106637__$2 = cljs.core.next(seq106637__$1);
var G__106640 = cljs.core.first(seq106637__$2);
var seq106637__$3 = cljs.core.next(seq106637__$2);
var G__106641 = cljs.core.first(seq106637__$3);
var seq106637__$4 = cljs.core.next(seq106637__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__106638,G__106639,G__106640,G__106641,seq106637__$4);
}));

sci.impl.protocols.extend_protocol = (function sci$impl$protocols$extend_protocol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___107053 = arguments.length;
var i__4737__auto___107054 = (0);
while(true){
if((i__4737__auto___107054 < len__4736__auto___107053)){
args__4742__auto__.push((arguments[i__4737__auto___107054]));

var G__107057 = (i__4737__auto___107054 + (1));
i__4737__auto___107054 = G__107057;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_protocol.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,protocol_name,impls){
var impls__$1 = sci.impl.utils.split_when((function (p1__106715_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__106715_SHARP_)));
}),impls);
var protocol_var = (function (){var fexpr__106743 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__106743.cljs$core$IFn$_invoke$arity$2 ? fexpr__106743.cljs$core$IFn$_invoke$arity$2(ctx,protocol_name) : fexpr__106743.call(null,ctx,protocol_name));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__106716_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__106716_SHARP_);
});
var expansion = cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__106749){
var vec__106751 = p__106749;
var seq__106752 = cljs.core.seq(vec__106751);
var first__106753 = cljs.core.first(seq__106752);
var seq__106752__$1 = cljs.core.next(seq__106752);
var type = first__106753;
var meths = seq__106752__$1;
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),impls__$1))));
return expansion;
}));

(sci.impl.protocols.extend_protocol.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_protocol.cljs$lang$applyTo = (function (seq106722){
var G__106723 = cljs.core.first(seq106722);
var seq106722__$1 = cljs.core.next(seq106722);
var G__106724 = cljs.core.first(seq106722__$1);
var seq106722__$2 = cljs.core.next(seq106722__$1);
var G__106725 = cljs.core.first(seq106722__$2);
var seq106722__$3 = cljs.core.next(seq106722__$2);
var G__106726 = cljs.core.first(seq106722__$3);
var seq106722__$4 = cljs.core.next(seq106722__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__106723,G__106724,G__106725,G__106726,seq106722__$4);
}));

sci.impl.protocols.extend = (function sci$impl$protocols$extend(var_args){
var args__4742__auto__ = [];
var len__4736__auto___107078 = arguments.length;
var i__4737__auto___107079 = (0);
while(true){
if((i__4737__auto___107079 < len__4736__auto___107078)){
args__4742__auto__.push((arguments[i__4737__auto___107079]));

var G__107080 = (i__4737__auto___107079 + (1));
i__4737__auto___107079 = G__107080;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,atype,proto_PLUS_mmaps){
var seq__106782 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),proto_PLUS_mmaps));
var chunk__106784 = null;
var count__106785 = (0);
var i__106786 = (0);
while(true){
if((i__106786 < count__106785)){
var vec__106860 = chunk__106784.cljs$core$IIndexed$_nth$arity$2(null,i__106786);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106860,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106860,(1),null);
var proto_ns_107085 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_107086 = sci.impl.vars.getName(proto_ns_107085);
var seq__106865_107087 = cljs.core.seq(mmap);
var chunk__106866_107088 = null;
var count__106867_107089 = (0);
var i__106868_107090 = (0);
while(true){
if((i__106868_107090 < count__106867_107089)){
var vec__106881_107093 = chunk__106866_107088.cljs$core$IIndexed$_nth$arity$2(null,i__106868_107090);
var fn_name_107094 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106881_107093,(0),null);
var f_107095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106881_107093,(1),null);
var fn_sym_107098 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_107094));
var env_107099 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_107100 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_107099,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_107086,fn_sym_107098], null));
var multi_method_107101 = cljs.core.deref(multi_method_var_107100);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_107101,atype,f_107095);


var G__107105 = seq__106865_107087;
var G__107106 = chunk__106866_107088;
var G__107107 = count__106867_107089;
var G__107108 = (i__106868_107090 + (1));
seq__106865_107087 = G__107105;
chunk__106866_107088 = G__107106;
count__106867_107089 = G__107107;
i__106868_107090 = G__107108;
continue;
} else {
var temp__5735__auto___107112 = cljs.core.seq(seq__106865_107087);
if(temp__5735__auto___107112){
var seq__106865_107114__$1 = temp__5735__auto___107112;
if(cljs.core.chunked_seq_QMARK_(seq__106865_107114__$1)){
var c__4556__auto___107115 = cljs.core.chunk_first(seq__106865_107114__$1);
var G__107116 = cljs.core.chunk_rest(seq__106865_107114__$1);
var G__107117 = c__4556__auto___107115;
var G__107118 = cljs.core.count(c__4556__auto___107115);
var G__107119 = (0);
seq__106865_107087 = G__107116;
chunk__106866_107088 = G__107117;
count__106867_107089 = G__107118;
i__106868_107090 = G__107119;
continue;
} else {
var vec__106887_107120 = cljs.core.first(seq__106865_107114__$1);
var fn_name_107121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106887_107120,(0),null);
var f_107122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106887_107120,(1),null);
var fn_sym_107124 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_107121));
var env_107125 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_107126 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_107125,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_107086,fn_sym_107124], null));
var multi_method_107127 = cljs.core.deref(multi_method_var_107126);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_107127,atype,f_107122);


var G__107132 = cljs.core.next(seq__106865_107114__$1);
var G__107133 = null;
var G__107134 = (0);
var G__107135 = (0);
seq__106865_107087 = G__107132;
chunk__106866_107088 = G__107133;
count__106867_107089 = G__107134;
i__106868_107090 = G__107135;
continue;
}
} else {
}
}
break;
}


var G__107137 = seq__106782;
var G__107138 = chunk__106784;
var G__107139 = count__106785;
var G__107140 = (i__106786 + (1));
seq__106782 = G__107137;
chunk__106784 = G__107138;
count__106785 = G__107139;
i__106786 = G__107140;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__106782);
if(temp__5735__auto__){
var seq__106782__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__106782__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__106782__$1);
var G__107144 = cljs.core.chunk_rest(seq__106782__$1);
var G__107145 = c__4556__auto__;
var G__107146 = cljs.core.count(c__4556__auto__);
var G__107147 = (0);
seq__106782 = G__107144;
chunk__106784 = G__107145;
count__106785 = G__107146;
i__106786 = G__107147;
continue;
} else {
var vec__106900 = cljs.core.first(seq__106782__$1);
var proto = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106900,(0),null);
var mmap = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106900,(1),null);
var proto_ns_107148 = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(proto);
var pns_107149 = sci.impl.vars.getName(proto_ns_107148);
var seq__106903_107150 = cljs.core.seq(mmap);
var chunk__106904_107151 = null;
var count__106905_107152 = (0);
var i__106906_107153 = (0);
while(true){
if((i__106906_107153 < count__106905_107152)){
var vec__106936_107155 = chunk__106904_107151.cljs$core$IIndexed$_nth$arity$2(null,i__106906_107153);
var fn_name_107156 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106936_107155,(0),null);
var f_107157 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106936_107155,(1),null);
var fn_sym_107160 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_107156));
var env_107161 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_107162 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_107161,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_107149,fn_sym_107160], null));
var multi_method_107163 = cljs.core.deref(multi_method_var_107162);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_107163,atype,f_107157);


var G__107167 = seq__106903_107150;
var G__107168 = chunk__106904_107151;
var G__107169 = count__106905_107152;
var G__107170 = (i__106906_107153 + (1));
seq__106903_107150 = G__107167;
chunk__106904_107151 = G__107168;
count__106905_107152 = G__107169;
i__106906_107153 = G__107170;
continue;
} else {
var temp__5735__auto___107172__$1 = cljs.core.seq(seq__106903_107150);
if(temp__5735__auto___107172__$1){
var seq__106903_107173__$1 = temp__5735__auto___107172__$1;
if(cljs.core.chunked_seq_QMARK_(seq__106903_107173__$1)){
var c__4556__auto___107174 = cljs.core.chunk_first(seq__106903_107173__$1);
var G__107176 = cljs.core.chunk_rest(seq__106903_107173__$1);
var G__107177 = c__4556__auto___107174;
var G__107178 = cljs.core.count(c__4556__auto___107174);
var G__107179 = (0);
seq__106903_107150 = G__107176;
chunk__106904_107151 = G__107177;
count__106905_107152 = G__107178;
i__106906_107153 = G__107179;
continue;
} else {
var vec__106949_107180 = cljs.core.first(seq__106903_107173__$1);
var fn_name_107181 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106949_107180,(0),null);
var f_107182 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__106949_107180,(1),null);
var fn_sym_107183 = cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.name(fn_name_107181));
var env_107184 = cljs.core.deref(new cljs.core.Keyword(null,"env","env",-1815813235).cljs$core$IFn$_invoke$arity$1(ctx));
var multi_method_var_107185 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(env_107184,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespaces","namespaces",-1444157469),pns_107149,fn_sym_107183], null));
var multi_method_107186 = cljs.core.deref(multi_method_var_107185);
sci.impl.multimethods.multi_fn_add_method_impl(multi_method_107186,atype,f_107182);


var G__107193 = cljs.core.next(seq__106903_107173__$1);
var G__107194 = null;
var G__107195 = (0);
var G__107196 = (0);
seq__106903_107150 = G__107193;
chunk__106904_107151 = G__107194;
count__106905_107152 = G__107195;
i__106906_107153 = G__107196;
continue;
}
} else {
}
}
break;
}


var G__107198 = cljs.core.next(seq__106782__$1);
var G__107199 = null;
var G__107200 = (0);
var G__107201 = (0);
seq__106782 = G__107198;
chunk__106784 = G__107199;
count__106785 = G__107200;
i__106786 = G__107201;
continue;
}
} else {
return null;
}
}
break;
}
}));

(sci.impl.protocols.extend.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(sci.impl.protocols.extend.cljs$lang$applyTo = (function (seq106773){
var G__106774 = cljs.core.first(seq106773);
var seq106773__$1 = cljs.core.next(seq106773);
var G__106775 = cljs.core.first(seq106773__$1);
var seq106773__$2 = cljs.core.next(seq106773__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__106774,G__106775,seq106773__$2);
}));

sci.impl.protocols.extend_type = (function sci$impl$protocols$extend_type(var_args){
var args__4742__auto__ = [];
var len__4736__auto___107208 = arguments.length;
var i__4737__auto___107209 = (0);
while(true){
if((i__4737__auto___107209 < len__4736__auto___107208)){
args__4742__auto__.push((arguments[i__4737__auto___107209]));

var G__107211 = (i__4737__auto___107209 + (1));
i__4737__auto___107209 = G__107211;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.extend_type.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,ctx,type,proto_PLUS_meths){
var proto_PLUS_meths__$1 = sci.impl.utils.split_when((function (p1__106956_SHARP_){
return (!(cljs.core.seq_QMARK_(p1__106956_SHARP_)));
}),proto_PLUS_meths);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__106973){
var vec__106975 = p__106973;
var seq__106976 = cljs.core.seq(vec__106975);
var first__106977 = cljs.core.first(seq__106976);
var seq__106976__$1 = cljs.core.next(seq__106976);
var proto = first__106977;
var meths = seq__106976__$1;
var protocol_var = (function (){var fexpr__106980 = cljs.core.deref(sci.impl.utils.eval_resolve_state);
return (fexpr__106980.cljs$core$IFn$_invoke$arity$2 ? fexpr__106980.cljs$core$IFn$_invoke$arity$2(ctx,proto) : fexpr__106980.call(null,ctx,proto));
})();
var protocol_ns = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(protocol_var));
var pns = cljs.core.str.cljs$core$IFn$_invoke$arity$1(sci.impl.vars.getName(protocol_ns));
var fq_meth_name = (function (p1__106957_SHARP_){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(pns,p1__106957_SHARP_);
});
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"do","do",1686842252,null),null,(1),null)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","defmethod","cljs.core/defmethod",-180785162,null),null,(1),null)),(new cljs.core.List(null,fq_meth_name(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(meth))),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,type,null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.nnext(meth)], 0))));
}),meths))));
}),proto_PLUS_meths__$1))));
}));

(sci.impl.protocols.extend_type.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.extend_type.cljs$lang$applyTo = (function (seq106959){
var G__106960 = cljs.core.first(seq106959);
var seq106959__$1 = cljs.core.next(seq106959);
var G__106961 = cljs.core.first(seq106959__$1);
var seq106959__$2 = cljs.core.next(seq106959__$1);
var G__106962 = cljs.core.first(seq106959__$2);
var seq106959__$3 = cljs.core.next(seq106959__$2);
var G__106963 = cljs.core.first(seq106959__$3);
var seq106959__$4 = cljs.core.next(seq106959__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__106960,G__106961,G__106962,G__106963,seq106959__$4);
}));

sci.impl.protocols.reify = (function sci$impl$protocols$reify(var_args){
var args__4742__auto__ = [];
var len__4736__auto___107241 = arguments.length;
var i__4737__auto___107242 = (0);
while(true){
if((i__4737__auto___107242 < len__4736__auto___107241)){
args__4742__auto__.push((arguments[i__4737__auto___107242]));

var G__107243 = (i__4737__auto___107242 + (1));
i__4737__auto___107242 = G__107243;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return sci.impl.protocols.reify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(sci.impl.protocols.reify.cljs$core$IFn$_invoke$arity$variadic = (function (_,___$1,_ctx,interface$,meths){
var meths__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (meth){
return cljs.core.vec(cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,cljs.core.first(meth),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),null,(1),null)),(new cljs.core.List(null,cljs.core.second(meth),null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.nnext(meth)], 0)))),null,(1),null))))));
}),meths));
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((new cljs.core.List(null,new cljs.core.Symbol("cljs.core","-reified","cljs.core/-reified",-1831583173,null),null,(1),null)),(new cljs.core.List(null,interface$,null,(1),null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(new cljs.core.List(null,meths__$1,null,(1),null))], 0))));
}));

(sci.impl.protocols.reify.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(sci.impl.protocols.reify.cljs$lang$applyTo = (function (seq106993){
var G__106994 = cljs.core.first(seq106993);
var seq106993__$1 = cljs.core.next(seq106993);
var G__106995 = cljs.core.first(seq106993__$1);
var seq106993__$2 = cljs.core.next(seq106993__$1);
var G__106996 = cljs.core.first(seq106993__$2);
var seq106993__$3 = cljs.core.next(seq106993__$2);
var G__106997 = cljs.core.first(seq106993__$3);
var seq106993__$4 = cljs.core.next(seq106993__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__106994,G__106995,G__106996,G__106997,seq106993__$4);
}));

sci.impl.protocols.satisfies_QMARK_ = (function sci$impl$protocols$satisfies_QMARK_(protocol,obj){
return cljs.core.boolean$(cljs.core.some((function (p1__107020_SHARP_){
return cljs.core.get_method(p1__107020_SHARP_,sci.impl.types.type_impl(obj));
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});
/**
 * Returns true if atype extends protocol
 */
sci.impl.protocols.extends_QMARK_ = (function sci$impl$protocols$extends_QMARK_(protocol,atype){
return cljs.core.boolean$(cljs.core.some((function (p1__107024_SHARP_){
return cljs.core.get_method(p1__107024_SHARP_,atype);
}),new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(protocol)));
});

//# sourceMappingURL=sci.impl.protocols.js.map
