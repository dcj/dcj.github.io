goog.provide("helix.impl.classes");
helix.impl.classes.createComponent = function createComponent(superclass, spec, statics) {
  var helix$impl$classes$classdecl$var0 = function(props) {
    var $jscomp$super$this;
    $jscomp$super$this = superclass.call(this, props) || this;
    if (spec.constructor) {
      spec.constructor.call($jscomp$super$this, $jscomp$super$this);
    }
    for (var key in spec) {
      if (key !== "constructor") {
        var prop = spec[key];
        if (typeof prop === "function") {
          $jscomp$super$this[key] = prop.bind($jscomp$super$this, $jscomp$super$this);
        } else {
          $jscomp$super$this[key] = prop;
        }
      }
    }
    return $jscomp$super$this;
  };
  $jscomp.inherits(helix$impl$classes$classdecl$var0, superclass);
  var component = helix$impl$classes$classdecl$var0;
  for (var key in statics) {
    var prop = statics[key];
    if (typeof prop === "function") {
      component[key] = prop.bind(component, component);
    } else {
      component[key] = prop;
    }
  }
  return component;
};

//# sourceMappingURL=helix.impl.classes.js.map
