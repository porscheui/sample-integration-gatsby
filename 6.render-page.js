exports.ids = [6];
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

/***/ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/p-select-wrapper.entry.js":
/*!*******************************************************************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/p-select-wrapper.entry.js ***!
  \*******************************************************************************************************************************************************/
/*! exports provided: p_select_wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_select_wrapper", function() { return SelectWrapper; });
/* harmony import */ var _breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-063d6106.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-063d6106.js");
/* harmony import */ var _slotted_styles_9a18361d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slotted-styles-9a18361d.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/slotted-styles-9a18361d.js");
/* harmony import */ var _index_esm_37b6c9b0_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.esm-37b6c9b0.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/index.esm-37b6c9b0.js");
/* harmony import */ var _transition_listener_302b2719_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transition-listener-302b2719.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/transition-listener-302b2719.js");
/* harmony import */ var _index_45be8764_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index-45be8764.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/index-45be8764.js");
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};





var isTouchDevice = function () {
    if (typeof window === 'undefined') {
        return;
    }
    return !!(('ontouchstart' in window) ||
        window.navigator.maxTouchPoints > 0);
};
var selectWrapperCss = ":host{display:block}::slotted(select){position:absolute !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important;display:block !important;padding:0.75rem 3rem 0.75rem 0.75rem !important;margin:0 !important;outline:transparent none !important;outline-offset:1px !important;-webkit-appearance:none !important;-moz-appearance:none !important;appearance:none !important;-webkit-box-sizing:border-box !important;box-sizing:border-box !important;border-width:0 !important;border-top-color:transparent !important;background-color:transparent !important;opacity:1 !important;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif !important;font-weight:400 !important;font-size:1rem !important;line-height:1.5 !important;color:#000 !important;text-indent:0 !important;cursor:pointer !important;-webkit-transition:outline-color 0.24s ease, color 0.24s ease, border-top-color 1ms linear !important;transition:outline-color 0.24s ease, color 0.24s ease, border-top-color 1ms linear !important}::slotted(select:-moz-focusring){color:transparent !important;text-shadow:0 0 0 #000 !important}::slotted(select::-ms-expand){display:none !important}::slotted(select:focus::-ms-value){background-color:transparent !important;color:#000 !important}::slotted(select:focus){outline:#00d5b9 solid 2px !important}::slotted(select:disabled){border-top-color:rgba(255, 255, 255, 0.01) !important;color:#96989a !important;cursor:not-allowed !important}.p-select-wrapper__label{display:block;position:relative}.p-select-wrapper__label-text,.p-select-wrapper__description-text{display:block;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-select-wrapper__label-text--disabled,.p-select-wrapper__description-text--disabled{color:#96989a}.p-select-wrapper__label-text--visible,.p-select-wrapper__description-text--visible{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden,.p-select-wrapper__description-text--hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}@media (min-width: 480px){.p-select-wrapper__label-text--visible-xs,.p-select-wrapper__description-text--visible-xs{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden-xs,.p-select-wrapper__description-text--hidden-xs{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 760px){.p-select-wrapper__label-text--visible-s,.p-select-wrapper__description-text--visible-s{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden-s,.p-select-wrapper__description-text--hidden-s{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1000px){.p-select-wrapper__label-text--visible-m,.p-select-wrapper__description-text--visible-m{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden-m,.p-select-wrapper__description-text--hidden-m{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1300px){.p-select-wrapper__label-text--visible-l,.p-select-wrapper__description-text--visible-l{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden-l,.p-select-wrapper__description-text--hidden-l{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1760px){.p-select-wrapper__label-text--visible-xl,.p-select-wrapper__description-text--visible-xl{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden-xl,.p-select-wrapper__description-text--hidden-xl{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}.p-select-wrapper__description-text{color:#626669}.p-select-wrapper__description-text--disabled{color:#96989a}.p-select-wrapper__label-text~.p-select-wrapper__description-text{margin-top:-0.25rem;padding-bottom:0.5rem}.p-select-wrapper__fake-select{position:relative;width:100%;height:3rem;display:block;background-color:#fff;-webkit-box-shadow:inset 0 0 0 1px #626669;box-shadow:inset 0 0 0 1px #626669;-webkit-transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease, -webkit-box-shadow 0.24s ease}.p-select-wrapper__fake-select:hover:not(.p-select-wrapper__fake-select--disabled):not(.p-select-wrapper__fake-select--success):not(.p-select-wrapper__fake-select--error),.p-select-wrapper__label-text:hover~.p-select-wrapper__fake-select:not(.p-select-wrapper__fake-select--disabled):not(.p-select-wrapper__fake-select--success):not(.p-select-wrapper__fake-select--error){-webkit-box-shadow:inset 0 0 0 1px #000;box-shadow:inset 0 0 0 1px #000}.p-select-wrapper__fake-select--disabled{-webkit-box-shadow:inset 0 0 0 1px #96989a;box-shadow:inset 0 0 0 1px #96989a;background-color:#fff}.p-select-wrapper__fake-select--success{-webkit-box-shadow:inset 0 0 0 2px #018a16;box-shadow:inset 0 0 0 2px #018a16}.p-select-wrapper__fake-select--success:hover,.p-select-wrapper__label-text:hover~.p-select-wrapper__fake-select--success{-webkit-box-shadow:inset 0 0 0 2px #014d0c;box-shadow:inset 0 0 0 2px #014d0c}.p-select-wrapper__fake-select--error{-webkit-box-shadow:inset 0 0 0 2px #e00000;box-shadow:inset 0 0 0 2px #e00000}.p-select-wrapper__fake-select--error:hover,.p-select-wrapper__label-text:hover~.p-select-wrapper__fake-select--error{-webkit-box-shadow:inset 0 0 0 2px #a30000;box-shadow:inset 0 0 0 2px #a30000}.p-select-wrapper__fake-option-list{font-size:1rem;line-height:1.5;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:400;position:absolute;z-index:1;border:1px solid #626669;border-top-color:#c9cacb;left:0;right:0;top:calc(100% - 1px);max-height:200px;overflow-y:auto;background-color:#fff;scroll-behavior:smooth;scrollbar-width:thin;scrollbar-color:auto}.p-select-wrapper__fake-option-list::-webkit-scrollbar{-webkit-appearance:none;width:6px}.p-select-wrapper__fake-option-list::-webkit-scrollbar-thumb{border-radius:4px;background-color:rgba(0, 0, 0, 0.4)}.p-select-wrapper__fake-option-list::after{content:\"\";display:block;height:0.25rem}.p-select-wrapper__fake-option-list:focus{outline:none}.p-select-wrapper__fake-option-list--hidden{display:block;opacity:0;overflow:hidden;height:1px}.p-select-wrapper__fake-option{position:relative;display:block;padding:0.5rem 0.75rem;cursor:pointer;color:#000;-webkit-transition:color 0.24s ease, background-color 0.24s ease;transition:color 0.24s ease, background-color 0.24s ease}.p-select-wrapper__fake-option:not([aria-disabled]):hover{color:#d5001c}.p-select-wrapper__fake-option:focus{outline:#00d5b9 solid 2px}.p-select-wrapper__fake-option--selected{color:#d5001c;cursor:default;pointer-events:none;padding-right:2rem}.p-select-wrapper__fake-option--highlighted:not(.p-select-wrapper__fake-option--selected){color:#d5001c;background-color:#ebebeb}.p-select-wrapper__fake-option--disabled{color:#96989a;cursor:not-allowed}.p-select-wrapper__fake-option-icon{position:absolute;right:0.75rem}.p-select-wrapper__fake-optgroup-label{display:block;padding:0.5rem 0.75rem;margin-top:0.5rem;font-weight:700}.p-select-wrapper__fake-optgroup-label~.p-select-wrapper__fake-option{padding-left:1.5rem}.p-select-wrapper__icon{position:absolute;top:0.75rem;right:0.75rem;color:#000;-webkit-transition:-webkit-transform 0.24s ease;transition:-webkit-transform 0.24s ease;transition:transform 0.24s ease;transition:transform 0.24s ease, -webkit-transform 0.24s ease}.p-select-wrapper__icon--disabled{color:#96989a}.p-select-wrapper__icon--opened{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.p-select-wrapper__message{margin-top:0.25rem;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-select-wrapper__message--success{color:#018a16}.p-select-wrapper__message--error{color:#e00000}";
var SelectWrapper = /** @class */ (function () {
    function SelectWrapper(hostRef) {
        var _this = this;
        Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
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
        this.fakeOptionListHidden = true;
        this.optionDisabled = [];
        this.isTouch = isTouchDevice();
        this.setState = function () {
            _this.disabled = _this.select.disabled;
        };
        this.labelClick = function () {
            _this.select.focus();
        };
        this.setOptionList = function () {
            _this.options = _this.select.querySelectorAll('option');
            _this.optionSelected = _this.select.selectedIndex;
            _this.setOptionsDisabled();
        };
        this.setOptionsDisabled = function () {
            _this.optionDisabled.length = 0;
            _this.options.forEach(function (item, key) {
                if (item.hasAttribute('disabled')) {
                    _this.optionDisabled = __spreadArrays(_this.optionDisabled, [key]);
                }
            });
        };
        this.setOptionSelected = function (key) {
            _this.select.selectedIndex = key;
            _this.optionSelected = key;
            _this.optionHighlighted = key;
            _this.fakeOptionListHidden = true;
            // IE11 workaround for dispatchEvent
            var event;
            if (typeof Event === 'function') {
                event = new Event('change', { bubbles: true });
            }
            else {
                event = document.createEvent('Event');
                event.initEvent('change', true, false);
            }
            _this.select.dispatchEvent(event);
            _this.select.focus();
        };
    }
    SelectWrapper.prototype.componentWillLoad = function () {
        this.initSelect();
        this.setAriaAttributes();
        this.setState();
        this.bindStateListener();
        this.addSlottedStyles();
        if (!this.isTouch) {
            this.observeSelect();
            this.setOptionList();
            this.select.addEventListener('mousedown', this.handleMouseEvents.bind(this));
            this.select.addEventListener('keydown', this.handleKeyboardEvents.bind(this));
            this.optionHighlighted = this.optionSelected;
            if (typeof document !== 'undefined') {
                document.addEventListener('mousedown', this.handleClickOutside.bind(this), false);
            }
        }
    };
    SelectWrapper.prototype.componentDidUpdate = function () {
        this.setAriaAttributes();
    };
    SelectWrapper.prototype.componentDidUnload = function () {
        if (!this.isTouch) {
            this.selectObserver.disconnect();
            this.select.removeEventListener('mousedown', this.handleMouseEvents.bind(this));
            this.select.removeEventListener('keydown', this.handleKeyboardEvents.bind(this));
            if (typeof document !== 'undefined') {
                document.removeEventListener('mousedown', this.handleClickOutside.bind(this), false);
            }
        }
    };
    SelectWrapper.prototype.render = function () {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var _this = this;
        var labelClasses = Object(_index_45be8764_js__WEBPACK_IMPORTED_MODULE_4__["c"])(Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('select-wrapper__label'));
        var labelTextClasses = Object(_index_45be8764_js__WEBPACK_IMPORTED_MODULE_4__["c"])(Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('select-wrapper__label-text'), Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["m"])('select-wrapper__label-text-', this.hideLabel, ['hidden', 'visible']), (_a = {}, _a[Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('select-wrapper__label-text--disabled')] = this.disabled, _a));
        var descriptionTextClasses = Object(_index_45be8764_js__WEBPACK_IMPORTED_MODULE_4__["c"])(Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('select-wrapper__description-text'), Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["m"])('select-wrapper__description-text-', this.hideLabel, ['hidden', 'visible']), (_b = {}, _b[Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('select-wrapper__description-text--disabled')] = this.disabled, _b));
        var fakeSelectClasses = Object(_index_45be8764_js__WEBPACK_IMPORTED_MODULE_4__["c"])(Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('select-wrapper__fake-select'), (_c = {}, _c[Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('select-wrapper__fake-select--disabled')] = this.disabled, _c), (_d = {}, _d[Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])("select-wrapper__fake-select--" + this.state)] = this.state !== 'none', _d));
        var fakeOptionListClasses = Object(_index_45be8764_js__WEBPACK_IMPORTED_MODULE_4__["c"])(Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('select-wrapper__fake-option-list'), (_e = {},
            _e[Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('select-wrapper__fake-option-list--hidden')] = this.fakeOptionListHidden,
            _e));
        var iconClasses = Object(_index_45be8764_js__WEBPACK_IMPORTED_MODULE_4__["c"])(Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('select-wrapper__icon'), (_f = {}, _f[Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('select-wrapper__icon--disabled')] = this.disabled, _f), (_g = {}, _g[Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('select-wrapper__icon--opened')] = !this.fakeOptionListHidden, _g));
        var messageClasses = Object(_index_45be8764_js__WEBPACK_IMPORTED_MODULE_4__["c"])(Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('select-wrapper__message'), (_h = {},
            _h[Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])("select-wrapper__message--" + this.state)] = this.state !== 'none',
            _h));
        return (Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: labelClasses }, Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", null, this.isLabelVisible && (Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: labelTextClasses, tag: "span", color: "inherit", onClick: this.labelClick }, this.label || (Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "label" }))))), this.isDescriptionVisible && (Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: descriptionTextClasses, tag: "span", color: "inherit", size: "x-small", onClick: this.labelClick }, this.description || (Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "description" }))))), Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: fakeSelectClasses }, Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-icon", { class: iconClasses, name: "arrow-head-down", color: "inherit" }), Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))), !this.isTouch && (Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: fakeOptionListClasses, role: "listbox", "aria-activedescendant": "option-" + this.optionSelected, tabIndex: -1, "aria-expanded": this.fakeOptionListHidden ? 'false' : 'true', "aria-labelledby": this.label, ref: function (el) { return (_this.fakeOptionListNode = el); } }, this.createFakeOptionList()))), this.isMessageVisible && (Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: messageClasses, color: "inherit", role: this.state === 'error' && 'alert' }, this.message || (Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "message" })))))));
    };
    Object.defineProperty(SelectWrapper.prototype, "isLabelVisible", {
        get: function () {
            return !!this.label || !!this.host.querySelector('[slot="label"]');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectWrapper.prototype, "isDescriptionVisible", {
        get: function () {
            return !!this.description || !!this.host.querySelector('[slot="description"]');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectWrapper.prototype, "isMessageDefined", {
        get: function () {
            return !!this.message || !!this.host.querySelector('[slot="message"]');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SelectWrapper.prototype, "isMessageVisible", {
        get: function () {
            return ['success', 'error'].includes(this.state) && this.isMessageDefined;
        },
        enumerable: false,
        configurable: true
    });
    /*
     * <START NATIVE SELECT>
     */
    SelectWrapper.prototype.initSelect = function () {
        this.select = this.host.querySelector('select');
    };
    /*
     * This is a workaround to improve accessibility because the select and the label/description/message text are placed in different DOM.
     * Referencing ID's from outside the component is impossible because the web component’s DOM is separate.
     * We have to wait for full support of the Accessibility Object Model (AOM) to provide the relationship between shadow DOM and slots.
     */
    SelectWrapper.prototype.setAriaAttributes = function () {
        if (this.label && this.message) {
            this.select.setAttribute('aria-label', this.label + ". " + this.message);
        }
        else if (this.label && this.description) {
            this.select.setAttribute('aria-label', this.label + ". " + this.description);
        }
        else if (this.label) {
            this.select.setAttribute('aria-label', this.label);
        }
        if (this.state === 'error') {
            this.select.setAttribute('aria-invalid', 'true');
        }
        else {
            this.select.removeAttribute('aria-invalid');
        }
    };
    SelectWrapper.prototype.bindStateListener = function () {
        Object(_transition_listener_302b2719_js__WEBPACK_IMPORTED_MODULE_3__["t"])(this.select, 'border-top-color', this.setState);
    };
    /*
     * <START CUSTOM SELECT DROPDOWN>
     */
    SelectWrapper.prototype.observeSelect = function () {
        var _this = this;
        this.selectObserver = new MutationObserver(function (mutations) {
            mutations.filter(function (mutation) { return mutation.type === 'childList'; }).forEach(_this.setOptionList);
            mutations.filter(function (mutation) { return mutation.type === 'attributes'; }).forEach(_this.setOptionsDisabled);
        });
        var config = { childList: true, subtree: true, attributes: true, attributeFilter: ['disabled'] };
        this.selectObserver.observe(this.select, config);
    };
    SelectWrapper.prototype.handleClickOutside = function (e) {
        if (this.host.contains(e.target)) {
            return;
        }
        this.fakeOptionListHidden = true;
    };
    SelectWrapper.prototype.handleMouseEvents = function (e) {
        e.preventDefault();
        this.select.focus();
        this.fakeOptionListHidden = this.fakeOptionListHidden === false;
    };
    SelectWrapper.prototype.handleKeyboardEvents = function (e) {
        var key = e.key;
        switch (key) {
            case 'ArrowUp':
            case 'Up':
                e.preventDefault();
                this.fakeOptionListHidden = false;
                this.cycleFakeOptionList('up');
                break;
            case 'ArrowDown':
            case 'Down':
                e.preventDefault();
                this.fakeOptionListHidden = false;
                this.cycleFakeOptionList('down');
                break;
            case 'ArrowLeft':
            case 'Left':
                e.preventDefault();
                this.cycleFakeOptionList('left');
                break;
            case 'ArrowRight':
            case 'Right':
                e.preventDefault();
                this.cycleFakeOptionList('right');
                break;
            case ' ':
            case 'Spacebar':
                e.preventDefault();
                this.fakeOptionListHidden = this.fakeOptionListHidden === false;
                if (this.fakeOptionListHidden) {
                    this.setOptionSelected(this.optionHighlighted);
                }
                break;
            case 'Enter':
                e.preventDefault();
                this.fakeOptionListHidden = true;
                this.setOptionSelected(this.optionHighlighted);
                break;
            case 'Escape':
            case 'Esc':
                this.fakeOptionListHidden = true;
                this.optionHighlighted = this.optionSelected;
                break;
            case 'PageUp':
                e.preventDefault();
                if (!this.fakeOptionListHidden) {
                    this.optionHighlighted = 0;
                    this.handleScroll();
                }
                break;
            case 'PageDown':
                e.preventDefault();
                if (!this.fakeOptionListHidden) {
                    this.optionHighlighted = this.options.length - 1;
                    this.handleScroll();
                }
                break;
            case 'Tab':
                if (!this.fakeOptionListHidden) {
                    this.fakeOptionListHidden = true;
                }
                break;
            default:
                this.searchOptions();
        }
    };
    SelectWrapper.prototype.createFakeOptionList = function () {
        var _this = this;
        return Array.from(this.options).map(function (option, key) {
            var _a;
            return [
                (option.parentElement.tagName === 'OPTGROUP' && option.previousElementSibling === null) && (Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: Object(_index_45be8764_js__WEBPACK_IMPORTED_MODULE_4__["c"])(Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('select-wrapper__fake-optgroup-label')), role: "presentation" }, option.closest('optgroup').label)),
                Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { id: "option-" + key, role: "option", color: "inherit", class: Object(_index_45be8764_js__WEBPACK_IMPORTED_MODULE_4__["c"])(Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('select-wrapper__fake-option'), (_a = {},
                        _a[Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('select-wrapper__fake-option--selected')] = _this.optionSelected === key,
                        _a[Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('select-wrapper__fake-option--highlighted')] = _this.optionHighlighted === key,
                        _a[Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('select-wrapper__fake-option--disabled')] = _this.optionDisabled.includes(key),
                        _a)), onClick: function () { return (!_this.optionDisabled.includes(key) ? _this.setOptionSelected(key) : _this.select.focus()); }, "aria-selected": _this.optionSelected === key && 'true', "aria-disabled": _this.optionDisabled.includes(key) && 'true' }, Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, option.text), key === _this.optionSelected && (Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-icon", { class: Object(_index_45be8764_js__WEBPACK_IMPORTED_MODULE_4__["c"])(Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('select-wrapper__fake-option-icon')), "aria-hidden": "true", name: "check", color: "inherit" })))
            ];
        });
    };
    SelectWrapper.prototype.cycleFakeOptionList = function (direction) {
        var numberOfOptions = this.options.length;
        if (direction === 'down' || direction === 'right') {
            this.optionHighlighted++;
            if (this.optionHighlighted > numberOfOptions - 1 && this.optionDisabled.includes(0)) {
                this.optionHighlighted = 1;
            }
            else if ((this.optionDisabled.includes(this.optionHighlighted) && this.optionDisabled.includes(numberOfOptions - 1)) ||
                this.optionHighlighted > numberOfOptions - 1) {
                this.optionHighlighted = 0;
            }
            else if (this.optionDisabled.includes(this.optionHighlighted)) {
                this.optionHighlighted += 1;
            }
        }
        else if (direction === 'up' || direction === 'left') {
            this.optionHighlighted--;
            if (this.optionHighlighted < 0 && this.optionDisabled.includes(numberOfOptions - 1)) {
                this.optionHighlighted = numberOfOptions - 2;
            }
            else if ((this.optionDisabled.includes(this.optionHighlighted) && this.optionDisabled.includes(0)) ||
                this.optionHighlighted < 0) {
                this.optionHighlighted = numberOfOptions - 1;
            }
            else if (this.optionDisabled.includes(this.optionHighlighted)) {
                this.optionHighlighted -= 1;
            }
        }
        if (direction === 'left' || direction === 'right') {
            this.setOptionSelected(this.optionHighlighted);
        }
        this.handleScroll();
    };
    SelectWrapper.prototype.handleScroll = function () {
        var fakeOptionListNodeHeight = 200;
        if (this.fakeOptionListNode.scrollHeight > fakeOptionListNodeHeight) {
            this.fakeOptionHighlightedNode = this.fakeOptionListNode.querySelectorAll('div')[this.optionHighlighted];
            var scrollBottom = fakeOptionListNodeHeight + this.fakeOptionListNode.scrollTop;
            var elementBottom = this.fakeOptionHighlightedNode.offsetTop + this.fakeOptionHighlightedNode.offsetHeight;
            if (elementBottom > scrollBottom) {
                this.fakeOptionListNode.scrollTop = elementBottom - fakeOptionListNodeHeight;
            }
            else if (this.fakeOptionHighlightedNode.offsetTop < this.fakeOptionListNode.scrollTop) {
                this.fakeOptionListNode.scrollTop = this.fakeOptionHighlightedNode.offsetTop;
            }
        }
    };
    SelectWrapper.prototype.searchOptions = function () {
        var _this = this;
        // timeout is needed if fast keyboard events are triggered and dom needs time to update state
        setTimeout(function () {
            var selected = _this.select.selectedIndex;
            _this.optionSelected = selected;
            _this.optionHighlighted = selected;
            _this.handleScroll();
        }, 100);
    };
    SelectWrapper.prototype.addSlottedStyles = function () {
        var tagName = this.host.tagName.toLowerCase();
        var style = tagName + " a {\n      outline: none transparent;\n      color: inherit;\n      text-decoration: underline;\n      -webkit-transition: outline-color .24s ease, color .24s ease;\n      transition: outline-color .24s ease, color .24s ease;\n    }\n    " + tagName + " a:hover {\n      color: #d5001c;\n    }\n    " + tagName + " a:focus {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }";
        Object(_slotted_styles_9a18361d_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this.host, style);
    };
    Object.defineProperty(SelectWrapper.prototype, "host", {
        get: function () { return Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return SelectWrapper;
}());
SelectWrapper.style = selectWrapperCss;



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
//# sourceMappingURL=6.render-page.js.map