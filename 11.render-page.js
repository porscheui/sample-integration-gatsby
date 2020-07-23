exports.ids = [11];
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

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-link-social.entry.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-link-social.entry.js ***!
  \***********************************************************************************************/
/*! exports provided: p_link_social */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_link_social", function() { return LinkSocial; });
/* harmony import */ var _breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakpointCustomizable-f03211e4.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/breakpointCustomizable-f03211e4.js");
/* harmony import */ var _slotted_styles_9a18361d_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slotted-styles-9a18361d.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/slotted-styles-9a18361d.js");
/* harmony import */ var _index_359f03c5_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-359f03c5.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-359f03c5.js");
/* harmony import */ var _focusHandling_e078221d_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./focusHandling-e078221d.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/focusHandling-e078221d.js");




var linkSocialCss = ":host{display:-ms-inline-flexbox;display:inline-flex;vertical-align:top;position:relative !important;cursor:pointer}::slotted(a){display:block !important;position:static !important;text-decoration:none !important;color:inherit !important;line-height:inherit !important}::slotted(a)::before{content:\"\" !important;position:absolute !important;top:0 !important;left:0 !important;right:0 !important;bottom:0 !important;display:block !important;outline:transparent none !important;-webkit-transition:outline-color 0.24s ease !important;transition:outline-color 0.24s ease !important}::slotted(a:focus){outline:none !important}::slotted(a:focus)::before{outline-offset:1px !important;outline:#00d5b9 solid 2px !important}.p-link-social{display:-ms-flexbox;display:flex;width:100%;min-width:3rem;min-height:3rem;position:relative;margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none transparent;text-decoration:none;-webkit-transition:background-color 0.24s ease, outline-color 0.24s ease, color 0.24s ease;transition:background-color 0.24s ease, outline-color 0.24s ease, color 0.24s ease}.p-link-social::-moz-focus-inner{border:0}.p-link-social:focus{outline-width:2px;outline-style:solid;outline-offset:1px}.p-link-social--theme-light{background-color:#323639;color:#fff}.p-link-social--theme-light:hover,.p-link-social--theme-light:active{color:#fff;background-color:#151718}.p-link-social--theme-light:focus{outline-color:#00d5b9}.p-link-social--theme-dark{background-color:#fff;color:#000}.p-link-social--theme-dark:hover,.p-link-social--theme-dark:active{color:#000;background-color:#e0e0e0}.p-link-social--theme-dark:focus{outline-color:#00d5b9}.p-link-social--logo-facebook:hover,.p-link-social--logo-facebook:active{color:#fff;background-color:#1877f2}.p-link-social--logo-google:hover,.p-link-social--logo-google:active{color:#fff;background-color:#4285f4}.p-link-social--logo-instagram:hover,.p-link-social--logo-instagram:active{color:#fff;background-color:#e1306c}.p-link-social--logo-linkedin:hover,.p-link-social--logo-linkedin:active{color:#fff;background-color:#0077b5}.p-link-social--logo-pinterest:hover,.p-link-social--logo-pinterest:active{color:#fff;background-color:#e60023}.p-link-social--logo-twitter:hover,.p-link-social--logo-twitter:active{color:#fff;background-color:#1da1f2}.p-link-social--logo-wechat:hover,.p-link-social--logo-wechat:active{color:#fff;background-color:#1aad19}.p-link-social--logo-whatsapp:hover,.p-link-social--logo-whatsapp:active{color:#fff;background-color:#25d366}.p-link-social--logo-xing:hover,.p-link-social--logo-xing:active{color:#fff;background-color:#006567}.p-link-social--logo-youtube:hover,.p-link-social--logo-youtube:active{color:#fff;background-color:#ff0000}.p-link-social--with-label{padding:0.75rem 1rem 0.75rem 2.5rem}.p-link-social--with-label .p-link-social__label{width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;text-indent:0}.p-link-social--with-label .p-link-social__icon{left:0.75rem;top:0.75rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-link-social--without-label{padding:0}.p-link-social--without-label .p-link-social__label{width:1px;height:1px;margin:0 0 0 -1px;padding:0;white-space:nowrap;overflow:hidden;border:0;text-indent:-1px}.p-link-social--without-label .p-link-social__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}@media (min-width: 480px){.p-link-social--with-label-xs{padding:0.75rem 1rem 0.75rem 2.5rem}.p-link-social--with-label-xs .p-link-social__label{width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;text-indent:0}.p-link-social--with-label-xs .p-link-social__icon{left:0.75rem;top:0.75rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-link-social--without-label-xs{padding:0}.p-link-social--without-label-xs .p-link-social__label{width:1px;height:1px;margin:0 0 0 -1px;padding:0;white-space:nowrap;overflow:hidden;border:0;text-indent:-1px}.p-link-social--without-label-xs .p-link-social__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}}@media (min-width: 760px){.p-link-social--with-label-s{padding:0.75rem 1rem 0.75rem 2.5rem}.p-link-social--with-label-s .p-link-social__label{width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;text-indent:0}.p-link-social--with-label-s .p-link-social__icon{left:0.75rem;top:0.75rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-link-social--without-label-s{padding:0}.p-link-social--without-label-s .p-link-social__label{width:1px;height:1px;margin:0 0 0 -1px;padding:0;white-space:nowrap;overflow:hidden;border:0;text-indent:-1px}.p-link-social--without-label-s .p-link-social__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}}@media (min-width: 1000px){.p-link-social--with-label-m{padding:0.75rem 1rem 0.75rem 2.5rem}.p-link-social--with-label-m .p-link-social__label{width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;text-indent:0}.p-link-social--with-label-m .p-link-social__icon{left:0.75rem;top:0.75rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-link-social--without-label-m{padding:0}.p-link-social--without-label-m .p-link-social__label{width:1px;height:1px;margin:0 0 0 -1px;padding:0;white-space:nowrap;overflow:hidden;border:0;text-indent:-1px}.p-link-social--without-label-m .p-link-social__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}}@media (min-width: 1300px){.p-link-social--with-label-l{padding:0.75rem 1rem 0.75rem 2.5rem}.p-link-social--with-label-l .p-link-social__label{width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;text-indent:0}.p-link-social--with-label-l .p-link-social__icon{left:0.75rem;top:0.75rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-link-social--without-label-l{padding:0}.p-link-social--without-label-l .p-link-social__label{width:1px;height:1px;margin:0 0 0 -1px;padding:0;white-space:nowrap;overflow:hidden;border:0;text-indent:-1px}.p-link-social--without-label-l .p-link-social__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}}@media (min-width: 1760px){.p-link-social--with-label-xl{padding:0.75rem 1rem 0.75rem 2.5rem}.p-link-social--with-label-xl .p-link-social__label{width:100%;height:auto;margin:0;padding:0;white-space:normal;overflow:visible;border:0;text-indent:0}.p-link-social--with-label-xl .p-link-social__icon{left:0.75rem;top:0.75rem;-webkit-transform:translateX(0) translateY(0);transform:translateX(0) translateY(0)}.p-link-social--without-label-xl{padding:0}.p-link-social--without-label-xl .p-link-social__label{width:1px;height:1px;margin:0 0 0 -1px;padding:0;white-space:nowrap;overflow:hidden;border:0;text-indent:-1px}.p-link-social--without-label-xl .p-link-social__icon{left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%)}}.p-link-social__icon{position:absolute;width:1.5rem;height:1.5rem}";
var LinkSocial = /** @class */ (function () {
    function LinkSocial(hostRef) {
        Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The icon shown. */
        this.icon = undefined;
        /** A custom URL path to a custom social icon. */
        this.iconSource = undefined;
        /** When providing an url then the component will be rendered as `<a>`. */
        this.href = undefined;
        /** Adapts the icon color when used on dark background. */
        this.theme = 'light';
        /** Target attribute where the link should be opened. */
        this.target = '_self';
        /** Specifies the relationship of the target object to the link object. */
        this.rel = undefined;
        /** Show or hide label. */
        this.hideLabel = false;
    }
    LinkSocial.prototype.componentWillLoad = function () {
        this.addSlottedStyles();
        Object(_focusHandling_e078221d_js__WEBPACK_IMPORTED_MODULE_3__["i"])(this.host);
    };
    LinkSocial.prototype.render = function () {
        var TagType = this.href === undefined ? 'span' : 'a';
        var linkClasses = Object(_index_359f03c5_js__WEBPACK_IMPORTED_MODULE_2__["c"])(Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["c"])('link-social'), Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["m"])('link-social-', this.hideLabel, ['without-label', 'with-label']), Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["c"])("link-social--" + this.icon), Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["c"])("link-social--theme-" + this.theme));
        var iconClasses = Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["c"])('link-social__icon');
        var labelClasses = Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["c"])('link-social__label');
        return (Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, Object.assign({ class: linkClasses }, (TagType === 'a' ? {
            href: this.href,
            target: this.target,
            rel: this.rel
        } : null)), Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-icon", { class: iconClasses, size: 'inherit', name: this.icon, source: this.iconSource, color: 'inherit', "aria-hidden": 'true' }), Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { tag: 'span', color: 'inherit', class: labelClasses }, Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))));
    };
    LinkSocial.prototype.addSlottedStyles = function () {
        var tagName = this.host.tagName.toLowerCase();
        var style = "a:focus " + tagName + " {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }\n\n    /* this hack is only needed for Safari which does not support pseudo elements in slotted context (https://bugs.webkit.org/show_bug.cgi?id=178237) :-( */\n    " + tagName + " a::before {\n      content: \"\" !important;\n      position: absolute !important;\n      top: 0 !important;\n      left: 0 !important;\n      right: 0 !important;\n      bottom: 0 !important;\n      display: block !important;\n      transition: outline-color 0.24s ease !important;\n    }\n\n    " + tagName + " a:focus::before {\n      outline-offset: 1px !important;\n      outline: #00d5b9 solid 2px !important;\n    }\n    ";
        Object(_slotted_styles_9a18361d_js__WEBPACK_IMPORTED_MODULE_1__["i"])(this.host, style);
    };
    Object.defineProperty(LinkSocial.prototype, "host", {
        get: function () { return Object(_breakpointCustomizable_f03211e4_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: false,
        configurable: true
    });
    return LinkSocial;
}());
LinkSocial.style = linkSocialCss;



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



/***/ })

};;
//# sourceMappingURL=11.render-page.js.map