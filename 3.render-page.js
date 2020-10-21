exports.ids = [3];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/buttonHandling-8f4ca036.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/buttonHandling-8f4ca036.js ***!
  \***************************************************************************************************/
/*! exports provided: h, i */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return handleButtonEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return improveButtonHandlingForCustomElement; });
var improveButtonHandlingForCustomElement = function (element, getType, getDisabled) {
    element.addEventListener('click', function (event) { return fixEventTarget(event, element); }, true);
    element.addEventListener('click', function (event) { return handleButtonEvent(event, element, getType, getDisabled); });
};
var handleButtonEvent = function (event, element, getType, getDisabled) {
    // Why? That's why: https://www.hjorthhansen.dev/shadow-dom-and-forms/
    var form = element.closest('form');
    var type = getType();
    var disabled = getDisabled();
    if (form && !disabled) {
        /**
         * we've to wait if someone calls preventDefault on the event
         * then we shouldn't submit the form
         */
        window.setTimeout(function () {
            if (!event.defaultPrevented) {
                var fakeButton = document.createElement('button');
                fakeButton.type = type;
                fakeButton.style.display = 'none';
                form.appendChild(fakeButton);
                fakeButton.addEventListener('click', function (fakeButtonEvent) {
                    fakeButtonEvent.stopPropagation();
                });
                fakeButton.click();
                fakeButton.remove();
            }
        }, 1);
    }
};
/**
 * IE11/Edge (not chromium based) workaround to
 * fix the event target of click events (which normally
 * shadow dom takes care of)
 */
var fixEventTarget = function (event, element) {
    if (event.target !== element) {
        event.stopPropagation();
        event.preventDefault();
        element.click();
    }
};



/***/ }),

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

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-text-field-wrapper.entry.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-text-field-wrapper.entry.js ***!
  \******************************************************************************************************/
/*! exports provided: p_text_field_wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_text_field_wrapper", function() { return TextFieldWrapper; });
/* harmony import */ var _breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-ff31979d.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-ff31979d.js");
/* harmony import */ var _buttonHandling_8f4ca036_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonHandling-8f4ca036.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/buttonHandling-8f4ca036.js");
/* harmony import */ var _slotted_styles_9a18361d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slotted-styles-9a18361d.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/slotted-styles-9a18361d.js");
/* harmony import */ var _index_esm_37b6c9b0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.esm-37b6c9b0.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index.esm-37b6c9b0.js");
/* harmony import */ var _transition_listener_302b2719_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transition-listener-302b2719.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/transition-listener-302b2719.js");





