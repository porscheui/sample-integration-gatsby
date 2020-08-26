exports.ids = [5];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/index.esm-37b6c9b0.js":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/index.esm-37b6c9b0.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return throttle; });
/* eslint-disable no-undefined,no-param-reassign,no-shadow */
/**
 * Throttle execution of a function. Especially useful for rate limiting
 * execution of handlers on events like resize and scroll.
 *
 * @param  {number}    delay -          A zero-or-greater delay in milliseconds. For event callbacks, values around 100 or 250 (or even higher) are most useful.
 * @param  {boolean}   [noTrailing] -   Optional, defaults to false. If noTrailing is true, callback will only execute every `delay` milliseconds while the
 *                                    throttled-function is being called. If noTrailing is false or unspecified, callback will be executed one final time
 *                                    after the last throttled-function call. (After the throttled-function has not been called for `delay` milliseconds,
 *                                    the internal counter is reset).
 * @param  {Function}  callback -       A function to be executed after delay milliseconds. The `this` context and all arguments are passed through, as-is,
 *                                    to `callback` when the throttled-function is executed.
 * @param  {boolean}   [debounceMode] - If `debounceMode` is true (at begin), schedule `clear` to execute after `delay` ms. If `debounceMode` is false (at end),
 *                                    schedule `callback` to execute after `delay` ms.
 *
 * @returns {Function}  A new, throttled, function.
 */
function throttle(delay, noTrailing, callback, debounceMode) {
    /*
     * After wrapper has stopped being called, this timeout ensures that
     * `callback` is executed at the proper times in `throttle` and `end`
     * debounce modes.
     */
    var timeoutID;
    var cancelled = false; // Keep track of the last time `callback` was executed.
    var lastExec = 0; // Function to clear existing timeout
    function clearExistingTimeout() {
        if (timeoutID) {
            clearTimeout(timeoutID);
        }
    } // Function to cancel next exec
    function cancel() {
        clearExistingTimeout();
        cancelled = true;
    } // `noTrailing` defaults to falsy.
    if (typeof noTrailing !== 'boolean') {
        debounceMode = callback;
        callback = noTrailing;
        noTrailing = undefined;
    }
    /*
     * The `wrapper` function encapsulates all of the throttling / debouncing
     * functionality and when executed will limit the rate at which `callback`
     * is executed.
     */
    function wrapper() {
        for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
            arguments_[_key] = arguments[_key];
        }
        var self = this;
        var elapsed = Date.now() - lastExec;
        if (cancelled) {
            return;
        } // Execute `callback` and update the `lastExec` timestamp.
        function exec() {
            lastExec = Date.now();
            callback.apply(self, arguments_);
        }
        /*
         * If `debounceMode` is true (at begin) this is used to clear the flag
         * to allow future `callback` executions.
         */
        function clear() {
            timeoutID = undefined;
        }
        if (debounceMode && !timeoutID) {
            /*
             * Since `wrapper` is being called for the first time and
             * `debounceMode` is true (at begin), execute `callback`.
             */
            exec();
        }
        clearExistingTimeout();
        if (debounceMode === undefined && elapsed > delay) {
            /*
             * In throttle mode, if `delay` time has been exceeded, execute
             * `callback`.
             */
            exec();
        }
        else if (noTrailing !== true) {
            /*
             * In trailing throttle mode, since `delay` time has not been
             * exceeded, schedule `callback` to execute `delay` ms after most
             * recent execution.
             *
             * If `debounceMode` is true (at begin), schedule `clear` to execute
             * after `delay` ms.
             *
             * If `debounceMode` is false (at end), schedule `callback` to
             * execute after `delay` ms.
             */
            timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === undefined ? delay - elapsed : delay);
        }
    }
    wrapper.cancel = cancel; // Return the wrapper function.
    return wrapper;
}



/***/ }),

/***/ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/p-checkbox-wrapper.entry.js":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/p-checkbox-wrapper.entry.js ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: p_checkbox_wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_checkbox_wrapper", function() { return CheckboxWrapper; });
/* harmony import */ var _breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-633ca215.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-633ca215.js");
/* harmony import */ var _slotted_styles_9a18361d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slotted-styles-9a18361d.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/slotted-styles-9a18361d.js");
/* harmony import */ var _index_esm_37b6c9b0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.esm-37b6c9b0.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/index.esm-37b6c9b0.js");
/* harmony import */ var _transition_listener_302b2719_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transition-listener-302b2719.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/transition-listener-302b2719.js");




