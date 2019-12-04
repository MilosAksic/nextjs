webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/styledComponents.js":
/*!****************************************!*\
  !*** ./components/styledComponents.js ***!
  \****************************************/
/*! exports provided: Title, Wrapper, Button, TomatoButton, Input, BrandedButton, Rotate, ErrorMsg, Grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Title", function() { return Title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TomatoButton", function() { return TomatoButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return Input; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandedButton", function() { return BrandedButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rotate", function() { return Rotate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMsg", function() { return ErrorMsg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid", function() { return Grid; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var Title = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h1.withConfig({
  displayName: "styledComponents__Title",
  componentId: "yin75o-0"
})(["font-size:50px;color:", ";"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.primary;
});
var ErrorMsg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styledComponents__ErrorMsg",
  componentId: "yin75o-1"
})(["color:white;font-size:20px;"]);
var Grid = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styledComponents__Grid",
  componentId: "yin75o-2"
})(["display:", ";flex-direction:", ";justify-content:", ";align-items:", ";align-content:", ";@media (min-width:600px){width:", ";}@media (min-width:601px){width:", ";}@media (min-width:961px){width:", ";}@media (min-width:1281px){width:", ";}@media (min-width:1921px){width:", ";}"], function (props) {
  return props.container ? "flex" : "block";
}, function (props) {
  return props.direction === "column" ? "column" : "row";
}, function (props) {
  return props.justify === "flex-start" ? "flex-start" : props.justify;
}, function (props) {
  return props.alignItems === "stretch" ? "stretch" : props.alignItems;
}, function (props) {
  return props.alignContent === "stretch" ? "stretch" : props.alignContent;
}, function (props) {
  return props.xs ? "calc(".concat(props.xs, "*(100%/12) )") : "auto";
}, function (props) {
  return props.sm ? "calc(".concat(props.sm, "*(100%/12) )") : "auto";
}, function (props) {
  return props.md ? "calc(".concat(props.md, "*(100%/12) )") : "auto";
}, function (props) {
  return props.lg ? "calc(".concat(props.lg, "*(100%/12) )") : "auto";
}, function (props) {
  return props.xl ? "calc(".concat(props.xl, "*(100%/12) )") : "auto";
});
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "styledComponents__Wrapper",
  componentId: "yin75o-3"
})(["padding:4em;background:gray;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "styledComponents__Button",
  componentId: "yin75o-4"
})(["background:", ";color:", ";&:hover{cursor:pointer;}font-size:1em;margin:1em;padding:0.25em 1em;border:2px solid palevioletred;border-radius:3px;"], function (props) {
  return props.primary ? "palevioletred" : "white";
}, function (props) {
  return props.primary ? "white" : "palevioletred";
});
var TomatoButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(Button).withConfig({
  displayName: "styledComponents__TomatoButton",
  componentId: "yin75o-5"
})(["color:tomato;border-color:tomato;"]);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].input.withConfig({
  displayName: "styledComponents__Input",
  componentId: "yin75o-6"
})(["padding:0.5em;margin:0.5em;color:", ";background:papayawhip;border:none;border-radius:3px;"], function (props) {
  return props.inputColor || "black";
});
var BrandedButton = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button.withConfig({
  displayName: "styledComponents__BrandedButton",
  componentId: "yin75o-7"
})(["color:", ";&:hover{color:", ";}"], function (props) {
  return props.themeColor;
}, function (props) {
  return props.themeHoverColor;
}); // Create the keyframes

var rotate = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["keyframes"])(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]); // Here we create a component that will rotate everything we pass in over two seconds

var Rotate = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "styledComponents__Rotate",
  componentId: "yin75o-8"
})(["display:inline-block;animation:", " 5s linear infinite;padding:2rem 1rem;font-size:1.2rem;"], rotate);


/***/ })

})
//# sourceMappingURL=index.js.869d6255dd2a2d7e09fb.hot-update.js.map