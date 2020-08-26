exports.ids = [21];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/p-grid.entry.js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/p-grid.entry.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: p_grid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_grid", function() { return Grid; });
/* harmony import */ var _breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-633ca215.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-633ca215.js");

var gridCss = ".p-grid{display:-ms-flexbox !important;display:flex !important;-ms-flex-wrap:wrap !important;flex-wrap:wrap !important;-ms-flex:auto !important;flex:auto !important;width:auto !important;margin-left:-0.5rem !important;margin-right:-0.5rem !important}@media (min-width: 760px) and (max-width: 999px){.p-grid{margin-left:-0.75rem !important;margin-right:-0.75rem !important}}@media (min-width: 1000px){.p-grid{margin-left:-1.125rem !important;margin-right:-1.125rem !important}}.p-grid--direction-column{-ms-flex-direction:column !important;flex-direction:column !important}.p-grid--direction-column-reverse{-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.p-grid--direction-row{-ms-flex-direction:row !important;flex-direction:row !important}.p-grid--direction-row-reverse{-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}@media (min-width: 480px){.p-grid--direction-column-xs{-ms-flex-direction:column !important;flex-direction:column !important}.p-grid--direction-column-reverse-xs{-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.p-grid--direction-row-xs{-ms-flex-direction:row !important;flex-direction:row !important}.p-grid--direction-row-reverse-xs{-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}}@media (min-width: 760px){.p-grid--direction-column-s{-ms-flex-direction:column !important;flex-direction:column !important}.p-grid--direction-column-reverse-s{-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.p-grid--direction-row-s{-ms-flex-direction:row !important;flex-direction:row !important}.p-grid--direction-row-reverse-s{-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}}@media (min-width: 1000px){.p-grid--direction-column-m{-ms-flex-direction:column !important;flex-direction:column !important}.p-grid--direction-column-reverse-m{-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.p-grid--direction-row-m{-ms-flex-direction:row !important;flex-direction:row !important}.p-grid--direction-row-reverse-m{-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}}@media (min-width: 1300px){.p-grid--direction-column-l{-ms-flex-direction:column !important;flex-direction:column !important}.p-grid--direction-column-reverse-l{-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.p-grid--direction-row-l{-ms-flex-direction:row !important;flex-direction:row !important}.p-grid--direction-row-reverse-l{-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}}@media (min-width: 1760px){.p-grid--direction-column-xl{-ms-flex-direction:column !important;flex-direction:column !important}.p-grid--direction-column-reverse-xl{-ms-flex-direction:column-reverse !important;flex-direction:column-reverse !important}.p-grid--direction-row-xl{-ms-flex-direction:row !important;flex-direction:row !important}.p-grid--direction-row-reverse-xl{-ms-flex-direction:row-reverse !important;flex-direction:row-reverse !important}}";
var Grid = /** @class */ (function () {
    function Grid(hostRef) {
        Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right. Also defines the direction for specific breakpoints, like {base: "column", l: "row"}. You always need to provide a base value when doing this. */
        this.direction = 'row';
    }
    Grid.prototype.render = function () {
        var _a;
        var gridClasses = Object.assign((_a = {}, _a[Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["c"])('grid')] = true, _a), (this.direction !== 'row' && Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["m"])('grid--direction', this.direction)));
        return Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: gridClasses });
    };
    return Grid;
}());
Grid.style = gridCss;



/***/ })

};;
//# sourceMappingURL=21.render-page.js.map