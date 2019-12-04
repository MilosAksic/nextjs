webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/NameForm.js":
/*!********************************!*\
  !*** ./components/NameForm.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styledComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styledComponents */ "./components/styledComponents.js");
/* harmony import */ var _useFormik__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useFormik */ "./components/useFormik.js");
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./validation */ "./components/validation.js");


var _jsxFileName = "C:\\Front end\\Praksa\\next-vezba\\next-example\\components\\NameForm.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var NameForm = function NameForm() {
  var formik = Object(_useFormik__WEBPACK_IMPORTED_MODULE_4__["default"])({
    initialValues: {
      name: "",
      email: "",
      password: "",
      repeatedPassword: ""
    },
    onSubmit: function onSubmit(values) {
      alert(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(values, null, 2));
    },
    validate: function validate(values) {
      //   let errors = {};
      //   if (values.name !== "admin") {
      //     errors.name = "You are not allowed";
      //   }
      //   if (values.password !== values.repeatedPassword) {
      //     errors.repeatedPassword = "Password doesnt match";
      //   }
      //   return errors;
      var errors = {};
      _validation__WEBPACK_IMPORTED_MODULE_5__["formValidation"].validate(values, {
        abortEarly: false
      }).then(function () {})["catch"](function (err) {
        err.inner.map(function (item) {
          errors[item.path] = item.errors[0];
        });
      });
      return errors;
    }
  });
  var handleSubmit = formik.handleSubmit,
      getFieldProps = formik.getFieldProps,
      touched = formik.touched,
      errors = formik.errors,
      submitError = formik.submitError;
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, submitError && __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, " ", submitError, " "), __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Name:", __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["Input"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "text"
  }, getFieldProps("name"), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), errors.name && touched.name && __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["ErrorMsg"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, " ", errors.name)), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Email:", __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["Input"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "email"
  }, getFieldProps("email"), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })), errors.email && touched.email && __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["ErrorMsg"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, " ", errors.email)), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Password:", __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["Input"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "password"
  }, getFieldProps("password"), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), errors.password && touched.password && __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["ErrorMsg"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, " ", errors.password)), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Repeat Password:", __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["Input"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    type: "password"
  }, getFieldProps("repeatedPassword"), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), errors.repeatedPassword && touched.repeatedPassword && __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["ErrorMsg"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, " ", errors.repeatedPassword)), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx(_styledComponents__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    type: "submit",
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Submit")));
};

/* harmony default export */ __webpack_exports__["default"] = (NameForm);

/***/ })

})
//# sourceMappingURL=index.js.301bf4afc5821133ac6d.hot-update.js.map