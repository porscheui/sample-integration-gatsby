exports.ids = [15];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-content-wrapper.entry.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-content-wrapper.entry.js ***!
  \***************************************************************************************************/
/*! exports provided: p_content_wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_content_wrapper", function() { return ContentWrapper; });
/* harmony import */ var _breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-ff31979d.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-ff31979d.js");

var contentWrapperCss = ":host{display:block}.p-content-wrapper{margin:0 auto;padding:0;display:block}.p-content-wrapper--basic{max-width:96rem;padding-left:7vw;padding-right:7vw}@media (min-width: 1760px) and (max-width: 1919px){.p-content-wrapper--basic{padding-left:10vw;padding-right:10vw}}@media (min-width: 1920px){.p-content-wrapper--basic{padding-left:12rem;padding-right:12rem}}.p-content-wrapper--extended{max-width:120rem}";
var ContentWrapper = /** @class */ (function () {
    function ContentWrapper(hostRef) {
        Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Defines the outer spacings between the content area and the left and right screen sides, as well as centering its content and setting a max-width. */
        this.width = 'basic';
    }
    ContentWrapper.prototype.render = function () {
        var _a;
        var contentWrapperClasses = (_a = {},
            _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('content-wrapper')] = true,
            _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])("content-wrapper--" + this.width)] = true,
            _a);
        return (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: contentWrapperClasses }, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    return ContentWrapper;
}());
ContentWrapper.style = contentWrapperCss;



/***/ })

};;
//# sourceMappingURL=15.render-page.js.map