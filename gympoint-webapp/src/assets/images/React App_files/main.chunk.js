(this["webpackJsonpgympoint-webapp"] = this["webpackJsonpgympoint-webapp"] || []).push([["main"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var redux_persist_es_integration_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/es/integration/react */ "./node_modules/redux-persist/es/integration/react.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _config_ReactotronConfig__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/ReactotronConfig */ "./src/config/ReactotronConfig.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./routes */ "./src/routes/index.js");
/* harmony import */ var _services_history__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/history */ "./src/services/history.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles/global */ "./src/styles/global.js");
var _jsxFileName = "/home/wagnerwd40/Documents/Webdev/gostack/gympoint/gympoint-webapp/src/App.js";











function App() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
    store: _store__WEBPACK_IMPORTED_MODULE_8__["store"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(redux_persist_es_integration_react__WEBPACK_IMPORTED_MODULE_2__["PersistGate"], {
    persistor: _store__WEBPACK_IMPORTED_MODULE_8__["persistor"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Router"], {
    history: _services_history__WEBPACK_IMPORTED_MODULE_7__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_routes__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles_global__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_1__["ToastContainer"], {
    autoClose: 2500,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/components/EditForms/Student/index.js":
/*!***************************************************!*\
  !*** ./src/components/EditForms/Student/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StudentForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/EditForms/Student/styles.js");
/* harmony import */ var _rocketseat_unform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rocketseat/unform */ "./node_modules/@rocketseat/unform/dist/index.es.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _jsxFileName = "/home/wagnerwd40/Documents/Webdev/gostack/gympoint/gympoint-webapp/src/components/EditForms/Student/index.js";




function StudentForm({
  maxSize,
  actionType,
  handleRegistry,
  handleBack
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxSize: maxSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["Subheader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, actionType, " de aluno")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaAngleLeft"], {
    color: "#FFF",
    size: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), "VOLTAR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaCheck"], {
    color: "#FFF",
    size: 14,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), "SALVAR"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["FormContainer"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "NOME COMPLETO"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "John Doe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "ENDERE\xC7O DE E-MAIL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "exemplo@email.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "IDADE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "PESO (em kg)"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "ALTURA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))))));
}
;

/***/ }),

/***/ "./src/components/EditForms/Student/styles.js":
/*!****************************************************!*\
  !*** ./src/components/EditForms/Student/styles.js ***!
  \****************************************************/
/*! exports provided: Container, Subheader, FormContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subheader", function() { return Subheader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormContainer", function() { return FormContainer; });
/* harmony import */ var _home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject3() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: #FFF;\n    border-radius: 4px;\n    padding: 30px;\n\n    form {\n        display: flex;\n        flex-direction: column;\n        font-weight: bold;\n        color: #333;\n\n        input {\n            height: 40px;\n            border-radius: 4px;\n            border: 1px solid #ccc;\n            margin: 10px 0 15px 0;\n            padding: 10px;\n        }\n\n        div {\n            display: flex;\n            flex-grow: 1;\n\n            div {\n                display: flex;\n                flex-direction: column;\n                \n                & + div {\n                    margin-left: 15px;\n                }\n            }\n        }\n    }\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-bottom: 30px;\n\n    h1 {\n        font-size: 20px;\n        color: #333;\n    }\n\n    div {\n        position: relative;\n        display: flex;\n        flex-direction: row;\n    }\n\n    button {\n        display: flex;\n        padding: 10px 10px;\n        background: #cccccc;\n        border: none;\n        border-radius: 4px;\n        color: #FFF;\n        font-weight: bold;\n        font-size: 14px;\n        width: 110px;\n        justify-content: space-evenly;\n        align-items: center;\n        \n        &:nth-last-of-type(1) {\n            margin-left: 16px;\n            background: #ee4d64;\n        }\n    }\n\n    span {\n        position: absolute;\n        right: 190px;\n        top: 9px;\n    }\n\n    input {\n        padding: 6px;\n        padding-left: 25px;\n        border-radius: 4px;\n        border: 1px solid #ccc;\n        color: #333;\n        margin-left: 12px;\n\n        &::placeholder {\n            color: #ccc;\n        }\n    }\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    margin: 0 30px;\n    max-width: 800px;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
const Subheader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header(_templateObject2());
const FormContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3());

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./src/components/Header/styles.js");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/history */ "./src/services/history.js");
var _jsxFileName = "/home/wagnerwd40/Documents/Webdev/gostack/gympoint/gympoint-webapp/src/components/Header/index.js";






function Header({
  props
}) {
  const profile = Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["useSelector"])(state => state.user.profile);
  const currentPage = _services_history__WEBPACK_IMPORTED_MODULE_5__["default"].location.pathname;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["Content"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Gympoint",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    to: "/management/students",
    highlighted: currentPage === '/management/students',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "ALUNOS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    to: "/management/plans",
    highlighted: currentPage === '/management/plans',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "PLANOS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    to: "/management/registries",
    highlighted: currentPage === '/management/registries',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, "MATR\xCDCULAS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    to: "/management/help",
    highlighted: currentPage === '/management/help',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "PEDIDOS DE AUX\xCDLIO")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("aside", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_3__["Profile"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, profile.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "sair do sistema"))))));
}
;

/***/ }),

/***/ "./src/components/Header/styles.js":
/*!*****************************************!*\
  !*** ./src/components/Header/styles.js ***!
  \*****************************************/
