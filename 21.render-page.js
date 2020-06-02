exports.ids = [21];
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
/* harmony import */ var _index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-381d535c.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-381d535c.js");
/* harmony import */ var _index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-0a27866a.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-0a27866a.js");


var textListItemCss = ":host{position:relative !important;display:list-item !important;color:inherit !important;list-style-type:none !important}:host(.p-text-list-item--unordered){padding-left:1.5rem !important}:host(.p-text-list-item--unordered)::before{content:\"\" !important;position:absolute !important;left:0 !important;top:calc(1.5em / 2 - 0.125em) !important;width:0.25rem !important;height:0.25rem !important;background-color:currentColor !important}:host(.p-text-list-item--unordered.p-text-list-item--nested)::before{height:1px !important;width:0.5rem !important;top:calc(1.5em / 2) !important}:host(.p-text-list-item--ordered){padding-left:2.5rem !important}:host(.p-text-list-item--ordered)::before{position:absolute !important;right:calc(100% - 24px) !important;top:0 !important;counter-increment:section !important;text-align:right !important;font-size:1rem;line-height:1.5;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:400}:host(.p-text-list-item--ordered-numbered)::before{content:counters(section, \".\", decimal) \".\" !important}:host(.p-text-list-item--ordered-alphabetically)::before{content:counters(section, \".\", lower-latin) \".\" !important}:host(.p-text-list-item--ordered-numbered.p-text-list-item--nested)::before{content:counters(section, \".\", decimal) !important}:host(.p-text-list-item--ordered-alphabetically.p-text-list-item--nested)::before{content:counters(section, \".\", lower-latin) !important}";
var TextListItem = /** @class */ (function () {
    function TextListItem(hostRef) {
        Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    TextListItem.prototype.componentDidLoad = function () {
        this.addSlottedStyles();
    };
    TextListItem.prototype.render = function () {
        var _a;
        var textListItemClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('text-list-item'), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("text-list-item--" + this.typeOfList), (_a = {},
            _a[Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("text-list-item--ordered-" + this.typeOfOrderedList)] = this.typeOfList === 'ordered',
            _a[Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('text-list-item--nested')] = this.isNestedList,
            _a));
        return (Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: 'listitem', class: textListItemClasses }, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    Object.defineProperty(TextListItem.prototype, "typeOfList", {
        get: function () {
            var list = this.host.closest(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('text-list'));
            return list.getAttribute('list-type');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextListItem.prototype, "typeOfOrderedList", {
        get: function () {
            var list = this.host.closest(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('text-list'));
            return list.getAttribute('order-type');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextListItem.prototype, "isNestedList", {
        get: function () {
            return !!this.host.closest(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('text-list[nested]'));
        },
        enumerable: true,
        configurable: true
    });
    TextListItem.prototype.addSlottedStyles = function () {
        var tagName = this.host.tagName.toLowerCase();
        var style = tagName + " a {\n      outline: none transparent;\n      color: inherit;\n      text-decoration: underline;\n      -webkit-transition: outline-color .24s ease, color .24s ease;\n      transition: outline-color .24s ease, color .24s ease;\n    }\n\n    " + tagName + " a:hover {\n      color: #d5001c;\n    }\n\n    " + tagName + " a:focus {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }\n    ";
        Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.host, style);
    };
    Object.defineProperty(TextListItem.prototype, "host", {
        get: function () { return Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    return TextListItem;
}());
TextListItem.style = textListItemCss;



/***/ })

};;
//# sourceMappingURL=21.render-page.js.map