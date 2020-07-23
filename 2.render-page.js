exports.ids = [2];
exports.modules = {

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

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-359f03c5.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-359f03c5.js ***!
  \******************************************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return classnames; });
/* harmony import */ var _breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-f03211e4.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-f03211e4.js");

var classnames = Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["d"])(function (module) {
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

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/line-height-e60665f4.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/line-height-e60665f4.js ***!
  \************************************************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return calcLineHeightForElement; });
/* harmony import */ var _breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-f03211e4.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-f03211e4.js");

var FONT_SIZE_REGEX = /^(\d+\.?\d*)(rem|px)$/;
var REM_BASE = 16;
var remToPx = function (rem) {
    var _a;
    var _b = (_a = rem === null || rem === void 0 ? void 0 : rem.match(FONT_SIZE_REGEX)) !== null && _a !== void 0 ? _a : [], fontSizeValue = _b[1], fontSizeUnit = _b[2];
    if (fontSizeUnit !== 'rem' || fontSizeValue === '0') {
        throw new Error('function only accepts value in rem and not 0, e.g. 1.5rem');
    }
    else {
        return parseFloat("" + fontSizeValue) * REM_BASE + "px";
    }
};
var calculateLineHeight = function (fontSize) {
    var _a;
    var _b = (_a = fontSize === null || fontSize === void 0 ? void 0 : fontSize.match(FONT_SIZE_REGEX)) !== null && _a !== void 0 ? _a : [], fontSizeValue = _b[1], fontSizeUnit = _b[2];
    if (fontSizeUnit === undefined || fontSizeValue === undefined || fontSizeValue === '0') {
        throw new Error("font size needs to be value + px or rem and not 0, e.g. 15rem or 16px, received: '" + fontSize + "'");
    }
    var fontSizePx = fontSizeUnit === 'rem' ? remToPx(fontSize) : fontSizeValue;
    var fontSizeLength = parseFloat(fontSizePx);
    var e = 2.71828;
    var exactLineHeightFactor = 0.911 / (2.97 + 0.005 * Math.pow(e, 0.2 * fontSizeLength)) + 1.2;
    var exactLineHeightPx = fontSizeLength * exactLineHeightFactor;
    var remainingPx = exactLineHeightPx % 4;
    if (remainingPx > 2) {
        remainingPx = remainingPx - 4;
    }
    var roundingFactor = 100000;
    var fittedLineHeightPx = exactLineHeightPx - remainingPx;
    var fittedLineHeightFactor = fittedLineHeightPx / fontSizeLength;
    return Math.round(fittedLineHeightFactor * roundingFactor) / roundingFactor;
};
var calcLineHeightForElement = function (tag) {
    var fontSize = window.getComputedStyle(tag).fontSize;
    // fontSize is "" when element does no longer exist and would throw an exception in calculateLineHeight
    return fontSize && calculateLineHeight(fontSize);
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
/* harmony import */ var _breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-f03211e4.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-f03211e4.js");
/* harmony import */ var _line_height_e60665f4_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-height-e60665f4.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/line-height-e60665f4.js");
/* harmony import */ var _slotted_styles_9a18361d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slotted-styles-9a18361d.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/slotted-styles-9a18361d.js");
/* harmony import */ var _index_esm_37b6c9b0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.esm-37b6c9b0.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index.esm-37b6c9b0.js");
/* harmony import */ var _transition_listener_302b2719_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transition-listener-302b2719.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/transition-listener-302b2719.js");
/* harmony import */ var _index_359f03c5_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-359f03c5.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-359f03c5.js");
/* harmony import */ var _focusHandling_e078221d_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./focusHandling-e078221d.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/focusHandling-e078221d.js");







var linkPureCss = ":host{display:inline-block;vertical-align:top;position:relative !important;cursor:pointer}::slotted(a){display:block !important;position:static !important;text-decoration:none !important;color:inherit !important;line-height:inherit !important}::slotted(a)::before{content:\"\" !important;position:absolute !important;top:0 !important;left:0 !important;right:0 !important;bottom:0 !important;display:block !important;outline:transparent none !important;-webkit-transition:outline-color 0.24s ease !important;transition:outline-color 0.24s ease !important}::slotted(a:focus){outline:none !important}::slotted(a:focus)::before{outline-offset:1px !important;outline:#00d5b9 solid 2px !important}::slotted(p){margin:0}.p-link-pure{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;width:100%;margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;outline:transparent none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;text-decoration:none;text-align:left;background:transparent;-webkit-transition:color 0.24s ease, font-size 1ms linear;transition:color 0.24s ease, font-size 1ms linear}.p-link-pure::before{content:\"\";position:absolute;top:0;left:0;right:0;bottom:0;display:block;outline:transparent none;-webkit-transition:outline-color 0.24s ease;transition:outline-color 0.24s ease}.p-link-pure:not(a)::before{pointer-events:none}.p-link-pure::-moz-focus-inner{border:0}.p-link-pure:focus::before{outline-width:2px;outline-style:solid;outline-offset:1px}.p-link-pure--theme-light{color:#000}.p-link-pure--theme-light+*{color:#000}.p-link-pure--theme-light:focus::before{outline-color:#00d5b9}.p-link-pure--theme-light:active{color:#d5001c}.p-link-pure--theme-light:active+*{color:#d5001c}.p-link-pure--theme-light:hover{color:#d5001c}.p-link-pure--theme-light:hover+*{color:#d5001c}.p-link-pure--theme-light.p-link-pure--active{color:#d5001c}.p-link-pure--theme-light.p-link-pure--active+*{color:#d5001c}.p-link-pure--theme-dark{color:#fff}.p-link-pure--theme-dark+*{color:#fff}.p-link-pure--theme-dark:focus::before{outline-color:#00d5b9}.p-link-pure--theme-dark:active{color:#d5001c}.p-link-pure--theme-dark:active+*{color:#d5001c}.p-link-pure--theme-dark:hover{color:#d5001c}.p-link-pure--theme-dark:hover+*{color:#d5001c}.p-link-pure--theme-dark.p-link-pure--active{color:#d5001c}.p-link-pure--theme-dark.p-link-pure--active+*{color:#d5001c}.p-link-pure--size-x-small{font-size:0.75rem;line-height:1.6666666667}.p-link-pure--size-x-small .p-link-pure__icon{width:1.6666666667em;height:1.6666666667em}.p-link-pure--size-x-small+*{font-size:0.75rem;line-height:1.6666666667}.p-link-pure--size-x-small+*::before{font-size:0.75rem;margin-left:1.6666666667em}.p-link-pure--size-small{font-size:1rem;line-height:1.5}.p-link-pure--size-small .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-small+*{font-size:1rem;line-height:1.5}.p-link-pure--size-small+*::before{font-size:1rem;margin-left:1.5em}.p-link-pure--size-medium{font-size:1.5rem;line-height:1.5}.p-link-pure--size-medium .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-medium+*{font-size:1.25rem;line-height:1.4}.p-link-pure--size-medium+*::before{font-size:1.5rem;margin-left:1.5em}.p-link-pure--size-large{font-size:2.25rem;line-height:1.3333333333}.p-link-pure--size-large .p-link-pure__icon{width:1.3333333333em;height:1.3333333333em}.p-link-pure--size-large+*{font-size:1.875rem;line-height:1.3333333333}.p-link-pure--size-large+*::before{font-size:2.25rem;margin-left:1.3333333333em}.p-link-pure--size-x-large{font-size:3.25rem;line-height:1.2307692308}.p-link-pure--size-x-large .p-link-pure__icon{width:1.2307692308em;height:1.2307692308em}.p-link-pure--size-x-large+*{font-size:2.25rem;line-height:1.3333333333}.p-link-pure--size-x-large+*::before{font-size:3.25rem;margin-left:1.2307692308em}.p-link-pure--size-inherit{font-size:inherit;line-height:inherit}.p-link-pure--size-inherit .p-link-pure__icon{width:1.5em;height:1.5em}@media (min-width: 480px){.p-link-pure--size-x-small-xs{font-size:0.75rem;line-height:1.6666666667}.p-link-pure--size-x-small-xs .p-link-pure__icon{width:1.6666666667em;height:1.6666666667em}.p-link-pure--size-x-small-xs+*{font-size:0.75rem;line-height:1.6666666667}.p-link-pure--size-x-small-xs+*::before{font-size:0.75rem;margin-left:1.6666666667em}.p-link-pure--size-small-xs{font-size:1rem;line-height:1.5}.p-link-pure--size-small-xs .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-small-xs+*{font-size:1rem;line-height:1.5}.p-link-pure--size-small-xs+*::before{font-size:1rem;margin-left:1.5em}.p-link-pure--size-medium-xs{font-size:1.5rem;line-height:1.5}.p-link-pure--size-medium-xs .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-medium-xs+*{font-size:1.25rem;line-height:1.4}.p-link-pure--size-medium-xs+*::before{font-size:1.5rem;margin-left:1.5em}.p-link-pure--size-large-xs{font-size:2.25rem;line-height:1.3333333333}.p-link-pure--size-large-xs .p-link-pure__icon{width:1.3333333333em;height:1.3333333333em}.p-link-pure--size-large-xs+*{font-size:1.875rem;line-height:1.3333333333}.p-link-pure--size-large-xs+*::before{font-size:2.25rem;margin-left:1.3333333333em}.p-link-pure--size-x-large-xs{font-size:3.25rem;line-height:1.2307692308}.p-link-pure--size-x-large-xs .p-link-pure__icon{width:1.2307692308em;height:1.2307692308em}.p-link-pure--size-x-large-xs+*{font-size:2.25rem;line-height:1.3333333333}.p-link-pure--size-x-large-xs+*::before{font-size:3.25rem;margin-left:1.2307692308em}.p-link-pure--size-inherit-xs{font-size:inherit;line-height:inherit}.p-link-pure--size-inherit-xs .p-link-pure__icon{width:1.5em;height:1.5em}}@media (min-width: 760px){.p-link-pure--size-x-small-s{font-size:0.75rem;line-height:1.6666666667}.p-link-pure--size-x-small-s .p-link-pure__icon{width:1.6666666667em;height:1.6666666667em}.p-link-pure--size-x-small-s+*{font-size:0.75rem;line-height:1.6666666667}.p-link-pure--size-x-small-s+*::before{font-size:0.75rem;margin-left:1.6666666667em}.p-link-pure--size-small-s{font-size:1rem;line-height:1.5}.p-link-pure--size-small-s .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-small-s+*{font-size:1rem;line-height:1.5}.p-link-pure--size-small-s+*::before{font-size:1rem;margin-left:1.5em}.p-link-pure--size-medium-s{font-size:1.5rem;line-height:1.5}.p-link-pure--size-medium-s .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-medium-s+*{font-size:1.25rem;line-height:1.4}.p-link-pure--size-medium-s+*::before{font-size:1.5rem;margin-left:1.5em}.p-link-pure--size-large-s{font-size:2.25rem;line-height:1.3333333333}.p-link-pure--size-large-s .p-link-pure__icon{width:1.3333333333em;height:1.3333333333em}.p-link-pure--size-large-s+*{font-size:1.875rem;line-height:1.3333333333}.p-link-pure--size-large-s+*::before{font-size:2.25rem;margin-left:1.3333333333em}.p-link-pure--size-x-large-s{font-size:3.25rem;line-height:1.2307692308}.p-link-pure--size-x-large-s .p-link-pure__icon{width:1.2307692308em;height:1.2307692308em}.p-link-pure--size-x-large-s+*{font-size:2.25rem;line-height:1.3333333333}.p-link-pure--size-x-large-s+*::before{font-size:3.25rem;margin-left:1.2307692308em}.p-link-pure--size-inherit-s{font-size:inherit;line-height:inherit}.p-link-pure--size-inherit-s .p-link-pure__icon{width:1.5em;height:1.5em}}@media (min-width: 1000px){.p-link-pure--size-x-small-m{font-size:0.75rem;line-height:1.6666666667}.p-link-pure--size-x-small-m .p-link-pure__icon{width:1.6666666667em;height:1.6666666667em}.p-link-pure--size-x-small-m+*{font-size:0.75rem;line-height:1.6666666667}.p-link-pure--size-x-small-m+*::before{font-size:0.75rem;margin-left:1.6666666667em}.p-link-pure--size-small-m{font-size:1rem;line-height:1.5}.p-link-pure--size-small-m .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-small-m+*{font-size:1rem;line-height:1.5}.p-link-pure--size-small-m+*::before{font-size:1rem;margin-left:1.5em}.p-link-pure--size-medium-m{font-size:1.5rem;line-height:1.5}.p-link-pure--size-medium-m .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-medium-m+*{font-size:1.25rem;line-height:1.4}.p-link-pure--size-medium-m+*::before{font-size:1.5rem;margin-left:1.5em}.p-link-pure--size-large-m{font-size:2.25rem;line-height:1.3333333333}.p-link-pure--size-large-m .p-link-pure__icon{width:1.3333333333em;height:1.3333333333em}.p-link-pure--size-large-m+*{font-size:1.875rem;line-height:1.3333333333}.p-link-pure--size-large-m+*::before{font-size:2.25rem;margin-left:1.3333333333em}.p-link-pure--size-x-large-m{font-size:3.25rem;line-height:1.2307692308}.p-link-pure--size-x-large-m .p-link-pure__icon{width:1.2307692308em;height:1.2307692308em}.p-link-pure--size-x-large-m+*{font-size:2.25rem;line-height:1.3333333333}.p-link-pure--size-x-large-m+*::before{font-size:3.25rem;margin-left:1.2307692308em}.p-link-pure--size-inherit-m{font-size:inherit;line-height:inherit}.p-link-pure--size-inherit-m .p-link-pure__icon{width:1.5em;height:1.5em}}@media (min-width: 1300px){.p-link-pure--size-x-small-l{font-size:0.75rem;line-height:1.6666666667}.p-link-pure--size-x-small-l .p-link-pure__icon{width:1.6666666667em;height:1.6666666667em}.p-link-pure--size-x-small-l+*{font-size:0.75rem;line-height:1.6666666667}.p-link-pure--size-x-small-l+*::before{font-size:0.75rem;margin-left:1.6666666667em}.p-link-pure--size-small-l{font-size:1rem;line-height:1.5}.p-link-pure--size-small-l .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-small-l+*{font-size:1rem;line-height:1.5}.p-link-pure--size-small-l+*::before{font-size:1rem;margin-left:1.5em}.p-link-pure--size-medium-l{font-size:1.5rem;line-height:1.5}.p-link-pure--size-medium-l .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-medium-l+*{font-size:1.25rem;line-height:1.4}.p-link-pure--size-medium-l+*::before{font-size:1.5rem;margin-left:1.5em}.p-link-pure--size-large-l{font-size:2.25rem;line-height:1.3333333333}.p-link-pure--size-large-l .p-link-pure__icon{width:1.3333333333em;height:1.3333333333em}.p-link-pure--size-large-l+*{font-size:1.875rem;line-height:1.3333333333}.p-link-pure--size-large-l+*::before{font-size:2.25rem;margin-left:1.3333333333em}.p-link-pure--size-x-large-l{font-size:3.25rem;line-height:1.2307692308}.p-link-pure--size-x-large-l .p-link-pure__icon{width:1.2307692308em;height:1.2307692308em}.p-link-pure--size-x-large-l+*{font-size:2.25rem;line-height:1.3333333333}.p-link-pure--size-x-large-l+*::before{font-size:3.25rem;margin-left:1.2307692308em}.p-link-pure--size-inherit-l{font-size:inherit;line-height:inherit}.p-link-pure--size-inherit-l .p-link-pure__icon{width:1.5em;height:1.5em}}@media (min-width: 1760px){.p-link-pure--size-x-small-xl{font-size:0.75rem;line-height:1.6666666667}.p-link-pure--size-x-small-xl .p-link-pure__icon{width:1.6666666667em;height:1.6666666667em}.p-link-pure--size-x-small-xl+*{font-size:0.75rem;line-height:1.6666666667}.p-link-pure--size-x-small-xl+*::before{font-size:0.75rem;margin-left:1.6666666667em}.p-link-pure--size-small-xl{font-size:1rem;line-height:1.5}.p-link-pure--size-small-xl .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-small-xl+*{font-size:1rem;line-height:1.5}.p-link-pure--size-small-xl+*::before{font-size:1rem;margin-left:1.5em}.p-link-pure--size-medium-xl{font-size:1.5rem;line-height:1.5}.p-link-pure--size-medium-xl .p-link-pure__icon{width:1.5em;height:1.5em}.p-link-pure--size-medium-xl+*{font-size:1.25rem;line-height:1.4}.p-link-pure--size-medium-xl+*::before{font-size:1.5rem;margin-left:1.5em}.p-link-pure--size-large-xl{font-size:2.25rem;line-height:1.3333333333}.p-link-pure--size-large-xl .p-link-pure__icon{width:1.3333333333em;height:1.3333333333em}.p-link-pure--size-large-xl+*{font-size:1.875rem;line-height:1.3333333333}.p-link-pure--size-large-xl+*::before{font-size:2.25rem;margin-left:1.3333333333em}.p-link-pure--size-x-large-xl{font-size:3.25rem;line-height:1.2307692308}.p-link-pure--size-x-large-xl .p-link-pure__icon{width:1.2307692308em;height:1.2307692308em}.p-link-pure--size-x-large-xl+*{font-size:2.25rem;line-height:1.3333333333}.p-link-pure--size-x-large-xl+*::before{font-size:3.25rem;margin-left:1.2307692308em}.p-link-pure--size-inherit-xl{font-size:inherit;line-height:inherit}.p-link-pure--size-inherit-xl .p-link-pure__icon{width:1.5em;height:1.5em}}.p-link-pure__icon{-ms-flex-negative:0;flex-shrink:0;width:1.5em;height:1.5em}.p-link-pure__label{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;border:0}.p-link-pure__subline{display:-ms-flexbox;display:flex;-webkit-transition:color 0.24s ease;transition:color 0.24s ease;margin-top:4px}.p-link-pure__subline::before{content:\"\"}.p-link-pure__label--visible,.p-link-pure__subline--visible{width:100%;height:auto;margin-left:0.25rem;padding:0 0.125em 0 0;white-space:normal;overflow:visible;text-indent:0}.p-link-pure__label--hidden,.p-link-pure__subline--hidden{width:1px;height:1px;margin-left:-1px;margin-top:0;padding:0;white-space:nowrap;overflow:hidden;text-indent:-1px}@media (min-width: 480px){.p-link-pure__label--visible-xs,.p-link-pure__subline--visible-xs{width:100%;height:auto;margin-left:0.25rem;padding:0 0.125em 0 0;white-space:normal;overflow:visible;text-indent:0}.p-link-pure__label--hidden-xs,.p-link-pure__subline--hidden-xs{width:1px;height:1px;margin-left:-1px;margin-top:0;padding:0;white-space:nowrap;overflow:hidden;text-indent:-1px}}@media (min-width: 760px){.p-link-pure__label--visible-s,.p-link-pure__subline--visible-s{width:100%;height:auto;margin-left:0.25rem;padding:0 0.125em 0 0;white-space:normal;overflow:visible;text-indent:0}.p-link-pure__label--hidden-s,.p-link-pure__subline--hidden-s{width:1px;height:1px;margin-left:-1px;margin-top:0;padding:0;white-space:nowrap;overflow:hidden;text-indent:-1px}}@media (min-width: 1000px){.p-link-pure__label--visible-m,.p-link-pure__subline--visible-m{width:100%;height:auto;margin-left:0.25rem;padding:0 0.125em 0 0;white-space:normal;overflow:visible;text-indent:0}.p-link-pure__label--hidden-m,.p-link-pure__subline--hidden-m{width:1px;height:1px;margin-left:-1px;margin-top:0;padding:0;white-space:nowrap;overflow:hidden;text-indent:-1px}}@media (min-width: 1300px){.p-link-pure__label--visible-l,.p-link-pure__subline--visible-l{width:100%;height:auto;margin-left:0.25rem;padding:0 0.125em 0 0;white-space:normal;overflow:visible;text-indent:0}.p-link-pure__label--hidden-l,.p-link-pure__subline--hidden-l{width:1px;height:1px;margin-left:-1px;margin-top:0;padding:0;white-space:nowrap;overflow:hidden;text-indent:-1px}}@media (min-width: 1760px){.p-link-pure__label--visible-xl,.p-link-pure__subline--visible-xl{width:100%;height:auto;margin-left:0.25rem;padding:0 0.125em 0 0;white-space:normal;overflow:visible;text-indent:0}.p-link-pure__label--hidden-xl,.p-link-pure__subline--hidden-xl{width:1px;height:1px;margin-left:-1px;margin-top:0;padding:0;white-space:nowrap;overflow:hidden;text-indent:-1px}}";
var LinkPure = /** @class */ (function () {
    function LinkPure(hostRef) {
        Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
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
    LinkPure.prototype.componentWillLoad = function () {
        this.setSubline();
        this.addSlottedStyles();
    };
    LinkPure.prototype.componentDidLoad = function () {
        var _this = this;
        Object(_focusHandling_e078221d_js__WEBPACK_IMPORTED_MODULE_6__["i"])(this.host);
        Object(_transition_listener_302b2719_js__WEBPACK_IMPORTED_MODULE_4__["t"])(this.linkTag, 'font-size', function () {
            var size = Object(_line_height_e60665f4_js__WEBPACK_IMPORTED_MODULE_1__["c"])(_this.linkTag);
            _this.iconTag.style.width = size + "em";
            _this.iconTag.style.height = size + "em";
        });
    };
    LinkPure.prototype.render = function () {
        var _this = this;
        var TagType = this.href === undefined ? 'span' : 'a';
        var linkPureClasses = Object(_index_359f03c5_js__WEBPACK_IMPORTED_MODULE_5__["c"])(Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["c"])('link-pure'), Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["m"])('link-pure--size', this.size), Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["c"])("link-pure--theme-" + this.theme), this.active && Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["c"])('link-pure--active'));
        var iconClasses = Object(_index_359f03c5_js__WEBPACK_IMPORTED_MODULE_5__["c"])(Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["c"])('link-pure__icon'));
        var labelClasses = Object(_index_359f03c5_js__WEBPACK_IMPORTED_MODULE_5__["c"])(Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["c"])('link-pure__label'), Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["m"])('link-pure__label-', this.hideLabel, ['hidden', 'visible']));
        var sublineClasses = Object(_index_359f03c5_js__WEBPACK_IMPORTED_MODULE_5__["c"])(Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["c"])('link-pure__subline'), Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["m"])('link-pure__subline-', this.hideLabel, ['hidden', 'visible']));
        return (Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, Object.assign({ class: linkPureClasses }, (TagType === 'a'
            ? {
                href: this.href,
                target: this.target,
                download: this.download,
                rel: this.rel
            }
            : null), { ref: function (el) { return (_this.linkTag = el); } }), Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-icon", { class: iconClasses, color: "inherit", size: "inherit", name: this.icon, source: this.iconSource, ref: function (el) { return (_this.iconTag = el); }, "aria-hidden": "true" }), Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: labelClasses, tag: "span", color: "inherit", size: "inherit", weight: this.weight }, Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))), this.subline && (Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: sublineClasses, color: "inherit", size: "inherit", tag: "div" }, Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "subline" })))));
    };
    LinkPure.prototype.setSubline = function () {
        this.subline = this.host.querySelector('[slot="subline"]');
    };
    LinkPure.prototype.addSlottedStyles = function () {
        var tagName = this.host.tagName.toLowerCase();
        var style = "a:focus " + tagName + " {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }\n\n    /* only for IE11/Edge */\n    " + tagName + " a {\n      text-decoration: none !important;\n    }\n    " + tagName + " a:focus {\n      outline: none !important;\n    }\n\n    /* this hack is only needed for Safari which does not support pseudo elements in slotted context (https://bugs.webkit.org/show_bug.cgi?id=178237) :-( */\n    " + tagName + " a::before {\n      content: \"\" !important;\n      position: absolute !important;\n      top: 0 !important;\n      left: 0 !important;\n      right: 0 !important;\n      bottom: 0 !important;\n      display: block !important;\n      outline: transparent none !important;\n      transition: outline-color 0.24s ease !important;\n    }\n\n    " + tagName + " a:focus::before {\n      outline-offset: 1px !important;\n      outline: #00d5b9 solid 2px !important;\n    }\n    ";
        Object(_slotted_styles_9a18361d_js__WEBPACK_IMPORTED_MODULE_2__["i"])(this.host, style);
    };
    Object.defineProperty(LinkPure.prototype, "host", {
        get: function () { return Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return LinkPure;
}());
LinkPure.style = linkPureCss;



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
//# sourceMappingURL=2.render-page.js.map