/*! exports provided: Container, Content, NavLink, Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Content", function() { return Content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Profile", function() { return Profile; });
/* harmony import */ var _home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");


function _templateObject4() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    \n    div {\n        \n        strong {\n            color: #555;\n        }\n        \n        button {\n            background: none;\n            border: none;\n            color: #ee4d64;\n            margin-top: 5px;\n        }\n    }\n"]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color: ", ";\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    margin: auto;\n    height: 64px;\n    max-width: 1200px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n\n    nav {\n        display: flex;\n        align-items: center;\n\n        img {\n            width: 80px;\n            height: 40px;\n            margin-right: 20px;\n            padding-right: 20px;\n    }\n\n    a   {\n            margin-left: 20px;\n            font-weight: bold;\n        }\n    }\n\n    a:nth-of-type(1) {\n        border-right: 1px solid #ccc;\n    }\n\n\n    div {\n        display: flex;\n        flex-direction: column;\n        text-align: end;\n    }\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: absolute;\n    width: 100%;\n    left: 0;\n    top: 0;\n    background: #FFF;\n    padding: 0 30px;\n    border-bottom: 1px solid #ccc;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}



const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2());
const NavLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"])(_templateObject3(), props => props.highlighted ? '#333' : '#ccc');
const Profile = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4());

/***/ }),

/***/ "./src/components/InfoTable/index.js":
/*!*******************************************!*\
  !*** ./src/components/InfoTable/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StudentManagement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/components/InfoTable/styles.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
var _jsxFileName = "/home/wagnerwd40/Documents/Webdev/gostack/gympoint/gympoint-webapp/src/components/InfoTable/index.js";



function StudentManagement({
  maxSize,
  dataType,
  data,
  dataInfo,
  tableHeader,
  registryButton,
  search,
  editButton,
  deleteButton,
  handleRegistry,
  handleSearch,
  handleEdit,
  handleDelete
}) {
  // const DATA = [
  //     {
  //         id: 1,
  //         name: 'Nag Loladas',
  //         email: 'loada@lolanca.com',
  //         age: 15,
  //     },
  //     {
  //         id: 2,
  //         name: 'Nag Lolaos',
  //         email: 'loada@lolanca.com',
  //         age: 20,
  //     },
  //     {
  //         id: 3,
  //         name: 'Nag Lolones',
  //         email: 'loada@lolanca.com',
  //         age: 30,
  //     },
  // ];
  // const dataType = 'alunos';
  // const data = DATA;
  // const dataInfo = ['id', 'name', 'email', 'age'];
  // const tableHeader = ['NOME', 'E-MAIL', 'IDADE'];
  // const registryButton = true;
  // const search = true;
  // const editButton = true;
  // const deleteButton = true;
  // function handleRegistry() {};
  // function handleSearch() {};
  // function handleEdit() {};
  // function handleDelete() {};
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    maxSize: maxSize,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["Subheader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Gerenciando ", dataType)), (registryButton || search) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, registryButton && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaPlus"], {
    color: "#FFF",
    size: 14,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), "CADASTRAR"), search && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    placeholder: "Buscar ".concat(dataType),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaSearch"], {
    color: "#aaa",
    size: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, tableHeader.map(header => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    key: header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, header)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, data.map(item => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["TableRow"], {
    key: item[dataInfo[0]],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, item[dataInfo[1]]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, item[dataInfo[2]]), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, item[dataInfo[3]]), item[dataInfo[4]] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, item[dataInfo[4]]), item[dataInfo[5]] && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, item[dataInfo[5]]), (editButton || deleteButton) && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, editButton && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "editar"), deleteButton && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "apagar")))))));
}
;

/***/ }),

/***/ "./src/components/InfoTable/styles.js":
/*!********************************************!*\
  !*** ./src/components/InfoTable/styles.js ***!
  \********************************************/
/*! exports provided: Container, Subheader, Table, TableRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subheader", function() { return Subheader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableRow", function() { return TableRow; });
/* harmony import */ var _home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject4() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n    td {\n        height: 50px;\n    }\n\n    td + td {\n        text-align: center;\n    }\n\n    td:nth-of-type(2) {\n        text-align: left;\n    }\n\n    td:nth-last-of-type(1) {\n        text-align: right;\n    }\n\n\n"]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: #FFF;\n    padding: 30px;\n    border-radius: 4px;\n    color: #333;\n    \n    thead {\n        padding-bottom: 20px;\n\n        tr {\n            box-shadow: none;\n        }\n    }\n\n    tr {\n        box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.09);\n    }\n\n    tr:nth-last-of-type(1) {\n        box-shadow: none;\n    }\n\n    th {\n        text-align: left;\n        height: 40px;\n    }\n\n    th:nth-of-type(2) {\n        text-align: left;\n    }\n\n    th + th {\n        text-align: center;\n    }\n\n    button {\n        border: none;\n        background: none;\n        padding-left: 20px;\n        color: #ee4d64;\n    }\n\n    button:nth-of-type(1) {\n        color: #6f99f0;\n    }\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-bottom: 30px;\n\n    h1 {\n        font-size: 20px;\n        color: #333;\n    }\n\n    div {\n        position: relative;\n        display: flex;\n        flex-direction: row;\n    }\n\n    button {\n        display: flex;\n        padding: 10px 10px;\n        background: #ee4d64;\n        border: none;\n        border-radius: 4px;\n        color: #FFF;\n        font-weight: bold;\n        font-size: 14px;\n        width: 140px;\n        justify-content: space-evenly;\n        align-items: center;\n    }\n\n    span {\n        position: absolute;\n        right: 190px;\n        top: 9px;\n    }\n\n    input {\n        padding: 6px;\n        padding-left: 25px;\n        border-radius: 4px;\n        border: 1px solid #ccc;\n        color: #333;\n        margin-left: 12px;\n\n        &::placeholder {\n            color: #ccc;\n        }\n    }\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    margin: 0 30px;\n    max-width: ", ";\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject(), props => props.maxSize ? props.maxSize : '1200px');
const Subheader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header(_templateObject2());
const Table = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].table(_templateObject3());
const TableRow = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].tr(_templateObject4());

