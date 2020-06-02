exports.ids = [2];
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

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-button.entry.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-button.entry.js ***!
  \******************************************************************************************/
/*! exports provided: p_button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_button", function() { return Button; });
/* harmony import */ var _index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-381d535c.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-381d535c.js");
/* harmony import */ var _index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-0a27866a.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-0a27866a.js");
/* harmony import */ var _focusHandling_e515b816_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focusHandling-e515b816.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/focusHandling-e515b816.js");



var buttonCss = "@charset \"UTF-8\";:host{display:-ms-inline-flexbox;display:inline-flex;vertical-align:top}.p-button{display:-ms-flexbox;display:flex;width:100%;min-width:3rem;min-height:3rem;position:relative;margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none transparent;text-decoration:none;text-align:left;border-style:solid;border-width:1px;-webkit-transition:background-color 0.24s ease, border-color 0.24s ease, outline-color 0.24s ease, color 0.24s ease;transition:background-color 0.24s ease, border-color 0.24s ease, outline-color 0.24s ease, color 0.24s ease;cursor:pointer}.p-button::-moz-focus-inner{border:0}.p-button:focus{outline-width:2px;outline-style:solid;outline-offset:1px}.p-button:disabled,.p-button[disabled]{cursor:not-allowed}.p-button--theme-light:focus{outline-color:#00d5b9}.p-button--theme-dark:focus{outline-color:#00d5b9}.p-button--primary.p-button--theme-light{color:#fff;background-color:#d5001c;border-color:#d5001c}.p-button--primary.p-button--theme-dark{color:#fff;background-color:#d5001c;border-color:#d5001c}.p-button--primary:enabled:hover.p-button--theme-light,.p-button--primary:enabled:active.p-button--theme-light,.p-button--primary:not([disabled]):hover.p-button--theme-light,.p-button--primary:not([disabled]):active.p-button--theme-light{color:#fff;background-color:#980014;border-color:#980014}.p-button--primary:enabled:hover.p-button--theme-dark,.p-button--primary:enabled:active.p-button--theme-dark,.p-button--primary:not([disabled]):hover.p-button--theme-dark,.p-button--primary:not([disabled]):active.p-button--theme-dark{color:#fff;background-color:#980014;border-color:#980014}.p-button--primary:disabled.p-button--theme-light,.p-button--primary[disabled].p-button--theme-light{color:rgba(255, 255, 255, 0.55);background-color:#96989a;border-color:#96989a}.p-button--primary:disabled.p-button--theme-dark,.p-button--primary[disabled].p-button--theme-dark{color:rgba(255, 255, 255, 0.55);background-color:#7c7f81;border-color:#7c7f81}.p-button--secondary.p-button--theme-light{color:#fff;background-color:#323639;border-color:#323639}.p-button--secondary.p-button--theme-dark{color:#000;background-color:#fff;border-color:#fff}.p-button--secondary:enabled:hover.p-button--theme-light,.p-button--secondary:enabled:active.p-button--theme-light,.p-button--secondary:not([disabled]):hover.p-button--theme-light,.p-button--secondary:not([disabled]):active.p-button--theme-light{color:#fff;background-color:#151718;border-color:#151718}.p-button--secondary:enabled:hover.p-button--theme-dark,.p-button--secondary:enabled:active.p-button--theme-dark,.p-button--secondary:not([disabled]):hover.p-button--theme-dark,.p-button--secondary:not([disabled]):active.p-button--theme-dark{color:#000;background-color:#e0e0e0;border-color:#e0e0e0}.p-button--secondary:disabled.p-button--theme-light,.p-button--secondary[disabled].p-button--theme-light{color:rgba(255, 255, 255, 0.55);background-color:#96989a;border-color:#96989a}.p-button--secondary:disabled.p-button--theme-dark,.p-button--secondary[disabled].p-button--theme-dark{color:rgba(255, 255, 255, 0.55);background-color:#7c7f81;border-color:#7c7f81}.p-button--tertiary.p-button--theme-light{color:#000;background-color:transparent;border-color:#323639}.p-button--tertiary.p-button--theme-dark{color:#fff;background-color:transparent;border-color:#fff}.p-button--tertiary:enabled:hover.p-button--theme-light,.p-button--tertiary:enabled:active.p-button--theme-light,.p-button--tertiary:not([disabled]):hover.p-button--theme-light,.p-button--tertiary:not([disabled]):active.p-button--theme-light{color:#fff;background-color:#151718;border-color:#151718}.p-button--tertiary:enabled:hover.p-button--theme-dark,.p-button--tertiary:enabled:active.p-button--theme-dark,.p-button--tertiary:not([disabled]):hover.p-button--theme-dark,.p-button--tertiary:not([disabled]):active.p-button--theme-dark{color:#000;background-color:#fff;border-color:#fff}.p-button--tertiary:disabled.p-button--theme-light,.p-button--tertiary[disabled].p-button--theme-light{color:#96989a;background-color:transparent;border-color:#96989a}.p-button--tertiary:disabled.p-button--theme-dark,.p-button--tertiary[disabled].p-button--theme-dark{color:#7c7f81;background-color:transparent;border-color:#7c7f81}.p-button--with-label{padding:0.6875rem 0.9375rem 0.6875rem 2.4375rem}.p-button--with-label .p-button__label{position:static;width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;clip:auto;-webkit-clip-path:none;clip-path:none}.p-button--with-label .p-button__icon{left:0.6875rem;top:0.6875rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-button--without-label{padding:0}.p-button--without-label .p-button__label{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;border:0;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}.p-button--without-label .p-button__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}@media (min-width: 480px){.p-button--with-label-xs{padding:0.6875rem 0.9375rem 0.6875rem 2.4375rem}.p-button--with-label-xs .p-button__label{position:static;width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;clip:auto;-webkit-clip-path:none;clip-path:none}.p-button--with-label-xs .p-button__icon{left:0.6875rem;top:0.6875rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-button--without-label-xs{padding:0}.p-button--without-label-xs .p-button__label{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;border:0;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}.p-button--without-label-xs .p-button__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}}@media (min-width: 760px){.p-button--with-label-s{padding:0.6875rem 0.9375rem 0.6875rem 2.4375rem}.p-button--with-label-s .p-button__label{position:static;width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;clip:auto;-webkit-clip-path:none;clip-path:none}.p-button--with-label-s .p-button__icon{left:0.6875rem;top:0.6875rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-button--without-label-s{padding:0}.p-button--without-label-s .p-button__label{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;border:0;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}.p-button--without-label-s .p-button__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}}@media (min-width: 1000px){.p-button--with-label-m{padding:0.6875rem 0.9375rem 0.6875rem 2.4375rem}.p-button--with-label-m .p-button__label{position:static;width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;clip:auto;-webkit-clip-path:none;clip-path:none}.p-button--with-label-m .p-button__icon{left:0.6875rem;top:0.6875rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-button--without-label-m{padding:0}.p-button--without-label-m .p-button__label{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;border:0;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}.p-button--without-label-m .p-button__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}}@media (min-width: 1300px){.p-button--with-label-l{padding:0.6875rem 0.9375rem 0.6875rem 2.4375rem}.p-button--with-label-l .p-button__label{position:static;width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;clip:auto;-webkit-clip-path:none;clip-path:none}.p-button--with-label-l .p-button__icon{left:0.6875rem;top:0.6875rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-button--without-label-l{padding:0}.p-button--without-label-l .p-button__label{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;border:0;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}.p-button--without-label-l .p-button__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}}@media (min-width: 1760px){.p-button--with-label-xl{padding:0.6875rem 0.9375rem 0.6875rem 2.4375rem}.p-button--with-label-xl .p-button__label{position:static;width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;clip:auto;-webkit-clip-path:none;clip-path:none}.p-button--with-label-xl .p-button__icon{left:0.6875rem;top:0.6875rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-button--without-label-xl{padding:0}.p-button--without-label-xl .p-button__label{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;border:0;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}.p-button--without-label-xl .p-button__icon´{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}}.p-button__label{display:block;-webkit-box-sizing:border-box;box-sizing:border-box}.p-button__icon{position:absolute;width:1.5rem;height:1.5rem}";
var Button = /** @class */ (function () {
    function Button(hostRef) {
        Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** To remove the element from tab order. */
        this.tabbable = true;
        /** Specifies the type of the button. */
        this.type = 'button';
        /** Disables the button. No events will be triggered while disabled state is active. */
        this.disabled = false;
        /** Disables the button and shows a loading indicator. No events will be triggered while loading state is active. */
        this.loading = false;
        /** The style variant of the button. */
        this.variant = 'secondary';
        /** The icon shown. */
        this.icon = 'arrow-head-right';
        /** A custom URL path to a custom icon. */
        this.iconSource = undefined;
        /** Show or hide label. For better accessibility it is recommended to show the label. */
        this.hideLabel = false;
        /** Adapts the button color depending on the theme. */
        this.theme = 'light';
    }
    Button.prototype.componentDidLoad = function () {
        var _this = this;
        Object(_focusHandling_e515b816_js__WEBPACK_IMPORTED_MODULE_2__["i"])(this.element);
        Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this.element, function () { return _this.type; }, function () { return _this.isDisabled(); });
    };
    Button.prototype.render = function () {
        var buttonClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('button'), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("button--" + this.variant), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["m"])('button-', this.hideLabel, ['without-label', 'with-label']), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("button--theme-" + this.theme));
        var iconClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('button__icon');
        var labelClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('button__label');
        return (Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: buttonClasses, type: this.type, disabled: this.isDisabled(), tabindex: this.tabbable ? 0 : -1, "aria-busy": this.loading && 'true' }, this.loading ? (Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-spinner", { class: iconClasses, size: 'inherit', theme: this.variant === 'tertiary' && this.theme === 'light' ? 'light' : 'dark' })) : (Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-icon", { class: iconClasses, size: 'inherit', name: this.icon, source: this.iconSource, color: 'inherit', "aria-hidden": 'true' })), Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: labelClasses, tag: 'span', color: 'inherit' }, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
    };
    Button.prototype.isDisabled = function () {
        return this.disabled || this.loading;
    };
    Object.defineProperty(Button.prototype, "element", {
        get: function () { return Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    return Button;
}());
Button.style = buttonCss;



/***/ })

};;
//# sourceMappingURL=2.render-page.js.map