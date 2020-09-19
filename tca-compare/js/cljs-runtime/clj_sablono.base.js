goog.provide('clj_sablono.base');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
clj_sablono.base.handler = (function clj_sablono$base$handler(p__100314){
var map__100317 = p__100314;
var map__100317__$1 = (((((!((map__100317 == null))))?(((((map__100317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__100317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__100317):map__100317);
var command = map__100317__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100317__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100317__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var payload = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__100317__$1,new cljs.core.Keyword(null,"payload","payload",-383036092));
console.log("sablono base handler",command);

return module$node_modules$react_dom$index.render(sablono.interpreter.interpret(payload),document.getElementById("app"));
});

//# sourceMappingURL=clj_sablono.base.js.map