/***/ }),

/***/ "./src/config/ReactotronConfig.js":
/*!****************************************!*\
  !*** ./src/config/ReactotronConfig.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reactotron_react_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reactotron-react-js */ "./node_modules/reactotron-react-js/dist/index.js");
/* harmony import */ var reactotron_react_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(reactotron_react_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactotron_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactotron-redux */ "./node_modules/reactotron-redux/dist/index.js");
/* harmony import */ var reactotron_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactotron_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reactotron_redux_saga__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reactotron-redux-saga */ "./node_modules/reactotron-redux-saga/dist/index.js");
/* harmony import */ var reactotron_redux_saga__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reactotron_redux_saga__WEBPACK_IMPORTED_MODULE_2__);




if (true) {
  const tron = reactotron_react_js__WEBPACK_IMPORTED_MODULE_0___default.a.configure().use(Object(reactotron_redux__WEBPACK_IMPORTED_MODULE_1__["reactotronRedux"])()).use(reactotron_redux_saga__WEBPACK_IMPORTED_MODULE_2___default()()).connect();
  tron.clear();
  console.tron = tron;
}

;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
var _jsxFileName = "/home/wagnerwd40/Documents/Webdev/gostack/gympoint/gympoint-webapp/src/index.js";



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), document.getElementById('root'));

/***/ }),

/***/ "./src/pages/Edit/Students/index.js":
/*!******************************************!*\
  !*** ./src/pages/Edit/Students/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StudentEdit; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_EditForms_Student___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/EditForms/Student/ */ "./src/components/EditForms/Student/index.js");
var _jsxFileName = "/home/wagnerwd40/Documents/Webdev/gostack/gympoint/gympoint-webapp/src/pages/Edit/Students/index.js";


function StudentEdit() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EditForms_Student___WEBPACK_IMPORTED_MODULE_1__["default"], {
    actionType: 'Edição',
    handleRegistry: () => {},
    handleBack: () => {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  });
}
;

/***/ }),

/***/ "./src/pages/Management/Help/index.js":
/*!********************************************!*\
  !*** ./src/pages/Management/Help/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HelpManagement; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ "./src/pages/Management/Help/styles.js");
var _jsxFileName = "/home/wagnerwd40/Documents/Webdev/gostack/gympoint/gympoint-webapp/src/pages/Management/Help/index.js";


function HelpManagement() {
  const DATA = [{
    student: 'Nag Loladas'
  }, {
    student: 'Nag Lolão'
  }, {
    student: 'Nag Lolinho'
  }];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["Subheader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Pedidos de aux\xEDlio"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["HelpTable"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "ALUNO"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, DATA.map(help => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__["HelpData"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, help.student), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "responder")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }))))));
}
;

/***/ }),

/***/ "./src/pages/Management/Help/styles.js":
/*!*********************************************!*\
  !*** ./src/pages/Management/Help/styles.js ***!
  \*********************************************/
/*! exports provided: Container, Subheader, HelpTable, HelpData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subheader", function() { return Subheader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpTable", function() { return HelpTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpData", function() { return HelpData; });
/* harmony import */ var _home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject4() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n    td {\n        height: 50px;\n        \n        & + td {\n            text-align: center;\n        }\n    }\n\n    td:nth-last-of-type(1) {\n        text-align: right;\n    }\n\n\n    button {\n        border: none;\n        background: none;\n        padding-left: 20px;\n        color: #6f99f0;;\n    }\n\n"]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: #FFF;\n    padding: 30px;\n    border-radius: 4px;\n    color: #333;\n    \n    thead {\n        padding-bottom: 20px;\n\n        tr {\n            box-shadow: none;\n        }\n    }\n\n    tr {\n        box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.09);\n    }\n\n    tr:nth-last-of-type(1) {\n        box-shadow: none;\n    }\n\n    th {\n        text-align: left;\n        height: 40px;\n    }\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-bottom: 30px;\n\n    h1 {\n        font-size: 20px;\n        color: #333;\n    }\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    margin: 0 30px;\n    max-width: 750px;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
const Subheader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header(_templateObject2());
const HelpTable = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].table(_templateObject3());
const HelpData = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].tr(_templateObject4());

/***/ }),

/***/ "./src/pages/Management/Plan/index.js":
/*!********************************************!*\
  !*** ./src/pages/Management/Plan/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PlanManagement; });
/* harmony import */ var _home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_InfoTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/InfoTable */ "./src/components/InfoTable/index.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/api */ "./src/services/api.js");


