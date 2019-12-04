webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/NameForm.js":
/*!********************************!*\
  !*** ./components/NameForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styledComponents */ "./components/styledComponents.js");
/* harmony import */ var _useFormik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useFormik */ "./components/useFormik.js");

var _jsxFileName = "C:\\Front end\\Praksa\\next-vezba\\next-example\\components\\NameForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var NameForm = function NameForm() {
  var formik = Object(_useFormik__WEBPACK_IMPORTED_MODULE_3__["default"])({
    initialValues: {
      name: "",
      email: ""
    },
    onSubmit: function onSubmit(values) {
      alert(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(values, null, 2));
    },
    validate: function validate(values) {
      var errors = {};

      if (values.name !== "admin") {
        errors.name = "You are not allowed";
      }

      return errors;
    }
  });
  var handleSubmit = formik.handleSubmit,
      handleBlur = formik.handleBlur,
      handleChange = formik.handleChange,
      values = formik.values,
      touched = formik.touched,
      errors = formik.errors;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "Name:", __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "text",
    name: "name",
    value: values.name,
    onChange: handleChange,
    onBlur: handleBlur,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), errors.name && touched.name && __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["ErrorMsg"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, " ", errors.name)), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "Email:", __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    type: "email",
    name: "email",
    value: values.email,
    onChange: handleChange,
    onBlur: handleBlur,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), errors.email && touched.email && __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["ErrorMsg"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, " ", errors.email)), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    type: "submit",
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Submit")));
};

/* harmony default export */ __webpack_exports__["default"] = (NameForm);

/***/ })

})
//# sourceMappingURL=index.js.be841981d892a57e606f.hot-update.js.map