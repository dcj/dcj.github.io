goog.provide('taoensso.sente');
if(cljs.core.vector_QMARK_(taoensso.encore.encore_version)){
taoensso.encore.assert_min_encore_version(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(105),(0)], null));
} else {
taoensso.encore.assert_min_encore_version(2.105);
}
/**
 * Useful for identifying client/server mismatch
 */
taoensso.sente.sente_version = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(11),(0)], null);
taoensso.sente.node_target_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs");
if((typeof taoensso !== 'undefined') && (typeof taoensso.sente !== 'undefined') && (typeof taoensso.sente.debug_mode_QMARK__ !== 'undefined')){
} else {
taoensso.sente.debug_mode_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
taoensso.sente.expected = (function taoensso$sente$expected(expected,x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expected","expected",1583670997),expected,new cljs.core.Keyword(null,"actual","actual",107306363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type(x),new cljs.core.Keyword(null,"value","value",305978217),x], null)], null);
});
/**
 * Returns nil if given argument is a valid [ev-id ?ev-data] form. Otherwise
 *   returns a map of validation errors like `{:wrong-type {:expected _ :actual _}}`.
 */
taoensso.sente.validate_event = (function taoensso$sente$validate_event(x){
if((!(cljs.core.vector_QMARK_(x)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-type","wrong-type",929556915),taoensso.sente.expected(new cljs.core.Keyword(null,"vector","vector",1902966158),x)], null);
} else {
if(cljs.core.not((function (){var G__108173 = cljs.core.count(x);
var fexpr__108172 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null);
return (fexpr__108172.cljs$core$IFn$_invoke$arity$1 ? fexpr__108172.cljs$core$IFn$_invoke$arity$1(G__108173) : fexpr__108172.call(null,G__108173));
})())){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-length","wrong-length",1367572281),taoensso.sente.expected(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [(1),null,(2),null], null), null),x)], null);
} else {
var vec__108174 = x;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108174,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108174,(1),null);
if((!((ev_id instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wrong-id-type","wrong-id-type",-1213601689),taoensso.sente.expected(new cljs.core.Keyword(null,"keyword","keyword",811389747),ev_id)], null);
} else {
if(cljs.core.not(cljs.core.namespace(ev_id))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"unnamespaced-id","unnamespaced-id",1976189772),taoensso.sente.expected(new cljs.core.Keyword(null,"namespaced-keyword","namespaced-keyword",131372895),ev_id)], null);
} else {
return null;

}
}

}
}
});
/**
 * Returns given argument if it is a valid [ev-id ?ev-data] form. Otherwise
 *   throws a validation exception.
 */
taoensso.sente.assert_event = (function taoensso$sente$assert_event(x){
var temp__5735__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5735__auto__)){
var errs = temp__5735__auto__;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"given","given",716253602),x,new cljs.core.Keyword(null,"errors","errors",-908790718),errs], null));
} else {
return null;
}
});
/**
 * Valid [ev-id ?ev-data] form?
 */
taoensso.sente.event_QMARK_ = (function taoensso$sente$event_QMARK_(x){
return (taoensso.sente.validate_event(x) == null);
});
taoensso.sente.as_event = (function taoensso$sente$as_event(x){
var temp__5733__auto__ = taoensso.sente.validate_event(x);
if(cljs.core.truth_(temp__5733__auto__)){
var errs = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-event","chsk/bad-event",-565206930),x], null);
} else {
return x;
}
});
taoensso.sente.client_event_msg_QMARK_ = (function taoensso$sente$client_event_msg_QMARK_(x){
if(cljs.core.map_QMARK_(x)){
if(taoensso.encore.ks_EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"state","state",-1988618099),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x)){
var map__108183 = x;
var map__108183__$1 = (((((!((map__108183 == null))))?(((((map__108183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__108183):map__108183);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108183__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108183__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108183__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108183__$1,new cljs.core.Keyword(null,"event","event",301435442));
return ((taoensso.encore.chan_QMARK_(ch_recv)) && (cljs.core.ifn_QMARK_(send_fn)) && (taoensso.encore.atom_QMARK_(state)) && (taoensso.sente.event_QMARK_(event)));
} else {
return false;
}
} else {
return false;
}
});
taoensso.sente.server_event_msg_QMARK_ = (function taoensso$sente$server_event_msg_QMARK_(x){
if(cljs.core.map_QMARK_(x)){
if(taoensso.encore.ks_EQ_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),null,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),null,new cljs.core.Keyword(null,"uid","uid",-1447769400),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),null,new cljs.core.Keyword(null,"?data","?data",-9471433),null,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),null], null), null),x)){
var map__108197 = x;
var map__108197__$1 = (((((!((map__108197 == null))))?(((((map__108197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__108197):map__108197);
var ch_recv = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108197__$1,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861));
var send_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108197__$1,new cljs.core.Keyword(null,"send-fn","send-fn",351002041));
var connected_uids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108197__$1,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231));
var ring_req = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108197__$1,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108197__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108197__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108197__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
return ((taoensso.encore.chan_QMARK_(ch_recv)) && (cljs.core.ifn_QMARK_(send_fn)) && (taoensso.encore.atom_QMARK_(connected_uids)) && (cljs.core.map_QMARK_(ring_req)) && (taoensso.encore.nblank_str_QMARK_(client_id)) && (taoensso.sente.event_QMARK_(event)) && ((((_QMARK_reply_fn == null)) || (cljs.core.ifn_QMARK_(_QMARK_reply_fn)))));
} else {
return false;
}
} else {
return false;
}
});
/**
 * All server `event-msg`s go through this
 */
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_ = (function taoensso$sente$put_server_event_msg_GT_ch_recv_BANG_(ch_recv,p__108203){
var map__108204 = p__108203;
var map__108204__$1 = (((((!((map__108204 == null))))?(((((map__108204.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108204.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__108204):map__108204);
var ev_msg = map__108204__$1;
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108204__$1,new cljs.core.Keyword(null,"event","event",301435442));
var _QMARK_reply_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108204__$1,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592));
var vec__108209 = taoensso.sente.as_event(event);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108209,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108209,(1),null);
var valid_event = vec__108209;
var ev_msg_STAR_ = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"event","event",301435442),valid_event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null)], 0));
if((!(taoensso.sente.server_event_msg_QMARK_(ev_msg_STAR_)))){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",189,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad ev-msg: %s",ev_msg], null);
}),null)),null,-1403049688);
} else {
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch_recv,ev_msg_STAR_);
}
});
taoensso.sente.cb_error_QMARK_ = (function taoensso$sente$cb_error_QMARK_(cb_reply_clj){
var fexpr__108215 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264),null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439),null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489),null], null), null);
return (fexpr__108215.cljs$core$IFn$_invoke$arity$1 ? fexpr__108215.cljs$core$IFn$_invoke$arity$1(cb_reply_clj) : fexpr__108215.call(null,cb_reply_clj));
});
taoensso.sente.cb_success_QMARK_ = (function taoensso$sente$cb_success_QMARK_(cb_reply_clj){
return cljs.core.not(taoensso.sente.cb_error_QMARK_(cb_reply_clj));
});
/**
 * prefixed-pstr->[clj ?cb-uuid]
 */
taoensso.sente.unpack = (function taoensso$sente$unpack(packer,prefixed_pstr){
if(typeof prefixed_pstr === 'string'){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",203,"(string? prefixed-pstr)",prefixed_pstr,null,null);
}

var wrapped_QMARK_ = taoensso.encore.str_starts_with_QMARK_(prefixed_pstr,"+");
var pstr = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(prefixed_pstr,(1));
var clj = (function (){try{return taoensso.sente.interfaces.unpack(packer,pstr);
}catch (e108224){var t = e108224;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",210,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Bad package: %s (%s)",pstr,t], null);
}),null)),null,-1356434502);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","bad-package","chsk/bad-package",501893679),pstr], null);
}})();
var vec__108220 = ((wrapped_QMARK_)?clj:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,null], null));
var clj__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108220,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108220,(1),null);
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),_QMARK_cb_uuid))?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):_QMARK_cb_uuid);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",216,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Unpacking: %s -> %s",prefixed_pstr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null)], null);
}),null)),null,-1820837157);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj__$1,_QMARK_cb_uuid__$1], null);
});
/**
 * clj->prefixed-pstr
 */
taoensso.sente.pack = (function taoensso$sente$pack(var_args){
var G__108227 = arguments.length;
switch (G__108227) {
case 2:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2 = (function (packer,clj){
var pstr = ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",223,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (unwrapped): %s -> %s",clj,pstr], null);
}),null)),null,1591917304);

return pstr;
}));

(taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3 = (function (packer,clj,_QMARK_cb_uuid){
var _QMARK_cb_uuid__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_cb_uuid,new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321)))?(0):_QMARK_cb_uuid);
var wrapped_clj = (cljs.core.truth_(_QMARK_cb_uuid__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj,_QMARK_cb_uuid__$1], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clj], null));
var pstr = ["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(taoensso.sente.interfaces.pack(packer,wrapped_clj))].join('');
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",232,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Packing (wrapped): %s -> %s",wrapped_clj,pstr], null);
}),null)),null,-1850702661);

return pstr;
}));

(taoensso.sente.pack.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {taoensso.sente.interfaces.IPacker}
*/
taoensso.sente.EdnPacker = (function (){
});
(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$pack$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return taoensso.encore.pr_edn.cljs$core$IFn$_invoke$arity$1(x);
}));

(taoensso.sente.EdnPacker.prototype.taoensso$sente$interfaces$IPacker$unpack$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return taoensso.encore.read_edn.cljs$core$IFn$_invoke$arity$1(s);
}));

(taoensso.sente.EdnPacker.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(taoensso.sente.EdnPacker.cljs$lang$type = true);

(taoensso.sente.EdnPacker.cljs$lang$ctorStr = "taoensso.sente/EdnPacker");

(taoensso.sente.EdnPacker.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"taoensso.sente/EdnPacker");
}));

/**
 * Positional factory function for taoensso.sente/EdnPacker.
 */
taoensso.sente.__GT_EdnPacker = (function taoensso$sente$__GT_EdnPacker(){
return (new taoensso.sente.EdnPacker());
});

taoensso.sente.default_edn_packer = (new taoensso.sente.EdnPacker());
taoensso.sente.coerce_packer = (function taoensso$sente$coerce_packer(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword(null,"edn","edn",1317840885))){
return taoensso.sente.default_edn_packer;
} else {
var e = (function (){try{if((function (p1__108228_SHARP_){
if((!((p1__108228_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__108228_SHARP_.taoensso$sente$interfaces$IPacker$)))){
return true;
} else {
if((!p1__108228_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__108228_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IPacker,p1__108228_SHARP_);
}
})(x)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e108229){if((e108229 instanceof Error)){
var e = e108229;
return e;
} else {
throw e108229;

}
}})();
if((e == null)){
return x;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",245,"((fn* [p1__108228#] (satisfies? interfaces/IPacker p1__108228#)) x)",x,e,null);
}
}
});
taoensso.sente.next_idx_BANG_ = taoensso.encore.idx_fn();


/**
 * Takes a web server adapter[1] and returns a map with keys:
 *  :ch-recv ; core.async channel to receive `event-msg`s (internal or from clients).
 *  :send-fn ; (fn [user-id ev] for server>user push.
 *  :ajax-post-fn                ; (fn [ring-req]) for Ring CSRF-POST + chsk URL.
 *  :ajax-get-or-ws-handshake-fn ; (fn [ring-req]) for Ring GET + chsk URL.
 *  :connected-uids ; Watchable, read-only (atom {:ws #{_} :ajax #{_} :any #{_}}).
 * 
 *   Common options:
 *  :user-id-fn        ;  (fn [ring-req]) -> unique user-id for server>user push.
 *  :csrf-token-fn     ; ?(fn [ring-req]) -> CSRF-token for Ajax POSTs and WS handshake.
 *                     ;                    CSRF check will be skipped iff nil (NOT RECOMMENDED!).
 *  :handshake-data-fn ; (fn [ring-req]) -> arb user data to append to handshake evs.
 *  :ws-kalive-ms      ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to client's :ws-kalive-ms.
 *  :lp-timeout-ms     ; Timeout (repoll) long-polling Ajax conns after given msecs.
 *  :send-buf-ms-ajax  ; [2]
 *  :send-buf-ms-ws    ; [2]
 *  :packer            ; :edn (default), or an IPacker implementation.
 * 
 *   [1] e.g. `(taoensso.sente.server-adapters.http-kit/get-sch-adapter)` or
 *         `(taoensso.sente.server-adapters.immutant/get-sch-adapter)`.
 *    You must have the necessary web-server dependency in your project.clj and
 *    the necessary entry in your namespace's `ns` form.
 * 
 *   [2] Optimization to allow transparent batching of rapidly-triggered
 *    server>user pushes. This is esp. important for Ajax clients which use a
 *    (slow) reconnecting poller. Actual event dispatch may occur <= given ms
 *    after send call (larger values => larger batch windows).
 */
taoensso.sente.make_channel_socket_server_BANG_ = (function taoensso$sente$make_channel_socket_server_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___110057 = arguments.length;
var i__4737__auto___110058 = (0);
while(true){
if((i__4737__auto___110058 < len__4736__auto___110057)){
args__4742__auto__.push((arguments[i__4737__auto___110058]));

var G__110059 = (i__4737__auto___110058 + (1));
i__4737__auto___110058 = G__110059;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(taoensso.sente.make_channel_socket_server_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (web_server_ch_adapter,p__108240){
var vec__108242 = p__108240;
var map__108245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108242,(0),null);
var map__108245__$1 = (((((!((map__108245 == null))))?(((((map__108245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__108245):map__108245);
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__108245__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(25)], 0)));
var send_buf_ms_ws = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__108245__$1,new cljs.core.Keyword(null,"send-buf-ms-ws","send-buf-ms-ws",-1149586238),(30));
var lp_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__108245__$1,new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var csrf_token_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__108245__$1,new cljs.core.Keyword(null,"csrf-token-fn","csrf-token-fn",-1846298394),(function (ring_req){
var or__4126__auto__ = new cljs.core.Keyword(null,"anti-forgery-token","anti-forgery-token",806990841).cljs$core$IFn$_invoke$arity$1(ring_req);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword("ring.middleware.anti-forgery","anti-forgery-token","ring.middleware.anti-forgery/anti-forgery-token",571563484)], null));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),"__anti-forgery-token"], null));
}
}
}
}));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__108245__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var send_buf_ms_ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__108245__$1,new cljs.core.Keyword(null,"send-buf-ms-ajax","send-buf-ms-ajax",1546129037),(100));
var handshake_data_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__108245__$1,new cljs.core.Keyword(null,"handshake-data-fn","handshake-data-fn",2011983089),(function (ring_req){
return null;
}));
var user_id_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__108245__$1,new cljs.core.Keyword(null,"user-id-fn","user-id-fn",-1532150029),(function (ring_req){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session","session",1008279103),new cljs.core.Keyword(null,"uid","uid",-1447769400)], null));
}));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__108245__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((1000)));
var bad_csrf_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__108245__$1,new cljs.core.Keyword(null,"bad-csrf-fn","bad-csrf-fn",16619032),(function (ring_req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),(403),new cljs.core.Keyword(null,"body","body",-2049205669),"Bad CSRF token"], null);
}));
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ajax)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e108252){if((e108252 instanceof Error)){
var e = e108252;
return e;
} else {
throw e108252;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",320,"(enc/pos-int? send-buf-ms-ajax)",send_buf_ms_ajax,e,null);
}
})(),(function (){var e = (function (){try{if(taoensso.encore.pos_int_QMARK_(send_buf_ms_ws)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e108253){if((e108253 instanceof Error)){
var e = e108253;
return e;
} else {
throw e108253;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",320,"(enc/pos-int? send-buf-ms-ws)",send_buf_ms_ws,e,null);
}
})()], null);

var e_110065 = (function (){try{if((function (p1__108231_SHARP_){
if((!((p1__108231_SHARP_ == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === p1__108231_SHARP_.taoensso$sente$interfaces$IServerChanAdapter$)))){
return true;
} else {
if((!p1__108231_SHARP_.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__108231_SHARP_);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(taoensso.sente.interfaces.IServerChanAdapter,p1__108231_SHARP_);
}
})(web_server_ch_adapter)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e108255){if((e108255 instanceof Error)){
var e_110065 = e108255;
return e_110065;
} else {
throw e108255;

}
}})();
if((e_110065 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",321,"((fn* [p1__108231#] (satisfies? interfaces/IServerChanAdapter p1__108231#)) web-server-ch-adapter)",web_server_ch_adapter,e_110065,null);
}

var max_ms_110067 = taoensso.sente.default_client_side_ajax_timeout_ms;
if((lp_timeout_ms >= max_ms_110067)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":lp-timeout-ms must be < ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(max_ms_110067)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"lp-timeout-ms","lp-timeout-ms",-1451963133),lp_timeout_ms,new cljs.core.Keyword(null,"default-client-side-ajax-timeout-ms","default-client-side-ajax-timeout-ms",1149929762),max_ms_110067], null));
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var ch_recv = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(recv_buf_or_n);
var user_id_fn__$1 = (function (ring_req,client_id){
var or__4126__auto__ = (function (){var G__108259 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ring_req,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);
return (user_id_fn.cljs$core$IFn$_invoke$arity$1 ? user_id_fn.cljs$core$IFn$_invoke$arity$1(G__108259) : user_id_fn.call(null,G__108259));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486);
}
});
var conns_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var send_buffers_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentArrayMap.EMPTY], null));
var connected_uids_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.PersistentHashSet.EMPTY], null));
var upd_conn_BANG_ = (function() {
var G__110070 = null;
var G__110070__3 = (function (conn_type,uid,client_id){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (_QMARK_v){
var vec__108260 = _QMARK_v;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108260,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108260,(1),null);
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),_QMARK_sch], null));
}));
});
var G__110070__4 = (function (conn_type,uid,client_id,new__QMARK_sch){
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type,uid,client_id], null),(function (_QMARK_v){
var new_udt = taoensso.encore.now_udt();
return taoensso.encore.swapped(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new__QMARK_sch,new_udt], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"init?","init?",438181499),(_QMARK_v == null),new cljs.core.Keyword(null,"udt","udt",2011712751),new_udt,new cljs.core.Keyword(null,"?sch","?sch",2064493898),new__QMARK_sch], null));
}));
});
G__110070 = function(conn_type,uid,client_id,new__QMARK_sch){
switch(arguments.length){
case 3:
return G__110070__3.call(this,conn_type,uid,client_id);
case 4:
return G__110070__4.call(this,conn_type,uid,client_id,new__QMARK_sch);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__110070.cljs$core$IFn$_invoke$arity$3 = G__110070__3;
G__110070.cljs$core$IFn$_invoke$arity$4 = G__110070__4;
return G__110070;
})()
;
var connect_uid_BANG_ = (function (conn_type,uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e108264){if((e108264 instanceof Error)){
var e = e108264;
return e;
} else {
throw e108264;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",365,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_connected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__108265){
var map__108266 = p__108265;
var map__108266__$1 = (((((!((map__108266 == null))))?(((((map__108266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__108266):map__108266);
var old_m = map__108266__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108266__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108266__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108266__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var new_m = (function (){var G__108269 = conn_type;
var G__108269__$1 = (((G__108269 instanceof cljs.core.Keyword))?G__108269.fqn:null);
switch (G__108269__$1) {
case "ws":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid),new cljs.core.Keyword(null,"ajax","ajax",814345549),ajax,new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
case "ajax":
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),ws,new cljs.core.Keyword(null,"ajax","ajax",814345549),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax,uid),new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__108269__$1)].join('')));

}
})();
return taoensso.encore.swapped(new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if((((!(cljs.core.contains_QMARK_(old_any,uid)))) && (cljs.core.contains_QMARK_(new_any,uid)))){
return new cljs.core.Keyword(null,"newly-connected","newly-connected",-2029862681);
} else {
return null;
}
})());
}));
return newly_connected_QMARK_;
});
var upd_connected_uid_BANG_ = (function (uid){
if(cljs.core.truth_((function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(uid)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e108272){if((e108272 instanceof Error)){
var e = e108272;
return e;
} else {
throw e108272;

}
}})();
if((e == null)){
return true;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",382,"(taoensso.truss.impl/some? uid)",uid,e,null);
}
})())){
} else {
throw (new Error("Assert failed: (have? uid)"));
}

