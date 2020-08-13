exports.ids = [23];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/index-45be8764.js":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/index-45be8764.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return classnames; });
/* harmony import */ var _breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-063d6106.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-063d6106.js");

var classnames = Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["d"])(function (module) {
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */
    /* global define */
    (function () {
        var hasOwn = {}.hasOwnProperty;
        function classNames() {
            var classes = [];
            for (var i = 0; i < arguments.length; i++) {
                var arg = arguments[i];
                if (!arg)
                    continue;
                var argType = typeof arg;
                if (argType === 'string' || argType === 'number') {
                    classes.push(arg);
                }
                else if (Array.isArray(arg) && arg.length) {
                    var inner = classNames.apply(null, arg);
                    if (inner) {
                        classes.push(inner);
                    }
                }
                else if (argType === 'object') {
                    for (var key in arg) {
                        if (hasOwn.call(arg, key) && arg[key]) {
                            classes.push(key);
                        }
                    }
                }
            }
            return classes.join(' ');
        }
        if (module.exports) {
            classNames.default = classNames;
            module.exports = classNames;
        }
        else {
            window.classNames = classNames;
        }
    }());
});



/***/ }),

/***/ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/p-text-list.entry.js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/p-text-list.entry.js ***!
  \**************************************************************************************************************************************************/
/*! exports provided: p_text_list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_text_list", function() { return TextList; });
/* harmony import */ var _breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-063d6106.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-063d6106.js");
/* harmony import */ var _index_45be8764_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-45be8764.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/index-45be8764.js");


var textListCss = ":host{display:block;counter-reset:section !important}.p-text-list{font-size:1rem;line-height:1.5;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:400;display:block;padding:0;margin:0}.p-text-list--theme-light{color:#000}.p-text-list--theme-dark{color:#fff}";
var TextList = /** @class */ (function () {
    function TextList(hostRef) {
        Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The type of the text list. */
        this.listType = 'unordered';
        /** The list style type of an ordered list. */
        this.orderType = 'numbered';
        /** Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop. */
        this.theme = 'light';
    }
    TextList.prototype.render = function () {
        var TagType = this.listType === 'unordered' ? 'ul' : 'ol';
        var textListClasses = Object(_index_45be8764_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text-list'), Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])("text-list--" + this.listType), Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])("text-list--theme-" + this.theme), this.isNestedList && Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text-list--nested'));
        return (Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["H"], { nested: this.isNestedList }, Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, { role: 'list', class: textListClasses }, Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
    };
    Object.defineProperty(TextList.prototype, "isNestedList", {
        get: function () {
            return !!this.host.closest(Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text-list-item'));
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextList.prototype, "host", {
        get: function () { return Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return TextList;
}());
TextList.style = textListCss;



/***/ })

};;
//# sourceMappingURL=23.render-page.js.map