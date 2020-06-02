exports.ids = [7];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-checkbox-wrapper.entry.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-checkbox-wrapper.entry.js ***!
  \****************************************************************************************************/
/*! exports provided: p_checkbox_wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_checkbox_wrapper", function() { return CheckboxWrapper; });
/* harmony import */ var _index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-381d535c.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-381d535c.js");
/* harmony import */ var _index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-0a27866a.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-0a27866a.js");


var checkboxWrapperCss = ":host{display:block}::slotted(input){position:absolute !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important;display:block !important;margin:0 !important;padding:0 !important;-webkit-appearance:none !important;-moz-appearance:none !important;appearance:none !important;border:0 !important;border-top-color:rgba(255, 255, 255, 0) !important;background-color:transparent !important;opacity:1 !important;outline:transparent solid 2px !important;outline-offset:1px !important;cursor:pointer !important;-webkit-transition:outline-color 0.24s ease, border-top-color 1ms linear !important;transition:outline-color 0.24s ease, border-top-color 1ms linear !important}::slotted(input::-ms-check){display:none !important}::slotted(input:focus){outline-color:#00d5b9 !important}::slotted(input:checked){border-top-color:rgba(255, 255, 255, 0.01) !important}::slotted(input:disabled){cursor:not-allowed !important;border-top-color:rgba(255, 255, 255, 0.02) !important}::slotted(input:indeterminate){border-top-color:rgba(255, 255, 255, 0.03) !important}::slotted(input:disabled:checked){border-top-color:rgba(255, 255, 255, 0.04) !important}::slotted(input:disabled:indeterminate){border-top-color:rgba(255, 255, 255, 0.05) !important}::slotted(input:checked:indeterminate){border-top-color:rgba(255, 255, 255, 0.06) !important}::slotted(input:disabled:checked:indeterminate){border-top-color:rgba(255, 255, 255, 0.07) !important}.p-checkbox-wrapper__label{position:relative;display:-ms-flexbox;display:flex}.p-checkbox-wrapper__label-text{-ms-flex-order:1;order:1;display:inline-block;cursor:pointer;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-checkbox-wrapper__label-text--disabled{color:#96989a;cursor:default}.p-checkbox-wrapper__label-text--visible{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-checkbox-wrapper__label-text--hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}@media (min-width: 480px){.p-checkbox-wrapper__label-text--visible-xs{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-checkbox-wrapper__label-text--hidden-xs{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 760px){.p-checkbox-wrapper__label-text--visible-s{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-checkbox-wrapper__label-text--hidden-s{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1000px){.p-checkbox-wrapper__label-text--visible-m{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-checkbox-wrapper__label-text--hidden-m{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1300px){.p-checkbox-wrapper__label-text--visible-l{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-checkbox-wrapper__label-text--hidden-l{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1760px){.p-checkbox-wrapper__label-text--visible-xl{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-checkbox-wrapper__label-text--hidden-xl{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}.p-checkbox-wrapper__fake-checkbox{position:relative;width:1.5rem;height:1.5rem;display:block;-ms-flex-negative:0;flex-shrink:0;background-color:#fff;-webkit-box-shadow:inset 0 0 0 1px #626669;box-shadow:inset 0 0 0 1px #626669;-webkit-transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease, -webkit-box-shadow 0.24s ease}.p-checkbox-wrapper__fake-checkbox:hover:not(.p-checkbox-wrapper__fake-checkbox--disabled):not(.p-checkbox-wrapper__fake-checkbox--success):not(.p-checkbox-wrapper__fake-checkbox--error),.p-checkbox-wrapper__label-text:hover~.p-checkbox-wrapper__fake-checkbox:not(.p-checkbox-wrapper__fake-checkbox--disabled):not(.p-checkbox-wrapper__fake-checkbox--success):not(.p-checkbox-wrapper__fake-checkbox--error){-webkit-box-shadow:inset 0 0 0 1px #000;box-shadow:inset 0 0 0 1px #000}.p-checkbox-wrapper__fake-checkbox--checked{-webkit-box-shadow:inset 0 0 0 1px #323639;box-shadow:inset 0 0 0 1px #323639;background-color:#323639}.p-checkbox-wrapper__fake-checkbox--checked.p-checkbox-wrapper__fake-checkbox--disabled{background-color:#96989a}.p-checkbox-wrapper__fake-checkbox--checked.p-checkbox-wrapper__fake-checkbox--error{background-color:#e00000}.p-checkbox-wrapper__fake-checkbox--checked.p-checkbox-wrapper__fake-checkbox--success{background-color:#018a16}.p-checkbox-wrapper__fake-checkbox--disabled{-webkit-box-shadow:inset 0 0 0 1px #96989a;box-shadow:inset 0 0 0 1px #96989a}.p-checkbox-wrapper__fake-checkbox--error{-webkit-box-shadow:inset 0 0 0 2px #e00000;box-shadow:inset 0 0 0 2px #e00000}.p-checkbox-wrapper__fake-checkbox--error:hover,.p-checkbox-wrapper__label-text:hover~.p-checkbox-wrapper__fake-checkbox--error{-webkit-box-shadow:inset 0 0 0 2px #a30000;box-shadow:inset 0 0 0 2px #a30000}.p-checkbox-wrapper__fake-checkbox--success{-webkit-box-shadow:inset 0 0 0 2px #018a16;box-shadow:inset 0 0 0 2px #018a16}.p-checkbox-wrapper__fake-checkbox--success:hover,.p-checkbox-wrapper__label-text:hover~.p-checkbox-wrapper__fake-checkbox--success{-webkit-box-shadow:inset 0 0 0 2px #014d0c;box-shadow:inset 0 0 0 2px #014d0c}.p-checkbox-wrapper__icon{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;-webkit-transition:opacity 0.24s ease;transition:opacity 0.24s ease}.p-checkbox-wrapper__icon--checked{opacity:1}.p-checkbox-wrapper__message{margin-top:0.25rem;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-checkbox-wrapper__message--success{color:#018a16}.p-checkbox-wrapper__message--error{color:#e00000}";
var CheckboxWrapper = /** @class */ (function () {
    function CheckboxWrapper(hostRef) {
        Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The label text. */
        this.label = '';
        /** The validation state. */
        this.state = 'none';
        /** The message styled depending on validation state. */
        this.message = '';
        /** Show or hide label. For better accessibility it's recommended to show the label. */
        this.hideLabel = false;
    }
    CheckboxWrapper.prototype.componentWillLoad = function () {
        this.setInput();
        this.setAriaAttributes();
        this.setState();
        this.bindStateListener();
        this.addSlottedStyles();
    };
    CheckboxWrapper.prototype.componentDidUpdate = function () {
        this.setAriaAttributes();
    };
    CheckboxWrapper.prototype.render = function () {
        var _this = this;
        var labelClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('checkbox-wrapper__label'));
        var fakeCheckboxClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('checkbox-wrapper__fake-checkbox'), (this.checked || this.indeterminate) && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('checkbox-wrapper__fake-checkbox--checked'), this.disabled && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('checkbox-wrapper__fake-checkbox--disabled'), this.state !== 'none' && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("checkbox-wrapper__fake-checkbox--" + this.state));
        var iconClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('checkbox-wrapper__icon'), (this.checked || this.indeterminate) && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('checkbox-wrapper__icon--checked'));
        var labelTextClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('checkbox-wrapper__label-text'), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["m"])('checkbox-wrapper__label-text-', this.hideLabel, ['hidden', 'visible']), this.disabled && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('checkbox-wrapper__label-text--disabled'));
        var messageClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('checkbox-wrapper__message'), this.state !== 'none' && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("checkbox-wrapper__message--" + this.state));
        return (Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: labelClasses }, this.isLabelVisible &&
            Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: labelTextClasses, tag: 'span', color: 'inherit', onClick: function (e) { return _this.labelClick(e); } }, this.label ? this.label : Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: 'label' }))), Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: fakeCheckboxClasses }, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-icon", { class: iconClasses, name: this.indeterminate ? 'minus' : 'check', theme: 'dark', size: 'inherit' }), Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))), this.isMessageVisible &&
            Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: messageClasses, color: 'inherit', role: this.state === 'error' && 'alert' }, this.message ? this.message : Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: 'message' })))));
    };
    Object.defineProperty(CheckboxWrapper.prototype, "isLabelVisible", {
        get: function () {
            return !!this.label || !!this.host.querySelector('[slot="label"]');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxWrapper.prototype, "isMessageDefined", {
        get: function () {
            return !!this.message || !!this.host.querySelector('[slot="message"]');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckboxWrapper.prototype, "isMessageVisible", {
        get: function () {
            return ['success', 'error'].includes(this.state) && this.isMessageDefined;
        },
        enumerable: true,
        configurable: true
    });
    CheckboxWrapper.prototype.setInput = function () {
        this.input = this.host.querySelector('input[type="checkbox"]');
    };
    /*
     * This is a workaround to improve accessibility because the input and the label/description/message text are placed in different DOM.
     * Referencing ID's from outside the component is impossible because the web component’s DOM is separate.
     * We have to wait for full support of the Accessibility Object Model (AOM) to provide the relationship between shadow DOM and slots
     */
    CheckboxWrapper.prototype.setAriaAttributes = function () {
        if (this.label && this.message) {
            this.input.setAttribute('aria-label', this.label + ". " + this.message);
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
    CheckboxWrapper.prototype.labelClick = function (event) {
        /**
         * we only want to simulate the checkbox click by label click
         * for real shadow dom, else the native behaviour works out
         * of the box.
         * also we don't want to click to the input, if a link is
         * clicked.
         */
        if (this.host.shadowRoot && this.host.shadowRoot.host
            && event.target.closest('a') === null) {
            this.input.click();
        }
    };
    CheckboxWrapper.prototype.setState = function () {
        this.checked = this.input.checked;
        this.disabled = this.input.disabled;
        this.indeterminate = this.input.indeterminate;
    };
    CheckboxWrapper.prototype.bindStateListener = function () {
        var _this = this;
        Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["t"])(this.input, 'border-top-color', function () {
            _this.setState();
        });
    };
    CheckboxWrapper.prototype.addSlottedStyles = function () {
        var tagName = this.host.tagName.toLowerCase();
        var style = tagName + " a {\n      outline: none transparent;\n      color: inherit;\n      text-decoration: underline;\n      -webkit-transition: outline-color .24s ease, color .24s ease;\n      transition: outline-color .24s ease, color .24s ease;\n    }\n\n    " + tagName + " a:hover {\n      color: #d5001c;\n    }\n\n    " + tagName + " a:focus {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }";
        Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.host, style);
    };
    Object.defineProperty(CheckboxWrapper.prototype, "host", {
        get: function () { return Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    return CheckboxWrapper;
}());
CheckboxWrapper.style = checkboxWrapperCss;



/***/ })

};;
//# sourceMappingURL=7.render-page.js.map