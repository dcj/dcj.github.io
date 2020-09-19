goog.provide('browjure.state');
var module$node_modules$rxjs$dist$cjs$index=shadow.js.require("module$node_modules$rxjs$dist$cjs$index", {});
var module$node_modules$rxjs$dist$cjs$operators$index=shadow.js.require("module$node_modules$rxjs$dist$cjs$operators$index", {});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
browjure.state.registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
browjure.state.combined_values = (function browjure$state$combined_values(ident){
var dataset = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(browjure.state.registry),ident);
var controls = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(browjure.state.registry),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ident,new cljs.core.Keyword("dataset","controls","dataset/controls",-1981558636)));
var keyz = cljs.core.keys(controls);
var valz = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"subject","subject",-1411880451),cljs.core.vals(controls));
var deps = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__99692){
var vec__99693 = p__99692;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99693,(0),null);
var vec__99696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99693,(1),null);
var dataset__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99696,(0),null);
var attribute = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99696,(1),null);
var dep_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dataset","id","dataset/id",1129473468),dataset__$1], null),(cljs.core.truth_(attribute)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dataset","controls","dataset/controls",-1981558636),attribute], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subject","subject",-1411880451)], null)], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(browjure.state.registry),dep_path)], null);
}),new cljs.core.Keyword("dataset","dependencies","dataset/dependencies",2019679717).cljs$core$IFn$_invoke$arity$1(dataset)));
return module$node_modules$rxjs$dist$cjs$index.combineLatest(cljs.core.to_array(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(valz,cljs.core.vals(deps)))).pipe(module$node_modules$rxjs$dist$cjs$operators$index.map((function (vals){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(keyz,cljs.core.keys(deps)),vals));
})));
});
browjure.state.init_leaf = (function browjure$state$init_leaf(path,init_val){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(browjure.state.registry,cljs.core.assoc_in,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"subject","subject",-1411880451)),(new module$node_modules$rxjs$dist$cjs$index.BehaviorSubject(init_val)));

return console.log("register",cljs.core.deref(browjure.state.registry));
});
browjure.state.get_or_create_subject = (function browjure$state$get_or_create_subject(path,init_value){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(browjure.state.registry),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"subject","subject",-1411880451))))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(browjure.state.registry),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"subject","subject",-1411880451)));
} else {
browjure.state.init_leaf(path,init_value);

return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(browjure.state.registry),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,new cljs.core.Keyword(null,"subject","subject",-1411880451)));
}
});
browjure.state.use_path_sub = (function browjure$state$use_path_sub(path,init_value){
var subject = browjure.state.get_or_create_subject(path,init_value);
var vec__99720 = module$node_modules$react$index.useState(init_value);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99720,(0),null);
var set_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99720,(1),null);
module$node_modules$react$index.useEffect((function (){
subject.subscribe(set_state);

return (function (){
return null;
});
}),[init_value]);

return state;
});
browjure.state.set_path_value = (function browjure$state$set_path_value(path,value){
return browjure.state.get_or_create_subject(path,value).next(value);
});
browjure.state.use_combined_sub = (function browjure$state$use_combined_sub(p__99723){
var map__99725 = p__99723;
var map__99725__$1 = (((((!((map__99725 == null))))?(((((map__99725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__99725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__99725):map__99725);
var deps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99725__$1,new cljs.core.Keyword(null,"deps","deps",1883360319));
var reduce_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99725__$1,new cljs.core.Keyword(null,"reduce-fn","reduce-fn",1170414925));
var init_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99725__$1,new cljs.core.Keyword(null,"init-value","init-value",-374892331));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__99725__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var value = browjure.state.use_path_sub(path,init_value);
var dep_subjects = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__99732){
var vec__99733 = p__99732;
var dep_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99733,(0),null);
var dep_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__99733,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dep_name,browjure.state.get_or_create_subject(dep_path,null)], null);
}),deps));
var latest_combinations = module$node_modules$rxjs$dist$cjs$index.combineLatest(cljs.core.to_array(cljs.core.vals(dep_subjects))).pipe(module$node_modules$rxjs$dist$cjs$operators$index.map((function (new_vals){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.keys(deps),new_vals));
})));
module$node_modules$react$index.useEffect((function (){
var sub = latest_combinations.subscribe((function (combined_values){
console.log("combined values",combined_values);

return browjure.state.set_path_value(path,(reduce_fn.cljs$core$IFn$_invoke$arity$1 ? reduce_fn.cljs$core$IFn$_invoke$arity$1(combined_values) : reduce_fn.call(null,combined_values)));
}));
return (function (){
return sub.unsubscribe();
});
}),[(1)]);

return value;
});

//# sourceMappingURL=browjure.state.js.map