var newly_disconnected_QMARK_ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(connected_uids_,cljs.core.PersistentVector.EMPTY,(function (p__108275){
var map__108276 = p__108275;
var map__108276__$1 = (((((!((map__108276 == null))))?(((((map__108276.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108276.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__108276):map__108276);
var old_m = map__108276__$1;
var ws = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108276__$1,new cljs.core.Keyword(null,"ws","ws",86841443));
var ajax = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108276__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549));
var any = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108276__$1,new cljs.core.Keyword(null,"any","any",1705907423));
var conns_SINGLEQUOTE_ = cljs.core.deref(conns_);
var any_ws_clients_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ws","ws",86841443).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_ajax_clients_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"ajax","ajax",814345549).cljs$core$IFn$_invoke$arity$1(conns_SINGLEQUOTE_),uid);
var any_clients_QMARK_ = ((any_ws_clients_QMARK_) || (any_ajax_clients_QMARK_));
var new_m = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),((any_ws_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ws,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ws,uid)),new cljs.core.Keyword(null,"ajax","ajax",814345549),((any_ajax_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ajax,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(ajax,uid)),new cljs.core.Keyword(null,"any","any",1705907423),((any_clients_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(any,uid):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(any,uid))], null);
return taoensso.encore.swapped(new_m,(function (){var old_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(old_m);
var new_any = new cljs.core.Keyword(null,"any","any",1705907423).cljs$core$IFn$_invoke$arity$1(new_m);
if(((cljs.core.contains_QMARK_(old_any,uid)) && ((!(cljs.core.contains_QMARK_(new_any,uid)))))){
return new cljs.core.Keyword(null,"newly-disconnected","newly-disconnected",-1586164962);
} else {
return null;
}
})());
}));
return newly_disconnected_QMARK_;
});
var send_fn = (function() { 
var G__110080__delegate = function (user_id,ev,p__108280){
var vec__108281 = p__108280;
var map__108284 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108281,(0),null);
var map__108284__$1 = (((((!((map__108284 == null))))?(((((map__108284.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108284.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__108284):map__108284);
var opts = map__108284__$1;
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108284__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var uid_110081 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(user_id,new cljs.core.Keyword("sente","all-users-without-uid","sente/all-users-without-uid",-42979578)))?new cljs.core.Keyword("taoensso.sente","nil-uid","taoensso.sente/nil-uid",-2111603486):user_id);
var __110082 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",408,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (->uid %s) %s",uid_110081,ev], null);
}),null)),null,1373387384);
var __110083__$1 = (cljs.core.truth_(uid_110081)?null:(function(){throw (new Error(["Assert failed: ",["Support for sending to `nil` user-ids has been REMOVED. ","Please send to `:sente/all-users-without-uid` instead."].join(''),"\n","uid"].join('')))})());
var __110084__$2 = taoensso.sente.assert_event(ev);
var ev_uuid_110085 = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
var flush_buffer_BANG__110086 = (function (conn_type){
var temp__5735__auto__ = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type], null),(function (m){
var vec__108287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_110081);
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108287,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108287,(1),null);
if(cljs.core.contains_QMARK_(ev_uuids,ev_uuid_110085)){
return taoensso.encore.swapped(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,uid_110081),cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,uid_110081));
} else {
return taoensso.encore.swapped(m,null);
}
}));
if(cljs.core.truth_(temp__5735__auto__)){
var pulled = temp__5735__auto__;
var vec__108291 = pulled;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108291,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108291,(1),null);
if(cljs.core.vector_QMARK_(buffered_evs)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",435,"(vector? buffered-evs)",buffered_evs,null,null);
}

if(cljs.core.set_QMARK_(ev_uuids)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",436,"(set? ev-uuids)",ev_uuids,null,null);
}

var buffered_evs_ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,buffered_evs);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",439,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["buffered-evs-ppstr: %s",buffered_evs_ppstr], null);
}),null)),null,-479083211);

var G__108294 = conn_type;
var G__108294__$1 = (((G__108294 instanceof cljs.core.Keyword))?G__108294.fqn:null);
switch (G__108294__$1) {
case "ws":
return (taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4 ? taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.cljs$core$IFn$_invoke$arity$4(conns_,uid_110081,buffered_evs_ppstr,upd_conn_BANG_) : taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_.call(null,conns_,uid_110081,buffered_evs_ppstr,upd_conn_BANG_));

break;
case "ajax":
return (taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,uid_110081,buffered_evs_ppstr) : taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_.call(null,conns_,uid_110081,buffered_evs_ppstr));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__108294__$1)].join('')));

}
} else {
return null;
}
});
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ev,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","close","chsk/close",1840295819)], null))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",448,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk closing (client may reconnect): %s",uid_110081], null);
}),null)),null,-277624579);

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__110086(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__110086(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
}

var seq__108298_110090 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid_110081], null))));
var chunk__108299_110091 = null;
var count__108300_110092 = (0);
var i__108301_110093 = (0);
while(true){
if((i__108301_110093 < count__108300_110092)){
var vec__108313_110094 = chunk__108299_110091.cljs$core$IIndexed$_nth$arity$2(null,i__108301_110093);
var _QMARK_sch_110095 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108313_110094,(0),null);
var _udt_110096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108313_110094,(1),null);
var temp__5735__auto___110097 = _QMARK_sch_110095;
if(cljs.core.truth_(temp__5735__auto___110097)){
var sch_110098 = temp__5735__auto___110097;
taoensso.sente.interfaces.sch_close_BANG_(sch_110098);
} else {
}


var G__110099 = seq__108298_110090;
var G__110100 = chunk__108299_110091;
var G__110101 = count__108300_110092;
var G__110102 = (i__108301_110093 + (1));
seq__108298_110090 = G__110099;
chunk__108299_110091 = G__110100;
count__108300_110092 = G__110101;
i__108301_110093 = G__110102;
continue;
} else {
var temp__5735__auto___110103 = cljs.core.seq(seq__108298_110090);
if(temp__5735__auto___110103){
var seq__108298_110104__$1 = temp__5735__auto___110103;
if(cljs.core.chunked_seq_QMARK_(seq__108298_110104__$1)){
var c__4556__auto___110105 = cljs.core.chunk_first(seq__108298_110104__$1);
var G__110106 = cljs.core.chunk_rest(seq__108298_110104__$1);
var G__110107 = c__4556__auto___110105;
var G__110108 = cljs.core.count(c__4556__auto___110105);
var G__110109 = (0);
seq__108298_110090 = G__110106;
chunk__108299_110091 = G__110107;
count__108300_110092 = G__110108;
i__108301_110093 = G__110109;
continue;
} else {
var vec__108316_110110 = cljs.core.first(seq__108298_110104__$1);
var _QMARK_sch_110111 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108316_110110,(0),null);
var _udt_110112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108316_110110,(1),null);
var temp__5735__auto___110113__$1 = _QMARK_sch_110111;
if(cljs.core.truth_(temp__5735__auto___110113__$1)){
var sch_110114 = temp__5735__auto___110113__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_110114);
} else {
}


var G__110115 = cljs.core.next(seq__108298_110104__$1);
var G__110116 = null;
var G__110117 = (0);
var G__110118 = (0);
seq__108298_110090 = G__110115;
chunk__108299_110091 = G__110116;
count__108300_110092 = G__110117;
i__108301_110093 = G__110118;
continue;
}
} else {
}
}
break;
}

var seq__108319_110119 = cljs.core.seq(cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid_110081], null))));
var chunk__108320_110120 = null;
var count__108321_110121 = (0);
var i__108322_110122 = (0);
while(true){
if((i__108322_110122 < count__108321_110121)){
var vec__108331_110123 = chunk__108320_110120.cljs$core$IIndexed$_nth$arity$2(null,i__108322_110122);
var _QMARK_sch_110124 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108331_110123,(0),null);
var _udt_110125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108331_110123,(1),null);
var temp__5735__auto___110126 = _QMARK_sch_110124;
if(cljs.core.truth_(temp__5735__auto___110126)){
var sch_110127 = temp__5735__auto___110126;
taoensso.sente.interfaces.sch_close_BANG_(sch_110127);
} else {
}


var G__110128 = seq__108319_110119;
var G__110129 = chunk__108320_110120;
var G__110130 = count__108321_110121;
var G__110131 = (i__108322_110122 + (1));
seq__108319_110119 = G__110128;
chunk__108320_110120 = G__110129;
count__108321_110121 = G__110130;
i__108322_110122 = G__110131;
continue;
} else {
var temp__5735__auto___110133 = cljs.core.seq(seq__108319_110119);
if(temp__5735__auto___110133){
var seq__108319_110134__$1 = temp__5735__auto___110133;
if(cljs.core.chunked_seq_QMARK_(seq__108319_110134__$1)){
var c__4556__auto___110135 = cljs.core.chunk_first(seq__108319_110134__$1);
var G__110136 = cljs.core.chunk_rest(seq__108319_110134__$1);
var G__110137 = c__4556__auto___110135;
var G__110138 = cljs.core.count(c__4556__auto___110135);
var G__110139 = (0);
seq__108319_110119 = G__110136;
chunk__108320_110120 = G__110137;
count__108321_110121 = G__110138;
i__108322_110122 = G__110139;
continue;
} else {
var vec__108335_110140 = cljs.core.first(seq__108319_110134__$1);
var _QMARK_sch_110141 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108335_110140,(0),null);
var _udt_110142 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108335_110140,(1),null);
var temp__5735__auto___110144__$1 = _QMARK_sch_110141;
if(cljs.core.truth_(temp__5735__auto___110144__$1)){
var sch_110146 = temp__5735__auto___110144__$1;
taoensso.sente.interfaces.sch_close_BANG_(sch_110146);
} else {
}


var G__110148 = cljs.core.next(seq__108319_110134__$1);
var G__110149 = null;
var G__110150 = (0);
var G__110151 = (0);
seq__108319_110119 = G__110148;
chunk__108320_110120 = G__110149;
count__108321_110121 = G__110150;
i__108322_110122 = G__110151;
continue;
}
} else {
}
}
break;
}
} else {
var seq__108338_110153 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"ajax","ajax",814345549)], null));
var chunk__108339_110154 = null;
var count__108340_110155 = (0);
var i__108341_110156 = (0);
while(true){
if((i__108341_110156 < count__108340_110155)){
var conn_type_110157 = chunk__108339_110154.cljs$core$IIndexed$_nth$arity$2(null,i__108341_110156);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_110157,uid_110081], null),((function (seq__108338_110153,chunk__108339_110154,count__108340_110155,i__108341_110156,conn_type_110157,uid_110081,__110082,__110083__$1,__110084__$2,ev_uuid_110085,flush_buffer_BANG__110086,vec__108281,map__108284,map__108284__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__108242,map__108245,map__108245__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_110085])], null);
} else {
var vec__108349 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108349,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108349,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_110085)], null);
}
});})(seq__108338_110153,chunk__108339_110154,count__108340_110155,i__108341_110156,conn_type_110157,uid_110081,__110082,__110083__$1,__110084__$2,ev_uuid_110085,flush_buffer_BANG__110086,vec__108281,map__108284,map__108284__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__108242,map__108245,map__108245__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);


var G__110158 = seq__108338_110153;
var G__110159 = chunk__108339_110154;
var G__110160 = count__108340_110155;
var G__110161 = (i__108341_110156 + (1));
seq__108338_110153 = G__110158;
chunk__108339_110154 = G__110159;
count__108340_110155 = G__110160;
i__108341_110156 = G__110161;
continue;
} else {
var temp__5735__auto___110164 = cljs.core.seq(seq__108338_110153);
if(temp__5735__auto___110164){
var seq__108338_110165__$1 = temp__5735__auto___110164;
if(cljs.core.chunked_seq_QMARK_(seq__108338_110165__$1)){
var c__4556__auto___110166 = cljs.core.chunk_first(seq__108338_110165__$1);
var G__110167 = cljs.core.chunk_rest(seq__108338_110165__$1);
var G__110168 = c__4556__auto___110166;
var G__110169 = cljs.core.count(c__4556__auto___110166);
var G__110170 = (0);
seq__108338_110153 = G__110167;
chunk__108339_110154 = G__110168;
count__108340_110155 = G__110169;
i__108341_110156 = G__110170;
continue;
} else {
var conn_type_110172 = cljs.core.first(seq__108338_110165__$1);
taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(send_buffers_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [conn_type_110172,uid_110081], null),((function (seq__108338_110153,chunk__108339_110154,count__108340_110155,i__108341_110156,conn_type_110172,seq__108338_110165__$1,temp__5735__auto___110164,uid_110081,__110082,__110083__$1,__110084__$2,ev_uuid_110085,flush_buffer_BANG__110086,vec__108281,map__108284,map__108284__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__108242,map__108245,map__108245__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn){
return (function (_QMARK_v){
if(cljs.core.not(_QMARK_v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev], null),cljs.core.PersistentHashSet.createAsIfByAssoc([ev_uuid_110085])], null);
} else {
var vec__108352 = _QMARK_v;
var buffered_evs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108352,(0),null);
var ev_uuids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108352,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(buffered_evs,ev),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ev_uuids,ev_uuid_110085)], null);
}
});})(seq__108338_110153,chunk__108339_110154,count__108340_110155,i__108341_110156,conn_type_110172,seq__108338_110165__$1,temp__5735__auto___110164,uid_110081,__110082,__110083__$1,__110084__$2,ev_uuid_110085,flush_buffer_BANG__110086,vec__108281,map__108284,map__108284__$1,opts,flush_QMARK_,packer__$1,ch_recv,user_id_fn__$1,conns_,send_buffers_,connected_uids_,upd_conn_BANG_,connect_uid_BANG_,upd_connected_uid_BANG_,vec__108242,map__108245,map__108245__$1,ws_kalive_ms,send_buf_ms_ws,lp_timeout_ms,csrf_token_fn,packer,send_buf_ms_ajax,handshake_data_fn,user_id_fn,recv_buf_or_n,bad_csrf_fn))
);


var G__110173 = cljs.core.next(seq__108338_110165__$1);
var G__110174 = null;
var G__110175 = (0);
var G__110176 = (0);
seq__108338_110153 = G__110173;
chunk__108339_110154 = G__110174;
count__108340_110155 = G__110175;
i__108341_110156 = G__110176;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(flush_QMARK_)){
flush_buffer_BANG__110086(new cljs.core.Keyword(null,"ws","ws",86841443));

flush_buffer_BANG__110086(new cljs.core.Keyword(null,"ajax","ajax",814345549));
} else {
var ws_timeout_110177 = cljs.core.async.timeout(send_buf_ms_ws);
var ajax_timeout_110178 = cljs.core.async.timeout(send_buf_ms_ajax);
var c__103244__auto___110179 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_108359){
var state_val_108360 = (state_108359[(1)]);
if((state_val_108360 === (1))){
var state_108359__$1 = state_108359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_108359__$1,(2),ws_timeout_110177);
} else {
if((state_val_108360 === (2))){
var inst_108356 = (state_108359[(2)]);
var inst_108357 = flush_buffer_BANG__110086(new cljs.core.Keyword(null,"ws","ws",86841443));
var state_108359__$1 = (function (){var statearr_108361 = state_108359;
(statearr_108361[(7)] = inst_108356);

return statearr_108361;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_108359__$1,inst_108357);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__103041__auto__ = null;
var taoensso$sente$state_machine__103041__auto____0 = (function (){
var statearr_108362 = [null,null,null,null,null,null,null,null];
(statearr_108362[(0)] = taoensso$sente$state_machine__103041__auto__);

(statearr_108362[(1)] = (1));

return statearr_108362;
});
var taoensso$sente$state_machine__103041__auto____1 = (function (state_108359){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_108359);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e108363){var ex__103044__auto__ = e108363;
var statearr_108364_110180 = state_108359;
(statearr_108364_110180[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_108359[(4)]))){
var statearr_108365_110181 = state_108359;
(statearr_108365_110181[(1)] = cljs.core.first((state_108359[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__110182 = state_108359;
state_108359 = G__110182;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
taoensso$sente$state_machine__103041__auto__ = function(state_108359){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__103041__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__103041__auto____1.call(this,state_108359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__103041__auto____0;
taoensso$sente$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__103041__auto____1;
return taoensso$sente$state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_108366 = f__103245__auto__();
(statearr_108366[(6)] = c__103244__auto___110179);

return statearr_108366;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
}));


var c__103244__auto___110183 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_108371){
var state_val_108372 = (state_108371[(1)]);
if((state_val_108372 === (1))){
var state_108371__$1 = state_108371;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_108371__$1,(2),ajax_timeout_110178);
} else {
if((state_val_108372 === (2))){
var inst_108368 = (state_108371[(2)]);
var inst_108369 = flush_buffer_BANG__110086(new cljs.core.Keyword(null,"ajax","ajax",814345549));
var state_108371__$1 = (function (){var statearr_108373 = state_108371;
(statearr_108373[(7)] = inst_108368);

return statearr_108373;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_108371__$1,inst_108369);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__103041__auto__ = null;
var taoensso$sente$state_machine__103041__auto____0 = (function (){
var statearr_108374 = [null,null,null,null,null,null,null,null];
(statearr_108374[(0)] = taoensso$sente$state_machine__103041__auto__);

(statearr_108374[(1)] = (1));

return statearr_108374;
});
var taoensso$sente$state_machine__103041__auto____1 = (function (state_108371){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_108371);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e108375){var ex__103044__auto__ = e108375;
var statearr_108376_110192 = state_108371;
(statearr_108376_110192[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_108371[(4)]))){
var statearr_108377_110195 = state_108371;
(statearr_108377_110195[(1)] = cljs.core.first((state_108371[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__110196 = state_108371;
state_108371 = G__110196;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
taoensso$sente$state_machine__103041__auto__ = function(state_108371){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__103041__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__103041__auto____1.call(this,state_108371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__103041__auto____0;
taoensso$sente$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__103041__auto____1;
return taoensso$sente$state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_108378 = f__103245__auto__();
(statearr_108378[(6)] = c__103244__auto___110183);

return statearr_108378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
}));

}
}

return null;
};
var G__110080 = function (user_id,ev,var_args){
var p__108280 = null;
if (arguments.length > 2) {
var G__110198__i = 0, G__110198__a = new Array(arguments.length -  2);
while (G__110198__i < G__110198__a.length) {G__110198__a[G__110198__i] = arguments[G__110198__i + 2]; ++G__110198__i;}
  p__108280 = new cljs.core.IndexedSeq(G__110198__a,0,null);
} 
return G__110080__delegate.call(this,user_id,ev,p__108280);};
G__110080.cljs$lang$maxFixedArity = 2;
G__110080.cljs$lang$applyTo = (function (arglist__110199){
var user_id = cljs.core.first(arglist__110199);
arglist__110199 = cljs.core.next(arglist__110199);
var ev = cljs.core.first(arglist__110199);
var p__108280 = cljs.core.rest(arglist__110199);
return G__110080__delegate(user_id,ev,p__108280);
});
G__110080.cljs$core$IFn$_invoke$arity$variadic = G__110080__delegate;
return G__110080;
})()
;
var bad_csrf_QMARK_ = (function (ring_req){
if((csrf_token_fn == null)){
return false;
} else {
var temp__5733__auto__ = (csrf_token_fn.cljs$core$IFn$_invoke$arity$1 ? csrf_token_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : csrf_token_fn.call(null,ring_req));
if(cljs.core.truth_(temp__5733__auto__)){
var reference_csrf_token = temp__5733__auto__;
var csrf_token_from_client = (function (){var or__4126__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856)], null));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-csrf-token"], null));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"x-xsrf-token"], null));
}
}
})();
return cljs.core.not(taoensso.encore.const_str_EQ_(reference_csrf_token,csrf_token_from_client));
} else {
return true;
}
}
});
var ev_msg_const = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_], null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ch_recv,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"connected-uids","connected-uids",1454332231),connected_uids_,new cljs.core.Keyword(null,"ajax-post-fn","ajax-post-fn",1830071264),(function (ring_req){
if(bad_csrf_QMARK_(ring_req)){
return (bad_csrf_fn.cljs$core$IFn$_invoke$arity$1 ? bad_csrf_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_csrf_fn.call(null,ring_req));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (server_ch,websocket_QMARK_){
if(cljs.core.not(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: (not websocket?)"));
}

var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var ppstr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var vec__108383 = taoensso.sente.unpack(packer__$1,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108383,(0),null);
var has_cb_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108383,(1),null);
var reply_fn = (function (){var replied_QMARK__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return (function (resp_clj){
if(cljs.core.compare_and_set_BANG_(replied_QMARK__,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",542,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ajax post reply): %s",resp_clj], null);
}),null)),null,-992823117);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,resp_clj));
} else {
return null;
}
});
})();
taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),clj,new cljs.core.Keyword(null,"uid","uid",-1447769400),user_id_fn__$1(ring_req,client_id),new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),(cljs.core.truth_(has_cb_QMARK_)?reply_fn:null)], null)], 0)));

