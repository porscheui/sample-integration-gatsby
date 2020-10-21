exports.ids = [13];
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
/* harmony import */ var _breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-ff31979d.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-ff31979d.js");
/* harmony import */ var _slotted_styles_9a18361d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slotted-styles-9a18361d.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/slotted-styles-9a18361d.js");


var headlineCss = ":host{display:block}::slotted(h1),::slotted(h2),::slotted(h3),::slotted(h4),::slotted(h5),::slotted(h6){margin:0 !important;font-weight:600 !important;font-size:inherit !important}.p-headline{padding:0;margin:0}.p-headline--variant-large-title{font-size:2rem;line-height:1.375;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:600}@media (min-width: 760px) and (max-width: 999px){.p-headline--variant-large-title{font-size:2.625rem;line-height:1.2380952381}}@media (min-width: 1000px) and (max-width: 1299px){.p-headline--variant-large-title{font-size:3.25rem;line-height:1.2307692308}}@media (min-width: 1300px) and (max-width: 1759px){.p-headline--variant-large-title{font-size:3.875rem;line-height:1.2258064516}}@media (min-width: 1760px){.p-headline--variant-large-title{font-size:4.5rem;line-height:1.2222222222}}.p-headline--variant-headline-1{font-size:1.75rem;line-height:1.4285714286;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:600}@media (min-width: 760px) and (max-width: 999px){.p-headline--variant-headline-1{font-size:2.25rem;line-height:1.3333333333}}@media (min-width: 1000px) and (max-width: 1299px){.p-headline--variant-headline-1{font-size:2.75rem;line-height:1.1818181818}}@media (min-width: 1300px) and (max-width: 1759px){.p-headline--variant-headline-1{font-size:3.25rem;line-height:1.2307692308}}@media (min-width: 1760px){.p-headline--variant-headline-1{font-size:3.75rem;line-height:1.2}}.p-headline--variant-headline-2{font-size:1.5rem;line-height:1.5;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:600}@media (min-width: 760px) and (max-width: 999px){.p-headline--variant-headline-2{font-size:1.875rem;line-height:1.3333333333}}@media (min-width: 1000px) and (max-width: 1299px){.p-headline--variant-headline-2{font-size:2.25rem;line-height:1.3333333333}}@media (min-width: 1300px) and (max-width: 1759px){.p-headline--variant-headline-2{font-size:2.625rem;line-height:1.2380952381}}@media (min-width: 1760px){.p-headline--variant-headline-2{font-size:3rem;line-height:1.25}}.p-headline--variant-headline-3{font-size:1.25rem;line-height:1.4;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:600}@media (min-width: 760px) and (max-width: 999px){.p-headline--variant-headline-3{font-size:1.5rem;line-height:1.5}}@media (min-width: 1000px) and (max-width: 1299px){.p-headline--variant-headline-3{font-size:1.75rem;line-height:1.4285714286}}@media (min-width: 1300px) and (max-width: 1759px){.p-headline--variant-headline-3{font-size:2rem;line-height:1.375}}@media (min-width: 1760px){.p-headline--variant-headline-3{font-size:2.25rem;line-height:1.3333333333}}.p-headline--variant-headline-4{font-size:1rem;line-height:1.5;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:600}@media (min-width: 760px) and (max-width: 999px){.p-headline--variant-headline-4{font-size:1.125rem;line-height:1.5555555556}}@media (min-width: 1000px) and (max-width: 1299px){.p-headline--variant-headline-4{font-size:1.25rem;line-height:1.4}}@media (min-width: 1300px) and (max-width: 1759px){.p-headline--variant-headline-4{font-size:1.375rem;line-height:1.4545454545}}@media (min-width: 1760px){.p-headline--variant-headline-4{font-size:1.5rem;line-height:1.5}}.p-headline--variant-headline-5{font-size:1rem;line-height:1.5;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:600}.p-headline--align-left{text-align:left}.p-headline--align-center{text-align:center}.p-headline--align-right{text-align:right}.p-headline--color-default.p-headline--theme-light{color:#000}.p-headline--color-default.p-headline--theme-dark{color:#fff}.p-headline--color-inherit{color:inherit}.p-headline--ellipsis{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";
var Headline = /** @class */ (function () {
    function Headline(hostRef) {
        Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Style of the headline. */
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
    Headline.prototype.componentWillLoad = function () {
        this.addSlottedStyles();
    };
    Headline.prototype.render = function () {
        var _a;
        var variantToTagMap = {
            'large-title': 'h1',
            'headline-1': 'h1',
            'headline-2': 'h2',
            'headline-3': 'h3',
            'headline-4': 'h4',
            'headline-5': 'h5'
        };
        var TagType = this.hasSlottedHeadlineTag ? 'div' : this.tag || variantToTagMap[this.variant];
        var headlineClasses = (_a = {},
            _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('headline')] = true,
            _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])("headline--variant-" + this.variant)] = true,
            _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])("headline--align-" + this.align)] = true,
            _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])("headline--color-" + this.color)] = true,
            _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('headline--ellipsis')] = this.ellipsis,
            _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])("headline--theme-" + this.theme)] = this.color !== 'inherit',
            _a);
        return (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, { class: headlineClasses }, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    Object.defineProperty(Headline.prototype, "hasSlottedHeadlineTag", {
        get: function () {
            var el = this.host.querySelector(':first-child');
            return el === null || el === void 0 ? void 0 : el.matches('h1, h2, h3, h4, h5, h6');
        },
        enumerable: false,
        configurable: true
    });
    Headline.prototype.addSlottedStyles = function () {
        var tagName = this.host.tagName.toLowerCase();
        var style = tagName + " a {\n      color: inherit;\n      text-decoration: none;\n    }";
        Object(_slotted_styles_9a18361d_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this.host, style);
    };
    Object.defineProperty(Headline.prototype, "host", {
        get: function () { return Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return Headline;
}());
Headline.style = headlineCss;



/***/ }),

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/slotted-styles-9a18361d.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/slotted-styles-9a18361d.js ***!
  \***************************************************************************************************/
