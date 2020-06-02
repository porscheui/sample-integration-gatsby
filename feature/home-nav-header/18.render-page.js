exports.ids = [18];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-select-wrapper.entry.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-select-wrapper.entry.js ***!
  \**************************************************************************************************/
/*! exports provided: p_select_wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_select_wrapper", function() { return SelectWrapper; });
/* harmony import */ var _index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-381d535c.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-381d535c.js");
/* harmony import */ var _index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-0a27866a.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-0a27866a.js");


var selectWrapperCss = ":host{display:block}::slotted(select){position:absolute !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important;display:block !important;padding:0.75rem 3rem 0.75rem 0.75rem !important;margin:0 !important;outline:transparent none !important;outline-offset:1px !important;-webkit-appearance:none !important;-moz-appearance:none !important;appearance:none !important;-webkit-box-sizing:border-box !important;box-sizing:border-box !important;border-width:0 !important;border-top-color:transparent !important;background-color:transparent !important;opacity:1 !important;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif !important;font-weight:400 !important;font-size:1rem !important;line-height:1.5 !important;color:#000 !important;text-indent:0 !important;cursor:pointer !important;-webkit-transition:outline-color 0.24s ease, color 0.24s ease, border-top-color 1ms linear !important;transition:outline-color 0.24s ease, color 0.24s ease, border-top-color 1ms linear !important}::slotted(select:-moz-focusring){color:transparent !important;text-shadow:0 0 0 #000 !important}::slotted(select::-ms-expand){display:none !important}::slotted(select:focus::-ms-value){background-color:transparent !important;color:#000 !important}::slotted(select:focus){outline:#00d5b9 solid 2px !important}::slotted(select:disabled){border-top-color:rgba(255, 255, 255, 0.01) !important;color:#96989a !important;cursor:not-allowed !important}.p-select-wrapper__label{display:block}.p-select-wrapper__label-text,.p-select-wrapper__description-text{display:block;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-select-wrapper__label-text--disabled,.p-select-wrapper__description-text--disabled{color:#96989a}.p-select-wrapper__label-text--visible,.p-select-wrapper__description-text--visible{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden,.p-select-wrapper__description-text--hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}@media (min-width: 480px){.p-select-wrapper__label-text--visible-xs,.p-select-wrapper__description-text--visible-xs{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden-xs,.p-select-wrapper__description-text--hidden-xs{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 760px){.p-select-wrapper__label-text--visible-s,.p-select-wrapper__description-text--visible-s{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden-s,.p-select-wrapper__description-text--hidden-s{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1000px){.p-select-wrapper__label-text--visible-m,.p-select-wrapper__description-text--visible-m{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden-m,.p-select-wrapper__description-text--hidden-m{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1300px){.p-select-wrapper__label-text--visible-l,.p-select-wrapper__description-text--visible-l{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden-l,.p-select-wrapper__description-text--hidden-l{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1760px){.p-select-wrapper__label-text--visible-xl,.p-select-wrapper__description-text--visible-xl{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-select-wrapper__label-text--hidden-xl,.p-select-wrapper__description-text--hidden-xl{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}.p-select-wrapper__description-text{color:#626669}.p-select-wrapper__description-text--disabled{color:#96989a}.p-select-wrapper__label-text~.p-select-wrapper__description-text{margin-top:-0.25rem;padding-bottom:0.5rem}.p-select-wrapper__fake-select{position:relative;width:100%;height:3rem;display:block;background-color:#fff;-webkit-box-shadow:inset 0 0 0 1px #626669;box-shadow:inset 0 0 0 1px #626669;-webkit-transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease, -webkit-box-shadow 0.24s ease}.p-select-wrapper__fake-select:hover:not(.p-select-wrapper__fake-select--disabled):not(.p-select-wrapper__fake-select--success):not(.p-select-wrapper__fake-select--error),.p-select-wrapper__label-text:hover~.p-select-wrapper__fake-select:not(.p-select-wrapper__fake-select--disabled):not(.p-select-wrapper__fake-select--success):not(.p-select-wrapper__fake-select--error){-webkit-box-shadow:inset 0 0 0 1px #000;box-shadow:inset 0 0 0 1px #000}.p-select-wrapper__fake-select--disabled{-webkit-box-shadow:inset 0 0 0 1px #96989a;box-shadow:inset 0 0 0 1px #96989a;background-color:#fff}.p-select-wrapper__fake-select--success{-webkit-box-shadow:inset 0 0 0 2px #018a16;box-shadow:inset 0 0 0 2px #018a16}.p-select-wrapper__fake-select--success:hover,.p-select-wrapper__label-text:hover~.p-select-wrapper__fake-select--success{-webkit-box-shadow:inset 0 0 0 2px #014d0c;box-shadow:inset 0 0 0 2px #014d0c}.p-select-wrapper__fake-select--error{-webkit-box-shadow:inset 0 0 0 2px #e00000;box-shadow:inset 0 0 0 2px #e00000}.p-select-wrapper__fake-select--error:hover,.p-select-wrapper__label-text:hover~.p-select-wrapper__fake-select--error{-webkit-box-shadow:inset 0 0 0 2px #a30000;box-shadow:inset 0 0 0 2px #a30000}.p-select-wrapper__icon{position:absolute;top:0.75rem;right:0.75rem;color:#000}.p-select-wrapper__icon--disabled{color:#96989a}.p-select-wrapper__message{margin-top:0.25rem;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-select-wrapper__message--success{color:#018a16}.p-select-wrapper__message--error{color:#e00000}";
var SelectWrapper = /** @class */ (function () {
    function SelectWrapper(hostRef) {
        Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
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
    }
    SelectWrapper.prototype.componentWillLoad = function () {
        this.setSelect();
        this.setAriaAttributes();
        this.setState();
        this.bindStateListener();
        this.addSlottedStyles();
    };
    SelectWrapper.prototype.componentDidUpdate = function () {
        this.setAriaAttributes();
    };
    SelectWrapper.prototype.render = function () {
        var _this = this;
        var labelClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('select-wrapper__label'));
        var labelTextClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('select-wrapper__label-text'), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["m"])('select-wrapper__label-text-', this.hideLabel, ['hidden', 'visible']), this.disabled && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('select-wrapper__label-text--disabled'));
        var descriptionTextClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('select-wrapper__description-text'), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["m"])('select-wrapper__description-text-', this.hideLabel, ['hidden', 'visible']), this.disabled && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('select-wrapper__description-text--disabled'));
        var fakeSelectClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('select-wrapper__fake-select'), this.disabled && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('select-wrapper__fake-select--disabled'), this.state !== 'none' && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("select-wrapper__fake-select--" + this.state));
        var iconClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('select-wrapper__icon'), this.disabled && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('select-wrapper__icon--disabled'));
        var messageClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('select-wrapper__message'), this.state !== 'none' && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("select-wrapper__message--" + this.state));
        return (Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: labelClasses }, this.isLabelVisible &&
            Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: labelTextClasses, tag: 'span', color: 'inherit', onClick: function () { return _this.labelClick(); } }, this.label ? this.label : Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: 'label' }))), this.isDescriptionVisible &&
            Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: descriptionTextClasses, tag: 'span', color: 'inherit', size: 'x-small', onClick: function () { return _this.labelClick(); } }, this.description ? this.description : Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: 'description' }))), Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: fakeSelectClasses }, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-icon", { class: iconClasses, name: 'arrow-head-down', color: 'inherit' }), Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))), this.isMessageVisible &&
            Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: messageClasses, color: 'inherit', role: this.state === 'error' && 'alert' }, this.message ? this.message : Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: 'message' })))));
    };
    Object.defineProperty(SelectWrapper.prototype, "isLabelVisible", {
        get: function () {
            return !!this.label || !!this.host.querySelector('[slot="label"]');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectWrapper.prototype, "isDescriptionVisible", {
        get: function () {
            return !!this.description || !!this.host.querySelector('[slot="description"]');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectWrapper.prototype, "isMessageDefined", {
        get: function () {
            return !!this.message || !!this.host.querySelector('[slot="message"]');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SelectWrapper.prototype, "isMessageVisible", {
        get: function () {
            return ['success', 'error'].includes(this.state) && this.isMessageDefined;
        },
        enumerable: true,
        configurable: true
    });
    SelectWrapper.prototype.setSelect = function () {
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
    SelectWrapper.prototype.setState = function () {
        this.disabled = this.select.disabled;
    };
    SelectWrapper.prototype.labelClick = function () {
        this.select.focus();
    };
    SelectWrapper.prototype.bindStateListener = function () {
        var _this = this;
        Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["t"])(this.select, 'border-top-color', function () {
            _this.setState();
        });
    };
    SelectWrapper.prototype.addSlottedStyles = function () {
        var tagName = this.host.tagName.toLowerCase();
        var style = tagName + " a {\n      outline: none transparent;\n      color: inherit;\n      text-decoration: underline;\n      -webkit-transition: outline-color .24s ease, color .24s ease;\n      transition: outline-color .24s ease, color .24s ease;\n    }\n    " + tagName + " a:hover {\n      color: #d5001c;\n    }\n    " + tagName + " a:focus {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }";
        Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.host, style);
    };
    Object.defineProperty(SelectWrapper.prototype, "host", {
        get: function () { return Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    return SelectWrapper;
}());
SelectWrapper.style = selectWrapperCss;



/***/ })

};;
//# sourceMappingURL=18.render-page.js.map