if(cljs.core.truth_(has_cb_QMARK_)){
var temp__5735__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5735__auto__)){
var ms = temp__5735__auto__;
var c__103244__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_108392){
var state_val_108393 = (state_108392[(1)]);
if((state_val_108393 === (1))){
var inst_108387 = cljs.core.async.timeout(ms);
var state_108392__$1 = state_108392;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_108392__$1,(2),inst_108387);
} else {
if((state_val_108393 === (2))){
var inst_108389 = (state_108392[(2)]);
var inst_108390 = reply_fn(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var state_108392__$1 = (function (){var statearr_108394 = state_108392;
(statearr_108394[(7)] = inst_108389);

return statearr_108394;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_108392__$1,inst_108390);
} else {
return null;
}
}
});
return (function() {
var taoensso$sente$state_machine__103041__auto__ = null;
var taoensso$sente$state_machine__103041__auto____0 = (function (){
var statearr_108396 = [null,null,null,null,null,null,null,null];
(statearr_108396[(0)] = taoensso$sente$state_machine__103041__auto__);

(statearr_108396[(1)] = (1));

return statearr_108396;
});
var taoensso$sente$state_machine__103041__auto____1 = (function (state_108392){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_108392);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e108397){var ex__103044__auto__ = e108397;
var statearr_108398_110241 = state_108392;
(statearr_108398_110241[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_108392[(4)]))){
var statearr_108399_110242 = state_108392;
(statearr_108399_110242[(1)] = cljs.core.first((state_108392[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__110243 = state_108392;
state_108392 = G__110243;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
taoensso$sente$state_machine__103041__auto__ = function(state_108392){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__103041__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__103041__auto____1.call(this,state_108392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__103041__auto____0;
taoensso$sente$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__103041__auto____1;
return taoensso$sente$state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_108400 = f__103245__auto__();
(statearr_108400[(6)] = c__103244__auto__);

return statearr_108400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
}));

return c__103244__auto__;
} else {
return null;
}
} else {
return reply_fn(new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337));
}
})], null));

}
}),new cljs.core.Keyword(null,"ajax-get-or-ws-handshake-fn","ajax-get-or-ws-handshake-fn",-1210409233),(function (ring_req){
var sch_uuid = taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ring_req,new cljs.core.Keyword(null,"params","params",710516235));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
var uid = user_id_fn__$1(ring_req,client_id);
var receive_event_msg_BANG_ = (function() {
var taoensso$sente$self = null;
var taoensso$sente$self__1 = (function (event){
return taoensso$sente$self.cljs$core$IFn$_invoke$arity$2(event,null);
});
var taoensso$sente$self__2 = (function (event,_QMARK_reply_fn){
return taoensso.sente.put_server_event_msg_GT_ch_recv_BANG_(ch_recv,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev_msg_const,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"?reply-fn","?reply-fn",-1479510592),_QMARK_reply_fn,new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)], 0)));
});
taoensso$sente$self = function(event,_QMARK_reply_fn){
switch(arguments.length){
case 1:
return taoensso$sente$self__1.call(this,event);
case 2:
return taoensso$sente$self__2.call(this,event,_QMARK_reply_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$self.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$self__1;
taoensso$sente$self.cljs$core$IFn$_invoke$arity$2 = taoensso$sente$self__2;
return taoensso$sente$self;
})()
;
var send_handshake_BANG_ = (function (server_ch,websocket_QMARK_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",586,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-handshake!"], null);
}),null)),null,-1274054484);

var _QMARK_handshake_data = (handshake_data_fn.cljs$core$IFn$_invoke$arity$1 ? handshake_data_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : handshake_data_fn.call(null,ring_req));
var handshake_ev = (((_QMARK_handshake_data == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uid,null,_QMARK_handshake_data], null)], null));
return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,handshake_ev));
});
if(clojure.string.blank_QMARK_(client_id)){
var err_msg = "Client's Ring request doesn't have a client id. Does your server have the necessary keyword Ring middleware (`wrap-params` & `wrap-keyword-params`)?";
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",599,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[err_msg,": %s"].join(''),ring_req], null);
}),null)),null,2099832491);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(err_msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ring-req","ring-req",-747861961),ring_req], null));
} else {
if(bad_csrf_QMARK_(ring_req)){
return (bad_csrf_fn.cljs$core$IFn$_invoke$arity$1 ? bad_csrf_fn.cljs$core$IFn$_invoke$arity$1(ring_req) : bad_csrf_fn.call(null,ring_req));
} else {
return taoensso.sente.interfaces.ring_req__GT_server_ch_resp(web_server_ch_adapter,ring_req,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-open","on-open",-1391088163),(function (server_ch,websocket_QMARK_){
if(cljs.core.truth_(websocket_QMARK_)){
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",612,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New WebSocket channel: %s (%s)",uid,sch_uuid], null);
}),null)),null,1552134364);
var updated_conn = upd_conn_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(connect_uid_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),uid))){
receive_event_msg_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

send_handshake_BANG_(server_ch,websocket_QMARK_);

var temp__5735__auto__ = ws_kalive_ms;
if(cljs.core.truth_(temp__5735__auto__)){
var ms = temp__5735__auto__;
var c__103244__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_108445){
var state_val_108446 = (state_108445[(1)]);
if((state_val_108446 === (7))){
var inst_108441 = (state_108445[(2)]);
var state_108445__$1 = state_108445;
var statearr_108447_110249 = state_108445__$1;
(statearr_108447_110249[(2)] = inst_108441);

(statearr_108447_110249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108446 === (1))){
var inst_108409 = udt_open;
var inst_108410 = inst_108409;
var state_108445__$1 = (function (){var statearr_108448 = state_108445;
(statearr_108448[(7)] = inst_108410);

return statearr_108448;
})();
var statearr_108449_110250 = state_108445__$1;
(statearr_108449_110250[(2)] = null);

(statearr_108449_110250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108446 === (4))){
var inst_108419 = (state_108445[(8)]);
var inst_108414 = (state_108445[(2)]);
var inst_108415 = cljs.core.deref(conns_);
var inst_108416 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_108417 = [new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id];
var inst_108418 = (new cljs.core.PersistentVector(null,3,(5),inst_108416,inst_108417,null));
var inst_108419__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_108415,inst_108418);
var state_108445__$1 = (function (){var statearr_108453 = state_108445;
(statearr_108453[(8)] = inst_108419__$1);

(statearr_108453[(9)] = inst_108414);

return statearr_108453;
})();
if(cljs.core.truth_(inst_108419__$1)){
var statearr_108454_110254 = state_108445__$1;
(statearr_108454_110254[(1)] = (5));

} else {
var statearr_108455_110255 = state_108445__$1;
(statearr_108455_110255[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108446 === (13))){
var inst_108425 = (state_108445[(10)]);
var inst_108434 = (state_108445[(2)]);
var inst_108410 = inst_108425;
var state_108445__$1 = (function (){var statearr_108456 = state_108445;
(statearr_108456[(7)] = inst_108410);

(statearr_108456[(11)] = inst_108434);

return statearr_108456;
})();
var statearr_108457_110256 = state_108445__$1;
(statearr_108457_110256[(2)] = null);

(statearr_108457_110256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108446 === (6))){
var state_108445__$1 = state_108445;
var statearr_108459_110258 = state_108445__$1;
(statearr_108459_110258[(2)] = null);

(statearr_108459_110258[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108446 === (3))){
var inst_108443 = (state_108445[(2)]);
var state_108445__$1 = state_108445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_108445__$1,inst_108443);
} else {
if((state_val_108446 === (12))){
var state_108445__$1 = state_108445;
var statearr_108460_110259 = state_108445__$1;
(statearr_108460_110259[(2)] = null);

(statearr_108460_110259[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108446 === (2))){
var inst_108412 = cljs.core.async.timeout(ms);
var state_108445__$1 = state_108445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_108445__$1,(4),inst_108412);
} else {
if((state_val_108446 === (11))){
var inst_108430 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304));
var inst_108431 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_108430);
var state_108445__$1 = state_108445;
var statearr_108461_110261 = state_108445__$1;
(statearr_108461_110261[(2)] = inst_108431);

(statearr_108461_110261[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108446 === (9))){
var state_108445__$1 = state_108445;
var statearr_108462_110262 = state_108445__$1;
(statearr_108462_110262[(2)] = null);

(statearr_108462_110262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108446 === (5))){
var inst_108419 = (state_108445[(8)]);
var inst_108424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_108419,(0),null);
var inst_108425 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_108419,(1),null);
var inst_108426 = taoensso.sente.interfaces.sch_open_QMARK_(server_ch);
var state_108445__$1 = (function (){var statearr_108463 = state_108445;
(statearr_108463[(12)] = inst_108424);

(statearr_108463[(10)] = inst_108425);

return statearr_108463;
})();
if(cljs.core.truth_(inst_108426)){
var statearr_108465_110265 = state_108445__$1;
(statearr_108465_110265[(1)] = (8));

} else {
var statearr_108467_110266 = state_108445__$1;
(statearr_108467_110266[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108446 === (10))){
var inst_108438 = (state_108445[(2)]);
var state_108445__$1 = state_108445;
var statearr_108469_110268 = state_108445__$1;
(statearr_108469_110268[(2)] = inst_108438);

(statearr_108469_110268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108446 === (8))){
var inst_108410 = (state_108445[(7)]);
var inst_108425 = (state_108445[(10)]);
var inst_108428 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_108425,inst_108410);
var state_108445__$1 = state_108445;
if(inst_108428){
var statearr_108470_110269 = state_108445__$1;
(statearr_108470_110269[(1)] = (11));

} else {
var statearr_108471_110270 = state_108445__$1;
(statearr_108471_110270[(1)] = (12));

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
});
return (function() {
var taoensso$sente$state_machine__103041__auto__ = null;
var taoensso$sente$state_machine__103041__auto____0 = (function (){
var statearr_108472 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_108472[(0)] = taoensso$sente$state_machine__103041__auto__);

(statearr_108472[(1)] = (1));

return statearr_108472;
});
var taoensso$sente$state_machine__103041__auto____1 = (function (state_108445){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_108445);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e108473){var ex__103044__auto__ = e108473;
var statearr_108474_110274 = state_108445;
(statearr_108474_110274[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_108445[(4)]))){
var statearr_108475_110276 = state_108445;
(statearr_108475_110276[(1)] = cljs.core.first((state_108445[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__110277 = state_108445;
state_108445 = G__110277;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
taoensso$sente$state_machine__103041__auto__ = function(state_108445){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__103041__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__103041__auto____1.call(this,state_108445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__103041__auto____0;
taoensso$sente$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__103041__auto____1;
return taoensso$sente$state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_108476 = f__103245__auto__();
(statearr_108476[(6)] = c__103244__auto__);

return statearr_108476;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
}));

return c__103244__auto__;
} else {
return null;
}
} else {
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",641,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["New Ajax handshake/poll: %s (%s)",uid,sch_uuid], null);
}),null)),null,-1393083217);
var updated_conn = upd_conn_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id,server_ch);
var udt_open = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var handshake_QMARK_ = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"init?","init?",438181499).cljs$core$IFn$_invoke$arity$1(updated_conn);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"handshake?","handshake?",-423743093).cljs$core$IFn$_invoke$arity$1(params);
}
})();
if(cljs.core.truth_(connect_uid_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),uid))){
receive_event_msg_BANG_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","uidport-open","chsk/uidport-open",1685786954),uid], null));
} else {
}

if(cljs.core.truth_(handshake_QMARK_)){
return send_handshake_BANG_(server_ch,websocket_QMARK_);
} else {
var temp__5735__auto__ = lp_timeout_ms;
if(cljs.core.truth_(temp__5735__auto__)){
var ms = temp__5735__auto__;
var c__103244__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_108506){
var state_val_108507 = (state_108506[(1)]);
if((state_val_108507 === (1))){
var inst_108480 = cljs.core.async.timeout(ms);
var state_108506__$1 = state_108506;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_108506__$1,(2),inst_108480);
} else {
if((state_val_108507 === (2))){
var inst_108488 = (state_108506[(7)]);
var inst_108483 = (state_108506[(2)]);
var inst_108484 = cljs.core.deref(conns_);
var inst_108485 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_108486 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid,client_id];
var inst_108487 = (new cljs.core.PersistentVector(null,3,(5),inst_108485,inst_108486,null));
var inst_108488__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_108484,inst_108487);
var state_108506__$1 = (function (){var statearr_108508 = state_108506;
(statearr_108508[(7)] = inst_108488__$1);

(statearr_108508[(8)] = inst_108483);

return statearr_108508;
})();
if(cljs.core.truth_(inst_108488__$1)){
var statearr_108509_110280 = state_108506__$1;
(statearr_108509_110280[(1)] = (3));

} else {
var statearr_108510_110281 = state_108506__$1;
(statearr_108510_110281[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108507 === (3))){
var inst_108488 = (state_108506[(7)]);
var inst_108493 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_108488,(0),null);
var inst_108494 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_108488,(1),null);
var inst_108495 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_108494,udt_open);
var state_108506__$1 = (function (){var statearr_108512 = state_108506;
(statearr_108512[(9)] = inst_108493);

return statearr_108512;
})();
if(inst_108495){
var statearr_108513_110283 = state_108506__$1;
(statearr_108513_110283[(1)] = (6));

} else {
var statearr_108514_110284 = state_108506__$1;
(statearr_108514_110284[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108507 === (4))){
var state_108506__$1 = state_108506;
var statearr_108515_110285 = state_108506__$1;
(statearr_108515_110285[(2)] = null);

(statearr_108515_110285[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108507 === (5))){
var inst_108504 = (state_108506[(2)]);
var state_108506__$1 = state_108506;
return cljs.core.async.impl.ioc_helpers.return_chan(state_108506__$1,inst_108504);
} else {
if((state_val_108507 === (6))){
var inst_108497 = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$2(packer__$1,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489));
var inst_108498 = taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,inst_108497);
var state_108506__$1 = state_108506;
var statearr_108516_110286 = state_108506__$1;
(statearr_108516_110286[(2)] = inst_108498);

(statearr_108516_110286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108507 === (7))){
var state_108506__$1 = state_108506;
var statearr_108517_110287 = state_108506__$1;
(statearr_108517_110287[(2)] = null);

(statearr_108517_110287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108507 === (8))){
var inst_108501 = (state_108506[(2)]);
var state_108506__$1 = state_108506;
var statearr_108518_110288 = state_108506__$1;
(statearr_108518_110288[(2)] = inst_108501);

(statearr_108518_110288[(1)] = (5));


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
});
return (function() {
var taoensso$sente$state_machine__103041__auto__ = null;
var taoensso$sente$state_machine__103041__auto____0 = (function (){
var statearr_108520 = [null,null,null,null,null,null,null,null,null,null];
(statearr_108520[(0)] = taoensso$sente$state_machine__103041__auto__);

(statearr_108520[(1)] = (1));

return statearr_108520;
});
var taoensso$sente$state_machine__103041__auto____1 = (function (state_108506){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_108506);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e108521){var ex__103044__auto__ = e108521;
var statearr_108522_110292 = state_108506;
(statearr_108522_110292[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_108506[(4)]))){
var statearr_108523_110295 = state_108506;
(statearr_108523_110295[(1)] = cljs.core.first((state_108506[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__110296 = state_108506;
state_108506 = G__110296;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
taoensso$sente$state_machine__103041__auto__ = function(state_108506){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__103041__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__103041__auto____1.call(this,state_108506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__103041__auto____0;
taoensso$sente$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__103041__auto____1;
return taoensso$sente$state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_108526 = f__103245__auto__();
(statearr_108526[(6)] = c__103244__auto__);

return statearr_108526;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
}));

return c__103244__auto__;
} else {
return null;
}
}
}
}),new cljs.core.Keyword(null,"on-msg","on-msg",-2021925279),(function (server_ch,websocket_QMARK_,req_ppstr){
if(cljs.core.truth_(websocket_QMARK_)){
} else {
throw (new Error("Assert failed: websocket?"));
}

upd_conn_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id);

var vec__108528 = taoensso.sente.unpack(packer__$1,req_ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108528,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108528,(1),null);
return receive_event_msg_BANG_(clj,(cljs.core.truth_(_QMARK_cb_uuid)?(function taoensso$sente$reply_fn(resp_clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",671,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send (ws reply): %s",resp_clj], null);
}),null)),null,658799968);

return taoensso.sente.interfaces.sch_send_BANG_(server_ch,websocket_QMARK_,taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(packer__$1,resp_clj,_QMARK_cb_uuid));
}):null));
}),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (server_ch,websocket_QMARK_,_status){
var conn_type = (cljs.core.truth_(websocket_QMARK_)?new cljs.core.Keyword(null,"ws","ws",86841443):new cljs.core.Keyword(null,"ajax","ajax",814345549));
var _ = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",680,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["%s channel closed: %s (%s)",(cljs.core.truth_(websocket_QMARK_)?"WebSocket":"Ajax"),uid,sch_uuid], null);
}),null)),null,419918278);
var updated_conn = upd_conn_BANG_(conn_type,uid,client_id,null);
var udt_close = new cljs.core.Keyword(null,"udt","udt",2011712751).cljs$core$IFn$_invoke$arity$1(updated_conn);
var c__103244__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_108587){
var state_val_108588 = (state_108587[(1)]);
if((state_val_108588 === (7))){
var state_108587__$1 = state_108587;
var statearr_108593_110310 = state_108587__$1;
(statearr_108593_110310[(2)] = null);

(statearr_108593_110310[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108588 === (1))){
var inst_108531 = cljs.core.async.timeout((5000));
var state_108587__$1 = state_108587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_108587__$1,(2),inst_108531);
} else {
if((state_val_108588 === (4))){
var state_108587__$1 = state_108587;
var statearr_108594_110315 = state_108587__$1;
(statearr_108594_110315[(2)] = null);

(statearr_108594_110315[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108588 === (13))){
var state_108587__$1 = state_108587;
var statearr_108598_110316 = state_108587__$1;
(statearr_108598_110316[(2)] = null);

(statearr_108598_110316[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108588 === (6))){
var inst_108542 = (state_108587[(7)]);
var inst_108559 = (state_108587[(8)]);
var inst_108541 = (state_108587[(9)]);
var inst_108543 = (state_108587[(10)]);
var inst_108554 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_108555 = [conn_type,uid,client_id];
var inst_108556 = (new cljs.core.PersistentVector(null,3,(5),inst_108554,inst_108555,null));
var inst_108558 = (function (){var vec__108534 = inst_108541;
var __QMARK_sch = inst_108542;
var udt_t1 = inst_108543;
return (function (p__108557){
var vec__108601 = p__108557;
var _sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108601,(0),null);
var udt_t1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108601,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1__$1,udt_close)){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),true);
} else {
return taoensso.encore.swapped(udt_t1__$1,false);
}
});
})();
var inst_108559__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_108556,inst_108558);
var state_108587__$1 = (function (){var statearr_108605 = state_108587;
(statearr_108605[(8)] = inst_108559__$1);

return statearr_108605;
})();
if(cljs.core.truth_(inst_108559__$1)){
var statearr_108606_110317 = state_108587__$1;
(statearr_108606_110317[(1)] = (9));

} else {
var statearr_108607_110318 = state_108587__$1;
(statearr_108607_110318[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108588 === (3))){
var inst_108542 = (state_108587[(7)]);
var inst_108541 = (state_108587[(9)]);
var inst_108543 = (state_108587[(10)]);
var inst_108546 = (function (){var vec__108534 = inst_108541;
var __QMARK_sch = inst_108542;
var udt_t1 = inst_108543;
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["close-timeout: %s %s %s %s",conn_type,uid,sch_uuid,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(udt_t1,udt_close),udt_t1,udt_close], null)], null);
});
})();
var inst_108547 = (new cljs.core.Delay(inst_108546,null));
var inst_108548 = taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",694,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),inst_108547,null,-802210339);
var state_108587__$1 = state_108587;
var statearr_108611_110319 = state_108587__$1;
(statearr_108611_110319[(2)] = inst_108548);