var _jsxFileName = "/home/wagnerwd40/Documents/Webdev/gostack/gympoint/gympoint-webapp/src/pages/Management/Plan/index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function PlanManagement() {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
        _useState2 = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        plans = _useState2[0],
        setPlan = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    async function loadPlans() {
      const res = await _services_api__WEBPACK_IMPORTED_MODULE_4__["default"].get('plans');
      const formattedData = res.data.map(plan => _objectSpread({}, plan, {
        formattedMonth: formatMonth(plan.duration),
        formattedPrice: formatPrice(plan.price)
      }));
      setPlan(formattedData);
    }

    ;
    loadPlans();
  }, []);

  function formatMonth(duration) {
    return "".concat(duration, " ").concat(duration === 1 ? 'mês' : 'meses');
  }

  function formatPrice(price) {
    return "R$ ".concat(price);
  }

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_InfoTable__WEBPACK_IMPORTED_MODULE_3__["default"], {
    maxSize: '900px',
    dataType: "planos",
    data: plans,
    dataInfo: ['id', 'title', 'formattedMonth', 'formattedPrice'],
    tableHeader: ['NOME', 'DURAÇÃO', 'VALOR p/MÊS'],
    registryButton: true,
    search: false,
    editButton: true,
    deleteButton: true,
    handleRegistry: () => {},
    handleSearch: () => {},
    handleEdit: () => {},
    handleDelete: () => {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  });
}
;
{
  /* <Container>
  <Subheader>
     <div>
         <h1>Gerenciando planos</h1>
     </div>
     <div>
         <button>
             <FaPlus color='#FFF' size={14} />
             CADASTRAR
         </button>
     </div>
  </Subheader>
  <PlanTable>
     <thead>
         <tr>
             <th>TÍTULO</th>
             <th>DURAÇÃO</th>
             <th>VALOR p/MÊS</th>
             <th></th>
         </tr>
     </thead>
     <tbody>
     {plans.map(plan => (
         <PlanData>
             <td>{plan.title}</td>
             <td>
             {plan.duration}
             {plan.duration === 1 ? ' mês' : ' meses'}
             </td>
             <td>R$ {plan.price}</td>
             <td>
                 <button>editar</button>
                 <button>apagar</button>
             </td>
             <hr />
         </PlanData>
     ))} 
     </tbody>              
  </PlanTable>
  </Container> */
}

/***/ }),

/***/ "./src/pages/Management/Registry/index.js":
/*!************************************************!*\
  !*** ./src/pages/Management/Registry/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RegistryManagement; });
/* harmony import */ var _home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns/locale/pt-BR */ "./node_modules/date-fns/esm/locale/pt-BR/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./src/pages/Management/Registry/styles.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/api */ "./src/services/api.js");


var _jsxFileName = "/home/wagnerwd40/Documents/Webdev/gostack/gympoint/gympoint-webapp/src/pages/Management/Registry/index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }







function RegistryManagement() {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
        _useState2 = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
        registries = _useState2[0],
        setRegistry = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    async function loadRegistries() {
      const res = await _services_api__WEBPACK_IMPORTED_MODULE_7__["default"].get('registries');
      const formattedData = res.data.map(registry => _objectSpread({}, registry, {
        formattedStartDate: formatDate(registry.start_date),
        formattedEndDate: formatDate(registry.end_date)
      }));
      setRegistry(formattedData);
    }

    ;
    loadRegistries();
  }, []);

  function formatDate(date) {
    return Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["parseISO"])(date), "d 'de' MMMM 'de' yyyy", {
      locale: date_fns_locale_pt_BR__WEBPACK_IMPORTED_MODULE_4__["default"]
    });
  }

  ;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["Subheader"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Gerenciando matr\xEDculas")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaPlus"], {
    color: "#FFF",
    size: 14,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), "CADASTRAR"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["RegistryTable"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "ALUNO"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "PLANO"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "IN\xCDCIO"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "T\xC9RMINO"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "ATIVA"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, registries.map(registry => react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_5__["RegistryData"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, registry.student.name), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, registry.plan.title), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, registry.formattedStartDate), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, registry.formattedEndDate), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, registry.active ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaCheckCircle"], {
    color: "#61cc59",
    size: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__["FaCheckCircle"], {
    color: "#ddd",
    size: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "editar"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "apagar")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }))))));
}
;

/***/ }),

/***/ "./src/pages/Management/Registry/styles.js":
/*!*************************************************!*\
  !*** ./src/pages/Management/Registry/styles.js ***!
  \*************************************************/
/*! exports provided: Container, Subheader, RegistryTable, RegistryData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subheader", function() { return Subheader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistryTable", function() { return RegistryTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistryData", function() { return RegistryData; });
/* harmony import */ var _home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject4() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n    td {\n        height: 50px;\n\n        & + td {\n            text-align: center;\n        }\n    }\n\n    td:nth-of-type(1) {\n        padding-right: 100px;\n    }\n\n    button {\n        border: none;\n        background: none;\n        padding-left: 20px;\n        color: #ee4d64;\n    }\n\n    button:nth-of-type(1) {\n        color: #6f99f0;\n    }\n"]);

  _templateObject4 = function () {
    return data;
  };

  return data;
}

