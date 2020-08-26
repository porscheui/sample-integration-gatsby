exports.ids = [22];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/p-marque.entry.js":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/p-marque.entry.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: p_marque */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_marque", function() { return Marque; });
/* harmony import */ var _breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-633ca215.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-633ca215.js");
/* harmony import */ var _index_02c10760_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-02c10760.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/index-02c10760.js");


var marqueCss = ":host{display:-ms-inline-flexbox;display:inline-flex;vertical-align:top}.p-marque{display:block;width:100px;height:60px}@media (min-width: 1300px){.p-marque{width:120px;height:72px}}.p-marque>img{display:block;width:100%;height:auto}";
var Marque = /** @class */ (function () {
    function Marque(hostRef) {
        Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Show/hide trademark sign.
         */
        this.trademark = true;
    }
    Marque.prototype.render = function () {
        var cdnBaseUrl = _index_02c10760_js__WEBPACK_IMPORTED_MODULE_1__["C"];
        var manifestPath = _index_02c10760_js__WEBPACK_IMPORTED_MODULE_1__["M"]["porscheMarque" + (this.trademark ? 'Trademark' : '')];
        var buildSrcSet = function (size) { return Object.entries(manifestPath[size])
            .map(function (_a) {
            var resolution = _a[0], fileName = _a[1];
            return cdnBaseUrl + "/" + fileName + " " + resolution;
        })
            .join(','); };
        var marqueClasses = Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["c"])('marque');
        return (Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["h"])("picture", { class: marqueClasses }, Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["h"])("source", { srcSet: buildSrcSet('medium'), media: "(min-width: 1300px)" }), Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["h"])("source", { srcSet: buildSrcSet('small') }), Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: cdnBaseUrl + "/" + manifestPath.medium['2x'], alt: "Porsche" })));
    };
    return Marque;
}());
Marque.style = marqueCss;



/***/ })

};;
//# sourceMappingURL=22.render-page.js.map