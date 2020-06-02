exports.ids = [6];
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

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-pagination.entry.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-pagination.entry.js ***!
  \**********************************************************************************************/
/*! exports provided: p_pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_pagination", function() { return Pagination; });
/* harmony import */ var _index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-381d535c.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-381d535c.js");
/* harmony import */ var _index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-0a27866a.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-0a27866a.js");
/* harmony import */ var _focusHandling_e515b816_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./focusHandling-e515b816.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/focusHandling-e515b816.js");



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
var handleResize = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["d"])(500, function () {
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
        Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The total count of items. */
        this.totalItemsCount = 1;
        /** The total count of items which should be shown per page.  */
        this.itemsPerPage = 1;
        /** Index of the currently active page. */
        this.activePage = 1;
        /** The maximum number of page links rendered */
        this.maxNumberOfPageLinks = { base: 5, xs: 7 };
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
        this.pageChange = Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "pageChange", 7);
    }
    Pagination.prototype.onActivePageChange = function (page, previousPage) {
        this.pageChange.emit({ page: page, previousPage: previousPage });
    };
    Pagination.prototype.componentDidLoad = function () {
        var _this = this;
        Object(_focusHandling_e515b816_js__WEBPACK_IMPORTED_MODULE_2__["i"])(this.element);
        this.unlistenResize = listenResize(function () {
            _this.updateMaxNumberOfPageLinks();
        });
        this.updateMaxNumberOfPageLinks();
    };
    Pagination.prototype.componentDidUnload = function () {
        this.unlistenResize();
    };
    Pagination.prototype.render = function () {
        var _this = this;
        var breakpointClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["m"])('pagination--size', this.maxNumberOfPageLinks);
        var pageRange = this.breakpointMaxNumberOfPageLinks === 7 ? 1 : 0;
        var paginationClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(breakpointClasses, Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('pagination'), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("pagination--theme-" + this.theme));
        var paginationItemsClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('pagination__items'));
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
            var paginationItemClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('pagination__item'));
            paginationModel.forEach(function (pageModel) {
                if (pageModel.type === itemTypes.PREVIOUS_PAGE_LINK) {
                    var paginationPrevClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('pagination__prev'), !pageModel.isActive && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('pagination__prev--disabled'));
                    return (prevItem = (Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", Object.assign({}, pageModel, { class: paginationItemClasses }), Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: paginationPrevClasses, role: 'button', tabIndex: pageModel.isActive ? 0 : null, onClick: function () {
                            _this.onClick(pageModel.value);
                        }, onKeyDown: function (e) {
                            _this.onKeyDown(e, pageModel.value);
                        }, "aria-disabled": !pageModel.isActive && 'true', "aria-label": _this.allyLabelPrev }, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-icon", { name: 'arrow-head-left', color: 'inherit' })))));
                }
                if (pageModel.type === itemTypes.ELLIPSIS) {
                    var paginationGoToClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('pagination__goto'), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('pagination__goto--ellipsis'));
                    pageItems.push(Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", Object.assign({}, pageModel, { class: paginationItemClasses }), Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: paginationGoToClasses })));
                }
                if (pageModel.type === itemTypes.PAGE) {
                    var paginationGoToClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('pagination__goto'), pageModel.isActive && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('pagination__goto--current'));
                    pageItems.push(Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", Object.assign({}, pageModel, { class: paginationItemClasses }), Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: paginationGoToClasses, role: 'button', tabIndex: pageModel.isActive ? null : 0, "aria-disabled": pageModel.isActive && 'true', onClick: function () {
                            _this.onClick(pageModel.value);
                        }, onKeyDown: function (e) {
                            _this.onKeyDown(e, pageModel.value);
                        }, "aria-label": _this.allyLabelPage + " " + pageModel.value, "aria-current": pageModel.isActive && 'page' }, pageModel.value)));
                }
                if (pageModel.type === itemTypes.NEXT_PAGE_LINK) {
                    var paginationNextClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('pagination__next'), !pageModel.isActive && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('pagination__next--disabled'));
                    return (nextItem = (Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", Object.assign({}, pageModel, { class: paginationItemClasses }), Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: paginationNextClasses, role: 'button', tabIndex: pageModel.isActive ? 0 : null, onClick: function () {
                            _this.onClick(pageModel.value);
                        }, onKeyDown: function (e) {
                            _this.onKeyDown(e, pageModel.value);
                        }, "aria-disabled": !pageModel.isActive && 'true', "aria-label": _this.allyLabelNext }, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-icon", { name: 'arrow-head-right', color: 'inherit' })))));
                }
            });
            return {
                prevItem: prevItem,
                pageItems: pageItems,
                nextItem: nextItem
            };
        };
        var paginationItems = createPaginationItems();
        return (Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("nav", { class: paginationClasses, role: 'navigation', "aria-label": this.allyLabel, ref: function (el) { return _this.navigationElement = el; } }, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { class: paginationItemsClasses }, paginationItems.prevItem, paginationItems.pageItems, paginationItems.nextItem)));
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
        get: function () { return Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Pagination, "watchers", {
        get: function () {
            return {
                "activePage": ["onActivePageChange"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return Pagination;
}());
Pagination.style = paginationCss;



/***/ })

};;
//# sourceMappingURL=6.render-page.js.map