function _templateObject3() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: #FFF;\n    padding: 30px;\n    border-radius: 4px;\n    color: #333;\n    \n    thead {\n        padding-bottom: 20px;\n\n        tr {\n            box-shadow: none;\n        }\n    }\n\n    tr {\n        box-shadow: 0px 1px 0px 0px rgba(0,0,0,0.09);\n    }\n\n    tr:nth-last-of-type(1) {\n        box-shadow: none;\n    }\n\n    th {\n        text-align: left;\n        height: 40px;\n    }\n\n    th:nth-of-type(2) {\n        text-align: center;\n    }\n    \n    th:nth-of-type(3) {\n        text-align: center;\n    }\n\n    th:nth-of-type(4) {\n        text-align: center;\n    }\n    \n    th:nth-of-type(5) {\n        text-align: center;\n    }\n"]);

  _templateObject3 = function () {
    return data;
  };

  return data;
}

function _templateObject2() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-bottom: 30px;\n\n    h1 {\n        font-size: 20px;\n        color: #333;\n    }\n\n    div {\n        position: relative;\n        display: flex;\n        flex-direction: row;\n    }\n\n    button {\n        display: flex;\n        padding: 10px 10px;\n        background: #ee4d64;\n        border: none;\n        border-radius: 4px;\n        color: #FFF;\n        font-weight: bold;\n        font-size: 14px;\n        width: 140px;\n        justify-content: space-evenly;\n        align-items: center;\n    }\n\n    span {\n        position: absolute;\n        right: 190px;\n        top: 9px;\n    }\n\n    input {\n        padding: 6px;\n        padding-left: 25px;\n        border-radius: 4px;\n        border: 1px solid #ccc;\n        color: #333;\n    }\n"]);

  _templateObject2 = function () {
    return data;
  };

  return data;
}

function _templateObject() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    margin: 0 30px;\n    max-width: 1200px;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());
const Subheader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].header(_templateObject2());
const RegistryTable = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].table(_templateObject3());
const RegistryData = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].tr(_templateObject4());

/***/ }),

/***/ "./src/pages/Management/Student/index.js":
/*!***********************************************!*\
  !*** ./src/pages/Management/Student/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StudentManagement; });
/* harmony import */ var _home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_InfoTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/InfoTable */ "./src/components/InfoTable/index.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/api */ "./src/services/api.js");

var _jsxFileName = "/home/wagnerwd40/Documents/Webdev/gostack/gympoint/gympoint-webapp/src/pages/Management/Student/index.js";



function StudentManagement() {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
        _useState2 = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
        students = _useState2[0],
        setStudent = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    async function loadStudents() {
      const res = await _services_api__WEBPACK_IMPORTED_MODULE_3__["default"].get('students');
      setStudent(res.data);
    }

    ;
    loadStudents();
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_InfoTable__WEBPACK_IMPORTED_MODULE_2__["default"], {
    dataType: "alunos",
    data: students,
    dataInfo: ['id', 'name', 'email', 'age'],
    tableHeader: ['NOME', 'E_MAIL', 'IDADE'],
    registryButton: true,
    search: true,
    editButton: true,
    deleteButton: true,
    handleRegistry: () => {},
    handleSearch: () => {},
    handleEdit: () => {},
    handleDelete: () => {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  });
}
;
{
  /* <Container>
     <Subheader>
         <div>
             <h1>Gerenciando alunos</h1>
         </div>
         <div>
             <button>
                 <FaPlus color='#FFF' size={14} />
                 {' CADASTRAR'}
             </button>
             <div>
                 <input type='text' placeholder='Buscar aluno'></input>
                 <span><FaSearch color='#aaa' size={12} /></span>
             </div>
         </div>
     </Subheader>
     <StudentTable>
         <thead>
             <th>NOME</th>
             <th>E-MAIL</th>
             <th>IDADE</th>
             <th></th>
         </thead>
         <tbody>
         {students.map(student => (
             <StudentData>
                 <td>{student.name}</td>
                 <td>{student.email}</td>
                 <td>{student.age}</td>
                 <td>
                     <button>editar</button>
                     <button>apagar</button>
                 </td>
                 <hr />
             </StudentData>
         ))} 
         </tbody>              
     </StudentTable>
  </Container> */
}

/***/ }),

/***/ "./src/pages/Register/Students/index.js":
/*!**********************************************!*\
  !*** ./src/pages/Register/Students/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StudentRegister; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_EditForms_Student___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/EditForms/Student/ */ "./src/components/EditForms/Student/index.js");
var _jsxFileName = "/home/wagnerwd40/Documents/Webdev/gostack/gympoint/gympoint-webapp/src/pages/Register/Students/index.js";


function StudentRegister() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_EditForms_Student___WEBPACK_IMPORTED_MODULE_1__["default"], {
    actionType: 'Cadastro',
    handleRegistry: () => {},
    handleBack: () => {},
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  });
}
;

/***/ }),

/***/ "./src/pages/SignIn/index.js":
/*!***********************************!*\
  !*** ./src/pages/SignIn/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingIn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _rocketseat_unform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @rocketseat/unform */ "./node_modules/@rocketseat/unform/dist/index.es.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! yup */ "./node_modules/yup/lib/index.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./src/pages/SignIn/styles.js");
/* harmony import */ var _store_modules_auth_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/modules/auth/actions */ "./src/store/modules/auth/actions.js");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/wagnerwd40/Documents/Webdev/gostack/gympoint/gympoint-webapp/src/pages/SignIn/index.js";







