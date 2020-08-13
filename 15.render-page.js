exports.ids = [15];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/index-45be8764.js":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/index-45be8764.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return classnames; });
/* harmony import */ var _breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-063d6106.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-063d6106.js");

var classnames = Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["d"])(function (module) {
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    /* global define */
    (function () {
        var hasOwn = {}.hasOwnProperty;
        function classNames() {
            var classes = [];
            for (var i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if (!arg)
                    continue;
                var argType = typeof arg;
                if (argType === 'string' || argType === 'number') {
                    classes.push(arg);
                }
                else if (Array.isArray(arg) && arg.length) {
                    var inner = classNames.apply(null, arg);
                    if (inner) {
                        classes.push(inner);
                    }
                }
                else if (argType === 'object') {
                    for (var key in arg) {
                        if (hasOwn.call(arg, key) && arg[key]) {
                            classes.push(key);
                        }
                    }
                }
            }
            return classes.join(' ');
        }
        if (module.exports) {
            classNames.default = classNames;
            module.exports = classNames;
        }
        else {
            window.classNames = classNames;
        }
    }());
});



/***/ }),

/***/ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/p-content-wrapper.entry.js":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/p-content-wrapper.entry.js ***!
  \********************************************************************************************************************************************************/
/*! exports provided: p_content_wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_content_wrapper", function() { return ContentWrapper; });
/* harmony import */ var _breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-063d6106.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-063d6106.js");
/* harmony import */ var _index_45be8764_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-45be8764.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/index-45be8764.js");


var contentWrapperCss = ":host{display:block}.p-content-wrapper{margin:0 auto;padding:0;display:block}.p-content-wrapper--basic{max-width:96rem;padding-left:7vw;padding-right:7vw}@media (min-width: 1760px) and (max-width: 1919px){.p-content-wrapper--basic{padding-left:10vw;padding-right:10vw}}@media (min-width: 1920px){.p-content-wrapper--basic{padding-left:12rem;padding-right:12rem}}.p-content-wrapper--extended{max-width:120rem}";
var ContentWrapper = /** @class */ (function () {
    function ContentWrapper(hostRef) {
        Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Defines the outer spacings between the content area and the left and right screen sides, as well as centering its content and setting a max-width. */
        this.width = 'basic';
    }
    ContentWrapper.prototype.render = function () {
        var contentWrapperClasses = Object(_index_45be8764_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('content-wrapper'), Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])("content-wrapper--" + this.width));
        return (Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: contentWrapperClasses }, Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    return ContentWrapper;
}());
ContentWrapper.style = contentWrapperCss;



/***/ })

};;
//# sourceMappingURL=15.render-page.js.map