exports.ids = [3];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/focusHandling-e515b816.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/focusHandling-e515b816.js ***!
  \**************************************************************************************************/
/*! exports provided: i */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return improveFocusHandlingForCustomElement; });
/**
 * keep attention to delegatesFocus which might help to
 * reduce logic and improve the behaviour in near future
 * https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus
 */
var getFocusableElements = function (element) {
    if (element === void 0) { element = document; }
    /**
     * from https://github.com/salesforce/lwc/blob/28ac669d6f3e318bbebe74290b5a7ee6c6ceaa93/packages/%40lwc/synthetic-shadow/src/faux-shadow/focus.ts#L48
     */
    var tabbableElementsSelector = "\n    button:not([tabindex=\"-1\"]):not([disabled]),\n    [contenteditable]:not([tabindex=\"-1\"]),\n    video[controls]:not([tabindex=\"-1\"]),\n    audio[controls]:not([tabindex=\"-1\"]),\n    [href]:not([tabindex=\"-1\"]),\n    input:not([tabindex=\"-1\"]):not([disabled]),\n    select:not([tabindex=\"-1\"]):not([disabled]),\n    textarea:not([tabindex=\"-1\"]):not([disabled]),\n    [tabindex=\"0\"]\n  ";
    /**
     * querySelectorAll returns matching elements in DOM order
     * that's important, since the tab order for elements with
     * the same tabindex is the dom order
     * https://www.w3.org/TR/selectors-api/#findelements
     */
    var focusableCandidatesList = element.querySelectorAll(tabbableElementsSelector);
    var focusable = [].slice.call(focusableCandidatesList);
    /**
     * sort does not change element order for compare function return value 0,
     * this ensures that our DOM order for elements with the same tabindex is
     * preserved
     * https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     */
    focusable.sort(function (a, b) { return a.tabIndex - b.tabIndex; });
    return focusable;
};
var createFocusEvent = function (type, bubbles) {
    if (typeof FocusEvent === 'function') {
        return new FocusEvent(type, { bubbles: bubbles });
    }
    /**
     * fallback for IE 11
     */
    var focusEvent = document.createEvent('FocusEvent');
    focusEvent.initEvent(type, bubbles, false);
    return focusEvent;
};
var getActiveElement = function (element) {
    if (element.shadowRoot && element.shadowRoot.host) {
        return element.shadowRoot.activeElement;
    }
    /**
     * fallback if there is no shadow root
     */
    var rootNode = element.getRootNode();
    return rootNode.activeElement;
};
var improveFocusHandlingForCustomElement = function (element) {
    var childElementContainer = element.shadowRoot ? element.shadowRoot : element;
    element.focus = function () {
        var firstFocusableChild = getFocusableElements(childElementContainer)[0];
        if (firstFocusableChild) {
            firstFocusableChild.focus();
        }
    };
    element.blur = function () {
        var activeElement = getActiveElement(element);
        if (activeElement && childElementContainer.contains(activeElement)) {
            activeElement.blur();
        }
    };
    if (!element.shadowRoot || !element.shadowRoot.host) {
        /**
         * we don't have a shadowRoot. this usually means we're in
         * IE11/Edge (not chromium based). but in any case we've to fix some
         * events that behave different without shadow dom
         */
        var firstChild = element.children.item(0);
        if (firstChild) {
            firstChild.addEventListener('focusin', function (event) {
                var isRelatedTargetPartOfComponent = element.contains(event.relatedTarget);
                if (!isRelatedTargetPartOfComponent) {
                    element.dispatchEvent(createFocusEvent('focus', false));
                    element.dispatchEvent(createFocusEvent('focusin', true));
                }
                event.stopPropagation();
            });
            firstChild.addEventListener('focusout', function (event) {
                var isRelatedTargetPartOfComponent = element.contains(event.relatedTarget);
                if (!isRelatedTargetPartOfComponent) {
                    element.dispatchEvent(createFocusEvent('blur', false));
                    element.dispatchEvent(createFocusEvent('focusout', true));
                }
                event.stopPropagation();
            });
        }
    }
};



