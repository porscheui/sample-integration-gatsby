exports.ids = [16];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/index-359f03c5.js":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/index-359f03c5.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return classnames; });
/* harmony import */ var _breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-f03211e4.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-f03211e4.js");

var classnames = Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["d"])(function (module) {
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

/***/ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/p-divider.entry.js":
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/p-divider.entry.js ***!
  \************************************************************************************************************************************************/
/*! exports provided: p_divider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_divider", function() { return Divider; });
/* harmony import */ var _breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-f03211e4.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-f03211e4.js");
/* harmony import */ var _index_359f03c5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-359f03c5.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/index-359f03c5.js");


var dividerCss = ":host{display:block}.p-divider{margin:0;padding:0;border:none;text-align:left}.p-divider--color-neutral-contrast-high.p-divider--theme-light{background-color:#323639}.p-divider--color-neutral-contrast-high.p-divider--theme-dark{background-color:#e3e4e5}.p-divider--color-neutral-contrast-medium.p-divider--theme-light{background-color:#626669}.p-divider--color-neutral-contrast-medium.p-divider--theme-dark{background-color:#b0b1b2}.p-divider--color-neutral-contrast-low.p-divider--theme-light{background-color:#c9cacb}.p-divider--color-neutral-contrast-low.p-divider--theme-dark{background-color:#4a4e51}.p-divider--orientation-horizontal{height:1px;width:100%}.p-divider--orientation-vertical{height:100%;width:1px}@media (min-width: 480px){.p-divider--orientation-horizontal-xs{height:1px;width:100%}.p-divider--orientation-vertical-xs{height:100%;width:1px}}@media (min-width: 760px){.p-divider--orientation-horizontal-s{height:1px;width:100%}.p-divider--orientation-vertical-s{height:100%;width:1px}}@media (min-width: 1000px){.p-divider--orientation-horizontal-m{height:1px;width:100%}.p-divider--orientation-vertical-m{height:100%;width:1px}}@media (min-width: 1300px){.p-divider--orientation-horizontal-l{height:1px;width:100%}.p-divider--orientation-vertical-l{height:100%;width:1px}}@media (min-width: 1760px){.p-divider--orientation-horizontal-xl{height:1px;width:100%}.p-divider--orientation-vertical-xl{height:100%;width:1px}}";
var Divider = /** @class */ (function () {
    function Divider(hostRef) {
        Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Defines color depending on theme. */
        this.color = 'neutral-contrast-low';
        /** Defines orientation. */
        this.orientation = 'horizontal';
        /** Adapts color depending on theme. */
        this.theme = 'light';
    }
    Divider.prototype.render = function () {
        var dividerClasses = Object(_index_359f03c5_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["c"])('divider'), Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["c"])("divider--color-" + this.color), Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["c"])("divider--theme-" + this.theme), Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["m"])('divider--orientation', this.orientation));
        return (Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hr", { class: dividerClasses }));
    };
    return Divider;
}());
Divider.style = dividerCss;



/***/ })

};;
//# sourceMappingURL=16.render-page.js.map