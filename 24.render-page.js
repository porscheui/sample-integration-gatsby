exports.ids = [24];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-text-list.entry.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-text-list.entry.js ***!
  \*********************************************************************************************/
/*! exports provided: p_text_list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_text_list", function() { return TextList; });
/* harmony import */ var _breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-ff31979d.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-ff31979d.js");

var textListCss = ":host{display:block;counter-reset:section !important}.p-text-list{font-size:1rem;line-height:1.5;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:400;display:block;padding:0;margin:0}.p-text-list--theme-light{color:#000}.p-text-list--theme-dark{color:#fff}";
var TextList = /** @class */ (function () {
    function TextList(hostRef) {
        Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The type of the text list. */
        this.listType = 'unordered';
        /** The list style type of an ordered list. */
        this.orderType = 'numbered';
        /** Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop. */
        this.theme = 'light';
    }
    TextList.prototype.render = function () {
        var _a;
        var TagType = this.listType === 'unordered' ? 'ul' : 'ol';
        var textListClasses = (_a = {},
            _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text-list')] = true,
            _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])("text-list--" + this.listType)] = true,
            _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])("text-list--theme-" + this.theme)] = true,
            _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text-list--nested')] = this.isNestedList,
            _a);
        return (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["H"], { nested: this.isNestedList }, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, { role: "list", class: textListClasses }, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
    };
    Object.defineProperty(TextList.prototype, "isNestedList", {
        get: function () {
            return !!this.host.closest(Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text-list-item'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextList.prototype, "host", {
        get: function () { return Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return TextList;
}());
TextList.style = textListCss;



/***/ })

};;
//# sourceMappingURL=24.render-page.js.map