/***/ }),

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-link-pure.entry.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-link-pure.entry.js ***!
  \*********************************************************************************************/
/*! exports provided: p_link_pure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_link_pure", function() { return LinkPure; });
/* harmony import */ var _index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-381d535c.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-381d535c.js");
/* harmony import */ var _index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-0a27866a.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-0a27866a.js");
/* harmony import */ var _focusHandling_e515b816_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focusHandling-e515b816.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/focusHandling-e515b816.js");



var linkPureCss = ":host{display:-ms-inline-flexbox;display:inline-flex;vertical-align:top;position:relative !important}.p-link-pure{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;width:100%;margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;outline:transparent none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;text-decoration:none;text-align:left;background:transparent;-webkit-transition:color 0.24s ease, font-size 1ms linear;transition:color 0.24s ease, font-size 1ms linear}.p-link-pure::before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;display:block;outline:transparent none;-webkit-transition:outline-color 0.24s ease;transition:outline-color 0.24s ease}.p-link-pure::-moz-focus-inner{border:0}.p-link-pure:focus::before{outline-width:2px;outline-style:solid;outline-offset:1px}.p-link-pure--theme-light{color:#000}.p-link-pure--theme-light:focus::before{outline-color:#00d5b9}.p-link-pure--theme-light:active{color:#d5001c}.p-link-pure--theme-light:hover{color:#d5001c}.p-link-pure--theme-light.p-link-pure--active{color:#d5001c}.p-link-pure--theme-dark{color:#fff}.p-link-pure--theme-dark:focus::before{outline-color:#00d5b9}.p-link-pure--theme-dark:active{color:#d5001c}.p-link-pure--theme-dark:hover{color:#d5001c}.p-link-pure--theme-dark.p-link-pure--active{color:#d5001c}.p-link-pure--size-x-small{font-size:0.75rem;line-height:1.6666666667}.p-link-pure--size-x-small .p-link-pure__icon{width:1.6666666667em;height:1.6666666667em}.p-link-pure--size-small{font-size:1rem;line-height:1.5}.p-link-pure--size-small .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-medium{font-size:1.5rem;line-height:1.5}.p-link-pure--size-medium .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-large{font-size:2.25rem;line-height:1.3333333333}.p-link-pure--size-large .p-link-pure__icon{width:1.3333333333em;height:1.3333333333em}.p-link-pure--size-x-large{font-size:3.25rem;line-height:1.2307692308}.p-link-pure--size-x-large .p-link-pure__icon{width:1.2307692308em;height:1.2307692308em}.p-link-pure--size-inherit{font-size:inherit;line-height:inherit}.p-link-pure--size-inherit .p-link-pure__icon{width:1.5em;height:1.5em}@media (min-width: 480px){.p-link-pure--size-x-small-xs{font-size:0.75rem;line-height:1.6666666667}.p-link-pure--size-x-small-xs .p-link-pure__icon{width:1.6666666667em;height:1.6666666667em}.p-link-pure--size-small-xs{font-size:1rem;line-height:1.5}.p-link-pure--size-small-xs .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-medium-xs{font-size:1.5rem;line-height:1.5}.p-link-pure--size-medium-xs .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-large-xs{font-size:2.25rem;line-height:1.3333333333}.p-link-pure--size-large-xs .p-link-pure__icon{width:1.3333333333em;height:1.3333333333em}.p-link-pure--size-x-large-xs{font-size:3.25rem;line-height:1.2307692308}.p-link-pure--size-x-large-xs .p-link-pure__icon{width:1.2307692308em;height:1.2307692308em}.p-link-pure--size-inherit-xs{font-size:inherit;line-height:inherit}.p-link-pure--size-inherit-xs .p-link-pure__icon{width:1.5em;height:1.5em}}@media (min-width: 760px){.p-link-pure--size-x-small-s{font-size:0.75rem;line-height:1.6666666667}.p-link-pure--size-x-small-s .p-link-pure__icon{width:1.6666666667em;height:1.6666666667em}.p-link-pure--size-small-s{font-size:1rem;line-height:1.5}.p-link-pure--size-small-s .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-medium-s{font-size:1.5rem;line-height:1.5}.p-link-pure--size-medium-s .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-large-s{font-size:2.25rem;line-height:1.3333333333}.p-link-pure--size-large-s .p-link-pure__icon{width:1.3333333333em;height:1.3333333333em}.p-link-pure--size-x-large-s{font-size:3.25rem;line-height:1.2307692308}.p-link-pure--size-x-large-s .p-link-pure__icon{width:1.2307692308em;height:1.2307692308em}.p-link-pure--size-inherit-s{font-size:inherit;line-height:inherit}.p-link-pure--size-inherit-s .p-link-pure__icon{width:1.5em;height:1.5em}}@media (min-width: 1000px){.p-link-pure--size-x-small-m{font-size:0.75rem;line-height:1.6666666667}.p-link-pure--size-x-small-m .p-link-pure__icon{width:1.6666666667em;height:1.6666666667em}.p-link-pure--size-small-m{font-size:1rem;line-height:1.5}.p-link-pure--size-small-m .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-medium-m{font-size:1.5rem;line-height:1.5}.p-link-pure--size-medium-m .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-large-m{font-size:2.25rem;line-height:1.3333333333}.p-link-pure--size-large-m .p-link-pure__icon{width:1.3333333333em;height:1.3333333333em}.p-link-pure--size-x-large-m{font-size:3.25rem;line-height:1.2307692308}.p-link-pure--size-x-large-m .p-link-pure__icon{width:1.2307692308em;height:1.2307692308em}.p-link-pure--size-inherit-m{font-size:inherit;line-height:inherit}.p-link-pure--size-inherit-m .p-link-pure__icon{width:1.5em;height:1.5em}}@media (min-width: 1300px){.p-link-pure--size-x-small-l{font-size:0.75rem;line-height:1.6666666667}.p-link-pure--size-x-small-l .p-link-pure__icon{width:1.6666666667em;height:1.6666666667em}.p-link-pure--size-small-l{font-size:1rem;line-height:1.5}.p-link-pure--size-small-l .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-medium-l{font-size:1.5rem;line-height:1.5}.p-link-pure--size-medium-l .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-large-l{font-size:2.25rem;line-height:1.3333333333}.p-link-pure--size-large-l .p-link-pure__icon{width:1.3333333333em;height:1.3333333333em}.p-link-pure--size-x-large-l{font-size:3.25rem;line-height:1.2307692308}.p-link-pure--size-x-large-l .p-link-pure__icon{width:1.2307692308em;height:1.2307692308em}.p-link-pure--size-inherit-l{font-size:inherit;line-height:inherit}.p-link-pure--size-inherit-l .p-link-pure__icon{width:1.5em;height:1.5em}}@media (min-width: 1760px){.p-link-pure--size-x-small-xl{font-size:0.75rem;line-height:1.6666666667}.p-link-pure--size-x-small-xl .p-link-pure__icon{width:1.6666666667em;height:1.6666666667em}.p-link-pure--size-small-xl{font-size:1rem;line-height:1.5}.p-link-pure--size-small-xl .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-medium-xl{font-size:1.5rem;line-height:1.5}.p-link-pure--size-medium-xl .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-large-xl{font-size:2.25rem;line-height:1.3333333333}.p-link-pure--size-large-xl .p-link-pure__icon{width:1.3333333333em;height:1.3333333333em}.p-link-pure--size-x-large-xl{font-size:3.25rem;line-height:1.2307692308}.p-link-pure--size-x-large-xl .p-link-pure__icon{width:1.2307692308em;height:1.2307692308em}.p-link-pure--size-inherit-xl{font-size:inherit;line-height:inherit}.p-link-pure--size-inherit-xl .p-link-pure__icon{width:1.5em;height:1.5em}}.p-link-pure__icon{-ms-flex-negative:0;flex-shrink:0;width:1.5em;height:1.5em}.p-link-pure__label{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;border:0}.p-link-pure__label--visible{position:static;width:100%;height:auto;margin:0 0 0 0.25rem;padding:0 0.125em 0 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-link-pure__label--hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}@media (min-width: 480px){.p-link-pure__label--visible-xs{position:static;width:100%;height:auto;margin:0 0 0 0.25rem;padding:0 0.125em 0 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-link-pure__label--hidden-xs{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 760px){.p-link-pure__label--visible-s{position:static;width:100%;height:auto;margin:0 0 0 0.25rem;padding:0 0.125em 0 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-link-pure__label--hidden-s{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1000px){.p-link-pure__label--visible-m{position:static;width:100%;height:auto;margin:0 0 0 0.25rem;padding:0 0.125em 0 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-link-pure__label--hidden-m{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1300px){.p-link-pure__label--visible-l{position:static;width:100%;height:auto;margin:0 0 0 0.25rem;padding:0 0.125em 0 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-link-pure__label--hidden-l{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1760px){.p-link-pure__label--visible-xl{position:static;width:100%;height:auto;margin:0 0 0 0.25rem;padding:0 0.125em 0 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-link-pure__label--hidden-xl{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}";
var LinkPure = /** @class */ (function () {
    function LinkPure(hostRef) {
        Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Size of the link. */
        this.size = 'small';
        /** The weight of the text (only has effect with visible label). */
        this.weight = 'regular';
        /** The icon shown. */
        this.icon = 'arrow-head-right';
        /** A custom URL path to a custom icon. */
        this.iconSource = undefined;
        /** When providing an url then the component will be rendered as `<a>`. */
        this.href = undefined;
        /** Display link in active state. */
        this.active = false;
        /** Show or hide label. For better accessibility it is recommended to show the label. */
        this.hideLabel = false;
        /** Adapts the button color depending on the theme. */
        this.theme = 'light';
        /** Target attribute where the link should be opened. */
        this.target = '_self';
        /** Special download attribute to open native browser download dialog if target url points to a downloadable file. */
        this.download = undefined;
        /** Specifies the relationship of the target object to the link object. */
        this.rel = undefined;
    }
    LinkPure.prototype.componentDidLoad = function () {
        var _this = this;
        var tagName = this.element.tagName.toLowerCase();
        var style = "a:focus " + tagName + " {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }";
        Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.element, style);
        Object(_focusHandling_e515b816_js__WEBPACK_IMPORTED_MODULE_2__["i"])(this.element);
        Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["t"])(this.linkTag, 'font-size', function () {
            var size = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["a"])(_this.linkTag);
            _this.iconTag.style.width = size + "em";
            _this.iconTag.style.height = size + "em";
        });
    };
    LinkPure.prototype.render = function () {
        var _this = this;
        var TagType = this.href === undefined ? 'span' : 'a';
        var linkPureClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('link-pure'), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["m"])('link-pure--size', this.size), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("link-pure--theme-" + this.theme), this.active && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('link-pure--active'));
        var iconClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('link-pure__icon'));
        var labelClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('link-pure__label'), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["m"])('link-pure__label-', this.hideLabel, ['hidden', 'visible']));
        return (Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, Object.assign({ class: linkPureClasses }, (TagType === 'a' ? {
            href: this.href,
            target: this.target,
            download: this.download,
            rel: this.rel
        } : null), { ref: function (el) { return _this.linkTag = el; } }), Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-icon", { class: iconClasses, color: 'inherit', size: 'inherit', name: this.icon, source: this.iconSource, ref: function (el) { return _this.iconTag = el; }, "aria-hidden": 'true' }), Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: labelClasses, tag: 'span', color: 'inherit', size: 'inherit', weight: this.weight }, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
    };
    Object.defineProperty(LinkPure.prototype, "element", {
        get: function () { return Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    return LinkPure;
}());
LinkPure.style = linkPureCss;



/***/ })

};;
//# sourceMappingURL=3.render-page.js.map