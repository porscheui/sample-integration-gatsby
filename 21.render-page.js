exports.ids = [21];
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

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-grid.entry.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-grid.entry.js ***!
  \****************************************************************************************/
/*! exports provided: p_grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_grid", function() { return Grid; });
/* harmony import */ var _breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-f03211e4.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-f03211e4.js");
/* harmony import */ var _index_359f03c5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-359f03c5.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-359f03c5.js");


var gridCss = ".p-grid{display:-ms-flexbox !important;display:flex !important;-ms-flex-wrap:wrap !important;flex-wrap:wrap !important;-ms-flex:auto !important;flex:auto !important;width:auto !important;margin-left:-0.5rem !important;margin-right:-0.5rem !important}@media (min-width: 760px) and (max-width: 999px){.p-grid{margin-left:-0.75rem !important;margin-right:-0.75rem !important}}@media (min-width: 1000px){.p-grid{margin-left:-1.125rem !important;margin-right:-1.125rem !important}}.p-grid--direction-column{-ms-flex-direction:column !important;flex-direction:column !important}.p-grid--direction-column-reverse{-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.p-grid--direction-row{-ms-flex-direction:row !important;flex-direction:row !important}.p-grid--direction-row-reverse{-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}@media (min-width: 480px){.p-grid--direction-column-xs{-ms-flex-direction:column !important;flex-direction:column !important}.p-grid--direction-column-reverse-xs{-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.p-grid--direction-row-xs{-ms-flex-direction:row !important;flex-direction:row !important}.p-grid--direction-row-reverse-xs{-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}}@media (min-width: 760px){.p-grid--direction-column-s{-ms-flex-direction:column !important;flex-direction:column !important}.p-grid--direction-column-reverse-s{-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.p-grid--direction-row-s{-ms-flex-direction:row !important;flex-direction:row !important}.p-grid--direction-row-reverse-s{-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}}@media (min-width: 1000px){.p-grid--direction-column-m{-ms-flex-direction:column !important;flex-direction:column !important}.p-grid--direction-column-reverse-m{-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.p-grid--direction-row-m{-ms-flex-direction:row !important;flex-direction:row !important}.p-grid--direction-row-reverse-m{-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}}@media (min-width: 1300px){.p-grid--direction-column-l{-ms-flex-direction:column !important;flex-direction:column !important}.p-grid--direction-column-reverse-l{-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.p-grid--direction-row-l{-ms-flex-direction:row !important;flex-direction:row !important}.p-grid--direction-row-reverse-l{-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}}@media (min-width: 1760px){.p-grid--direction-column-xl{-ms-flex-direction:column !important;flex-direction:column !important}.p-grid--direction-column-reverse-xl{-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.p-grid--direction-row-xl{-ms-flex-direction:row !important;flex-direction:row !important}.p-grid--direction-row-reverse-xl{-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}}";
var Grid = /** @class */ (function () {
    function Grid(hostRef) {
        Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right. Also defines the direction for specific breakpoints, like {base: "column", l: "row"}. You always need to provide a base value when doing this. */
        this.direction = 'row';
    }
    Grid.prototype.render = function () {
        var gridClasses = Object(_index_359f03c5_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["c"])('grid'), this.direction !== 'row' && Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["m"])('grid--direction', this.direction));
        return Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: gridClasses });
    };
    return Grid;
}());
Grid.style = gridCss;



/***/ })

};;
//# sourceMappingURL=21.render-page.js.map