exports.ids = [16];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-marque.entry.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-marque.entry.js ***!
  \******************************************************************************************/
/*! exports provided: p_marque */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_marque", function() { return Marque; });
/* harmony import */ var _index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-381d535c.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-381d535c.js");
/* harmony import */ var _index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-0a27866a.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-0a27866a.js");


var CDN_BASE_URL = "https://cdn.ui.porsche.com/porsche-design-system/marque";
var MARQUES_MANIFEST = { "porscheMarqueTrademark": { "medium": { "1x": "porsche-marque-trademark.medium.min.af8bb58f56a36a40768c43e1b6040d1f@1x.png", "2x": "porsche-marque-trademark.medium.min.809c7f7a3ea6851fe3aec6c25a607771@2x.png", "3x": "porsche-marque-trademark.medium.min.aa0da16c10b314dc965269a3bf3c0484@3x.png" }, "small": { "1x": "porsche-marque-trademark.small.min.b95854f1d63d3fde4498a56a79e94b52@1x.png", "2x": "porsche-marque-trademark.small.min.02fd4c5069964f0cc8b765140807406f@2x.png", "3x": "porsche-marque-trademark.small.min.4278429e2318f275eed1bea7217fa69d@3x.png" } }, "porscheMarque": { "medium": { "1x": "porsche-marque.medium.min.446b6e64e57cdb8745d752d78c51afba@1x.png", "2x": "porsche-marque.medium.min.6b3c1c396cfb49a6e235e67993428344@2x.png", "3x": "porsche-marque.medium.min.452f9b4bb85fda14631c5ea61337fdac@3x.png" }, "small": { "1x": "porsche-marque.small.min.0ea63c269a34559815199456285e8e6c@1x.png", "2x": "porsche-marque.small.min.7c3fca878e7f8784f75853a9e4ce75cb@2x.png", "3x": "porsche-marque.small.min.665a8eaee4d8334ca3e33d8818633bf6@3x.png" } } };
var marqueCss = ":host{display:-ms-inline-flexbox;display:inline-flex;vertical-align:top}.p-marque{display:block;width:100px;height:60px}@media (min-width: 1300px){.p-marque{width:120px;height:72px}}.p-marque>img{display:block;width:100%;height:auto}";
var Marque = /** @class */ (function () {
    function Marque(hostRef) {
        Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Show/hide trademark sign.
         */
        this.trademark = true;
    }
    Marque.prototype.render = function () {
        var marqueClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('marque'));
        return (Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("picture", { class: marqueClasses }, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("source", { media: '(min-width: 1300px)', srcSet: "\n            " + CDN_BASE_URL + "/" + (this.trademark ? MARQUES_MANIFEST.porscheMarqueTrademark.medium['1x'] : MARQUES_MANIFEST.porscheMarque.medium['1x']) + " 1x,\n            " + CDN_BASE_URL + "/" + (this.trademark ? MARQUES_MANIFEST.porscheMarqueTrademark.medium['2x'] : MARQUES_MANIFEST.porscheMarque.medium['2x']) + " 2x,\n            " + CDN_BASE_URL + "/" + (this.trademark ? MARQUES_MANIFEST.porscheMarqueTrademark.medium['3x'] : MARQUES_MANIFEST.porscheMarque.medium['3x']) + " 3x\n          " }), Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("source", { srcSet: "\n            " + CDN_BASE_URL + "/" + (this.trademark ? MARQUES_MANIFEST.porscheMarqueTrademark.small['1x'] : MARQUES_MANIFEST.porscheMarque.small['1x']) + " 1x,\n            " + CDN_BASE_URL + "/" + (this.trademark ? MARQUES_MANIFEST.porscheMarqueTrademark.small['2x'] : MARQUES_MANIFEST.porscheMarque.small['2x']) + " 2x,\n            " + CDN_BASE_URL + "/" + (this.trademark ? MARQUES_MANIFEST.porscheMarqueTrademark.small['3x'] : MARQUES_MANIFEST.porscheMarque.small['3x']) + " 3x\n          " }), Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: CDN_BASE_URL + "/" + (this.trademark ? MARQUES_MANIFEST.porscheMarqueTrademark.medium['2x'] : MARQUES_MANIFEST.porscheMarque.medium['2x']), alt: 'Porsche' })));
    };
    return Marque;
}());
Marque.style = marqueCss;



/***/ })

};;
//# sourceMappingURL=16.render-page.js.map