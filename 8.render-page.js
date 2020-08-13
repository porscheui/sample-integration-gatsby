exports.ids = [8];
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

/***/ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/line-height-c7d0058c.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/line-height-c7d0058c.js ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return calcLineHeightForElement; });
/* harmony import */ var _breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-063d6106.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-063d6106.js");

var calcLineHeightForElement = function (tag) {
    var fontSize = window.getComputedStyle(tag).fontSize;
    // fontSize is "" when element does no longer exist and would throw an exception in calculateLineHeight
    return fontSize && Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["e"])(fontSize);
};



/***/ }),

/***/ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/p-icon_2.entry.js":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/p-icon_2.entry.js ***!
  \***********************************************************************************************************************************************/
/*! exports provided: p_icon, p_text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_text", function() { return Text; });
/* harmony import */ var _breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-063d6106.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-063d6106.js");
/* harmony import */ var _line_height_c7d0058c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-height-c7d0058c.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/line-height-c7d0058c.js");
/* harmony import */ var _slotted_styles_9a18361d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slotted-styles-9a18361d.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/slotted-styles-9a18361d.js");
/* harmony import */ var _index_esm_37b6c9b0_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.esm-37b6c9b0.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/index.esm-37b6c9b0.js");
/* harmony import */ var _transition_listener_302b2719_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./transition-listener-302b2719.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/transition-listener-302b2719.js");
/* harmony import */ var _index_45be8764_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index-45be8764.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/index-45be8764.js");
/* harmony import */ var _index_9849e1be_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-9849e1be.js */ "./node_modules/@porsche-design-system/components-react/node_modules/@porsche-design-system/components-js/dist/esm-es5/index-9849e1be.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var isUrl = function (str) { return (str === null || str === void 0 ? void 0 : str.length) > 0 && /(\/)/.test(str); };
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var isStr = function (val) { return typeof val === 'string'; };
var validateContent = function (svgContent) {
    if (svgContent) {
        var div = document.createElement('div');
        div.innerHTML = svgContent;
        // setup this way to ensure it works on our buddy IE
        for (var i = div.childNodes.length - 1; i >= 0; i--) {
            if (div.childNodes[i].nodeName.toLowerCase() !== 'svg') {
                div.removeChild(div.childNodes[i]);
            }
        }
        // must only have 1 root element
        var svgElm = div.firstElementChild;
        if (svgElm && svgElm.nodeName.toLowerCase() === 'svg') {
            // root element must be an svg
            // lets double check we've got valid elements
            // do not allow scripts
            if (isValid(svgElm)) {
                return div.innerHTML;
            }
        }
    }
    return '';
};
var isValid = function (elm) {
    if (elm.nodeType === 1) {
        if (elm.nodeName.toLowerCase() === 'script') {
            return false;
        }
        for (var i = 0; i < elm.attributes.length; i++) {
            var val = elm.attributes[i].value;
            if (isStr(val) && val.toLowerCase().startsWith('on')) {
                return false;
            }
        }
        for (var i = 0; i < elm.childNodes.length; i++) {
            if (!isValid(elm.childNodes[i])) {
                return false;
            }
        }
    }
    return true;
};
/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
/**
 * Lower case as a function.
 */
function lowerCase(str) {
    return str.toLowerCase();
}
// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
// Remove all non-word characters.
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
/**
 * Normalize the string into something other libraries can manipulate easier.
 */
function noCase(input, options) {
    if (options === void 0) {
        options = {};
    }
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    var start = 0;
    var end = result.length;
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === "\0")
        start++;
    while (result.charAt(end - 1) === "\0")
        end--;
    // Transform each token independently.
    return result
        .slice(start, end)
        .split("\0")
        .map(transform)
        .join(delimiter);
}
/**
 * Replace `re` in the input string with the replacement value.
 */
function replace(input, re, value) {
    if (re instanceof RegExp)
        return input.replace(re, value);
    return re.reduce(function (input, re) { return input.replace(re, value); }, input);
}
function pascalCaseTransform(input, index) {
    var firstChar = input.charAt(0);
    var lowerChars = input.substr(1).toLowerCase();
    if (index > 0 && firstChar >= "0" && firstChar <= "9") {
        return "_" + firstChar + lowerChars;
    }
    return "" + firstChar.toUpperCase() + lowerChars;
}
function pascalCase(input, options) {
    if (options === void 0) {
        options = {};
    }
    return noCase(input, Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["_"])({ delimiter: "", transform: pascalCaseTransform }, options));
}
function camelCaseTransform(input, index) {
    if (index === 0)
        return input.toLowerCase();
    return pascalCaseTransform(input, index);
}
function camelCase(input, options) {
    if (options === void 0) {
        options = {};
    }
    return pascalCase(input, Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["_"])({ transform: camelCaseTransform }, options));
}
/**
 * TODO: Cache is shared between tests and never cleared. Evaluate solution.
 * */