(statearr_108611_110319[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108588 === (12))){
var inst_108569 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_108571 = [new cljs.core.Keyword("chsk","uidport-close","chsk/uidport-close",901058678),uid];
var inst_108572 = (new cljs.core.PersistentVector(null,2,(5),inst_108569,inst_108571,null));
var inst_108573 = receive_event_msg_BANG_(inst_108572);
var state_108587__$1 = state_108587;
var statearr_108612_110321 = state_108587__$1;
(statearr_108612_110321[(2)] = inst_108573);

(statearr_108612_110321[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108588 === (2))){
var inst_108541 = (state_108587[(9)]);
var inst_108533 = (state_108587[(2)]);
var inst_108537 = cljs.core.deref(conns_);
var inst_108538 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_108539 = [conn_type,uid,client_id];
var inst_108540 = (new cljs.core.PersistentVector(null,3,(5),inst_108538,inst_108539,null));
var inst_108541__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(inst_108537,inst_108540);
var inst_108542 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_108541__$1,(0),null);
var inst_108543 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_108541__$1,(1),null);
var inst_108544 = cljs.core.deref(taoensso.sente.debug_mode_QMARK__);
var state_108587__$1 = (function (){var statearr_108613 = state_108587;
(statearr_108613[(7)] = inst_108542);

(statearr_108613[(9)] = inst_108541__$1);

(statearr_108613[(10)] = inst_108543);

(statearr_108613[(11)] = inst_108533);

return statearr_108613;
})();
if(cljs.core.truth_(inst_108544)){
var statearr_108614_110323 = state_108587__$1;
(statearr_108614_110323[(1)] = (3));

} else {
var statearr_108615_110324 = state_108587__$1;
(statearr_108615_110324[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108588 === (11))){
var inst_108579 = (state_108587[(2)]);
var state_108587__$1 = state_108587;
var statearr_108616_110325 = state_108587__$1;
(statearr_108616_110325[(2)] = inst_108579);

(statearr_108616_110325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108588 === (9))){
var inst_108542 = (state_108587[(7)]);
var inst_108559 = (state_108587[(8)]);
var inst_108541 = (state_108587[(9)]);
var inst_108543 = (state_108587[(10)]);
var inst_108561 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_108562 = [conn_type,uid];
var inst_108563 = (new cljs.core.PersistentVector(null,2,(5),inst_108561,inst_108562,null));
var inst_108565 = (function (){var vec__108534 = inst_108541;
var __QMARK_sch = inst_108542;
var udt_t1 = inst_108543;
var disconnect_QMARK_ = inst_108559;
return (function (_QMARK_m){
if(cljs.core.empty_QMARK_(_QMARK_m)){
return new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782);
} else {
return _QMARK_m;
}
});
})();
var inst_108566 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_108563,inst_108565);
var inst_108567 = upd_connected_uid_BANG_(uid);
var state_108587__$1 = (function (){var statearr_108617 = state_108587;
(statearr_108617[(12)] = inst_108566);

return statearr_108617;
})();
if(cljs.core.truth_(inst_108567)){
var statearr_108619_110328 = state_108587__$1;
(statearr_108619_110328[(1)] = (12));

} else {
var statearr_108620_110329 = state_108587__$1;
(statearr_108620_110329[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108588 === (5))){
var inst_108543 = (state_108587[(10)]);
var inst_108551 = (state_108587[(2)]);
var inst_108552 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_108543,udt_close);
var state_108587__$1 = (function (){var statearr_108622 = state_108587;
(statearr_108622[(13)] = inst_108551);

return statearr_108622;
})();
if(inst_108552){
var statearr_108627_110330 = state_108587__$1;
(statearr_108627_110330[(1)] = (6));

} else {
var statearr_108628_110331 = state_108587__$1;
(statearr_108628_110331[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108588 === (14))){
var inst_108576 = (state_108587[(2)]);
var state_108587__$1 = state_108587;
var statearr_108632_110332 = state_108587__$1;
(statearr_108632_110332[(2)] = inst_108576);

(statearr_108632_110332[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108588 === (10))){
var state_108587__$1 = state_108587;
var statearr_108637_110333 = state_108587__$1;
(statearr_108637_110333[(2)] = null);

(statearr_108637_110333[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108588 === (8))){
var inst_108583 = (state_108587[(2)]);
var state_108587__$1 = state_108587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_108587__$1,inst_108583);
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
var taoensso$sente$state_machine__103041__auto__ = null;
var taoensso$sente$state_machine__103041__auto____0 = (function (){
var statearr_108648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_108648[(0)] = taoensso$sente$state_machine__103041__auto__);

(statearr_108648[(1)] = (1));

return statearr_108648;
});
var taoensso$sente$state_machine__103041__auto____1 = (function (state_108587){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_108587);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e108649){var ex__103044__auto__ = e108649;
var statearr_108650_110342 = state_108587;
(statearr_108650_110342[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_108587[(4)]))){
var statearr_108655_110343 = state_108587;
(statearr_108655_110343[(1)] = cljs.core.first((state_108587[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__110344 = state_108587;
state_108587 = G__110344;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
taoensso$sente$state_machine__103041__auto__ = function(state_108587){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__103041__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__103041__auto____1.call(this,state_108587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__103041__auto____0;
taoensso$sente$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__103041__auto____1;
return taoensso$sente$state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_108656 = f__103245__auto__();
(statearr_108656[(6)] = c__103244__auto__);

return statearr_108656;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
}));

return c__103244__auto__;
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (server_ch,websocket_QMARK_,error){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",716,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ring-req->server-ch-resp error: %s (%s)",error,uid,sch_uuid], null);
}),null)),null,-949760607);
})], null));

}
}
})], null);
}));

(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(taoensso.sente.make_channel_socket_server_BANG_.cljs$lang$applyTo = (function (seq108236){
var G__108237 = cljs.core.first(seq108236);
var seq108236__$1 = cljs.core.next(seq108236);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__108237,seq108236__$1);
}));

/**
 * Actually pushes buffered events (as packed-str) to all uid's WebSocket conns.
 */
taoensso.sente.send_buffered_server_evs_GT_ws_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ws_clients_BANG_(conns_,uid,buffered_evs_pstr,upd_conn_BANG_){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",722,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ws-clients!: %s",buffered_evs_pstr], null);
}),null)),null,1567402720);

var seq__108660 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws","ws",86841443),uid], null)));
var chunk__108661 = null;
var count__108662 = (0);
var i__108663 = (0);
while(true){
if((i__108663 < count__108662)){
var vec__108680 = chunk__108661.cljs$core$IIndexed$_nth$arity$2(null,i__108663);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108680,(0),null);
var vec__108683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108680,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108683,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108683,(1),null);
var temp__5735__auto___110346 = _QMARK_sch;
if(cljs.core.truth_(temp__5735__auto___110346)){
var sch_110347 = temp__5735__auto___110346;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id) : upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id));

taoensso.sente.interfaces.sch_send_BANG_(sch_110347,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__110348 = seq__108660;
var G__110349 = chunk__108661;
var G__110350 = count__108662;
var G__110351 = (i__108663 + (1));
seq__108660 = G__110348;
chunk__108661 = G__110349;
count__108662 = G__110350;
i__108663 = G__110351;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__108660);
if(temp__5735__auto__){
var seq__108660__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__108660__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__108660__$1);
var G__110352 = cljs.core.chunk_rest(seq__108660__$1);
var G__110353 = c__4556__auto__;
var G__110354 = cljs.core.count(c__4556__auto__);
var G__110355 = (0);
seq__108660 = G__110352;
chunk__108661 = G__110353;
count__108662 = G__110354;
i__108663 = G__110355;
continue;
} else {
var vec__108693 = cljs.core.first(seq__108660__$1);
var client_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108693,(0),null);
var vec__108696 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108693,(1),null);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108696,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108696,(1),null);
var temp__5735__auto___110356__$1 = _QMARK_sch;
if(cljs.core.truth_(temp__5735__auto___110356__$1)){
var sch_110357 = temp__5735__auto___110356__$1;
(upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3 ? upd_conn_BANG_.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id) : upd_conn_BANG_.call(null,new cljs.core.Keyword(null,"ws","ws",86841443),uid,client_id));

taoensso.sente.interfaces.sch_send_BANG_(sch_110357,new cljs.core.Keyword(null,"websocket","websocket",-1714963101),buffered_evs_pstr);
} else {
}


var G__110358 = cljs.core.next(seq__108660__$1);
var G__110359 = null;
var G__110360 = (0);
var G__110361 = (0);
seq__108660 = G__110358;
chunk__108661 = G__110359;
count__108662 = G__110360;
i__108663 = G__110361;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Actually pushes buffered events (as packed-str) to all uid's Ajax conns.
 *   Allows some time for possible Ajax poller reconnects.
 */
taoensso.sente.send_buffered_server_evs_GT_ajax_clients_BANG_ = (function taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG_(conns_,uid,buffered_evs_pstr){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",732,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["send-buffered-server-evs>ajax-clients!: %s",buffered_evs_pstr], null);
}),null)),null,1620493124);

var ms_backoffs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(90),(180),(360),(720),(1440)], null);
var client_ids_unsatisfied = cljs.core.keys(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(conns_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid], null)));
if(cljs.core.empty_QMARK_(client_ids_unsatisfied)){
return null;
} else {
var c__103244__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_108753){
var state_val_108754 = (state_108753[(1)]);
if((state_val_108754 === (7))){
var inst_108701 = (state_108753[(7)]);
var inst_108709 = (state_108753[(8)]);
var inst_108702 = (state_108753[(9)]);
var inst_108725 = (function (){var n = inst_108701;
var client_ids_satisfied = inst_108702;
var _QMARK_pulled = inst_108709;
return (function (s,client_id,p__108724){
var vec__108757 = p__108724;
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108757,(0),null);
var _udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108757,(1),null);
var sent_QMARK_ = (function (){var temp__5735__auto__ = _QMARK_sch;
if(cljs.core.truth_(temp__5735__auto__)){
var sch = temp__5735__auto__;
return taoensso.sente.interfaces.sch_send_BANG_(_QMARK_sch,cljs.core.not(new cljs.core.Keyword(null,"websocket","websocket",-1714963101)),buffered_evs_pstr);
} else {
return null;
}
})();
if(cljs.core.truth_(sent_QMARK_)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(s,client_id);
} else {
return s;
}
});
})();
var inst_108726 = cljs.core.PersistentHashSet.EMPTY;
var inst_108727 = cljs.core.reduce_kv(inst_108725,inst_108726,inst_108709);
var state_108753__$1 = state_108753;
var statearr_108762_110362 = state_108753__$1;
(statearr_108762_110362[(2)] = inst_108727);

(statearr_108762_110362[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108754 === (1))){
var inst_108700 = cljs.core.PersistentHashSet.EMPTY;
var inst_108701 = (0);
var inst_108702 = inst_108700;
var state_108753__$1 = (function (){var statearr_108763 = state_108753;
(statearr_108763[(7)] = inst_108701);

(statearr_108763[(9)] = inst_108702);

return statearr_108763;
})();
var statearr_108766_110363 = state_108753__$1;
(statearr_108766_110363[(2)] = null);

(statearr_108766_110363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108754 === (4))){
var state_108753__$1 = state_108753;
var statearr_108767_110364 = state_108753__$1;
(statearr_108767_110364[(2)] = true);

(statearr_108767_110364[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108754 === (15))){
var inst_108746 = (state_108753[(2)]);
var state_108753__$1 = state_108753;
var statearr_108768_110365 = state_108753__$1;
(statearr_108768_110365[(2)] = inst_108746);

(statearr_108768_110365[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108754 === (13))){
var inst_108732 = (state_108753[(10)]);
var inst_108737 = cljs.core.rand_int(inst_108732);
var inst_108738 = (inst_108732 + inst_108737);
var inst_108739 = cljs.core.async.timeout(inst_108738);
var state_108753__$1 = state_108753;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_108753__$1,(16),inst_108739);
} else {
if((state_val_108754 === (6))){
var inst_108709 = (state_108753[(8)]);
var inst_108718 = (state_108753[(2)]);
var state_108753__$1 = (function (){var statearr_108772 = state_108753;
(statearr_108772[(11)] = inst_108718);

return statearr_108772;
})();
if(cljs.core.truth_(inst_108709)){
var statearr_108773_110366 = state_108753__$1;
(statearr_108773_110366[(1)] = (7));

} else {
var statearr_108774_110367 = state_108753__$1;
(statearr_108774_110367[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108754 === (3))){
var inst_108751 = (state_108753[(2)]);
var state_108753__$1 = state_108753;
return cljs.core.async.impl.ioc_helpers.return_chan(state_108753__$1,inst_108751);
} else {
if((state_val_108754 === (12))){
var inst_108749 = (state_108753[(2)]);
var state_108753__$1 = state_108753;
var statearr_108775_110368 = state_108753__$1;
(statearr_108775_110368[(2)] = inst_108749);

(statearr_108775_110368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108754 === (2))){
var inst_108701 = (state_108753[(7)]);
var inst_108709 = (state_108753[(8)]);
var inst_108702 = (state_108753[(9)]);
var inst_108705 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_108706 = [new cljs.core.Keyword(null,"ajax","ajax",814345549),uid];
var inst_108707 = (new cljs.core.PersistentVector(null,2,(5),inst_108705,inst_108706,null));
var inst_108708 = (function (){var n = inst_108701;
var client_ids_satisfied = inst_108702;
return (function (m){
var ks_to_pull = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(client_ids_satisfied,cljs.core.keys(m));
if(cljs.core.empty_QMARK_(ks_to_pull)){
return taoensso.encore.swapped(m,null);
} else {
return taoensso.encore.swapped(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,k){
var vec__108777 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m__$1,k);
var _QMARK_sch = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108777,(0),null);
var udt = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108777,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m__$1,k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,udt], null));
}),m,ks_to_pull),cljs.core.select_keys(m,ks_to_pull));
}
});
})();
var inst_108709__$1 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(conns_,inst_108707,inst_108708);
var inst_108710 = (function (){var n = inst_108701;
var client_ids_satisfied = inst_108702;
var _QMARK_pulled = inst_108709__$1;
return (function (x){
var or__4126__auto__ = (x == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return taoensso.truss.impl.non_throwing(cljs.core.map_QMARK_)(x);
}
});
})();
var inst_108712 = inst_108710(inst_108709__$1);
var state_108753__$1 = (function (){var statearr_108781 = state_108753;
(statearr_108781[(8)] = inst_108709__$1);

return statearr_108781;
})();
if(cljs.core.truth_(inst_108712)){
var statearr_108784_110369 = state_108753__$1;
(statearr_108784_110369[(1)] = (4));

} else {
var statearr_108785_110370 = state_108753__$1;
(statearr_108785_110370[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108754 === (11))){
var state_108753__$1 = state_108753;
var statearr_108786_110371 = state_108753__$1;
(statearr_108786_110371[(2)] = null);

(statearr_108786_110371[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108754 === (9))){
var inst_108701 = (state_108753[(7)]);
var inst_108702 = (state_108753[(9)]);
var inst_108732 = (state_108753[(10)]);
var inst_108730 = (state_108753[(2)]);
var inst_108731 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_108702,inst_108730);
var inst_108732__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ms_backoffs,inst_108701);
var state_108753__$1 = (function (){var statearr_108794 = state_108753;
(statearr_108794[(10)] = inst_108732__$1);

(statearr_108794[(12)] = inst_108731);

return statearr_108794;
})();
if(cljs.core.truth_(inst_108732__$1)){
var statearr_108797_110372 = state_108753__$1;
(statearr_108797_110372[(1)] = (10));

} else {
var statearr_108798_110373 = state_108753__$1;
(statearr_108798_110373[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108754 === (5))){
var inst_108709 = (state_108753[(8)]);
var inst_108716 = taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",759,"([:or nil? map?] ?pulled)",inst_108709,null,null);
var state_108753__$1 = state_108753;
var statearr_108799_110374 = state_108753__$1;
(statearr_108799_110374[(2)] = inst_108716);

(statearr_108799_110374[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108754 === (14))){
var state_108753__$1 = state_108753;
var statearr_108800_110375 = state_108753__$1;
(statearr_108800_110375[(2)] = null);

(statearr_108800_110375[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108754 === (16))){
var inst_108701 = (state_108753[(7)]);
var inst_108731 = (state_108753[(12)]);
var inst_108741 = (state_108753[(2)]);
var inst_108742 = (inst_108701 + (1));
var inst_108701__$1 = inst_108742;
var inst_108702 = inst_108731;
var state_108753__$1 = (function (){var statearr_108801 = state_108753;
(statearr_108801[(7)] = inst_108701__$1);

(statearr_108801[(9)] = inst_108702);

(statearr_108801[(13)] = inst_108741);

return statearr_108801;
})();
var statearr_108802_110376 = state_108753__$1;
(statearr_108802_110376[(2)] = null);

(statearr_108802_110376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108754 === (10))){
var inst_108731 = (state_108753[(12)]);
var inst_108734 = cljs.core.complement(inst_108731);
var inst_108735 = taoensso.encore.rsome(inst_108734,client_ids_unsatisfied);
var state_108753__$1 = state_108753;
if(cljs.core.truth_(inst_108735)){
var statearr_108803_110377 = state_108753__$1;
(statearr_108803_110377[(1)] = (13));

} else {
var statearr_108804_110378 = state_108753__$1;
(statearr_108804_110378[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_108754 === (8))){
var state_108753__$1 = state_108753;
var statearr_108805_110379 = state_108753__$1;
(statearr_108805_110379[(2)] = null);

(statearr_108805_110379[(1)] = (9));


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
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__103041__auto__ = null;
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__103041__auto____0 = (function (){
var statearr_108806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_108806[(0)] = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__103041__auto__);

(statearr_108806[(1)] = (1));

return statearr_108806;
});
var taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__103041__auto____1 = (function (state_108753){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_108753);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e108807){var ex__103044__auto__ = e108807;
var statearr_108808_110380 = state_108753;
(statearr_108808_110380[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_108753[(4)]))){
var statearr_108809_110381 = state_108753;
(statearr_108809_110381[(1)] = cljs.core.first((state_108753[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__110382 = state_108753;
state_108753 = G__110382;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__103041__auto__ = function(state_108753){
switch(arguments.length){
case 0:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__103041__auto____0.call(this);
case 1:
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__103041__auto____1.call(this,state_108753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__103041__auto____0;
taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__103041__auto____1;
return taoensso$sente$send_buffered_server_evs_GT_ajax_clients_BANG__$_state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_108810 = f__103245__auto__();
(statearr_108810[(6)] = c__103244__auto__);

return statearr_108810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
}));

return c__103244__auto__;
}
});
/**
 * Alias of `taoensso.encore/ajax-lite`
 */
taoensso.sente.ajax_lite = taoensso.encore.ajax_lite;

/**
 * @interface
 */
taoensso.sente.IChSocket = function(){};

var taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_110383 = (function (chsk){
var x__4428__auto__ = (((chsk == null))?null:chsk);
var m__4429__auto__ = (taoensso.sente._chsk_connect_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4429__auto__.call(null,chsk));
} else {
var m__4426__auto__ = (taoensso.sente._chsk_connect_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4426__auto__.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-connect!",chsk);
}
}
});
taoensso.sente._chsk_connect_BANG_ = (function taoensso$sente$_chsk_connect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(chsk);
} else {
return taoensso$sente$IChSocket$_chsk_connect_BANG_$dyn_110383(chsk);
}
});

var taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_110384 = (function (chsk,reason){
var x__4428__auto__ = (((chsk == null))?null:chsk);
var m__4429__auto__ = (taoensso.sente._chsk_disconnect_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__4429__auto__.call(null,chsk,reason));
} else {
var m__4426__auto__ = (taoensso.sente._chsk_disconnect_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(chsk,reason) : m__4426__auto__.call(null,chsk,reason));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-disconnect!",chsk);
}
}
});
taoensso.sente._chsk_disconnect_BANG_ = (function taoensso$sente$_chsk_disconnect_BANG_(chsk,reason){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(chsk,reason);
} else {
return taoensso$sente$IChSocket$_chsk_disconnect_BANG_$dyn_110384(chsk,reason);
}
});

var taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_110385 = (function (chsk){
var x__4428__auto__ = (((chsk == null))?null:chsk);
var m__4429__auto__ = (taoensso.sente._chsk_reconnect_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4429__auto__.call(null,chsk));
} else {
var m__4426__auto__ = (taoensso.sente._chsk_reconnect_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(chsk) : m__4426__auto__.call(null,chsk));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-reconnect!",chsk);
}
}
});
taoensso.sente._chsk_reconnect_BANG_ = (function taoensso$sente$_chsk_reconnect_BANG_(chsk){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1(chsk);
} else {
return taoensso$sente$IChSocket$_chsk_reconnect_BANG_$dyn_110385(chsk);
}
});

var taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_110386 = (function (chsk,ev,opts){
var x__4428__auto__ = (((chsk == null))?null:chsk);
var m__4429__auto__ = (taoensso.sente._chsk_send_BANG_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__4429__auto__.call(null,chsk,ev,opts));
} else {
var m__4426__auto__ = (taoensso.sente._chsk_send_BANG_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(chsk,ev,opts) : m__4426__auto__.call(null,chsk,ev,opts));
} else {
throw cljs.core.missing_protocol("IChSocket.-chsk-send!",chsk);
}
}
});
taoensso.sente._chsk_send_BANG_ = (function taoensso$sente$_chsk_send_BANG_(chsk,ev,opts){
if((((!((chsk == null)))) && ((!((chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 == null)))))){
return chsk.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(chsk,ev,opts);
} else {
return taoensso$sente$IChSocket$_chsk_send_BANG_$dyn_110386(chsk,ev,opts);
}
});

taoensso.sente.chsk_connect_BANG_ = (function taoensso$sente$chsk_connect_BANG_(chsk){
return taoensso.sente._chsk_connect_BANG_(chsk);
});

taoensso.sente.chsk_disconnect_BANG_ = (function taoensso$sente$chsk_disconnect_BANG_(chsk){
return taoensso.sente._chsk_disconnect_BANG_(chsk,new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641));
});

/**
 * Useful for reauthenticating after login/logout, etc.
 */
taoensso.sente.chsk_reconnect_BANG_ = (function taoensso$sente$chsk_reconnect_BANG_(chsk){
return taoensso.sente._chsk_reconnect_BANG_(chsk);
});

/**
 * Deprecated
 */
taoensso.sente.chsk_destroy_BANG_ = taoensso.sente.chsk_disconnect_BANG_;
/**
 * Sends `[ev-id ev-?data :as event]`, returns true on apparent success.
 */
taoensso.sente.chsk_send_BANG_ = (function taoensso$sente$chsk_send_BANG_(var_args){
var G__108819 = arguments.length;
switch (G__108819) {
case 2:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (chsk,ev){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,cljs.core.PersistentArrayMap.EMPTY);
}));

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (chsk,ev,_QMARK_timeout_ms,_QMARK_cb){
return taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3(chsk,ev,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),_QMARK_timeout_ms,new cljs.core.Keyword(null,"cb","cb",589947841),_QMARK_cb], null));
}));

(taoensso.sente.chsk_send_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (chsk,ev,opts){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",809,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send: (%s) %s",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"cb","cb",589947841),cljs.core.boolean$(new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(opts))),ev], null);
}),null)),null,79041);

return taoensso.sente._chsk_send_BANG_(chsk,ev,opts);
}));

(taoensso.sente.chsk_send_BANG_.cljs$lang$maxFixedArity = 4);

taoensso.sente.chsk_send__GT_closed_BANG_ = (function taoensso$sente$chsk_send__GT_closed_BANG_(_QMARK_cb_fn){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",814,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk send against closed chsk."], null);
}),null)),null,1244291727);

