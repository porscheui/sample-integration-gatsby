exports.ids = [5];
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

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-link.entry.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-link.entry.js ***!
  \****************************************************************************************/
/*! exports provided: p_link */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_link", function() { return Link; });
/* harmony import */ var _index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-381d535c.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-381d535c.js");
/* harmony import */ var _index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-0a27866a.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-0a27866a.js");
/* harmony import */ var _focusHandling_e515b816_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focusHandling-e515b816.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/focusHandling-e515b816.js");



var linkCss = ":host{display:-ms-inline-flexbox;display:inline-flex;vertical-align:top}.p-link{display:-ms-flexbox;display:flex;width:100%;min-width:3rem;min-height:3rem;position:relative;margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none transparent;text-decoration:none;border-style:solid;border-width:1px;-webkit-transition:background-color 0.24s ease, border-color 0.24s ease, outline-color 0.24s ease, color 0.24s ease;transition:background-color 0.24s ease, border-color 0.24s ease, outline-color 0.24s ease, color 0.24s ease}.p-link::-moz-focus-inner{border:0}.p-link:focus{outline-width:2px;outline-style:solid;outline-offset:1px}.p-link--theme-light:focus{outline-color:#00d5b9}.p-link--theme-dark:focus{outline-color:#00d5b9}.p-link--primary.p-link--theme-light{color:#fff;background-color:#d5001c;border-color:#d5001c}.p-link--primary.p-link--theme-dark{color:#fff;background-color:#d5001c;border-color:#d5001c}.p-link--primary:hover.p-link--theme-light,.p-link--primary:active.p-link--theme-light{color:#fff;background-color:#980014;border-color:#980014}.p-link--primary:hover.p-link--theme-dark,.p-link--primary:active.p-link--theme-dark{color:#fff;background-color:#980014;border-color:#980014}.p-link--secondary.p-link--theme-light{color:#fff;background-color:#323639;border-color:#323639}.p-link--secondary.p-link--theme-dark{color:#000;background-color:#fff;border-color:#fff}.p-link--secondary:hover.p-link--theme-light,.p-link--secondary:active.p-link--theme-light{color:#fff;background-color:#151718;border-color:#151718}.p-link--secondary:hover.p-link--theme-dark,.p-link--secondary:active.p-link--theme-dark{color:#000;background-color:#e0e0e0;border-color:#e0e0e0}.p-link--tertiary.p-link--theme-light{color:#000;background-color:transparent;border-color:#323639}.p-link--tertiary.p-link--theme-dark{color:#fff;background-color:transparent;border-color:#fff}.p-link--tertiary:hover.p-link--theme-light,.p-link--tertiary:active.p-link--theme-light{color:#fff;background-color:#151718;border-color:#151718}.p-link--tertiary:hover.p-link--theme-dark,.p-link--tertiary:active.p-link--theme-dark{color:#000;background-color:#fff;border-color:#fff}.p-link--with-label{padding:0.6875rem 0.9375rem 0.6875rem 2.4375rem}.p-link--with-label .p-link__label{position:static;width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;clip:auto;-webkit-clip-path:none;clip-path:none}.p-link--with-label .p-link__icon{left:0.6875rem;top:0.6875rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-link--without-label{padding:0}.p-link--without-label .p-link__label{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;border:0;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}.p-link--without-label .p-link__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}@media (min-width: 480px){.p-link--with-label-xs{padding:0.6875rem 0.9375rem 0.6875rem 2.4375rem}.p-link--with-label-xs .p-link__label{position:static;width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;clip:auto;-webkit-clip-path:none;clip-path:none}.p-link--with-label-xs .p-link__icon{left:0.6875rem;top:0.6875rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-link--without-label-xs{padding:0}.p-link--without-label-xs .p-link__label{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;border:0;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}.p-link--without-label-xs .p-link__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}}@media (min-width: 760px){.p-link--with-label-s{padding:0.6875rem 0.9375rem 0.6875rem 2.4375rem}.p-link--with-label-s .p-link__label{position:static;width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;clip:auto;-webkit-clip-path:none;clip-path:none}.p-link--with-label-s .p-link__icon{left:0.6875rem;top:0.6875rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-link--without-label-s{padding:0}.p-link--without-label-s .p-link__label{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;border:0;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}.p-link--without-label-s .p-link__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}}@media (min-width: 1000px){.p-link--with-label-m{padding:0.6875rem 0.9375rem 0.6875rem 2.4375rem}.p-link--with-label-m .p-link__label{position:static;width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;clip:auto;-webkit-clip-path:none;clip-path:none}.p-link--with-label-m .p-link__icon{left:0.6875rem;top:0.6875rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-link--without-label-m{padding:0}.p-link--without-label-m .p-link__label{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;border:0;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}.p-link--without-label-m .p-link__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}}@media (min-width: 1300px){.p-link--with-label-l{padding:0.6875rem 0.9375rem 0.6875rem 2.4375rem}.p-link--with-label-l .p-link__label{position:static;width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;clip:auto;-webkit-clip-path:none;clip-path:none}.p-link--with-label-l .p-link__icon{left:0.6875rem;top:0.6875rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-link--without-label-l{padding:0}.p-link--without-label-l .p-link__label{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;border:0;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}.p-link--without-label-l .p-link__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}}@media (min-width: 1760px){.p-link--with-label-xl{padding:0.6875rem 0.9375rem 0.6875rem 2.4375rem}.p-link--with-label-xl .p-link__label{position:static;width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;clip:auto;-webkit-clip-path:none;clip-path:none}.p-link--with-label-xl .p-link__icon{left:0.6875rem;top:0.6875rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-link--without-label-xl{padding:0}.p-link--without-label-xl .p-link__label{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;border:0;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}.p-link--without-label-xl .p-link__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}}.p-link__label{display:block;-webkit-box-sizing:border-box;box-sizing:border-box}.p-link__icon{position:absolute;width:1.5rem;height:1.5rem}";
var Link = /** @class */ (function () {
    function Link(hostRef) {
        Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The style variant of the link. */
        this.variant = 'secondary';
        /** The icon shown. */
        this.icon = 'arrow-head-right';
        /** A custom URL path to a custom icon. */
        this.iconSource = undefined;
        /** When providing an url then the component will be rendered as `<a>`. */
        this.href = undefined;
        /** Adapts the link color when used on dark background. */
        this.theme = 'light';
        /** Target attribute where the link should be opened. */
        this.target = '_self';
        /** Special download attribute to open native browser download dialog if target url points to a downloadable file. */
        this.download = undefined;
        /** Specifies the relationship of the target object to the link object. */
        this.rel = undefined;
        /** Show or hide label. For better accessibility it is recommended to show the label. */
        this.hideLabel = false;
    }
    Link.prototype.componentDidLoad = function () {
        var tagName = this.element.tagName.toLowerCase();
        var style = "a:focus " + tagName + " {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }";
        Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.element, style);
        Object(_focusHandling_e515b816_js__WEBPACK_IMPORTED_MODULE_2__["i"])(this.element);
    };
    Link.prototype.render = function () {
        var TagType = this.href === undefined ? 'span' : 'a';
        var linkClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('link'), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("link--" + this.variant), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["m"])('link-', this.hideLabel, ['without-label', 'with-label']), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("link--theme-" + this.theme));
        var iconClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('link__icon');
        var labelClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('link__label');
        return (Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, Object.assign({ class: linkClasses }, (TagType === 'a' ? {
            href: this.href,
            target: "" + this.target,
            download: this.download,
            rel: this.rel
        } : null)), Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-icon", { class: iconClasses, size: 'inherit', name: this.icon, source: this.iconSource, color: 'inherit', "aria-hidden": 'true' }), Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { tag: 'span', color: 'inherit', class: labelClasses }, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
    };
    Object.defineProperty(Link.prototype, "element", {
        get: function () { return Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    return Link;
}());
Link.style = linkCss;



/***/ })

};;
//# sourceMappingURL=5.render-page.js.map