var DEFAULT_ICON_NAME = 'arrow-head-right';
var requestCache = new Map();
var getSvgContent = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    var req;
    return __generator(this, function (_e) {
        req = requestCache.get(url);
        if (req === undefined) {
            req = fetch(url).then(function (rsp) { return (rsp.ok ? rsp.text().then(validateContent) : ''); }, function () { return ''; } // reject callback
            );
            requestCache.set(url, req);
        }
        return [2 /*return*/, req];
    });
}); };
var buildIconUrl = function (iconNameOrSource) {
    if (iconNameOrSource === void 0) { iconNameOrSource = DEFAULT_ICON_NAME; }
    var cdnBaseUrl = _index_9849e1be_js__WEBPACK_IMPORTED_MODULE_6__["b"];
    if (iconNameOrSource === null) {
        return buildIconUrl(DEFAULT_ICON_NAME);
    }
    else if (isUrl(iconNameOrSource)) {
        return iconNameOrSource;
    }
    else if (_index_9849e1be_js__WEBPACK_IMPORTED_MODULE_6__["I"][camelCase(iconNameOrSource)]) {
        // check if IconName exists
        return cdnBaseUrl + "/" + _index_9849e1be_js__WEBPACK_IMPORTED_MODULE_6__["I"][camelCase(iconNameOrSource)];
    }
    // Only occurs if consumer is not using typescript -> necessary?
    console.warn('Please provide either an name property or a source property!');
    return buildIconUrl(DEFAULT_ICON_NAME);
};
var iconCss = ":host{display:-ms-inline-flexbox;display:inline-flex;vertical-align:top}.p-icon{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:1.5rem;height:1.5rem}.p-icon--size-small{width:1.5rem;height:1.5rem}.p-icon--size-medium{width:2.25rem;height:2.25rem}.p-icon--size-large{width:3rem;height:3rem}.p-icon--size-inherit{width:inherit;height:inherit}.p-icon--color-brand.p-icon--theme-light{fill:#d5001c}.p-icon--color-brand.p-icon--theme-dark{fill:#d5001c}.p-icon--color-default.p-icon--theme-light{fill:#000}.p-icon--color-default.p-icon--theme-dark{fill:#fff}.p-icon--color-neutral-contrast-high.p-icon--theme-light{fill:#323639}.p-icon--color-neutral-contrast-high.p-icon--theme-dark{fill:#e3e4e5}.p-icon--color-neutral-contrast-medium.p-icon--theme-light{fill:#626669}.p-icon--color-neutral-contrast-medium.p-icon--theme-dark{fill:#b0b1b2}.p-icon--color-neutral-contrast-low.p-icon--theme-light{fill:#c9cacb}.p-icon--color-neutral-contrast-low.p-icon--theme-dark{fill:#4a4e51}.p-icon--color-notification-success.p-icon--theme-light{fill:#018a16}.p-icon--color-notification-success.p-icon--theme-dark{fill:#01ba1d}.p-icon--color-notification-warning.p-icon--theme-light{fill:#ff9b00}.p-icon--color-notification-warning.p-icon--theme-dark{fill:#ff9b00}.p-icon--color-notification-error.p-icon--theme-light{fill:#e00000}.p-icon--color-notification-error.p-icon--theme-dark{fill:#fc1717}.p-icon--color-notification-neutral.p-icon--theme-light{fill:#0061BD}.p-icon--color-notification-neutral.p-icon--theme-dark{fill:#2193FF}.p-icon--color-inherit{fill:currentColor}";
var Icon = /** @class */ (function () {
    function Icon(hostRef) {
        Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Specifies which icon to use.
         */
        this.name = DEFAULT_ICON_NAME;
        /**
         * @internal
         * Specifies which icon variant to use.
         */
        this.variant = 'outline';
        /** Basic color variations depending on theme property. */
        this.color = 'default';
        /**
         * The size of the icon.
         */
        this.size = 'small';
        /**
         * If enabled, ion-icon will be loaded lazily when it's visible in the viewport.
         * Default, `false`.
         */
        this.lazy = false;
        /** Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop. */
        this.theme = 'light';
        this.isVisible = false;
    }
    Icon.prototype.loadIcon = function () {
        var _this = this;
        var _a;
        if (this.isVisible) {
            this.svgContent = undefined; // reset svg content while new icon is loaded
            var url_1 = buildIconUrl((_a = this.source) !== null && _a !== void 0 ? _a : this.name);
            getSvgContent(url_1).then(function (iconContent) {
                var _a;
                if (url_1 === buildIconUrl((_a = _this.source) !== null && _a !== void 0 ? _a : _this.name)) { // check if response matches current icon source
                    _this.svgContent = iconContent;
                }
            });
        }
    };
    Icon.prototype.connectedCallback = function () {
        var _this = this;
        // purposely do not return the promise here because loading
        // the svg file should not hold up loading the app
        // only load the svg if it's visible
        this.waitUntilVisible(this.el, '50px', function () {
            _this.isVisible = true;
            _this.loadIcon();
        });
    };
    Icon.prototype.disconnectedCallback = function () {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    };
    Icon.prototype.render = function () {
        var iconClasses = Object(_index_45be8764_js__WEBPACK_IMPORTED_MODULE_5__["c"])(Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('icon'), Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])("icon--size-" + this.size), Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])("icon--color-" + this.color), this.color !== 'inherit' && Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])("icon--theme-" + this.theme));
        return (Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: iconClasses, innerHTML: this.svgContent })));
    };
    Icon.prototype.waitUntilVisible = function (el, rootMargin, cb) {
        var _this = this;
        if (this.lazy && typeof window !== 'undefined' && window.IntersectionObserver) {
            var io_1 = this.io = new window.IntersectionObserver(function (data) {
                if (data[0].isIntersecting) {
                    io_1.disconnect();
                    _this.io = undefined;
                    cb();
                }
            }, { rootMargin: rootMargin });
            io_1.observe(el);
        }
        else {
            // browser doesn't support IntersectionObserver
            // so just fallback to always show it
            cb();
        }
    };
    Object.defineProperty(Icon.prototype, "el", {
        get: function () { return Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Icon, "watchers", {
        get: function () {
            return {
                "source": ["loadIcon"],
                "name": ["loadIcon"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return Icon;
}());
Icon.style = iconCss;
var textCss = ":host{display:block}::slotted(p),::slotted(address),::slotted(blockquote),::slotted(figcaption),::slotted(cite),::slotted(time),::slotted(legend){margin:0 !important;padding:0 !important;font-style:normal !important;font-size:inherit !important}.p-text{font-size:1rem;line-height:1.5;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:400;padding:0;margin:0;list-style-type:none;display:inherit;-webkit-transition:font-size 1ms linear;transition:font-size 1ms linear}.p-text--size-x-small{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small{font-size:1rem;line-height:1.5}.p-text--size-medium{font-size:1.5rem;line-height:1.5}.p-text--size-large{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit{font-size:inherit;line-height:inherit}@media (min-width: 480px){.p-text--size-x-small-xs{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small-xs{font-size:1rem;line-height:1.5}.p-text--size-medium-xs{font-size:1.5rem;line-height:1.5}.p-text--size-large-xs{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large-xs{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit-xs{font-size:inherit;line-height:inherit}}@media (min-width: 760px){.p-text--size-x-small-s{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small-s{font-size:1rem;line-height:1.5}.p-text--size-medium-s{font-size:1.5rem;line-height:1.5}.p-text--size-large-s{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large-s{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit-s{font-size:inherit;line-height:inherit}}@media (min-width: 1000px){.p-text--size-x-small-m{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small-m{font-size:1rem;line-height:1.5}.p-text--size-medium-m{font-size:1.5rem;line-height:1.5}.p-text--size-large-m{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large-m{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit-m{font-size:inherit;line-height:inherit}}@media (min-width: 1300px){.p-text--size-x-small-l{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small-l{font-size:1rem;line-height:1.5}.p-text--size-medium-l{font-size:1.5rem;line-height:1.5}.p-text--size-large-l{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large-l{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit-l{font-size:inherit;line-height:inherit}}@media (min-width: 1760px){.p-text--size-x-small-xl{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small-xl{font-size:1rem;line-height:1.5}.p-text--size-medium-xl{font-size:1.5rem;line-height:1.5}.p-text--size-large-xl{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large-xl{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit-xl{font-size:inherit;line-height:inherit}}.p-text--weight-thin{font-weight:100}.p-text--weight-regular{font-weight:400}.p-text--weight-semibold{font-weight:600}.p-text--weight-bold{font-weight:700}.p-text--align-left{text-align:left}.p-text--align-center{text-align:center}.p-text--align-right{text-align:right}.p-text--color-brand.p-text--theme-light{color:#d5001c}.p-text--color-brand.p-text--theme-dark{color:#d5001c}.p-text--color-default.p-text--theme-light{color:#000}.p-text--color-default.p-text--theme-dark{color:#fff}.p-text--color-neutral-contrast-high.p-text--theme-light{color:#323639}.p-text--color-neutral-contrast-high.p-text--theme-dark{color:#e3e4e5}.p-text--color-neutral-contrast-medium.p-text--theme-light{color:#626669}.p-text--color-neutral-contrast-medium.p-text--theme-dark{color:#b0b1b2}.p-text--color-neutral-contrast-low.p-text--theme-light{color:#c9cacb}.p-text--color-neutral-contrast-low.p-text--theme-dark{color:#4a4e51}.p-text--color-notification-success.p-text--theme-light{color:#018a16}.p-text--color-notification-success.p-text--theme-dark{color:#01ba1d}.p-text--color-notification-warning.p-text--theme-light{color:#ff9b00}.p-text--color-notification-warning.p-text--theme-dark{color:#ff9b00}.p-text--color-notification-error.p-text--theme-light{color:#e00000}.p-text--color-notification-error.p-text--theme-dark{color:#fc1717}.p-text--color-notification-neutral.p-text--theme-light{color:#0061BD}.p-text--color-notification-neutral.p-text--theme-dark{color:#2193FF}.p-text--color-inherit{color:inherit}.p-text--ellipsis{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";
var Text = /** @class */ (function () {
    function Text(hostRef) {
        Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** Sets a custom HTML tag depending of the usage of the text component. */
        this.tag = 'p';
        /** Size of the text. Also defines the size for specific breakpoints, like {base: "small", l: "medium"}. You always need to provide a base value when doing this. */
        this.size = 'small';
        /** The weight of the text. */
        this.weight = 'regular';
        /** Text alignment of the component. */
        this.align = 'left';
        /** Basic text color variations depending on theme property. */
        this.color = 'default';
        /** Adds an ellipsis to a single line of text if it overflows. */
        this.ellipsis = false;
        /** Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop. */
        this.theme = 'light';
    }
    Text.prototype.componentWillLoad = function () {
        this.addSlottedStyles();
    };
    Text.prototype.componentDidLoad = function () {
        this.bindFontSizeListener();
    };
    Text.prototype.render = function () {
        var _this = this;
        var TagType = this.hasSlottedTextTag ? 'div' : this.tag;
        var textClasses = Object(_index_45be8764_js__WEBPACK_IMPORTED_MODULE_5__["c"])(Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text'), Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["m"])('text--size', this.size), Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])("text--weight-" + this.weight), Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])("text--align-" + this.align), Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])("text--color-" + this.color), this.ellipsis && Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])('text--ellipsis'), this.color !== 'inherit' && Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["c"])("text--theme-" + this.theme));
        return (Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, { class: textClasses, ref: function (el) { return _this.textTag = el; } }, Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    Object.defineProperty(Text.prototype, "hasSlottedTextTag", {
        get: function () {
            var el = this.host.querySelector(':first-child');
            return el === null || el === void 0 ? void 0 : el.matches('p, span, div, address, blockquote, figcaption, cite, time, legend');
        },
        enumerable: false,
        configurable: true
    });
    Text.prototype.bindFontSizeListener = function () {
        var _this = this;
        Object(_transition_listener_302b2719_js__WEBPACK_IMPORTED_MODULE_4__["t"])(this.textTag, 'font-size', function () {
            _this.textTag.style.lineHeight = "" + Object(_line_height_c7d0058c_js__WEBPACK_IMPORTED_MODULE_1__["c"])(_this.textTag);
        });
    };
    Text.prototype.addSlottedStyles = function () {
        var tagName = this.host.tagName.toLowerCase();
        var style = tagName + " a {\n      outline: none transparent;\n      color: inherit;\n      text-decoration: underline;\n      -webkit-transition: outline-color .24s ease, color .24s ease;\n      transition: outline-color .24s ease, color .24s ease;\n    }\n\n    " + tagName + " a:hover {\n      color: #d5001c;\n    }\n\n    " + tagName + " a:focus {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }";
        Object(_slotted_styles_9a18361d_js__WEBPACK_IMPORTED_MODULE_2__["i"])(this.host, style);
    };
    Object.defineProperty(Text.prototype, "host", {
        get: function () { return Object(_breakpointCustomizable_063d6106_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return Text;
}());
Text.style = textCss;



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
//# sourceMappingURL=8.render-page.js.map