if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","closed","chsk/closed",-922855264)));
} else {
}

return false;
});
taoensso.sente.assert_send_args = (function taoensso$sente$assert_send_args(x,_QMARK_timeout_ms,_QMARK_cb){
taoensso.sente.assert_event(x);

if((((((_QMARK_timeout_ms == null)) && ((_QMARK_cb == null)))) || (taoensso.encore.nat_int_QMARK_(_QMARK_timeout_ms)))){
} else {
throw (new Error(["Assert failed: ",["cb requires a timeout; timeout-ms should be a +ive integer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(_QMARK_timeout_ms)].join(''),"\n","(or (and (nil? ?timeout-ms) (nil? ?cb)) (and (enc/nat-int? ?timeout-ms)))"].join('')));
}

if((((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)) || (taoensso.encore.chan_QMARK_(_QMARK_cb)))){
return null;
} else {
throw (new Error(["Assert failed: ",["cb should be nil, an ifn, or a channel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(_QMARK_cb))].join(''),"\n","(or (nil? ?cb) (ifn? ?cb) (enc/chan? ?cb))"].join('')));
}
});
taoensso.sente.pull_unused_cb_fn_BANG_ = (function taoensso$sente$pull_unused_cb_fn_BANG_(cbs_waiting_,_QMARK_cb_uuid){
var temp__5735__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5735__auto__)){
var cb_uuid = temp__5735__auto__;
return taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$3(cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid], null),(function (_QMARK_f){
return taoensso.encore.swapped(new cljs.core.Keyword("swap","dissoc","swap/dissoc",-605373782),_QMARK_f);
}));
} else {
return null;
}
});
/**
 * Atomically swaps the value of chk's :state_ atom.
 */
taoensso.sente.swap_chsk_state_BANG_ = (function taoensso$sente$swap_chsk_state_BANG_(chsk,f){
var vec__108825 = taoensso.encore.swap_in_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk),(function (old_state){
var new_state = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(old_state) : f.call(null,old_state));
var new_state__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"first-open?","first-open?",396686530).cljs$core$IFn$_invoke$arity$1(old_state))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_state,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),false):new_state);
var new_state__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(new_state__$1))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(new_state__$1,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)):new_state__$1);
return taoensso.encore.swapped(new_state__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state__$2], null));
}));
var old_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108825,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108825,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_state,new_state)){
var output = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_state,new_state], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(chsk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"state","state",-1988618099)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","state","chsk/state",-1991397620),output], null));

return output;
} else {
return null;
}
});
taoensso.sente.chsk_state__GT_closed = (function taoensso$sente$chsk_state__GT_closed(state,reason){
var e_110388 = (function (){try{if(cljs.core.map_QMARK_(state)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e108832){if((e108832 instanceof Error)){
var e_110388 = e108832;
return e_110388;
} else {
throw e108832;

}
}})();
if((e_110388 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",861,"(map? state)",state,e_110388,null);
}

var e_110389 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__108834 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"requested-disconnect","requested-disconnect",1037120641),null,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720),null,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424),null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__108834) : taoensso.truss.impl.set_STAR_.call(null,G__108834));
})(),x);
})(reason)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e108833){if((e108833 instanceof Error)){
var e_110389 = e108833;
return e_110389;
} else {
throw e108833;

}
}})();
if((e_110389 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",862,"([:el #{:requested-disconnect :downgrading-ws-to-ajax :unexpected :requested-reconnect}] reason)",reason,e_110389,null);
}

if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(reason,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733)),new cljs.core.Keyword(null,"open?","open?",1238443125),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"last-close","last-close",-2054255782),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null)], 0));
} else {
return state;
}
});
/**
 * Experimental, undocumented. Allows a core.async channel to be provided
 *   instead of a cb-fn. The channel will receive values of form
 *   [<event-id>.cb <reply>].
 */
taoensso.sente.cb_chan_as_fn = (function taoensso$sente$cb_chan_as_fn(_QMARK_cb,ev){
if((((_QMARK_cb == null)) || (cljs.core.ifn_QMARK_(_QMARK_cb)))){
return _QMARK_cb;
} else {
var e_110390 = (function (){try{if(taoensso.encore.chan_QMARK_(_QMARK_cb)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e108839){if((e108839 instanceof Error)){
var e_110390 = e108839;
return e_110390;
} else {
throw e108839;

}
}})();
if((e_110390 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",883,"(enc/chan? ?cb)",_QMARK_cb,e_110390,null);
}

taoensso.sente.assert_event(ev);

var vec__108842 = ev;
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108842,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108842,(1),null);
var cb_ch = _QMARK_cb;
return (function (reply){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(cb_ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([taoensso.encore.as_qname(ev_id),".cb"].join('')),reply], null));
});
}
});
taoensso.sente.receive_buffered_evs_BANG_ = (function taoensso$sente$receive_buffered_evs_BANG_(chs,clj){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",894,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-buffered-evs!: %s",clj], null);
}),null)),null,-2142160298);

var buffered_evs = ((cljs.core.vector_QMARK_(clj))?clj:taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",895,"(vector? clj)",clj,null,null));
var seq__108851 = cljs.core.seq(buffered_evs);
var chunk__108852 = null;
var count__108853 = (0);
var i__108854 = (0);
while(true){
if((i__108854 < count__108853)){
var ev = chunk__108852.cljs$core$IIndexed$_nth$arity$2(null,i__108854);
taoensso.sente.assert_event(ev);

var vec__108864_110391 = ev;
var id_110392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108864_110391,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_110392),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__110393 = seq__108851;
var G__110394 = chunk__108852;
var G__110395 = count__108853;
var G__110396 = (i__108854 + (1));
seq__108851 = G__110393;
chunk__108852 = G__110394;
count__108853 = G__110395;
i__108854 = G__110396;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__108851);
if(temp__5735__auto__){
var seq__108851__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__108851__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__108851__$1);
var G__110397 = cljs.core.chunk_rest(seq__108851__$1);
var G__110398 = c__4556__auto__;
var G__110399 = cljs.core.count(c__4556__auto__);
var G__110400 = (0);
seq__108851 = G__110397;
chunk__108852 = G__110398;
count__108853 = G__110399;
i__108854 = G__110400;
continue;
} else {
var ev = cljs.core.first(seq__108851__$1);
taoensso.sente.assert_event(ev);

var vec__108870_110401 = ev;
var id_110402 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108870_110401,(0),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.namespace(id_110402),"chsk")){
} else {
throw (new Error("Assert failed: (not= (namespace id) \"chsk\")"));
}

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(chs),ev);


var G__110403 = cljs.core.next(seq__108851__$1);
var G__110404 = null;
var G__110405 = (0);
var G__110406 = (0);
seq__108851 = G__110403;
chunk__108852 = G__110404;
count__108853 = G__110405;
i__108854 = G__110406;
continue;
}
} else {
return null;
}
}
break;
}
});
taoensso.sente.handshake_QMARK_ = (function taoensso$sente$handshake_QMARK_(x){
if(cljs.core.vector_QMARK_(x)){
var vec__108879 = x;
var x1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108879,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x1,new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686));
} else {
return false;
}
});
taoensso.sente.receive_handshake_BANG_ = (function taoensso$sente$receive_handshake_BANG_(chsk_type,chsk,clj){
var e_110407 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__108887 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__108887) : taoensso.truss.impl.set_STAR_.call(null,G__108887));
})(),x);
})(chsk_type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e108886){if((e108886 instanceof Error)){
var e_110407 = e108886;
return e_110407;
} else {
throw e108886;

}
}})();
if((e_110407 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",909,"([:el #{:ws :ajax}] chsk-type)",chsk_type,e_110407,null);
}

var e_110408 = (function (){try{if(taoensso.sente.handshake_QMARK_(clj)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e108890){if((e108890 instanceof Error)){
var e_110408 = e108890;
return e_110408;
} else {
throw e108890;

}
}})();
if((e_110408 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",910,"(handshake? clj)",clj,e_110408,null);
}

taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",911,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["receive-handshake! (%s): %s",chsk_type,clj], null);
}),null)),null,-778315185);

var vec__108892 = clj;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108892,(0),null);
var vec__108895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108892,(1),null);
var _QMARK_uid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108895,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108895,(1),null);
var _QMARK_handshake_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108895,(2),null);
var map__108898 = chsk;
var map__108898__$1 = (((((!((map__108898 == null))))?(((((map__108898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__108898):map__108898);
var chs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108898__$1,new cljs.core.Keyword(null,"chs","chs",376886120));
var ever_opened_QMARK__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108898__$1,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913));
var first_handshake_QMARK_ = cljs.core.compare_and_set_BANG_(ever_opened_QMARK__,false,true);
var new_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),chsk_type,new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),true,new cljs.core.Keyword(null,"uid","uid",-1447769400),_QMARK_uid,new cljs.core.Keyword(null,"handshake-data","handshake-data",-278378864),_QMARK_handshake_data,new cljs.core.Keyword(null,"first-open?","first-open?",396686530),first_handshake_QMARK_], null);
var handshake_ev = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","handshake","chsk/handshake",64910686),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [_QMARK_uid,null,_QMARK_handshake_data,first_handshake_QMARK_], null)], null);
taoensso.sente.assert_event(handshake_ev);

taoensso.sente.swap_chsk_state_BANG_(chsk,(function (p1__108882_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__108882_SHARP_,new_state], 0));
}));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(chs),handshake_ev);

return new cljs.core.Keyword(null,"handled","handled",1889700151);
});
/**
 * nnil iff the websocket npm library[1] is available.
 *   Easiest way to install:
 *     1. Add the lein-npm[2] plugin to your `project.clj`,
 *     2. Add: `:npm {:dependencies [[websocket "1.0.23"]]}`
 * 
 *   [1] Ref. https://www.npmjs.com/package/websocket
 *   [2] Ref. https://github.com/RyanMcG/lein-npm
 */
taoensso.sente._QMARK_node_npm_websocket_ = (new cljs.core.Delay((function (){
if(((taoensso.sente.node_target_QMARK_) && ((typeof require !== 'undefined')))){
try{return require("websocket");
}catch (e108906){var e = e108906;
return null;
}} else {
return null;
}
}),null));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChWebSocket = (function (client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.ws_kalive_ms = ws_kalive_ms;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.retry_count_ = retry_count_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.cbs_waiting_ = cbs_waiting_;
this.socket_ = socket_;
this.udt_last_comms_ = udt_last_comms_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k108919,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__108923 = k108919;
var G__108923__$1 = (((G__108923 instanceof cljs.core.Keyword))?G__108923.fqn:null);
switch (G__108923__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "ws-kalive-ms":
return self__.ws_kalive_ms;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "retry-count_":
return self__.retry_count_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "cbs-waiting_":
return self__.cbs_waiting_;

break;
case "socket_":
return self__.socket_;

break;
case "udt-last-comms_":
return self__.udt_last_comms_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k108919,else__4383__auto__);

}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__108929){
var vec__108931 = p__108929;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108931,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__108931,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#taoensso.sente.ChWebSocket{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__108918){
var self__ = this;
var G__108918__$1 = this;
return (new cljs.core.RecordIter((0),G__108918__$1,14,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (14 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (1998688700 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this108920,other108921){
var self__ = this;
var this108920__$1 = this;
return (((!((other108921 == null)))) && ((this108920__$1.constructor === other108921.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this108920__$1.client_id,other108921.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this108920__$1.chs,other108921.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this108920__$1.params,other108921.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this108920__$1.packer,other108921.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this108920__$1.url,other108921.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this108920__$1.ws_kalive_ms,other108921.ws_kalive_ms)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this108920__$1.state_,other108921.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this108920__$1.instance_handle_,other108921.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this108920__$1.retry_count_,other108921.retry_count_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this108920__$1.ever_opened_QMARK__,other108921.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this108920__$1.backoff_ms_fn,other108921.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this108920__$1.cbs_waiting_,other108921.cbs_waiting_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this108920__$1.socket_,other108921.socket_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this108920__$1.udt_last_comms_,other108921.udt_last_comms_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this108920__$1.__extmap,other108921.__extmap)));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__108918){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__108955 = cljs.core.keyword_identical_QMARK_;
var expr__108956 = k__4388__auto__;
if(cljs.core.truth_((pred__108955.cljs$core$IFn$_invoke$arity$2 ? pred__108955.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__108956) : pred__108955.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__108956)))){
return (new taoensso.sente.ChWebSocket(G__108918,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__108955.cljs$core$IFn$_invoke$arity$2 ? pred__108955.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chs","chs",376886120),expr__108956) : pred__108955.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__108956)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,G__108918,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__108955.cljs$core$IFn$_invoke$arity$2 ? pred__108955.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__108956) : pred__108955.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__108956)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,G__108918,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__108955.cljs$core$IFn$_invoke$arity$2 ? pred__108955.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"packer","packer",66077544),expr__108956) : pred__108955.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__108956)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,G__108918,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__108955.cljs$core$IFn$_invoke$arity$2 ? pred__108955.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__108956) : pred__108955.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__108956)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__108918,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__108955.cljs$core$IFn$_invoke$arity$2 ? pred__108955.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__108956) : pred__108955.call(null,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),expr__108956)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__108918,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__108955.cljs$core$IFn$_invoke$arity$2 ? pred__108955.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__108956) : pred__108955.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__108956)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,G__108918,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__108955.cljs$core$IFn$_invoke$arity$2 ? pred__108955.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__108956) : pred__108955.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__108956)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,G__108918,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__108955.cljs$core$IFn$_invoke$arity$2 ? pred__108955.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__108956) : pred__108955.call(null,new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),expr__108956)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,G__108918,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__108955.cljs$core$IFn$_invoke$arity$2 ? pred__108955.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__108956) : pred__108955.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__108956)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,G__108918,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__108955.cljs$core$IFn$_invoke$arity$2 ? pred__108955.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__108956) : pred__108955.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__108956)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,G__108918,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__108955.cljs$core$IFn$_invoke$arity$2 ? pred__108955.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__108956) : pred__108955.call(null,new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),expr__108956)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__108918,self__.socket_,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__108955.cljs$core$IFn$_invoke$arity$2 ? pred__108955.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__108956) : pred__108955.call(null,new cljs.core.Keyword(null,"socket_","socket_",-361048908),expr__108956)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,G__108918,self__.udt_last_comms_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__108955.cljs$core$IFn$_invoke$arity$2 ? pred__108955.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__108956) : pred__108955.call(null,new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),expr__108956)))){
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,G__108918,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__108918),null));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),self__.ws_kalive_ms,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),self__.retry_count_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),self__.cbs_waiting_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"socket_","socket_",-361048908),self__.socket_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),self__.udt_last_comms_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__108918){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.sente.ChWebSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.ws_kalive_ms,self__.state_,self__.instance_handle_,self__.retry_count_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.cbs_waiting_,self__.socket_,self__.udt_last_comms_,G__108918,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChWebSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__108909_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__108909_SHARP_,reason);
}));

var temp__5735__auto__ = cljs.core.deref(self__.socket_);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close((1000),"CLOSE_NORMAL");
} else {
return null;
}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__108979 = opts;
var map__108979__$1 = (((((!((map__108979 == null))))?(((((map__108979.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__108979.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__108979):map__108979);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108979__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108979__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__108979__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var _QMARK_cb_uuid = (cljs.core.truth_(_QMARK_cb_fn)?taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$1((6)):null);
var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,_QMARK_cb_uuid);
var temp__5735__auto___110410 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5735__auto___110410)){
var cb_uuid_110411 = temp__5735__auto___110410;
taoensso.encore.reset_in_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cbs_waiting_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cb_uuid_110411], null),(function (){var e = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e108990){if((e108990 instanceof Error)){
var e = e108990;
return e;
} else {
throw e108990;

}
}})();
if((e == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",996,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e,null);
}
})());

var temp__5735__auto___110412__$1 = _QMARK_timeout_ms;
if(cljs.core.truth_(temp__5735__auto___110412__$1)){
var timeout_ms_110413 = temp__5735__auto___110412__$1;
var c__103244__auto___110414 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_109005){
var state_val_109006 = (state_109005[(1)]);
if((state_val_109006 === (1))){
var inst_108993 = cljs.core.async.timeout(timeout_ms_110413);
var state_109005__$1 = state_109005;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_109005__$1,(2),inst_108993);
} else {
if((state_val_109006 === (2))){
var inst_108996 = (state_109005[(7)]);
var inst_108995 = (state_109005[(2)]);
var inst_108996__$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,_QMARK_cb_uuid);
var state_109005__$1 = (function (){var statearr_109007 = state_109005;
(statearr_109007[(8)] = inst_108995);

(statearr_109007[(7)] = inst_108996__$1);

return statearr_109007;
})();
if(cljs.core.truth_(inst_108996__$1)){
var statearr_109010_110415 = state_109005__$1;
(statearr_109010_110415[(1)] = (3));

} else {
var statearr_109011_110416 = state_109005__$1;
(statearr_109011_110416[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109006 === (3))){
var inst_108996 = (state_109005[(7)]);
var inst_108999 = (inst_108996.cljs$core$IFn$_invoke$arity$1 ? inst_108996.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)) : inst_108996.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)));
var state_109005__$1 = state_109005;
var statearr_109013_110417 = state_109005__$1;
(statearr_109013_110417[(2)] = inst_108999);

(statearr_109013_110417[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109006 === (4))){
var state_109005__$1 = state_109005;
var statearr_109016_110418 = state_109005__$1;
(statearr_109016_110418[(2)] = null);

(statearr_109016_110418[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109006 === (5))){
var inst_109003 = (state_109005[(2)]);
var state_109005__$1 = state_109005;
return cljs.core.async.impl.ioc_helpers.return_chan(state_109005__$1,inst_109003);
} else {
return null;
}
}
}
}
}
});
return (function() {
var taoensso$sente$state_machine__103041__auto__ = null;
var taoensso$sente$state_machine__103041__auto____0 = (function (){
var statearr_109017 = [null,null,null,null,null,null,null,null,null];
(statearr_109017[(0)] = taoensso$sente$state_machine__103041__auto__);

(statearr_109017[(1)] = (1));

return statearr_109017;
});
var taoensso$sente$state_machine__103041__auto____1 = (function (state_109005){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_109005);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e109018){var ex__103044__auto__ = e109018;
var statearr_109019_110419 = state_109005;
(statearr_109019_110419[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_109005[(4)]))){
var statearr_109020_110420 = state_109005;
(statearr_109020_110420[(1)] = cljs.core.first((state_109005[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__110421 = state_109005;
state_109005 = G__110421;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
taoensso$sente$state_machine__103041__auto__ = function(state_109005){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__103041__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__103041__auto____1.call(this,state_109005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__103041__auto____0;
taoensso$sente$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__103041__auto____1;
return taoensso$sente$state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_109021 = f__103245__auto__();
(statearr_109021[(6)] = c__103244__auto___110414);

return statearr_109021;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
}));

} else {
}
} else {
}

try{cljs.core.deref(self__.socket_).send(ppstr);

cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}catch (e109022){var e = e109022;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",1008,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"Chsk send error"], null);
}),null)),null,-1826820076);

var temp__5735__auto___110422 = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5735__auto___110422)){
var cb_uuid_110423 = temp__5735__auto___110422;
var cb_fn_STAR__110424 = (function (){var or__4126__auto__ = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid_110423);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var e__$1 = (function (){try{if(taoensso.truss.impl.some_QMARK_(_QMARK_cb_fn)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e109026){if((e109026 instanceof Error)){
var e__$1 = e109026;
return e__$1;
} else {
throw e109026;

}
}})();
if((e__$1 == null)){
return _QMARK_cb_fn;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1011,"(taoensso.truss.impl/some? ?cb-fn)",_QMARK_cb_fn,e__$1,null);
}
}
})();
(cb_fn_STAR__110424.cljs$core$IFn$_invoke$arity$1 ? cb_fn_STAR__110424.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","error","chsk/error",-984175439)) : cb_fn_STAR__110424.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439)));
} else {
}

return false;
}}
}));

(taoensso.sente.ChWebSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5735__auto__ = (function (){var or__4126__auto__ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"WebSocket");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(goog.global,"MozWebSocket");
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(taoensso.sente._QMARK_node_npm_websocket_),"w3cwebsocket");
}
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var WebSocket = temp__5735__auto__;
var instance_handle = cljs.core.reset_BANG_(self__.instance_handle_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var have_handle_QMARK_ = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.instance_handle_),instance_handle);
});
var connect_fn = (function taoensso$sente$connect_fn(){
if(have_handle_QMARK_()){
var retry_fn = (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(self__.retry_count_,cljs.core.inc);
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",1033,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
}),null)),null,1547651885);

goog.global.setTimeout(taoensso$sente$connect_fn,backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__108911_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__108911_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
} else {
return null;
}
});
var _QMARK_socket = (function (){try{return (new WebSocket(taoensso.encore.merge_url_with_query_string(self__.url,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))], null)], 0)))));
}catch (e109028){var e = e109028;
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",1048,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,"WebSocket error"], null);
}),null)),null,795614221);

return null;
}})();
if(cljs.core.not(_QMARK_socket)){
return retry_fn();
} else {
return cljs.core.reset_BANG_(self__.socket_,(function (){var G__109029 = _QMARK_socket;
(G__109029["onerror"] = (function (ws_ev){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",1058,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WebSocket error: %s",(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(ws_ev);
}catch (e109031){var _ = e109031;
return ws_ev;
}})()], null);
}),null)),null,89573424);