const schema = yup__WEBPACK_IMPORTED_MODULE_3__["object"]().shape({
  email: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().email('Insira um e-mail válido.').required('O e-mail é obrigatório.'),
  password: yup__WEBPACK_IMPORTED_MODULE_3__["string"]().required('A senha é obrigatória')
});
function SingIn() {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useDispatch"])();
  const loading = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["useSelector"])(state => state.auth.loading);

  function handleSubmit({
    email,
    password
  }) {
    dispatch(Object(_store_modules_auth_actions__WEBPACK_IMPORTED_MODULE_5__["signInRequest"])(email, password));
  }

  ;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_4__["Container"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    alt: "Gympoint",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    schema: schema,
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "SEU E-MAIL"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "email",
    type: "email",
    placeholder: "exemplo@email.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "SUA SENHA"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_rocketseat_unform__WEBPACK_IMPORTED_MODULE_2__["Input"], {
    name: "password",
    type: "password",
    placeholder: "*************",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, loading ? 'Carregando...' : 'Entrar no Sistema')));
}
;

/***/ }),

/***/ "./src/pages/SignIn/styles.js":
/*!************************************!*\
  !*** ./src/pages/SignIn/styles.js ***!
  \************************************/
/*! exports provided: Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var _home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    flex-direction: column;\n    background: #FFF;\n    width: 350px;\n    border-radius: 4px;\n    justify-content: center;\n    padding: 30px;\n\n    img {\n        margin: 10px auto;\n        width: calc(198px * 0.8);\n        height: calc(122px * 0.8);\n    }\n\n    form {\n        display: flex;\n        flex-direction: column;\n        margin-top: 30px;\n\n        label {\n            color: #333;\n            font-weight: bold;\n            font-size: 12px;\n            padding: 5px 0;\n        }\n\n        input {\n            border: 1px solid #ccc;\n            border-radius: 4px;\n            height: 40px;\n            padding: 10px;\n            margin-bottom: 10px;\n            color: #333;\n\n            &::placeholder {\n                color: #ccc;\n            }\n        }\n\n        span {\n            color: #ee4d64;\n            align-self: center;\n        }\n\n        button {\n            background: #ee4d64;\n            border: none;\n            height: 40px;\n            border-radius: 4px;\n            color: #FFF;\n            font-weight: bold;\n            margin-top: 10px;\n            margin-bottom: 20px;\n        }\n    }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


const Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());

/***/ }),

/***/ "./src/pages/_layouts/auth/index.js":
/*!******************************************!*\
  !*** ./src/pages/_layouts/auth/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AuthLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/pages/_layouts/auth/styles.js");
var _jsxFileName = "/home/wagnerwd40/Documents/Webdev/gostack/gympoint/gympoint-webapp/src/pages/_layouts/auth/index.js";



function AuthLayout({
  children
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, children);
}
;
AuthLayout.propTypes = {
  chidren: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired
};

/***/ }),

/***/ "./src/pages/_layouts/auth/styles.js":
/*!*******************************************!*\
  !*** ./src/pages/_layouts/auth/styles.js ***!
  \*******************************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var _home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: #ee4d64;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());

/***/ }),

/***/ "./src/pages/_layouts/default/index.js":
/*!*********************************************!*\
  !*** ./src/pages/_layouts/default/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DefaultLayout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ "./src/pages/_layouts/default/styles.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/Header */ "./src/components/Header/index.js");
var _jsxFileName = "/home/wagnerwd40/Documents/Webdev/gostack/gympoint/gympoint-webapp/src/pages/_layouts/default/index.js";




function DefaultLayout({
  children
}) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), children);
}
;
DefaultLayout.propTypes = {
  chidren: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element.isRequired
};

/***/ }),

/***/ "./src/pages/_layouts/default/styles.js":
/*!**********************************************!*\
  !*** ./src/pages/_layouts/default/styles.js ***!
  \**********************************************/
/*! exports provided: Wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony import */ var _home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    background: #f5f5f5;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    padding-top: 94px;\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}


const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject());

/***/ }),

/***/ "./src/routes/Route.js":
/*!*****************************!*\
  !*** ./src/routes/Route.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RouteWrapper; });
/* harmony import */ var _home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages_layouts_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/_layouts/auth */ "./src/pages/_layouts/auth/index.js");
/* harmony import */ var _pages_layouts_default__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/_layouts/default */ "./src/pages/_layouts/default/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store */ "./src/store/index.js");

var _jsxFileName = "/home/wagnerwd40/Documents/Webdev/gostack/gympoint/gympoint-webapp/src/routes/Route.js";






