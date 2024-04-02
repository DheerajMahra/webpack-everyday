(() => {
  // webpackBootstrap
	var __webpack_modules__ = ({
    "./src/index.js": ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
      eval(`
        const add = __webpack_require__("./src/math.js");
        
        console.log(add(2, 4));
        
        //# sourceURL=webpack://webpack/./src/index.js?
      `);
    }),
  
    "./src/math.js": ((module) => {
      eval(`
        const add = (a, b) => a + b;
        
        module.exports = add;
        
        //# sourceURL=webpack://webpack/./src/math.js?
      `);
    })
  });

  var __webpack_module_cache__ = {};
  
  function __webpack_require__(moduleId) {
  	var cachedModule = __webpack_module_cache__[moduleId];
  	if (cachedModule !== undefined) {
  		return cachedModule.exports;
  	}
  	var module = __webpack_module_cache__[moduleId] = {
  		exports: {}
  	};
  	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  	return module.exports;
  }
  
  var __webpack_exports__ = __webpack_require__("./src/index.js");
})();
  