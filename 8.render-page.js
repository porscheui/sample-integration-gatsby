exports.ids = [8];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index.esm-37b6c9b0.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/index.esm-37b6c9b0.js ***!
  \**********************************************************************************************/
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

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-textarea-wrapper.entry.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-textarea-wrapper.entry.js ***!
  \****************************************************************************************************/
/*! exports provided: p_textarea_wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_textarea_wrapper", function() { return TextareaWrapper; });
/* harmony import */ var _breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-ff31979d.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-ff31979d.js");
/* harmony import */ var _slotted_styles_9a18361d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slotted-styles-9a18361d.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/slotted-styles-9a18361d.js");
/* harmony import */ var _index_esm_37b6c9b0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.esm-37b6c9b0.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index.esm-37b6c9b0.js");
/* harmony import */ var _transition_listener_302b2719_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transition-listener-302b2719.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/transition-listener-302b2719.js");




var textareaWrapperCss = ":host{display:block}::slotted(textarea){position:relative !important;width:100% !important;min-height:11.75rem;display:block !important;padding:0.625rem !important;margin:0 !important;outline:transparent none !important;outline-offset:3px !important;-webkit-appearance:none !important;-moz-appearance:none !important;appearance:none !important;-webkit-box-sizing:border-box !important;box-sizing:border-box !important;border-width:0 !important;border-top-color:transparent !important;background-color:transparent !important;opacity:1 !important;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif !important;font-weight:400 !important;font-size:1rem !important;line-height:1.5 !important;text-indent:0 !important;color:#000 !important;resize:vertical;-webkit-transition:outline-color 0.24s ease, color 0.24s ease, border-top-color 1ms linear !important;transition:outline-color 0.24s ease, color 0.24s ease, border-top-color 1ms linear !important}::slotted(textarea:focus){outline:#00d5b9 solid 2px !important}::slotted(textarea:-moz-read-only:focus){outline:none !important}::slotted(textarea:read-only:focus){outline:none !important}::slotted(textarea:not(:disabled):-moz-read-only){border-top-color:rgba(255, 255, 255, 0.01) !important;color:#626669 !important}::slotted(textarea:not(:disabled):read-only){border-top-color:rgba(255, 255, 255, 0.01) !important;color:#626669 !important}::slotted(textarea:disabled){border-top-color:rgba(255, 255, 255, 0.02) !important;color:#96989a !important;-webkit-text-fill-color:#96989a !important;cursor:not-allowed !important}.p-textarea-wrapper__label{display:block}.p-textarea-wrapper__label-text,.p-textarea-wrapper__description-text{display:block;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-textarea-wrapper__label-text--disabled,.p-textarea-wrapper__description-text--disabled{color:#96989a}.p-textarea-wrapper__label-text--visible,.p-textarea-wrapper__description-text--visible{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-textarea-wrapper__label-text--hidden,.p-textarea-wrapper__description-text--hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}@media (min-width: 480px){.p-textarea-wrapper__label-text--visible-xs,.p-textarea-wrapper__description-text--visible-xs{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-textarea-wrapper__label-text--hidden-xs,.p-textarea-wrapper__description-text--hidden-xs{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 760px){.p-textarea-wrapper__label-text--visible-s,.p-textarea-wrapper__description-text--visible-s{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-textarea-wrapper__label-text--hidden-s,.p-textarea-wrapper__description-text--hidden-s{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1000px){.p-textarea-wrapper__label-text--visible-m,.p-textarea-wrapper__description-text--visible-m{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-textarea-wrapper__label-text--hidden-m,.p-textarea-wrapper__description-text--hidden-m{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1300px){.p-textarea-wrapper__label-text--visible-l,.p-textarea-wrapper__description-text--visible-l{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-textarea-wrapper__label-text--hidden-l,.p-textarea-wrapper__description-text--hidden-l{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1760px){.p-textarea-wrapper__label-text--visible-xl,.p-textarea-wrapper__description-text--visible-xl{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-textarea-wrapper__label-text--hidden-xl,.p-textarea-wrapper__description-text--hidden-xl{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}.p-textarea-wrapper__description-text{color:#626669}.p-textarea-wrapper__description-text--disabled{color:#96989a}.p-textarea-wrapper__label-text~.p-textarea-wrapper__description-text{margin-top:-0.25rem;padding-bottom:0.5rem}.p-textarea-wrapper__fake-textarea{display:block;padding:0.125rem;background-color:#fff;-webkit-box-shadow:inset 0 0 0 1px #626669;box-shadow:inset 0 0 0 1px #626669;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease, -webkit-box-shadow 0.24s ease}.p-textarea-wrapper__fake-textarea:hover:not(.p-textarea-wrapper__fake-textarea--disabled):not(.p-textarea-wrapper__fake-textarea--readonly):not(.p-textarea-wrapper__fake-textarea--success):not(.p-textarea-wrapper__fake-textarea--error),.p-textarea-wrapper__label-text:hover~.p-textarea-wrapper__fake-textarea:not(.p-textarea-wrapper__fake-textarea--disabled):not(.p-textarea-wrapper__fake-textarea--readonly):not(.p-textarea-wrapper__fake-textarea--success):not(.p-textarea-wrapper__fake-textarea--error){-webkit-box-shadow:inset 0 0 0 1px #000;box-shadow:inset 0 0 0 1px #000}.p-textarea-wrapper__fake-textarea--disabled{-webkit-box-shadow:inset 0 0 0 1px #96989a;box-shadow:inset 0 0 0 1px #96989a;background-color:#fff}.p-textarea-wrapper__fake-textarea--readonly{-webkit-box-shadow:inset 0 0 0 1px #ebebeb;box-shadow:inset 0 0 0 1px #ebebeb;background-color:#ebebeb}.p-textarea-wrapper__fake-textarea--success{-webkit-box-shadow:inset 0 0 0 2px #018a16;box-shadow:inset 0 0 0 2px #018a16}.p-textarea-wrapper__fake-textarea--success:hover,.p-textarea-wrapper__label-text:hover~.p-textarea-wrapper__fake-textarea--success{-webkit-box-shadow:inset 0 0 0 2px #014d0c;box-shadow:inset 0 0 0 2px #014d0c}.p-textarea-wrapper__fake-textarea--error{-webkit-box-shadow:inset 0 0 0 2px #e00000;box-shadow:inset 0 0 0 2px #e00000}.p-textarea-wrapper__fake-textarea--error:hover,.p-textarea-wrapper__label-text:hover~.p-textarea-wrapper__fake-textarea--error{-webkit-box-shadow:inset 0 0 0 2px #a30000;box-shadow:inset 0 0 0 2px #a30000}.p-textarea-wrapper__message{margin-top:0.25rem;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-textarea-wrapper__message--success{color:#018a16}.p-textarea-wrapper__message--error{color:#e00000}.p-textarea-wrapper__message--none{color:#000}";
var TextareaWrapper = /** @class */ (function () {
    function TextareaWrapper(hostRef) {
        var _this = this;
        Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The label text. */
        this.label = '';
        /** The description text. */
        this.description = '';
        /** The validation state. */
        this.state = 'none';
        /** The message styled depending on validation state. */
        this.message = '';
        /** Show or hide label. For better accessibility it is recommended to show the label. */
        this.hideLabel = false;
        this.setState = function () {
            _this.disabled = _this.textarea.disabled;
            _this.readonly = _this.textarea.readOnly;
        };
        this.labelClick = function () {
            _this.textarea.focus();
        };
    }
    TextareaWrapper.prototype.componentWillLoad = function () {
        this.setTextarea();
        this.setAriaAttributes();
        this.setState();
        this.bindStateListener();
        this.addSlottedStyles();
    };
    TextareaWrapper.prototype.componentDidUpdate = function () {
        this.setAriaAttributes();
    };
    TextareaWrapper.prototype.render = function () {
        var _a, _b, _c, _d;
        var labelClasses = Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('textarea-wrapper__label');
        var labelTextClasses = Object.assign((_a = {}, _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('textarea-wrapper__label-text')] = true, _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('textarea-wrapper__label-text--disabled')] = this.disabled, _a), Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["m"])('textarea-wrapper__label-text-', this.hideLabel, ['hidden', 'visible']));
        var descriptionTextClasses = Object.assign((_b = {}, _b[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('textarea-wrapper__description-text')] = true, _b[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('textarea-wrapper__description-text--disabled')] = this.disabled, _b), Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["m"])('textarea-wrapper__description-text-', this.hideLabel, [
            'hidden',
            'visible'
        ]));
        var fakeTextareaClasses = (_c = {},
            _c[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('textarea-wrapper__fake-textarea')] = true,
            _c[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])("textarea-wrapper__fake-textarea--" + this.state)] = true,
            _c[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('textarea-wrapper__fake-textarea--disabled')] = this.disabled,
            _c[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('textarea-wrapper__fake-textarea--readonly')] = this.readonly,
            _c);
        var messageClasses = (_d = {},
            _d[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('textarea-wrapper__message')] = true,
            _d[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])("textarea-wrapper__message--" + this.state)] = true,
            _d);
        return (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: labelClasses }, this.isLabelVisible && (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: labelTextClasses, color: "inherit", tag: "span", onClick: this.labelClick }, this.label || (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "label" }))))), this.isDescriptionVisible && (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: descriptionTextClasses, tag: "span", color: "inherit", size: "x-small", onClick: this.labelClick }, this.description || (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "description" }))))), Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: fakeTextareaClasses }, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))), this.isMessageVisible && (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: messageClasses, color: "inherit", role: this.state === 'error' && 'alert' }, this.message || (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "message" })))))));
    };
    Object.defineProperty(TextareaWrapper.prototype, "isLabelVisible", {
        get: function () {
            return !!this.label || !!this.host.querySelector('[slot="label"]');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextareaWrapper.prototype, "isDescriptionVisible", {
        get: function () {
            return !!this.description || !!this.host.querySelector('[slot="description"]');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextareaWrapper.prototype, "isMessageDefined", {
        get: function () {
            return !!this.message || !!this.host.querySelector('[slot="message"]');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextareaWrapper.prototype, "isMessageVisible", {
        get: function () {
            return ['success', 'error'].includes(this.state) && this.isMessageDefined;
        },
        enumerable: false,
        configurable: true
    });
    TextareaWrapper.prototype.setTextarea = function () {
        this.textarea = this.host.querySelector('textarea');
    };
    /*
     * This is a workaround to improve accessibility because the textarea and the label/description/message text are placed in different DOM.
     * Referencing ID's from outside the component is impossible because the web component’s DOM is separate.
     * We have to wait for full support of the Accessibility Object Model (AOM) to provide the relationship between shadow DOM and slots.
     */
    TextareaWrapper.prototype.setAriaAttributes = function () {
        if (this.label && this.message) {
            this.textarea.setAttribute('aria-label', this.label + ". " + this.message);
        }
        else if (this.label && this.description) {
            this.textarea.setAttribute('aria-label', this.label + ". " + this.description);
        }
        else if (this.label) {
            this.textarea.setAttribute('aria-label', this.label);
        }
        if (this.state === 'error') {
            this.textarea.setAttribute('aria-invalid', 'true');
        }
        else {
            this.textarea.removeAttribute('aria-invalid');
        }
    };
    TextareaWrapper.prototype.bindStateListener = function () {
        Object(_transition_listener_302b2719_js__WEBPACK_IMPORTED_MODULE_3__["t"])(this.textarea, 'border-top-color', this.setState);
    };
    TextareaWrapper.prototype.addSlottedStyles = function () {
        var tagName = this.host.tagName.toLowerCase();
        var style = tagName + " a {\n      outline: none transparent;\n      color: inherit;\n      text-decoration: underline;\n      -webkit-transition: outline-color .24s ease, color .24s ease;\n      transition: outline-color .24s ease, color .24s ease;\n    }\n\n    " + tagName + " a:hover {\n      color: #d5001c;\n    }\n\n    " + tagName + " a:focus {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }\n    ";
        Object(_slotted_styles_9a18361d_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this.host, style);
    };
    Object.defineProperty(TextareaWrapper.prototype, "host", {
        get: function () { return Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return TextareaWrapper;
}());
TextareaWrapper.style = textareaWrapperCss;



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



/***/ }),

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/transition-listener-302b2719.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/transition-listener-302b2719.js ***!
  \********************************************************************************************************/
/*! exports provided: t */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return transitionListener; });
/* harmony import */ var _index_esm_37b6c9b0_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.esm-37b6c9b0.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index.esm-37b6c9b0.js");

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
//# sourceMappingURL=8.render-page.js.map