function RouteWrapper(_ref) {
  let Component = _ref.component,
      isPrivate = _ref.isPrivate,
      rest = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["component", "isPrivate"]);

  const signed = _store__WEBPACK_IMPORTED_MODULE_6__["store"].getState().auth.signed;

  if (!signed && isPrivate) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
      to: "/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    });
  }

  ;

  if (signed && !isPrivate) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], {
      to: "/management/students",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    });
  }

  ;
  const Layout = signed ? _pages_layouts_default__WEBPACK_IMPORTED_MODULE_5__["default"] : _pages_layouts_auth__WEBPACK_IMPORTED_MODULE_4__["default"];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], Object.assign({}, rest, {
    render: props => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Layout, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object.assign({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }))),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }));
}
;
RouteWrapper.propTypes = {
  isPrivate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  component: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func]).isRequired
};
RouteWrapper.defaultProps = {
  isPrivate: false
};

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Routes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Route__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Route */ "./src/routes/Route.js");
/* harmony import */ var _pages_SignIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/SignIn */ "./src/pages/SignIn/index.js");
/* harmony import */ var _pages_Management_Plan__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Management/Plan */ "./src/pages/Management/Plan/index.js");
/* harmony import */ var _pages_Management_Student__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Management/Student */ "./src/pages/Management/Student/index.js");
/* harmony import */ var _pages_Management_Registry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/Management/Registry */ "./src/pages/Management/Registry/index.js");
/* harmony import */ var _pages_Management_Help__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/Management/Help */ "./src/pages/Management/Help/index.js");
/* harmony import */ var _pages_Register_Students__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/Register/Students */ "./src/pages/Register/Students/index.js");
/* harmony import */ var _pages_Edit_Students__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/Edit/Students */ "./src/pages/Edit/Students/index.js");
var _jsxFileName = "/home/wagnerwd40/Documents/Webdev/gostack/gympoint/gympoint-webapp/src/routes/index.js";










function Routes() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Route__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: "/",
    exact: true,
    component: _pages_SignIn__WEBPACK_IMPORTED_MODULE_3__["default"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Route__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: "/management/students",
    component: _pages_Management_Student__WEBPACK_IMPORTED_MODULE_5__["default"],
    isPrivate: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Route__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: "/management/plans",
    component: _pages_Management_Plan__WEBPACK_IMPORTED_MODULE_4__["default"],
    isPrivate: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Route__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: "/management/registries",
    component: _pages_Management_Registry__WEBPACK_IMPORTED_MODULE_6__["default"],
    isPrivate: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Route__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: "/management/help",
    component: _pages_Management_Help__WEBPACK_IMPORTED_MODULE_7__["default"],
    isPrivate: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Route__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: "/register/students",
    component: _pages_Register_Students__WEBPACK_IMPORTED_MODULE_8__["default"],
    isPrivate: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Route__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: "/edit/students",
    component: _pages_Edit_Students__WEBPACK_IMPORTED_MODULE_9__["default"],
    isPrivate: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Route__WEBPACK_IMPORTED_MODULE_2__["default"], {
    path: "/",
    component: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, "404"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }));
}
;

/***/ }),

/***/ "./src/services/api.js":
/*!*****************************!*\
  !*** ./src/services/api.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'http://localhost:3333'
});
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./src/services/history.js":
/*!*********************************!*\
  !*** ./src/services/history.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! history */ "./node_modules/history/esm/history.js");

const history = Object(history__WEBPACK_IMPORTED_MODULE_0__["createBrowserHistory"])();
/* harmony default export */ __webpack_exports__["default"] = (history);

/***/ }),

/***/ "./src/store/createStore.js":
/*!**********************************!*\
  !*** ./src/store/createStore.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

/* harmony default export */ __webpack_exports__["default"] = ((reducers, middlewares) => {
  const enhancer =  true ? Object(redux__WEBPACK_IMPORTED_MODULE_0__["compose"])(console.tron.createEnhancer(), Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(...middlewares)) : undefined;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducers, enhancer);
});

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: store, persistor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "persistor", function() { return persistor; });
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "./node_modules/redux-saga/dist/redux-saga-core-npm-proxy.esm.js");
/* harmony import */ var _createStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createStore */ "./src/store/createStore.js");
/* harmony import */ var _persistReducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./persistReducers */ "./src/store/persistReducers.js");
/* harmony import */ var _modules_rootReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/rootReducer */ "./src/store/modules/rootReducer.js");
/* harmony import */ var _modules_rootSaga__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/rootSaga */ "./src/store/modules/rootSaga.js");





 // const sagaMonitor = 
//     process.env.NODE_ENV === 'development'
//         ? console.tron.createSagaMonitor()
//         : null;

const sagaMonitor = console.tron.createSagaMonitor();
const sagaMiddleware = Object(redux_saga__WEBPACK_IMPORTED_MODULE_1__["default"])({
  sagaMonitor
});
const middlewares = [sagaMiddleware];
const store = Object(_createStore__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_persistReducers__WEBPACK_IMPORTED_MODULE_3__["default"])(_modules_rootReducer__WEBPACK_IMPORTED_MODULE_4__["default"]), middlewares);
const persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_6__["persistStore"])(store);
sagaMiddleware.run(_modules_rootSaga__WEBPACK_IMPORTED_MODULE_5__["default"]);


/***/ }),

/***/ "./src/store/modules/auth/actions.js":
/*!*******************************************!*\
  !*** ./src/store/modules/auth/actions.js ***!
  \*******************************************/
/*! exports provided: signInRequest, signInSuccess, signFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInRequest", function() { return signInRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signInSuccess", function() { return signInSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signFailure", function() { return signFailure; });
function signInRequest(email, password) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: {
      email,
      password
    }
  };
}
;
function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: {
      token,
      user
    }
  };
}
;
function signFailure() {
  return {
    type: '@auth/SIGN_FAILURE'
  };
}
;

/***/ }),