var checkboxWrapperCss = ":host{display:block}::slotted(input){position:absolute !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important;display:block !important;margin:0 !important;padding:0 !important;-webkit-appearance:none !important;-moz-appearance:none !important;appearance:none !important;border:0 !important;border-top-color:rgba(255, 255, 255, 0) !important;background-color:transparent !important;opacity:1 !important;outline:transparent solid 2px !important;outline-offset:1px !important;cursor:pointer !important;-webkit-transition:outline-color 0.24s ease, border-top-color 1ms linear !important;transition:outline-color 0.24s ease, border-top-color 1ms linear !important}::slotted(input::-ms-check){display:none !important}::slotted(input:focus){outline-color:#00d5b9 !important}::slotted(input:checked){border-top-color:rgba(255, 255, 255, 0.01) !important}::slotted(input:disabled){cursor:not-allowed !important;border-top-color:rgba(255, 255, 255, 0.02) !important}::slotted(input:indeterminate){border-top-color:rgba(255, 255, 255, 0.03) !important}::slotted(input:disabled:checked){border-top-color:rgba(255, 255, 255, 0.04) !important}::slotted(input:disabled:indeterminate){border-top-color:rgba(255, 255, 255, 0.05) !important}::slotted(input:checked:indeterminate){border-top-color:rgba(255, 255, 255, 0.06) !important}::slotted(input:disabled:checked:indeterminate){border-top-color:rgba(255, 255, 255, 0.07) !important}.p-checkbox-wrapper__label{position:relative;display:-ms-flexbox;display:flex}.p-checkbox-wrapper__label-text{-ms-flex-order:1;order:1;display:inline-block;cursor:pointer;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-checkbox-wrapper__label-text--disabled{color:#96989a;cursor:default}.p-checkbox-wrapper__label-text--visible{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-checkbox-wrapper__label-text--hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}@media (min-width: 480px){.p-checkbox-wrapper__label-text--visible-xs{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-checkbox-wrapper__label-text--hidden-xs{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 760px){.p-checkbox-wrapper__label-text--visible-s{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-checkbox-wrapper__label-text--hidden-s{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1000px){.p-checkbox-wrapper__label-text--visible-m{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-checkbox-wrapper__label-text--hidden-m{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1300px){.p-checkbox-wrapper__label-text--visible-l{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-checkbox-wrapper__label-text--hidden-l{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1760px){.p-checkbox-wrapper__label-text--visible-xl{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-checkbox-wrapper__label-text--hidden-xl{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}.p-checkbox-wrapper__fake-checkbox{position:relative;width:1.5rem;height:1.5rem;display:block;-ms-flex-negative:0;flex-shrink:0;background-color:#fff;-webkit-box-shadow:inset 0 0 0 1px #626669;box-shadow:inset 0 0 0 1px #626669;-webkit-transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease, -webkit-box-shadow 0.24s ease}.p-checkbox-wrapper__fake-checkbox:hover:not(.p-checkbox-wrapper__fake-checkbox--disabled):not(.p-checkbox-wrapper__fake-checkbox--success):not(.p-checkbox-wrapper__fake-checkbox--error),.p-checkbox-wrapper__label-text:hover~.p-checkbox-wrapper__fake-checkbox:not(.p-checkbox-wrapper__fake-checkbox--disabled):not(.p-checkbox-wrapper__fake-checkbox--success):not(.p-checkbox-wrapper__fake-checkbox--error){-webkit-box-shadow:inset 0 0 0 1px #000;box-shadow:inset 0 0 0 1px #000}.p-checkbox-wrapper__fake-checkbox--checked{-webkit-box-shadow:inset 0 0 0 1px #323639;box-shadow:inset 0 0 0 1px #323639;background-color:#323639}.p-checkbox-wrapper__fake-checkbox--checked.p-checkbox-wrapper__fake-checkbox--disabled{background-color:#96989a}.p-checkbox-wrapper__fake-checkbox--checked.p-checkbox-wrapper__fake-checkbox--error{background-color:#e00000}.p-checkbox-wrapper__fake-checkbox--checked.p-checkbox-wrapper__fake-checkbox--success{background-color:#018a16}.p-checkbox-wrapper__fake-checkbox--disabled{-webkit-box-shadow:inset 0 0 0 1px #96989a;box-shadow:inset 0 0 0 1px #96989a}.p-checkbox-wrapper__fake-checkbox--error{-webkit-box-shadow:inset 0 0 0 2px #e00000;box-shadow:inset 0 0 0 2px #e00000}.p-checkbox-wrapper__fake-checkbox--error:hover,.p-checkbox-wrapper__label-text:hover~.p-checkbox-wrapper__fake-checkbox--error{-webkit-box-shadow:inset 0 0 0 2px #a30000;box-shadow:inset 0 0 0 2px #a30000}.p-checkbox-wrapper__fake-checkbox--success{-webkit-box-shadow:inset 0 0 0 2px #018a16;box-shadow:inset 0 0 0 2px #018a16}.p-checkbox-wrapper__fake-checkbox--success:hover,.p-checkbox-wrapper__label-text:hover~.p-checkbox-wrapper__fake-checkbox--success{-webkit-box-shadow:inset 0 0 0 2px #014d0c;box-shadow:inset 0 0 0 2px #014d0c}.p-checkbox-wrapper__icon{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;-webkit-transition:opacity 0.24s ease;transition:opacity 0.24s ease}.p-checkbox-wrapper__icon--checked{opacity:1}.p-checkbox-wrapper__message{margin-top:0.25rem;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-checkbox-wrapper__message--success{color:#018a16}.p-checkbox-wrapper__message--error{color:#e00000}";
var CheckboxWrapper = /** @class */ (function () {
    function CheckboxWrapper(hostRef) {
        var _this = this;
        Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The label text. */
        this.label = '';
        /** The validation state. */
        this.state = 'none';
        /** The message styled depending on validation state. */
        this.message = '';
        /** Show or hide label. For better accessibility it's recommended to show the label. */
        this.hideLabel = false;
        this.labelClick = function (event) {
            var _a;
            /**
             * we only want to simulate the checkbox click by label click
             * for real shadow dom, else the native behaviour works out
             * of the box.
             * also we don't want to click to the input, if a link is
             * clicked.
             */
            if (((_a = _this.host.shadowRoot) === null || _a === void 0 ? void 0 : _a.host) && event.target.closest('a') === null) {
                _this.input.focus();
                _this.input.click();
            }
        };
        this.setState = function () {
            _this.checked = _this.input.checked;
            _this.disabled = _this.input.disabled;
            _this.indeterminate = _this.input.indeterminate;
        };
    }
    CheckboxWrapper.prototype.componentWillLoad = function () {
        this.setInput();
        this.setAriaAttributes();
        this.setState();
        this.bindStateListener();
        this.addSlottedStyles();
    };
    CheckboxWrapper.prototype.componentDidUpdate = function () {
        this.setAriaAttributes();
    };
    CheckboxWrapper.prototype.render = function () {
        var _b, _c, _d, _e;
        var labelClasses = Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["c"])('checkbox-wrapper__label');
        var fakeCheckboxClasses = (_b = {},
            _b[Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["c"])('checkbox-wrapper__fake-checkbox')] = true,
            _b[Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["c"])('checkbox-wrapper__fake-checkbox--checked')] = this.checked || this.indeterminate,
            _b[Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["c"])('checkbox-wrapper__fake-checkbox--disabled')] = this.disabled,
            _b[Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["c"])("checkbox-wrapper__fake-checkbox--" + this.state)] = this.state !== 'none',
            _b);
        var iconClasses = (_c = {},
            _c[Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["c"])('checkbox-wrapper__icon')] = true,
            _c[Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["c"])('checkbox-wrapper__icon--checked')] = this.checked || this.indeterminate,
            _c);
        var labelTextClasses = Object.assign((_d = {}, _d[Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["c"])('checkbox-wrapper__label-text')] = true, _d[Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["c"])('checkbox-wrapper__label-text--disabled')] = this.disabled, _d), Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["m"])('checkbox-wrapper__label-text-', this.hideLabel, ['hidden', 'visible']));
        var messageClasses = (_e = {},
            _e[Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["c"])('checkbox-wrapper__message')] = true,
            _e[Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["c"])("checkbox-wrapper__message--" + this.state)] = this.state !== 'none',
            _e);
        return (Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: labelClasses }, this.isLabelVisible && (Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: labelTextClasses, tag: "span", color: "inherit", onClick: this.labelClick }, this.label || (Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "label" }))))), Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: fakeCheckboxClasses }, Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-icon", { class: iconClasses, name: this.indeterminate ? 'minus' : 'check', theme: "dark", size: "inherit", "aria-hidden": "true" }), Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))), this.isMessageVisible && (Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: messageClasses, color: "inherit", role: this.state === 'error' && 'alert' }, this.message || (Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "message" })))))));
    };
    Object.defineProperty(CheckboxWrapper.prototype, "isLabelVisible", {
        get: function () {
            return !!this.label || !!this.host.querySelector('[slot="label"]');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CheckboxWrapper.prototype, "isMessageDefined", {
        get: function () {
            return !!this.message || !!this.host.querySelector('[slot="message"]');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CheckboxWrapper.prototype, "isMessageVisible", {
        get: function () {
            return ['success', 'error'].includes(this.state) && this.isMessageDefined;
        },
        enumerable: false,
        configurable: true
    });
    CheckboxWrapper.prototype.setInput = function () {
        this.input = this.host.querySelector('input[type="checkbox"]');
    };
    /*
     * This is a workaround to improve accessibility because the input and the label/description/message text are placed in different DOM.
     * Referencing ID's from outside the component is impossible because the web component’s DOM is separate.
     * We have to wait for full support of the Accessibility Object Model (AOM) to provide the relationship between shadow DOM and slots
     */
    CheckboxWrapper.prototype.setAriaAttributes = function () {
        if (this.label && this.message) {
            this.input.setAttribute('aria-label', this.label + ". " + this.message);
        }
        else if (this.label) {
            this.input.setAttribute('aria-label', this.label);
        }
        if (this.state === 'error') {
            this.input.setAttribute('aria-invalid', 'true');
        }
        else {
            this.input.removeAttribute('aria-invalid');
        }
    };
    CheckboxWrapper.prototype.bindStateListener = function () {
        Object(_transition_listener_302b2719_js__WEBPACK_IMPORTED_MODULE_3__["t"])(this.input, 'border-top-color', this.setState);
    };
    CheckboxWrapper.prototype.addSlottedStyles = function () {
        var tagName = this.host.tagName.toLowerCase();
        var style = tagName + " a {\n      outline: none transparent;\n      color: inherit;\n      text-decoration: underline;\n      -webkit-transition: outline-color .24s ease, color .24s ease;\n      transition: outline-color .24s ease, color .24s ease;\n    }\n\n    " + tagName + " a:hover {\n      color: #d5001c;\n    }\n\n    " + tagName + " a:focus {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }";
        Object(_slotted_styles_9a18361d_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this.host, style);
    };
    Object.defineProperty(CheckboxWrapper.prototype, "host", {
        get: function () { return Object(_breakpointCustomizable_633ca215_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return CheckboxWrapper;
}());
CheckboxWrapper.style = checkboxWrapperCss;



/***/ }),

/***/ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/slotted-styles-9a18361d.js":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/slotted-styles-9a18361d.js ***!
  \********************************************************************************************************************************************************/
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



/***/ }),

/***/ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/transition-listener-302b2719.js":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/transition-listener-302b2719.js ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transitionListener; });
/* harmony import */ var _index_esm_37b6c9b0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.esm-37b6c9b0.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/index.esm-37b6c9b0.js");

/**
 * Listens to the end of a CSS transition and calls a throttled callback and calls
 * the callback once initially.
 * @param tag
 * @param transitionProperty
 * @param callback
 * @returns void
 */
var transitionListener = function (tag, transitionProperty, callback) {
    window.requestAnimationFrame(function () {
        tag.addEventListener('transitionend', Object(_index_esm_37b6c9b0_js__WEBPACK_IMPORTED_MODULE_0__["t"])(50, function (e) {
            if (e.propertyName === transitionProperty) {
                callback();
            }
        }));
        callback();
    });
};



/***/ })

};;
//# sourceMappingURL=5.render-page.js.map