/*! exports provided: i */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return insertSlottedStyles; });
var elementStyles = new Map();
var getElementMap = function (element) {
    var tagName = element.tagName;
    var map = elementStyles.get(tagName);
    if (map !== undefined) {
        return map;
    }
    var newMap = new Map();
    elementStyles.set(tagName, newMap);
    return newMap;
};
var getNodeToPrependTo = function (rootNode) {
    if (rootNode === document) {
        return rootNode.head;
    }
    return rootNode;
};
/**
 * Adds an inheritable style for slotted content.
 * @param element
 * @param css - Make sure that css selectors are always in context of element (make sure that
 * it's created dynamically by e.g. `element.tagName.toLowerCase()`), e.g. `a:focus p-link-pure {…}`. Something like
 * providing only `a {…}` would cause unscoped global styling.
 * @returns void
 */
var insertSlottedStyles = function (element, css) {
    var rootNode = element.getRootNode();
    var elementMap = getElementMap(element);
    if (elementMap.get(rootNode) === undefined) {
        elementMap.set(rootNode, true);
        var style = document.createElement('style');
        style.appendChild(document.createTextNode(minifySlottedStyles(css)));
        var prependTo = getNodeToPrependTo(rootNode);
        var charsetTag = prependTo.querySelector('meta[charset]');
        if (charsetTag !== null) {
            prependTo.insertBefore(style, charsetTag.nextSibling);
        }
        else if (prependTo.childNodes.length > 0) {
            prependTo.insertBefore(style, prependTo.firstChild);
        }
        else {
            prependTo.appendChild(style);
        }
    }
};
var minifySlottedStyles = function (css) { return css
    .replace(/\s{2,}|(\/\*.*\*\/)/g, '') // remove 2 and more white spaces + comments
    .replace(/(:|;)\s/g, '$1') // remove space after colon and semi colon
    .replace(/[\s;]({|})\s?/g, '$1'); }; // remove semi colon and space before and after opening and closing curly bracket



/***/ })

};;
//# sourceMappingURL=13.render-page.js.map