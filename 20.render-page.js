exports.ids = [20];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-text-field-wrapper.entry.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-text-field-wrapper.entry.js ***!
  \******************************************************************************************************/
/*! exports provided: p_text_field_wrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_text_field_wrapper", function() { return TextFieldWrapper; });
/* harmony import */ var _index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-381d535c.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-381d535c.js");
/* harmony import */ var _index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-0a27866a.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-0a27866a.js");


var textFieldWrapperCss = ":host{display:block}::slotted(input){position:absolute !important;top:0 !important;left:0 !important;width:100% !important;height:100% !important;display:block !important;padding:0.75rem !important;margin:0 !important;outline:transparent none !important;outline-offset:1px !important;-webkit-appearance:none !important;-moz-appearance:none !important;appearance:none !important;-webkit-box-sizing:border-box !important;box-sizing:border-box !important;border-width:0 !important;border-top-color:transparent !important;background-color:transparent !important;opacity:1 !important;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif !important;font-weight:400 !important;font-size:1rem !important;line-height:1.5 !important;text-indent:0 !important;color:#000 !important;-webkit-transition:outline-color 0.24s ease, color 0.24s ease, border-top-color 1ms linear !important;transition:outline-color 0.24s ease, color 0.24s ease, border-top-color 1ms linear !important}::slotted(input:focus){outline:#00d5b9 solid 2px !important}::slotted(input:-moz-read-only:focus){outline:none !important}::slotted(input:read-only:focus){outline:none !important}::slotted(input:not(:disabled):-moz-read-only){border-top-color:rgba(255, 255, 255, 0.01) !important;color:#626669 !important}::slotted(input:not(:disabled):read-only){border-top-color:rgba(255, 255, 255, 0.01) !important;color:#626669 !important}::slotted(input:disabled){border-top-color:rgba(255, 255, 255, 0.02) !important;color:#96989a !important;-webkit-text-fill-color:#96989a !important;cursor:not-allowed !important}.p-text-field-wrapper__container{position:relative;display:block}.p-text-field-wrapper__label{display:block}.p-text-field-wrapper__label-text,.p-text-field-wrapper__description-text{display:block;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-text-field-wrapper__label-text--disabled,.p-text-field-wrapper__description-text--disabled{color:#96989a}.p-text-field-wrapper__label-text--visible,.p-text-field-wrapper__description-text--visible{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-text-field-wrapper__label-text--hidden,.p-text-field-wrapper__description-text--hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}@media (min-width: 480px){.p-text-field-wrapper__label-text--visible-xs,.p-text-field-wrapper__description-text--visible-xs{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-text-field-wrapper__label-text--hidden-xs,.p-text-field-wrapper__description-text--hidden-xs{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 760px){.p-text-field-wrapper__label-text--visible-s,.p-text-field-wrapper__description-text--visible-s{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-text-field-wrapper__label-text--hidden-s,.p-text-field-wrapper__description-text--hidden-s{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1000px){.p-text-field-wrapper__label-text--visible-m,.p-text-field-wrapper__description-text--visible-m{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-text-field-wrapper__label-text--hidden-m,.p-text-field-wrapper__description-text--hidden-m{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1300px){.p-text-field-wrapper__label-text--visible-l,.p-text-field-wrapper__description-text--visible-l{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-text-field-wrapper__label-text--hidden-l,.p-text-field-wrapper__description-text--hidden-l{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1760px){.p-text-field-wrapper__label-text--visible-xl,.p-text-field-wrapper__description-text--visible-xl{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-text-field-wrapper__label-text--hidden-xl,.p-text-field-wrapper__description-text--hidden-xl{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}.p-text-field-wrapper__description-text{color:#626669}.p-text-field-wrapper__description-text--disabled{color:#96989a}.p-text-field-wrapper__label-text~.p-text-field-wrapper__description-text{margin-top:-0.25rem;padding-bottom:0.5rem}.p-text-field-wrapper__fake-input{position:relative;width:100%;height:3rem;display:block;background-color:#fff;-webkit-box-shadow:inset 0 0 0 1px #626669;box-shadow:inset 0 0 0 1px #626669;-webkit-transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease, -webkit-box-shadow 0.24s ease}.p-text-field-wrapper__fake-input:hover:not(.p-text-field-wrapper__fake-input--disabled):not(.p-text-field-wrapper__fake-input--readonly):not(.p-text-field-wrapper__fake-input--success):not(.p-text-field-wrapper__fake-input--error),.p-text-field-wrapper__label-text:hover~.p-text-field-wrapper__fake-input:not(.p-text-field-wrapper__fake-input--disabled):not(.p-text-field-wrapper__fake-input--readonly):not(.p-text-field-wrapper__fake-input--success):not(.p-text-field-wrapper__fake-input--error){-webkit-box-shadow:inset 0 0 0 1px #000;box-shadow:inset 0 0 0 1px #000}.p-text-field-wrapper__fake-input--disabled{-webkit-box-shadow:inset 0 0 0 1px #96989a;box-shadow:inset 0 0 0 1px #96989a;background-color:#fff}.p-text-field-wrapper__fake-input--readonly{-webkit-box-shadow:inset 0 0 0 1px #ebebeb;box-shadow:inset 0 0 0 1px #ebebeb;background-color:#ebebeb}.p-text-field-wrapper__fake-input--success{-webkit-box-shadow:inset 0 0 0 2px #018a16;box-shadow:inset 0 0 0 2px #018a16}.p-text-field-wrapper__fake-input--success:hover,.p-text-field-wrapper__label-text:hover~.p-text-field-wrapper__fake-input--success{-webkit-box-shadow:inset 0 0 0 2px #014d0c;box-shadow:inset 0 0 0 2px #014d0c}.p-text-field-wrapper__fake-input--error{-webkit-box-shadow:inset 0 0 0 2px #e00000;box-shadow:inset 0 0 0 2px #e00000}.p-text-field-wrapper__fake-input--error:hover,.p-text-field-wrapper__label-text:hover~.p-text-field-wrapper__fake-input--error{-webkit-box-shadow:inset 0 0 0 2px #a30000;box-shadow:inset 0 0 0 2px #a30000}.p-text-field-wrapper__message{margin-top:0.25rem;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-text-field-wrapper__message--success{color:#018a16}.p-text-field-wrapper__message--error{color:#e00000}.p-text-field-wrapper__button{position:absolute;bottom:0;right:0;margin:0;width:3rem;height:3rem;padding:0.75rem;-webkit-box-sizing:border-box;box-sizing:border-box;outline:transparent none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;text-decoration:none;background:transparent;cursor:pointer;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-text-field-wrapper__button::-moz-focus-inner{border:0}.p-text-field-wrapper__button:hover{color:#d5001c}.p-text-field-wrapper__button:active{color:#d5001c}.p-text-field-wrapper__button:focus{color:#00d5b9}.p-text-field-wrapper__button:disabled{color:#96989a;cursor:not-allowed !important}";
var TextFieldWrapper = /** @class */ (function () {
    function TextFieldWrapper(hostRef) {
        Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /** The label text. */
        this.label = '';
        /** The description text. */
        this.description = '';
        /** The validation state. */
        this.state = 'none';
        /** The message styled depending on validation state. */
        this.message = '';
        /** Show or hide label and description text. For better accessibility it is recommended to show the label. */
        this.hideLabel = false;
        this.showPassword = false;
        this.searchButtonType = 'submit';
    }
    TextFieldWrapper.prototype.componentWillLoad = function () {
        this.setInput();
        this.setAriaAttributes();
        this.setState();
        this.updatePasswordToggleable();
        this.initInputTypeSearch();
        this.bindStateListener();
        this.addSlottedStyles();
    };
    TextFieldWrapper.prototype.componentDidUpdate = function () {
        this.setAriaAttributes();
    };
    TextFieldWrapper.prototype.render = function () {
        var _this = this;
        var containerClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('text-field-wrapper__container'));
        var labelClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('text-field-wrapper__label'));
        var labelTextClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('text-field-wrapper__label-text'), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["m"])('text-field-wrapper__label-text-', this.hideLabel, ['hidden', 'visible']), this.disabled && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('text-field-wrapper__label-text--disabled'));
        var descriptionTextClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('text-field-wrapper__description-text'), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["m"])('text-field-wrapper__description-text-', this.hideLabel, ['hidden', 'visible']), this.disabled && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('text-field-wrapper__description-text--disabled'));
        var fakeInputClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('text-field-wrapper__fake-input'), this.state !== 'none' && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("text-field-wrapper__fake-input--" + this.state), this.disabled && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('text-field-wrapper__fake-input--disabled'), this.readonly && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('text-field-wrapper__fake-input--readonly'));
        var buttonClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('text-field-wrapper__button'));
        var messageClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('text-field-wrapper__message'), this.state !== 'none' && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("text-field-wrapper__message--" + this.state));
        return (Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: containerClasses }, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { class: labelClasses }, this.isLabelVisible &&
            Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: labelTextClasses, tag: 'span', color: 'inherit', onClick: function () { return _this.labelClick(); } }, this.label ? this.label : Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: 'label' }))), this.isDescriptionVisible &&
            Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: descriptionTextClasses, tag: 'span', color: 'inherit', size: 'x-small', onClick: function () { return _this.labelClick(); } }, this.description ? this.description : Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: 'description' }))), Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: fakeInputClasses }, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null))), this.isPasswordToggleable &&
            Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { type: 'button', class: buttonClasses, onClick: function () { return _this.togglePassword(); }, disabled: this.disabled }, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-icon", { name: this.showPassword ? 'view-off' : 'view', color: 'inherit' })), this.isInputTypeSearch &&
            Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { onClick: function (event) { return _this.onSubmitHandler(event); }, type: 'submit', class: buttonClasses, disabled: this.disabled || this.readonly }, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-icon", { name: 'search', color: 'inherit' }))), this.isMessageVisible &&
            Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: messageClasses, color: 'inherit', role: this.state === 'error' && 'alert' }, this.message ? this.message : Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: 'message' })))));
    };
    Object.defineProperty(TextFieldWrapper.prototype, "isLabelVisible", {
        get: function () {
            return !!this.label || !!this.host.querySelector('[slot="label"]');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextFieldWrapper.prototype, "isDescriptionVisible", {
        get: function () {
            return !!this.description || !!this.host.querySelector('[slot="description"]');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextFieldWrapper.prototype, "isMessageDefined", {
        get: function () {
            return !!this.message || !!this.host.querySelector('[slot="message"]');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextFieldWrapper.prototype, "isMessageVisible", {
        get: function () {
            return ['success', 'error'].includes(this.state) && this.isMessageDefined;
        },
        enumerable: true,
        configurable: true
    });
    TextFieldWrapper.prototype.setInput = function () {
        this.input = this.host.querySelector('input');
    };
    /*
     * This is a workaround to improve accessibility because the input and the label/description/message text are placed in different DOM.
     * Referencing ID's from outside the component is impossible because the web component’s DOM is separate.
     * We have to wait for full support of the Accessibility Object Model (AOM) to provide the relationship between shadow DOM and slots
     */
    TextFieldWrapper.prototype.setAriaAttributes = function () {
        if (this.label && this.message) {
            this.input.setAttribute('aria-label', this.label + ". " + this.message);
        }
        else if (this.label && this.description) {
            this.input.setAttribute('aria-label', this.label + ". " + this.description);
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
    TextFieldWrapper.prototype.setState = function () {
        this.disabled = this.input.disabled;
        this.readonly = this.input.readOnly;
    };
    TextFieldWrapper.prototype.labelClick = function () {
        this.input.focus();
    };
    TextFieldWrapper.prototype.bindStateListener = function () {
        var _this = this;
        Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["t"])(this.input, 'border-top-color', function () {
            _this.setState();
        });
    };
    TextFieldWrapper.prototype.updatePasswordToggleable = function () {
        this.isPasswordToggleable = this.input.type === 'password';
        if (this.isPasswordToggleable) {
            this.input.style.cssText = 'padding-right: 3rem !important';
        }
    };
    TextFieldWrapper.prototype.togglePassword = function () {
        this.input.type = this.input.type === 'password' ? 'text' : 'password';
        this.showPassword = !this.showPassword;
        this.labelClick();
    };
    TextFieldWrapper.prototype.initInputTypeSearch = function () {
        this.isInputTypeSearch = this.input.type === 'search';
        if (this.isInputTypeSearch) {
            this.input.style.cssText = 'padding-right: 3rem !important';
        }
    };
    TextFieldWrapper.prototype.onSubmitHandler = function (event) {
        var _this = this;
        if (this.isInputTypeSearch) {
            Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["h"])(event, this.host, function () { return _this.searchButtonType; }, function () { return _this.disabled; });
        }
    };
    TextFieldWrapper.prototype.addSlottedStyles = function () {
        var tagName = this.host.tagName.toLowerCase();
        var style = tagName + " a {\n      outline: none transparent;\n      color: inherit;\n      text-decoration: underline;\n      -webkit-transition: outline-color .24s ease, color .24s ease;\n      transition: outline-color .24s ease, color .24s ease;\n    }\n\n    " + tagName + " a:hover {\n      color: #d5001c;\n    }\n\n    " + tagName + " a:focus {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }\n\n    " + tagName + " input::-webkit-outer-spin-button {\n      appearance: none !important;\n      -webkit-appearance: none !important;\n    }\n\n    " + tagName + " input::-webkit-inner-spin-button {\n      appearance: none !important;\n      -webkit-appearance: none !important;\n    }\n\n    " + tagName + " input[type=password]::-webkit-contacts-auto-fill-button,\n    " + tagName + " input[type=password]::-webkit-credentials-auto-fill-button {\n      margin-right: 2rem;\n    }\n\n    " + tagName + " input[type=search]::-webkit-search-cancel-button {\n      margin-right: 2rem;\n    }\n    ";
        Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.host, style);
    };
    Object.defineProperty(TextFieldWrapper.prototype, "host", {
        get: function () { return Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    return TextFieldWrapper;
}());
TextFieldWrapper.style = textFieldWrapperCss;



/***/ })

};;
//# sourceMappingURL=20.render-page.js.map