exports.ids = [14];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-text-list-item.entry.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-text-list-item.entry.js ***!
  \**************************************************************************************************/
/*! exports provided: p_text_list_item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_text_list_item", function() { return TextListItem; });
/* harmony import */ var _breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-ff31979d.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-ff31979d.js");
/* harmony import */ var _slotted_styles_9a18361d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slotted-styles-9a18361d.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/slotted-styles-9a18361d.js");


var textListItemCss = ":host{position:relative !important;display:list-item !important;color:inherit !important;list-style-type:none !important}:host(.p-text-list-item--unordered){padding-left:1.5rem !important}:host(.p-text-list-item--unordered)::before{content:\"\" !important;position:absolute !important;left:0 !important;top:calc(1.5em / 2 - 0.125em) !important;width:0.25rem !important;height:0.25rem !important;background-color:currentColor !important}:host(.p-text-list-item--unordered.p-text-list-item--nested)::before{height:1px !important;width:0.5rem !important;top:calc(1.5em / 2) !important}:host(.p-text-list-item--ordered){padding-left:2.5rem !important}:host(.p-text-list-item--ordered)::before{position:absolute !important;right:calc(100% - 24px) !important;top:0 !important;counter-increment:section !important;text-align:right !important;font-size:1rem;line-height:1.5;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:400}:host(.p-text-list-item--ordered-numbered)::before{content:counters(section, \".\", decimal) \".\" !important}:host(.p-text-list-item--ordered-alphabetically)::before{content:counters(section, \".\", lower-latin) \".\" !important}:host(.p-text-list-item--ordered-numbered.p-text-list-item--nested)::before{content:counters(section, \".\", decimal) !important}:host(.p-text-list-item--ordered-alphabetically.p-text-list-item--nested)::before{content:counters(section, \".\", lower-latin) !important}";
var TextListItem = /** @class */ (function () {
    function TextListItem(hostRef) {
        Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    TextListItem.prototype.componentDidLoad = function () {
        this.addSlottedStyles();
    };
    TextListItem.prototype.render = function () {
        var _a;
        var textListItemClasses = (_a = {},
            _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text-list-item')] = true,
            _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])("text-list-item--" + this.typeOfList)] = true,
            _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])("text-list-item--ordered-" + this.typeOfOrderedList)] = this.typeOfList === 'ordered',
            _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text-list-item--nested')] = this.isNestedList,
            _a);
        return (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "listitem", class: textListItemClasses }, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    Object.defineProperty(TextListItem.prototype, "typeOfList", {
        get: function () {
            var list = this.host.closest(Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text-list'));
            return list.getAttribute('list-type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextListItem.prototype, "typeOfOrderedList", {
        get: function () {
            var list = this.host.closest(Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text-list'));
            return list.getAttribute('order-type');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextListItem.prototype, "isNestedList", {
        get: function () {
            return !!this.host.closest(Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text-list[nested]'));
        },
        enumerable: false,
        configurable: true
    });
    TextListItem.prototype.addSlottedStyles = function () {
        var tagName = this.host.tagName.toLowerCase();
        var style = tagName + " a {\n      outline: none transparent;\n      color: inherit;\n      text-decoration: underline;\n      -webkit-transition: outline-color .24s ease, color .24s ease;\n      transition: outline-color .24s ease, color .24s ease;\n    }\n\n    " + tagName + " a:hover {\n      color: #d5001c;\n    }\n\n    " + tagName + " a:focus {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }\n    ";
        Object(_slotted_styles_9a18361d_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this.host, style);
    };
    Object.defineProperty(TextListItem.prototype, "host", {
        get: function () { return Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return TextListItem;
}());
TextListItem.style = textListItemCss;



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
//# sourceMappingURL=14.render-page.js.map