var last_ws_error = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev], null);
return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__108912_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__108912_SHARP_,new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502),last_ws_error);
}));
}));

(G__109029["onmessage"] = (function (ws_ev){
var ppstr = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"data");
var vec__109035 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109035,(0),null);
var _QMARK_cb_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109035,(1),null);
cljs.core.reset_BANG_(self__.udt_last_comms_,taoensso.encore.now_udt());

var or__4126__auto__ = ((taoensso.sente.handshake_QMARK_(clj))?(function (){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ws","ws",86841443),chsk__$1,clj);

cljs.core.reset_BANG_(self__.retry_count_,(0));

return new cljs.core.Keyword(null,"handshake","handshake",68079331);
})()
:null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)))?(function (){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(self__.chs),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)], null));

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var temp__5733__auto__ = _QMARK_cb_uuid;
if(cljs.core.truth_(temp__5733__auto__)){
var cb_uuid = temp__5733__auto__;
var temp__5733__auto____$1 = taoensso.sente.pull_unused_cb_fn_BANG_(self__.cbs_waiting_,cb_uuid);
if(cljs.core.truth_(temp__5733__auto____$1)){
var cb_fn = temp__5733__auto____$1;
return (cb_fn.cljs$core$IFn$_invoke$arity$1 ? cb_fn.cljs$core$IFn$_invoke$arity$1(clj) : cb_fn.call(null,clj));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",1094,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",clj], null);
}),null)),null,-1432694151);
}
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
}));

(G__109029["onclose"] = (function (ws_ev){
var clean_QMARK_ = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"wasClean");
var code = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"code");
var reason = taoensso.encore.oget.cljs$core$IFn$_invoke$arity$2(ws_ev,"reason");
var last_ws_close = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"ev","ev",-406827324),ws_ev,new cljs.core.Keyword(null,"clean?","clean?",-1675631009),clean_QMARK_,new cljs.core.Keyword(null,"code","code",1586293142),code,new cljs.core.Keyword(null,"reason","reason",-2070751759),reason], null);
if(cljs.core.truth_(clean_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",1116,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Clean WebSocket close, will not attempt reconnect"], null);
}),null)),null,-1601883344);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__108913_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__108913_SHARP_,new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__108914_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(taoensso.sente.chsk_state__GT_closed(p1__108914_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424)),new cljs.core.Keyword(null,"last-ws-close","last-ws-close",-798104932),last_ws_close);
}));

return retry_fn();
}
}));

return G__109029;
})());
}
} else {
return null;
}
});
var temp__5735__auto___110430__$1 = self__.ws_kalive_ms;
if(cljs.core.truth_(temp__5735__auto___110430__$1)){
var ms_110431 = temp__5735__auto___110430__$1;
var c__103244__auto___110432 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_109071){
var state_val_109072 = (state_109071[(1)]);
if((state_val_109072 === (7))){
var inst_109067 = (state_109071[(2)]);
var state_109071__$1 = state_109071;
var statearr_109076_110433 = state_109071__$1;
(statearr_109076_110433[(2)] = inst_109067);

(statearr_109076_110433[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109072 === (1))){
var state_109071__$1 = state_109071;
var statearr_109077_110434 = state_109071__$1;
(statearr_109077_110434[(2)] = null);

(statearr_109077_110434[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109072 === (4))){
var inst_109048 = (state_109071[(2)]);
var inst_109049 = have_handle_QMARK_();
var state_109071__$1 = (function (){var statearr_109078 = state_109071;
(statearr_109078[(7)] = inst_109048);

return statearr_109078;
})();
if(inst_109049){
var statearr_109079_110435 = state_109071__$1;
(statearr_109079_110435[(1)] = (5));

} else {
var statearr_109080_110436 = state_109071__$1;
(statearr_109080_110436[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109072 === (6))){
var state_109071__$1 = state_109071;
var statearr_109081_110437 = state_109071__$1;
(statearr_109081_110437[(2)] = null);

(statearr_109081_110437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109072 === (3))){
var inst_109069 = (state_109071[(2)]);
var state_109071__$1 = state_109071;
return cljs.core.async.impl.ioc_helpers.return_chan(state_109071__$1,inst_109069);
} else {
if((state_val_109072 === (2))){
var inst_109045 = cljs.core.deref(self__.udt_last_comms_);
var inst_109046 = cljs.core.async.timeout(ms_110431);
var state_109071__$1 = (function (){var statearr_109089 = state_109071;
(statearr_109089[(8)] = inst_109045);

return statearr_109089;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_109071__$1,(4),inst_109046);
} else {
if((state_val_109072 === (9))){
var state_109071__$1 = state_109071;
var statearr_109091_110438 = state_109071__$1;
(statearr_109091_110438[(2)] = null);

(statearr_109091_110438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109072 === (5))){
var inst_109045 = (state_109071[(8)]);
var inst_109051 = cljs.core.deref(self__.udt_last_comms_);
var inst_109052 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_109045,inst_109051);
var state_109071__$1 = state_109071;
if(inst_109052){
var statearr_109092_110439 = state_109071__$1;
(statearr_109092_110439[(1)] = (8));

} else {
var statearr_109093_110440 = state_109071__$1;
(statearr_109093_110440[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109072 === (10))){
var inst_109063 = (state_109071[(2)]);
var state_109071__$1 = (function (){var statearr_109094 = state_109071;
(statearr_109094[(9)] = inst_109063);

return statearr_109094;
})();
var statearr_109095_110441 = state_109071__$1;
(statearr_109095_110441[(2)] = null);

(statearr_109095_110441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109072 === (8))){
var inst_109054 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_109055 = [new cljs.core.Keyword("chsk","ws-ping","chsk/ws-ping",191675304)];
var inst_109056 = (new cljs.core.PersistentVector(null,1,(5),inst_109054,inst_109055,null));
var inst_109057 = [new cljs.core.Keyword(null,"flush?","flush?",-108887231)];
var inst_109058 = [true];
var inst_109059 = cljs.core.PersistentHashMap.fromArrays(inst_109057,inst_109058);
var inst_109060 = chsk__$1.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3(null,inst_109056,inst_109059);
var state_109071__$1 = state_109071;
var statearr_109096_110442 = state_109071__$1;
(statearr_109096_110442[(2)] = inst_109060);

(statearr_109096_110442[(1)] = (10));


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
var taoensso$sente$state_machine__103041__auto__ = null;
var taoensso$sente$state_machine__103041__auto____0 = (function (){
var statearr_109098 = [null,null,null,null,null,null,null,null,null,null];
(statearr_109098[(0)] = taoensso$sente$state_machine__103041__auto__);

(statearr_109098[(1)] = (1));

return statearr_109098;
});
var taoensso$sente$state_machine__103041__auto____1 = (function (state_109071){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_109071);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e109101){var ex__103044__auto__ = e109101;
var statearr_109102_110443 = state_109071;
(statearr_109102_110443[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_109071[(4)]))){
var statearr_109106_110444 = state_109071;
(statearr_109106_110444[(1)] = cljs.core.first((state_109071[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__110445 = state_109071;
state_109071 = G__110445;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
taoensso$sente$state_machine__103041__auto__ = function(state_109071){
switch(arguments.length){
case 0:
return taoensso$sente$state_machine__103041__auto____0.call(this);
case 1:
return taoensso$sente$state_machine__103041__auto____1.call(this,state_109071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$state_machine__103041__auto____0;
taoensso$sente$state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$state_machine__103041__auto____1;
return taoensso$sente$state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_109114 = f__103245__auto__();
(statearr_109114[(6)] = c__103244__auto___110432);

return statearr_109114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
}));

} else {
}

cljs.core.reset_BANG_(self__.retry_count_,(0));

connect_fn();

return chsk__$1;
} else {
return null;
}
}));

(taoensso.sente.ChWebSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"ws-kalive-ms","ws-kalive-ms",-1212255801,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"retry-count_","retry-count_",1660769620,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"cbs-waiting_","cbs-waiting_",121502466,null),new cljs.core.Symbol(null,"socket_","socket_",1279482619,null),new cljs.core.Symbol(null,"udt-last-comms_","udt-last-comms_",1494731888,null)], null);
}));

(taoensso.sente.ChWebSocket.cljs$lang$type = true);

(taoensso.sente.ChWebSocket.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChWebSocket",null,(1),null));
}));

(taoensso.sente.ChWebSocket.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"taoensso.sente/ChWebSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChWebSocket.
 */
taoensso.sente.__GT_ChWebSocket = (function taoensso$sente$__GT_ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_){
return (new taoensso.sente.ChWebSocket(client_id,chs,params,packer,url,ws_kalive_ms,state_,instance_handle_,retry_count_,ever_opened_QMARK__,backoff_ms_fn,cbs_waiting_,socket_,udt_last_comms_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChWebSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChWebSocket = (function taoensso$sente$map__GT_ChWebSocket(G__108922){
var extmap__4419__auto__ = (function (){var G__109123 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__108922,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),new cljs.core.Keyword(null,"socket_","socket_",-361048908),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639)], 0));
if(cljs.core.record_QMARK_(G__108922)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__109123);
} else {
return G__109123;
}
})();
return (new taoensso.sente.ChWebSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__108922),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__108922),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__108922),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__108922),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__108922),new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968).cljs$core$IFn$_invoke$arity$1(G__108922),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__108922),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__108922),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093).cljs$core$IFn$_invoke$arity$1(G__108922),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__108922),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__108922),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061).cljs$core$IFn$_invoke$arity$1(G__108922),new cljs.core.Keyword(null,"socket_","socket_",-361048908).cljs$core$IFn$_invoke$arity$1(G__108922),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639).cljs$core$IFn$_invoke$arity$1(G__108922),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

taoensso.sente.new_ChWebSocket = (function taoensso$sente$new_ChWebSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChWebSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ws","ws",86841443),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"retry-count_","retry-count_",20238093),cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0)),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),new cljs.core.Keyword(null,"cbs-waiting_","cbs-waiting_",-1519029061),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"socket_","socket_",-361048908),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"udt-last-comms_","udt-last-comms_",-145799639),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
/**
 * We must set *some* client-side timeout otherwise an unpredictable (and
 *   probably too short) browser default will be used. Must be > server's
 *   :lp-timeout-ms.
 */
taoensso.sente.default_client_side_ajax_timeout_ms = taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(60)], 0));

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAjaxSocket = (function (client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,__meta,__extmap,__hash){
this.client_id = client_id;
this.chs = chs;
this.params = params;
this.packer = packer;
this.url = url;
this.state_ = state_;
this.instance_handle_ = instance_handle_;
this.ever_opened_QMARK__ = ever_opened_QMARK__;
this.backoff_ms_fn = backoff_ms_fn;
this.ajax_opts = ajax_opts;
this.curr_xhr_ = curr_xhr_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k109138,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__109145 = k109138;
var G__109145__$1 = (((G__109145 instanceof cljs.core.Keyword))?G__109145.fqn:null);
switch (G__109145__$1) {
case "client-id":
return self__.client_id;

break;
case "chs":
return self__.chs;

break;
case "params":
return self__.params;

break;
case "packer":
return self__.packer;

break;
case "url":
return self__.url;

break;
case "state_":
return self__.state_;

break;
case "instance-handle_":
return self__.instance_handle_;

break;
case "ever-opened?_":
return self__.ever_opened_QMARK__;

break;
case "backoff-ms-fn":
return self__.backoff_ms_fn;

break;
case "ajax-opts":
return self__.ajax_opts;

break;
case "curr-xhr_":
return self__.curr_xhr_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k109138,else__4383__auto__);

}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__109147){
var vec__109148 = p__109147;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109148,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109148,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#taoensso.sente.ChAjaxSocket{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"url","url",276297046),self__.url],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__109137){
var self__ = this;
var G__109137__$1 = this;
return (new cljs.core.RecordIter((0),G__109137__$1,11,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (11 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-266770752 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this109139,other109140){
var self__ = this;
var this109139__$1 = this;
return (((!((other109140 == null)))) && ((this109139__$1.constructor === other109140.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this109139__$1.client_id,other109140.client_id)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this109139__$1.chs,other109140.chs)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this109139__$1.params,other109140.params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this109139__$1.packer,other109140.packer)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this109139__$1.url,other109140.url)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this109139__$1.state_,other109140.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this109139__$1.instance_handle_,other109140.instance_handle_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this109139__$1.ever_opened_QMARK__,other109140.ever_opened_QMARK__)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this109139__$1.backoff_ms_fn,other109140.backoff_ms_fn)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this109139__$1.ajax_opts,other109140.ajax_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this109139__$1.curr_xhr_,other109140.curr_xhr_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this109139__$1.__extmap,other109140.__extmap)));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),null,new cljs.core.Keyword(null,"packer","packer",66077544),null,new cljs.core.Keyword(null,"chs","chs",376886120),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),null,new cljs.core.Keyword(null,"url","url",276297046),null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),null,new cljs.core.Keyword(null,"state_","state_",957667102),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__109137){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__109169 = cljs.core.keyword_identical_QMARK_;
var expr__109170 = k__4388__auto__;
if(cljs.core.truth_((pred__109169.cljs$core$IFn$_invoke$arity$2 ? pred__109169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__109170) : pred__109169.call(null,new cljs.core.Keyword(null,"client-id","client-id",-464622140),expr__109170)))){
return (new taoensso.sente.ChAjaxSocket(G__109137,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__109169.cljs$core$IFn$_invoke$arity$2 ? pred__109169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"chs","chs",376886120),expr__109170) : pred__109169.call(null,new cljs.core.Keyword(null,"chs","chs",376886120),expr__109170)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,G__109137,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__109169.cljs$core$IFn$_invoke$arity$2 ? pred__109169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235),expr__109170) : pred__109169.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__109170)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,G__109137,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__109169.cljs$core$IFn$_invoke$arity$2 ? pred__109169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"packer","packer",66077544),expr__109170) : pred__109169.call(null,new cljs.core.Keyword(null,"packer","packer",66077544),expr__109170)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,G__109137,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__109169.cljs$core$IFn$_invoke$arity$2 ? pred__109169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046),expr__109170) : pred__109169.call(null,new cljs.core.Keyword(null,"url","url",276297046),expr__109170)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,G__109137,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__109169.cljs$core$IFn$_invoke$arity$2 ? pred__109169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__109170) : pred__109169.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__109170)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,G__109137,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__109169.cljs$core$IFn$_invoke$arity$2 ? pred__109169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__109170) : pred__109169.call(null,new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),expr__109170)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,G__109137,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__109169.cljs$core$IFn$_invoke$arity$2 ? pred__109169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__109170) : pred__109169.call(null,new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),expr__109170)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,G__109137,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__109169.cljs$core$IFn$_invoke$arity$2 ? pred__109169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__109170) : pred__109169.call(null,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),expr__109170)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,G__109137,self__.ajax_opts,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__109169.cljs$core$IFn$_invoke$arity$2 ? pred__109169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__109170) : pred__109169.call(null,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),expr__109170)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,G__109137,self__.curr_xhr_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__109169.cljs$core$IFn$_invoke$arity$2 ? pred__109169.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__109170) : pred__109169.call(null,new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),expr__109170)))){
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,G__109137,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__109137),null));
}
}
}
}
}
}
}
}
}
}
}
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"chs","chs",376886120),self__.chs,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"packer","packer",66077544),self__.packer,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"url","url",276297046),self__.url,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),self__.instance_handle_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),self__.ever_opened_QMARK__,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),self__.backoff_ms_fn,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),self__.ajax_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),self__.curr_xhr_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__109137){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.sente.ChAjaxSocket(self__.client_id,self__.chs,self__.params,self__.packer,self__.url,self__.state_,self__.instance_handle_,self__.ever_opened_QMARK__,self__.backoff_ms_fn,self__.ajax_opts,self__.curr_xhr_,G__109137,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAjaxSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
cljs.core.reset_BANG_(self__.instance_handle_,null);

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__109127_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__109127_SHARP_,reason);
}));

var temp__5735__auto__ = cljs.core.deref(self__.curr_xhr_);
if(cljs.core.truth_(temp__5735__auto__)){
var x = temp__5735__auto__;
return x.abort();
} else {
return null;
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
chsk__$1.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2(null,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var map__109187 = opts;
var map__109187__$1 = (((((!((map__109187 == null))))?(((((map__109187.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__109187.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109187):map__109187);
var _QMARK_timeout_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109187__$1,new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406));
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109187__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var flush_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109187__$1,new cljs.core.Keyword(null,"flush?","flush?",-108887231));
var _ = taoensso.sente.assert_send_args(ev,_QMARK_timeout_ms,_QMARK_cb);
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
if(cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))){
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
} else {
var csrf_token = new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_));
var G__109192_110447 = self__.url;
var G__109193_110448 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__4126__auto__ = _QMARK_timeout_ms;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),csrf_token], null)], 0)),new cljs.core.Keyword(null,"params","params",710516235),(function (){var ppstr = taoensso.sente.pack.cljs$core$IFn$_invoke$arity$3(self__.packer,ev,(cljs.core.truth_(_QMARK_cb_fn)?new cljs.core.Keyword(null,"ajax-cb","ajax-cb",-807060321):null));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token,new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id,new cljs.core.Keyword(null,"ppstr","ppstr",1557495252),ppstr], null)], 0));
})()], null)], 0));
var G__109194_110449 = (function taoensso$sente$ajax_cb(p__109197){
var map__109198 = p__109197;
var map__109198__$1 = (((((!((map__109198 == null))))?(((((map__109198.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__109198.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109198):map__109198);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109198__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109198__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)));
} else {
return null;
}
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__109132_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__109132_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

if(cljs.core.truth_(_QMARK_cb_fn)){
return (_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("chsk","error","chsk/error",-984175439)) : _QMARK_cb_fn.call(null,new cljs.core.Keyword("chsk","error","chsk/error",-984175439)));
} else {
return null;
}
}
} else {
var content = _QMARK_content;
var resp_ppstr = content;
var vec__109203 = taoensso.sente.unpack(self__.packer,resp_ppstr);
var resp_clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109203,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109203,(1),null);
if(cljs.core.truth_(_QMARK_cb_fn)){
(_QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1 ? _QMARK_cb_fn.cljs$core$IFn$_invoke$arity$1(resp_clj) : _QMARK_cb_fn.call(null,resp_clj));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(resp_clj,new cljs.core.Keyword("chsk","dummy-cb-200","chsk/dummy-cb-200",-1663130337))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",1237,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Cb reply w/o local cb-fn: %s",resp_clj], null);
}),null)),null,2080331312);
} else {
}
}

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__109133_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__109133_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));
}
});
(taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__109192_110447,G__109193_110448,G__109194_110449) : taoensso.sente.ajax_lite.call(null,G__109192_110447,G__109193_110448,G__109194_110449));

return new cljs.core.Keyword(null,"apparent-success","apparent-success",242592222);
}
}));

(taoensso.sente.ChAjaxSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var instance_handle = cljs.core.reset_BANG_(self__.instance_handle_,taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0());
var have_handle_QMARK_ = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.instance_handle_),instance_handle);
});
var poll_fn = (function taoensso$sente$poll_fn(retry_count){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",1247,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["async-poll-for-update!"], null);
}),null)),null,-1832165180);

if(have_handle_QMARK_()){
var retry_fn = (function (){
if(have_handle_QMARK_()){
var retry_count_STAR_ = (retry_count + (1));
var backoff_ms = (self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1 ? self__.backoff_ms_fn.cljs$core$IFn$_invoke$arity$1(retry_count_STAR_) : self__.backoff_ms_fn.call(null,retry_count_STAR_));
var udt_next_reconnect = (taoensso.encore.now_udt() + backoff_ms);
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",1255,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Chsk is closed: will try reconnect attempt (%s) in %s ms",retry_count_STAR_,backoff_ms], null);
}),null)),null,984923411);

goog.global.setTimeout((function (){
return taoensso$sente$poll_fn(retry_count_STAR_);
}),backoff_ms);

return taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__109134_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__109134_SHARP_,new cljs.core.Keyword(null,"udt-next-reconnect","udt-next-reconnect",-1990375733),udt_next_reconnect);
}));
} else {
return null;
}
});
return cljs.core.reset_BANG_(self__.curr_xhr_,(function (){var G__109221 = self__.url;
var G__109222 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ajax_opts,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406),(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"timeout-ms","timeout-ms",754221406).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.sente.default_client_side_ajax_timeout_ms;
}
})(),new cljs.core.Keyword(null,"resp-type","resp-type",1050675962),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"params","params",710516235),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"udt","udt",2011712751),taoensso.encore.now_udt(),new cljs.core.Keyword(null,"client-id","client-id",-464622140),self__.client_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_)))?null:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handshake?","handshake?",-423743093),true], null))], 0)),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(self__.ajax_opts),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"X-CSRF-Token","X-CSRF-Token",1562992453),new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))], null)], 0))], null)], 0));
var G__109223 = (function taoensso$sente$poll_fn_$_ajax_cb(p__109226){
var map__109227 = p__109226;
var map__109227__$1 = (((((!((map__109227 == null))))?(((((map__109227.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__109227.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109227):map__109227);
var _QMARK_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109227__$1,new cljs.core.Keyword(null,"?error","?error",1070752222));
var _QMARK_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109227__$1,new cljs.core.Keyword(null,"?content","?content",1697782054));
if(cljs.core.truth_(_QMARK_error)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(_QMARK_error,new cljs.core.Keyword(null,"timeout","timeout",-318625318))){
return taoensso$sente$poll_fn((0));
} else {
taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__109135_SHARP_){
return taoensso.sente.chsk_state__GT_closed(p1__109135_SHARP_,new cljs.core.Keyword(null,"unexpected","unexpected",-1137752424));
}));

return retry_fn();

}
} else {
var content = _QMARK_content;
var ppstr = content;
var vec__109234 = taoensso.sente.unpack(self__.packer,ppstr);
var clj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109234,(0),null);
var handshake_QMARK_ = taoensso.sente.handshake_QMARK_(clj);
if(handshake_QMARK_){
taoensso.sente.receive_handshake_BANG_(new cljs.core.Keyword(null,"ajax","ajax",814345549),chsk__$1,clj);
} else {
}

taoensso.sente.swap_chsk_state_BANG_(chsk__$1,(function (p1__109136_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__109136_SHARP_,new cljs.core.Keyword(null,"open?","open?",1238443125),true);
}));

taoensso$sente$poll_fn((0));

if(handshake_QMARK_){
return null;
} else {
var or__4126__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clj,new cljs.core.Keyword("chsk","timeout","chsk/timeout",-319776489)))?(function (){
if(cljs.core.truth_(cljs.core.deref(taoensso.sente.debug_mode_QMARK__))){
taoensso.sente.receive_buffered_evs_BANG_(self__.chs,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("debug","timeout","debug/timeout",309499949)], null)], null));
} else {
}

return new cljs.core.Keyword(null,"noop","noop",-673731258);
})()
:null);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var buffered_evs = clj;
return taoensso.sente.receive_buffered_evs_BANG_(self__.chs,buffered_evs);
}
}
}
});
return (taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3 ? taoensso.sente.ajax_lite.cljs$core$IFn$_invoke$arity$3(G__109221,G__109222,G__109223) : taoensso.sente.ajax_lite.call(null,G__109221,G__109222,G__109223));
})());
} else {
return null;
}
});
poll_fn((0));

return chsk__$1;
}));

(taoensso.sente.ChAjaxSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"client-id","client-id",1175909387,null),new cljs.core.Symbol(null,"chs","chs",2017417647,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"packer","packer",1706609071,null),new cljs.core.Symbol(null,"url","url",1916828573,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"instance-handle_","instance-handle_",-282852930,null),new cljs.core.Symbol(null,"ever-opened?_","ever-opened?_",-1013096856,null),new cljs.core.Symbol(null,"backoff-ms-fn","backoff-ms-fn",-1881539814,null),new cljs.core.Symbol(null,"ajax-opts","ajax-opts",1122292418,null),new cljs.core.Symbol(null,"curr-xhr_","curr-xhr_",321757831,null)], null);
}));

(taoensso.sente.ChAjaxSocket.cljs$lang$type = true);

(taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAjaxSocket",null,(1),null));
}));

(taoensso.sente.ChAjaxSocket.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"taoensso.sente/ChAjaxSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChAjaxSocket.
 */
taoensso.sente.__GT_ChAjaxSocket = (function taoensso$sente$__GT_ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_){
return (new taoensso.sente.ChAjaxSocket(client_id,chs,params,packer,url,state_,instance_handle_,ever_opened_QMARK__,backoff_ms_fn,ajax_opts,curr_xhr_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAjaxSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAjaxSocket = (function taoensso$sente$map__GT_ChAjaxSocket(G__109141){
var extmap__4419__auto__ = (function (){var G__109248 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__109141,new cljs.core.Keyword(null,"client-id","client-id",-464622140),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"chs","chs",376886120),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696)], 0));
if(cljs.core.record_QMARK_(G__109141)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__109248);
} else {
return G__109248;
}
})();
return (new taoensso.sente.ChAjaxSocket(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(G__109141),new cljs.core.Keyword(null,"chs","chs",376886120).cljs$core$IFn$_invoke$arity$1(G__109141),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__109141),new cljs.core.Keyword(null,"packer","packer",66077544).cljs$core$IFn$_invoke$arity$1(G__109141),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(G__109141),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__109141),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457).cljs$core$IFn$_invoke$arity$1(G__109141),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(G__109141),new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955).cljs$core$IFn$_invoke$arity$1(G__109141),new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109).cljs$core$IFn$_invoke$arity$1(G__109141),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696).cljs$core$IFn$_invoke$arity$1(G__109141),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

taoensso.sente.new_ChAjaxSocket = (function taoensso$sente$new_ChAjaxSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAjaxSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"ajax","ajax",814345549),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"instance-handle_","instance-handle_",-1923384457),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null),new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false),new cljs.core.Keyword(null,"curr-xhr_","curr-xhr_",-1318773696),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {taoensso.sente.IChSocket}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
taoensso.sente.ChAutoSocket = (function (ws_chsk_opts,ajax_chsk_opts,state_,impl_,__meta,__extmap,__hash){
this.ws_chsk_opts = ws_chsk_opts;
this.ajax_chsk_opts = ajax_chsk_opts;
this.state_ = state_;
this.impl_ = impl_;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k109259,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__109271 = k109259;
var G__109271__$1 = (((G__109271 instanceof cljs.core.Keyword))?G__109271.fqn:null);
switch (G__109271__$1) {
case "ws-chsk-opts":
return self__.ws_chsk_opts;

break;
case "ajax-chsk-opts":
return self__.ajax_chsk_opts;

break;
case "state_":
return self__.state_;

break;
case "impl_":
return self__.impl_;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k109259,else__4383__auto__);

}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__109272){
var vec__109273 = p__109272;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109273,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109273,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#taoensso.sente.ChAutoSocket{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_],null))], null),self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__109258){
var self__ = this;
var G__109258__$1 = this;
return (new cljs.core.RecordIter((0),G__109258__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1193508708 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this109260,other109261){
var self__ = this;
var this109260__$1 = this;
return (((!((other109261 == null)))) && ((this109260__$1.constructor === other109261.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this109260__$1.ws_chsk_opts,other109261.ws_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this109260__$1.ajax_chsk_opts,other109261.ajax_chsk_opts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this109260__$1.state_,other109261.state_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this109260__$1.impl_,other109261.impl_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this109260__$1.__extmap,other109261.__extmap)));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"impl_","impl_",1218818179),null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),null,new cljs.core.Keyword(null,"state_","state_",957667102),null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__109258){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__109287 = cljs.core.keyword_identical_QMARK_;
var expr__109288 = k__4388__auto__;
if(cljs.core.truth_((pred__109287.cljs$core$IFn$_invoke$arity$2 ? pred__109287.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__109288) : pred__109287.call(null,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),expr__109288)))){
return (new taoensso.sente.ChAutoSocket(G__109258,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__109287.cljs$core$IFn$_invoke$arity$2 ? pred__109287.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__109288) : pred__109287.call(null,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),expr__109288)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,G__109258,self__.state_,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__109287.cljs$core$IFn$_invoke$arity$2 ? pred__109287.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"state_","state_",957667102),expr__109288) : pred__109287.call(null,new cljs.core.Keyword(null,"state_","state_",957667102),expr__109288)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,G__109258,self__.impl_,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__109287.cljs$core$IFn$_invoke$arity$2 ? pred__109287.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__109288) : pred__109287.call(null,new cljs.core.Keyword(null,"impl_","impl_",1218818179),expr__109288)))){
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,G__109258,self__.__meta,self__.__extmap,null));
} else {
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__109258),null));
}
}
}
}
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),self__.ws_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),self__.ajax_chsk_opts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"impl_","impl_",1218818179),self__.impl_,null))], null),self__.__extmap));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__109258){
var self__ = this;
var this__4379__auto____$1 = this;
return (new taoensso.sente.ChAutoSocket(self__.ws_chsk_opts,self__.ajax_chsk_opts,self__.state_,self__.impl_,G__109258,self__.__extmap,self__.__hash));
}));

(taoensso.sente.ChAutoSocket.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$ = cljs.core.PROTOCOL_SENTINEL);

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_disconnect_BANG_$arity$2 = (function (chsk,reason){
var self__ = this;
var chsk__$1 = this;
var temp__5735__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5735__auto__)){
var impl = temp__5735__auto__;
return taoensso.sente._chsk_disconnect_BANG_(impl,reason);
} else {
return null;
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_reconnect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var temp__5735__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5735__auto__)){
var impl = temp__5735__auto__;
taoensso.sente._chsk_disconnect_BANG_(impl,new cljs.core.Keyword(null,"requested-reconnect","requested-reconnect",2008347707));

return chsk__$1.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
} else {
return null;
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_send_BANG_$arity$3 = (function (chsk,ev,opts){
var self__ = this;
var chsk__$1 = this;
var temp__5733__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5733__auto__)){
var impl = temp__5733__auto__;
return taoensso.sente._chsk_send_BANG_(impl,ev,opts);
} else {
var map__109295 = opts;
var map__109295__$1 = (((((!((map__109295 == null))))?(((((map__109295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__109295.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109295):map__109295);
var _QMARK_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109295__$1,new cljs.core.Keyword(null,"cb","cb",589947841));
var _QMARK_cb_fn = taoensso.sente.cb_chan_as_fn(_QMARK_cb,ev);
return taoensso.sente.chsk_send__GT_closed_BANG_(_QMARK_cb_fn);
}
}));

(taoensso.sente.ChAutoSocket.prototype.taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1 = (function (chsk){
var self__ = this;
var chsk__$1 = this;
var ajax_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ajax_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ws_chsk_opts__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.ws_chsk_opts,new cljs.core.Keyword(null,"state_","state_",957667102),self__.state_);
var ajax_conn_BANG_ = (function (){
cljs.core.remove_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080));

return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))).taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});
var ws_conn_BANG_ = (function (){
var downgraded_QMARK___110451 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
cljs.core.add_watch(self__.state_,new cljs.core.Keyword("chsk","auto-ajax-downgrade","chsk/auto-ajax-downgrade",-831528080),(function (_,___$1,old_state,new_state){
var temp__5735__auto__ = cljs.core.deref(self__.impl_);
if(cljs.core.truth_(temp__5735__auto__)){
var impl = temp__5735__auto__;
var temp__5735__auto____$1 = new cljs.core.Keyword(null,"ever-opened?_","ever-opened?_",1641338913).cljs$core$IFn$_invoke$arity$1(impl);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ever_opened_QMARK__ = temp__5735__auto____$1;
if(cljs.core.truth_(cljs.core.deref(ever_opened_QMARK__))){
return null;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"last-ws-error","last-ws-error",-820288502).cljs$core$IFn$_invoke$arity$1(new_state))){
if(cljs.core.compare_and_set_BANG_(downgraded_QMARK___110451,false,true)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",1388,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Permanently downgrading :auto chsk -> :ajax"], null);
}),null)),null,483418285);

taoensso.sente._chsk_disconnect_BANG_(impl,new cljs.core.Keyword(null,"downgrading-ws-to-ajax","downgrading-ws-to-ajax",402136720));

return cljs.core.reset_BANG_(self__.impl_,ajax_conn_BANG_());
} else {
return null;
}
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
}));

return taoensso.sente.new_ChWebSocket(ws_chsk_opts__$1,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(self__.state_))).taoensso$sente$IChSocket$_chsk_connect_BANG_$arity$1(null);
});
cljs.core.reset_BANG_(self__.impl_,(function (){var or__4126__auto__ = ws_conn_BANG_();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return ajax_conn_BANG_();
}
})());

return chsk__$1;
}));

(taoensso.sente.ChAutoSocket.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ws-chsk-opts","ws-chsk-opts",-349638577,null),new cljs.core.Symbol(null,"ajax-chsk-opts","ajax-chsk-opts",-1051844442,null),new cljs.core.Symbol(null,"state_","state_",-1696768667,null),new cljs.core.Symbol(null,"impl_","impl_",-1435617590,null)], null);
}));

(taoensso.sente.ChAutoSocket.cljs$lang$type = true);

(taoensso.sente.ChAutoSocket.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"taoensso.sente/ChAutoSocket",null,(1),null));
}));

(taoensso.sente.ChAutoSocket.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"taoensso.sente/ChAutoSocket");
}));

/**
 * Positional factory function for taoensso.sente/ChAutoSocket.
 */
taoensso.sente.__GT_ChAutoSocket = (function taoensso$sente$__GT_ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_){
return (new taoensso.sente.ChAutoSocket(ws_chsk_opts,ajax_chsk_opts,state_,impl_,null,null,null));
});

/**
 * Factory function for taoensso.sente/ChAutoSocket, taking a map of keywords to field values.
 */
taoensso.sente.map__GT_ChAutoSocket = (function taoensso$sente$map__GT_ChAutoSocket(G__109270){
var extmap__4419__auto__ = (function (){var G__109316 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__109270,new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),new cljs.core.Keyword(null,"state_","state_",957667102),new cljs.core.Keyword(null,"impl_","impl_",1218818179)], 0));
if(cljs.core.record_QMARK_(G__109270)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__109316);
} else {
return G__109316;
}
})();
return (new taoensso.sente.ChAutoSocket(new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104).cljs$core$IFn$_invoke$arity$1(G__109270),new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327).cljs$core$IFn$_invoke$arity$1(G__109270),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(G__109270),new cljs.core.Keyword(null,"impl_","impl_",1218818179).cljs$core$IFn$_invoke$arity$1(G__109270),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

taoensso.sente.new_ChAutoSocket = (function taoensso$sente$new_ChAutoSocket(opts,csrf_token){
return taoensso.sente.map__GT_ChAutoSocket(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state_","state_",957667102),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"ever-opened?","ever-opened?",1128459732),false,new cljs.core.Keyword(null,"csrf-token","csrf-token",-1872302856),csrf_token], null)),new cljs.core.Keyword(null,"impl_","impl_",1218818179),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null)], null),opts], 0)));
});
taoensso.sente.get_chsk_url = (function taoensso$sente$get_chsk_url(protocol,host,path,type){
var protocol__$1 = (function (){var G__109319 = protocol;
var G__109319__$1 = (((G__109319 instanceof cljs.core.Keyword))?G__109319.fqn:null);
switch (G__109319__$1) {
case "http":
return "http:";

break;
case "https":
return "https:";

break;
default:
return protocol;

}
})();
var protocol__$2 = (function (){var e = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__109324 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["https:",null,"http:",null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__109324) : taoensso.truss.impl.set_STAR_.call(null,G__109324));
})(),x);
})(protocol__$1)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e109322){if((e109322 instanceof Error)){
var e = e109322;
return e;
} else {
throw e109322;

}
}})();
if((e == null)){
return protocol__$1;
} else {
return taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1408,"([:el #{\"https:\" \"http:\"}] protocol)",protocol__$1,e,null);
}
})();
var protocol__$3 = (function (){var G__109325 = type;
var G__109325__$1 = (((G__109325 instanceof cljs.core.Keyword))?G__109325.fqn:null);
switch (G__109325__$1) {
case "ajax":
return protocol__$2;

break;
case "ws":
var G__109326 = protocol__$2;
switch (G__109326) {
case "https:":
return "wss:";

break;
case "http:":
return "ws:";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__109326)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__109325__$1)].join('')));

}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$3),"//",taoensso.encore.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([host,path], 0))].join('');
});
/**
 * Returns nil on failure, or a map with keys:
 *     :ch-recv ; core.async channel to receive `event-msg`s (internal or from
 *              ; clients). May `put!` (inject) arbitrary `event`s to this channel.
 *     :send-fn ; (fn [event & [?timeout-ms ?cb-fn]]) for client>server send.
 *     :state   ; Watchable, read-only (atom {:type _ :open? _ :uid _ :csrf-token _}).
 *     :chsk    ; IChSocket implementer. You can usu. ignore this.
 * 
 *   Common options:
 *     :type           ; e/o #{:auto :ws :ajax}. You'll usually want the default (:auto).
 *     :protocol       ; Server protocol, e/o #{:http :https}.
 *     :host           ; Server host (defaults to current page's host).
 *     :params         ; Map of any params to incl. in chsk Ring requests (handy
 *                     ; for application-level auth, etc.).
 *     :packer         ; :edn (default), or an IPacker implementation.
 *     :ajax-opts      ; Base opts map provided to `taoensso.encore/ajax-lite`.
 *     :wrap-recv-evs? ; Should events from server be wrapped in [:chsk/recv _]?
 *     :ws-kalive-ms   ; Ping to keep a WebSocket conn alive if no activity
 *                     ; w/in given msecs. Should be different to server's :ws-kalive-ms.
 */
taoensso.sente.make_channel_socket_client_BANG_ = (function taoensso$sente$make_channel_socket_client_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___110455 = arguments.length;
var i__4737__auto___110456 = (0);
while(true){
if((i__4737__auto___110456 < len__4736__auto___110455)){
args__4742__auto__.push((arguments[i__4737__auto___110456]));

var G__110457 = (i__4737__auto___110456 + (1));
i__4737__auto___110456 = G__110457;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.sente.make_channel_socket_client_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (path,_QMARK_csrf_token,p__109346){
var vec__109347 = p__109346;
var map__109350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109347,(0),null);
var map__109350__$1 = (((((!((map__109350 == null))))?(((((map__109350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__109350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109350):map__109350);
var opts = map__109350__$1;
var ajax_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109350__$1,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109));
var ws_kalive_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__109350__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),taoensso.encore.ms.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"secs","secs",1532330091),(20)], 0)));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__109350__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140),(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"client-uuid","client-uuid",-1717531965).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return taoensso.encore.uuid_str.cljs$core$IFn$_invoke$arity$0();
}
})());
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109350__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var packer = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__109350__$1,new cljs.core.Keyword(null,"packer","packer",66077544),new cljs.core.Keyword(null,"edn","edn",1317840885));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109350__$1,new cljs.core.Keyword(null,"params","params",710516235));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__109350__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"auto","auto",-566279492));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109350__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var recv_buf_or_n = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__109350__$1,new cljs.core.Keyword(null,"recv-buf-or-n","recv-buf-or-n",1363950355),cljs.core.async.sliding_buffer((2048)));
var backoff_ms_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__109350__$1,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),taoensso.encore.exp_backoff);
var wrap_recv_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__109350__$1,new cljs.core.Keyword(null,"wrap-recv-evs?","wrap-recv-evs?",-1996694153),true);
var _deprecated_more_opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109347,(1),null);
var e_110458 = (function (){try{if((function (x){
return cljs.core.contains_QMARK_((function (){var G__109367 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ws","ws",86841443),null,new cljs.core.Keyword(null,"ajax","ajax",814345549),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null);
return (taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1 ? taoensso.truss.impl.set_STAR_.cljs$core$IFn$_invoke$arity$1(G__109367) : taoensso.truss.impl.set_STAR_.call(null,G__109367));
})(),x);
})(type)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e109366){if((e109366 instanceof Error)){
var e_110458 = e109366;
return e_110458;
} else {
throw e109366;

}
}})();
if((e_110458 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1450,"([:in #{:ws :ajax :auto}] type)",type,e_110458,null);
}

var e_110459 = (function (){try{if(taoensso.encore.nblank_str_QMARK_(client_id)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e109368){if((e109368 instanceof Error)){
var e_110459 = e109368;
return e_110459;
} else {
throw e109368;

}
}})();
if((e_110459 == null)){
} else {
taoensso.truss.impl._invar_violation_BANG_(true,"taoensso.sente",1451,"(enc/nblank-str? client-id)",client_id,e_110459,null);
}

if((!((_deprecated_more_opts == null)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",1453,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["`make-channel-socket-client!` fn signature CHANGED with Sente v0.10.0."], null);
}),null)),null,411863706);
} else {
}

if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"lp-timeout","lp-timeout",1149461302))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",1454,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [":lp-timeout opt has CHANGED; please use :lp-timout-ms."], null);
}),null)),null,1584466433);
} else {
}

if((((!(typeof _QMARK_csrf_token === 'string'))) || (clojure.string.blank_QMARK_(_QMARK_csrf_token)))){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",1457,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["WARNING: no CSRF token provided. Connections will FAIL if server-side CSRF check is enabled (as it is by default)."], null);
}),null)),null,-486409737);
} else {
}

