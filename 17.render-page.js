exports.ids = [17];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-fieldset-wrapper.entry.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-fieldset-wrapper.entry.js ***!
  \****************************************************************************************************/
/*! exports provided: p_fieldset_wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_fieldset_wrapper", function() { return FieldsetWrapper; });
/* harmony import */ var _breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-ff31979d.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-ff31979d.js");

var fieldsetWrapperCss = ":host{display:block}.p-fieldset-wrapper{margin:0;padding:0;border:none}.p-fieldset-wrapper__label{font-size:1rem;line-height:1.5;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:600;padding:0;margin:0 0 1rem 0;color:#000}@media (min-width: 760px) and (max-width: 999px){.p-fieldset-wrapper__label{font-size:1.125rem;line-height:1.5555555556}}@media (min-width: 1000px) and (max-width: 1299px){.p-fieldset-wrapper__label{font-size:1.25rem;line-height:1.4}}@media (min-width: 1300px) and (max-width: 1759px){.p-fieldset-wrapper__label{font-size:1.375rem;line-height:1.4545454545}}@media (min-width: 1760px){.p-fieldset-wrapper__label{font-size:1.5rem;line-height:1.5}}";
var FieldsetWrapper = /** @class */ (function () {
    function FieldsetWrapper(hostRef) {
        Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The label text. */
        this.label = '';
    }
    FieldsetWrapper.prototype.render = function () {
        var fieldsetClasses = Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('fieldset-wrapper');
        var labelClasses = Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('fieldset-wrapper__label');
        return (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("fieldset", { class: fieldsetClasses }, this.label && Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("legend", { class: labelClasses }, this.label), Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    return FieldsetWrapper;
}());
FieldsetWrapper.style = fieldsetWrapperCss;



/***/ })

};;
//# sourceMappingURL=17.render-page.js.map