/***/ "./src/store/modules/auth/reducer.js":
/*!*******************************************!*\
  !*** ./src/store/modules/auth/reducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return auth; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");

const INITIAL_STATE = {
  token: null,
  signed: false,
  loading: false
};
function auth(state = INITIAL_STATE, action) {
  return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST':
        {
          draft.loading = true;
          break;
        }

      case '@auth/SIGN_IN_SUCCESS':
        {
          draft.token = action.payload.token;
          draft.signed = true;
          draft.loading = false;
          break;
        }

      case '@auth/SIGN_FAILURE':
        {
          draft.loading = false;
          break;
        }

      default:
    }
  });
}
;

/***/ }),

/***/ "./src/store/modules/auth/sagas.js":
/*!*****************************************!*\
  !*** ./src/store/modules/auth/sagas.js ***!
  \*****************************************/
/*! exports provided: signIn, setToken, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signIn", function() { return signIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setToken", function() { return setToken; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/esm/react-toastify.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api */ "./src/services/api.js");
/* harmony import */ var _services_history__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/history */ "./src/services/history.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actions */ "./src/store/modules/auth/actions.js");





function* signIn({
  payload
}) {
  try {
    const email = payload.email,
          password = payload.password;
    const res = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["call"])(_services_api__WEBPACK_IMPORTED_MODULE_2__["default"].post, '/sessions', {
      email,
      password
    });
    const _res$data = res.data,
          token = _res$data.token,
          user = _res$data.user;
    _services_api__WEBPACK_IMPORTED_MODULE_2__["default"].defaults.headers.Authorization = "Bearer ".concat(token);
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["signInSuccess"])(token, user));
    _services_history__WEBPACK_IMPORTED_MODULE_3__["default"].push('/management/students');
  } catch (err) {
    react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error('Falha na autenticação, verifique seus dados.');
    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["put"])(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["signFailure"])());
  }

  ;
}
;
function setToken({
  payload
}) {
  if (!payload) return;
  const token = payload.auth.token;

  if (token) {
    _services_api__WEBPACK_IMPORTED_MODULE_2__["default"].defaults.headers.Authorization = "Bearer ".concat(token);
  }

  ;
}
;
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('persist/REHYDRATE', setToken), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeLatest"])('@auth/SIGN_IN_REQUEST', signIn)]));

/***/ }),

/***/ "./src/store/modules/rootReducer.js":
/*!******************************************!*\
  !*** ./src/store/modules/rootReducer.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/reducer */ "./src/store/modules/auth/reducer.js");
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/reducer */ "./src/store/modules/user/reducer.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  auth: _auth_reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  user: _user_reducer__WEBPACK_IMPORTED_MODULE_2__["default"]
}));

/***/ }),

/***/ "./src/store/modules/rootSaga.js":
/*!***************************************!*\
  !*** ./src/store/modules/rootSaga.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");
/* harmony import */ var _auth_sagas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/sagas */ "./src/store/modules/auth/sagas.js");
/* harmony import */ var _user_sagas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user/sagas */ "./src/store/modules/user/sagas.js");



function* rootSaga() {
  return yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([_auth_sagas__WEBPACK_IMPORTED_MODULE_1__["default"], _user_sagas__WEBPACK_IMPORTED_MODULE_2__["default"]]);
}
;

/***/ }),

/***/ "./src/store/modules/user/reducer.js":
/*!*******************************************!*\
  !*** ./src/store/modules/user/reducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return auth; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.module.js");

const INITIAL_STATE = {
  profile: null
};
function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return Object(immer__WEBPACK_IMPORTED_MODULE_0__["default"])(state, draft => {
        draft.profile = action.payload.user;
      });

    default:
      return state;
  }

  ;
}
;

/***/ }),

/***/ "./src/store/modules/user/sagas.js":
/*!*****************************************!*\
  !*** ./src/store/modules/user/sagas.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "./node_modules/redux-saga/dist/redux-saga-effects-npm-proxy.esm.js");

/* harmony default export */ __webpack_exports__["default"] = (Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])([]));

/***/ }),

/***/ "./src/store/persistReducers.js":
/*!**************************************!*\
  !*** ./src/store/persistReducers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");


/* harmony default export */ __webpack_exports__["default"] = (reducers => {
  const persistedReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_2__["persistReducer"])({
    key: 'gympoint',
    storage: (redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_1___default()),
    whitelist: ['auth', 'user']
  }, reducers);
  return persistedReducer;
});

/***/ }),

/***/ "./src/styles/global.js":
/*!******************************!*\
  !*** ./src/styles/global.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  const data = Object(_home_wagnerwd40_Documents_Webdev_gostack_gympoint_gympoint_webapp_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');\n    \n    * {\n        margin: 0;\n        padding: 0;\n        outline: 0;\n        box-sizing: border-box;\n    }\n\n    *:focus {\n        outline: 0;\n    }\n\n    html, body, #root {\n        height: 100%;\n    }\n\n    body {\n        -webkit-font-smoothing: antialiased !important;\n    }\n\n    body, input, button {\n        font: 14px 'Roboto', sans-serif;\n    }\n\n    a {\n        text-decoration: none;\n    }\n\n    ul {\n        list-style: none;\n    }\n\n    button {\n        cursor: pointer;\n    }\n"]);

  _templateObject = function () {
    return data;
  };

  return data;
}



/* harmony default export */ __webpack_exports__["default"] = (Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject()));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/wagnerwd40/Documents/Webdev/gostack/gympoint/gympoint-webapp/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/wagnerwd40/Documents/Webdev/gostack/gympoint/gympoint-webapp/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map