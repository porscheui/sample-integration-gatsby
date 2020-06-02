exports.ids = [14];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-headline.entry.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-headline.entry.js ***!
  \********************************************************************************************/
/*! exports provided: p_headline */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_headline", function() { return Headline; });
/* harmony import */ var _index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-381d535c.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-381d535c.js");
/* harmony import */ var _index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-0a27866a.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-0a27866a.js");


var headlineCss = ":host{display:block}.p-headline{padding:0;margin:0}.p-headline--variant-large-title{font-size:2rem;line-height:1.375;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:600}@media (min-width: 760px) and (max-width: 999px){.p-headline--variant-large-title{font-size:2.625rem;line-height:1.2380952381}}@media (min-width: 1000px) and (max-width: 1299px){.p-headline--variant-large-title{font-size:3.25rem;line-height:1.2307692308}}@media (min-width: 1300px) and (max-width: 1759px){.p-headline--variant-large-title{font-size:3.875rem;line-height:1.2258064516}}@media (min-width: 1760px){.p-headline--variant-large-title{font-size:4.5rem;line-height:1.2222222222}}.p-headline--variant-headline-1{font-size:1.75rem;line-height:1.4285714286;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:600}@media (min-width: 760px) and (max-width: 999px){.p-headline--variant-headline-1{font-size:2.25rem;line-height:1.3333333333}}@media (min-width: 1000px) and (max-width: 1299px){.p-headline--variant-headline-1{font-size:2.75rem;line-height:1.1818181818}}@media (min-width: 1300px) and (max-width: 1759px){.p-headline--variant-headline-1{font-size:3.25rem;line-height:1.2307692308}}@media (min-width: 1760px){.p-headline--variant-headline-1{font-size:3.75rem;line-height:1.2}}.p-headline--variant-headline-2{font-size:1.5rem;line-height:1.5;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:600}@media (min-width: 760px) and (max-width: 999px){.p-headline--variant-headline-2{font-size:1.875rem;line-height:1.3333333333}}@media (min-width: 1000px) and (max-width: 1299px){.p-headline--variant-headline-2{font-size:2.25rem;line-height:1.3333333333}}@media (min-width: 1300px) and (max-width: 1759px){.p-headline--variant-headline-2{font-size:2.625rem;line-height:1.2380952381}}@media (min-width: 1760px){.p-headline--variant-headline-2{font-size:3rem;line-height:1.25}}.p-headline--variant-headline-3{font-size:1.25rem;line-height:1.4;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:600}@media (min-width: 760px) and (max-width: 999px){.p-headline--variant-headline-3{font-size:1.5rem;line-height:1.5}}@media (min-width: 1000px) and (max-width: 1299px){.p-headline--variant-headline-3{font-size:1.75rem;line-height:1.4285714286}}@media (min-width: 1300px) and (max-width: 1759px){.p-headline--variant-headline-3{font-size:2rem;line-height:1.375}}@media (min-width: 1760px){.p-headline--variant-headline-3{font-size:2.25rem;line-height:1.3333333333}}.p-headline--variant-headline-4{font-size:1rem;line-height:1.5;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:600}@media (min-width: 760px) and (max-width: 999px){.p-headline--variant-headline-4{font-size:1.125rem;line-height:1.5555555556}}@media (min-width: 1000px) and (max-width: 1299px){.p-headline--variant-headline-4{font-size:1.25rem;line-height:1.4}}@media (min-width: 1300px) and (max-width: 1759px){.p-headline--variant-headline-4{font-size:1.375rem;line-height:1.4545454545}}@media (min-width: 1760px){.p-headline--variant-headline-4{font-size:1.5rem;line-height:1.5}}.p-headline--variant-headline-5{font-size:1rem;line-height:1.5;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:600}.p-headline--align-left{text-align:left}.p-headline--align-center{text-align:center}.p-headline--align-right{text-align:right}.p-headline--color-default.p-headline--theme-light{color:#000}.p-headline--color-default.p-headline--theme-dark{color:#fff}.p-headline--color-inherit{color:inherit}.p-headline--ellipsis{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";
var Headline = /** @class */ (function () {
    function Headline(hostRef) {
        Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Style of the text. */
        this.variant = 'headline-1';
        /** Sets a custom HTML tag depending of the usage of the headline component. */
        this.tag = undefined;
        /** Text alignment of the component. */
        this.align = 'left';
        /** Basic text color variations depending on theme property. */
        this.color = 'default';
        /** Adds an ellipsis to a single line of text if it overflows. */
        this.ellipsis = false;
        /** Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop. */
        this.theme = 'light';
    }
    Headline.prototype.componentDidLoad = function () {
        var tagName = this.element.tagName.toLowerCase();
        var style = tagName + " a {\n      color: inherit;\n      text-decoration: none;\n    }";
        Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.element, style);
    };
    Headline.prototype.render = function () {
        var TagType = !this.tag ?
            this.variant === 'large-title' && 'h1'
                || this.variant === 'headline-1' && 'h1'
                || this.variant === 'headline-2' && 'h2'
                || this.variant === 'headline-3' && 'h3'
                || this.variant === 'headline-4' && 'h4'
                || this.variant === 'headline-5' && 'h5'
            : this.tag;
        var headlineClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('headline'), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("headline--variant-" + this.variant), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("headline--align-" + this.align), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("headline--color-" + this.color), this.ellipsis && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('headline--ellipsis'), this.color !== 'inherit' && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("headline--theme-" + this.theme));
        return (Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, { class: headlineClasses }, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    Object.defineProperty(Headline.prototype, "element", {
        get: function () { return Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    return Headline;
}());
Headline.style = headlineCss;



/***/ })

};;
//# sourceMappingURL=14.render-page.js.map