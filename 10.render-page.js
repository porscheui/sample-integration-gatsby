exports.ids = [10];
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

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-pagination.entry.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-pagination.entry.js ***!
  \**********************************************************************************************/
/*! exports provided: p_pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_pagination", function() { return Pagination; });
/* harmony import */ var _breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-ff31979d.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-ff31979d.js");
/* harmony import */ var _index_esm_37b6c9b0_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.esm-37b6c9b0.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index.esm-37b6c9b0.js");
/* harmony import */ var _focusHandling_e078221d_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focusHandling-e078221d.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/focusHandling-e078221d.js");



/**
 * Universal pagination model generation algorithm
 *
 * The idea behind this module is to move the logic of creating pagination out of the component
 * and place it in a separate module.
 *
 * Adapted from ultimate-pagination
 * https://github.com/ultimate-pagination/ultimate-pagination
 *
 */
var itemTypes = {
    PAGE: 'PAGE',
    ELLIPSIS: 'ELLIPSIS',
    PREVIOUS_PAGE_LINK: 'PREVIOUS_PAGE_LINK',
    NEXT_PAGE_LINK: 'NEXT_PAGE_LINK'
};
var itemKeys = {
    FIRST_ELLIPSIS: -1,
    SECOND_ELLIPSIS: -2,
    PREVIOUS_PAGE_LINK: -4,
    NEXT_PAGE_LINK: -5
};
var createFirstEllipsis = function (pageNumber) { return ({
    type: itemTypes.ELLIPSIS,
    key: itemKeys.FIRST_ELLIPSIS,
    value: pageNumber,
    isActive: false
}); };
var createSecondEllipsis = function (pageNumber) { return ({
    type: itemTypes.ELLIPSIS,
    key: itemKeys.SECOND_ELLIPSIS,
    value: pageNumber,
    isActive: false
}); };
var createPreviousPageLink = function (options) {
    var activePage = options.activePage;
    return {
        type: itemTypes.PREVIOUS_PAGE_LINK,
        key: itemKeys.PREVIOUS_PAGE_LINK,
        value: Math.max(1, activePage - 1),
        isActive: activePage > 1
    };
};
var createNextPageLink = function (options) {
    var activePage = options.activePage, pageTotal = options.pageTotal;
    return {
        type: itemTypes.NEXT_PAGE_LINK,
        key: itemKeys.NEXT_PAGE_LINK,
        value: Math.min(pageTotal, activePage + 1),
        isActive: activePage < pageTotal
    };
};
var createPageFunctionFactory = function (options) {
    var activePage = options.activePage;
    return function (pageNumber) { return ({
        type: itemTypes.PAGE,
        key: pageNumber,
        value: pageNumber,
        isActive: pageNumber === activePage
    }); };
};
var createRange = function (start, end) {
    var range = [];
    for (var i = start; i <= end; i++) {
        range.push(i);
    }
    return range;
};
var createPaginationModel = function (options) {
    // exception tests
    if (options == null) {
        throw new Error('createPaginationModel(): options object should be a passed');
    }
    var pageTotal = options.pageTotal, activePage = options.activePage, pageRange = options.pageRange;
    var boundaryPagesRange = 1;
    var ellipsisSize = 1;
    var paginationModel = [];
    var createPage = createPageFunctionFactory(options);
    paginationModel.push(createPreviousPageLink(options));
    // Simplify generation of pages if number of available items is equal or greater than total pages to show
    if (1 + 2 * ellipsisSize + 2 * pageRange + 2 * boundaryPagesRange >= pageTotal) {
        var allPages = createRange(1, pageTotal).map(createPage);
        paginationModel.push.apply(paginationModel, allPages);
    }
    else {
        // Calculate group of first pages
        var firstPagesStart = 1;
        var firstPagesEnd = boundaryPagesRange;
        var firstPages = createRange(firstPagesStart, firstPagesEnd).map(createPage);
        // Calculate group of last pages
        var lastPagesStart = pageTotal + 1 - boundaryPagesRange;
        var lastPagesEnd = pageTotal;
        var lastPages = createRange(lastPagesStart, lastPagesEnd).map(createPage);
        // Calculate group of main pages
        var mainPagesStart = Math.min(Math.max(activePage - pageRange, firstPagesEnd + ellipsisSize + 1), lastPagesStart - ellipsisSize - 2 * pageRange - 1);
        var mainPagesEnd = mainPagesStart + 2 * pageRange;
        var mainPages = createRange(mainPagesStart, mainPagesEnd).map(createPage);
        // Add group of first pages
        paginationModel.push.apply(paginationModel, firstPages);
        // Calculate and add ellipsis before group of main pages
        var firstEllipsisPageNumber = mainPagesStart - 1;
        var showPageInsteadOfFirstEllipsis = firstEllipsisPageNumber === firstPagesEnd + 1;
        var createFirstEllipsisOrPage = showPageInsteadOfFirstEllipsis ? createPage : createFirstEllipsis;
        var firstEllipsis = createFirstEllipsisOrPage(firstEllipsisPageNumber);
        paginationModel.push(firstEllipsis);
        // Add group of main pages
        paginationModel.push.apply(paginationModel, mainPages);
        // Calculate and add ellipsis after group of main pages
        var secondEllipsisPageNumber = mainPagesEnd + 1;
        var showPageInsteadOfSecondEllipsis = secondEllipsisPageNumber === lastPagesStart - 1;
        var createSecondEllipsisOrPage = showPageInsteadOfSecondEllipsis ? createPage : createSecondEllipsis;
        var secondEllipsis = createSecondEllipsisOrPage(secondEllipsisPageNumber);
        paginationModel.push(secondEllipsis);
        // Add group of last pages
        paginationModel.push.apply(paginationModel, lastPages);
    }
    paginationModel.push(createNextPageLink(options));
    return paginationModel;
};
var getCurrentActivePage = function (activePage, totalPages) {
    // exception tests
    if (activePage === undefined || totalPages === undefined) {
        throw new Error('getCurrentActivePage(): activePage and totalPages props must be provided');
    }
    // Obviously we can't be on a negative or 0 page.
    if (activePage < 1) {
        activePage = 1;
    }
    // If the user has done something like /page/99999 we want to clamp that back down.
    if (activePage > totalPages) {
        activePage = totalPages;
    }
    return activePage;
};
var getTotalPages = function (totalItemsCount, itemsPerPage) {
    // exception test
    if (totalItemsCount === undefined || itemsPerPage === undefined) {
        throw new Error('getTotalPages(): totalItemsCount and itemsPerPage props must be provided');
    }
    if (totalItemsCount < 1) {
        totalItemsCount = 1;
    }
    if (itemsPerPage < 1) {
        itemsPerPage = 1;
    }
    return Math.ceil(totalItemsCount / itemsPerPage);
};
var listeners = new Map();
var handleResize = Object(_index_esm_37b6c9b0_js__WEBPACK_IMPORTED_MODULE_1__["t"])(500, function () {
    listeners.forEach(function (callback) {
        callback();
    });
});
var attachListenerIfNeeded = function () {
    if (listeners.size === 1) {
        window.addEventListener('resize', handleResize);
    }
};
var removeListenerIfNotNeededAnymore = function () {
    if (listeners.size < 1) {
        window.removeEventListener('resize', handleResize);
    }
};
var listenResize = function (callback) {
    var token = {};
    listeners.set(token, callback);
    attachListenerIfNeeded();
    return function () {
        listeners.delete(token);
        removeListenerIfNotNeededAnymore();
    };
};
var readCounterResetValue = function (element) {
    var computedStyles = window.getComputedStyle(element);
    var resetValues = computedStyles.getPropertyValue('counter-reset');
    var resetValuesAsObject = resetValues.split(' ').reduce(function (accumulator, value) {
        var _a;
        if (!accumulator.buffer) {
            return Object.assign(Object.assign({}, accumulator), { buffer: value });
        }
        return {
            buffer: null,
            result: Object.assign(Object.assign({}, accumulator.result), (_a = {}, _a[accumulator.buffer] = parseInt(value, 10), _a))
        };
    }, {
        buffer: null,
        result: {}
    });
    return resetValuesAsObject.result;
};
var paginationCss = "@charset \"UTF-8\";:host{display:block}.p-pagination{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin:0;padding:0}.p-pagination--size-5{counter-reset:size 5}.p-pagination--size-7{counter-reset:size 7}@media (min-width: 480px){.p-pagination--size-5-xs{counter-reset:size 5}.p-pagination--size-7-xs{counter-reset:size 7}}@media (min-width: 760px){.p-pagination--size-5-s{counter-reset:size 5}.p-pagination--size-7-s{counter-reset:size 7}}@media (min-width: 1000px){.p-pagination--size-5-m{counter-reset:size 5}.p-pagination--size-7-m{counter-reset:size 7}}@media (min-width: 1300px){.p-pagination--size-5-l{counter-reset:size 5}.p-pagination--size-7-l{counter-reset:size 7}}@media (min-width: 1760px){.p-pagination--size-5-xl{counter-reset:size 5}.p-pagination--size-7-xl{counter-reset:size 7}}.p-pagination__items{display:-ms-flexbox;display:flex;margin:0;padding:0}.p-pagination__item{list-style-type:none;margin:0;padding:0}.p-pagination__goto,.p-pagination__prev,.p-pagination__next{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-webkit-transition:color 0.24s ease, outline-color 0.24s ease;transition:color 0.24s ease, outline-color 0.24s ease;position:relative;width:2.5rem;height:2.5rem;-webkit-box-sizing:border-box;box-sizing:border-box;outline:none transparent}.p-pagination__goto:focus,.p-pagination__prev:focus,.p-pagination__next:focus{outline-width:2px;outline-style:solid}.p-pagination--theme-light .p-pagination__goto:focus,.p-pagination--theme-light .p-pagination__prev:focus,.p-pagination--theme-light .p-pagination__next:focus{outline-color:#00d5b9}.p-pagination--theme-dark .p-pagination__goto:focus,.p-pagination--theme-dark .p-pagination__prev:focus,.p-pagination--theme-dark .p-pagination__next:focus{outline-color:#00d5b9}.p-pagination__goto:active,.p-pagination__prev:active,.p-pagination__next:active{outline:none}.p-pagination--theme-light .p-pagination__goto:active,.p-pagination--theme-light .p-pagination__prev:active,.p-pagination--theme-light .p-pagination__next:active{color:#d5001c}.p-pagination--theme-dark .p-pagination__goto:active,.p-pagination--theme-dark .p-pagination__prev:active,.p-pagination--theme-dark .p-pagination__next:active{color:#d5001c}.p-pagination__goto{font-size:1rem;line-height:1.5;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:400;text-decoration:none;cursor:pointer}.p-pagination--theme-light .p-pagination__goto{color:#000}.p-pagination--theme-dark .p-pagination__goto{color:#fff}.p-pagination--theme-light .p-pagination__goto:hover{color:#d5001c}.p-pagination--theme-dark .p-pagination__goto:hover{color:#d5001c}.p-pagination__goto--current{cursor:default}.p-pagination--theme-light .p-pagination__goto--current:hover{color:#000}.p-pagination--theme-dark .p-pagination__goto--current:hover{color:#fff}.p-pagination__goto--current::after{content:\"\";display:block;position:absolute;bottom:0;left:0.375rem;right:0.375rem;height:0.25rem}.p-pagination--theme-light .p-pagination__goto--current::after{background-color:#d5001c}.p-pagination--theme-dark .p-pagination__goto--current::after{background-color:#d5001c}.p-pagination__goto--ellipsis{cursor:default}.p-pagination--theme-light .p-pagination__goto--ellipsis:hover{color:#000}.p-pagination--theme-dark .p-pagination__goto--ellipsis:hover{color:#fff}.p-pagination__goto--ellipsis::after{content:\"…\"}.p-pagination__prev,.p-pagination__next{text-decoration:none;cursor:pointer}.p-pagination--theme-light .p-pagination__prev,.p-pagination--theme-light .p-pagination__next{color:#000}.p-pagination--theme-dark .p-pagination__prev,.p-pagination--theme-dark .p-pagination__next{color:#fff}.p-pagination--theme-light .p-pagination__prev:hover,.p-pagination--theme-light .p-pagination__next:hover{color:#d5001c}.p-pagination--theme-dark .p-pagination__prev:hover,.p-pagination--theme-dark .p-pagination__next:hover{color:#d5001c}.p-pagination__prev--disabled,.p-pagination__next--disabled{cursor:default}.p-pagination--theme-light .p-pagination__prev--disabled,.p-pagination--theme-light .p-pagination__next--disabled{color:#96989a}.p-pagination--theme-dark .p-pagination__prev--disabled,.p-pagination--theme-dark .p-pagination__next--disabled{color:#7c7f81}.p-pagination--theme-light .p-pagination__prev--disabled:hover,.p-pagination--theme-light .p-pagination__next--disabled:hover{color:#96989a}.p-pagination--theme-dark .p-pagination__prev--disabled:hover,.p-pagination--theme-dark .p-pagination__next--disabled:hover{color:#7c7f81}";
var Pagination = /** @class */ (function () {
    function Pagination(hostRef) {
        Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The total count of items. */
        this.totalItemsCount = 1;
        /** The total count of items which should be shown per page.  */
        this.itemsPerPage = 1;
        /** Index of the currently active page. */
        this.activePage = 1;
        /** The maximum number of page links rendered */
        this.maxNumberOfPageLinks = {
            base: 5,
            xs: 7
        };
        /** Aria label what the pagination is used for. */
        this.allyLabel = 'Pagination';
        /** Aria label for previous page icon. */
        this.allyLabelPrev = 'Previous page';
        /** Aria label for page navigation. */
        this.allyLabelPage = 'Page';
        /** Aria label for next page icon. */
        this.allyLabelNext = 'Next page';
        /** Adapts the color when used on dark background. */
        this.theme = 'light';
        this.pageChange = Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this, "pageChange", 7);
    }
    Pagination.prototype.onActivePageChange = function (page, previousPage) {
        this.pageChange.emit({ page: page, previousPage: previousPage });
    };
    Pagination.prototype.componentDidLoad = function () {
        var _this = this;
        Object(_focusHandling_e078221d_js__WEBPACK_IMPORTED_MODULE_2__["i"])(this.element);
        this.unlistenResize = listenResize(function () {
            _this.updateMaxNumberOfPageLinks();
        });
        this.updateMaxNumberOfPageLinks();
    };
    Pagination.prototype.disconnectedCallback = function () {
        this.unlistenResize();
    };
    Pagination.prototype.render = function () {
        var _a;
        var _this = this;
        var pageRange = this.breakpointMaxNumberOfPageLinks === 7 ? 1 : 0;
        var paginationClasses = Object.assign((_a = {}, _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('pagination')] = true, _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])("pagination--theme-" + this.theme)] = true, _a), Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["m"])('pagination--size', this.maxNumberOfPageLinks));
        var paginationItemsClasses = Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('pagination__items');
        var pageTotal = getTotalPages(this.totalItemsCount, this.itemsPerPage);
        var activePage = getCurrentActivePage(this.activePage, pageTotal);
        // generate pagination items
        var createPaginationItems = function () {
            var paginationModel = createPaginationModel({
                activePage: activePage,
                pageTotal: pageTotal,
                pageRange: pageRange
            });
            var pageItems = [];
            var prevItem;
            var nextItem;
            var paginationItemClasses = Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('pagination__item');
            paginationModel.forEach(function (pageModel) {
                var _a, _b, _c, _d;
                if (pageModel.type === itemTypes.PREVIOUS_PAGE_LINK) {
                    var paginationPrevClasses = (_a = {},
                        _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('pagination__prev')] = true,
                        _a[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('pagination__prev--disabled')] = !pageModel.isActive,
                        _a);
                    return (prevItem = (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", Object.assign({}, pageModel, { class: paginationItemClasses }), Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: paginationPrevClasses, role: 'button', tabIndex: pageModel.isActive ? 0 : null, onClick: function () { return _this.onClick(pageModel.value); }, onKeyDown: function (e) { return _this.onKeyDown(e, pageModel.value); }, "aria-disabled": !pageModel.isActive && 'true', "aria-label": _this.allyLabelPrev }, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-icon", { name: "arrow-head-left", color: "inherit" })))));
                }
                if (pageModel.type === itemTypes.ELLIPSIS) {
                    var paginationGoToClasses = (_b = {},
                        _b[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('pagination__goto')] = true,
                        _b[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('pagination__goto--ellipsis')] = true,
                        _b);
                    pageItems.push(Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", Object.assign({}, pageModel, { class: paginationItemClasses }), Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: paginationGoToClasses })));
                }
                if (pageModel.type === itemTypes.PAGE) {
                    var paginationGoToClasses = (_c = {},
                        _c[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('pagination__goto')] = true,
                        _c[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('pagination__goto--current')] = pageModel.isActive,
                        _c);
                    pageItems.push(Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", Object.assign({}, pageModel, { class: paginationItemClasses }), Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: paginationGoToClasses, role: 'button', tabIndex: pageModel.isActive ? null : 0, "aria-disabled": pageModel.isActive && 'true', onClick: function () { return _this.onClick(pageModel.value); }, onKeyDown: function (e) { return _this.onKeyDown(e, pageModel.value); }, "aria-label": _this.allyLabelPage + " " + pageModel.value, "aria-current": pageModel.isActive && 'page' }, pageModel.value)));
                }
                if (pageModel.type === itemTypes.NEXT_PAGE_LINK) {
                    var paginationNextClasses = (_d = {},
                        _d[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('pagination__next')] = true,
                        _d[Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["c"])('pagination__next--disabled')] = !pageModel.isActive,
                        _d);
                    return (nextItem = (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", Object.assign({}, pageModel, { class: paginationItemClasses }), Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: paginationNextClasses, role: 'button', tabIndex: pageModel.isActive ? 0 : null, onClick: function () { return _this.onClick(pageModel.value); }, onKeyDown: function (e) { return _this.onKeyDown(e, pageModel.value); }, "aria-disabled": !pageModel.isActive && 'true', "aria-label": _this.allyLabelNext }, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-icon", { name: "arrow-head-right", color: "inherit" })))));
                }
            });
            return {
                prevItem: prevItem,
                pageItems: pageItems,
                nextItem: nextItem
            };
        };
        var paginationItems = createPaginationItems();
        return (Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("nav", { class: paginationClasses, role: "navigation", "aria-label": this.allyLabel, ref: function (el) { return (_this.navigationElement = el); } }, Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { class: paginationItemsClasses }, paginationItems.prevItem, paginationItems.pageItems, paginationItems.nextItem)));
    };
    Pagination.prototype.onKeyDown = function (event, page) {
        /**
         * from https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/button_role
         */
        if (event.key === ' ' || event.key === 'Enter' || event.key === 'Spacebar') {
            /**
             * Prevent the default action to stop scrolling when space is pressed
             */
            event.preventDefault();
            this.onClick(page);
        }
    };
    Pagination.prototype.onClick = function (page) {
        if (page !== this.activePage) {
            this.activePage = page;
        }
    };
    Pagination.prototype.updateMaxNumberOfPageLinks = function () {
        var size = readCounterResetValue(this.navigationElement).size;
        this.breakpointMaxNumberOfPageLinks = size;
    };
    Object.defineProperty(Pagination.prototype, "element", {
        get: function () { return Object(_breakpointCustomizable_ff31979d_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pagination, "watchers", {
        get: function () {
            return {
                "activePage": ["onActivePageChange"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return Pagination;
}());
Pagination.style = paginationCss;



/***/ })

};;
//# sourceMappingURL=10.render-page.js.map