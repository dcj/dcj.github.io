goog.provide('browjure.base');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
if((typeof browjure !== 'undefined') && (typeof browjure.base !== 'undefined') && (typeof browjure.base.router_ !== 'undefined')){
} else {
browjure.base.router_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
browjure.base.stop_router_BANG_ = (function browjure$base$stop_router_BANG_(){
var temp__5735__auto__ = cljs.core.deref(browjure.base.router_);
if(cljs.core.truth_(temp__5735__auto__)){
var stop_f = temp__5735__auto__;
return (stop_f.cljs$core$IFn$_invoke$arity$0 ? stop_f.cljs$core$IFn$_invoke$arity$0() : stop_f.call(null));
} else {
return null;
}
});
browjure.base._QMARK_csrf_token = (function (){var temp__5735__auto__ = document.getElementById("sente-csrf-token");
if(cljs.core.truth_(temp__5735__auto__)){
var el = temp__5735__auto__;
return el.getAttribute("data-csrf-token");
} else {
return null;
}
})();
var packer_110552 = taoensso.sente.packers.transit.get_transit_packer.cljs$core$IFn$_invoke$arity$0();
var map__110326_110553 = taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic("/chsk",browjure.base._QMARK_csrf_token,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),browjure.base._QMARK_csrf_token,new cljs.core.Keyword(null,"packer","packer",66077544),packer_110552], null)], 0));
var map__110326_110554__$1 = (((((!((map__110326_110553 == null))))?(((((map__110326_110553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110326_110553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110326_110553):map__110326_110553);
var chsk_110555 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110326_110554__$1,new cljs.core.Keyword(null,"chsk","chsk",-863703081));
var ch_recv_110556 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110326_110554__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn_110557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110326_110554__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state_110558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110326_110554__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
browjure.base.chsk = chsk_110555;

browjure.base.ch_chsk = ch_recv_110556;

browjure.base.chsk_send_BANG_ = send_fn_110557;

browjure.base.chsk_state = state_110558;

browjure.base.control_component = (function (){var G__110336 = (function browjure$base$control_component(props__105483__auto__,maybe_ref__105484__auto__){
var vec__110337 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [helix.core.extract_cljs_props(props__105483__auto__),maybe_ref__105484__auto__], null);
var map__110340 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110337,(0),null);
var map__110340__$1 = (((((!((map__110340 == null))))?(((((map__110340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__110340.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__110340):map__110340);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110340__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110340__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110340__$1,new cljs.core.Keyword(null,"value","value",305978217));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110340__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var onChange = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__110340__$1,new cljs.core.Keyword(null,"onChange","onChange",-312891301));

var on_change = sci.core.eval_string.cljs$core$IFn$_invoke$arity$2(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(onChange["rep"])], 0)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Symbol("js","console.log","js/console.log",-2005248266,null),console.log,new cljs.core.Symbol("js","document","js/document",311343521,null),document], null),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow","allow",-1857325745),new cljs.core.Keyword(null,"all","all",892129742)], null)], null));
var values = browjure.state.use_path_sub(path,value);
var G__110345 = type;
switch (G__110345) {
case "edn-multi-checkbox":
return helix.core.get_react().createElement("div",(function (){var obj110513 = ({"style":helix.impl.props.primitive_obj.cljs$core$IFn$_invoke$arity$1(style)});
return obj110513;
})(),(function (){var iter__4529__auto__ = (function browjure$base$control_component_$_iter__110514(s__110515){
return (new cljs.core.LazySeq(null,(function (){
var s__110515__$1 = s__110515;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__110515__$1);
if(temp__5735__auto__){
var s__110515__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__110515__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__110515__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__110517 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__110516 = (0);
while(true){
if((i__110516 < size__4528__auto__)){
var vec__110518 = cljs.core._nth(c__4527__auto__,i__110516);
var control_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110518,(0),null);
var control_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110518,(1),null);
cljs.core.chunk_append(b__110517,helix.core.get_react().createElement("label",(function (){var obj110522 = ({"key":control_name});
return obj110522;
})(),control_name,helix.core.get_react().createElement("input",(function (){var obj110524 = ({"type":"checkbox","checked":control_val,"onChange":((function (i__110516,vec__110518,control_name,control_val,c__4527__auto__,size__4528__auto__,b__110517,s__110515__$2,temp__5735__auto__,G__110345,on_change,values,vec__110337,map__110340,map__110340__$1,type,path,value,style,onChange){
return (function (e){
var new_values = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(values,control_name,e.target.checked);
browjure.state.set_path_value(path,new_values);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_values) : on_change.call(null,new_values));
});})(i__110516,vec__110518,control_name,control_val,c__4527__auto__,size__4528__auto__,b__110517,s__110515__$2,temp__5735__auto__,G__110345,on_change,values,vec__110337,map__110340,map__110340__$1,type,path,value,style,onChange))
});
return obj110524;
})())));

var G__110560 = (i__110516 + (1));
i__110516 = G__110560;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__110517),browjure$base$control_component_$_iter__110514(cljs.core.chunk_rest(s__110515__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__110517),null);
}
} else {
var vec__110525 = cljs.core.first(s__110515__$2);
var control_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110525,(0),null);
var control_val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110525,(1),null);
return cljs.core.cons(helix.core.get_react().createElement("label",(function (){var obj110529 = ({"key":control_name});
return obj110529;
})(),control_name,helix.core.get_react().createElement("input",(function (){var obj110531 = ({"type":"checkbox","checked":control_val,"onChange":((function (vec__110525,control_name,control_val,s__110515__$2,temp__5735__auto__,G__110345,on_change,values,vec__110337,map__110340,map__110340__$1,type,path,value,style,onChange){
return (function (e){
var new_values = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(values,control_name,e.target.checked);
browjure.state.set_path_value(path,new_values);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_values) : on_change.call(null,new_values));
});})(vec__110525,control_name,control_val,s__110515__$2,temp__5735__auto__,G__110345,on_change,values,vec__110337,map__110340,map__110340__$1,type,path,value,style,onChange))
});
return obj110531;
})())),browjure$base$control_component_$_iter__110514(cljs.core.rest(s__110515__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(values);
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__110345)].join('')));

}
});
if(goog.DEBUG === true){
var G__110532 = G__110336;
goog.object.set(G__110532,"displayName","browjure.base/control-component");

return G__110532;
} else {
return G__110336;
}
})();



browjure.base.hiccup_registry = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("browjure","control","browjure/control",-1708403734),new cljs.core.Symbol("browjure.base","control-component","browjure.base/control-component",1525218894,null)], null));
browjure.base.window_resolve = (function browjure$base$window_resolve(symbol){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__110533_SHARP_,p2__110534_SHARP_){
return (p1__110533_SHARP_[p2__110534_SHARP_]);
}),window,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(cljs.core.namespace(symbol),"-","_"),"."),clojure.string.replace(cljs.core.name(symbol),"-","_")));
});
browjure.base.connected = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
browjure.base.handle_command = (function browjure$base$handle_command(command){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"register-plugin","register-plugin",1705269136),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(command))){
cljs.core.reset_BANG_(browjure.base.connected,true);
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"register-plugin","register-plugin",1705269136),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(command))){
document.head.append((function (){var G__110537 = document.createElement("script");
G__110537.setAttribute("type","text/javascript");

G__110537.setAttribute("src",new cljs.core.Keyword(null,"base-path","base-path",495760020).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(command)));

return G__110537;
})());

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(browjure.base.hiccup_registry,cljs.core.merge,new cljs.core.Keyword(null,"hiccup-tag->factory-symbol","hiccup-tag->factory-symbol",2002770270).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"sablono","sablono",-1448501015).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(command))));

