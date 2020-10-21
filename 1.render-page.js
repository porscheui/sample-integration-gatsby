exports.ids = [1];
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

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/focusHandling-e078221d.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/focusHandling-e078221d.js ***!
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
    var notTabIndex = ':not([tabindex="-1"])';
    var notDisabled = ':not([disabled])';
    var tabbableElementsSelector = [
        "button" + notTabIndex + notDisabled,
        "[contenteditable]" + notTabIndex,
        "video[controls]" + notTabIndex,
        "audio[controls]" + notTabIndex,
        "[href]" + notTabIndex,
        "input" + notTabIndex + notDisabled,
        "select" + notTabIndex + notDisabled,
        "textarea" + notTabIndex + notDisabled,
        '[tabindex="0"]'
    ].join(',');
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
    else {
        /**
         * fallback for IE 11
         */
        var focusEvent = document.createEvent('FocusEvent');
        focusEvent.initEvent(type, bubbles, false);
        return focusEvent;
    }
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
    var _a;
    var childElementContainer = (_a = element.shadowRoot) !== null && _a !== void 0 ? _a : element;
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

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/line-height-d63781f4.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/line-height-d63781f4.js ***!
  \************************************************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return calcLineHeightForElement; });
/* harmony import */ var _breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-ff31979d.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-ff31979d.js");

var calcLineHeightForElement = function (tag) {
    var fontSize = window.getComputedStyle(tag).fontSize;
    // fontSize is "" when element does no longer exist and would throw an exception in calculateLineHeight
    return fontSize && Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["d"])(fontSize);
};



/***/ }),

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-button-pure.entry.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-button-pure.entry.js ***!
  \***********************************************************************************************/
/*! exports provided: p_button_pure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_button_pure", function() { return ButtonPure; });
/* harmony import */ var _breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-ff31979d.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-ff31979d.js");
/* harmony import */ var _buttonHandling_8f4ca036_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttonHandling-8f4ca036.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/buttonHandling-8f4ca036.js");
/* harmony import */ var _line_height_d63781f4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line-height-d63781f4.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/line-height-d63781f4.js");
/* harmony import */ var _index_esm_37b6c9b0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.esm-37b6c9b0.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index.esm-37b6c9b0.js");
/* harmony import */ var _transition_listener_302b2719_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transition-listener-302b2719.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/transition-listener-302b2719.js");
/* harmony import */ var _focusHandling_e078221d_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./focusHandling-e078221d.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/focusHandling-e078221d.js");






