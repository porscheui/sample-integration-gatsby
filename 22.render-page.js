exports.ids = [22];
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
/* harmony import */ var _index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-381d535c.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-381d535c.js");
/* harmony import */ var _index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-0a27866a.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-0a27866a.js");


var textListCss = ":host{display:block;counter-reset:section !important}.p-text-list{font-size:1rem;line-height:1.5;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:400;display:block;padding:0;margin:0}.p-text-list--theme-light{color:#000}.p-text-list--theme-dark{color:#fff}";
var TextList = /** @class */ (function () {
    function TextList(hostRef) {
        Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The type of the text list. */
        this.listType = 'unordered';
        /** The list style type of an ordered list. */
        this.orderType = 'numbered';
        /** Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop. */
        this.theme = 'light';
    }
    TextList.prototype.render = function () {
        var TagType = this.listType === 'unordered' ? 'ul' : 'ol';
        var textListClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('text-list'), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("text-list--" + this.listType), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("text-list--theme-" + this.theme), this.isNestedList && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('text-list--nested'));
        return (Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["H"], { nested: this.isNestedList }, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, { role: 'list', class: textListClasses }, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
    };
    Object.defineProperty(TextList.prototype, "isNestedList", {
        get: function () {
            return !!this.host.closest(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('text-list-item'));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextList.prototype, "host", {
        get: function () { return Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    return TextList;
}());
TextList.style = textListCss;



/***/ })

};;
//# sourceMappingURL=22.render-page.js.map