var id = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(command));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(command));
}
})();
return setTimeout((function (){
console.log("calling base handler with register plugin command",id,command);

var fexpr__110538 = (((window[clojure.string.replace(id,"-","_")])["base"])["handler"]);
return (fexpr__110538.cljs$core$IFn$_invoke$arity$1 ? fexpr__110538.cljs$core$IFn$_invoke$arity$1(command) : fexpr__110538.call(null,command));
}),(1000));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"view-sablono","view-sablono",1410763305),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(command))){
var react_componentized = clojure.walk.postwalk((function (p1__110535_SHARP_){
if(((cljs.core.vector_QMARK_(p1__110535_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"react-fn-component","react-fn-component",-1964010316),cljs.core.first(p1__110535_SHARP_))))){
var make_component = browjure.base.window_resolve(new cljs.core.Symbol("clj-material-ui.base","make-component","clj-material-ui.base/make-component",424371079,null));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"built-react-fn-component","built-react-fn-component",-974186473),(function (){var G__110539 = cljs.core.second(p1__110535_SHARP_);
return (make_component.cljs$core$IFn$_invoke$arity$1 ? make_component.cljs$core$IFn$_invoke$arity$1(G__110539) : make_component.call(null,G__110539));
})()], null),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),p1__110535_SHARP_)));
} else {
return p1__110535_SHARP_;

}
}),command);
var hiccup = clojure.walk.postwalk((function (p1__110536_SHARP_){
if(cljs.core.truth_(((cljs.core.vector_QMARK_(p1__110536_SHARP_))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(browjure.base.hiccup_registry),cljs.core.first(p1__110536_SHARP_)):false))){
var component = browjure.base.window_resolve(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(browjure.base.hiccup_registry),cljs.core.first(p1__110536_SHARP_)));
if(cljs.core.truth_(component.displayName)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(helix.core.$,component,cljs.core.rest(p1__110536_SHARP_));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(browjure.base.window_resolve(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(browjure.base.hiccup_registry),cljs.core.first(p1__110536_SHARP_))),cljs.core.rest(p1__110536_SHARP_));
}
} else {
if(((cljs.core.vector_QMARK_(p1__110536_SHARP_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(p1__110536_SHARP_),new cljs.core.Keyword(null,"built-react-fn-component","built-react-fn-component",-974186473))))){
var vec__110540 = p1__110536_SHARP_;
var seq__110541 = cljs.core.seq(vec__110540);
var first__110542 = cljs.core.first(seq__110541);
var seq__110541__$1 = cljs.core.next(seq__110541);
var _ = first__110542;
var first__110542__$1 = cljs.core.first(seq__110541__$1);
var seq__110541__$2 = cljs.core.next(seq__110541__$1);
var element = first__110542__$1;
var props = seq__110541__$2;
var G__110543 = cljs.core.clj__GT_js(cljs.core.first(props));
return (element.cljs$core$IFn$_invoke$arity$1 ? element.cljs$core$IFn$_invoke$arity$1(G__110543) : element.call(null,G__110543));
} else {
return p1__110536_SHARP_;

}
}
}),react_componentized);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(browjure.base.window_resolve(new cljs.core.Symbol("clj-sablono.base","handler","clj-sablono.base/handler",1494709718,null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hiccup], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-path-value","set-path-value",-1216177159),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(command))){
return browjure.state.set_path_value(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(command)),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(command)));
} else {
var id = cljs.core.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(command));
console.log("else",command);

