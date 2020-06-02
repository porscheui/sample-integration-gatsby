exports.ids = [9];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-divider.entry.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-divider.entry.js ***!
  \*******************************************************************************************/
/*! exports provided: p_divider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_divider", function() { return Divider; });
/* harmony import */ var _index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-381d535c.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-381d535c.js");
/* harmony import */ var _index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-0a27866a.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-0a27866a.js");


var dividerCss = ":host{display:block}.p-divider{margin:0;padding:0;border:none;text-align:left}.p-divider--color-neutral-contrast-high.p-divider--theme-light{background-color:#323639}.p-divider--color-neutral-contrast-high.p-divider--theme-dark{background-color:#e3e4e5}.p-divider--color-neutral-contrast-medium.p-divider--theme-light{background-color:#626669}.p-divider--color-neutral-contrast-medium.p-divider--theme-dark{background-color:#b0b1b2}.p-divider--color-neutral-contrast-low.p-divider--theme-light{background-color:#c9cacb}.p-divider--color-neutral-contrast-low.p-divider--theme-dark{background-color:#4a4e51}.p-divider--orientation-horizontal{height:1px;width:100%}.p-divider--orientation-vertical{height:100%;width:1px}@media (min-width: 480px){.p-divider--orientation-horizontal-xs{height:1px;width:100%}.p-divider--orientation-vertical-xs{height:100%;width:1px}}@media (min-width: 760px){.p-divider--orientation-horizontal-s{height:1px;width:100%}.p-divider--orientation-vertical-s{height:100%;width:1px}}@media (min-width: 1000px){.p-divider--orientation-horizontal-m{height:1px;width:100%}.p-divider--orientation-vertical-m{height:100%;width:1px}}@media (min-width: 1300px){.p-divider--orientation-horizontal-l{height:1px;width:100%}.p-divider--orientation-vertical-l{height:100%;width:1px}}@media (min-width: 1760px){.p-divider--orientation-horizontal-xl{height:1px;width:100%}.p-divider--orientation-vertical-xl{height:100%;width:1px}}";
var Divider = /** @class */ (function () {
    function Divider(hostRef) {
        Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Defines color depending on theme. */
        this.color = 'neutral-contrast-low';
        /** Defines orientation. */
        this.orientation = 'horizontal';
        /** Adapts color depending on theme. */
        this.theme = 'light';
    }
    Divider.prototype.render = function () {
        var dividerClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('divider'), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("divider--color-" + this.color), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("divider--theme-" + this.theme), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["m"])('divider--orientation', this.orientation));
        return (Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hr", { class: dividerClasses }));
    };
    return Divider;
}());
Divider.style = dividerCss;



/***/ })

};;
//# sourceMappingURL=9.render-page.js.map