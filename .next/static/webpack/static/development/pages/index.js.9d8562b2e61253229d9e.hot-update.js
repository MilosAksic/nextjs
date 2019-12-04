webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/utils.js":
/*!*****************************!*\
  !*** ./components/utils.js ***!
  \*****************************/
/*! exports provided: isObject, setNestedObjectValues */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setNestedObjectValues", function() { return setNestedObjectValues; });
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_weak_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_weak_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_weak_map__WEBPACK_IMPORTED_MODULE_2__);



var isObject = function isObject(obj) {
  if (obj !== null && typeof obj == "object") {
    return true;
  }

  return false;
};
function setNestedObjectValues(object, value) {
  var visited = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new _babel_runtime_corejs2_core_js_weak_map__WEBPACK_IMPORTED_MODULE_2___default.a();
  var response = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  //   console.log("object", object);
  //   console.log("value", value);
  //   console.log("visited", visited);
  //   console.log("response na pocetku", response);
  for (var _i = 0, _Object$keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(object); _i < _Object$keys.length; _i++) {
    var k = _Object$keys[_i];
    // console.log("radi", k);
    var val = object[k]; // console.log("val", val);
    // console.log("is val object", isObject(val));

    if (isObject(val)) {
      if (!visited.get(val)) {
        visited.set(val, true);
        response[k] = _babel_runtime_corejs2_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(val) ? [] : {};
        setNestedObjectValues(val, value, visited, response[k]);
        console.log("radi if");
      }
    } else {
      response[k] = value;
      console.log("radi else");
    } // console.log("response", response);

  }

  return response;
}

/***/ })

})
//# sourceMappingURL=index.js.9d8562b2e61253229d9e.hot-update.js.map