var fexpr__110544 = (((window[clojure.string.replace(id,"-","_")])["base"])["handler"]);
return (fexpr__110544.cljs$core$IFn$_invoke$arity$1 ? fexpr__110544.cljs$core$IFn$_invoke$arity$1(command) : fexpr__110544.call(null,command));

}
}
}
});
browjure.base.handler = (function browjure$base$handler(msg){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),cljs.core.first(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(msg)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304),cljs.core.first(cljs.core.second(new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(msg))))))){
var vec__110545 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(msg);
var sente_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110545,(0),null);
var vec__110548 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110545,(1),null);
var browjure_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110548,(0),null);
var lib_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__110548,(1),null);
console.log(cljs.core.deref(browjure.base.hiccup_registry));

console.log("event type",cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"view-sablono","view-sablono",1410763305),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(lib_event)),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(lib_event),lib_event);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(browjure_event,new cljs.core.Keyword("event","echo","event/echo",542994207))){
return browjure.base.handle_command(lib_event);
} else {
return null;
}
} else {
return null;
}
});
browjure.base.start_router_BANG_ = (function browjure$base$start_router_BANG_(){
browjure.base.stop_router_BANG_();

return cljs.core.reset_BANG_(browjure.base.router_,taoensso.sente.start_client_chsk_router_BANG_(browjure.base.ch_chsk,browjure.base.handler));
});
browjure.base.start_router_BANG_();
setTimeout((function (){
console.log("connected to back-end?",cljs.core.deref(browjure.base.connected));

if(cljs.core.not(cljs.core.deref(browjure.base.connected))){
return fetch("commands.json").then((function (response){
return response.json().then((function (number_of_commands){
return cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return setTimeout((function (){
return fetch(["command-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),".json"].join('')).then((function (p1__110551_SHARP_){
return p1__110551_SHARP_.text().then((function (command_str){
console.log("handling command: ",i);

return browjure.base.handle_command(cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570)),command_str));
}));
}));
}),((1000) * i));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(number_of_commands)));
}));
}));
} else {
return null;
}
}),(5000));

//# sourceMappingURL=browjure.base.js.map
