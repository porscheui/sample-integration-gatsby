exports.ids = [19];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-spinner.entry.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-spinner.entry.js ***!
  \*******************************************************************************************/
/*! exports provided: p_spinner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_spinner", function() { return Spinner; });
/* harmony import */ var _index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-381d535c.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-381d535c.js");
/* harmony import */ var _index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-0a27866a.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-0a27866a.js");


var spinnerCss = ":host{display:-ms-inline-flexbox;display:inline-flex;vertical-align:top}.p-spinner{margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;stroke-width:1px;-webkit-animation:rotate 1s linear infinite;animation:rotate 1s linear infinite;-webkit-animation-duration:var(--p-animation-duration__spinner);animation-duration:var(--p-animation-duration__spinner)}.p-spinner--theme-light .p-spinner__fg,.p-spinner--theme-light .p-spinner__bg{stroke:#323639}.p-spinner--theme-dark .p-spinner__fg,.p-spinner--theme-dark .p-spinner__bg{stroke:#fff}.p-spinner--size-small{width:3rem;height:3rem}.p-spinner--size-medium{width:4.5rem;height:4.5rem}.p-spinner--size-large{width:6.5rem;height:6.5rem}.p-spinner--size-inherit{width:inherit;height:inherit}@media (min-width: 480px){.p-spinner--size-small-xs{width:3rem;height:3rem}.p-spinner--size-medium-xs{width:4.5rem;height:4.5rem}.p-spinner--size-large-xs{width:6.5rem;height:6.5rem}.p-spinner--size-inherit-xs{width:inherit;height:inherit}}@media (min-width: 760px){.p-spinner--size-small-s{width:3rem;height:3rem}.p-spinner--size-medium-s{width:4.5rem;height:4.5rem}.p-spinner--size-large-s{width:6.5rem;height:6.5rem}.p-spinner--size-inherit-s{width:inherit;height:inherit}}@media (min-width: 1000px){.p-spinner--size-small-m{width:3rem;height:3rem}.p-spinner--size-medium-m{width:4.5rem;height:4.5rem}.p-spinner--size-large-m{width:6.5rem;height:6.5rem}.p-spinner--size-inherit-m{width:inherit;height:inherit}}@media (min-width: 1300px){.p-spinner--size-small-l{width:3rem;height:3rem}.p-spinner--size-medium-l{width:4.5rem;height:4.5rem}.p-spinner--size-large-l{width:6.5rem;height:6.5rem}.p-spinner--size-inherit-l{width:inherit;height:inherit}}@media (min-width: 1760px){.p-spinner--size-small-xl{width:3rem;height:3rem}.p-spinner--size-medium-xl{width:4.5rem;height:4.5rem}.p-spinner--size-large-xl{width:6.5rem;height:6.5rem}.p-spinner--size-inherit-xl{width:inherit;height:inherit}}.p-spinner__image{display:block;position:relative;fill:none;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}.p-spinner__bg{opacity:0.4}.p-spinner__fg{-webkit-transform-origin:center center;transform-origin:center center;-webkit-animation:rotate var(--p-animation-duration__spinner) linear infinite, dash var(--p-animation-duration__spinner) ease-in-out infinite;animation:rotate var(--p-animation-duration__spinner) linear infinite, dash var(--p-animation-duration__spinner) ease-in-out infinite;stroke-dasharray:40, 200;stroke-dashoffset:0;stroke-linecap:round}@-webkit-keyframes rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes dash{0%{stroke-dasharray:3, 1000}50%{stroke-dasharray:42, 1000}100%{stroke-dasharray:30, 1000;stroke-dashoffset:-52}}@keyframes dash{0%{stroke-dasharray:3, 1000}50%{stroke-dasharray:42, 1000}100%{stroke-dasharray:30, 1000;stroke-dashoffset:-52}}";
var Spinner = /** @class */ (function () {
    function Spinner(hostRef) {
        Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Size of the spinner. */
        this.size = 'small';
        /** Adapts the spinner color depending on the theme. */
        this.theme = 'light';
    }
    Spinner.prototype.render = function () {
        var spinnerClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('spinner'), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["m"])('spinner--size', this.size), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("spinner--theme-" + this.theme));
        var imageClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('spinner__image');
        var bgClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('spinner__bg');
        var fgClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('spinner__fg');
        return (Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: spinnerClasses, "aria-busy": 'true', "aria-live": 'polite' }, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("svg", { class: imageClasses, viewBox: '0 0 32 32', width: '100%', height: '100%', role: 'img', focusable: 'false' }, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("circle", { class: bgClasses, cx: '50%', cy: '50%', r: '9' }), Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("circle", { class: fgClasses, cx: '50%', cy: '50%', r: '9' }))));
    };
    return Spinner;
}());
Spinner.style = spinnerCss;



/***/ })

};;
//# sourceMappingURL=19.render-page.js.map