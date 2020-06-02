exports.ids = [17];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-radio-button-wrapper.entry.js":
/*!********************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-radio-button-wrapper.entry.js ***!
  \********************************************************************************************************/
/*! exports provided: p_radio_button_wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_radio_button_wrapper", function() { return RadioButtonWrapper; });
/* harmony import */ var _index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-381d535c.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-381d535c.js");
/* harmony import */ var _index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-0a27866a.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-0a27866a.js");


var radioButtonWrapperCss = ":host{display:block}::slotted(input){position:absolute !important;top:-1px !important;left:-1px !important;width:1.625rem !important;height:1.625rem !important;display:block !important;margin:0 !important;padding:0 !important;-webkit-appearance:none !important;-moz-appearance:none !important;appearance:none !important;border:0 rgba(255, 255, 255, 0) !important;border-radius:50% !important;background-color:transparent !important;opacity:1 !important;outline:none !important;cursor:pointer !important;-webkit-box-shadow:0 0 0 0 transparent !important;box-shadow:0 0 0 0 transparent !important;-webkit-transition:border-top-color 1ms linear, -webkit-box-shadow 0.24s ease !important;transition:border-top-color 1ms linear, -webkit-box-shadow 0.24s ease !important;transition:box-shadow 0.24s ease, border-top-color 1ms linear !important;transition:box-shadow 0.24s ease, border-top-color 1ms linear, -webkit-box-shadow 0.24s ease !important}::slotted(input::-ms-check){display:none !important}::slotted(input:focus){-webkit-box-shadow:0 0 0 2px #00d5b9 !important;box-shadow:0 0 0 2px #00d5b9 !important}::slotted(input:checked){border-top-color:rgba(255, 255, 255, 0.01) !important}::slotted(input:disabled){cursor:not-allowed !important;border-top-color:rgba(255, 255, 255, 0.02) !important}::slotted(input:disabled:checked){border-top-color:rgba(255, 255, 255, 0.03) !important}.p-radio-button-wrapper__label{position:relative;display:-ms-flexbox;display:flex}.p-radio-button-wrapper__label-text{-ms-flex-order:1;order:1;display:inline-block;cursor:pointer;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-radio-button-wrapper__label-text--disabled{color:#96989a;cursor:default}.p-radio-button-wrapper__label-text--visible{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-radio-button-wrapper__label-text--hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}@media (min-width: 480px){.p-radio-button-wrapper__label-text--visible-xs{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-radio-button-wrapper__label-text--hidden-xs{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 760px){.p-radio-button-wrapper__label-text--visible-s{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-radio-button-wrapper__label-text--hidden-s{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1000px){.p-radio-button-wrapper__label-text--visible-m{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-radio-button-wrapper__label-text--hidden-m{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1300px){.p-radio-button-wrapper__label-text--visible-l{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-radio-button-wrapper__label-text--hidden-l{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1760px){.p-radio-button-wrapper__label-text--visible-xl{position:static;width:auto;height:auto;margin:0;padding:0 0 0 0.5rem;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-radio-button-wrapper__label-text--hidden-xl{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}.p-radio-button-wrapper__fake-radio-button{position:relative;width:1.5rem;height:1.5rem;display:block;-ms-flex-negative:0;flex-shrink:0;border-radius:50%;-webkit-box-shadow:inset 0 0 0 1px #626669;box-shadow:inset 0 0 0 1px #626669;background-color:#fff;-webkit-transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease, -webkit-box-shadow 0.24s ease}.p-radio-button-wrapper__fake-radio-button:hover:not(.p-radio-button-wrapper__fake-radio-button--disabled):not(.p-radio-button-wrapper__fake-radio-button--success):not(.p-radio-button-wrapper__fake-radio-button--error),.p-radio-button-wrapper__label-text:hover~.p-radio-button-wrapper__fake-radio-button:not(.p-radio-button-wrapper__fake-radio-button--disabled):not(.p-radio-button-wrapper__fake-radio-button--success):not(.p-radio-button-wrapper__fake-radio-button--error){-webkit-box-shadow:inset 0 0 0 1px #000;box-shadow:inset 0 0 0 1px #000}.p-radio-button-wrapper__fake-radio-button::before{content:\"\";width:1rem;height:1rem;border-radius:50%;background-color:transparent;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);-webkit-transition:background-color 0.24s ease;transition:background-color 0.24s ease}.p-radio-button-wrapper__fake-radio-button--checked{-webkit-box-shadow:inset 0 0 0 1px #323639;box-shadow:inset 0 0 0 1px #323639}.p-radio-button-wrapper__fake-radio-button--checked::before{background-color:#323639}.p-radio-button-wrapper__fake-radio-button--checked.p-radio-button-wrapper__fake-radio-button--disabled::before{background-color:#96989a}.p-radio-button-wrapper__fake-radio-button--checked.p-radio-button-wrapper__fake-radio-button--error::before{background-color:#e00000}.p-radio-button-wrapper__fake-radio-button--checked.p-radio-button-wrapper__fake-radio-button--success::before{background-color:#018a16}.p-radio-button-wrapper__fake-radio-button--disabled{-webkit-box-shadow:inset 0 0 0 1px #96989a;box-shadow:inset 0 0 0 1px #96989a}.p-radio-button-wrapper__fake-radio-button--error{-webkit-box-shadow:inset 0 0 0 2px #e00000;box-shadow:inset 0 0 0 2px #e00000}.p-radio-button-wrapper__fake-radio-button--error:hover,.p-radio-button-wrapper__label-text:hover~.p-radio-button-wrapper__fake-radio-button--error{-webkit-box-shadow:inset 0 0 0 2px #a30000;box-shadow:inset 0 0 0 2px #a30000}.p-radio-button-wrapper__fake-radio-button--success{-webkit-box-shadow:inset 0 0 0 2px #018a16;box-shadow:inset 0 0 0 2px #018a16}.p-radio-button-wrapper__fake-radio-button--success:hover,.p-radio-button-wrapper__label-text:hover~.p-radio-button-wrapper__fake-radio-button--success{-webkit-box-shadow:inset 0 0 0 2px #014d0c;box-shadow:inset 0 0 0 2px #014d0c}.p-radio-button-wrapper__message{margin-top:0.25rem;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-radio-button-wrapper__message--success{color:#018a16}.p-radio-button-wrapper__message--error{color:#e00000}";
var RadioButtonWrapper = /** @class */ (function () {
    function RadioButtonWrapper(hostRef) {
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
    RadioButtonWrapper.prototype.componentWillLoad = function () {
        this.setInput();
        this.setAriaAttributes();
        this.setState();
        this.bindStateListener();
        this.addSlottedStyles();
    };
    RadioButtonWrapper.prototype.componentDidUpdate = function () {
        this.setAriaAttributes();
    };
    RadioButtonWrapper.prototype.render = function () {
        var _this = this;
        var labelClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('radio-button-wrapper__label'));
        var fakeRadioButtonClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('radio-button-wrapper__fake-radio-button'), this.checked && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('radio-button-wrapper__fake-radio-button--checked'), this.disabled && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('radio-button-wrapper__fake-radio-button--disabled'), this.state !== 'none' && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("radio-button-wrapper__fake-radio-button--" + this.state));
        var labelTextClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('radio-button-wrapper__label-text'), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["m"])('radio-button-wrapper__label-text-', this.hideLabel, ['hidden', 'visible']), this.disabled && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('radio-button-wrapper__label-text--disabled'));
        var messageClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('radio-button-wrapper__message'), this.state !== 'none' && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("radio-button-wrapper__message--" + this.state));
        return (Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: labelClasses }, this.isLabelVisible &&
            Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: labelTextClasses, tag: 'span', color: 'inherit', onClick: function (e) { return _this.labelClick(e); } }, this.label ? this.label : Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: 'label' }))), Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: fakeRadioButtonClasses }, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))), this.isMessageVisible &&
            Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: messageClasses, color: 'inherit', role: this.state === 'error' && 'alert' }, this.message ? this.message : Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: 'message' })))));
    };
    Object.defineProperty(RadioButtonWrapper.prototype, "isLabelVisible", {
        get: function () {
            return !!this.label || !!this.host.querySelector('[slot="label"]');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonWrapper.prototype, "isMessageDefined", {
        get: function () {
            return !!this.message || !!this.host.querySelector('[slot="message"]');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RadioButtonWrapper.prototype, "isMessageVisible", {
        get: function () {
            return ['success', 'error'].includes(this.state) && this.isMessageDefined;
        },
        enumerable: true,
        configurable: true
    });
    RadioButtonWrapper.prototype.setInput = function () {
        this.input = this.host.querySelector('input[type="radio"]');
    };
    /*
     * This is a workaround to improve accessibility because the input and the label/description/message text are placed in different DOM.
     * Referencing ID's from outside the component is impossible because the web component’s DOM is separate.
     * We have to wait for full support of the Accessibility Object Model (AOM) to provide the relationship between shadow DOM and slots
     */
    RadioButtonWrapper.prototype.setAriaAttributes = function () {
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
    RadioButtonWrapper.prototype.labelClick = function (event) {
        /**
         * we only want to simulate the checkbox click by label click
         * for real shadow dom, else the native behaviour works out
         * of the box
         */
        if (this.host.shadowRoot && this.host.shadowRoot.host
            && event.target.closest('a') === null) {
            this.input.click();
        }
    };
    RadioButtonWrapper.prototype.setState = function () {
        this.checked = this.input.checked;
        this.disabled = this.input.disabled;
    };
    RadioButtonWrapper.prototype.bindStateListener = function () {
        var _this = this;
        Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["t"])(this.input, 'border-top-color', function () {
            _this.setState();
        });
    };
    RadioButtonWrapper.prototype.addSlottedStyles = function () {
        var tagName = this.host.tagName.toLowerCase();
        var style = tagName + " a {\n      outline: none transparent;\n      color: inherit;\n      text-decoration: underline;\n      -webkit-transition: outline-color .24s ease, color .24s ease;\n      transition: outline-color .24s ease, color .24s ease;\n    }\n\n    " + tagName + " a:hover {\n      color: #d5001c;\n    }\n\n    " + tagName + " a:focus {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }";
        Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.host, style);
    };
    Object.defineProperty(RadioButtonWrapper.prototype, "host", {
        get: function () { return Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    return RadioButtonWrapper;
}());
RadioButtonWrapper.style = radioButtonWrapperCss;



/***/ })

};;
//# sourceMappingURL=17.render-page.js.map