var packer__$1 = taoensso.sente.coerce_packer(packer);
var vec__109562 = (function (){var win_loc = taoensso.encore.get_win_loc();
var path__$1 = (function (){var or__4126__auto__ = path;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"pathname","pathname",-1420497528).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
var temp__5733__auto__ = new cljs.core.Keyword(null,"chsk-url-fn","chsk-url-fn",1968894294).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__5733__auto__)){
var f = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443)) : f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ws","ws",86841443))),(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549)) : f.call(null,path__$1,win_loc,new cljs.core.Keyword(null,"ajax","ajax",814345549)))], null);
} else {
var protocol__$1 = (function (){var or__4126__auto__ = protocol;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(win_loc);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return new cljs.core.Keyword(null,"http","http",382524695);
}
}
})();
var host__$1 = (function (){var or__4126__auto__ = host;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(win_loc);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ws","ws",86841443)),taoensso.sente.get_chsk_url(protocol__$1,host__$1,path__$1,new cljs.core.Keyword(null,"ajax","ajax",814345549))], null);
}
})();
var ws_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109562,(0),null);
var ajax_url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109562,(1),null);
var private_chs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"internal","internal",-854870097),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((128))),new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((10))),new cljs.core.Keyword(null,"<server","<server",-2135373537),(function (){var buf = cljs.core.async.sliding_buffer((512));
if(cljs.core.truth_(wrap_recv_evs_QMARK_)){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("chsk","recv","chsk/recv",561097091),ev], null);
})));
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf);
}
})()], null);
var common_chsk_opts = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,new cljs.core.Keyword(null,"chs","chs",376886120),private_chs,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"packer","packer",66077544),packer__$1,new cljs.core.Keyword(null,"ws-kalive-ms","ws-kalive-ms",1442179968),ws_kalive_ms], null);
var ws_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),ws_url,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null)], 0));
var ajax_chsk_opts = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([common_chsk_opts,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"url","url",276297046),ajax_url,new cljs.core.Keyword(null,"ajax-opts","ajax-opts",-518239109),ajax_opts,new cljs.core.Keyword(null,"backoff-ms-fn","backoff-ms-fn",772895955),backoff_ms_fn], null)], 0));
var auto_chsk_opts = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ws-chsk-opts","ws-chsk-opts",-1990170104),ws_chsk_opts,new cljs.core.Keyword(null,"ajax-chsk-opts","ajax-chsk-opts",1602591327),ajax_chsk_opts], null);
var _QMARK_chsk = taoensso.sente._chsk_connect_BANG_((function (){var G__109581 = type;
var G__109581__$1 = (((G__109581 instanceof cljs.core.Keyword))?G__109581.fqn:null);
switch (G__109581__$1) {
case "ws":
return taoensso.sente.new_ChWebSocket(ws_chsk_opts,_QMARK_csrf_token);

break;
case "ajax":
return taoensso.sente.new_ChAjaxSocket(ajax_chsk_opts,_QMARK_csrf_token);

break;
case "auto":
return taoensso.sente.new_ChAutoSocket(auto_chsk_opts,_QMARK_csrf_token);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__109581__$1)].join('')));

}
})());
var temp__5733__auto__ = _QMARK_chsk;
if(cljs.core.truth_(temp__5733__auto__)){
var chsk = temp__5733__auto__;
var chsk_state_ = new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk);
var internal_ch = new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs);
var send_fn = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(taoensso.sente.chsk_send_BANG_,chsk);
var ev_ch = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"internal","internal",-854870097).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(private_chs),new cljs.core.Keyword(null,"<server","<server",-2135373537).cljs$core$IFn$_invoke$arity$1(private_chs)], null),recv_buf_or_n);
var ev_msg_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (ev){
var vec__109592 = taoensso.sente.as_event(ev);
var ev_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109592,(0),null);
var ev__QMARK_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109592,(1),null);
var ev__$1 = vec__109592;
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),internal_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),chsk_state_,new cljs.core.Keyword(null,"event","event",301435442),ev__$1,new cljs.core.Keyword(null,"id","id",-1388402092),ev_id,new cljs.core.Keyword(null,"?data","?data",-9471433),ev__QMARK_data], null);
})));
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ev_ch,ev_msg_ch);

return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"chsk","chsk",-863703081),chsk,new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861),ev_msg_ch,new cljs.core.Keyword(null,"send-fn","send-fn",351002041),send_fn,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"state_","state_",957667102).cljs$core$IFn$_invoke$arity$1(chsk)], null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"warn","warn",-436710552),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",1545,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Failed to create channel socket"], null);
}),null)),null,-1316059379);
}
}));

(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.make_channel_socket_client_BANG_.cljs$lang$applyTo = (function (seq109327){
var G__109328 = cljs.core.first(seq109327);
var seq109327__$1 = cljs.core.next(seq109327);
var G__109329 = cljs.core.first(seq109327__$1);
var seq109327__$2 = cljs.core.next(seq109327__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__109328,G__109329,seq109327__$2);
}));

taoensso.sente._start_chsk_router_BANG_ = (function taoensso$sente$_start_chsk_router_BANG_(server_QMARK_,ch_recv,event_msg_handler,opts){
var map__109615 = opts;
var map__109615__$1 = (((((!((map__109615 == null))))?(((((map__109615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__109615.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109615):map__109615);
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109615__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109615__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109615__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
var ch_ctrl = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var execute1 = (function (f){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var c__103244__auto___110461 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__103245__auto__ = (function (){var switch__103040__auto__ = (function (state_109690){
var state_val_109691 = (state_109690[(1)]);
if((state_val_109691 === (7))){
var inst_109682 = (state_109690[(2)]);
var state_109690__$1 = state_109690;
var statearr_109698_110462 = state_109690__$1;
(statearr_109698_110462[(2)] = inst_109682);

(statearr_109698_110462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109691 === (1))){
var state_109690__$1 = state_109690;
var statearr_109701_110463 = state_109690__$1;
(statearr_109701_110463[(2)] = null);

(statearr_109701_110463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109691 === (4))){
var inst_109635 = (state_109690[(7)]);
var inst_109638 = (state_109690[(8)]);
var inst_109639 = (state_109690[(9)]);
var inst_109644 = (state_109690[(10)]);
var inst_109635__$1 = (state_109690[(2)]);
var inst_109638__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_109635__$1,(0),null);
var inst_109639__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_109635__$1,(1),null);
var inst_109642 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_109639__$1,ch_ctrl);
var inst_109643 = (inst_109638__$1 == null);
var inst_109644__$1 = ((inst_109642) || (inst_109643));
var state_109690__$1 = (function (){var statearr_109710 = state_109690;
(statearr_109710[(7)] = inst_109635__$1);

(statearr_109710[(8)] = inst_109638__$1);

(statearr_109710[(9)] = inst_109639__$1);

(statearr_109710[(10)] = inst_109644__$1);

return statearr_109710;
})();
if(cljs.core.truth_(inst_109644__$1)){
var statearr_109713_110464 = state_109690__$1;
(statearr_109713_110464[(1)] = (5));

} else {
var statearr_109714_110465 = state_109690__$1;
(statearr_109714_110465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109691 === (15))){
var inst_109638 = (state_109690[(8)]);
var state_109690__$1 = state_109690;
var statearr_109717_110466 = state_109690__$1;
(statearr_109717_110466[(2)] = inst_109638);

(statearr_109717_110466[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109691 === (13))){
var inst_109666 = (state_109690[(2)]);
var state_109690__$1 = state_109690;
var statearr_109720_110467 = state_109690__$1;
(statearr_109720_110467[(2)] = inst_109666);

(statearr_109720_110467[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109691 === (6))){
var inst_109638 = (state_109690[(8)]);
var inst_109651 = (inst_109638 == null);
var inst_109652 = cljs.core.not(inst_109651);
var state_109690__$1 = state_109690;
if(inst_109652){
var statearr_109725_110468 = state_109690__$1;
(statearr_109725_110468[(1)] = (8));

} else {
var statearr_109728_110469 = state_109690__$1;
(statearr_109728_110469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109691 === (3))){
var inst_109684 = (state_109690[(2)]);
var state_109690__$1 = state_109690;
return cljs.core.async.impl.ioc_helpers.return_chan(state_109690__$1,inst_109684);
} else {
if((state_val_109691 === (12))){
var state_109690__$1 = state_109690;
var statearr_109733_110470 = state_109690__$1;
(statearr_109733_110470[(2)] = false);

(statearr_109733_110470[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109691 === (2))){
var inst_109631 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_109632 = [ch_recv,ch_ctrl];
var inst_109633 = (new cljs.core.PersistentVector(null,2,(5),inst_109631,inst_109632,null));
var state_109690__$1 = state_109690;
return cljs.core.async.ioc_alts_BANG_(state_109690__$1,(4),inst_109633);
} else {
if((state_val_109691 === (11))){
var state_109690__$1 = state_109690;
var statearr_109740_110471 = state_109690__$1;
(statearr_109740_110471[(2)] = true);

(statearr_109740_110471[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109691 === (9))){
var state_109690__$1 = state_109690;
var statearr_109741_110472 = state_109690__$1;
(statearr_109741_110472[(2)] = false);

(statearr_109741_110472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109691 === (5))){
var state_109690__$1 = state_109690;
var statearr_109746_110473 = state_109690__$1;
(statearr_109746_110473[(2)] = null);

(statearr_109746_110473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109691 === (14))){
var inst_109638 = (state_109690[(8)]);
var inst_109671 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_109638);
var state_109690__$1 = state_109690;
var statearr_109751_110474 = state_109690__$1;
(statearr_109751_110474[(2)] = inst_109671);

(statearr_109751_110474[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109691 === (16))){
var inst_109635 = (state_109690[(7)]);
var inst_109638 = (state_109690[(8)]);
var inst_109639 = (state_109690[(9)]);
var inst_109644 = (state_109690[(10)]);
var inst_109674 = (state_109690[(2)]);
var inst_109675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_109674,new cljs.core.Keyword(null,"event","event",301435442));
var inst_109678 = (function (){var vec__109628 = inst_109635;
var v = inst_109638;
var p = inst_109639;
var stop_QMARK_ = inst_109644;
var map__109647 = inst_109674;
var event_msg = inst_109674;
var event = inst_109675;
return (function (){
try{if(cljs.core.truth_(trace_evs_QMARK_)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"trace","trace",-1082747415),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",1572,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Pre-handler event: %s",event], null);
}),null)),null,356369215);
} else {
}

var G__109774 = (cljs.core.truth_(server_QMARK_)?(function (){var e = (function (){try{if(taoensso.sente.server_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e109777){if((e109777 instanceof Error)){
var e = e109777;
return e;
} else {
throw e109777;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1575,"(server-event-msg? event-msg)",event_msg,e,null);
}
})():(function (){var e = (function (){try{if(taoensso.sente.client_event_msg_QMARK_(event_msg)){
return null;
} else {
return taoensso.truss.impl._dummy_error;
}
}catch (e109784){if((e109784 instanceof Error)){
var e = e109784;
return e;
} else {
throw e109784;

}
}})();
if((e == null)){
return event_msg;
} else {
return taoensso.truss.impl._invar_violation_BANG_(null,"taoensso.sente",1576,"(client-event-msg? event-msg)",event_msg,e,null);
}
})());
return (event_msg_handler.cljs$core$IFn$_invoke$arity$1 ? event_msg_handler.cljs$core$IFn$_invoke$arity$1(G__109774) : event_msg_handler.call(null,G__109774));
}catch (e109760){if((e109760 instanceof Error)){
var e1 = e109760;
try{var temp__5733__auto__ = error_handler;
if(cljs.core.truth_(temp__5733__auto__)){
var eh = temp__5733__auto__;
return (error_handler.cljs$core$IFn$_invoke$arity$2 ? error_handler.cljs$core$IFn$_invoke$arity$2(e1,event_msg) : error_handler.call(null,e1,event_msg));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",1581,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e1,"Chsk router `event-msg-handler` error: %s",event], null);
}),null)),null,1889344818);
}
}catch (e109761){if((e109761 instanceof Error)){
var e2 = e109761;
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$10(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"error","error",-978969032),"taoensso.sente","/Users/dcj/projects/aircraft-tracking/analyze/src/analyze/repl.clj",1582,new cljs.core.Keyword(null,"f","f",-1597136552),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e2,"Chsk router `error-handler` error: %s",event], null);
}),null)),null,-283115538);
} else {
throw e109761;

}
}} else {
throw e109760;

}
}});
})();
var inst_109679 = execute1(inst_109678);
var state_109690__$1 = (function (){var statearr_109789 = state_109690;
(statearr_109789[(11)] = inst_109679);

return statearr_109789;
})();
var statearr_109792_110475 = state_109690__$1;
(statearr_109792_110475[(2)] = null);

(statearr_109792_110475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109691 === (10))){
var inst_109669 = (state_109690[(2)]);
var state_109690__$1 = state_109690;
if(cljs.core.truth_(inst_109669)){
var statearr_109797_110476 = state_109690__$1;
(statearr_109797_110476[(1)] = (14));

} else {
var statearr_109798_110477 = state_109690__$1;
(statearr_109798_110477[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_109691 === (8))){
var inst_109638 = (state_109690[(8)]);
var inst_109656 = inst_109638.cljs$lang$protocol_mask$partition0$;
var inst_109657 = (inst_109656 & (64));
var inst_109658 = inst_109638.cljs$core$ISeq$;
var inst_109660 = (cljs.core.PROTOCOL_SENTINEL === inst_109658);
var inst_109662 = ((inst_109657) || (inst_109660));
var state_109690__$1 = state_109690;
if(cljs.core.truth_(inst_109662)){
var statearr_109799_110478 = state_109690__$1;
(statearr_109799_110478[(1)] = (11));

} else {
var statearr_109802_110479 = state_109690__$1;
(statearr_109802_110479[(1)] = (12));

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
});
return (function() {
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__103041__auto__ = null;
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__103041__auto____0 = (function (){
var statearr_109809 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_109809[(0)] = taoensso$sente$_start_chsk_router_BANG__$_state_machine__103041__auto__);

(statearr_109809[(1)] = (1));

return statearr_109809;
});
var taoensso$sente$_start_chsk_router_BANG__$_state_machine__103041__auto____1 = (function (state_109690){
while(true){
var ret_value__103042__auto__ = (function (){try{while(true){
var result__103043__auto__ = switch__103040__auto__(state_109690);
if(cljs.core.keyword_identical_QMARK_(result__103043__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__103043__auto__;
}
break;
}
}catch (e109812){var ex__103044__auto__ = e109812;
var statearr_109813_110480 = state_109690;
(statearr_109813_110480[(2)] = ex__103044__auto__);


if(cljs.core.seq((state_109690[(4)]))){
var statearr_109816_110481 = state_109690;
(statearr_109816_110481[(1)] = cljs.core.first((state_109690[(4)])));

} else {
throw ex__103044__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__103042__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__110482 = state_109690;
state_109690 = G__110482;
continue;
} else {
return ret_value__103042__auto__;
}
break;
}
});
taoensso$sente$_start_chsk_router_BANG__$_state_machine__103041__auto__ = function(state_109690){
switch(arguments.length){
case 0:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__103041__auto____0.call(this);
case 1:
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__103041__auto____1.call(this,state_109690);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
taoensso$sente$_start_chsk_router_BANG__$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$0 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__103041__auto____0;
taoensso$sente$_start_chsk_router_BANG__$_state_machine__103041__auto__.cljs$core$IFn$_invoke$arity$1 = taoensso$sente$_start_chsk_router_BANG__$_state_machine__103041__auto____1;
return taoensso$sente$_start_chsk_router_BANG__$_state_machine__103041__auto__;
})()
})();
var state__103246__auto__ = (function (){var statearr_109823 = f__103245__auto__();
(statearr_109823[(6)] = c__103244__auto___110461);

return statearr_109823;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__103246__auto__);
}));


return (function taoensso$sente$_start_chsk_router_BANG__$_stop_BANG_(){
return cljs.core.async.close_BANG_(ch_ctrl);
});
});
/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 * 
 *   Or for simple automatic future-based threading of every request, enable
 *   the `:simple-auto-threading?` opt (disabled by default).
 */
taoensso.sente.start_server_chsk_router_BANG_ = (function taoensso$sente$start_server_chsk_router_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___110483 = arguments.length;
var i__4737__auto___110484 = (0);
while(true){
if((i__4737__auto___110484 < len__4736__auto___110483)){
args__4742__auto__.push((arguments[i__4737__auto___110484]));

var G__110485 = (i__4737__auto___110484 + (1));
i__4737__auto___110484 = G__110485;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.sente.start_server_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__109845){
var vec__109848 = p__109845;
var map__109851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109848,(0),null);
var map__109851__$1 = (((((!((map__109851 == null))))?(((((map__109851.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__109851.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109851):map__109851);
var opts = map__109851__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109851__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109851__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var simple_auto_threading_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109851__$1,new cljs.core.Keyword(null,"simple-auto-threading?","simple-auto-threading?",1950754184));
return taoensso.sente._start_chsk_router_BANG_(new cljs.core.Keyword(null,"server","server",1499190120),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_server_chsk_router_BANG_.cljs$lang$applyTo = (function (seq109832){
var G__109833 = cljs.core.first(seq109832);
var seq109832__$1 = cljs.core.next(seq109832);
var G__109834 = cljs.core.first(seq109832__$1);
var seq109832__$2 = cljs.core.next(seq109832__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__109833,G__109834,seq109832__$2);
}));

/**
 * Creates a simple go-loop to call `(event-msg-handler <server-event-msg>)`
 *   and log any errors. Returns a `(fn stop! [])`. Note that advanced users may
 *   prefer to just write their own loop against `ch-recv`.
 * 
 *   Nb performance note: since your `event-msg-handler` fn will be executed
 *   within a simple go block, you'll want this fn to be ~non-blocking
 *   (you'll especially want to avoid blocking IO) to avoid starving the
 *   core.async thread pool under load. To avoid blocking, you can use futures,
 *   agents, core.async, etc. as appropriate.
 */
taoensso.sente.start_client_chsk_router_BANG_ = (function taoensso$sente$start_client_chsk_router_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___110486 = arguments.length;
var i__4737__auto___110487 = (0);
while(true){
if((i__4737__auto___110487 < len__4736__auto___110486)){
args__4742__auto__.push((arguments[i__4737__auto___110487]));

var G__110488 = (i__4737__auto___110487 + (1));
i__4737__auto___110487 = G__110488;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(taoensso.sente.start_client_chsk_router_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ch_recv,event_msg_handler,p__109882){
var vec__109883 = p__109882;
var map__109886 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__109883,(0),null);
var map__109886__$1 = (((((!((map__109886 == null))))?(((((map__109886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__109886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109886):map__109886);
var opts = map__109886__$1;
var trace_evs_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109886__$1,new cljs.core.Keyword(null,"trace-evs?","trace-evs?",1502453512));
var error_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109886__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
return taoensso.sente._start_chsk_router_BANG_(cljs.core.not(new cljs.core.Keyword(null,"server","server",1499190120)),ch_recv,event_msg_handler,opts);
}));

(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(taoensso.sente.start_client_chsk_router_BANG_.cljs$lang$applyTo = (function (seq109869){
var G__109870 = cljs.core.first(seq109869);
var seq109869__$1 = cljs.core.next(seq109869);
var G__109871 = cljs.core.first(seq109869__$1);
var seq109869__$2 = cljs.core.next(seq109869__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__109870,G__109871,seq109869__$2);
}));

taoensso.sente.event_msg_QMARK_ = taoensso.sente.client_event_msg_QMARK_;
/**
 * Platform-specific alias for `make-channel-socket-server!` or
 *   `make-channel-socket-client!`. Please see the appropriate aliased fn
 * docstring for details.
 */
taoensso.sente.make_channel_socket_BANG_ = taoensso.sente.make_channel_socket_client_BANG_;
/**
 * Platform-specific alias for `start-server-chsk-router!` or
 *   `start-client-chsk-router!`. Please see the appropriate aliased fn
 *   docstring for details.
 */
taoensso.sente.start_chsk_router_BANG_ = taoensso.sente.start_client_chsk_router_BANG_;
/**
 * DEPRECATED: Please use `start-chsk-router!` instead
 */
taoensso.sente.start_chsk_router_loop_BANG_ = (function taoensso$sente$start_chsk_router_loop_BANG_(event_handler,ch_recv){
return taoensso.sente.start_client_chsk_router_BANG_(ch_recv,(function (ev_msg){
var G__109910 = new cljs.core.Keyword(null,"event","event",301435442).cljs$core$IFn$_invoke$arity$1(ev_msg);
var G__109911 = new cljs.core.Keyword(null,"ch-recv","ch-recv",-990916861).cljs$core$IFn$_invoke$arity$1(ev_msg);
return (event_handler.cljs$core$IFn$_invoke$arity$2 ? event_handler.cljs$core$IFn$_invoke$arity$2(G__109910,G__109911) : event_handler.call(null,G__109910,G__109911));
}));
});

/**
 * DEPRECATED. Please use `timbre/set-level!` instead
 */
taoensso.sente.set_logging_level_BANG_ = taoensso.timbre.set_level_BANG_;

/**
 * DEPRECATED: Please use `ajax-lite` instead
 */
taoensso.sente.ajax_call = taoensso.encore.ajax_lite;

/**
 * DEPRECATED
 */
taoensso.sente.default_chsk_url_fn = (function taoensso$sente$default_chsk_url_fn(path,p__109918,websocket_QMARK_){
var map__109921 = p__109918;
var map__109921__$1 = (((((!((map__109921 == null))))?(((((map__109921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__109921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__109921):map__109921);
var location = map__109921__$1;
var protocol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109921__$1,new cljs.core.Keyword(null,"protocol","protocol",652470118));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109921__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var pathname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__109921__$1,new cljs.core.Keyword(null,"pathname","pathname",-1420497528));
var protocol__$1 = (cljs.core.truth_(websocket_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(protocol,"https:"))?"wss:":"ws:"):protocol);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(protocol__$1),"//",cljs.core.str.cljs$core$IFn$_invoke$arity$1(host),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = path;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return pathname;
}
})())].join('');
});

//# sourceMappingURL=taoensso.sente.js.map