var textFieldWrapperCss = ":host{display:block}::slotted(input){position:absolute !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important;display:block !important;padding:0.75rem !important;margin:0 !important;outline:transparent none !important;outline-offset:1px !important;-webkit-appearance:none !important;-moz-appearance:none !important;appearance:none !important;-webkit-box-sizing:border-box !important;box-sizing:border-box !important;border-width:0 !important;border-top-color:transparent !important;background-color:transparent !important;opacity:1 !important;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif !important;font-weight:400 !important;font-size:1rem !important;line-height:1.5 !important;text-indent:0 !important;color:#000 !important;-webkit-transition:outline-color 0.24s ease, color 0.24s ease, border-top-color 1ms linear !important;transition:outline-color 0.24s ease, color 0.24s ease, border-top-color 1ms linear !important}::slotted(input:focus){outline:#00d5b9 solid 2px !important}::slotted(input:-moz-read-only:focus){outline:none !important}::slotted(input:read-only:focus){outline:none !important}::slotted(input:not(:disabled):-moz-read-only){border-top-color:rgba(255, 255, 255, 0.01) !important;color:#626669 !important}::slotted(input:not(:disabled):read-only){border-top-color:rgba(255, 255, 255, 0.01) !important;color:#626669 !important}::slotted(input:disabled){border-top-color:rgba(255, 255, 255, 0.02) !important;color:#96989a !important;-webkit-text-fill-color:#96989a !important;cursor:not-allowed !important}::slotted(input[type=number]){-webkit-appearance:none !important;-moz-appearance:textfield !important}::slotted(input[type=number]::-webkit-outer-spin-button),::slotted(input[type=number]::-webkit-inner-spin-button){-webkit-appearance:none !important;-moz-appearance:none !important;appearance:none !important;margin:0 !important}.p-text-field-wrapper__container{position:relative;display:block}.p-text-field-wrapper__label{display:block}.p-text-field-wrapper__label-text,.p-text-field-wrapper__description-text{display:block;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-text-field-wrapper__label-text--disabled,.p-text-field-wrapper__description-text--disabled{color:#96989a}.p-text-field-wrapper__label-text--visible,.p-text-field-wrapper__description-text--visible{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-text-field-wrapper__label-text--hidden,.p-text-field-wrapper__description-text--hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}@media (min-width: 480px){.p-text-field-wrapper__label-text--visible-xs,.p-text-field-wrapper__description-text--visible-xs{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-text-field-wrapper__label-text--hidden-xs,.p-text-field-wrapper__description-text--hidden-xs{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 760px){.p-text-field-wrapper__label-text--visible-s,.p-text-field-wrapper__description-text--visible-s{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-text-field-wrapper__label-text--hidden-s,.p-text-field-wrapper__description-text--hidden-s{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1000px){.p-text-field-wrapper__label-text--visible-m,.p-text-field-wrapper__description-text--visible-m{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-text-field-wrapper__label-text--hidden-m,.p-text-field-wrapper__description-text--hidden-m{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1300px){.p-text-field-wrapper__label-text--visible-l,.p-text-field-wrapper__description-text--visible-l{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-text-field-wrapper__label-text--hidden-l,.p-text-field-wrapper__description-text--hidden-l{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1760px){.p-text-field-wrapper__label-text--visible-xl,.p-text-field-wrapper__description-text--visible-xl{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-text-field-wrapper__label-text--hidden-xl,.p-text-field-wrapper__description-text--hidden-xl{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}.p-text-field-wrapper__description-text{color:#626669}.p-text-field-wrapper__description-text--disabled{color:#96989a}.p-text-field-wrapper__label-text~.p-text-field-wrapper__description-text{margin-top:-0.25rem;padding-bottom:0.5rem}.p-text-field-wrapper__fake-input{position:relative;width:100%;height:3rem;display:block;background-color:#fff;-webkit-box-shadow:inset 0 0 0 1px #626669;box-shadow:inset 0 0 0 1px #626669;-webkit-transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease, -webkit-box-shadow 0.24s ease}.p-text-field-wrapper__fake-input:hover:not(.p-text-field-wrapper__fake-input--disabled):not(.p-text-field-wrapper__fake-input--readonly):not(.p-text-field-wrapper__fake-input--success):not(.p-text-field-wrapper__fake-input--error),.p-text-field-wrapper__label-text:hover~.p-text-field-wrapper__fake-input:not(.p-text-field-wrapper__fake-input--disabled):not(.p-text-field-wrapper__fake-input--readonly):not(.p-text-field-wrapper__fake-input--success):not(.p-text-field-wrapper__fake-input--error){-webkit-box-shadow:inset 0 0 0 1px #000;box-shadow:inset 0 0 0 1px #000}.p-text-field-wrapper__fake-input--disabled{-webkit-box-shadow:inset 0 0 0 1px #96989a;box-shadow:inset 0 0 0 1px #96989a;background-color:#fff}.p-text-field-wrapper__fake-input--readonly{-webkit-box-shadow:inset 0 0 0 1px #ebebeb;box-shadow:inset 0 0 0 1px #ebebeb;background-color:#ebebeb}.p-text-field-wrapper__fake-input--success{-webkit-box-shadow:inset 0 0 0 2px #018a16;box-shadow:inset 0 0 0 2px #018a16}.p-text-field-wrapper__fake-input--success:hover,.p-text-field-wrapper__label-text:hover~.p-text-field-wrapper__fake-input--success{-webkit-box-shadow:inset 0 0 0 2px #014d0c;box-shadow:inset 0 0 0 2px #014d0c}.p-text-field-wrapper__fake-input--error{-webkit-box-shadow:inset 0 0 0 2px #e00000;box-shadow:inset 0 0 0 2px #e00000}.p-text-field-wrapper__fake-input--error:hover,.p-text-field-wrapper__label-text:hover~.p-text-field-wrapper__fake-input--error{-webkit-box-shadow:inset 0 0 0 2px #a30000;box-shadow:inset 0 0 0 2px #a30000}.p-text-field-wrapper__message{margin-top:0.25rem;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-text-field-wrapper__message--success{color:#018a16}.p-text-field-wrapper__message--error{color:#e00000}.p-text-field-wrapper__button{position:absolute;bottom:0;right:0;margin:0;width:3rem;height:3rem;padding:0.75rem;-webkit-box-sizing:border-box;box-sizing:border-box;outline:transparent none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;text-decoration:none;background:transparent;cursor:pointer;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-text-field-wrapper__button::-moz-focus-inner{border:0}.p-text-field-wrapper__button:hover{color:#d5001c}.p-text-field-wrapper__button:active{color:#d5001c}.p-text-field-wrapper__button:focus{color:#00d5b9}.p-text-field-wrapper__button:disabled{color:#96989a;cursor:not-allowed !important}";
var TextFieldWrapper = /** @class */ (function () {
    function TextFieldWrapper(hostRef) {
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
        /** Show or hide label and description text. For better accessibility it is recommended to show the label. */
        this.hideLabel = false;
        this.showPassword = false;
        this.searchButtonType = 'submit';
        this.setState = function () {
            _this.disabled = _this.input.disabled;
            _this.readonly = _this.input.readOnly;
        };
        this.labelClick = function () {
            _this.input.focus();
        };
        this.togglePassword = function () {
            _this.input.type = _this.input.type === 'password' ? 'text' : 'password';
            _this.showPassword = !_this.showPassword;
            _this.labelClick();
        };
        this.onSubmitHandler = function (event) {
            if (_this.isInputTypeSearch) {
                Object(_buttonHandling_8f4ca036_js__WEBPACK_IMPORTED_MODULE_1__["h"])(event, _this.host, function () { return _this.searchButtonType; }, function () { return _this.disabled; });
            }
        };
    }
    TextFieldWrapper.prototype.componentWillLoad = function () {
        this.setInput();
        this.setAriaAttributes();
        this.setState();
        this.updatePasswordToggleable();
        this.initInputTypeSearch();
        this.bindStateListener();
        this.addSlottedStyles();
    };
    TextFieldWrapper.prototype.componentDidUpdate = function () {
        this.setAriaAttributes();
    };
    TextFieldWrapper.prototype.render = function () {
        var _a, _b, _c, _d;
        var containerClasses = Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text-field-wrapper__container');
        var labelClasses = Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text-field-wrapper__label');
        var labelTextClasses = Object.assign((_a = {}, _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text-field-wrapper__label-text')] = true, _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text-field-wrapper__label-text--disabled')] = this.disabled, _a), Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["m"])('text-field-wrapper__label-text-', this.hideLabel, ['hidden', 'visible']));
        var descriptionTextClasses = Object.assign((_b = {}, _b[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text-field-wrapper__description-text')] = true, _b[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text-field-wrapper__description-text--disabled')] = this.disabled, _b), Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["m"])('text-field-wrapper__description-text-', this.hideLabel, [
            'hidden',
            'visible'
        ]));
        var fakeInputClasses = (_c = {},
            _c[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text-field-wrapper__fake-input')] = true,
            _c[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])("text-field-wrapper__fake-input--" + this.state)] = this.state !== 'none',
            _c[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text-field-wrapper__fake-input--disabled')] = this.disabled,
            _c[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text-field-wrapper__fake-input--readonly')] = this.readonly,
            _c);
        var buttonClasses = Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text-field-wrapper__button');
        var messageClasses = (_d = {},
            _d[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text-field-wrapper__message')] = true,
            _d[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])("text-field-wrapper__message--" + this.state)] = this.state !== 'none',
            _d);
        return (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: containerClasses }, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: labelClasses }, this.isLabelVisible && (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: labelTextClasses, tag: "span", color: "inherit", onClick: this.labelClick }, this.label || (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "label" }))))), this.isDescriptionVisible && (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: descriptionTextClasses, tag: "span", color: "inherit", size: "x-small", onClick: this.labelClick }, this.description || (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "description" }))))), Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: fakeInputClasses }, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))), this.isPasswordToggleable && (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: "button", class: buttonClasses, onClick: this.togglePassword, disabled: this.disabled }, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-icon", { name: this.showPassword ? 'view-off' : 'view', color: "inherit" }))), this.isInputTypeSearch && (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { onClick: this.onSubmitHandler, type: "submit", class: buttonClasses, disabled: this.disabled || this.readonly }, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-icon", { name: "search", color: "inherit" })))), this.isMessageVisible && (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: messageClasses, color: "inherit", role: this.state === 'error' && 'alert' }, this.message || (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "message" })))))));
    };
    Object.defineProperty(TextFieldWrapper.prototype, "isLabelVisible", {
        get: function () {
            return !!this.label || !!this.host.querySelector('[slot="label"]');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextFieldWrapper.prototype, "isDescriptionVisible", {
        get: function () {
            return !!this.description || !!this.host.querySelector('[slot="description"]');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextFieldWrapper.prototype, "isMessageDefined", {
        get: function () {
            return !!this.message || !!this.host.querySelector('[slot="message"]');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TextFieldWrapper.prototype, "isMessageVisible", {
        get: function () {
            return ['success', 'error'].includes(this.state) && this.isMessageDefined;
        },
        enumerable: false,
        configurable: true
    });
    TextFieldWrapper.prototype.setInput = function () {
        this.input = this.host.querySelector('input');
    };
    /*
     * This is a workaround to improve accessibility because the input and the label/description/message text are placed in different DOM.
     * Referencing ID's from outside the component is impossible because the web component’s DOM is separate.
     * We have to wait for full support of the Accessibility Object Model (AOM) to provide the relationship between shadow DOM and slots
     */
    TextFieldWrapper.prototype.setAriaAttributes = function () {
        if (this.label && this.message) {
            this.input.setAttribute('aria-label', this.label + ". " + this.message);
        }
        else if (this.label && this.description) {
            this.input.setAttribute('aria-label', this.label + ". " + this.description);
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
    TextFieldWrapper.prototype.bindStateListener = function () {
        Object(_transition_listener_302b2719_js__WEBPACK_IMPORTED_MODULE_4__["t"])(this.input, 'border-top-color', this.setState);
    };
    TextFieldWrapper.prototype.updatePasswordToggleable = function () {
        this.isPasswordToggleable = this.input.type === 'password';
        if (this.isPasswordToggleable) {
            this.input.style.cssText = 'padding-right: 3rem !important';
        }
    };
    TextFieldWrapper.prototype.initInputTypeSearch = function () {
        this.isInputTypeSearch = this.input.type === 'search';
        if (this.isInputTypeSearch) {
            this.input.style.cssText = 'padding-right: 3rem !important';
        }
    };
    TextFieldWrapper.prototype.addSlottedStyles = function () {
        var tagName = this.host.tagName.toLowerCase();
        var style = tagName + " a {\n      outline: none transparent;\n      color: inherit;\n      text-decoration: underline;\n      -webkit-transition: outline-color .24s ease, color .24s ease;\n      transition: outline-color .24s ease, color .24s ease;\n    }\n\n    " + tagName + " a:hover {\n      color: #d5001c;\n    }\n\n    " + tagName + " a:focus {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }\n\n    " + tagName + " input::-webkit-outer-spin-button {\n      appearance: none !important;\n      -webkit-appearance: none !important;\n    }\n\n    " + tagName + " input::-webkit-inner-spin-button {\n      appearance: none !important;\n      -webkit-appearance: none !important;\n    }\n\n    " + tagName + " input[type=password]::-webkit-contacts-auto-fill-button,\n    " + tagName + " input[type=password]::-webkit-credentials-auto-fill-button {\n      margin-right: 2rem;\n    }\n\n    " + tagName + " input[type=search]::-webkit-search-cancel-button {\n      margin-right: 2rem;\n    }\n    ";
        Object(_slotted_styles_9a18361d_js__WEBPACK_IMPORTED_MODULE_2__["i"])(this.host, style);
    };
    Object.defineProperty(TextFieldWrapper.prototype, "host", {
        get: function () { return Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return TextFieldWrapper;
}());
TextFieldWrapper.style = textFieldWrapperCss;



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
//# sourceMappingURL=3.render-page.js.map