var buttonPureCss = ":host{display:inline-block;vertical-align:top;position:relative !important}::slotted(p){margin:0}.p-button-pure{display:-ms-flexbox;display:flex;width:100%;margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;outline:transparent none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;text-decoration:none;text-align:left;background:transparent;cursor:pointer;color:inherit;-webkit-transition:color 0.24s ease, font-size 1ms linear;transition:color 0.24s ease, font-size 1ms linear}.p-button-pure::before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;outline:transparent none;-webkit-transition:outline-color 0.24s ease;transition:outline-color 0.24s ease}.p-button-pure::-moz-focus-inner{border:0}.p-button-pure:focus::before{outline-width:2px;outline-style:solid;outline-offset:1px}.p-button-pure:disabled,.p-button-pure[disabled]{cursor:not-allowed}.p-button-pure--theme-light{color:#000}.p-button-pure--theme-light+*{color:#000}.p-button-pure--theme-light:focus::before{outline-color:#00d5b9}.p-button-pure--theme-light:enabled:hover,.p-button-pure--theme-light:not([disabled]):hover{color:#d5001c}.p-button-pure--theme-light:enabled:hover+*,.p-button-pure--theme-light:not([disabled]):hover+*{color:#d5001c}.p-button-pure--theme-light:enabled:active,.p-button-pure--theme-light:not([disabled]):active{color:#d5001c}.p-button-pure--theme-light:enabled:active+*,.p-button-pure--theme-light:not([disabled]):active+*{color:#d5001c}.p-button-pure--theme-light:disabled,.p-button-pure--theme-light[disabled]{color:#96989a}.p-button-pure--theme-light:disabled+*,.p-button-pure--theme-light[disabled]+*{color:#96989a}.p-button-pure--theme-dark{color:#fff}.p-button-pure--theme-dark+*{color:#fff}.p-button-pure--theme-dark:focus::before{outline-color:#00d5b9}.p-button-pure--theme-dark:enabled:hover,.p-button-pure--theme-dark:not([disabled]):hover{color:#d5001c}.p-button-pure--theme-dark:enabled:hover+*,.p-button-pure--theme-dark:not([disabled]):hover+*{color:#d5001c}.p-button-pure--theme-dark:enabled:active,.p-button-pure--theme-dark:not([disabled]):active{color:#d5001c}.p-button-pure--theme-dark:enabled:active+*,.p-button-pure--theme-dark:not([disabled]):active+*{color:#d5001c}.p-button-pure--theme-dark:disabled,.p-button-pure--theme-dark[disabled]{color:#7c7f81}.p-button-pure--theme-dark:disabled+*,.p-button-pure--theme-dark[disabled]+*{color:#7c7f81}.p-button-pure--size-x-small{font-size:0.75rem;line-height:1.6666666667}.p-button-pure--size-x-small .p-button-pure__icon{width:1.6666666667em;height:1.6666666667em}.p-button-pure--size-x-small+*{font-size:0.75rem;line-height:1.6666666667}.p-button-pure--size-x-small+*::before{font-size:0.75rem;margin-left:1.6666666667em}.p-button-pure--size-small{font-size:1rem;line-height:1.5}.p-button-pure--size-small .p-button-pure__icon{width:1.5em;height:1.5em}.p-button-pure--size-small+*{font-size:1rem;line-height:1.5}.p-button-pure--size-small+*::before{font-size:1rem;margin-left:1.5em}.p-button-pure--size-medium{font-size:1.5rem;line-height:1.5}.p-button-pure--size-medium .p-button-pure__icon{width:1.5em;height:1.5em}.p-button-pure--size-medium+*{font-size:1.25rem;line-height:1.4}.p-button-pure--size-medium+*::before{font-size:1.5rem;margin-left:1.5em}.p-button-pure--size-large{font-size:2.25rem;line-height:1.3333333333}.p-button-pure--size-large .p-button-pure__icon{width:1.3333333333em;height:1.3333333333em}.p-button-pure--size-large+*{font-size:1.875rem;line-height:1.3333333333}.p-button-pure--size-large+*::before{font-size:2.25rem;margin-left:1.3333333333em}.p-button-pure--size-x-large{font-size:3.25rem;line-height:1.2307692308}.p-button-pure--size-x-large .p-button-pure__icon{width:1.2307692308em;height:1.2307692308em}.p-button-pure--size-x-large+*{font-size:2.25rem;line-height:1.3333333333}.p-button-pure--size-x-large+*::before{font-size:3.25rem;margin-left:1.2307692308em}.p-button-pure--size-inherit{font-size:inherit;line-height:inherit}.p-button-pure--size-inherit .p-button-pure__icon{width:1.5em;height:1.5em}@media (min-width: 480px){.p-button-pure--size-x-small-xs{font-size:0.75rem;line-height:1.6666666667}.p-button-pure--size-x-small-xs .p-button-pure__icon{width:1.6666666667em;height:1.6666666667em}.p-button-pure--size-x-small-xs+*{font-size:0.75rem;line-height:1.6666666667}.p-button-pure--size-x-small-xs+*::before{font-size:0.75rem;margin-left:1.6666666667em}.p-button-pure--size-small-xs{font-size:1rem;line-height:1.5}.p-button-pure--size-small-xs .p-button-pure__icon{width:1.5em;height:1.5em}.p-button-pure--size-small-xs+*{font-size:1rem;line-height:1.5}.p-button-pure--size-small-xs+*::before{font-size:1rem;margin-left:1.5em}.p-button-pure--size-medium-xs{font-size:1.5rem;line-height:1.5}.p-button-pure--size-medium-xs .p-button-pure__icon{width:1.5em;height:1.5em}.p-button-pure--size-medium-xs+*{font-size:1.25rem;line-height:1.4}.p-button-pure--size-medium-xs+*::before{font-size:1.5rem;margin-left:1.5em}.p-button-pure--size-large-xs{font-size:2.25rem;line-height:1.3333333333}.p-button-pure--size-large-xs .p-button-pure__icon{width:1.3333333333em;height:1.3333333333em}.p-button-pure--size-large-xs+*{font-size:1.875rem;line-height:1.3333333333}.p-button-pure--size-large-xs+*::before{font-size:2.25rem;margin-left:1.3333333333em}.p-button-pure--size-x-large-xs{font-size:3.25rem;line-height:1.2307692308}.p-button-pure--size-x-large-xs .p-button-pure__icon{width:1.2307692308em;height:1.2307692308em}.p-button-pure--size-x-large-xs+*{font-size:2.25rem;line-height:1.3333333333}.p-button-pure--size-x-large-xs+*::before{font-size:3.25rem;margin-left:1.2307692308em}.p-button-pure--size-inherit-xs{font-size:inherit;line-height:inherit}.p-button-pure--size-inherit-xs .p-button-pure__icon{width:1.5em;height:1.5em}}@media (min-width: 760px){.p-button-pure--size-x-small-s{font-size:0.75rem;line-height:1.6666666667}.p-button-pure--size-x-small-s .p-button-pure__icon{width:1.6666666667em;height:1.6666666667em}.p-button-pure--size-x-small-s+*{font-size:0.75rem;line-height:1.6666666667}.p-button-pure--size-x-small-s+*::before{font-size:0.75rem;margin-left:1.6666666667em}.p-button-pure--size-small-s{font-size:1rem;line-height:1.5}.p-button-pure--size-small-s .p-button-pure__icon{width:1.5em;height:1.5em}.p-button-pure--size-small-s+*{font-size:1rem;line-height:1.5}.p-button-pure--size-small-s+*::before{font-size:1rem;margin-left:1.5em}.p-button-pure--size-medium-s{font-size:1.5rem;line-height:1.5}.p-button-pure--size-medium-s .p-button-pure__icon{width:1.5em;height:1.5em}.p-button-pure--size-medium-s+*{font-size:1.25rem;line-height:1.4}.p-button-pure--size-medium-s+*::before{font-size:1.5rem;margin-left:1.5em}.p-button-pure--size-large-s{font-size:2.25rem;line-height:1.3333333333}.p-button-pure--size-large-s .p-button-pure__icon{width:1.3333333333em;height:1.3333333333em}.p-button-pure--size-large-s+*{font-size:1.875rem;line-height:1.3333333333}.p-button-pure--size-large-s+*::before{font-size:2.25rem;margin-left:1.3333333333em}.p-button-pure--size-x-large-s{font-size:3.25rem;line-height:1.2307692308}.p-button-pure--size-x-large-s .p-button-pure__icon{width:1.2307692308em;height:1.2307692308em}.p-button-pure--size-x-large-s+*{font-size:2.25rem;line-height:1.3333333333}.p-button-pure--size-x-large-s+*::before{font-size:3.25rem;margin-left:1.2307692308em}.p-button-pure--size-inherit-s{font-size:inherit;line-height:inherit}.p-button-pure--size-inherit-s .p-button-pure__icon{width:1.5em;height:1.5em}}@media (min-width: 1000px){.p-button-pure--size-x-small-m{font-size:0.75rem;line-height:1.6666666667}.p-button-pure--size-x-small-m .p-button-pure__icon{width:1.6666666667em;height:1.6666666667em}.p-button-pure--size-x-small-m+*{font-size:0.75rem;line-height:1.6666666667}.p-button-pure--size-x-small-m+*::before{font-size:0.75rem;margin-left:1.6666666667em}.p-button-pure--size-small-m{font-size:1rem;line-height:1.5}.p-button-pure--size-small-m .p-button-pure__icon{width:1.5em;height:1.5em}.p-button-pure--size-small-m+*{font-size:1rem;line-height:1.5}.p-button-pure--size-small-m+*::before{font-size:1rem;margin-left:1.5em}.p-button-pure--size-medium-m{font-size:1.5rem;line-height:1.5}.p-button-pure--size-medium-m .p-button-pure__icon{width:1.5em;height:1.5em}.p-button-pure--size-medium-m+*{font-size:1.25rem;line-height:1.4}.p-button-pure--size-medium-m+*::before{font-size:1.5rem;margin-left:1.5em}.p-button-pure--size-large-m{font-size:2.25rem;line-height:1.3333333333}.p-button-pure--size-large-m .p-button-pure__icon{width:1.3333333333em;height:1.3333333333em}.p-button-pure--size-large-m+*{font-size:1.875rem;line-height:1.3333333333}.p-button-pure--size-large-m+*::before{font-size:2.25rem;margin-left:1.3333333333em}.p-button-pure--size-x-large-m{font-size:3.25rem;line-height:1.2307692308}.p-button-pure--size-x-large-m .p-button-pure__icon{width:1.2307692308em;height:1.2307692308em}.p-button-pure--size-x-large-m+*{font-size:2.25rem;line-height:1.3333333333}.p-button-pure--size-x-large-m+*::before{font-size:3.25rem;margin-left:1.2307692308em}.p-button-pure--size-inherit-m{font-size:inherit;line-height:inherit}.p-button-pure--size-inherit-m .p-button-pure__icon{width:1.5em;height:1.5em}}@media (min-width: 1300px){.p-button-pure--size-x-small-l{font-size:0.75rem;line-height:1.6666666667}.p-button-pure--size-x-small-l .p-button-pure__icon{width:1.6666666667em;height:1.6666666667em}.p-button-pure--size-x-small-l+*{font-size:0.75rem;line-height:1.6666666667}.p-button-pure--size-x-small-l+*::before{font-size:0.75rem;margin-left:1.6666666667em}.p-button-pure--size-small-l{font-size:1rem;line-height:1.5}.p-button-pure--size-small-l .p-button-pure__icon{width:1.5em;height:1.5em}.p-button-pure--size-small-l+*{font-size:1rem;line-height:1.5}.p-button-pure--size-small-l+*::before{font-size:1rem;margin-left:1.5em}.p-button-pure--size-medium-l{font-size:1.5rem;line-height:1.5}.p-button-pure--size-medium-l .p-button-pure__icon{width:1.5em;height:1.5em}.p-button-pure--size-medium-l+*{font-size:1.25rem;line-height:1.4}.p-button-pure--size-medium-l+*::before{font-size:1.5rem;margin-left:1.5em}.p-button-pure--size-large-l{font-size:2.25rem;line-height:1.3333333333}.p-button-pure--size-large-l .p-button-pure__icon{width:1.3333333333em;height:1.3333333333em}.p-button-pure--size-large-l+*{font-size:1.875rem;line-height:1.3333333333}.p-button-pure--size-large-l+*::before{font-size:2.25rem;margin-left:1.3333333333em}.p-button-pure--size-x-large-l{font-size:3.25rem;line-height:1.2307692308}.p-button-pure--size-x-large-l .p-button-pure__icon{width:1.2307692308em;height:1.2307692308em}.p-button-pure--size-x-large-l+*{font-size:2.25rem;line-height:1.3333333333}.p-button-pure--size-x-large-l+*::before{font-size:3.25rem;margin-left:1.2307692308em}.p-button-pure--size-inherit-l{font-size:inherit;line-height:inherit}.p-button-pure--size-inherit-l .p-button-pure__icon{width:1.5em;height:1.5em}}@media (min-width: 1760px){.p-button-pure--size-x-small-xl{font-size:0.75rem;line-height:1.6666666667}.p-button-pure--size-x-small-xl .p-button-pure__icon{width:1.6666666667em;height:1.6666666667em}.p-button-pure--size-x-small-xl+*{font-size:0.75rem;line-height:1.6666666667}.p-button-pure--size-x-small-xl+*::before{font-size:0.75rem;margin-left:1.6666666667em}.p-button-pure--size-small-xl{font-size:1rem;line-height:1.5}.p-button-pure--size-small-xl .p-button-pure__icon{width:1.5em;height:1.5em}.p-button-pure--size-small-xl+*{font-size:1rem;line-height:1.5}.p-button-pure--size-small-xl+*::before{font-size:1rem;margin-left:1.5em}.p-button-pure--size-medium-xl{font-size:1.5rem;line-height:1.5}.p-button-pure--size-medium-xl .p-button-pure__icon{width:1.5em;height:1.5em}.p-button-pure--size-medium-xl+*{font-size:1.25rem;line-height:1.4}.p-button-pure--size-medium-xl+*::before{font-size:1.5rem;margin-left:1.5em}.p-button-pure--size-large-xl{font-size:2.25rem;line-height:1.3333333333}.p-button-pure--size-large-xl .p-button-pure__icon{width:1.3333333333em;height:1.3333333333em}.p-button-pure--size-large-xl+*{font-size:1.875rem;line-height:1.3333333333}.p-button-pure--size-large-xl+*::before{font-size:2.25rem;margin-left:1.3333333333em}.p-button-pure--size-x-large-xl{font-size:3.25rem;line-height:1.2307692308}.p-button-pure--size-x-large-xl .p-button-pure__icon{width:1.2307692308em;height:1.2307692308em}.p-button-pure--size-x-large-xl+*{font-size:2.25rem;line-height:1.3333333333}.p-button-pure--size-x-large-xl+*::before{font-size:3.25rem;margin-left:1.2307692308em}.p-button-pure--size-inherit-xl{font-size:inherit;line-height:inherit}.p-button-pure--size-inherit-xl .p-button-pure__icon{width:1.5em;height:1.5em}}.p-button-pure__icon{-ms-flex-negative:0;flex-shrink:0;width:1.5em;height:1.5em}.p-button-pure__label{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;border:0}.p-button-pure__subline{display:-ms-flexbox;display:flex;-webkit-transition:color 0.24s ease;transition:color 0.24s ease;margin-top:4px}.p-button-pure__subline::before{content:\"\"}.p-button-pure__label--visible,.p-button-pure__subline--visible{position:static;width:100%;height:auto;margin-left:0.25rem;padding:0 0.125em 0 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-button-pure__label--hidden,.p-button-pure__subline--hidden{position:absolute;width:1px;height:1px;margin-left:-1px;margin-top:0;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}@media (min-width: 480px){.p-button-pure__label--visible-xs,.p-button-pure__subline--visible-xs{position:static;width:100%;height:auto;margin-left:0.25rem;padding:0 0.125em 0 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-button-pure__label--hidden-xs,.p-button-pure__subline--hidden-xs{position:absolute;width:1px;height:1px;margin-left:-1px;margin-top:0;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 760px){.p-button-pure__label--visible-s,.p-button-pure__subline--visible-s{position:static;width:100%;height:auto;margin-left:0.25rem;padding:0 0.125em 0 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-button-pure__label--hidden-s,.p-button-pure__subline--hidden-s{position:absolute;width:1px;height:1px;margin-left:-1px;margin-top:0;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1000px){.p-button-pure__label--visible-m,.p-button-pure__subline--visible-m{position:static;width:100%;height:auto;margin-left:0.25rem;padding:0 0.125em 0 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-button-pure__label--hidden-m,.p-button-pure__subline--hidden-m{position:absolute;width:1px;height:1px;margin-left:-1px;margin-top:0;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1300px){.p-button-pure__label--visible-l,.p-button-pure__subline--visible-l{position:static;width:100%;height:auto;margin-left:0.25rem;padding:0 0.125em 0 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-button-pure__label--hidden-l,.p-button-pure__subline--hidden-l{position:absolute;width:1px;height:1px;margin-left:-1px;margin-top:0;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1760px){.p-button-pure__label--visible-xl,.p-button-pure__subline--visible-xl{position:static;width:100%;height:auto;margin-left:0.25rem;padding:0 0.125em 0 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-button-pure__label--hidden-xl,.p-button-pure__subline--hidden-xl{position:absolute;width:1px;height:1px;margin-left:-1px;margin-top:0;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}";
var ButtonPure = /** @class */ (function () {
    function ButtonPure(hostRef) {
        Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** To remove the element from tab order. */
        this.tabbable = true;
        /** Specifies the type of the button. */
        this.type = 'button';
        /** Disables the button. No events will be triggered while disabled state is active. */
        this.disabled = false;
        /** Disables the button and shows a loading indicator. No events will be triggered while loading state is active. */
        this.loading = false;
        /** Size of the button. */
        this.size = 'small';
        /** The weight of the text (only has effect with visible label). */
        this.weight = 'regular';
        /** The icon shown. */
        this.icon = 'arrow-head-right';
        /** A custom URL path to a custom icon. */
        this.iconSource = undefined;
        /** Show or hide label. For better accessibility it is recommended to show the label. */
        this.hideLabel = false;
        /** Adapts the button color depending on the theme. */
        this.theme = 'light';
    }
    // this stops click events when button is disabled
    ButtonPure.prototype.handleOnClick = function (e) {
        if (this.isDisabled()) {
            e.stopPropagation();
        }
    };
    ButtonPure.prototype.componentWillLoad = function () {
        this.checkHasSubline();
    };
    ButtonPure.prototype.componentDidLoad = function () {
        var _this = this;
        Object(_focusHandling_e078221d_js__WEBPACK_IMPORTED_MODULE_5__["i"])(this.host);
        Object(_buttonHandling_8f4ca036_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this.host, function () { return _this.type; }, function () { return _this.isDisabled(); });
        Object(_transition_listener_302b2719_js__WEBPACK_IMPORTED_MODULE_4__["t"])(this.buttonTag, 'font-size', function () {
            var size = Object(_line_height_d63781f4_js__WEBPACK_IMPORTED_MODULE_2__["c"])(_this.buttonTag);
            _this.iconTag.style.width = size + "em";
            _this.iconTag.style.height = size + "em";
        });
    };
    ButtonPure.prototype.render = function () {
        var _a, _b, _c;
        var _this = this;
        var buttonPureClasses = Object.assign((_a = {}, _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('button-pure')] = true, _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])("button-pure--theme-" + this.theme)] = true, _a), Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["m"])('button-pure--size', this.size));
        var iconClasses = Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('button-pure__icon');
        var labelClasses = Object.assign((_b = {}, _b[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('button-pure__label')] = true, _b), Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["m"])('button-pure__label-', this.hideLabel, ['hidden', 'visible']));
        var sublineClasses = Object.assign((_c = {}, _c[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('button-pure__subline')] = true, _c), Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["m"])('button-pure__subline-', this.hideLabel, ['hidden', 'visible']));
        return (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: buttonPureClasses, type: this.type, disabled: this.isDisabled(), tabindex: this.tabbable ? 0 : -1, ref: function (el) { return (_this.buttonTag = el); }, "aria-busy": this.loading && 'true' }, this.loading ? (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-spinner", { class: iconClasses, size: "inherit", theme: this.theme, ref: function (el) { return (_this.iconTag = el); } })) : (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-icon", { class: iconClasses, color: "inherit", size: "inherit", name: this.icon, source: this.iconSource, ref: function (el) { return (_this.iconTag = el); }, "aria-hidden": "true" })), Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: labelClasses, tag: "span", color: "inherit", size: "inherit", weight: this.weight }, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))), this.hasSubline && (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: sublineClasses, color: "inherit", size: "inherit", tag: "div" }, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "subline" })))));
    };
    ButtonPure.prototype.checkHasSubline = function () {
        this.hasSubline = !!this.host.querySelector('[slot="subline"]');
    };
    ButtonPure.prototype.isDisabled = function () {
        return this.disabled || this.loading;
    };
    Object.defineProperty(ButtonPure.prototype, "host", {
        get: function () { return Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return ButtonPure;
}());
ButtonPure.style = buttonPureCss;



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
//# sourceMappingURL=1.render-page.js.map