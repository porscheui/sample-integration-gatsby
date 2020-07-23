exports.ids = [17];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-359f03c5.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-359f03c5.js ***!
  \******************************************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return classnames; });
/* harmony import */ var _breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-f03211e4.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-f03211e4.js");

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

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-fieldset-wrapper.entry.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-fieldset-wrapper.entry.js ***!
  \****************************************************************************************************/
/*! exports provided: p_fieldset_wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_fieldset_wrapper", function() { return FieldsetWrapper; });
/* harmony import */ var _breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-f03211e4.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-f03211e4.js");
/* harmony import */ var _index_359f03c5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-359f03c5.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-359f03c5.js");


var fieldsetWrapperCss = ":host{display:block}.p-fieldset-wrapper{margin:0;padding:0;border:none}.p-fieldset-wrapper__label{font-size:1rem;line-height:1.5;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:600;padding:0;margin:0 0 1rem 0;color:#000}@media (min-width: 760px) and (max-width: 999px){.p-fieldset-wrapper__label{font-size:1.125rem;line-height:1.5555555556}}@media (min-width: 1000px) and (max-width: 1299px){.p-fieldset-wrapper__label{font-size:1.25rem;line-height:1.4}}@media (min-width: 1300px) and (max-width: 1759px){.p-fieldset-wrapper__label{font-size:1.375rem;line-height:1.4545454545}}@media (min-width: 1760px){.p-fieldset-wrapper__label{font-size:1.5rem;line-height:1.5}}";
var FieldsetWrapper = /** @class */ (function () {
    function FieldsetWrapper(hostRef) {
        Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The label text. */
        this.label = '';
    }
    FieldsetWrapper.prototype.render = function () {
        var fieldsetClasses = Object(_index_359f03c5_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["c"])('fieldset-wrapper'));
        var labelClasses = Object(_index_359f03c5_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["c"])('fieldset-wrapper__label'));
        return (Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("fieldset", { class: fieldsetClasses }, this.label && Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("legend", { class: labelClasses }, this.label), Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    return FieldsetWrapper;
}());
FieldsetWrapper.style = fieldsetWrapperCss;



/***/ })

};;
//# sourceMappingURL=17.render-page.js.map