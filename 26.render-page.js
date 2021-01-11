exports.ids = [26];
exports.modules = {

/***/ "./node_modules/@porschehn/navigation/dist/esm-es5/phn-back-button_36.entry.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@porschehn/navigation/dist/esm-es5/phn-back-button_36.entry.js ***!
  \*************************************************************************************/
/*! exports provided: phn_back_button, phn_burger_button, phn_button_extended, phn_car_further_links, phn_car_meta_functionalities, phn_car_model, phn_car_model_list, phn_car_series, phn_car_series_list, phn_car_series_model_overview, phn_crest, phn_dealer_search, phn_desktop_shop_and_more_item, phn_drawer_car_series_model_overview, phn_drawer_shops_and_more, phn_header, phn_headline, phn_list_item, phn_mega_fly_out_overlay, phn_menu_desktop_level_1, phn_menu_drawer, phn_menu_mobile_level_1, phn_messages_link, phn_meta_functionalities, phn_mobile_car_series_list, phn_mobile_layout, phn_mobile_shop_and_more_item, phn_mobile_shops_and_more, phn_myporsche, phn_myporsche_drawer, phn_myporsche_flyout, phn_myporsche_items, phn_myporsche_items_drawer, phn_preview_badge, phn_shops_and_more, phn_shops_and_more_overview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_back_button", function() { return BackButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_burger_button", function() { return BurgerButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_button_extended", function() { return ButtonExtended; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_car_further_links", function() { return CarFurtherLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_car_meta_functionalities", function() { return CarMetaFunctionalities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_car_model", function() { return CarModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_car_model_list", function() { return CarModelList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_car_series", function() { return CarSeries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_car_series_list", function() { return CarSeriesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_car_series_model_overview", function() { return CarSeriesModelOverview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_crest", function() { return Crest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_dealer_search", function() { return DealerSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_desktop_shop_and_more_item", function() { return DesktopShopAndMoreItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_drawer_car_series_model_overview", function() { return DrawerCarSeriesModelOverview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_drawer_shops_and_more", function() { return DrawerShopsAndMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_header", function() { return Header; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_headline", function() { return Headline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_list_item", function() { return ListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_mega_fly_out_overlay", function() { return MegaFlyOutOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_menu_desktop_level_1", function() { return MenuDesktopLevel1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_menu_drawer", function() { return MenuDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_menu_mobile_level_1", function() { return MenuMobileLevel1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_messages_link", function() { return MessagesLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_meta_functionalities", function() { return MetaFunctionalities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_mobile_car_series_list", function() { return MobileCarSeriesList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_mobile_layout", function() { return MobileLayout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_mobile_shop_and_more_item", function() { return MobileShopAndMoreItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_mobile_shops_and_more", function() { return MobileShopsAndMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_myporsche", function() { return Myporsche; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_myporsche_drawer", function() { return MyPorscheDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_myporsche_flyout", function() { return MyPorscheFlyout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_myporsche_items", function() { return MyPorscheItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_myporsche_items_drawer", function() { return MyPorscheItemsDrawer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_preview_badge", function() { return PreviewBadge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_shops_and_more", function() { return ShopsAndMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "phn_shops_and_more_overview", function() { return ShopsAndMoreOverview; });
/* harmony import */ var _index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-866367c9.js */ "./node_modules/@porschehn/navigation/dist/esm-es5/index-866367c9.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

var appendToMap = function (map, propName, value) {
    var items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
var debounce = function (fn, ms) {
    var timeoutId;
    return function () {
        var args = [];
        for (var _b = 0; _b < arguments.length; _b++) {
            args[_b] = arguments[_b];
        }
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(function () {
            timeoutId = 0;
            fn.apply(void 0, args);
        }, ms);
    };
};
/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
var isConnected = function (maybeElement) { return !('isConnected' in maybeElement) || maybeElement.isConnected; };
var cleanupElements = debounce(function (map) {
    for (var _b = 0, _c = map.keys(); _b < _c.length; _b++) {
        var key = _c[_b];
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2000);
var stencilSubscription = function (_b) {
    var on = _b.on;
    var elmsToUpdate = new Map();
    if (typeof _index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["g"] === 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        on('dispose', function () {
            elmsToUpdate.clear();
        });
        on('get', function (propName) {
            var elm = Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["g"])();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        });
        on('set', function (propName) {
            var elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["f"]));
            }
            cleanupElements(elmsToUpdate);
        });
        on('reset', function () {
            elmsToUpdate.forEach(function (elms) { return elms.forEach(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["f"]); });
            cleanupElements(elmsToUpdate);
        });
    }
};
var createObservableMap = function (defaultState, shouldUpdate) {
    if (shouldUpdate === void 0) { shouldUpdate = function (a, b) { return a !== b; }; }
    var states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
    var handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    var reset = function () {
        states = new Map(Object.entries(defaultState !== null && defaultState !== void 0 ? defaultState : {}));
        handlers.reset.forEach(function (cb) { return cb(); });
    };
    var dispose = function () {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach(function (cb) { return cb(); });
        reset();
    };
    var get = function (propName) {
        handlers.get.forEach(function (cb) { return cb(propName); });
        return states.get(propName);
    };
    var set = function (propName, value) {
        var oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach(function (cb) { return cb(propName, value, oldValue); });
        }
    };
    var state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(defaultState, {
            get: function (_, propName) {
                return get(propName);
            },
            ownKeys: function (_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor: function () {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has: function (_, propName) {
                return states.has(propName);
            },
            set: function (_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    var on = function (eventName, callback) {
        handlers[eventName].push(callback);
        return function () {
            removeFromArray(handlers[eventName], callback);
        };
    };
    var onChange = function (propName, cb) {
        var unSet = on('set', function (key, newValue) {
            if (key === propName) {
                cb(newValue);
            }
        });
        var unReset = on('reset', function () { return cb(defaultState[propName]); });
        return function () {
            unSet();
            unReset();
        };
    };
    var use = function () {
        var subscriptions = [];
        for (var _b = 0; _b < arguments.length; _b++) {
            subscriptions[_b] = arguments[_b];
        }
        return subscriptions.forEach(function (subscription) {
            if (subscription.set) {
                on('set', subscription.set);
            }
            if (subscription.get) {
                on('get', subscription.get);
            }
            if (subscription.reset) {
                on('reset', subscription.reset);
            }
        });
    };
    return {
        state: state,
        get: get,
        set: set,
        on: on,
        onChange: onChange,
        use: use,
        dispose: dispose,
        reset: reset,
    };
};
var removeFromArray = function (array, item) {
    var index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};
var createStore = function (defaultState, shouldUpdate) {
    var map = createObservableMap(defaultState, shouldUpdate);
    stencilSubscription(map);
    return map;
};
var DEFAULT_LOCALE = 'de-CH';
var DEFAULT_SERIES_LIST = [];
var DEFAULT_SHOPS = [];
var DEFAULT_MORE = [];
var DEFAULT_METAFUNCTIONALITIES = [];
var DEFAULT_MENU = [];
var DEFAULT_ENVIRONMENT = 'production';
var ANALYTICS_APP_ID = 'nav';
var EMPTY_SERIES = {
    PhraseId: '',
    Name: '',
    Image: '',
    Models: [],
    Further: [],
    Meta: [],
    ModelMeta: []
};
var EMPTY_ITEM = { PhraseId: '', Text: '' };
var REDACTED = 'REDACTED';
var LOGGED_IN_USER_NO_NAME_STATUS = 'loggedIn';
var LOGGED_OUT_USER_STATUS = 'loginOrRegister';
var LOADING_STATUS = 'loading';
var VERSION = '1.12.0';
var DEFAULT_UNREAD_MESSAGES_COUNT = 0;
var DEFAULT_EMPTY_CONTENT_RESPONSE = [];
var DEFAULT_EMPTY_CONTENT = {
    seriesList: DEFAULT_SERIES_LIST,
    shops: DEFAULT_SHOPS,
    more: DEFAULT_MORE,
    metafunctionalities: DEFAULT_METAFUNCTIONALITIES,
    menu: DEFAULT_MENU
};
var ACCESS_TOKEN_FETCHED_EVENT = 'accessTokenFetched';
var ACCESS_TOKEN_FETCH_ERROR_EVENT = 'accessTokenFetchError';
var TEXT_FIELD_NAME = 'Text';
var LINK_FIELD_NAME = 'Link';
var PHRASEID_FIELD_NAME = 'PhraseId';
var DEALER_SEARCH_PHRASE_ID = 'metafunctionalities.finddealer';
var MYPORSCHE_PHRASE_ID = 'metafunctionalities.myporsche';
var CREST_PHRASE_ID = 'mainmenu.crest';
var MENU_PHRASE_ID = 'mainmenu.menu';
var FEATURE_OVERRIDE_ENABLED = 'featureOverrideEnabled';
var FEATURE_MODEL_META = 'homenav_1163_modelMeta';
var FEATURE_MOBILE_FOCUS = 'homenav_1174_focusMgmt';
var MAX_M_VIEWPORT_WIDTH = 1299;
var FOCUSABLE_ELEMENTS_SELECTOR = 'a, button, [tabindex]:not([tabindex="-1"]), p-link-pure, p-button-pure';
var Locale = /** @class */ (function () {
    function Locale(locale) {
        this.setLocale(locale);
    }
    Locale.prototype.setLocale = function (locale) {
        this.language = locale.split('-')[0];
        this.country = locale.split('-')[1];
    };
    Locale.prototype.toString = function () {
        return this.language + "-" + this.country;
    };
    Locale.prototype.toHeaderString = function () {
        return this.language + "_" + this.country;
    };
    return Locale;
}());
var analyticsSetupStore = createStore({
    applicationId: ANALYTICS_APP_ID,
    locale: new Locale(DEFAULT_LOCALE),
    window: undefined,
    environment: DEFAULT_ENVIRONMENT
});
var ContextCollectionDimensions;
(function (ContextCollectionDimensions) {
    ContextCollectionDimensions["EventAction"] = "eventAction";
    ContextCollectionDimensions["ApplicationId"] = "applicationId";
    ContextCollectionDimensions["Language"] = "language";
    ContextCollectionDimensions["Country"] = "country";
    ContextCollectionDimensions["Timestamp"] = "timestamp";
    ContextCollectionDimensions["Environment"] = "environment";
})(ContextCollectionDimensions || (ContextCollectionDimensions = {}));
var VisitorCollectionDimensions;
(function (VisitorCollectionDimensions) {
    VisitorCollectionDimensions["DeviceBrowserHeight"] = "deviceBrowserHeight";
    VisitorCollectionDimensions["DeviceBrowserWidth"] = "deviceBrowserWidth";
    VisitorCollectionDimensions["DeviceBrowserBreakpoint"] = "deviceBrowserBreakpoint";
    VisitorCollectionDimensions["DeviceBrowserOrientation"] = "deviceBrowserOrientation";
})(VisitorCollectionDimensions || (VisitorCollectionDimensions = {}));
var PageExperienceCollectionDimensions;
(function (PageExperienceCollectionDimensions) {
    PageExperienceCollectionDimensions["PageId"] = "pageId";
    PageExperienceCollectionDimensions["PageName"] = "pageName";
})(PageExperienceCollectionDimensions || (PageExperienceCollectionDimensions = {}));
var CarCollectionDimensions;
(function (CarCollectionDimensions) {
    CarCollectionDimensions["ModelRangeCode"] = "modelRangeCode";
    CarCollectionDimensions["ModelRangeName"] = "modelRangeName";
    CarCollectionDimensions["ModelSeriesCode"] = "modelSeriesCode";
    CarCollectionDimensions["ModelSeriesName"] = "modelSeriesName";
    CarCollectionDimensions["ModelName"] = "modelName";
    CarCollectionDimensions["Bodytype"] = "bodytype";
})(CarCollectionDimensions || (CarCollectionDimensions = {}));
var ComponentClickCollectionDimension;
(function (ComponentClickCollectionDimension) {
    ComponentClickCollectionDimension["ClickElementType"] = "clickElementType";
    ComponentClickCollectionDimension["ClickElementId"] = "clickElementId";
    ComponentClickCollectionDimension["ClickElementName"] = "clickElementName";
    ComponentClickCollectionDimension["TargetUrl"] = "targetUrl";
})(ComponentClickCollectionDimension || (ComponentClickCollectionDimension = {}));
var Breakpoints;
(function (Breakpoints) {
    Breakpoints[Breakpoints["XXS"] = 0] = "XXS";
    Breakpoints[Breakpoints["XS"] = 480] = "XS";
    Breakpoints[Breakpoints["S"] = 760] = "S";
    Breakpoints[Breakpoints["M"] = 1000] = "M";
    Breakpoints[Breakpoints["L"] = 1300] = "L";
    Breakpoints[Breakpoints["XL"] = 1760] = "XL";
    Breakpoints[Breakpoints["XXL"] = 1920] = "XXL";
})(Breakpoints || (Breakpoints = {}));
var DeviceBrowserOrientation;
(function (DeviceBrowserOrientation) {
    DeviceBrowserOrientation["Portrait"] = "p";
    DeviceBrowserOrientation["Landscape"] = "l";
})(DeviceBrowserOrientation || (DeviceBrowserOrientation = {}));
var AnalyticsEvent = /** @class */ (function () {
    function AnalyticsEvent(analyticsSetup) {
        this.initContext();
        this.initVisitor();
        this.initPageExperience();
        this.context.applicationId = analyticsSetup.applicationId;
        this.context.country = analyticsSetup.locale.country;
        this.context.language = analyticsSetup.locale.language;
        this.context.timestamp = new Date(Date.now()).toISOString();
        this.context.environment = this.getEnvironmentAbreviation(analyticsSetup.environment);
        this.populateVisitor(analyticsSetup.window);
        this.populatePageExperience(window);
    }
    AnalyticsEvent.prototype.event = function () {
        var context = this.context;
        var visitor = this.visitor;
        var pageExperience = this.pageExperience;
        return {
            context: context,
            visitor: visitor,
            pageExperience: pageExperience
        };
    };
    AnalyticsEvent.prototype.initContext = function () {
        var _b;
        this.context = (_b = {},
            _b[ContextCollectionDimensions.ApplicationId] = undefined,
            _b[ContextCollectionDimensions.Language] = undefined,
            _b[ContextCollectionDimensions.Country] = undefined,
            _b[ContextCollectionDimensions.EventAction] = undefined,
            _b[ContextCollectionDimensions.Timestamp] = undefined,
            _b[ContextCollectionDimensions.Environment] = undefined,
            _b);
    };
    AnalyticsEvent.prototype.initVisitor = function () {
        var _b;
        this.visitor = (_b = {},
            _b[VisitorCollectionDimensions.DeviceBrowserWidth] = undefined,
            _b[VisitorCollectionDimensions.DeviceBrowserHeight] = undefined,
            _b[VisitorCollectionDimensions.DeviceBrowserBreakpoint] = undefined,
            _b[VisitorCollectionDimensions.DeviceBrowserOrientation] = undefined,
            _b);
    };
    AnalyticsEvent.prototype.initPageExperience = function () {
        var _b;
        this.pageExperience = (_b = {},
            _b[PageExperienceCollectionDimensions.PageId] = undefined,
            _b[PageExperienceCollectionDimensions.PageName] = undefined,
            _b);
    };
    AnalyticsEvent.prototype.populateVisitor = function (window) {
        this.visitor.deviceBrowserHeight = window.innerHeight.toString();
        this.visitor.deviceBrowserWidth = window.innerWidth.toString();
        this.visitor.deviceBrowserBreakpoint = this.getLowerBreakpointForWidth(window.innerWidth).toString();
        this.visitor.deviceBrowserOrientation = AnalyticsEvent.getDeviceOrientation(window);
    };
    AnalyticsEvent.prototype.populatePageExperience = function (window) {
        this.pageExperience.pageId = window.location.protocol + "//" + window.location.host + window.location.pathname;
        this.pageExperience.pageName = window.document.title.length > 0 ? window.document.title : undefined;
    };
    AnalyticsEvent.prototype.getLowerBreakpointForWidth = function (width) {
        var breakpointValues = Object.values(Breakpoints);
        return breakpointValues
            .filter(function (breakpointValue) { return breakpointValue <= width; })
            .reverse()
            .shift();
    };
    AnalyticsEvent.prototype.getEnvironmentAbreviation = function (environment) {
        if (environment === 'production') {
            return 'P';
        }
        else if (environment === 'preview') {
            return 'PP';
        }
        else {
            return 'K';
        }
    };
    AnalyticsEvent.getDeviceOrientation = function (window) {
        var orientation;
        if (window.matchMedia('(orientation: landscape)').matches) {
            orientation = DeviceBrowserOrientation.Landscape;
        }
        else if (window.matchMedia('(orientation: portrait)').matches) {
            orientation = DeviceBrowserOrientation.Portrait;
        }
        return orientation;
    };
    return AnalyticsEvent;
}());
var MenuBackClickEvent = /** @class */ (function (_super_1) {
    __extends(MenuBackClickEvent, _super_1);
    function MenuBackClickEvent(analyticsSetup, contentItem) {
        var _this_1 = _super_1.call(this, analyticsSetup) || this;
        _this_1.initComponentClick();
        _this_1.context.eventAction = 'PAGHomeNav_MenuBack_Click';
        _this_1.populateComponentClickFromContentItem(contentItem);
        return _this_1;
    }
    MenuBackClickEvent.prototype.initComponentClick = function () {
        var _b;
        this.componentClick = (_b = {},
            _b[ComponentClickCollectionDimension.ClickElementId] = undefined,
            _b[ComponentClickCollectionDimension.ClickElementName] = undefined,
            _b[ComponentClickCollectionDimension.ClickElementType] = undefined,
            _b[ComponentClickCollectionDimension.TargetUrl] = undefined,
            _b);
    };
    MenuBackClickEvent.prototype.populateComponentClickFromContentItem = function (contentItem) {
        this.componentClick.clickElementId = contentItem.PhraseId;
        this.componentClick.clickElementName = contentItem.Text;
        this.componentClick.clickElementType = 'button';
    };
    MenuBackClickEvent.prototype.event = function () {
        var componentClick = this.componentClick;
        return Object.assign(Object.assign({}, _super_1.prototype.event.call(this)), { componentClick: componentClick });
    };
    return MenuBackClickEvent;
}(AnalyticsEvent));
var backButtonCss = ".sc-phn-back-button-h{font-size:1rem;display:-ms-flexbox;display:flex}@media (min-width: 1300px){.sc-phn-back-button-h{visibility:hidden}}@media (min-width: 760px) and (max-width: 999px){.sc-phn-back-button-h{font-size:1.125rem}}";
var BackButton = /** @class */ (function () {
    function BackButton(hostRef) {
        var _this_1 = this;
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.text = '';
        this.buttonId = '';
        this.sendMenuBackClickEventAnalyticsEvent = function () {
            var contentItem = { Text: _this_1.text, PhraseId: _this_1.buttonId, Link: '' };
            var analyticsSetup = {
                applicationId: analyticsSetupStore.get('applicationId'),
                locale: analyticsSetupStore.get('locale'),
                window: analyticsSetupStore.get('window'),
                environment: analyticsSetupStore.get('environment')
            };
            var menuBackClickEvent = new MenuBackClickEvent(analyticsSetup, contentItem);
            var pagData = (window['pagData'] = window['pagData'] || []);
            pagData.push(menuBackClickEvent.event());
        };
    }
    BackButton.prototype.render = function () {
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-button-pure", { size: "inherit", icon: "arrow-head-left", class: "back-button-text-link", "aria-label": "Back to Menu", onClick: this.sendMenuBackClickEventAnalyticsEvent }, this.text)));
    };
    return BackButton;
}());
BackButton.style = backButtonCss;
var navContentStore = createStore({
    seriesList: DEFAULT_SERIES_LIST,
    shops: DEFAULT_SHOPS,
    more: DEFAULT_MORE,
    metafunctionalities: DEFAULT_METAFUNCTIONALITIES,
    menu: DEFAULT_MENU,
    env: DEFAULT_ENVIRONMENT,
    loggedInState: undefined,
    unreadMessagesCount: DEFAULT_UNREAD_MESSAGES_COUNT
});
var navStateStore = createStore({
    drawerContentStack: [],
    isDrawerOpen: false,
    imagesRegistered: 0,
    imagesRetrieved: 0,
    imagesLoaded: true,
    navigationLoaded: false,
    crestLoaded: false,
    pinSvgLoaded: false,
    userSvgLoaded: false,
    spinnerSvgLoaded: false,
    loggedInUserSvgLoaded: false
});
navStateStore.onChange('imagesRetrieved', function () {
    navStateStore.set('imagesLoaded', navStateStore.get('imagesRetrieved') === navStateStore.get('imagesRegistered'));
});
navStateStore.onChange('imagesRegistered', function () {
    navStateStore.set('imagesLoaded', navStateStore.get('imagesRetrieved') === navStateStore.get('imagesRegistered'));
});
navStateStore.onChange('imagesLoaded', function () {
    navStateStore.set('navigationLoaded', navStateStore.get('crestLoaded') && navStateStore.get('imagesLoaded'));
});
navStateStore.onChange('crestLoaded', function () {
    navStateStore.set('navigationLoaded', navStateStore.get('crestLoaded') && navStateStore.get('imagesLoaded'));
});
var MoreClickEvent = /** @class */ (function (_super_1) {
    __extends(MoreClickEvent, _super_1);
    function MoreClickEvent(analyticsSetup, contentItem) {
        var _this_1 = _super_1.call(this, analyticsSetup) || this;
        _this_1.initComponentClick();
        _this_1.context.eventAction = 'PAGHomeNav_More_Click';
        _this_1.populateComponentClickFromContentItem(contentItem);
        return _this_1;
    }
    MoreClickEvent.prototype.initComponentClick = function () {
        var _b;
        this.componentClick = (_b = {},
            _b[ComponentClickCollectionDimension.ClickElementId] = undefined,
            _b[ComponentClickCollectionDimension.ClickElementName] = undefined,
            _b[ComponentClickCollectionDimension.ClickElementType] = undefined,
            _b[ComponentClickCollectionDimension.TargetUrl] = undefined,
            _b);
    };
    MoreClickEvent.prototype.populateComponentClickFromContentItem = function (contentItem) {
        this.componentClick.clickElementId = contentItem.PhraseId;
        this.componentClick.clickElementName = contentItem.Text;
        this.componentClick.clickElementType = 'button';
    };
    MoreClickEvent.prototype.event = function () {
        var componentClick = this.componentClick;
        return Object.assign(Object.assign({}, _super_1.prototype.event.call(this)), { componentClick: componentClick });
    };
    return MoreClickEvent;
}(AnalyticsEvent));
var burgerButtonCss = ".sc-phn-burger-button-h{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative}.sc-phn-burger-button-h .burger-button.sc-phn-burger-button{display:-ms-flexbox;display:flex;font-family:inherit;width:100%;margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;outline:transparent none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;text-decoration:none;text-align:left;background:transparent;cursor:pointer;color:inherit;color:#000}.sc-phn-burger-button-h .burger-button.sc-phn-burger-button::-moz-focus-inner{border:0}.sc-phn-burger-button-h .burger-button.sc-phn-burger-button:focus{outline-width:2px;outline-style:solid;outline-offset:1px;outline-color:#00d5b9}@media (min-width: 760px) and (max-width: 999px){.sc-phn-burger-button-h .burger-button.sc-phn-burger-button{padding-bottom:0.125rem}}.sc-phn-burger-button-h .burger-button.sc-phn-burger-button:hover{color:#d5001c;cursor:pointer}@media (min-width: 1300px){.sc-phn-burger-button-h .burger-button.sc-phn-burger-button{display:none}}@media (min-width: 760px) and (max-width: 999px){.sc-phn-burger-button-h .burger-button.sc-phn-burger-button .burger-button-icon.sc-phn-burger-button{padding-top:0.125rem}}.sc-phn-burger-button-h .burger-button.sc-phn-burger-button .burger-button-text.sc-phn-burger-button{font-size:1rem;padding:0 0.5rem 0 0}@media (min-width: 760px) and (max-width: 999px){.sc-phn-burger-button-h .burger-button.sc-phn-burger-button .burger-button-text.sc-phn-burger-button{font-size:1.125rem}}.sc-phn-burger-button-h .burger-button.sc-phn-burger-button .myporsche-unread-messages-indicator.sc-phn-burger-button{position:absolute;width:0.375rem;height:0.375rem;border-radius:50%;background-color:#d5001c;right:-0.25rem;top:1.25rem}@media (min-width: 760px){.sc-phn-burger-button-h .burger-button.sc-phn-burger-button .myporsche-unread-messages-indicator.sc-phn-burger-button{top:1.3125rem}}@media (min-width: 1000px){.sc-phn-burger-button-h .burger-button.sc-phn-burger-button .myporsche-unread-messages-indicator.sc-phn-burger-button{top:1.4375rem}}.sc-phn-burger-button-h .burger-button-skeleton.sc-phn-burger-button{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:0.875rem;width:4rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background:#c9cacb}@media (min-width: 1300px){.sc-phn-burger-button-h .burger-button-skeleton.sc-phn-burger-button{display:none}}";
var BurgerButton = /** @class */ (function () {
    function BurgerButton(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.hiddenStyle = { display: 'none' };
        this.sendMoreClickAnalyticsEvent = function () {
            var analyticsSetup = {
                applicationId: analyticsSetupStore.get('applicationId'),
                locale: analyticsSetupStore.get('locale'),
                window: analyticsSetupStore.get('window'),
                environment: analyticsSetupStore.get('environment')
            };
            var menu = navContentStore.get('menu');
            var moreClickEvent = new MoreClickEvent(analyticsSetup, menu[0]);
            var pagData = (window['pagData'] = window['pagData'] || []);
            pagData.push(moreClickEvent.event());
        };
    }
    BurgerButton.prototype.getText = function () {
        var text = '';
        var menu = navContentStore.get('menu');
        if (menu && menu.length > 0) {
            var menuItem = menu.find(function (m) { return m.PhraseId === MENU_PHRASE_ID; });
            if (menuItem && menuItem.Text) {
                text = menuItem.Text;
            }
        }
        return text;
    };
    BurgerButton.prototype.render = function () {
        var hasMenuContent = navContentStore.get('menu').length > 0;
        var hasUnreadMessages = navContentStore.get('unreadMessagesCount') > 0;
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { style: navStateStore.get('crestLoaded') ? {} : this.hiddenStyle, class: "burger-button", onClick: hasMenuContent ? this.sendMoreClickAnalyticsEvent : null, "aria-haspopup": "dialog" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { size: "inherit", class: "burger-button-text" }, this.getText()), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-icon", { class: "burger-button-icon", size: "small", name: "menu-lines", role: "img", "aria-label": "burger button" }), hasUnreadMessages && Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "myporsche-unread-messages-indicator" })), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { style: navStateStore.get('crestLoaded') ? this.hiddenStyle : {}, class: "burger-button-skeleton" })));
    };
    return BurgerButton;
}());
BurgerButton.style = burgerButtonCss;
var buttonExtendedCss = "button.sc-phn-button-extended{display:-ms-flexbox;display:flex;width:100%;position:relative;margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;outline:transparent none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;text-decoration:none;text-align:left;background:transparent;-webkit-transition:outline-color 0.24s ease, color 0.24s ease;transition:outline-color 0.24s ease, color 0.24s ease;color:inherit;font-size:inherit;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}button.sc-phn-button-extended::-moz-focus-inner{border:0}button.sc-phn-button-extended:focus{outline-width:2px;outline-style:solid;outline-offset:1px;outline-color:#00d5b9;height:100%}button.sc-phn-button-extended:hover,button.sc-phn-button-extended:hover p-text.sc-phn-button-extended,button.sc-phn-button-extended:hover p-icon.sc-phn-button-extended{color:#d5001c;cursor:pointer}@media (min-width: 1300px){button.sc-phn-button-extended:hover,button.sc-phn-button-extended:hover p-text.sc-phn-button-extended,button.sc-phn-button-extended:hover p-icon.sc-phn-button-extended{cursor:default;color:inherit}}button.sc-phn-button-extended:enabled:hover,button.sc-phn-button-extended:enabled:active,button.sc-phn-button-extended:not([disabled]):hover,button.sc-phn-button-extended:not([disabled]):active{color:#d5001c}button.sc-phn-button-extended p-icon.sc-phn-button-extended{display:-ms-flexbox;display:flex}button.sc-phn-button-extended p-text.sc-phn-button-extended{display:-ms-flexbox;display:flex}";
var ButtonExtended = /** @class */ (function () {
    function ButtonExtended(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.cancelTabIndex = true;
    }
    ButtonExtended.prototype.render = function () {
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { tabindex: this.cancelTabIndex ? -1 : 0 }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { color: "inherit", size: "inherit", tag: "div" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)), this.icon ? Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-icon", { color: "inherit", size: "small", name: this.icon }) : null));
    };
    return ButtonExtended;
}());
ButtonExtended.style = buttonExtendedCss;
var NavigationClickEvent = /** @class */ (function (_super_1) {
    __extends(NavigationClickEvent, _super_1);
    function NavigationClickEvent(analyticsSetup, contentItem) {
        var _this_1 = _super_1.call(this, analyticsSetup) || this;
        _this_1.context.eventAction = 'PAGHomeNav_Navigation_Click';
        _this_1.initComponentClick();
        _this_1.populateComponentClickFromContentItem(contentItem);
        return _this_1;
    }
    NavigationClickEvent.prototype.initComponentClick = function () {
        var _b;
        this.componentClick = (_b = {},
            _b[ComponentClickCollectionDimension.ClickElementId] = undefined,
            _b[ComponentClickCollectionDimension.ClickElementName] = undefined,
            _b[ComponentClickCollectionDimension.ClickElementType] = undefined,
            _b[ComponentClickCollectionDimension.TargetUrl] = undefined,
            _b);
    };
    NavigationClickEvent.prototype.populateComponentClickFromContentItem = function (contentItem) {
        this.componentClick.clickElementId = contentItem.PhraseId;
        this.componentClick.clickElementName = contentItem.Text;
        this.componentClick.clickElementType = contentItem.Link && contentItem.Link !== '' ? 'link' : 'button';
        this.componentClick.targetUrl = contentItem.Link !== '' ? contentItem.Link : undefined;
    };
    NavigationClickEvent.prototype.event = function () {
        var componentClick = this.componentClick;
        return Object.assign(Object.assign({}, _super_1.prototype.event.call(this)), { componentClick: componentClick });
    };
    return NavigationClickEvent;
}(AnalyticsEvent));
var carFurtherLinksCss = "@media (min-width: 1300px){.car-further-links.sc-phn-car-further-links{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}}.car-further-links.sc-phn-car-further-links .car-further-links-wrapper.sc-phn-car-further-links{border-bottom:1px solid #c9cacb;margin-bottom:3.75rem}@media (min-width: 1300px){.car-further-links.sc-phn-car-further-links .car-further-links-wrapper.sc-phn-car-further-links{border-top:1px solid #c9cacb;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;margin-bottom:unset}}.car-further-links-item.sc-phn-car-further-links{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;font-weight:normal;-ms-flex-align:center;align-items:center;border-top:1px solid #c9cacb;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:1rem;padding:15px 0}.car-further-links-item.sc-phn-car-further-links:first-child{border-top:0}@media (min-width: 760px) and (max-width: 999px){.car-further-links-item.sc-phn-car-further-links{font-size:1.125rem;padding:18px 0}}@media (min-width: 1300px){.car-further-links-item.sc-phn-car-further-links{height:1.5rem;padding:0.875rem 0.625rem;border-top:0;-webkit-box-sizing:unset;box-sizing:unset}.car-further-links-item.sc-phn-car-further-links:first-child{margin-right:0.25rem}}";
var CarFurtherLinks = /** @class */ (function () {
    function CarFurtherLinks(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.items = [
            { PhraseId: '', Text: '', Link: '' },
            { PhraseId: '', Text: '', Link: '' }
        ];
        this.sendNavigationClickAnalyticsEvent = function (contentItem) {
            var analyticsSetup = {
                applicationId: analyticsSetupStore.get('applicationId'),
                locale: analyticsSetupStore.get('locale'),
                window: analyticsSetupStore.get('window'),
                environment: analyticsSetupStore.get('environment')
            };
            var navigationClick = new NavigationClickEvent(analyticsSetup, contentItem);
            var pagData = (window['pagData'] = window['pagData'] || []);
            pagData.push(navigationClick.event());
        };
    }
    CarFurtherLinks.prototype.renderItem = function (item) {
        var _this_1 = this;
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-link-pure", { href: item.Link, icon: 'arrow-head-right', size: "inherit", class: "car-further-links-item", onClick: function () { return _this_1.sendNavigationClickAnalyticsEvent(item); }, role: "button" }, item.Text));
    };
    CarFurtherLinks.prototype.render = function () {
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "car-further-links" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "car-further-links-wrapper" }, this.renderItem(this.items[0]), this.renderItem(this.items[1]))));
    };
    return CarFurtherLinks;
}());
CarFurtherLinks.style = carFurtherLinksCss;
var ModelAnalyticsEvent = /** @class */ (function (_super_1) {
    __extends(ModelAnalyticsEvent, _super_1);
    function ModelAnalyticsEvent(analyticsSetup, modelRangeName) {
        var _this_1 = _super_1.call(this, analyticsSetup) || this;
        _this_1.context.eventAction = 'PAGHomeNav_ModelSeries_Click';
        _this_1.initCar();
        _this_1.initComponentClick();
        _this_1.populateCar(modelRangeName);
        return _this_1;
    }
    ModelAnalyticsEvent.prototype.initCar = function () {
        var _b;
        this.car = (_b = {},
            _b[CarCollectionDimensions.ModelRangeCode] = undefined,
            _b[CarCollectionDimensions.ModelRangeName] = undefined,
            _b[CarCollectionDimensions.ModelSeriesName] = undefined,
            _b[CarCollectionDimensions.ModelSeriesCode] = undefined,
            _b[CarCollectionDimensions.ModelName] = undefined,
            _b[CarCollectionDimensions.Bodytype] = undefined,
            _b);
    };
    ModelAnalyticsEvent.prototype.initComponentClick = function () {
        var _b;
        this.componentClick = (_b = {},
            _b[ComponentClickCollectionDimension.ClickElementId] = undefined,
            _b[ComponentClickCollectionDimension.ClickElementName] = undefined,
            _b[ComponentClickCollectionDimension.ClickElementType] = undefined,
            _b[ComponentClickCollectionDimension.TargetUrl] = undefined,
            _b);
    };
    ModelAnalyticsEvent.prototype.populateCar = function (modelRangeName) {
        this.car.modelRangeName = modelRangeName;
    };
    ModelAnalyticsEvent.prototype.event = function () {
        var car = this.car;
        var componentClick = this.componentClick;
        return Object.assign(Object.assign({}, _super_1.prototype.event.call(this)), { car: car,
            componentClick: componentClick });
    };
    return ModelAnalyticsEvent;
}(AnalyticsEvent));
var ConfigureClickEvent = /** @class */ (function (_super_1) {
    __extends(ConfigureClickEvent, _super_1);
    function ConfigureClickEvent(analyticsSetup, modelSeriesName, contentItem) {
        var _this_1 = _super_1.call(this, analyticsSetup, modelSeriesName) || this;
        _this_1.context.eventAction = 'PAGHomeNav_Configure_Click';
        _this_1.populateComponentClickFromLink(contentItem);
        return _this_1;
    }
    ConfigureClickEvent.prototype.populateComponentClickFromLink = function (contentItem) {
        this.componentClick.clickElementId = contentItem.PhraseId;
        this.componentClick.clickElementName = contentItem.Text;
        this.componentClick.clickElementType = 'link';
        this.componentClick.targetUrl = contentItem.Link;
    };
    ConfigureClickEvent.prototype.event = function () {
        var componentClick = this.componentClick;
        return Object.assign(Object.assign({}, _super_1.prototype.event.call(this)), { componentClick: componentClick });
    };
    return ConfigureClickEvent;
}(ModelAnalyticsEvent));
var CompareClickEvent = /** @class */ (function (_super_1) {
    __extends(CompareClickEvent, _super_1);
    function CompareClickEvent(analyticsSetup, modelSeriesName, contentItem) {
        var _this_1 = _super_1.call(this, analyticsSetup, modelSeriesName) || this;
        _this_1.context.eventAction = 'PAGHomeNav_Compare_Click';
        _this_1.populateComponentClickFromLink(contentItem);
        return _this_1;
    }
    CompareClickEvent.prototype.populateComponentClickFromLink = function (contentItem) {
        this.componentClick.clickElementId = contentItem.PhraseId;
        this.componentClick.clickElementName = contentItem.Text;
        this.componentClick.clickElementType = 'link';
        this.componentClick.targetUrl = contentItem.Link;
    };
    CompareClickEvent.prototype.event = function () {
        var componentClick = this.componentClick;
        return Object.assign(Object.assign({}, _super_1.prototype.event.call(this)), { componentClick: componentClick });
    };
    return CompareClickEvent;
}(ModelAnalyticsEvent));
var FindCarClickEvent = /** @class */ (function (_super_1) {
    __extends(FindCarClickEvent, _super_1);
    function FindCarClickEvent(analyticsSetup, modelSeriesName, contentItem) {
        var _this_1 = _super_1.call(this, analyticsSetup, modelSeriesName) || this;
        _this_1.context.eventAction = 'PAGHomeNav_FindCar_Click';
        _this_1.populateComponentClickFromLink(contentItem);
        return _this_1;
    }
    FindCarClickEvent.prototype.populateComponentClickFromLink = function (contentItem) {
        this.componentClick.clickElementId = contentItem.PhraseId;
        this.componentClick.clickElementName = contentItem.Text;
        this.componentClick.clickElementType = 'link';
        this.componentClick.targetUrl = contentItem.Link;
    };
    FindCarClickEvent.prototype.event = function () {
        var componentClick = this.componentClick;
        return Object.assign(Object.assign({}, _super_1.prototype.event.call(this)), { componentClick: componentClick });
    };
    return FindCarClickEvent;
}(ModelAnalyticsEvent));
var local = {
    CONTENT_URL: "https://preview-nav.porsche.com/content/preprod-content.json",
    ASSETS_URL: ".",
    PROFILE_API_URL: "https://api.porsche-preview.com/profiles/mydata",
    UNREAD_MESSAGES_COUNT_API_URL: "https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",
    LOGIN_BASE_URL: "https://preview-login.porsche.com",
    LOGIN_REDIRECT_URL: "https://preview-nav.porsche.com/authIframe.html",
    CLIENT_ID: "V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",
    PORSCHE_COM_URL: [
        "http://localhost:3333",
        "http://localhost:3334",
        "http://localhost:3335"
    ]
};
var preview = {
    CONTENT_URL: "https://preview-nav.porsche.com/content/preprod-content.json",
    ASSETS_URL: "https://preview-nav.porsche.com",
    PROFILE_API_URL: "https://api.porsche-preview.com/profiles/mydata",
    UNREAD_MESSAGES_COUNT_API_URL: "https://api.porsche-preview.com/inbox/pp/rest/messages/unreadCount",
    LOGIN_BASE_URL: "https://preview-login.porsche.com",
    LOGIN_REDIRECT_URL: "https://preview-nav.porsche.com/authIframe.html",
    CLIENT_ID: "V5yfGusXVALiypCMRFBfM4IAHaZ0IA4A",
    PORSCHE_COM_URL: [
        "https://vanillajs.preview-nav.porsche.com",
        "https://angular.preview-nav.porsche.com",
        "https://react.preview-nav.porsche.com",
        "https://vanillajs.pchomenav.aws.porsche.cloud",
        "https://react.pchomenav.aws.porsche.cloud",
        "https://angular.pchomenav.aws.porsche.cloud",
        "https://preview.ppn.porsche.com"
    ],
    LOGGING_ENDPOINT: "https://logs.nav.porsche.com"
};
var production = {
    CONTENT_URL: "https://nav.porsche.com/00BC524/content/content.json",
    ASSETS_URL: "https://nav.porsche.com/00BC524",
    PROFILE_API_URL: "https://api.porsche.com/profiles/mydata",
    UNREAD_MESSAGES_COUNT_API_URL: "https://api.porsche.com/inbox/p/rest/messages/unreadCount",
    LOGIN_BASE_URL: "https://login.porsche.com",
    LOGIN_REDIRECT_URL: "https://nav.porsche.com/00BC524/auth/authIframe.html",
    CLIENT_ID: "QPw3VOLAMfI7r0nmRY8ELq4RzZpZeXEE",
    PORSCHE_COM_URL: [
        "https://www.porsche.com"
    ],
    LOGGING_ENDPOINT: "https://logs.nav.porsche.com"
};
var configJson = {
    local: local,
    preview: preview,
    production: production
};
var local$1 = {
    featureOverrideEnabled: true,
    homenav_feature1: false,
    homenav_1163_modelMeta: true,
    homenav_1174_focusMgmt: false
};
var preview$1 = {
    featureOverrideEnabled: true,
    homenav_feature1: false,
    homenav_1163_modelMeta: true,
    homenav_1174_focusMgmt: false
};
var production$1 = {
    featureOverrideEnabled: false,
    homenav_feature1: false,
    homenav_1163_modelMeta: true,
    homenav_1174_focusMgmt: false
};
var featureJson = {
    local: local$1,
    preview: preview$1,
    production: production$1
};
var config = function (env) {
    if (env === void 0) { env = DEFAULT_ENVIRONMENT; }
    return configJson[env] || configJson['local'];
};
var getOverrideValue = function (feature) {
    var queryString = window.location.search.split('?')[1];
    if (queryString) {
        var queryStringArray = queryString.split('&');
        var featureQuery = queryStringArray.find(function (query) { return query.indexOf(feature) > -1; });
        if (featureQuery) {
            var stringValue = featureQuery.split('=')[1];
            if (stringValue === 'true') {
                return true;
            }
            else if (stringValue === 'false') {
                return false;
            }
        }
    }
};
var isOverrideValid = function (env, overrideValue) { return featureJson[env][FEATURE_OVERRIDE_ENABLED] && overrideValue !== undefined; };
var isFeatureEnabled = function (feature, env) {
    if (env === void 0) { env = DEFAULT_ENVIRONMENT; }
    var overrideValue = getOverrideValue(feature);
    return isOverrideValid(env, overrideValue) ? overrideValue : featureJson[env][feature];
};
var ModelMetaClickEvent = /** @class */ (function (_super_1) {
    __extends(ModelMetaClickEvent, _super_1);
    function ModelMetaClickEvent(analyticsSetup, modelRangeName, modelMeta) {
        var _this_1 = _super_1.call(this, analyticsSetup, modelRangeName) || this;
        _this_1.context.eventAction = 'PAGHomeNav_ModelMetaFunction_Click';
        _this_1.populateComponentClickFromLink(modelMeta);
        return _this_1;
    }
    ModelMetaClickEvent.prototype.populateComponentClickFromLink = function (modelMeta) {
        this.componentClick.clickElementId = modelMeta.PhraseId;
        this.componentClick.clickElementName = modelMeta.Text;
        this.componentClick.clickElementType = 'link';
        this.componentClick.targetUrl = modelMeta.Link;
    };
    ModelMetaClickEvent.prototype.event = function () {
        var componentClick = this.componentClick;
        return Object.assign(Object.assign({}, _super_1.prototype.event.call(this)), { componentClick: componentClick });
    };
    return ModelMetaClickEvent;
}(ModelAnalyticsEvent));
var carMetaFunctionalitiesCss = "@media (min-width: 1300px) and (max-width: 1759px){.car-meta-functionalities.sc-phn-car-meta-functionalities{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding-top:3.125rem}}@media (min-width: 1760px){.car-meta-functionalities.sc-phn-car-meta-functionalities{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;padding-top:3rem}}.car-meta-functionalities.sc-phn-car-meta-functionalities .car-meta-functionalities-wrapper.sc-phn-car-meta-functionalities{border-bottom:1px solid #c9cacb;border-top:1px solid #c9cacb}@media (min-width: 0) and (max-width: 1299px){.car-meta-functionalities.sc-phn-car-meta-functionalities .car-meta-functionalities-wrapper.sc-phn-car-meta-functionalities{border:0}}@media (min-width: 1300px){.car-meta-functionalities.sc-phn-car-meta-functionalities .car-meta-functionalities-wrapper.sc-phn-car-meta-functionalities{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;height:3.375rem}}.car-meta-functionalities-item.sc-phn-car-meta-functionalities{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center}@media (min-width: 0) and (max-width: 759px){.car-meta-functionalities-item.sc-phn-car-meta-functionalities{font-size:1rem;padding:0.875rem 0 0.875rem 0;border-bottom:1px solid #c9cacb}}@media (min-width: 760px) and (max-width: 999px){.car-meta-functionalities-item.sc-phn-car-meta-functionalities{font-size:1.125rem;padding:1.125rem 0 1.125rem 0;border-bottom:1px solid #c9cacb}}@media (min-width: 1000px) and (max-width: 1299px){.car-meta-functionalities-item.sc-phn-car-meta-functionalities{font-size:1rem;padding:0.875rem 0 0.875rem 0;border-bottom:1px solid #c9cacb}}@media (min-width: 1300px){.car-meta-functionalities-item.sc-phn-car-meta-functionalities{font-size:1rem;padding:0.875rem 0 0.875rem 1.5rem;border-bottom:0}.car-meta-functionalities-item.sc-phn-car-meta-functionalities:nth-last-child(1){margin-right:0.625rem}.car-meta-functionalities-item.sc-phn-car-meta-functionalities:nth-child(1){padding:0.875rem 0 0.875rem 0.625rem}}";
var CarMetaFunctionalities = /** @class */ (function () {
    function CarMetaFunctionalities(hostRef) {
        var _this_1 = this;
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.items = [
            { PhraseId: '', Text: '', Link: '' },
            { PhraseId: '', Text: '', Link: '' },
            { PhraseId: '', Text: '', Link: '' }
        ];
        this.modelMetaItems = [
            { PhraseId: '', Icon: '', Text: '', Link: '' },
            { PhraseId: '', Icon: '', Text: '', Link: '' },
            { PhraseId: '', Icon: '', Text: '', Link: '' }
        ];
        this.sendModelMetaFunctionAnalyticsEvent = function (modelMetaItem) {
            var analyticsSetup = {
                applicationId: analyticsSetupStore.get('applicationId'),
                locale: analyticsSetupStore.get('locale'),
                window: analyticsSetupStore.get('window'),
                environment: analyticsSetupStore.get('environment')
            };
            var modelMetaClickEvent = new ModelMetaClickEvent(analyticsSetup, _this_1.name, modelMetaItem);
            var pagData = (window['pagData'] = window['pagData'] || []);
            pagData.push(modelMetaClickEvent.event());
        };
        this.sendConfigureClickAnalyticsEvent = function (contentItem) {
            var analyticsSetup = {
                applicationId: analyticsSetupStore.get('applicationId'),
                locale: analyticsSetupStore.get('locale'),
                window: analyticsSetupStore.get('window'),
                environment: analyticsSetupStore.get('environment')
            };
            var configureClickEvent = new ConfigureClickEvent(analyticsSetup, _this_1.name, contentItem);
            var pagData = (window['pagData'] = window['pagData'] || []);
            pagData.push(configureClickEvent.event());
        };
        this.sendCompareClickAnalyticsEvent = function (contentItem) {
            var analyticsSetup = {
                applicationId: analyticsSetupStore.get('applicationId'),
                locale: analyticsSetupStore.get('locale'),
                window: analyticsSetupStore.get('window'),
                environment: analyticsSetupStore.get('environment')
            };
            var compareClickEvent = new CompareClickEvent(analyticsSetup, _this_1.name, contentItem);
            var pagData = (window['pagData'] = window['pagData'] || []);
            pagData.push(compareClickEvent.event());
        };
        this.sendFindCarClickAnalyticsEvent = function (contentItem) {
            var analyticsSetup = {
                applicationId: analyticsSetupStore.get('applicationId'),
                locale: analyticsSetupStore.get('locale'),
                window: analyticsSetupStore.get('window'),
                environment: analyticsSetupStore.get('environment')
            };
            var findCarClickEvent = new FindCarClickEvent(analyticsSetup, _this_1.name, contentItem);
            var pagData = (window['pagData'] = window['pagData'] || []);
            pagData.push(findCarClickEvent.event());
        };
    }
    CarMetaFunctionalities.prototype.renderItem = function (source, contentItem, analyticsEvent) {
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-link-pure", { href: contentItem.Link, icon: source, size: "inherit", onClick: function () { return analyticsEvent(contentItem); }, class: "car-meta-functionalities-item" }, contentItem.Text));
    };
    CarMetaFunctionalities.prototype.render = function () {
        var _this_1 = this;
        return isFeatureEnabled(FEATURE_MODEL_META) ? (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "car-meta-functionalities" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "car-meta-functionalities-wrapper" }, this.modelMetaItems.map(function (item) { return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-link-pure", { href: item.Link, icon: item.Icon, onClick: function () { return _this_1.sendModelMetaFunctionAnalyticsEvent(item); }, size: "inherit", class: "car-meta-functionalities-item" }, item.Text)); })))) : (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "car-meta-functionalities" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "car-meta-functionalities-wrapper" }, this.renderItem('configurate', this.items[0], this.sendConfigureClickAnalyticsEvent), this.renderItem('compare', this.items[1], this.sendCompareClickAnalyticsEvent), this.renderItem('search', this.items[2], this.sendFindCarClickAnalyticsEvent))));
    };
    return CarMetaFunctionalities;
}());
CarMetaFunctionalities.style = carMetaFunctionalitiesCss;
var carModelCss = ".car-model.sc-phn-car-model{text-decoration:none;color:#000;padding-top:0.6875rem;padding-bottom:0.875rem;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;width:100%;text-align:left;border-bottom:1px solid #c9cacb}@media (min-width: 760px){.car-model.sc-phn-car-model{padding-top:unset;padding-bottom:unset}}@media (min-width: 1000px){.car-model.sc-phn-car-model:focus{outline-width:2px;outline-style:solid;outline-offset:1px;outline-color:#00d5b9;outline-offset:-2px}}@media (min-width: 1300px){.car-model.sc-phn-car-model{display:block;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:unset;align-items:unset;width:unset;text-align:center;border-bottom:0}}.car-model.sc-phn-car-model:hover .model-text.sc-phn-car-model{color:#d5001c}.car-model.sc-phn-car-model .model-pic.sc-phn-car-model{width:50%}.car-model.sc-phn-car-model .model-pic.sc-phn-car-model img.sc-phn-car-model{vertical-align:middle}@media (min-width: 760px) and (max-width: 999px){.car-model.sc-phn-car-model .model-pic.sc-phn-car-model{height:10.875rem}}@media (min-width: 1000px) and (max-width: 1299px){.car-model.sc-phn-car-model .model-pic.sc-phn-car-model{height:8.125rem}}@media (min-width: 1300px){.car-model.sc-phn-car-model .model-pic.sc-phn-car-model{width:100%}}.car-model.sc-phn-car-model .model-text.sc-phn-car-model{width:50%}@media (min-width: 0) and (max-width: 759px){.car-model.sc-phn-car-model .model-text.sc-phn-car-model{font-size:1rem;line-height:1.5rem}}@media (min-width: 760px) and (max-width: 999px){.car-model.sc-phn-car-model .model-text.sc-phn-car-model{font-size:1.875rem;line-height:2.5rem}}@media (min-width: 1000px) and (max-width: 1299px){.car-model.sc-phn-car-model .model-text.sc-phn-car-model{font-size:1.5rem;line-height:2rem}}@media (min-width: 1300px){.car-model.sc-phn-car-model .model-text.sc-phn-car-model{width:100%;margin-top:-0.9375rem}}";
var CarModel = /** @class */ (function () {
    function CarModel(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    CarModel.prototype.render = function () {
        var path = Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["c"])(config(navContentStore.get('env')).ASSETS_URL + "/model-assets");
        var imageFileEnding = 'jpg';
        var imageType = 'jpeg';
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { class: "car-model", href: this.link }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("picture", { class: "model-pic", "aria-hidden": "true" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("source", { type: "image/" + imageType, media: "(min-width: 1760px)", srcSet: path + "/1920/" + this.image + "." + imageFileEnding + ", " + path + "/1920/" + this.image + "@2x." + imageFileEnding + " 2x" }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("source", { type: "image/" + imageType, media: "(min-width: 1300px)", srcSet: path + "/1366/" + this.image + "." + imageFileEnding + ", " + path + "/1366/" + this.image + "@2x." + imageFileEnding + " 2x" }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("source", { type: "image/" + imageType, media: "(min-width: 1000px)", srcSet: path + "/1024/" + this.image + "." + imageFileEnding + ", " + path + "/1024/" + this.image + "@2x." + imageFileEnding + " 2x" }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("source", { type: "image/" + imageType, media: "(min-width: 760px)", srcSet: path + "/768/" + this.image + "." + imageFileEnding + ", " + path + "/768/" + this.image + "@2x." + imageFileEnding + " 2x" }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("source", { type: "image/" + imageType, media: "(min-width: 375px)", srcSet: path + "/375/" + this.image + "." + imageFileEnding + ", " + path + "/375/" + this.image + "@2x." + imageFileEnding + " 2x" }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("source", { type: "image/" + imageType, media: "(min-width: 0px)", srcSet: path + "/320/" + this.image + "." + imageFileEnding + ", " + path + "/320/" + this.image + "@2x." + imageFileEnding + " 2x" }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { alt: this.text })), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "model-text" }, this.text)));
    };
    Object.defineProperty(CarModel, "assetsDirs", {
        get: function () { return ["model-assets"]; },
        enumerable: false,
        configurable: true
    });
    return CarModel;
}());
CarModel.style = carModelCss;
var ModelClickEvent = /** @class */ (function (_super_1) {
    __extends(ModelClickEvent, _super_1);
    function ModelClickEvent(analyticsSetup, modelRangeName, model) {
        var _this_1 = _super_1.call(this, analyticsSetup, modelRangeName) || this;
        _this_1.context.eventAction = 'PAGHomeNav_Model_Click';
        _this_1.populateComponentClickFromLink(model);
        return _this_1;
    }
    ModelClickEvent.prototype.populateComponentClickFromLink = function (model) {
        this.componentClick.clickElementId = model.PhraseId;
        this.componentClick.clickElementName = undefined;
        this.componentClick.clickElementType = 'link';
        this.componentClick.targetUrl = model.Link;
    };
    ModelClickEvent.prototype.event = function () {
        var componentClick = this.componentClick;
        return Object.assign(Object.assign({}, _super_1.prototype.event.call(this)), { componentClick: componentClick });
    };
    return ModelClickEvent;
}(ModelAnalyticsEvent));
var carModelListCss = "@media (min-width: 1300px) and (max-width: 1759px){.car-model-list.sc-phn-car-model-list{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin-bottom:1.875rem}}@media (min-width: 1760px){.car-model-list.sc-phn-car-model-list{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;margin-bottom:3.5625rem}}@media (min-width: 1300px) and (max-width: 1759px){.car-model-list-wrapper.sc-phn-car-model-list{padding-top:0.5rem;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:70rem;-ms-flex-pack:center;justify-content:center}.car-model-list-wrapper.sc-phn-car-model-list .car-model.sc-phn-car-model-list{margin-right:2.25rem}.car-model-list-wrapper.sc-phn-car-model-list .car-model.sc-phn-car-model-list:last-child{margin-right:0}.car-model-list-wrapper.car-models-count-5.sc-phn-car-model-list,.car-model-list-wrapper.car-models-count-6.sc-phn-car-model-list{width:52.5rem}.car-model-list-wrapper.car-models-count-5.sc-phn-car-model-list .car-model.sc-phn-car-model-list:nth-child(3),.car-model-list-wrapper.car-models-count-6.sc-phn-car-model-list .car-model.sc-phn-car-model-list:nth-child(3){margin-right:0}}@media (min-width: 1760px){.car-model-list-wrapper.sc-phn-car-model-list{padding-top:1.5rem;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;width:83rem;-ms-flex-pack:center;justify-content:center}.car-model-list-wrapper.sc-phn-car-model-list .car-model.sc-phn-car-model-list{margin-right:3rem}.car-model-list-wrapper.sc-phn-car-model-list .car-model.sc-phn-car-model-list:last-child{margin-right:0}.car-model-list-wrapper.car-models-count-5.sc-phn-car-model-list,.car-model-list-wrapper.car-models-count-6.sc-phn-car-model-list{width:64.0625rem}.car-model-list-wrapper.car-models-count-5.sc-phn-car-model-list .car-model.sc-phn-car-model-list:nth-child(3),.car-model-list-wrapper.car-models-count-6.sc-phn-car-model-list .car-model.sc-phn-car-model-list:nth-child(3){margin-right:0}}";
var CarModelList = /** @class */ (function () {
    function CarModelList(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.series = EMPTY_SERIES;
    }
    CarModelList.prototype.sendModelClickAnalyticsEvent = function (model) {
        var analyticsSetup = {
            applicationId: analyticsSetupStore.get('applicationId'),
            locale: analyticsSetupStore.get('locale'),
            window: analyticsSetupStore.get('window'),
            environment: analyticsSetupStore.get('environment')
        };
        var modelClickEvent = new ModelClickEvent(analyticsSetup, this.series.Name, model);
        var pagData = (window['pagData'] = window['pagData'] || []);
        pagData.push(modelClickEvent.event());
    };
    CarModelList.prototype.render = function () {
        var _this_1 = this;
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "car-model-list" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'car-model-list-wrapper car-models-count-' + this.series.Models.length }, this.series.Models.map(function (model, index) { return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'car-model car-model-' + index }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-car-model", { text: model.Name, image: model.Image, link: model.Link, onClick: function () { return _this_1.sendModelClickAnalyticsEvent(model); } }))); }))));
    };
    return CarModelList;
}());
CarModelList.style = carModelListCss;
/* istanbul ignore file */
var getSrcPath = function (image) {
    var path = Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["c"])(config(navContentStore.get('env')).ASSETS_URL + "/series-assets");
    var imageFileEnding = 'jpg';
    if (window.matchMedia('(min-width: 1760px)').matches) {
        return path + "/1920/" + image + "." + imageFileEnding + ", " + path + "/1920/" + image + "@2x." + imageFileEnding + " 2x";
    }
    else if (window.matchMedia('(min-width: 1300px)').matches) {
        return path + "/1366/" + image + "." + imageFileEnding + ", " + path + "/1366/" + image + "@2x." + imageFileEnding + " 2x";
    }
    else if (window.matchMedia('(min-width: 1000px)').matches) {
        return path + "/1024/" + image + "." + imageFileEnding + ", " + path + "/1024/" + image + "@2x." + imageFileEnding + " 2x";
    }
    else if (window.matchMedia('(min-width: 760px)').matches) {
        return path + "/768/" + image + "." + imageFileEnding + ", " + path + "/768/" + image + "@2x." + imageFileEnding + " 2x";
    }
    else if (window.matchMedia('(min-width: 375px)').matches) {
        return path + "/375/" + image + "." + imageFileEnding + ", " + path + "/375/" + image + "@2x." + imageFileEnding + " 2x";
    }
    else if (window.matchMedia('(min-width: 0)').matches) {
        return path + "/320/" + image + "." + imageFileEnding + ", " + path + "/320/" + image + "@2x." + imageFileEnding + " 2x";
    }
    return '';
};
var carSeriesCss = ".car-series.sc-phn-car-series-h{text-align:center;text-decoration:none;color:#000;display:block}.car-series.sc-phn-car-series-h:hover{cursor:pointer;color:#d5001c}@media (min-width: 0) and (max-width: 759px){.car-series.sc-phn-car-series-h{padding-bottom:0.5625rem}}@media (min-width: 760px) and (max-width: 999px){.car-series.sc-phn-car-series-h{padding-bottom:0.625rem}}@media (min-width: 1000px) and (max-width: 1299px){.car-series.sc-phn-car-series-h{padding-bottom:0.25rem}.car-series.sc-phn-car-series-h:focus{outline-width:2px;outline-style:solid;outline-offset:1px;outline-color:#00d5b9;outline-offset:-2px}}@media (min-width: 1300px) and (max-width: 1759px){.car-series.sc-phn-car-series-h{height:5.5625rem;min-width:5.5625rem}.car-series.sc-phn-car-series-h:hover{color:inherit;cursor:default}}@media (min-width: 1760px){.car-series.sc-phn-car-series-h{height:100px}.car-series.sc-phn-car-series-h:hover{color:inherit;cursor:default}}.car-series.sc-phn-car-series-h .car-series-text.sc-phn-car-series{padding:0;margin:0;line-height:1.5rem;font-size:1rem}@media (min-width: 0) and (max-width: 759px){.car-series.sc-phn-car-series-h .car-series-text.sc-phn-car-series{margin:-1.125rem 0 0 0;padding-right:0.1875rem}}@media (min-width: 760px) and (max-width: 999px){.car-series.sc-phn-car-series-h .car-series-text.sc-phn-car-series{margin:-2.3125rem 0 0 0;padding-right:0.0625rem;font-size:1.125rem}}@media (min-width: 1000px) and (max-width: 1299px){.car-series.sc-phn-car-series-h .car-series-text.sc-phn-car-series{margin:-2.0625rem 0 0 0;padding-right:0.125rem;font-size:1rem}}@media (min-width: 1300px) and (max-width: 1759px){.car-series.sc-phn-car-series-h .car-series-text.sc-phn-car-series{margin-top:-1.0625rem;font-size:0.875rem;padding-bottom:1.25rem}}@media (min-width: 1760px){.car-series.sc-phn-car-series-h .car-series-text.sc-phn-car-series{margin-top:-1.1875rem;padding-bottom:1.4375rem}}.car-series-skeleton.sc-phn-car-series{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background:#c9cacb;pointer-events:none;display:none}@media (min-width: 1300px){.car-series-skeleton.sc-phn-car-series{display:block;margin-top:1rem;height:2.6875rem;width:5.5625rem}}@media (min-width: 1760px){.car-series-skeleton.sc-phn-car-series{margin-top:1.1875rem;height:2.6875rem;width:6.5625rem}}";
var CarSeries = /** @class */ (function () {
    function CarSeries(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.imgLarge = new Image();
        this.isResized = false;
        this.hideImage = function (image) {
            image.style.display = 'none';
        };
        this.setImageDefaultDisplay = function (image) {
            image.style.display = '';
        };
    }
    CarSeries.prototype.prependImage = function () {
        var _this_1 = this;
        this.imgLarge.srcset = getSrcPath(this.image);
        this.imgLarge.alt = this.text;
        this.el.prepend(this.imgLarge);
        window.addEventListener('resize', function () {
            _this_1.isResized = true;
            _this_1.imgLarge.srcset = getSrcPath(_this_1.image);
        });
    };
    CarSeries.prototype.componentWillLoad = function () {
        var _this_1 = this;
        if (window.innerWidth <= MAX_M_VIEWPORT_WIDTH) {
            navStateStore.set('imagesLoaded', true);
            this.setImageDefaultDisplay(this.imgLarge);
            this.prependImage();
        }
        else {
            navStateStore.set('imagesRegistered', navStateStore.get('imagesRegistered') + 1);
            this.imgLarge.onload = function () {
                if (!_this_1.isResized)
                    navStateStore.set('imagesRetrieved', navStateStore.get('imagesRetrieved') + 1);
            };
            this.hideImage(this.imgLarge);
            this.prependImage();
        }
    };
    CarSeries.prototype.componentDidUpdate = function () {
        if (navStateStore.get('navigationLoaded')) {
            if (window.innerWidth > MAX_M_VIEWPORT_WIDTH) {
                this.setImageDefaultDisplay(this.imgLarge);
            }
        }
    };
    CarSeries.prototype.render = function () {
        var hiddenStyle = { display: 'none' };
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: "car-series" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p", { style: navStateStore.get('navigationLoaded') ? {} : hiddenStyle, class: "car-series-text", "aria-label": "Porsche Model Series " + this.text }, this.text), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { style: navStateStore.get('navigationLoaded') ? hiddenStyle : {}, class: "car-series-skeleton" })));
    };
    Object.defineProperty(CarSeries, "assetsDirs", {
        get: function () { return ["series-assets"]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CarSeries.prototype, "el", {
        get: function () { return Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
        enumerable: false,
        configurable: true
    });
    return CarSeries;
}());
CarSeries.style = carSeriesCss;
var carSeriesListCss = ".sc-phn-car-series-list-h{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:1.75rem}@media (min-width: 760px) and (max-width: 1299px){.sc-phn-car-series-list-h{margin-top:1.875rem}}@media (min-width: 1300px){.sc-phn-car-series-list-h{-ms-flex-wrap:nowrap;flex-wrap:nowrap;margin-top:0}}@media (min-width: 1300px) and (max-width: 1759px){.sc-phn-car-series-list-h{min-width:657px;margin-left:0.5625rem}}@media (min-width: 1760px){.sc-phn-car-series-list-h{min-width:809px;margin-left:1.25rem}}@media (min-width: 1300px) and (max-width: 1759px){.sc-phn-car-series-list-h .car-series-fly-out-overlay.sc-phn-car-series-list{padding:0 0.3125rem}.sc-phn-car-series-list-h .car-series-fly-out-overlay.sc-phn-car-series-list:first-of-type{padding-left:0.9375rem}.sc-phn-car-series-list-h .car-series-fly-out-overlay.sc-phn-car-series-list:last-of-type{padding-right:0.9375rem}}@media (min-width: 1760px){.sc-phn-car-series-list-h .car-series-fly-out-overlay.sc-phn-car-series-list{padding:0 0.5625rem}.sc-phn-car-series-list-h .car-series-fly-out-overlay.sc-phn-car-series-list:first-of-type{padding-left:1.25rem}.sc-phn-car-series-list-h .car-series-fly-out-overlay.sc-phn-car-series-list:last-of-type{padding-right:1.25rem}}";
var CarSeriesList = /** @class */ (function () {
    function CarSeriesList(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    CarSeriesList.prototype.render = function () {
        var _this_1 = this;
        var carSeries = navContentStore.get('seriesList');
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: "list" }, carSeries.map(function (series) { return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-mega-fly-out-overlay", { class: "car-series-fly-out-overlay overlay-trigger " + series.PhraseId, showOverlayHandler: _this_1.showOverlayHandler, hideOverlayHandler: _this_1.hideOverlayHandler, keyboardShowOverlayHandler: _this_1.keyboardShowOverlayHandler, keyboardHideOverlayHandler: _this_1.keyboardHideOverlayHandler, screenReaderId: "car-series-mega-menu-" + series.Name, role: "listitem" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-car-series", { slot: "button", text: series.Name, image: series.Image }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-car-series-model-overview", { slot: "content", series: series }))); })));
    };
    return CarSeriesList;
}());
CarSeriesList.style = carSeriesListCss;
var ModelRangeOverlayLoadEvent = /** @class */ (function (_super_1) {
    __extends(ModelRangeOverlayLoadEvent, _super_1);
    function ModelRangeOverlayLoadEvent(analyticsSetup, modelRangeName, series) {
        var _this_1 = _super_1.call(this, analyticsSetup, modelRangeName) || this;
        _this_1.context.eventAction = 'PAGHomeNav_ModelRangeOverlay_Load';
        _this_1.populateComponentClick(series);
        return _this_1;
    }
    ModelRangeOverlayLoadEvent.prototype.populateComponentClick = function (series) {
        this.componentClick.clickElementId = series.PhraseId;
        this.componentClick.clickElementName = series.Name;
        this.componentClick.clickElementType = 'button';
    };
    ModelRangeOverlayLoadEvent.prototype.event = function () {
        var car = this.car;
        var componentClick = this.componentClick;
        return Object.assign(Object.assign({}, _super_1.prototype.event.call(this)), { car: car,
            componentClick: componentClick });
    };
    return ModelRangeOverlayLoadEvent;
}(ModelAnalyticsEvent));
var CarSeriesModelOverview = /** @class */ (function () {
    function class_1(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.series = EMPTY_SERIES;
    }
    class_1.prototype.triggerAnalyticsEvent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pagData, analyticsSetup, analyticsEvent;
            return __generator(this, function (_b) {
                pagData = (window['pagData'] = window['pagData'] || []);
                analyticsSetup = {
                    applicationId: analyticsSetupStore.get('applicationId'),
                    locale: analyticsSetupStore.get('locale'),
                    window: analyticsSetupStore.get('window'),
                    environment: analyticsSetupStore.get('environment')
                };
                analyticsEvent = new ModelRangeOverlayLoadEvent(analyticsSetup, this.series.Name, this.series);
                pagData.push(analyticsEvent.event());
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "car-series-model-overview" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-car-meta-functionalities", { name: this.series.Name, items: this.series.Meta, modelMetaItems: this.series.ModelMeta }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-car-model-list", { series: this.series }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-car-further-links", { items: this.series.Further })));
    };
    return class_1;
}());
var CrestClickEvent = /** @class */ (function (_super_1) {
    __extends(CrestClickEvent, _super_1);
    function CrestClickEvent(analyticsSetup) {
        var _this_1 = _super_1.call(this, analyticsSetup) || this;
        _this_1.context.eventAction = 'PAGHomeNav_Crest_Click';
        return _this_1;
    }
    CrestClickEvent.prototype.event = function () {
        return _super_1.prototype.event.call(this);
    };
    return CrestClickEvent;
}(AnalyticsEvent));
var crestCss = ".sc-phn-crest-h .crest.sc-phn-crest{display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;border:0.0625rem solid #c9cacb;border-top:0;height:4.8125rem;padding:0.3125rem 0.1875rem 0.5625rem 0.1875rem;margin-left:calc(calc(100vw - 7vw * 2) - calc(calc(100vw - 7vw * 2) + 0.625rem + 0.1875rem + 0.0625rem));margin-bottom:-0.75rem}.sc-phn-crest-h .crest.sc-phn-crest:focus{outline-width:2px;outline-style:solid;outline-offset:1px;outline-color:#00d5b9}@media (min-width: 760px){.sc-phn-crest-h .crest.sc-phn-crest{height:5.25rem;padding:0.5625rem 0.25rem 0.8125rem 0.25rem;margin-left:calc(calc(100vw - 7vw * 2) - calc(calc(100vw - 7vw * 2) + 0.625rem + 0.25rem + 0.0625rem))}}@media (min-width: 1000px){.sc-phn-crest-h .crest.sc-phn-crest{padding:0.375rem 0.3125rem 0.4375rem 0.3125rem;margin-left:calc(calc(100vw - 7vw * 2) - calc(calc(100vw - 7vw * 2) + 0.75rem + 0.3125rem + 0.0625rem))}}@media (min-width: 1300px){.sc-phn-crest-h .crest.sc-phn-crest{width:8.3125rem;height:8.3125rem;padding:1.75rem 0.25rem 1.875rem 0.25rem;margin-bottom:-0.9375rem;margin-left:calc(calc(100vw - 7vw * 2) - calc(calc(100vw - 7vw * 2) + 0.75rem + 0.25rem + 0.0625rem))}}@media (min-width: 1760px){.sc-phn-crest-h .crest.sc-phn-crest{width:8.5625rem;height:8.5625rem;padding:1.8125rem 0.375rem 2.0625rem 0.375rem;margin-left:calc(calc(100vw - 7vw * 2) - calc(calc(100vw - 7vw * 2) + 0.75rem + 0.375rem + 0.0625rem))}}.sc-phn-crest-h .marque-bone.sc-phn-crest{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;-webkit-box-sizing:border-box;box-sizing:border-box;background-color:#fff;border:0.0625rem solid #c9cacb;border-top:0;width:6.75rem;height:4.75rem;padding:0.875rem 0 1.1875rem 0;margin-left:calc(calc(100vw - 7vw * 2) - calc(calc(100vw - 7vw * 2) + 0.625rem + 0.1875rem + 0.0625rem));margin-bottom:-0.75rem}@media (min-width: 760px){.sc-phn-crest-h .marque-bone.sc-phn-crest{width:6.875rem;height:5.1875rem;padding:1.125rem 0 1.375rem 0;margin-left:calc(calc(100vw - 7vw * 2) - calc(calc(100vw - 7vw * 2) + 0.625rem + 0.25rem + 0.0625rem))}}@media (min-width: 1000px){.sc-phn-crest-h .marque-bone.sc-phn-crest{width:8.3125rem;height:5.4375rem;margin-left:calc(calc(100vw - 7vw * 2) - calc(calc(100vw - 7vw * 2) + 0.75rem + 0.3125rem + 0.0625rem));padding:1.1875rem 0 1.125rem 0}}@media (min-width: 1300px){.sc-phn-crest-h .marque-bone.sc-phn-crest{width:8.25rem;height:8.3125rem;padding:2.46875rem 0 2.59375rem 0;margin-bottom:-0.9375rem;margin-left:calc(calc(100vw - 7vw * 2) - calc(calc(100vw - 7vw * 2) + 0.75rem + 0.25rem + 0.0625rem))}}@media (min-width: 1760px){.sc-phn-crest-h .marque-bone.sc-phn-crest{width:8.5625rem;height:8.5rem;padding:2.5rem 0 2.75rem 0;margin-left:calc(calc(100vw - 7vw * 2) - calc(calc(100vw - 7vw * 2) + 0.75rem + 0.375rem + 0.0625rem))}}.sc-phn-crest-h .marque-bone.sc-phn-crest .crest-bone.sc-phn-crest{width:1.5rem;height:1.9375rem;background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='24px' height='31px' viewBox='0 0 29 37' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3Ecrest-path-pixel-perfect-3%3C/title%3E%3Cg id='Design-Focus' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='832-skeleton-hn-1366' transform='translate(-130.000000, -39.000000)' fill='%23C9CACB' fill-rule='nonzero'%3E%3Cg id='Crest-bones' transform='translate(78.000000, 0.000000)'%3E%3Cpath d='M80.8612951,41.6891698 C79.3593022,41.0929534 77.8195513,40.5958533 76.2520235,40.2010916 C74.092052,39.6781633 71.8946453,39.3227949 69.6795438,39.1381787 C68.6125828,39.0425165 67.6096394,39.0106291 66.4786608,39 L66.4679912,39 C65.4010302,39 64.3340692,39 63.2671082,39.1381787 C61.0520067,39.3227949 58.8545999,39.6781633 56.6946284,40.2010916 C55.1285058,40.5930516 53.5918758,41.093847 52.0960265,41.6997989 L52,41.6997989 C52,41.6997989 52.1813834,52.8710141 52.3200883,58.3981614 C52.3624958,60.0288438 52.6613178,61.6428163 53.2056659,63.1812698 C53.83596,64.927843 54.6779771,66.5912102 55.7130243,68.1344441 C56.7974563,69.7321996 58.1093136,71.164397 59.6074319,72.3860959 C60.1877267,72.8817079 60.8047619,73.3329574 61.4532745,73.7359954 C62.4748439,74.3534515 63.5453697,74.8866836 64.6541575,75.3303648 C65.0062546,75.4791727 65.3263429,75.6279805 65.6144224,75.7236426 C65.9077386,75.8428333 66.2112826,75.9353298 66.5213392,76 C66.8313958,75.9353298 67.1349399,75.8428333 67.4282561,75.7236426 C67.7163355,75.6279805 68.0364238,75.4791727 68.3991906,75.3303648 C69.4899033,74.8845355 70.542531,74.3513317 71.5467255,73.7359954 C72.1928274,73.3294237 72.8096114,72.8783579 73.3925681,72.3860959 C74.8933275,71.167176 76.2055628,69.7345659 77.2869757,68.1344441 C78.3220229,66.5912102 79.16404,64.927843 79.7943341,63.1812698 C80.3386822,61.6428163 80.6375042,60.0288438 80.6799117,58.3981614 C80.8186166,52.8710141 81,41.6997989 81,41.6997989 L80.8612951,41.6891698 Z' id='crest-path-pixel-perfect-3'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");background-repeat:no-repeat;background-position:center}@media (min-width: 1000px){.sc-phn-crest-h .marque-bone.sc-phn-crest .crest-bone.sc-phn-crest{width:1.8125rem;height:2.3125rem;background-image:url(\"data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='29px' height='37px' viewBox='0 0 29 37' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3Ecrest-path-pixel-perfect-3%3C/title%3E%3Cg id='Design-Focus' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='832-skeleton-hn-1366' transform='translate(-130.000000, -39.000000)' fill='%23C9CACB' fill-rule='nonzero'%3E%3Cg id='Crest-bones' transform='translate(78.000000, 0.000000)'%3E%3Cpath d='M80.8612951,41.6891698 C79.3593022,41.0929534 77.8195513,40.5958533 76.2520235,40.2010916 C74.092052,39.6781633 71.8946453,39.3227949 69.6795438,39.1381787 C68.6125828,39.0425165 67.6096394,39.0106291 66.4786608,39 L66.4679912,39 C65.4010302,39 64.3340692,39 63.2671082,39.1381787 C61.0520067,39.3227949 58.8545999,39.6781633 56.6946284,40.2010916 C55.1285058,40.5930516 53.5918758,41.093847 52.0960265,41.6997989 L52,41.6997989 C52,41.6997989 52.1813834,52.8710141 52.3200883,58.3981614 C52.3624958,60.0288438 52.6613178,61.6428163 53.2056659,63.1812698 C53.83596,64.927843 54.6779771,66.5912102 55.7130243,68.1344441 C56.7974563,69.7321996 58.1093136,71.164397 59.6074319,72.3860959 C60.1877267,72.8817079 60.8047619,73.3329574 61.4532745,73.7359954 C62.4748439,74.3534515 63.5453697,74.8866836 64.6541575,75.3303648 C65.0062546,75.4791727 65.3263429,75.6279805 65.6144224,75.7236426 C65.9077386,75.8428333 66.2112826,75.9353298 66.5213392,76 C66.8313958,75.9353298 67.1349399,75.8428333 67.4282561,75.7236426 C67.7163355,75.6279805 68.0364238,75.4791727 68.3991906,75.3303648 C69.4899033,74.8845355 70.542531,74.3513317 71.5467255,73.7359954 C72.1928274,73.3294237 72.8096114,72.8783579 73.3925681,72.3860959 C74.8933275,71.167176 76.2055628,69.7345659 77.2869757,68.1344441 C78.3220229,66.5912102 79.16404,64.927843 79.7943341,63.1812698 C80.3386822,61.6428163 80.6375042,60.0288438 80.6799117,58.3981614 C80.8186166,52.8710141 81,41.6997989 81,41.6997989 L80.8612951,41.6891698 Z' id='crest-path-pixel-perfect-3'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")}}.sc-phn-crest-h .marque-bone.sc-phn-crest .label-bone.sc-phn-crest{width:5rem;height:0.4375rem;background-color:#c9cacb}@media (min-width: 1000px){.sc-phn-crest-h .marque-bone.sc-phn-crest .label-bone.sc-phn-crest{width:6.1875rem;height:0.5rem}}";
var Crest = /** @class */ (function () {
    function Crest(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    Crest.prototype.getCrestLink = function () {
        var crestItem = navContentStore.get('menu').find(function (m) { return m.PhraseId === CREST_PHRASE_ID; });
        return crestItem ? (crestItem.Link ? crestItem.Link : '/') : '/';
    };
    Crest.prototype.sendCrestClickAnalyticsEvent = function () {
        var analyticsSetup = {
            applicationId: analyticsSetupStore.get('applicationId'),
            locale: analyticsSetupStore.get('locale'),
            window: analyticsSetupStore.get('window'),
            environment: analyticsSetupStore.get('environment')
        };
        var crestClickEvent = new CrestClickEvent(analyticsSetup);
        var pagData = (window['pagData'] = window['pagData'] || []);
        pagData.push(crestClickEvent.event());
    };
    Crest.prototype.contentLoaded = function () {
        if (window.matchMedia('(min-width: 1300px)').matches) {
            return navStateStore.get('navigationLoaded');
        }
        else {
            return navStateStore.get('crestLoaded');
        }
    };
    Crest.prototype.extractImageFromMarque = function () {
        return this.el.querySelector('.crest p-marque').shadowRoot.querySelector('picture img');
    };
    Crest.prototype.componentDidLoad = function () {
        this.extractImageFromMarque().addEventListener('load', function () {
            navStateStore.set('crestLoaded', true);
        });
    };
    Crest.prototype.render = function () {
        var _this_1 = this;
        var hiddenStyle = { display: 'none' };
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { class: "crest", style: this.contentLoaded() ? {} : hiddenStyle, onClick: function () { return _this_1.sendCrestClickAnalyticsEvent(); }, href: this.getCrestLink() }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-marque", { class: "marque" })), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "marque-bone", style: this.contentLoaded() ? hiddenStyle : {} }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "crest-bone" }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "label-bone" }))));
    };
    Object.defineProperty(Crest.prototype, "el", {
        get: function () { return Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
        enumerable: false,
        configurable: true
    });
    return Crest;
}());
Crest.style = crestCss;
var dealerSearchCss = ".dealer-search.sc-phn-dealer-search-h .dealer-search-link.sc-phn-dealer-search{border-bottom:1px solid #c9cacb;padding:0.875rem 0 0.875rem 0;width:100%}@media (min-width: 760px) and (max-width: 999px){.dealer-search.sc-phn-dealer-search-h .dealer-search-link.sc-phn-dealer-search{padding:1.125rem 0 1.125rem 0}}@media (min-width: 1300px){.dealer-search.sc-phn-dealer-search-h .dealer-search-link.sc-phn-dealer-search{border-bottom:0;padding:0}}@media (min-width: 1300px){.dealer-search.sc-phn-dealer-search-h .dealer-search-skeleton.sc-phn-dealer-search{width:6.375rem;height:0.875rem;background-color:#c9cacb;margin-top:0.125rem;width:8rem}}";
var DealerSearch = /** @class */ (function () {
    function DealerSearch(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.dealerSearchText = '';
        this.dealerSearchLink = '';
    }
    DealerSearch.prototype.render = function () {
        var _this_1 = this;
        var hiddenStyle = { display: 'none' };
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: "dealer-search" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-link-pure", { style: navStateStore.get('navigationLoaded') ? {} : hiddenStyle, href: this.dealerSearchLink, size: "inherit", icon: "pin", class: 'dealer-search-link', onClick: function () {
                var linkItem = {
                    PhraseId: DEALER_SEARCH_PHRASE_ID,
                    Text: _this_1.dealerSearchText,
                    Link: _this_1.dealerSearchLink
                };
                _this_1.sendMetaFunctionClickAnalyticsEvent(linkItem);
            } }, this.dealerSearchText), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "dealer-search-skeleton", style: navStateStore.get('navigationLoaded') ? hiddenStyle : {} })));
    };
    Object.defineProperty(DealerSearch.prototype, "el", {
        get: function () { return Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
        enumerable: false,
        configurable: true
    });
    return DealerSearch;
}());
DealerSearch.style = dealerSearchCss;
var desktopShopAndMoreItemCss = ".desktop-shop-and-more-item.sc-phn-desktop-shop-and-more-item-h{display:-ms-flexbox;display:flex;color:#000;font-size:1rem;border-bottom:0;padding:1.3125rem 0 2.75rem 0;white-space:nowrap}.desktop-shop-and-more-item.sc-phn-desktop-shop-and-more-item-h:hover{cursor:default;color:inherit}@media (min-width: 1760px){.desktop-shop-and-more-item.sc-phn-desktop-shop-and-more-item-h{padding:1.6875rem 0 2.8125rem 0;font-size:1.25rem}}.desktop-shop-and-more-item-skeleton.sc-phn-desktop-shop-and-more-item{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-ms-flexbox;display:flex;background:#c9cacb;-ms-flex-align:center;align-items:center;height:0.875rem}@media (min-width: 1300px){.desktop-shop-and-more-item-skeleton.sc-phn-desktop-shop-and-more-item{width:2.375rem;margin-top:0.375rem}}@media (min-width: 1760px){.desktop-shop-and-more-item-skeleton.sc-phn-desktop-shop-and-more-item{width:3.125rem;margin-top:0.1875rem}}";
var DesktopShopAndMoreItem = /** @class */ (function () {
    function DesktopShopAndMoreItem(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    DesktopShopAndMoreItem.prototype.render = function () {
        var hiddenStyle = { display: 'none' };
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { style: navStateStore.get('navigationLoaded') ? {} : hiddenStyle, class: "desktop-shop-and-more-item-text", color: "inherit", size: "inherit", tag: "div" }, this.itemText), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "desktop-shop-and-more-item-skeleton", style: navStateStore.get('navigationLoaded') ? hiddenStyle : {} })));
    };
    return DesktopShopAndMoreItem;
}());
DesktopShopAndMoreItem.style = desktopShopAndMoreItemCss;
var DrawerCarSeriesModelOverview = /** @class */ (function () {
    function DrawerCarSeriesModelOverview(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.series = EMPTY_SERIES;
    }
    DrawerCarSeriesModelOverview.prototype.render = function () {
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "drawer-car-series-model-overview" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "drawer-container drawer-level-2-item-scroll" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-headline", { text: this.series.Name }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-car-meta-functionalities", { name: this.series.Name, items: this.series.Meta, modelMetaItems: this.series.ModelMeta }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-car-model-list", { class: "car-model-list", series: this.series }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-car-further-links", { items: this.series.Further }))));
    };
    return DrawerCarSeriesModelOverview;
}());
var drawerShopsAndMoreCss = ".drawer-shops-and-more.sc-phn-drawer-shops-and-more{padding-bottom:3.125rem}";
var DrawerShopsAndMore = /** @class */ (function () {
    function DrawerShopsAndMore(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.item = EMPTY_ITEM;
    }
    DrawerShopsAndMore.prototype.showDrawer = function (item, index) {
        var phnDrawerShopsAndMore = {
            backButton: this.item.Text,
            content: (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-drawer-shops-and-more", { headline: item.Text, item: item, class: 'shops-and-more-drawer-level-2 drawer-level-2 drawer-level-2-' + index, slot: "content" }))
        };
        if (!item.Link && item.Items) {
            navStateStore.set('drawerContentStack', __spreadArrays(navStateStore.get('drawerContentStack'), [phnDrawerShopsAndMore]));
        }
    };
    DrawerShopsAndMore.prototype.render = function () {
        var _this_1 = this;
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "drawer-shops-and-more" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "drawer-container" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-headline", { text: this.headline, class: "drawer-headline" }), this.item.Items &&
            this.item.Items.map(function (item, index) {
                return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-list-item", { item: item, onClick: function () { return _this_1.showDrawer(item, index); }, class: 'drawer-shops-and-more-item drawer-shops-and-more-item-' + index })));
            }))));
    };
    return DrawerShopsAndMore;
}());
DrawerShopsAndMore.style = drawerShopsAndMoreCss;
function logRequest(env, level, id, data) {
    var log = JSON.stringify({
        level: level,
        env: env,
        pageUrl: window.location.origin,
        message: { id: id, data: data }
    });
    if (env === 'local') {
        console[level](log);
    }
    else {
        fetch(config(env).LOGGING_ENDPOINT, {
            method: 'POST',
            body: log,
            mode: 'no-cors'
        });
    }
}
var infoLogRequest = function (id, data, env) {
    logRequest(env, 'info', id, data);
};
var debugLogRequest = function (id, data, env) {
    logRequest(env, 'debug', id, data);
};
var errorLogRequest = function (id, data, env) {
    logRequest(env, 'error', id, data);
};
var fetchContent = function (env) { return __awaiter(void 0, void 0, void 0, function () {
    var loadData, content;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                loadData = function () { return __awaiter(void 0, void 0, void 0, function () {
                    var data, e_1;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                _b.trys.push([0, 2, , 3]);
                                return [4 /*yield*/, fetch(config(env).CONTENT_URL, {
                                        headers: {
                                            'Cache-Control': 'no-cache'
                                        }
                                    })];
                            case 1:
                                data = _b.sent();
                                if (!data.ok) {
                                    throw new Error(data.status + " " + data.statusText);
                                }
                                return [2 /*return*/, data.json()];
                            case 2:
                                e_1 = _b.sent();
                                errorLogRequest('content', "Failed to fetch content with error: " + e_1, env);
                                return [2 /*return*/, DEFAULT_EMPTY_CONTENT_RESPONSE];
                            case 3: return [2 /*return*/];
                        }
                    });
                }); };
                return [4 /*yield*/, Promise.all([loadData()])];
            case 1:
                content = (_b.sent())[0];
                return [2 /*return*/, content];
        }
    });
}); };
var getContentForLocale = function (locale, content, env) {
    if (content === DEFAULT_EMPTY_CONTENT_RESPONSE) {
        var logData = "Received empty content. Setting DEFAULT_EMPTY_CONTENT as fallback.";
        infoLogRequest('content', logData, env);
        return DEFAULT_EMPTY_CONTENT;
    }
    var availableLocales = Object.keys(content);
    if (availableLocales.includes(locale.toString())) {
        return content[locale.toString()];
    }
    else {
        var logData = "No locale or invalid locale provided. Setting " + DEFAULT_LOCALE.toString() + " as fallback.";
        infoLogRequest('content', logData, env);
        return content[DEFAULT_LOCALE];
    }
};
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
// getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
// find the complete implementation of crypto (msCrypto) on IE11.
var getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);
var rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
    return getRandomValues(rnds8);
}
var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function validate(uuid) {
    return typeof uuid === 'string' && REGEX.test(uuid);
}
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).substr(1));
}
function stringify(arr) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!validate(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
function v4(options, buf, offset) {
    options = options || {};
    var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for (var i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return stringify(rnds);
}
var deriveLoggedInStatusFromUserData = function (userData) {
    var status;
    if (userData.firstName) {
        status = userData.firstName;
        if (userData.middleName) {
            status += " " + userData.middleName;
            if (userData.lastName) {
                status += " " + userData.lastName;
            }
        }
        else {
            if (userData.lastName) {
                status += " " + userData.lastName;
            }
        }
    }
    else {
        if (userData.middleName) {
            status = userData.middleName;
            if (userData.lastName) {
                status += " " + userData.lastName;
            }
        }
        else {
            if (userData.lastName) {
                status = userData.lastName;
            }
        }
    }
    return status ? status : LOGGED_IN_USER_NO_NAME_STATUS;
};
var getLoggedInStatus = function (accessToken, locale, env) { return __awaiter(void 0, void 0, void 0, function () {
    var userProfile, userLoggedInStatus, configuration, init, e_2, logData, userData;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 2, , 3]);
                configuration = config(env);
                init = {
                    method: 'GET',
                    headers: {
                        'Accept-Language': "" + locale.toHeaderString(),
                        'x-trace-id': v4(),
                        apikey: configuration.CLIENT_ID,
                        Authorization: "Bearer " + accessToken,
                        Accept: 'application/json'
                    }
                };
                return [4 /*yield*/, fetch(configuration.PROFILE_API_URL + "?country=" + locale.country, init)];
            case 1:
                userProfile = _b.sent();
                return [3 /*break*/, 3];
            case 2:
                e_2 = _b.sent();
                logData = "Exception occurred while fetching user info: " + JSON.stringify(e_2.message);
                errorLogRequest('user_profile', logData, env);
                userLoggedInStatus = LOGGED_IN_USER_NO_NAME_STATUS;
                return [3 /*break*/, 3];
            case 3:
                if (!!userLoggedInStatus) return [3 /*break*/, 6];
                if (!(userProfile.status === 200)) return [3 /*break*/, 5];
                return [4 /*yield*/, userProfile.json()];
            case 4:
                userData = _b.sent();
                userLoggedInStatus = deriveLoggedInStatusFromUserData(userData);
                return [3 /*break*/, 6];
            case 5:
                errorLogRequest('user_profile', "Error occurred: " + userProfile.status + " " + userProfile.statusText, env);
                userLoggedInStatus = undefined;
                _b.label = 6;
            case 6: return [2 /*return*/, userLoggedInStatus];
        }
    });
}); };
var getUnreadMessagesCount = function (accessToken, env
//currentUnreadMessagesCount = 0
) { return __awaiter(void 0, void 0, void 0, function () {
    var unreadMessagesCount, unreadMessagesCountResponse, configuration, init, unreadMessagesCountPayload, e_3, logData;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                unreadMessagesCount = 0;
                _b.label = 1;
            case 1:
                _b.trys.push([1, 6, , 7]);
                configuration = config(env);
                init = {
                    method: 'GET',
                    headers: {
                        'x-trace-id': v4(),
                        apikey: configuration.CLIENT_ID,
                        Authorization: "Bearer " + accessToken,
                        Accept: 'application/json'
                    }
                };
                return [4 /*yield*/, fetch(configuration.UNREAD_MESSAGES_COUNT_API_URL, init)];
            case 2:
                unreadMessagesCountResponse = _b.sent();
                if (!(unreadMessagesCountResponse.status === 200)) return [3 /*break*/, 4];
                return [4 /*yield*/, unreadMessagesCountResponse.json()];
            case 3:
                unreadMessagesCountPayload = _b.sent();
                if (unreadMessagesCountPayload.data &&
                    unreadMessagesCountPayload.data.unreadCount &&
                    typeof unreadMessagesCountPayload.data.unreadCount === 'number') {
                    unreadMessagesCount = unreadMessagesCountPayload.data.unreadCount;
                }
                return [3 /*break*/, 5];
            case 4:
                errorLogRequest('unread_messages_count', "Error occurred: " + unreadMessagesCountResponse.status + " " + unreadMessagesCountResponse.statusText, env);
                _b.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                e_3 = _b.sent();
                logData = "Exception occurred while fetching unread message count: " + JSON.stringify(e_3.message);
                errorLogRequest('unread_messages_count', logData, env);
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/, unreadMessagesCount];
        }
    });
}); };
var updateLoggedInStatus = function (newToken, localeObject) { return __awaiter(void 0, void 0, void 0, function () {
    var env, userLoggedInStatus;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                env = navContentStore.get('env');
                if (navContentStore.get('loggedInState') !== LOADING_STATUS) {
                    navContentStore.set('loggedInState', LOADING_STATUS);
                }
                return [4 /*yield*/, getLoggedInStatus(newToken, localeObject, env)];
            case 1:
                userLoggedInStatus = _b.sent();
                if (!userLoggedInStatus) {
                    navContentStore.set('loggedInState', LOGGED_OUT_USER_STATUS);
                    return [2 /*return*/, undefined];
                }
                else {
                    navContentStore.set('loggedInState', userLoggedInStatus);
                    debugLogRequest('token_update', 'User data response captured successfully!', env);
                    return [2 /*return*/, true];
                }
                return [2 /*return*/];
        }
    });
}); };
var updateUnreadMessagesCount = function (accessToken) { return __awaiter(void 0, void 0, void 0, function () {
    var env, unreadMessagesCount;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                env = navContentStore.get('env');
                return [4 /*yield*/, getUnreadMessagesCount(accessToken, env)];
            case 1:
                unreadMessagesCount = _b.sent();
                navContentStore.set('unreadMessagesCount', unreadMessagesCount);
                return [2 /*return*/];
        }
    });
}); };
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
function createCommonjsModule(fn, basedir, module) {
    return module = {
        path: basedir,
        exports: {},
        require: function (path, base) {
            return commonjsRequire();
        }
    }, fn(module, module.exports), module.exports;
}
function commonjsRequire() {
    throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}
var errors = createCommonjsModule(function (module, exports) {
    /*
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
     * in compliance with the License. You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software distributed under the
     * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
     * express or implied. See the License for the specific language governing permissions and
     * limitations under the License.
     */
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AppAuthError = void 0;
    /**
     * Represents the AppAuthError type.
     */
    var AppAuthError = /** @class */ (function () {
        function AppAuthError(message, extras) {
            this.message = message;
            this.extras = extras;
        }
        return AppAuthError;
    }());
    exports.AppAuthError = AppAuthError;
});
var xhr = createCommonjsModule(function (module, exports) {
    /*
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
     * in compliance with the License. You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software distributed under the
     * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
     * express or implied. See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b)
                    if (Object.prototype.hasOwnProperty.call(b, p))
                        d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TestRequestor = exports.FetchRequestor = exports.JQueryRequestor = exports.Requestor = void 0;
    /**
     * An class that abstracts away the ability to make an XMLHttpRequest.
     */
    var Requestor = /** @class */ (function () {
        function Requestor() {
        }
        return Requestor;
    }());
    exports.Requestor = Requestor;
    /**
     * Uses $.ajax to makes the Ajax requests.
     */
    var JQueryRequestor = /** @class */ (function (_super) {
        __extends(JQueryRequestor, _super);
        function JQueryRequestor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        JQueryRequestor.prototype.xhr = function (settings) {
            // NOTE: using jquery to make XHR's as whatwg-fetch requires
            // that I target ES6.
            var xhr = $.ajax(settings);
            return new Promise(function (resolve, reject) {
                xhr.then(function (data, textStatus, jqXhr) {
                    resolve(data);
                }, function (jqXhr, textStatus, error) {
                    reject(new errors.AppAuthError(error));
                });
            });
        };
        return JQueryRequestor;
    }(Requestor));
    exports.JQueryRequestor = JQueryRequestor;
    /**
     * Uses fetch API to make Ajax requests
     */
    var FetchRequestor = /** @class */ (function (_super) {
        __extends(FetchRequestor, _super);
        function FetchRequestor() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        FetchRequestor.prototype.xhr = function (settings) {
            if (!settings.url) {
                return Promise.reject(new errors.AppAuthError('A URL must be provided.'));
            }
            var url = new URL(settings.url);
            var requestInit = {};
            requestInit.method = settings.method;
            requestInit.mode = 'cors';
            if (settings.data) {
                if (settings.method && settings.method.toUpperCase() === 'POST') {
                    requestInit.body = settings.data;
                }
                else {
                    var searchParams = new URLSearchParams(settings.data);
                    searchParams.forEach(function (value, key) {
                        url.searchParams.append(key, value);
                    });
                }
            }
            // Set the request headers
            requestInit.headers = {};
            if (settings.headers) {
                for (var i in settings.headers) {
                    if (settings.headers.hasOwnProperty(i)) {
                        requestInit.headers[i] = settings.headers[i];
                    }
                }
            }
            var isJsonDataType = settings.dataType && settings.dataType.toLowerCase() === 'json';
            // Set 'Accept' header value for json requests (Taken from
            // https://github.com/jquery/jquery/blob/e0d941156900a6bff7c098c8ea7290528e468cf8/src/ajax.js#L644
            // )
            if (isJsonDataType) {
                requestInit.headers['Accept'] = 'application/json, text/javascript, */*; q=0.01';
            }
            return fetch(url.toString(), requestInit).then(function (response) {
                if (response.status >= 200 && response.status < 300) {
                    var contentType = response.headers.get('content-type');
                    if (isJsonDataType || (contentType && contentType.indexOf('application/json') !== -1)) {
                        return response.json();
                    }
                    else {
                        return response.text();
                    }
                }
                else {
                    return Promise.reject(new errors.AppAuthError(response.status.toString(), response.statusText));
                }
            });
        };
        return FetchRequestor;
    }(Requestor));
    exports.FetchRequestor = FetchRequestor;
    /**
     * Should be used only in the context of testing. Just uses the underlying
     * Promise to mock the behavior of the Requestor.
     */
    var TestRequestor = /** @class */ (function (_super) {
        __extends(TestRequestor, _super);
        function TestRequestor(promise) {
            var _this = _super.call(this) || this;
            _this.promise = promise;
            return _this;
        }
        TestRequestor.prototype.xhr = function (settings) {
            return this.promise; // unsafe cast
        };
        return TestRequestor;
    }(Requestor));
    exports.TestRequestor = TestRequestor;
});
var authorization_service_configuration = createCommonjsModule(function (module, exports) {
    /*
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
     * in compliance with the License. You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software distributed under the
     * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
     * express or implied. See the License for the specific language governing permissions and
     * limitations under the License.
     */
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AuthorizationServiceConfiguration = void 0;
    /**
     * The standard base path for well-known resources on domains.
     * See https://tools.ietf.org/html/rfc5785 for more information.
     */
    var WELL_KNOWN_PATH = '.well-known';
    /**
     * The standard resource under the well known path at which an OpenID Connect
     * discovery document can be found under an issuer's base URI.
     */
    var OPENID_CONFIGURATION = 'openid-configuration';
    /**
     * Configuration details required to interact with an authorization service.
     *
     * More information at https://openid.net/specs/openid-connect-discovery-1_0-17.html
     */
    var AuthorizationServiceConfiguration = /** @class */ (function () {
        function AuthorizationServiceConfiguration(request) {
            this.authorizationEndpoint = request.authorization_endpoint;
            this.tokenEndpoint = request.token_endpoint;
            this.revocationEndpoint = request.revocation_endpoint;
            this.userInfoEndpoint = request.userinfo_endpoint;
            this.endSessionEndpoint = request.end_session_endpoint;
        }
        AuthorizationServiceConfiguration.prototype.toJson = function () {
            return {
                authorization_endpoint: this.authorizationEndpoint,
                token_endpoint: this.tokenEndpoint,
                revocation_endpoint: this.revocationEndpoint,
                end_session_endpoint: this.endSessionEndpoint,
                userinfo_endpoint: this.userInfoEndpoint
            };
        };
        AuthorizationServiceConfiguration.fetchFromIssuer = function (openIdIssuerUrl, requestor) {
            var fullUrl = openIdIssuerUrl + "/" + WELL_KNOWN_PATH + "/" + OPENID_CONFIGURATION;
            var requestorToUse = requestor || new xhr.JQueryRequestor();
            return requestorToUse
                .xhr({ url: fullUrl, dataType: 'json', method: 'GET' })
                .then(function (json) { return new AuthorizationServiceConfiguration(json); });
        };
        return AuthorizationServiceConfiguration;
    }());
    exports.AuthorizationServiceConfiguration = AuthorizationServiceConfiguration;
});
var byteLength_1 = byteLength;
var toByteArray_1 = toByteArray;
var fromByteArray_1 = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for (var i$1 = 0, len = code.length; i$1 < len; ++i$1) {
    lookup[i$1] = code[i$1];
    revLookup[code.charCodeAt(i$1)] = i$1;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) {
        throw new Error('Invalid string. Length must be a multiple of 4');
    }
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1)
        validLen = len;
    var placeHoldersLen = validLen === len
        ? 0
        : 4 - (validLen % 4);
    return [validLen, placeHoldersLen];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0
        ? validLen - 4
        : validLen;
    var i;
    for (i = 0; i < len; i += 4) {
        tmp =
            (revLookup[b64.charCodeAt(i)] << 18) |
                (revLookup[b64.charCodeAt(i + 1)] << 12) |
                (revLookup[b64.charCodeAt(i + 2)] << 6) |
                revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = (tmp >> 16) & 0xFF;
        arr[curByte++] = (tmp >> 8) & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp =
            (revLookup[b64.charCodeAt(i)] << 2) |
                (revLookup[b64.charCodeAt(i + 1)] >> 4);
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp =
            (revLookup[b64.charCodeAt(i)] << 10) |
                (revLookup[b64.charCodeAt(i + 1)] << 4) |
                (revLookup[b64.charCodeAt(i + 2)] >> 2);
        arr[curByte++] = (tmp >> 8) & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 0x3F] +
        lookup[num >> 12 & 0x3F] +
        lookup[num >> 6 & 0x3F] +
        lookup[num & 0x3F];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for (var i = start; i < end; i += 3) {
        tmp =
            ((uint8[i] << 16) & 0xFF0000) +
                ((uint8[i + 1] << 8) & 0xFF00) +
                (uint8[i + 2] & 0xFF);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3; // if we have 1 byte left, pad 2 bytes
    var parts = [];
    var maxChunkLength = 16383; // must be multiple of 3
    // go through the array every three bytes, we'll deal with trailing stuff later
    for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
        parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)));
    }
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push(lookup[tmp >> 2] +
            lookup[(tmp << 4) & 0x3F] +
            '==');
    }
    else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push(lookup[tmp >> 10] +
            lookup[(tmp >> 4) & 0x3F] +
            lookup[(tmp << 2) & 0x3F] +
            '=');
    }
    return parts.join('');
}
var base64Js = {
    byteLength: byteLength_1,
    toByteArray: toByteArray_1,
    fromByteArray: fromByteArray_1
};
var crypto_utils = createCommonjsModule(function (module, exports) {
    /*
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
     * in compliance with the License. You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software distributed under the
     * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
     * express or implied. See the License for the specific language governing permissions and
     * limitations under the License.
     */
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DefaultCrypto = exports.textEncodeLite = exports.urlSafe = exports.bufferToString = void 0;
    var HAS_CRYPTO = typeof window !== 'undefined' && !!window.crypto;
    var HAS_SUBTLE_CRYPTO = HAS_CRYPTO && !!window.crypto.subtle;
    var CHARSET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    function bufferToString(buffer) {
        var state = [];
        for (var i = 0; i < buffer.byteLength; i += 1) {
            var index = buffer[i] % CHARSET.length;
            state.push(CHARSET[index]);
        }
        return state.join('');
    }
    exports.bufferToString = bufferToString;
    function urlSafe(buffer) {
        var encoded = base64Js.fromByteArray(new Uint8Array(buffer));
        return encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
    }
    exports.urlSafe = urlSafe;
    // adapted from source: http://stackoverflow.com/a/11058858
    // this is used in place of TextEncode as the api is not yet
    // well supported: https://caniuse.com/#search=TextEncoder
    function textEncodeLite(str) {
        var buf = new ArrayBuffer(str.length);
        var bufView = new Uint8Array(buf);
        for (var i = 0; i < str.length; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return bufView;
    }
    exports.textEncodeLite = textEncodeLite;
    /**
     * The default implementation of the `Crypto` interface.
     * This uses the capabilities of the browser.
     */
    var DefaultCrypto = /** @class */ (function () {
        function DefaultCrypto() {
        }
        DefaultCrypto.prototype.generateRandom = function (size) {
            var buffer = new Uint8Array(size);
            if (HAS_CRYPTO) {
                window.crypto.getRandomValues(buffer);
            }
            else {
                // fall back to Math.random() if nothing else is available
                for (var i = 0; i < size; i += 1) {
                    buffer[i] = (Math.random() * CHARSET.length) | 0;
                }
            }
            return bufferToString(buffer);
        };
        DefaultCrypto.prototype.deriveChallenge = function (code) {
            if (code.length < 43 || code.length > 128) {
                return Promise.reject(new errors.AppAuthError('Invalid code length.'));
            }
            if (!HAS_SUBTLE_CRYPTO) {
                return Promise.reject(new errors.AppAuthError('window.crypto.subtle is unavailable.'));
            }
            return new Promise(function (resolve, reject) {
                crypto.subtle.digest('SHA-256', textEncodeLite(code)).then(function (buffer) {
                    return resolve(urlSafe(new Uint8Array(buffer)));
                }, function (error) { return reject(error); });
            });
        };
        return DefaultCrypto;
    }());
    exports.DefaultCrypto = DefaultCrypto;
});
var flags = createCommonjsModule(function (module, exports) {
    /*
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
     * in compliance with the License. You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software distributed under the
     * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
     * express or implied. See the License for the specific language governing permissions and
     * limitations under the License.
     */
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IS_PROFILE = exports.IS_LOG = void 0;
    /* Global flags that control the behavior of App Auth JS. */
    /* Logging turned on ? */
    exports.IS_LOG = true;
    /* Profiling turned on ? */
    exports.IS_PROFILE = false;
});
var logger = createCommonjsModule(function (module, exports) {
    /*
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
     * in compliance with the License. You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software distributed under the
     * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
     * express or implied. See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var __spreadArrays = (commonjsGlobal && commonjsGlobal.__spreadArrays) || function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.profile = exports.log = void 0;
    function log(message) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (flags.IS_LOG) {
            var length_1 = args ? args.length : 0;
            if (length_1 > 0) {
                console.log.apply(console, __spreadArrays([message], args));
            }
            else {
                console.log(message);
            }
        }
    }
    exports.log = log;
    // check to see if native support for profiling is available.
    var NATIVE_PROFILE_SUPPORT = typeof window !== 'undefined' && !!window.performance && !!console.profile;
    /**
     * A decorator that can profile a function.
     */
    function profile(target, propertyKey, descriptor) {
        if (flags.IS_PROFILE) {
            return performProfile(target, propertyKey, descriptor);
        }
        else {
            // return as-is
            return descriptor;
        }
    }
    exports.profile = profile;
    function performProfile(target, propertyKey, descriptor) {
        var originalCallable = descriptor.value;
        // name must exist
        var name = originalCallable.name;
        if (!name) {
            name = 'anonymous function';
        }
        if (NATIVE_PROFILE_SUPPORT) {
            descriptor.value = function (args) {
                console.profile(name);
                var startTime = window.performance.now();
                var result = originalCallable.call.apply(originalCallable, __spreadArrays([this || window], args));
                var duration = window.performance.now() - startTime;
                console.log(name + " took " + duration + " ms");
                console.profileEnd();
                return result;
            };
        }
        else {
            descriptor.value = function (args) {
                log("Profile start " + name);
                var start = Date.now();
                var result = originalCallable.call.apply(originalCallable, __spreadArrays([this || window], args));
                var duration = Date.now() - start;
                log("Profile end " + name + " took " + duration + " ms.");
                return result;
            };
        }
        return descriptor;
    }
});
var authorization_request = createCommonjsModule(function (module, exports) {
    /*
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
     * in compliance with the License. You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software distributed under the
     * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
     * express or implied. See the License for the specific language governing permissions and
     * limitations under the License.
     */
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AuthorizationRequest = void 0;
    /**
     * Generates a cryptographically random new state. Useful for CSRF protection.
     */
    var SIZE = 10; // 10 bytes
    var newState = function (crypto) {
        return crypto.generateRandom(SIZE);
    };
    /**
     * Represents the AuthorizationRequest.
     * For more information look at
     * https://tools.ietf.org/html/rfc6749#section-4.1.1
     */
    var AuthorizationRequest = /** @class */ (function () {
        /**
         * Constructs a new AuthorizationRequest.
         * Use a `undefined` value for the `state` parameter, to generate a random
         * state for CSRF protection.
         */
        function AuthorizationRequest(request, crypto, usePkce) {
            if (crypto === void 0) {
                crypto = new crypto_utils.DefaultCrypto();
            }
            if (usePkce === void 0) {
                usePkce = true;
            }
            this.crypto = crypto;
            this.usePkce = usePkce;
            this.clientId = request.client_id;
            this.redirectUri = request.redirect_uri;
            this.scope = request.scope;
            this.responseType = request.response_type || AuthorizationRequest.RESPONSE_TYPE_CODE;
            this.state = request.state || newState(crypto);
            this.extras = request.extras;
            // read internal properties if available
            this.internal = request.internal;
        }
        AuthorizationRequest.prototype.setupCodeVerifier = function () {
            var _this = this;
            if (!this.usePkce) {
                return Promise.resolve();
            }
            else {
                var codeVerifier_1 = this.crypto.generateRandom(128);
                var challenge = this.crypto.deriveChallenge(codeVerifier_1).catch(function (error) {
                    logger.log('Unable to generate PKCE challenge. Not using PKCE', error);
                    return undefined;
                });
                return challenge.then(function (result) {
                    if (result) {
                        // keep track of the code used.
                        _this.internal = _this.internal || {};
                        _this.internal['code_verifier'] = codeVerifier_1;
                        _this.extras = _this.extras || {};
                        _this.extras['code_challenge'] = result;
                        // We always use S256. Plain is not good enough.
                        _this.extras['code_challenge_method'] = 'S256';
                    }
                });
            }
        };
        /**
         * Serializes the AuthorizationRequest to a JavaScript Object.
         */
        AuthorizationRequest.prototype.toJson = function () {
            var _this = this;
            // Always make sure that the code verifier is setup when toJson() is called.
            return this.setupCodeVerifier().then(function () {
                return {
                    response_type: _this.responseType,
                    client_id: _this.clientId,
                    redirect_uri: _this.redirectUri,
                    scope: _this.scope,
                    state: _this.state,
                    extras: _this.extras,
                    internal: _this.internal
                };
            });
        };
        AuthorizationRequest.RESPONSE_TYPE_TOKEN = 'token';
        AuthorizationRequest.RESPONSE_TYPE_CODE = 'code';
        return AuthorizationRequest;
    }());
    exports.AuthorizationRequest = AuthorizationRequest;
});
var authorization_request_handler = createCommonjsModule(function (module, exports) {
    /*
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
     * in compliance with the License. You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software distributed under the
     * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
     * express or implied. See the License for the specific language governing permissions and
     * limitations under the License.
     */
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AuthorizationRequestHandler = exports.BUILT_IN_PARAMETERS = exports.AuthorizationNotifier = void 0;
    /**
     * Authorization Service notifier.
     * This manages the communication of the AuthorizationResponse to the 3p client.
     */
    var AuthorizationNotifier = /** @class */ (function () {
        function AuthorizationNotifier() {
            this.listener = null;
        }
        AuthorizationNotifier.prototype.setAuthorizationListener = function (listener) {
            this.listener = listener;
        };
        /**
         * The authorization complete callback.
         */
        AuthorizationNotifier.prototype.onAuthorizationComplete = function (request, response, error) {
            if (this.listener) {
                // complete authorization request
                this.listener(request, response, error);
            }
        };
        return AuthorizationNotifier;
    }());
    exports.AuthorizationNotifier = AuthorizationNotifier;
    // TODO(rahulrav@): add more built in parameters.
    /* built in parameters. */
    exports.BUILT_IN_PARAMETERS = ['redirect_uri', 'client_id', 'response_type', 'state', 'scope'];
    /**
     * Defines the interface which is capable of handling an authorization request
     * using various methods (iframe / popup / different process etc.).
     */
    var AuthorizationRequestHandler = /** @class */ (function () {
        function AuthorizationRequestHandler(utils, crypto) {
            this.utils = utils;
            this.crypto = crypto;
            // notifier send the response back to the client.
            this.notifier = null;
        }
        /**
         * A utility method to be able to build the authorization request URL.
         */
        AuthorizationRequestHandler.prototype.buildRequestUrl = function (configuration, request) {
            // build the query string
            // coerce to any type for convenience
            var requestMap = {
                'redirect_uri': request.redirectUri,
                'client_id': request.clientId,
                'response_type': request.responseType,
                'state': request.state,
                'scope': request.scope
            };
            // copy over extras
            if (request.extras) {
                for (var extra in request.extras) {
                    if (request.extras.hasOwnProperty(extra)) {
                        // check before inserting to requestMap
                        if (exports.BUILT_IN_PARAMETERS.indexOf(extra) < 0) {
                            requestMap[extra] = request.extras[extra];
                        }
                    }
                }
            }
            var query = this.utils.stringify(requestMap);
            var baseUrl = configuration.authorizationEndpoint;
            var url = baseUrl + "?" + query;
            return url;
        };
        /**
         * Completes the authorization request if necessary & when possible.
         */
        AuthorizationRequestHandler.prototype.completeAuthorizationRequestIfPossible = function () {
            var _this = this;
            // call complete authorization if possible to see there might
            // be a response that needs to be delivered.
            logger.log("Checking to see if there is an authorization response to be delivered.");
            if (!this.notifier) {
                logger.log("Notifier is not present on AuthorizationRequest handler.\n          No delivery of result will be possible");
            }
            return this.completeAuthorizationRequest().then(function (result) {
                if (!result) {
                    logger.log("No result is available yet.");
                }
                if (result && _this.notifier) {
                    _this.notifier.onAuthorizationComplete(result.request, result.response, result.error);
                }
            });
        };
        /**
         * Sets the default Authorization Service notifier.
         */
        AuthorizationRequestHandler.prototype.setAuthorizationNotifier = function (notifier) {
            this.notifier = notifier;
            return this;
        };
        return AuthorizationRequestHandler;
    }());
    exports.AuthorizationRequestHandler = AuthorizationRequestHandler;
});
var authorization_response = createCommonjsModule(function (module, exports) {
    /*
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
     * in compliance with the License. You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software distributed under the
     * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
     * express or implied. See the License for the specific language governing permissions and
     * limitations under the License.
     */
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AuthorizationError = exports.AuthorizationResponse = void 0;
    /**
     * Represents the Authorization Response type.
     * For more information look at
     * https://tools.ietf.org/html/rfc6749#section-4.1.2
     */
    var AuthorizationResponse = /** @class */ (function () {
        function AuthorizationResponse(response) {
            this.code = response.code;
            this.state = response.state;
        }
        AuthorizationResponse.prototype.toJson = function () {
            return { code: this.code, state: this.state };
        };
        return AuthorizationResponse;
    }());
    exports.AuthorizationResponse = AuthorizationResponse;
    /**
     * Represents the Authorization error response.
     * For more information look at:
     * https://tools.ietf.org/html/rfc6749#section-4.1.2.1
     */
    var AuthorizationError = /** @class */ (function () {
        function AuthorizationError(error) {
            this.error = error.error;
            this.errorDescription = error.error_description;
            this.errorUri = error.error_uri;
            this.state = error.state;
        }
        AuthorizationError.prototype.toJson = function () {
            return {
                error: this.error,
                error_description: this.errorDescription,
                error_uri: this.errorUri,
                state: this.state
            };
        };
        return AuthorizationError;
    }());
    exports.AuthorizationError = AuthorizationError;
});
var query_string_utils = createCommonjsModule(function (module, exports) {
    /*
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
     * in compliance with the License. You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software distributed under the
     * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
     * express or implied. See the License for the specific language governing permissions and
     * limitations under the License.
     */
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BasicQueryStringUtils = void 0;
    var BasicQueryStringUtils = /** @class */ (function () {
        function BasicQueryStringUtils() {
        }
        BasicQueryStringUtils.prototype.parse = function (input, useHash) {
            if (useHash) {
                return this.parseQueryString(input.hash);
            }
            else {
                return this.parseQueryString(input.search);
            }
        };
        BasicQueryStringUtils.prototype.parseQueryString = function (query) {
            var result = {};
            // if anything starts with ?, # or & remove it
            query = query.trim().replace(/^(\?|#|&)/, '');
            var params = query.split('&');
            for (var i = 0; i < params.length; i += 1) {
                var param = params[i]; // looks something like a=b
                var parts = param.split('=');
                if (parts.length >= 2) {
                    var key = decodeURIComponent(parts.shift());
                    var value = parts.length > 0 ? parts.join('=') : null;
                    if (value) {
                        result[key] = decodeURIComponent(value);
                    }
                }
            }
            return result;
        };
        BasicQueryStringUtils.prototype.stringify = function (input) {
            var encoded = [];
            for (var key in input) {
                if (input.hasOwnProperty(key) && input[key]) {
                    encoded.push(encodeURIComponent(key) + "=" + encodeURIComponent(input[key]));
                }
            }
            return encoded.join('&');
        };
        return BasicQueryStringUtils;
    }());
    exports.BasicQueryStringUtils = BasicQueryStringUtils;
});
var storage = createCommonjsModule(function (module, exports) {
    /*
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
     * in compliance with the License. You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software distributed under the
     * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
     * express or implied. See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b)
                    if (Object.prototype.hasOwnProperty.call(b, p))
                        d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LocalStorageBackend = exports.StorageBackend = void 0;
    /**
     * Asynchronous storage APIs. All methods return a `Promise`.
     * All methods take the `DOMString`
     * IDL type (as it is the lowest common denominator).
     */
    var StorageBackend = /** @class */ (function () {
        function StorageBackend() {
        }
        return StorageBackend;
    }());
    exports.StorageBackend = StorageBackend;
    /**
     * A `StorageBackend` backed by `localstorage`.
     */
    var LocalStorageBackend = /** @class */ (function (_super) {
        __extends(LocalStorageBackend, _super);
        function LocalStorageBackend(storage) {
            var _this = _super.call(this) || this;
            _this.storage = storage || window.localStorage;
            return _this;
        }
        LocalStorageBackend.prototype.getItem = function (name) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var value = _this.storage.getItem(name);
                if (value) {
                    resolve(value);
                }
                else {
                    resolve(null);
                }
            });
        };
        LocalStorageBackend.prototype.removeItem = function (name) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.storage.removeItem(name);
                resolve();
            });
        };
        LocalStorageBackend.prototype.clear = function () {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.storage.clear();
                resolve();
            });
        };
        LocalStorageBackend.prototype.setItem = function (name, value) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                _this.storage.setItem(name, value);
                resolve();
            });
        };
        return LocalStorageBackend;
    }(StorageBackend));
    exports.LocalStorageBackend = LocalStorageBackend;
});
var redirect_based_handler = createCommonjsModule(function (module, exports) {
    /*
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
     * in compliance with the License. You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software distributed under the
     * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
     * express or implied. See the License for the specific language governing permissions and
     * limitations under the License.
     */
    var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b)
                    if (Object.prototype.hasOwnProperty.call(b, p))
                        d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RedirectRequestHandler = void 0;
    /** key for authorization request. */
    var authorizationRequestKey = function (handle) {
        return handle + "_appauth_authorization_request";
    };
    /** key for authorization service configuration */
    var authorizationServiceConfigurationKey = function (handle) {
        return handle + "_appauth_authorization_service_configuration";
    };
    /** key in local storage which represents the current authorization request. */
    var AUTHORIZATION_REQUEST_HANDLE_KEY = 'appauth_current_authorization_request';
    /**
     * Represents an AuthorizationRequestHandler which uses a standard
     * redirect based code flow.
     */
    var RedirectRequestHandler = /** @class */ (function (_super) {
        __extends(RedirectRequestHandler, _super);
        function RedirectRequestHandler(
        // use the provided storage backend
        // or initialize local storage with the default storage backend which
        // uses window.localStorage
        storageBackend, utils, locationLike, crypto) {
            if (storageBackend === void 0) {
                storageBackend = new storage.LocalStorageBackend();
            }
            if (utils === void 0) {
                utils = new query_string_utils.BasicQueryStringUtils();
            }
            if (locationLike === void 0) {
                locationLike = window.location;
            }
            if (crypto === void 0) {
                crypto = new crypto_utils.DefaultCrypto();
            }
            var _this = _super.call(this, utils, crypto) || this;
            _this.storageBackend = storageBackend;
            _this.locationLike = locationLike;
            return _this;
        }
        RedirectRequestHandler.prototype.performAuthorizationRequest = function (configuration, request) {
            var _this = this;
            var handle = this.crypto.generateRandom(10);
            // before you make request, persist all request related data in local storage.
            var persisted = Promise.all([
                this.storageBackend.setItem(AUTHORIZATION_REQUEST_HANDLE_KEY, handle),
                // Calling toJson() adds in the code & challenge when possible
                request.toJson().then(function (result) {
                    return _this.storageBackend.setItem(authorizationRequestKey(handle), JSON.stringify(result));
                }),
                this.storageBackend.setItem(authorizationServiceConfigurationKey(handle), JSON.stringify(configuration.toJson())),
            ]);
            persisted.then(function () {
                // make the redirect request
                var url = _this.buildRequestUrl(configuration, request);
                logger.log('Making a request to ', request, url);
                _this.locationLike.assign(url);
            });
        };
        /**
         * Attempts to introspect the contents of storage backend and completes the
         * request.
         */
        RedirectRequestHandler.prototype.completeAuthorizationRequest = function () {
            var _this = this;
            // TODO(rahulrav@): handle authorization errors.
            return this.storageBackend.getItem(AUTHORIZATION_REQUEST_HANDLE_KEY).then(function (handle) {
                if (handle) {
                    // we have a pending request.
                    // fetch authorization request, and check state
                    return _this.storageBackend
                        .getItem(authorizationRequestKey(handle))
                        // requires a corresponding instance of result
                        // TODO(rahulrav@): check for inconsitent state here
                        .then(function (result) { return JSON.parse(result); })
                        .then(function (json) { return new authorization_request.AuthorizationRequest(json); })
                        .then(function (request) {
                        // check redirect_uri and state
                        var currentUri = "" + _this.locationLike.origin + _this.locationLike.pathname;
                        var queryParams = _this.utils.parse(_this.locationLike, true /* use hash */);
                        var state = queryParams['state'];
                        var code = queryParams['code'];
                        var error = queryParams['error'];
                        logger.log('Potential authorization request ', currentUri, queryParams, state, code, error);
                        var shouldNotify = state === request.state;
                        var authorizationResponse = null;
                        var authorizationError = null;
                        if (shouldNotify) {
                            if (error) {
                                // get additional optional info.
                                var errorUri = queryParams['error_uri'];
                                var errorDescription = queryParams['error_description'];
                                authorizationError = new authorization_response.AuthorizationError({
                                    error: error,
                                    error_description: errorDescription,
                                    error_uri: errorUri,
                                    state: state
                                });
                            }
                            else {
                                authorizationResponse = new authorization_response.AuthorizationResponse({ code: code, state: state });
                            }
                            // cleanup state
                            return Promise
                                .all([
                                _this.storageBackend.removeItem(AUTHORIZATION_REQUEST_HANDLE_KEY),
                                _this.storageBackend.removeItem(authorizationRequestKey(handle)),
                                _this.storageBackend.removeItem(authorizationServiceConfigurationKey(handle))
                            ])
                                .then(function () {
                                logger.log('Delivering authorization response');
                                return {
                                    request: request,
                                    response: authorizationResponse,
                                    error: authorizationError
                                };
                            });
                        }
                        else {
                            logger.log('Mismatched request (state and request_uri) dont match.');
                            return Promise.resolve(null);
                        }
                    });
                }
                else {
                    return null;
                }
            });
        };
        return RedirectRequestHandler;
    }(authorization_request_handler.AuthorizationRequestHandler));
    exports.RedirectRequestHandler = RedirectRequestHandler;
});
var token_response = createCommonjsModule(function (module, exports) {
    /*
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
     * in compliance with the License. You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software distributed under the
     * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
     * express or implied. See the License for the specific language governing permissions and
     * limitations under the License.
     */
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TokenError = exports.TokenResponse = exports.nowInSeconds = void 0;
    // constants
    var AUTH_EXPIRY_BUFFER = 10 * 60 * -1; // 10 mins in seconds
    /**
     * Returns the instant of time in seconds.
     */
    exports.nowInSeconds = function () { return Math.round(new Date().getTime() / 1000); };
    /**
     * Represents the Token Response type.
     * For more information look at:
     * https://tools.ietf.org/html/rfc6749#section-5.1
     */
    var TokenResponse = /** @class */ (function () {
        function TokenResponse(response) {
            this.accessToken = response.access_token;
            this.tokenType = response.token_type || 'bearer';
            if (response.expires_in) {
                this.expiresIn = parseInt(response.expires_in, 10);
            }
            this.refreshToken = response.refresh_token;
            this.scope = response.scope;
            this.idToken = response.id_token;
            this.issuedAt = response.issued_at || exports.nowInSeconds();
        }
        TokenResponse.prototype.toJson = function () {
            var _a;
            return {
                access_token: this.accessToken,
                id_token: this.idToken,
                refresh_token: this.refreshToken,
                scope: this.scope,
                token_type: this.tokenType,
                issued_at: this.issuedAt,
                expires_in: (_a = this.expiresIn) === null || _a === void 0 ? void 0 : _a.toString()
            };
        };
        TokenResponse.prototype.isValid = function (buffer) {
            if (buffer === void 0) {
                buffer = AUTH_EXPIRY_BUFFER;
            }
            if (this.expiresIn) {
                var now = exports.nowInSeconds();
                return now < this.issuedAt + this.expiresIn + buffer;
            }
            else {
                return true;
            }
        };
        return TokenResponse;
    }());
    exports.TokenResponse = TokenResponse;
    /**
     * Represents the Token Error type.
     * For more information look at:
     * https://tools.ietf.org/html/rfc6749#section-5.2
     */
    var TokenError = /** @class */ (function () {
        function TokenError(tokenError) {
            this.error = tokenError.error;
            this.errorDescription = tokenError.error_description;
            this.errorUri = tokenError.error_uri;
        }
        TokenError.prototype.toJson = function () {
            return {
                error: this.error, error_description: this.errorDescription, error_uri: this.errorUri
            };
        };
        return TokenError;
    }());
    exports.TokenError = TokenError;
});
var token_request_handler = createCommonjsModule(function (module, exports) {
    /*
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
     * in compliance with the License. You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software distributed under the
     * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
     * express or implied. See the License for the specific language governing permissions and
     * limitations under the License.
     */
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BaseTokenRequestHandler = void 0;
    /**
     * The default token request handler.
     */
    var BaseTokenRequestHandler = /** @class */ (function () {
        function BaseTokenRequestHandler(requestor, utils) {
            if (requestor === void 0) {
                requestor = new xhr.JQueryRequestor();
            }
            if (utils === void 0) {
                utils = new query_string_utils.BasicQueryStringUtils();
            }
            this.requestor = requestor;
            this.utils = utils;
        }
        BaseTokenRequestHandler.prototype.isTokenResponse = function (response) {
            return response.error === undefined;
        };
        BaseTokenRequestHandler.prototype.performRevokeTokenRequest = function (configuration, request) {
            var revokeTokenResponse = this.requestor.xhr({
                url: configuration.revocationEndpoint,
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: this.utils.stringify(request.toStringMap())
            });
            return revokeTokenResponse.then(function (response) {
                return true;
            });
        };
        BaseTokenRequestHandler.prototype.performTokenRequest = function (configuration, request) {
            var _this = this;
            var tokenResponse = this.requestor.xhr({
                url: configuration.tokenEndpoint,
                method: 'POST',
                dataType: 'json',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                data: this.utils.stringify(request.toStringMap())
            });
            return tokenResponse.then(function (response) {
                if (_this.isTokenResponse(response)) {
                    return new token_response.TokenResponse(response);
                }
                else {
                    return Promise.reject(new errors.AppAuthError(response.error, new token_response.TokenError(response)));
                }
            });
        };
        return BaseTokenRequestHandler;
    }());
    exports.BaseTokenRequestHandler = BaseTokenRequestHandler;
});
var token_request = createCommonjsModule(function (module, exports) {
    /*
     * Copyright 2017 Google Inc.
     *
     * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
     * in compliance with the License. You may obtain a copy of the License at
     *
     * http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software distributed under the
     * License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
     * express or implied. See the License for the specific language governing permissions and
     * limitations under the License.
     */
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TokenRequest = exports.GRANT_TYPE_REFRESH_TOKEN = exports.GRANT_TYPE_AUTHORIZATION_CODE = void 0;
    exports.GRANT_TYPE_AUTHORIZATION_CODE = 'authorization_code';
    exports.GRANT_TYPE_REFRESH_TOKEN = 'refresh_token';
    /**
     * Represents an Access Token request.
     * For more information look at:
     * https://tools.ietf.org/html/rfc6749#section-4.1.3
     */
    var TokenRequest = /** @class */ (function () {
        function TokenRequest(request) {
            this.clientId = request.client_id;
            this.redirectUri = request.redirect_uri;
            this.grantType = request.grant_type;
            this.code = request.code;
            this.refreshToken = request.refresh_token;
            this.extras = request.extras;
        }
        /**
         * Serializes a TokenRequest to a JavaScript object.
         */
        TokenRequest.prototype.toJson = function () {
            return {
                grant_type: this.grantType,
                code: this.code,
                refresh_token: this.refreshToken,
                redirect_uri: this.redirectUri,
                client_id: this.clientId,
                extras: this.extras
            };
        };
        TokenRequest.prototype.toStringMap = function () {
            var map = {
                grant_type: this.grantType,
                client_id: this.clientId,
                redirect_uri: this.redirectUri
            };
            if (this.code) {
                map['code'] = this.code;
            }
            if (this.refreshToken) {
                map['refresh_token'] = this.refreshToken;
            }
            // copy over extras
            if (this.extras) {
                for (var extra in this.extras) {
                    if (this.extras.hasOwnProperty(extra) && !map.hasOwnProperty(extra)) {
                        // check before inserting to requestMap
                        map[extra] = this.extras[extra];
                    }
                }
            }
            return map;
        };
        return TokenRequest;
    }());
    exports.TokenRequest = TokenRequest;
});
var NoHashQueryStringUtils = /** @class */ (function (_super_1) {
    __extends(NoHashQueryStringUtils, _super_1);
    function NoHashQueryStringUtils(code, state, error) {
        var _this_1 = _super_1.call(this) || this;
        _this_1.code = code;
        _this_1.state = state;
        _this_1.error = error;
        return _this_1;
    }
    NoHashQueryStringUtils.prototype.parse = function (_query, _useHash) {
        return {
            code: this.code,
            state: this.state,
            error: this.error
        };
    };
    return NoHashQueryStringUtils;
}(query_string_utils.BasicQueryStringUtils));
/* global window */
var createHiddenIFrame = function () {
    var iframe = window.document.createElement('iframe');
    iframe.id = 'auth-iframe-navigation-header';
    iframe.style.display = 'none';
    window.document.body.appendChild(iframe);
    return iframe;
};
var fetchAccessToken = function (tokenReceivedHandler, errorHandler, env) { return __awaiter(void 0, void 0, void 0, function () {
    var authorizationServiceConfiguration, tokenHandler, authorizationHandler, iFrameAuth, envConfig, fetchRequestor, getToken_1, request, recieveMessage, error_1;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                iFrameAuth = createHiddenIFrame();
                envConfig = config(env);
                fetchRequestor = new xhr.FetchRequestor();
                _b.label = 1;
            case 1:
                _b.trys.push([1, 3, , 4]);
                return [4 /*yield*/, authorization_service_configuration.AuthorizationServiceConfiguration.fetchFromIssuer(envConfig.LOGIN_BASE_URL, fetchRequestor)];
            case 2:
                authorizationServiceConfiguration = _b.sent();
                authorizationHandler = new redirect_based_handler.RedirectRequestHandler(new storage.LocalStorageBackend(window.sessionStorage), new NoHashQueryStringUtils(null, null, null), iFrameAuth.contentWindow.location);
                tokenHandler = new token_request_handler.BaseTokenRequestHandler(fetchRequestor);
                getToken_1 = function (authorizationRequestResponse) { return __awaiter(void 0, void 0, void 0, function () {
                    var extras, requestToken, tokenResponse, e_4;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                extras = { prompt: 'none' };
                                extras['code_verifier'] = authorizationRequestResponse.request.internal['code_verifier'];
                                requestToken = new token_request.TokenRequest({
                                    client_id: envConfig.CLIENT_ID,
                                    redirect_uri: envConfig.LOGIN_REDIRECT_URL,
                                    grant_type: token_request.GRANT_TYPE_AUTHORIZATION_CODE,
                                    code: authorizationRequestResponse.response.code,
                                    refresh_token: undefined,
                                    extras: extras
                                });
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 3, , 4]);
                                return [4 /*yield*/, tokenHandler.performTokenRequest(authorizationServiceConfiguration, requestToken)];
                            case 2:
                                tokenResponse = _b.sent();
                                debugLogRequest('silent_auth', 'Token request completed successfully', env);
                                return [2 /*return*/, tokenResponse];
                            case 3:
                                e_4 = _b.sent();
                                errorLogRequest('silent_auth', "Token request failed: " + JSON.stringify(e_4.message), env);
                                errorHandler();
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); };
                request = new authorization_request.AuthorizationRequest({
                    client_id: envConfig.CLIENT_ID,
                    redirect_uri: envConfig.LOGIN_REDIRECT_URL,
                    scope: 'openid',
                    response_type: authorization_request.AuthorizationRequest.RESPONSE_TYPE_CODE,
                    state: undefined,
                    extras: { prompt: 'none' }
                });
                recieveMessage = function (event) { return __awaiter(void 0, void 0, void 0, function () {
                    var authorizationRequestResponse, tokenResponse, e_5;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                debugLogRequest('silent_auth', 'Received message event', env);
                                if (!(envConfig.LOGIN_REDIRECT_URL.indexOf(event.origin) > -1)) return [3 /*break*/, 7];
                                if (!(event.data.state && event.data.code)) return [3 /*break*/, 6];
                                authorizationHandler.locationLike = window.location; // Set locationlike to avoid cors problems
                                authorizationHandler.utils = new NoHashQueryStringUtils(event.data.code, event.data.state, null);
                                _b.label = 1;
                            case 1:
                                _b.trys.push([1, 4, , 5]);
                                return [4 /*yield*/, authorizationHandler.completeAuthorizationRequest()];
                            case 2:
                                authorizationRequestResponse = _b.sent();
                                debugLogRequest('silent_auth', 'Authorization Request Response received. Trying to get token...', env);
                                return [4 /*yield*/, getToken_1(authorizationRequestResponse)];
                            case 3:
                                tokenResponse = _b.sent();
                                debugLogRequest('silent_auth', 'Token response received. Handling token...', env);
                                if (tokenResponse) {
                                    tokenReceivedHandler(tokenResponse);
                                }
                                return [3 /*break*/, 5];
                            case 4:
                                e_5 = _b.sent();
                                errorLogRequest('silent_auth', "Something really bad happened: " + JSON.stringify(e_5.message), env);
                                errorHandler();
                                return [3 /*break*/, 5];
                            case 5: return [3 /*break*/, 7];
                            case 6:
                                if (event.data.state && event.data.error) {
                                    errorLogRequest('silent_auth', "Received error from message, " + event.data.error, env);
                                    errorHandler();
                                }
                                _b.label = 7;
                            case 7: return [2 /*return*/];
                        }
                    });
                }); };
                window.addEventListener('message', recieveMessage, { passive: true });
                authorizationHandler.performAuthorizationRequest(authorizationServiceConfiguration, request);
                return [3 /*break*/, 4];
            case 3:
                error_1 = _b.sent();
                errorLogRequest('silent_auth', "Something bad happened: " + error_1.message, env);
                errorHandler();
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
var emitAccessToken = function (element, env) {
    var tokenReceivedHandler = function (data) {
        var accessTokenFetchedEvent = new CustomEvent(ACCESS_TOKEN_FETCHED_EVENT, { detail: data });
        element.dispatchEvent(accessTokenFetchedEvent);
    };
    var errorHandler = function () {
        var accessTokenFetchErrorEvent = new CustomEvent(ACCESS_TOKEN_FETCH_ERROR_EVENT);
        element.dispatchEvent(accessTokenFetchErrorEvent);
    };
    return function () { return fetchAccessToken(tokenReceivedHandler, errorHandler, env); };
};
var GeneralLoadEvent = /** @class */ (function (_super_1) {
    __extends(GeneralLoadEvent, _super_1);
    function GeneralLoadEvent(analyticsSetup) {
        var _this_1 = _super_1.call(this, analyticsSetup) || this;
        _this_1.context.eventAction = 'PAGHomeNav_General_Load';
        return _this_1;
    }
    GeneralLoadEvent.prototype.event = function () {
        return _super_1.prototype.event.call(this);
    };
    return GeneralLoadEvent;
}(AnalyticsEvent));
var headerCss = ".header-container{background:#fff;position:relative;visibility:visible}.header{font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:400;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:3.8125rem;visibility:visible}@media (min-width: 760px){.header{height:4.4375rem}}@media (min-width: 1300px){.header{height:7.3125rem;-ms-flex-direction:row;flex-direction:row}}@media (min-width: 1760px){.header{height:7.6875rem}}.header .crest-burger-btn-container{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between}.header .crest-burger-btn-container .crest{z-index:1;-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0)}@media (min-width: 1300px){.header .crest-burger-btn-container .crest{z-index:400}}.header .burger-button:focus{outline-width:2px;outline-style:solid;outline-offset:1px;outline-color:#00d5b9}.header .menu-container{visibility:hidden;display:none}@media (min-width: 1300px){.header .menu-container{display:-ms-flexbox;display:flex;visibility:visible;-ms-flex-positive:1;flex-grow:1}}.header .menu-container .menu-desktop-level-1{-ms-flex:1;flex:1}.limit-stretch{width:calc(100vw - 7vw * 2);max-width:96rem;margin-left:auto;margin-right:auto;-webkit-box-sizing:content-box;box-sizing:content-box}@media (min-width: 1760px){.limit-stretch{width:calc(100vw - 10vw * 2)}}@media (min-width: 1000px){.limit-stretch{padding-left:calc(100vw - 100%)}}.header-border{height:1px;background-color:#c9cacb}p-button.skip-content{display:none}@media (min-width: 1000px){p-button.skip-content{display:-ms-inline-flexbox;display:inline-flex;left:-999px;position:absolute;width:auto;height:auto;overflow:hidden;z-index:-999}}p-button.skip-content.focused{outline-width:2px;outline-style:solid;outline-offset:1px;outline-color:#00d5b9;overflow:visible;z-index:999}.main-content{width:20px}.main-content:focus{outline-style:none}";
var Header = /** @class */ (function () {
    function class_2(hostRef) {
        var _this_1 = this;
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.accessTokenExpired = Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this, "accessTokenExpired", 7);
        this.navigationDidLoad = Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this, "navigationDidLoad", 7);
        this.localeObject = new Locale(DEFAULT_LOCALE);
        this.locale = DEFAULT_LOCALE;
        this.env = DEFAULT_ENVIRONMENT;
        this.skipToMainContent = function (event) {
            // NOTE: To remain focused on the clicked element
            event.stopPropagation();
            var mainElement = _this_1.el.shadowRoot.querySelector('#main');
            mainElement.tabIndex = 0;
            mainElement.focus();
        };
        this.mainContentTab = function () {
            var mainElement = _this_1.el.shadowRoot.querySelector('#main');
            mainElement.tabIndex = -1;
        };
        this.addFocus = function () {
            var skipContentElement = _this_1.el.shadowRoot.querySelector('p-button.skip-content');
            skipContentElement.classList.add('focused');
            var crestElement = _this_1.el.shadowRoot.querySelector('phn-crest');
            skipContentElement.style.left = crestElement.getBoundingClientRect().right + 4 + "px";
        };
        this.removeFocus = function () {
            var skipContentElement = _this_1.el.shadowRoot.querySelector('p-button.skip-content');
            skipContentElement.classList.remove('focused');
        };
    }
    class_2.prototype.localeWatchHandler = function (newLocale) {
        this.localeObject.setLocale(newLocale);
        analyticsSetupStore.set('locale', new Locale(newLocale));
    };
    class_2.prototype.newAccessTokenReceived = function (newAccessToken, _) {
        if (newAccessToken !== REDACTED && newAccessToken !== this.accessTokenState) {
            this.accessTokenState = newAccessToken;
        }
        this.el.setAttribute('access-token', REDACTED);
    };
    class_2.prototype.accessTokenStateUpdated = function (newToken, oldToken) {
        var _this_1 = this;
        if (newToken) {
            if (newToken !== oldToken) {
                updateLoggedInStatus(newToken, this.localeObject).then(function (statusUpdated) {
                    if (!statusUpdated) {
                        _this_1.accessTokenState = undefined;
                        _this_1.accessTokenExpired.emit();
                    }
                    else {
                        updateUnreadMessagesCount(newToken);
                    }
                });
            }
        }
        else {
            navContentStore.set('loggedInState', LOGGED_OUT_USER_STATUS);
        }
    };
    class_2.prototype.handleAccessTokenFetchedEvent = function (event) {
        if (event.detail.accessToken) {
            this.accessTokenState = event.detail.accessToken;
        }
        else {
            navContentStore.set('loggedInState', LOGGED_OUT_USER_STATUS);
        }
    };
    class_2.prototype.handleAccessTokenFetchErrorEvent = function () {
        navContentStore.set('loggedInState', LOGGED_OUT_USER_STATUS);
    };
    class_2.prototype.componentWillLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _b, contentForLocale, myPorscheExists;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        analyticsSetupStore.set('window', window);
                        analyticsSetupStore.set('environment', this.env);
                        navContentStore.set('env', this.env);
                        navStateStore.set('imagesLoaded', false);
                        this.localeWatchHandler(this.locale);
                        _b = this;
                        return [4 /*yield*/, fetchContent(this.env)];
                    case 1:
                        _b.content = _c.sent();
                        contentForLocale = getContentForLocale(this.localeObject, this.content, this.env);
                        myPorscheExists = contentForLocale.metafunctionalities && contentForLocale.metafunctionalities[1];
                        if (!this.accessToken) return [3 /*break*/, 2];
                        if (this.accessToken !== REDACTED) {
                            this.accessTokenState = this.accessToken;
                            this.el.setAttribute('access-token', REDACTED);
                        }
                        return [3 /*break*/, 5];
                    case 2:
                        if (!(config(this.env).PORSCHE_COM_URL.includes(window.location.origin) && myPorscheExists)) return [3 /*break*/, 4];
                        navContentStore.set('loggedInState', LOADING_STATUS);
                        return [4 /*yield*/, emitAccessToken(this.el, this.env)()];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        navContentStore.set('loggedInState', LOGGED_OUT_USER_STATUS);
                        _c.label = 5;
                    case 5:
                        navContentStore.set('seriesList', contentForLocale.seriesList);
                        navContentStore.set('shops', contentForLocale.shops);
                        navContentStore.set('more', contentForLocale.more);
                        navContentStore.set('metafunctionalities', contentForLocale.metafunctionalities);
                        navContentStore.set('menu', contentForLocale.menu);
                        return [2 /*return*/];
                }
            });
        });
    };
    class_2.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var analyticsSetup, generalLoadEvent, pagData;
            return __generator(this, function (_b) {
                analyticsSetup = {
                    applicationId: analyticsSetupStore.get('applicationId'),
                    locale: analyticsSetupStore.get('locale'),
                    window: analyticsSetupStore.get('window'),
                    environment: analyticsSetupStore.get('environment')
                };
                generalLoadEvent = new GeneralLoadEvent(analyticsSetup);
                pagData = (window['pagData'] = window['pagData'] || []);
                pagData.push(generalLoadEvent.event());
                this.navigationDidLoad.emit();
                return [2 /*return*/];
            });
        });
    };
    class_2.prototype.componentWillUpdate = function () {
        var contentForLocale = getContentForLocale(this.localeObject, this.content, this.env);
        navContentStore.set('seriesList', contentForLocale.seriesList);
        navContentStore.set('shops', contentForLocale.shops);
        navContentStore.set('more', contentForLocale.more);
        navContentStore.set('metafunctionalities', contentForLocale.metafunctionalities);
        navContentStore.set('menu', contentForLocale.menu);
    };
    class_2.prototype.render = function () {
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("header", { class: "header-container" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-button", { variant: "primary", class: "skip-content", onfocus: this.addFocus, onClick: this.skipToMainContent, onblur: this.removeFocus }, "Skip to main content"), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header limit-stretch" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "crest-burger-btn-container" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-crest", { class: "crest" }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-mobile-layout", null)), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("nav", { class: "menu-container" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-menu-desktop-level-1", { class: "menu-desktop-level-1" }))), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-border" }), this.env === 'preview' && Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-preview-badge", { versionString: "Header " + VERSION + " - PP content" }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { id: "main", tabindex: "-1", class: "main-content", onBlur: this.mainContentTab })));
    };
    Object.defineProperty(class_2, "assetsDirs", {
        get: function () { return ["auth"]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_2.prototype, "el", {
        get: function () { return Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_2, "watchers", {
        get: function () {
            return {
                "locale": ["localeWatchHandler"],
                "accessToken": ["newAccessTokenReceived"],
                "accessTokenState": ["accessTokenStateUpdated"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_2;
}());
Header.style = headerCss;
var headlineCss = ".headline.sc-phn-headline{font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:100;border-bottom:1px solid #7b7e80;padding:0;margin:0;cursor:default;vertical-align:baseline}@media (min-width: 0) and (max-width: 759px){.headline.sc-phn-headline{margin-top:5.1875rem;font-size:2rem;line-height:2.5rem;padding-bottom:0.75rem;padding-left:0.625rem}}@media (min-width: 760px) and (max-width: 999px){.headline.sc-phn-headline{margin-top:6.625rem;font-size:3.75rem;line-height:4.25rem;padding-bottom:0.6875rem;padding-left:0.625rem}}@media (min-width: 1000px) and (max-width: 1299px){.headline.sc-phn-headline{margin-top:7.375rem;font-size:3rem;line-height:3.5rem;padding-bottom:0.6875rem;padding-left:0.625rem}}@media (min-width: 1300px){.headline.sc-phn-headline{font-weight:400;border-bottom:1px solid #4a4a4a;text-align:left;padding-left:0.625rem}}@media (min-width: 1300px) and (max-width: 1759px){.headline.sc-phn-headline{font-size:1.375rem;line-height:1.75rem;padding-bottom:0.6875rem;padding-right:0.625rem}}@media (min-width: 1760px){.headline.sc-phn-headline{font-size:1.5rem;line-height:2rem;padding-bottom:0.4375rem}}";
var Headline = /** @class */ (function () {
    function Headline(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    Headline.prototype.render = function () {
        return Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h1", { class: "headline" }, this.text);
    };
    return Headline;
}());
Headline.style = headlineCss;
var listItemCss = ".list-item-link.sc-phn-list-item{-webkit-box-sizing:border-box;box-sizing:border-box;font-size:1rem;border-bottom:1px solid #c9cacb}.list-item-link.sc-phn-list-item:hover{color:#d5001c;cursor:pointer}@media (min-width: 760px) and (max-width: 999px){.list-item-link.sc-phn-list-item{font-size:1.125rem}}@media (min-width: 1300px){.list-item-link.sc-phn-list-item{border-bottom:0;padding-left:0}}.list-item-link.sc-phn-list-item a.sc-phn-list-item{text-decoration:none;line-height:1.5rem;display:inline-block;width:100%;padding:0.875rem 0 0.875rem 0.625rem}@media (min-width: 760px) and (max-width: 999px){.list-item-link.sc-phn-list-item a.sc-phn-list-item{padding-top:1.125rem;padding-bottom:1.125rem}}@media (min-width: 1300px){.list-item-link.sc-phn-list-item a.sc-phn-list-item{padding-bottom:0}}.list-item-button.sc-phn-list-item{-webkit-box-sizing:border-box;box-sizing:border-box;font-size:1rem;border-bottom:1px solid #c9cacb;height:3.3125rem;padding-left:0.625rem;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (min-width: 760px) and (max-width: 999px){.list-item-button.sc-phn-list-item{font-size:1.125rem;height:3.8125rem;padding-right:0.625rem}}@media (min-width: 1300px){.list-item-button.sc-phn-list-item{border-bottom:0;padding-left:0;padding-top:0.875rem}}.list-item-button.sc-phn-list-item .list-item-text.sc-phn-list-item{display:inline-block;line-height:24px}";
var ListItem = /** @class */ (function () {
    function ListItem(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.item = EMPTY_ITEM;
        this.sendNavigationClickAnalyticsEvent = function (item) {
            var contentItem = { PhraseId: item.PhraseId, Text: item.Text, Link: item.Link };
            var analyticsSetup = {
                applicationId: analyticsSetupStore.get('applicationId'),
                locale: analyticsSetupStore.get('locale'),
                window: analyticsSetupStore.get('window'),
                environment: analyticsSetupStore.get('environment')
            };
            var navigationClick = new NavigationClickEvent(analyticsSetup, contentItem);
            var pagData = (window['pagData'] = window['pagData'] || []);
            pagData.push(navigationClick.event());
        };
    }
    ListItem.prototype.renderLinkItem = function (linkItem) {
        var _this_1 = this;
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: "list-item-link", tag: "div", color: "inherit", size: "inherit" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: linkItem.Link, onClick: function () { return _this_1.sendNavigationClickAnalyticsEvent(linkItem); } }, linkItem.Text))));
    };
    ListItem.prototype.renderTextItem = function (textItem) {
        var _this_1 = this;
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-button-extended", { class: "list-item-button", icon: "arrow-head-right", onClick: function () { return _this_1.sendNavigationClickAnalyticsEvent(textItem); }, cancelTabIndex: false }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "list-item-text" }, textItem.Text)));
    };
    ListItem.prototype.render = function () {
        return this.item.Link ? this.renderLinkItem(this.item) : this.renderTextItem(this.item);
    };
    return ListItem;
}());
ListItem.style = listItemCss;
var megaFlyOutOverlayCss = ".backdrop.sc-phn-mega-fly-out-overlay{position:fixed;z-index:200;left:0;right:0;background:rgba(0, 0, 0, 0.5);pointer-events:none;height:100vh;margin-top:1px}@media (min-width: 1300px){.mega-fly-out-overlay.sc-phn-mega-fly-out-overlay .mega-fly-out-overlay-button.sc-phn-mega-fly-out-overlay{display:-ms-flexbox;display:flex;font-family:inherit;width:100%;margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;outline:transparent none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;text-decoration:none;text-align:left;background:transparent;cursor:pointer;color:inherit;cursor:default;border-bottom:2px solid transparent}.mega-fly-out-overlay.sc-phn-mega-fly-out-overlay .mega-fly-out-overlay-button.sc-phn-mega-fly-out-overlay::-moz-focus-inner{border:0}.mega-fly-out-overlay.sc-phn-mega-fly-out-overlay .mega-fly-out-overlay-button.sc-phn-mega-fly-out-overlay:focus{outline-width:2px;outline-style:solid;outline-offset:1px;outline-color:#00d5b9}.mega-fly-out-overlay.sc-phn-mega-fly-out-overlay .mega-fly-out-overlay-button-active.sc-phn-mega-fly-out-overlay{border-bottom:2px solid #d5001c}.mega-fly-out-overlay.sc-phn-mega-fly-out-overlay .mega-fly-out-overlay-button-active.sc-phn-mega-fly-out-overlay:hover{color:#d5001c}}.mega-fly-out-overlay.sc-phn-mega-fly-out-overlay .mega-fly-out-overlay-container.sc-phn-mega-fly-out-overlay{display:block;visibility:hidden;width:100%;position:absolute;left:0;z-index:300;max-height:0;overflow:hidden}@media (min-width: 1300px) and (max-width: 1759px){.mega-fly-out-overlay.sc-phn-mega-fly-out-overlay .mega-fly-out-overlay-container.sc-phn-mega-fly-out-overlay{top:117px}}@media (min-width: 1760px){.mega-fly-out-overlay.sc-phn-mega-fly-out-overlay .mega-fly-out-overlay-container.sc-phn-mega-fly-out-overlay{top:123px}}.mega-fly-out-overlay.sc-phn-mega-fly-out-overlay .mega-fly-out-overlay-container.sc-phn-mega-fly-out-overlay .mega-fly-out-overlay-content.sc-phn-mega-fly-out-overlay{background-color:#fff;border-top:1px solid #c9cacb}@media (min-width: 1300px) and (max-width: 1759px){.mega-fly-out-overlay.sc-phn-mega-fly-out-overlay .mega-fly-out-overlay-container.sc-phn-mega-fly-out-overlay .mega-fly-out-overlay-content.sc-phn-mega-fly-out-overlay{padding-bottom:5rem}}@media (min-width: 1760px){.mega-fly-out-overlay.sc-phn-mega-fly-out-overlay .mega-fly-out-overlay-container.sc-phn-mega-fly-out-overlay .mega-fly-out-overlay-content.sc-phn-mega-fly-out-overlay{padding-bottom:6rem}}";
var MegaFlyOutOverlay = /** @class */ (function () {
    function class_3(hostRef) {
        var _this_1 = this;
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.active = '';
        this.setBackdropOffset = function () {
            var offsetFromTop = document.body.querySelector('phn-header').getBoundingClientRect().bottom;
            if (offsetFromTop <= 0) {
                _this_1.backdropElement.style.top = '0';
            }
            else {
                _this_1.backdropElement.style.top = '';
            }
        };
        this.activateOverlay = function () {
            _this_1.active = 'active';
            window.addEventListener('scroll', _this_1.setBackdropOffset);
        };
        this.handleKeyDown = function (event) {
            if (event.shiftKey && event.key === 'Tab') {
                _this_1.deactivateState();
                _this_1.keyboardHideOverlayHandler();
            }
        };
        this.handleKeyDownContainer = function (event) {
            var focusable = _this_1.containerElement.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR);
            var isFirstOverlayElement = event.target === focusable[0];
            if (event.shiftKey && event.key === 'Tab' && isFirstOverlayElement) {
                _this_1.deactivateState();
                _this_1.keyboardHideOverlayHandler();
            }
            var isLastOverlayElement = event.target === focusable[focusable.length - 1];
            if (!event.shiftKey && event.key === 'Tab' && isLastOverlayElement) {
                _this_1.deactivateState();
                _this_1.keyboardHideOverlayHandler();
            }
        };
        // also activates screenreader space and enter
        this.handleClick = function (event) {
            event.stopPropagation(); //prevent focus from being lost
            _this_1.activateOverlay();
            _this_1.keyboardShowOverlayHandler(_this_1.containerElement);
        };
    }
    class_3.prototype.showOverlay = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                this.activateOverlay();
                this.showOverlayHandler(this.containerElement);
                return [2 /*return*/];
            });
        });
    };
    class_3.prototype.deactivateState = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                window.removeEventListener('scroll', this.setBackdropOffset);
                this.active = '';
                return [2 /*return*/];
            });
        });
    };
    class_3.prototype.hideOverlay = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                this.deactivateState();
                this.hideOverlayHandler(this.containerElement);
                return [2 /*return*/];
            });
        });
    };
    class_3.prototype.render = function () {
        var _this_1 = this;
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mega-fly-out-overlay" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: 'mega-fly-out-overlay-button mega-fly-out-overlay-button-' + this.active, onKeyDown: this.handleKeyDown, onClick: this.handleClick, "aria-expanded": this.active === 'active' ? 'true' : 'false', "aria-haspopup": "true", id: this.screenReaderId }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "button" })), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mega-fly-out-overlay-container", ref: function (el) { return (_this_1.containerElement = el); }, onKeyDown: this.handleKeyDownContainer, "aria-labelledby": this.screenReaderId, "aria-hidden": this.active === 'active' ? 'false' : 'true', role: "region" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mega-fly-out-overlay-content" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "content" }))), this.active && Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "backdrop", ref: function (el) { return (_this_1.backdropElement = el); } }))));
    };
    Object.defineProperty(class_3.prototype, "element", {
        get: function () { return Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
        enumerable: false,
        configurable: true
    });
    return class_3;
}());
MegaFlyOutOverlay.style = megaFlyOutOverlayCss;
var HoverIntentService = /** @class */ (function () {
    function HoverIntentService() {
        this.last = null;
    }
    HoverIntentService.prototype.handleHoverOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        clearTimeout(this.timeout);
                        if (!this.last) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.last.hideOverlay()];
                    case 1:
                        _b.sent();
                        this.link = null;
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    HoverIntentService.prototype.closestElement = function (selector, base) {
        if (base === void 0) { base = this; }
        function closestFrom(el) {
            if (!el || el === document || el === window)
                return null;
            var found = el.closest(selector);
            return found ? found : closestFrom(el.getRootNode().host);
        }
        return closestFrom(base);
    };
    HoverIntentService.prototype.handleMouseMove = function (event, parentElementSelector) {
        return __awaiter(this, void 0, void 0, function () {
            var element, linkNominee, targetNode;
            var _this_1 = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        element = event.composedPath().length === 0 ? this.capturedComposedPath[0] : event.composedPath()[0];
                        linkNominee = this.closestElement(parentElementSelector, element);
                        this.mouseCursorX = event.clientX;
                        this.mouseCursorY = event.clientY;
                        if (!linkNominee) {
                            targetNode = event.target;
                            if (this.link && !this.link.contains(targetNode)) {
                                this.link = null;
                            }
                            return [2 /*return*/];
                        }
                        if (!(linkNominee === this.link)) return [3 /*break*/, 1];
                        clearTimeout(this.timeout);
                        if (!this.isInsideTriangle()) {
                            this.originPositionX = this.mouseCursorX;
                            this.originPositionY = this.mouseCursorY;
                        }
                        return [3 /*break*/, 5];
                    case 1:
                        if (!(linkNominee !== this.link)) return [3 /*break*/, 5];
                        if (!this.link) return [3 /*break*/, 3];
                        if (this.isInsideTriangle()) {
                            clearTimeout(this.timeout);
                            // capture composedPath() before the handleMouseMove event happens, as it becomes empty before the next event happens
                            this.capturedComposedPath = event.composedPath();
                            this.timeout = setTimeout(function () { return __awaiter(_this_1, void 0, void 0, function () {
                                return __generator(this, function (_b) {
                                    switch (_b.label) {
                                        case 0:
                                            if (!this.link) return [3 /*break*/, 3];
                                            return [4 /*yield*/, this.link.hideOverlay()];
                                        case 1:
                                            _b.sent();
                                            this.link = linkNominee;
                                            return [4 /*yield*/, linkNominee.showOverlay()];
                                        case 2:
                                            _b.sent();
                                            this.originPositionX = this.mouseCursorX;
                                            this.originPositionY = this.mouseCursorY;
                                            _b.label = 3;
                                        case 3:
                                            this.handleMouseMove(event, parentElementSelector);
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, 100);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.link.hideOverlay()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        // set link
                        this.link = linkNominee;
                        this.last = this.link;
                        this.originPositionX = this.mouseCursorX;
                        this.originPositionY = this.mouseCursorY;
                        // set triangle’s left point
                        this.contentAreaLeftX = 280;
                        this.contentAreaLeftY = 280;
                        // set triangle’s right point
                        this.contentAreaRightX = 540 + window.innerWidth / 2;
                        this.contentAreaRightY = 280;
                        // set link state
                        return [4 /*yield*/, this.link.showOverlay()];
                    case 4:
                        // set link state
                        _b.sent();
                        _b.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HoverIntentService.prototype.isInsideTriangle = function () {
        var b0 = (this.contentAreaLeftX - this.originPositionX) * (this.contentAreaRightY - this.originPositionY) -
            (this.contentAreaRightX - this.originPositionX) * (this.contentAreaLeftY - this.originPositionY), b1 = ((this.contentAreaLeftX - this.mouseCursorX) * (this.contentAreaRightY - this.mouseCursorY) -
            (this.contentAreaRightX - this.mouseCursorX) * (this.contentAreaLeftY - this.mouseCursorY)) /
            b0, b2 = ((this.contentAreaRightX - this.mouseCursorX) * (this.originPositionY - this.mouseCursorY) -
            (this.originPositionX - this.mouseCursorX) * (this.contentAreaRightY - this.mouseCursorY)) /
            b0, b3 = ((this.originPositionX - this.mouseCursorX) * (this.contentAreaLeftY - this.mouseCursorY) -
            (this.contentAreaLeftX - this.mouseCursorX) * (this.originPositionY - this.mouseCursorY)) /
            b0;
        return b1 > 0 && b2 > 0 && b3 > 0;
    };
    return HoverIntentService;
}());
function _assertThisInitialized(self) { if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
} return self; }
function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }
/*!
 * GSAP 3.5.1
 * https://greensock.com
 *
 * @license Copyright 2008-2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
/* eslint-disable */
var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, _defaults = {
    duration: .5,
    overwrite: false,
    delay: 0
}, _bigNum = 1e8, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString(value) {
    return typeof value === "string";
}, _isFunction = function _isFunction(value) {
    return typeof value === "function";
}, _isNumber = function _isNumber(value) {
    return typeof value === "number";
}, _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
}, _isObject = function _isObject(value) {
    return typeof value === "object";
}, _isNotFalse = function _isNotFalse(value) {
    return value !== false;
}, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, _isFuncOrString = function _isFuncOrString(value) {
    return _isFunction(value) || _isString(value);
}, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function () { }, 
// note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, 
//only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-\+]*\d*/g, 
//finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+(?:\.|e-|e)*\d*/gi, 
//duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[\.\d]+/, _delimitedValueExp = /[#\-+.]*\b[a-z\d-=+%.]+/gi, _globalTimeline, _win, _coreInitted, _doc, _globals = {}, _installScope = {}, _coreReady, _install = function _install(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
}, _missingPlugin = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
}, _warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
}, _addGlobal = function _addGlobal(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
}, _emptyFunc = function _emptyFunc() {
    return 0;
}, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _lastRenderedFrame, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness(targets) {
    var target = targets[0], harnessPlugin, i;
    _isObject(target) || _isFunction(target) || (targets = [targets]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
        i = _harnessPlugins.length;
        while (i-- && !_harnessPlugins[i].targetTest(target)) { }
        harnessPlugin = _harnessPlugins[i];
    }
    i = targets.length;
    while (i--) {
        targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    }
    return targets;
}, _getCache = function _getCache(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
}, _getProperty = function _getProperty(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
}, _forEachName = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
}, 
//split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
}, _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
    var l = toFind.length, i = 0;
    for (; toSearch.indexOf(toFind[i]) < 0 && ++i < l;) { }
    return i < l;
}, _parseVars = function _parseVars(params, type, parent) {
    //reads the arguments passed to one of the key methods and figures out if the user is defining things with the OLD/legacy syntax where the duration is the 2nd parameter, and then it adjusts things accordingly and spits back the corrected vars object (with the duration added if necessary, as well as runBackwards or startAt or immediateRender). type 0 = to()/staggerTo(), 1 = from()/staggerFrom(), 2 = fromTo()/staggerFromTo()
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars;
    isLegacy && (vars.duration = params[1]);
    vars.parent = parent;
    if (type) {
        irVars = vars;
        while (parent && !("immediateRender" in irVars)) {
            // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
            irVars = parent.vars.defaults || {};
            parent = _isNotFalse(parent.vars.inherit) && parent.parent;
        }
        vars.immediateRender = _isNotFalse(irVars.immediateRender);
        type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
    }
    return vars;
}, _lazyRender = function _lazyRender() {
    var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for (i = 0; i < l; i++) {
        tween = a[i];
        tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
}, _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    _lazyTweens.length && _lazyRender();
    animation.render(time, suppressEvents, force);
    _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
}, _numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
}, _passThrough = function _passThrough(p) {
    return p;
}, _setDefaults = function _setDefaults(obj, defaults) {
    for (var p in defaults) {
        p in obj || (obj[p] = defaults[p]);
    }
    return obj;
}, _setKeyframeDefaults = function _setKeyframeDefaults(obj, defaults) {
    for (var p in defaults) {
        p in obj || p === "duration" || p === "ease" || (obj[p] = defaults[p]);
    }
}, _merge = function _merge(base, toMerge) {
    for (var p in toMerge) {
        base[p] = toMerge[p];
    }
    return base;
}, _mergeDeep = function _mergeDeep(base, toMerge) {
    for (var p in toMerge) {
        base[p] = _isObject(toMerge[p]) ? _mergeDeep(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p];
    }
    return base;
}, _copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {}, p;
    for (p in obj) {
        p in excluding || (copy[p] = obj[p]);
    }
    return copy;
}, _inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults : _setDefaults;
    if (_isNotFalse(vars.inherit)) {
        while (parent) {
            func(vars, parent.vars.defaults);
            parent = parent.parent || parent._dp;
        }
    }
    return vars;
}, _arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length, match = i === a2.length;
    while (match && i-- && a1[i] === a2[i]) { }
    return i < 0;
}, _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) {
        firstProp = "_first";
    }
    if (lastProp === void 0) {
        lastProp = "_last";
    }
    var prev = parent[lastProp], t;
    if (sortBy) {
        t = child[sortBy];
        while (prev && prev[sortBy] > t) {
            prev = prev._prev;
        }
    }
    if (prev) {
        child._next = prev._next;
        prev._next = child;
    }
    else {
        child._next = parent[firstProp];
        parent[firstProp] = child;
    }
    if (child._next) {
        child._next._prev = child;
    }
    else {
        parent[lastProp] = child;
    }
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
}, _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) {
        firstProp = "_first";
    }
    if (lastProp === void 0) {
        lastProp = "_last";
    }
    var prev = child._prev, next = child._next;
    if (prev) {
        prev._next = next;
    }
    else if (parent[firstProp] === child) {
        parent[firstProp] = next;
    }
    if (next) {
        next._prev = prev;
    }
    else if (parent[lastProp] === child) {
        parent[lastProp] = prev;
    }
    child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
}, _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
    child._act = 0;
}, _uncache = function _uncache(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
        // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
        var a = animation;
        while (a) {
            a._dirty = 1;
            a = a.parent;
        }
    }
    return animation;
}, _recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;
    while (parent && parent.parent) {
        //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
        parent._dirty = 1;
        parent.totalDuration();
        parent = parent.parent;
    }
    return animation;
}, _hasNoPausedAncestors = function _hasNoPausedAncestors(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors(animation.parent);
}, _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
}, 
// feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
    return (tTime /= cycleDuration) && ~~tTime === tTime ? ~~tTime - 1 : ~~tTime;
}, _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
}, _setEnd = function _setEnd(animation) {
    return animation._end = _round(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
}, _alignPlayhead = function _alignPlayhead(animation, totalTime) {
    // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
        animation._start = _round(animation._dp._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
        _setEnd(animation);
        parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
    }
    return animation;
}, 
/*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
    let cycleDuration = duration + repeatDelay,
        time = _round(clampedTotalTime % cycleDuration);
    if (time > duration) {
        time = duration;
    }
    return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/
_postAddChecks = function _postAddChecks(timeline, child) {
    var t;
    if (child._time || child._initted && !child._dur) {
        //in case, for example, the _start is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
        t = _parentToChildTotalTime(timeline.rawTime(), child);
        if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) {
            child.render(t, true);
        }
    } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
    if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
        //in case any of the ancestors had completed but should now be enabled...
        if (timeline._dur < timeline.duration()) {
            t = timeline;
            while (t._dp) {
                t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.
                t = t._dp;
            }
        }
        timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
    }
}, _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _round(position + child._delay);
    child._end = _round(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
    timeline._recent = child;
    skipChecks || _postAddChecks(timeline, child);
    return timeline;
}, _scrollTrigger = function _scrollTrigger(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
}, _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
    _initTween(tween, totalTime);
    if (!tween._initted) {
        return 1;
    }
    if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
        _lazyTweens.push(tween);
        tween._lazy = [totalTime, suppressEvents];
        return 1;
    }
}, _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && prevRatio && !tween._start && tween._zTime > _tinyNum && !tween._dp._lock || (tween._ts < 0 || tween._dp._ts < 0) && tween.data !== "isFromStart" && tween.data !== "isStart" ? 0 : 1, 
    // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0. Also, if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0.
    repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
        // in case there's a zero-duration tween that has a repeat with a repeatDelay
        tTime = _clamp(0, tween._tDur, totalTime);
        iteration = _animationCycle(tTime, repeatDelay);
        prevIteration = _animationCycle(tween._tTime, repeatDelay);
        if (iteration !== prevIteration) {
            prevRatio = 1 - ratio;
            tween.vars.repeatRefresh && tween._initted && tween.invalidate();
        }
    }
    if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
        if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) {
            // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
            return;
        }
        prevIteration = tween._zTime;
        tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
        suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.
        tween.ratio = ratio;
        tween._from && (ratio = 1 - ratio);
        tween._time = 0;
        tween._tTime = tTime;
        suppressEvents || _callback(tween, "onStart");
        pt = tween._pt;
        while (pt) {
            pt.r(ratio, pt.d);
            pt = pt._next;
        }
        tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
        tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
        tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
        if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
            ratio && _removeFromParent(tween, 1);
            if (!suppressEvents) {
                _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
                tween._prom && tween._prom();
            }
        }
    }
    else if (!tween._zTime) {
        tween._zTime = totalTime;
    }
}, _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
        child = animation._first;
        while (child && child._start <= time) {
            if (!child._dur && child.data === "isPause" && child._start > prevTime) {
                return child;
            }
            child = child._next;
        }
    }
    else {
        child = animation._last;
        while (child && child._start >= time) {
            if (!child._dur && child.data === "isPause" && child._start < prevTime) {
                return child;
            }
            child = child._prev;
        }
    }
}, _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _round(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _round(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
}, _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
}, _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc
}, _parsePosition = function _parsePosition(animation, position) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, 
    //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
    i, offset;
    if (_isString(position) && (isNaN(position) || position in labels)) {
        //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
        i = position.charAt(0);
        if (i === "<" || i === ">") {
            return (i === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0);
        }
        i = position.indexOf("=");
        if (i < 0) {
            position in labels || (labels[position] = clippedDuration);
            return labels[position];
        }
        offset = +(position.charAt(i - 1) + position.substr(i + 1));
        return i > 1 ? _parsePosition(animation, position.substr(0, i - 1)) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
}, _conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
}, _clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
}, getUnit = function getUnit(value) {
    return (value = (value + "").substr((parseFloat(value) + "").length)) && isNaN(value) ? value : "";
}, 
// note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
    return _conditionalReturn(value, function (v) {
        return _clamp(min, max, v);
    });
}, _slice = [].slice, _isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
}, _flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) {
        accumulator = [];
    }
    return ar.forEach(function (value) {
        var _accumulator;
        return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
}, 
//takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, leaveStrings) {
    return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call(_doc.querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [value] : [];
}, shuffle = function shuffle(a) {
    return a.sort(function () {
        return .5 - Math.random();
    });
}, 
// alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
    if (_isFunction(v)) {
        return v;
    }
    var vars = _isObject(v) ? v : {
        each: v
    }, 
    //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
    ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) {
        ratioX = ratioY = {
            center: .5,
            edges: .5,
            end: 1
        }[from] || 0;
    }
    else if (!isDecimal && ratios) {
        ratioX = from[0];
        ratioY = from[1];
    }
    return function (i, target, a) {
        var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
        if (!distances) {
            wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [1, _bigNum])[1];
            if (!wrapAt) {
                max = -_bigNum;
                while (max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l) { }
                wrapAt--;
            }
            distances = cache[l] = [];
            originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
            originY = ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
            max = 0;
            min = _bigNum;
            for (j = 0; j < l; j++) {
                x = j % wrapAt - originX;
                y = originY - (j / wrapAt | 0);
                distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
                d > max && (max = d);
                d < min && (min = d);
            }
            from === "random" && shuffle(distances);
            distances.max = max - min;
            distances.min = min;
            distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
            distances.b = l < 0 ? base - l : base;
            distances.u = getUnit(vars.amount || vars.each) || 0; //unit
            ease = ease && l < 0 ? _invertEase(ease) : ease;
        }
        l = (distances[i] - distances.min) / distances.max || 0;
        return _round(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
    };
}, _roundModifier = function _roundModifier(v) {
    //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
    var p = v < 1 ? Math.pow(10, (v + "").length - 2) : 1; //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed()
    return function (raw) {
        return Math.floor(Math.round(parseFloat(raw) / v) * v * p) / p + (_isNumber(raw) ? 0 : getUnit(raw));
    };
}, snap = function snap(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
        radius = isArray = snapTo.radius || _bigNum;
        if (snapTo.values) {
            snapTo = toArray(snapTo.values);
            if (is2D = !_isNumber(snapTo[0])) {
                radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
            }
        }
        else {
            snapTo = _roundModifier(snapTo.increment);
        }
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function (raw) {
        is2D = snapTo(raw);
        return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function (raw) {
        var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
        while (i--) {
            if (is2D) {
                dx = snapTo[i].x - x;
                dy = snapTo[i].y - y;
                dx = dx * dx + dy * dy;
            }
            else {
                dx = Math.abs(snapTo[i] - x);
            }
            if (dx < min) {
                min = dx;
                closest = i;
            }
        }
        closest = !radius || min <= radius ? snapTo[closest] : raw;
        return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
}, random = function random(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? !!(roundingIncrement = 0) : !returnFunction, function () {
        return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5) && (returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min + Math.random() * (max - min)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
}, pipe = function pipe() {
    for (var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++) {
        functions[_key] = arguments[_key];
    }
    return function (value) {
        return functions.reduce(function (v, f) {
            return f(v);
        }, value);
    };
}, unitize = function unitize(func, unit) {
    return function (value) {
        return func(parseFloat(value)) + (unit || getUnit(value));
    };
}, normalize = function normalize(min, max, value) {
    return mapRange(min, max, 0, 1, value);
}, _wrapArray = function _wrapArray(a, wrapper, value) {
    return _conditionalReturn(value, function (index) {
        return a[~~wrapper(index)];
    });
}, wrap = function wrap(min, max, value) {
    // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap(0, min.length), max) : _conditionalReturn(value, function (value) {
        return (range + (value - min) % range) % range + min;
    });
}, wrapYoyo = function wrapYoyo(min, max, value) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo(0, min.length - 1), max) : _conditionalReturn(value, function (value) {
        value = (total + (value - min) % total) % total || 0;
        return min + (value > range ? total - value : value);
    });
}, _replaceRandom = function _replaceRandom(value) {
    //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
    var prev = 0, s = "", i, nums, end, isArray;
    while (~(i = value.indexOf("random(", prev))) {
        end = value.indexOf(")", i);
        isArray = value.charAt(i + 7) === "[";
        nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
        s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
        prev = end + 1;
    }
    return s + value.substr(prev, value.length - prev);
}, mapRange = function mapRange(inMin, inMax, outMin, outMax, value) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value, function (value) {
        return outMin + ((value - inMin) / inRange * outRange || 0);
    });
}, interpolate = function interpolate(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function (p) {
        return (1 - p) * start + p * end;
    };
    if (!func) {
        var isString = _isString(start), master = {}, p, i, interpolators, l, il;
        progress === true && (mutate = 1) && (progress = null);
        if (isString) {
            start = {
                p: start
            };
            end = {
                p: end
            };
        }
        else if (_isArray(start) && !_isArray(end)) {
            interpolators = [];
            l = start.length;
            il = l - 2;
            for (i = 1; i < l; i++) {
                interpolators.push(interpolate(start[i - 1], start[i])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
            }
            l--;
            func = function func(p) {
                p *= l;
                var i = Math.min(il, ~~p);
                return interpolators[i](p - i);
            };
            progress = end;
        }
        else if (!mutate) {
            start = _merge(_isArray(start) ? [] : {}, start);
        }
        if (!interpolators) {
            for (p in end) {
                _addPropTween.call(master, start, p, "get", end[p]);
            }
            func = function func(p) {
                return _renderPropTweens(p, master) || (isString ? start.p : start);
            };
        }
    }
    return _conditionalReturn(progress, func);
}, _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    //used for nextLabel() and previousLabel()
    var labels = timeline.labels, min = _bigNum, p, distance, label;
    for (p in labels) {
        distance = labels[p] - fromTime;
        if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
            label = p;
            min = distance;
        }
    }
    return label;
}, _callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], params, scope;
    if (!callback) {
        return;
    }
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
    return params ? callback.apply(scope, params) : callback.call(scope);
}, _interrupt = function _interrupt(animation) {
    _removeFromParent(animation);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
}, _quickTween, _createPlugin = function _createPlugin(config) {
    config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.
    var name = config.name, isFunc = _isFunction(config), Plugin = name && !isFunc && config.init ? function () {
        this._props = [];
    } : config, 
    //in case someone passes in an object that's not a plugin, like CustomEase
    instanceDefaults = {
        init: _emptyFunc,
        render: _renderPropTweens,
        add: _addPropTween,
        kill: _killPropTweensOf,
        modifier: _addPluginModifier,
        rawVars: 0
    }, statics = {
        targetTest: 0,
        get: 0,
        getSetter: _getSetter,
        aliases: {},
        register: 0
    };
    _wake();
    if (config !== Plugin) {
        if (_plugins[name]) {
            return;
        }
        _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods
        _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods
        _plugins[Plugin.prop = name] = Plugin;
        if (config.targetTest) {
            _harnessPlugins.push(Plugin);
            _reservedProps[name] = 1;
        }
        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
    }
    _addGlobal(name, Plugin);
    config.register && config.register(gsap, Plugin, PropTween);
}, 
/*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */
_255 = 255, _colorLookup = {
    aqua: [0, _255, _255],
    lime: [0, _255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, _255],
    navy: [0, 0, 128],
    white: [_255, _255, _255],
    olive: [128, 128, 0],
    yellow: [_255, _255, 0],
    orange: [_255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [_255, 0, 0],
    pink: [_255, 192, 203],
    cyan: [0, _255, _255],
    transparent: [_255, _255, _255, 0]
}, _hue = function _hue(h, m1, m2) {
    h = h < 0 ? h + 1 : h > 1 ? h - 1 : h;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
}, splitColor = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [v >> 16, v >> 8 & _255, v & _255] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
    if (!a) {
        if (v.substr(-1) === ",") {
            //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
            v = v.substr(0, v.length - 1);
        }
        if (_colorLookup[v]) {
            a = _colorLookup[v];
        }
        else if (v.charAt(0) === "#") {
            if (v.length === 4) {
                //for shorthand like #9F0
                r = v.charAt(1);
                g = v.charAt(2);
                b = v.charAt(3);
                v = "#" + r + r + g + g + b + b;
            }
            v = parseInt(v.substr(1), 16);
            a = [v >> 16, v >> 8 & _255, v & _255];
        }
        else if (v.substr(0, 3) === "hsl") {
            a = wasHSL = v.match(_strictNumExp);
            if (!toHSL) {
                h = +a[0] % 360 / 360;
                s = +a[1] / 100;
                l = +a[2] / 100;
                g = l <= .5 ? l * (s + 1) : l + s - l * s;
                r = l * 2 - g;
                a.length > 3 && (a[3] *= 1); //cast as number
                a[0] = _hue(h + 1 / 3, r, g);
                a[1] = _hue(h, r, g);
                a[2] = _hue(h - 1 / 3, r, g);
            }
            else if (~v.indexOf("=")) {
                //if relative values are found, just return the raw strings with the relative prefixes in place.
                a = v.match(_numExp);
                forceAlpha && a.length < 4 && (a[3] = 1);
                return a;
            }
        }
        else {
            a = v.match(_strictNumExp) || _colorLookup.transparent;
        }
        a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
        r = a[0] / _255;
        g = a[1] / _255;
        b = a[2] / _255;
        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        l = (max + min) / 2;
        if (max === min) {
            h = s = 0;
        }
        else {
            d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
            h *= 60;
        }
        a[0] = ~~(h + .5);
        a[1] = ~~(s * 100 + .5);
        a[2] = ~~(l * 100 + .5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
}, _colorOrderData = function _colorOrderData(v) {
    // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
    var values = [], c = [], i = -1;
    v.split(_colorExp).forEach(function (v) {
        var a = v.match(_numWithUnitExp) || [];
        values.push.apply(values, a);
        c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
}, _formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
    if (!colors) {
        return s;
    }
    colors = colors.map(function (color) {
        return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
        d = _colorOrderData(s);
        c = orderMatchData.c;
        if (c.join(result) !== d.c.join(result)) {
            shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
            l = shell.length - 1;
            for (; i < l; i++) {
                result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
            }
        }
    }
    if (!shell) {
        shell = s.split(_colorExp);
        l = shell.length - 1;
        for (; i < l; i++) {
            result += shell[i] + colors[i];
        }
    }
    return result + shell[l];
}, _colorExp = function () {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b", 
    //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
    p;
    for (p in _colorLookup) {
        s += "|" + p + "\\b";
    }
    return new RegExp(s + ")", "gi");
}(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
        toHSL = _hslExp.test(combined);
        a[1] = _formatColors(a[1], toHSL);
        a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.
        return true;
    }
}, 
/*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */
_tickerActive, _ticker = function () {
    var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1000 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick = function _tick(v) {
        var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
        elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
        _lastUpdate += elapsed;
        time = _lastUpdate - _startTime;
        overlap = time - _nextTime;
        if (overlap > 0 || manual) {
            frame = ++_self.frame;
            _delta = time - _self.time * 1000;
            _self.time = time = time / 1000;
            _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
            dispatch = 1;
        }
        manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
        if (dispatch) {
            for (_i = 0; _i < _listeners.length; _i++) {
                // use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
                _listeners[_i](time, _delta, frame, v);
            }
        }
    };
    _self = {
        time: 0,
        frame: 0,
        tick: function tick() {
            _tick(true);
        },
        deltaRatio: function deltaRatio(fps) {
            return _delta / (1000 / (fps || 60));
        },
        wake: function wake() {
            if (_coreReady) {
                if (!_coreInitted && _windowExists()) {
                    _win = _coreInitted = window;
                    _doc = _win.document || {};
                    _globals.gsap = gsap;
                    (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
                    _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
                    _raf = _win.requestAnimationFrame;
                }
                _id && _self.sleep();
                _req = _raf || function (f) {
                    return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
                };
                _tickerActive = 1;
                _tick(2);
            }
        },
        sleep: function sleep() {
            (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
            _tickerActive = 0;
            _req = _emptyFunc;
        },
        lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
            _lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited
            _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
        },
        fps: function fps(_fps) {
            _gap = 1000 / (_fps || 240);
            _nextTime = _self.time * 1000 + _gap;
        },
        add: function add(callback) {
            _listeners.indexOf(callback) < 0 && _listeners.push(callback);
            _wake();
        },
        remove: function remove(callback) {
            var i;
            ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
        },
        _listeners: _listeners
    };
    return _self;
}(), _wake = function _wake() {
    return !_tickerActive && _ticker.wake();
}, 
//also ensures the core classes are initialized.
/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/
_easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString(value) {
    //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
    for (; i < l; i++) {
        val = split[i];
        index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
        parsedVal = val.substr(0, index);
        obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
        key = val.substr(index + 1).trim();
    }
    return obj;
}, _valueInParentheses = function _valueInParentheses(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
}, _configEaseFromString = function _configEaseFromString(name) {
    //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
    var split = (name + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [_parseObjectInString(split[1])] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
}, _invertEase = function _invertEase(ease) {
    return function (p) {
        return 1 - ease(1 - p);
    };
}, 
// allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase(timeline, isYoyo) {
    var child = timeline._first, ease;
    while (child) {
        if (child instanceof Timeline) {
            _propagateYoyoEase(child, isYoyo);
        }
        else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
            if (child.timeline) {
                _propagateYoyoEase(child.timeline, isYoyo);
            }
            else {
                ease = child._ease;
                child._ease = child._yEase;
                child._yEase = ease;
                child._yoyo = isYoyo;
            }
        }
        child = child._next;
    }
}, _parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
}, _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) {
        easeOut = function easeOut(p) {
            return 1 - easeIn(1 - p);
        };
    }
    if (easeInOut === void 0) {
        easeInOut = function easeInOut(p) {
            return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
        };
    }
    var ease = {
        easeIn: easeIn,
        easeOut: easeOut,
        easeInOut: easeInOut
    }, lowercaseName;
    _forEachName(names, function (name) {
        _easeMap[name] = _globals[name] = ease;
        _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
        for (var p in ease) {
            _easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
        }
    });
    return ease;
}, _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function (p) {
        return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
    };
}, _configElastic = function _configElastic(type, amplitude, period) {
    var p1 = amplitude >= 1 ? amplitude : 1, 
    //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
    p2 = (period || (type ? .3 : .45)) / (amplitude < 1 ? amplitude : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
        return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function (p) {
        return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2; //precalculate to optimize
    ease.config = function (amplitude, period) {
        return _configElastic(type, amplitude, period);
    };
    return ease;
}, _configBack = function _configBack(type, overshoot) {
    if (overshoot === void 0) {
        overshoot = 1.70158;
    }
    var easeOut = function easeOut(p) {
        return p ? --p * p * ((overshoot + 1) * p + overshoot) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function (p) {
        return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    ease.config = function (overshoot) {
        return _configBack(type, overshoot);
    };
    return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };
_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function (name, i) {
    var power = i < 5 ? i + 1 : i;
    _insertEase(name + ",Power" + (power - 1), i ? function (p) {
        return Math.pow(p, power);
    } : function (p) {
        return p;
    }, function (p) {
        return 1 - Math.pow(1 - p, power);
    }, function (p) {
        return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function (n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
        return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
    };
    _insertEase("Bounce", function (p) {
        return 1 - easeOut(1 - p);
    }, easeOut);
})(7.5625, 2.75);
_insertEase("Expo", function (p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
});
_insertEase("Circ", function (p) {
    return -(_sqrt(1 - p * p) - 1);
});
_insertEase("Sine", function (p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
        if (steps === void 0) {
            steps = 1;
        }
        var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
        return function (p) {
            return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
        };
    }
};
_defaults.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (name) {
    return _callbackNames += name + "," + name + "Params,";
});
/*
 * --------------------------------------------------------------------------------------
 * CACHE
 * --------------------------------------------------------------------------------------
 */
var GSCache = function GSCache(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
};
/*
 * --------------------------------------------------------------------------------------
 * ANIMATION
 * --------------------------------------------------------------------------------------
 */
var Animation = /*#__PURE__*/ function () {
    function Animation(vars, time) {
        var parent = vars.parent || _globalTimeline;
        this.vars = vars;
        this._delay = +vars.delay || 0;
        if (this._repeat = vars.repeat || 0) {
            this._rDelay = vars.repeatDelay || 0;
            this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
        }
        this._ts = 1;
        _setDuration(this, +vars.duration, 1, 1);
        this.data = vars.data;
        _tickerActive || _ticker.wake();
        parent && _addToTimeline(parent, this, time || time === 0 ? time : parent._time, 1);
        vars.reversed && this.reverse();
        vars.paused && this.paused(true);
    }
    var _proto = Animation.prototype;
    _proto.delay = function delay(value) {
        if (value || value === 0) {
            this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
            this._delay = value;
            return this;
        }
        return this._delay;
    };
    _proto.duration = function duration(value) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
        if (!arguments.length) {
            return this._tDur;
        }
        this._dirty = 0;
        return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
        _wake();
        if (!arguments.length) {
            return this._tTime;
        }
        var parent = this._dp;
        if (parent && parent.smoothChildTiming && this._ts) {
            _alignPlayhead(this, _totalTime); //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.
            while (parent.parent) {
                if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) {
                    parent.totalTime(parent._tTime, true);
                }
                parent = parent.parent;
            }
            if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) {
                //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
                _addToTimeline(this._dp, this, this._start - this._delay);
            }
        }
        if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
            // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
            this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
            _lazySafeRender(this, _totalTime, suppressEvents);
        }
        return this;
    };
    _proto.time = function time(value, suppressEvents) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % this._dur || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };
    _proto.progress = function progress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
        var cycleDuration = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    } // potential future addition:
    ;
    _proto.timeScale = function timeScale(value) {
        if (!arguments.length) {
            return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
        }
        if (this._rts === value) {
            return this;
        }
        var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
        // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.
        this._rts = +value || 0;
        this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.
        return _recacheAncestors(this.totalTime(_clamp(-this._delay, this._tDur, tTime), true));
    };
    _proto.paused = function paused(value) {
        if (!arguments.length) {
            return this._ps;
        }
        if (this._ps !== value) {
            this._ps = value;
            if (value) {
                this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.
                this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
            }
            else {
                _wake();
                this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.
                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && (this._tTime -= _tinyNum) && Math.abs(this._zTime) !== _tinyNum); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
            }
        }
        return this;
    };
    _proto.startTime = function startTime(value) {
        if (arguments.length) {
            this._start = value;
            var parent = this.parent || this._dp;
            parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
            return this;
        }
        return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
        return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
        var parent = this.parent || this._dp; // _dp = detatched parent
        return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.globalTime = function globalTime(rawTime) {
        var animation = this, time = arguments.length ? rawTime : animation.rawTime();
        while (animation) {
            time = animation._start + time / (animation._ts || 1);
            animation = animation._dp;
        }
        return time;
    };
    _proto.repeat = function repeat(value) {
        if (arguments.length) {
            this._repeat = value;
            return _onUpdateTotalDuration(this);
        }
        return this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
        if (arguments.length) {
            this._rDelay = value;
            return _onUpdateTotalDuration(this);
        }
        return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
        if (arguments.length) {
            this._yoyo = value;
            return this;
        }
        return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
        return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
        return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };
    _proto.play = function play(from, suppressEvents) {
        from != null && this.seek(from, suppressEvents);
        return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
        from != null && this.seek(from || this.totalDuration(), suppressEvents);
        return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
        atTime != null && this.seek(atTime, suppressEvents);
        return this.paused(true);
    };
    _proto.resume = function resume() {
        return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
        if (arguments.length) {
            !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.
            return this;
        }
        return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
        this._initted = 0;
        this._zTime = -_tinyNum;
        return this;
    };
    _proto.isActive = function isActive() {
        var parent = this.parent || this._dp, start = this._start, rawTime;
        return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
        var vars = this.vars;
        if (arguments.length > 1) {
            if (!callback) {
                delete vars[type];
            }
            else {
                vars[type] = callback;
                params && (vars[type + "Params"] = params);
                type === "onUpdate" && (this._onUpdate = callback);
            }
            return this;
        }
        return vars[type];
    };
    _proto.then = function then(onFulfilled) {
        var self = this;
        return new Promise(function (resolve) {
            var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve() {
                var _then = self.then;
                self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)
                _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
                resolve(f);
                self.then = _then;
            };
            if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) {
                _resolve();
            }
            else {
                self._prom = _resolve;
            }
        });
    };
    _proto.kill = function kill() {
        _interrupt(this);
    };
    return Animation;
}();
_setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
});
/*
 * -------------------------------------------------
 * TIMELINE
 * -------------------------------------------------
 */
var Timeline = /*#__PURE__*/ function (_Animation) {
    _inheritsLoose(Timeline, _Animation);
    function Timeline(vars, time) {
        var _this;
        if (vars === void 0) {
            vars = {};
        }
        _this = _Animation.call(this, vars, time) || this;
        _this.labels = {};
        _this.smoothChildTiming = !!vars.smoothChildTiming;
        _this.autoRemoveChildren = !!vars.autoRemoveChildren;
        _this._sort = _isNotFalse(vars.sortChildren);
        _this.parent && _postAddChecks(_this.parent, _assertThisInitialized(_this));
        vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
        return _this;
    }
    var _proto2 = Timeline.prototype;
    _proto2.to = function to(targets, vars, position) {
        new Tween(targets, _parseVars(arguments, 0, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
        return this;
    };
    _proto2.from = function from(targets, vars, position) {
        new Tween(targets, _parseVars(arguments, 1, this), _parsePosition(this, _isNumber(vars) ? arguments[3] : position));
        return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
        new Tween(targets, _parseVars(arguments, 2, this), _parsePosition(this, _isNumber(fromVars) ? arguments[4] : position));
        return this;
    };
    _proto2.set = function set(targets, vars, position) {
        vars.duration = 0;
        vars.parent = this;
        _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
        vars.immediateRender = !!vars.immediateRender;
        new Tween(targets, vars, _parsePosition(this, position), 1);
        return this;
    };
    _proto2.call = function call(callback, params, position) {
        return _addToTimeline(this, Tween.delayedCall(0, callback, params), _parsePosition(this, position));
    } //ONLY for backward compatibility! Maybe delete?
    ;
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.duration = duration;
        vars.stagger = vars.stagger || stagger;
        vars.onComplete = onCompleteAll;
        vars.onCompleteParams = onCompleteAllParams;
        vars.parent = this;
        new Tween(targets, vars, _parsePosition(this, position));
        return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.runBackwards = 1;
        _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
        return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
        toVars.startAt = fromVars;
        _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
        return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = this !== _globalTimeline && totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
        if (tTime !== this._tTime || force || crossingStart) {
            if (prevTime !== this._time && dur) {
                //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
                tTime += this._time - prevTime;
                totalTime += this._time - prevTime;
            }
            time = tTime;
            prevStart = this._start;
            timeScale = this._ts;
            prevPaused = !timeScale;
            if (crossingStart) {
                dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
                (totalTime || !suppressEvents) && (this._zTime = totalTime);
            }
            if (this._repeat) {
                //adjust the time for repeats and yoyos
                yoyo = this._yoyo;
                cycleDuration = dur + this._rDelay;
                time = _round(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                if (tTime === tDur) {
                    // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                    iteration = this._repeat;
                    time = dur;
                }
                else {
                    iteration = ~~(tTime / cycleDuration);
                    if (iteration && iteration === tTime / cycleDuration) {
                        time = dur;
                        iteration--;
                    }
                    time > dur && (time = dur);
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005
                if (yoyo && iteration & 1) {
                    time = dur - time;
                    isYoyo = 1;
                }
                /*
                make sure children at the end/beginning of the timeline are rendered properly. If, for example,
                a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
                would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
                could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
                we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
                ensure that zero-duration tweens at the very beginning or end of the Timeline work.
                */
                if (iteration !== prevIteration && !this._lock) {
                    var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                    iteration < prevIteration && (rewinding = !rewinding);
                    prevTime = rewinding ? 0 : dur;
                    this._lock = 1;
                    this.render(prevTime || (isYoyo ? 0 : _round(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                    !suppressEvents && this.parent && _callback(this, "onRepeat");
                    this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                    if (prevTime !== this._time || prevPaused !== !this._ts) {
                        return this;
                    }
                    dur = this._dur; // in case the duration changed in the onRepeat
                    tDur = this._tDur;
                    if (doesWrap) {
                        this._lock = 2;
                        prevTime = rewinding ? dur : -0.0001;
                        this.render(prevTime, true);
                        this.vars.repeatRefresh && !isYoyo && this.invalidate();
                    }
                    this._lock = 0;
                    if (!this._ts && !prevPaused) {
                        return this;
                    } //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.
                    _propagateYoyoEase(this, isYoyo);
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2) {
                pauseTween = _findNextPauseTween(this, _round(prevTime), _round(time));
                if (pauseTween) {
                    tTime -= time - (time = pauseTween._start);
                }
            }
            this._tTime = tTime;
            this._time = time;
            this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
            if (!this._initted) {
                this._onUpdate = this.vars.onUpdate;
                this._initted = 1;
                this._zTime = totalTime;
            }
            !prevTime && time && !suppressEvents && _callback(this, "onStart");
            if (time >= prevTime && totalTime >= 0) {
                child = this._first;
                while (child) {
                    next = child._next;
                    if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                        if (child.parent !== this) {
                            // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                            return this.render(totalTime, suppressEvents, force);
                        }
                        child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                        if (time !== this._time || !this._ts && !prevPaused) {
                            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                            pauseTween = 0;
                            next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)
                            break;
                        }
                    }
                    child = next;
                }
            }
            else {
                child = this._last;
                var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.
                while (child) {
                    next = child._prev;
                    if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                        if (child.parent !== this) {
                            // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                            return this.render(totalTime, suppressEvents, force);
                        }
                        child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);
                        if (time !== this._time || !this._ts && !prevPaused) {
                            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                            pauseTween = 0;
                            next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)
                            break;
                        }
                    }
                    child = next;
                }
            }
            if (pauseTween && !suppressEvents) {
                this.pause();
                pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
                if (this._ts) {
                    //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
                    this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.
                    _setEnd(this);
                    return this.render(totalTime, suppressEvents, force);
                }
            }
            this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
            if (tTime === tDur && tDur >= this.totalDuration() || !tTime && prevTime)
                if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts))
                    if (!this._lock) {
                        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
                            _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                        }
                    }
        }
        return this;
    };
    _proto2.add = function add(child, position) {
        var _this2 = this;
        if (!_isNumber(position)) {
            position = _parsePosition(this, position);
        }
        if (!(child instanceof Animation)) {
            if (_isArray(child)) {
                child.forEach(function (obj) {
                    return _this2.add(obj, position);
                });
                return this;
            }
            if (_isString(child)) {
                return this.addLabel(child, position);
            }
            if (_isFunction(child)) {
                child = Tween.delayedCall(0, child);
            }
            else {
                return this;
            }
        }
        return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
        if (nested === void 0) {
            nested = true;
        }
        if (tweens === void 0) {
            tweens = true;
        }
        if (timelines === void 0) {
            timelines = true;
        }
        if (ignoreBeforeTime === void 0) {
            ignoreBeforeTime = -_bigNum;
        }
        var a = [], child = this._first;
        while (child) {
            if (child._start >= ignoreBeforeTime) {
                if (child instanceof Tween) {
                    tweens && a.push(child);
                }
                else {
                    timelines && a.push(child);
                    nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
                }
            }
            child = child._next;
        }
        return a;
    };
    _proto2.getById = function getById(id) {
        var animations = this.getChildren(1, 1, 1), i = animations.length;
        while (i--) {
            if (animations[i].vars.id === id) {
                return animations[i];
            }
        }
    };
    _proto2.remove = function remove(child) {
        if (_isString(child)) {
            return this.removeLabel(child);
        }
        if (_isFunction(child)) {
            return this.killTweensOf(child);
        }
        _removeLinkedListItem(this, child);
        if (child === this._recent) {
            this._recent = this._last;
        }
        return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
        if (!arguments.length) {
            return this._tTime;
        }
        this._forcing = 1;
        if (!this._dp && this._ts) {
            //special case for the global timeline (or any other that has no parent or detached parent).
            this._start = _round(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
        }
        _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
        this._forcing = 0;
        return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
        this.labels[label] = _parsePosition(this, position);
        return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
        delete this.labels[label];
        return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
        var t = Tween.delayedCall(0, callback || _emptyFunc, params);
        t.data = "isPause";
        this._hasPause = 1;
        return _addToTimeline(this, t, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
        var child = this._first;
        position = _parsePosition(this, position);
        while (child) {
            if (child._start === position && child.data === "isPause") {
                _removeFromParent(child);
            }
            child = child._next;
        }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
        while (i--) {
            _overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
        }
        return this;
    };
    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
        var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), 
        // a number is interpreted as a global time. If the animation spans
        children;
        while (child) {
            if (child instanceof Tween) {
                if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) {
                    // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
                    a.push(child);
                }
            }
            else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) {
                a.push.apply(a, children);
            }
            child = child._next;
        }
        return a;
    };
    _proto2.tweenTo = function tweenTo(position, vars) {
        vars = vars || {};
        var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, tween = Tween.to(tl, _setDefaults(vars, {
            ease: "none",
            lazy: false,
            time: endTime,
            overwrite: "auto",
            duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
            onStart: function onStart() {
                tl.pause();
                var duration = vars.duration || Math.abs((endTime - tl._time) / tl.timeScale());
                tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
            }
        }));
        return tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
        return this.tweenTo(toPosition, _setDefaults({
            startAt: {
                time: _parsePosition(this, fromPosition)
            }
        }, vars));
    };
    _proto2.recent = function recent() {
        return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
        if (afterTime === void 0) {
            afterTime = this._time;
        }
        return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
        if (beforeTime === void 0) {
            beforeTime = this._time;
        }
        return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
        return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
        if (ignoreBeforeTime === void 0) {
            ignoreBeforeTime = 0;
        }
        var child = this._first, labels = this.labels, p;
        while (child) {
            if (child._start >= ignoreBeforeTime) {
                child._start += amount;
                child._end += amount;
            }
            child = child._next;
        }
        if (adjustLabels) {
            for (p in labels) {
                if (labels[p] >= ignoreBeforeTime) {
                    labels[p] += amount;
                }
            }
        }
        return _uncache(this);
    };
    _proto2.invalidate = function invalidate() {
        var child = this._first;
        this._lock = 0;
        while (child) {
            child.invalidate();
            child = child._next;
        }
        return _Animation.prototype.invalidate.call(this);
    };
    _proto2.clear = function clear(includeLabels) {
        if (includeLabels === void 0) {
            includeLabels = true;
        }
        var child = this._first, next;
        while (child) {
            next = child._next;
            this.remove(child);
            child = next;
        }
        this._time = this._tTime = this._pTime = 0;
        includeLabels && (this.labels = {});
        return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
        var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
        if (arguments.length) {
            return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
        }
        if (self._dirty) {
            parent = self.parent;
            while (child) {
                prev = child._prev; //record it here in case the tween changes position in the sequence...
                child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.
                start = child._start;
                if (start > prevStart && self._sort && child._ts && !self._lock) {
                    //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
                    self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().
                    _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
                }
                else {
                    prevStart = start;
                }
                if (start < 0 && child._ts) {
                    //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
                    max -= start;
                    if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                        self._start += start / self._ts;
                        self._time -= start;
                        self._tTime -= start;
                    }
                    self.shiftChildren(-start, false, -1e999);
                    prevStart = 0;
                }
                child._end > max && child._ts && (max = child._end);
                child = prev;
            }
            _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
            self._dirty = 0;
        }
        return self._tDur;
    };
    Timeline.updateRoot = function updateRoot(time) {
        if (_globalTimeline._ts) {
            _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
            _lastRenderedFrame = _ticker.frame;
        }
        if (_ticker.frame >= _nextGCFrame) {
            _nextGCFrame += _config.autoSleep || 120;
            var child = _globalTimeline._first;
            if (!child || !child._ts)
                if (_config.autoSleep && _ticker._listeners.length < 2) {
                    while (child && !child._ts) {
                        child = child._next;
                    }
                    child || _ticker.sleep();
                }
        }
    };
    return Timeline;
}(Animation);
_setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += ""; //ensure values are strings
    end += "";
    if (hasRandom = ~end.indexOf("random(")) {
        end = _replaceRandom(end);
    }
    if (stringFilter) {
        a = [start, end];
        stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
        start = a[0];
        end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while (result = _complexStringNumExp.exec(end)) {
        endNum = result[0];
        chunk = end.substring(index, result.index);
        if (color) {
            color = (color + 1) % 5;
        }
        else if (chunk.substr(-5) === "rgba(") {
            color = 1;
        }
        if (endNum !== startNums[matchIndex++]) {
            startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
            pt._pt = {
                _next: pt._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                s: startNum,
                c: endNum.charAt(1) === "=" ? parseFloat(endNum.substr(2)) * (endNum.charAt(0) === "-" ? -1 : 1) : parseFloat(endNum) - startNum,
                m: color && color < 4 ? Math.round : 0
            };
            index = _complexStringNumExp.lastIndex;
        }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) {
        pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    }
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    return pt;
}, _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
        if (~end.indexOf("random(")) {
            end = _replaceRandom(end);
        }
        if (end.charAt(1) === "=") {
            end = parseFloat(parsedStart) + parseFloat(end.substr(2)) * (end.charAt(0) === "-" ? -1 : 1) + (getUnit(parsedStart) || 0);
        }
    }
    if (parsedStart !== end) {
        if (!isNaN(parsedStart * end)) {
            pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
            funcParam && (pt.fp = funcParam);
            modifier && pt.modifier(modifier, this, target);
            return this._pt = pt;
        }
        !currentValue && !(prop in target) && _missingPlugin(prop, end);
        return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
}, 
//creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) {
        return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    }
    var copy = {}, p;
    for (p in vars) {
        copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    }
    return copy;
}, _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
        if (tween !== _quickTween) {
            ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.
            i = plugin._props.length;
            while (i--) {
                ptLookup[plugin._props[i]] = pt;
            }
        }
    }
    return plugin;
}, _overwritingTween, 
//store a reference temporarily so we can avoid overwriting itself.
_initTween = function _initTween(tween, time) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets, autoOverwrite = tween._overwrite === "auto", tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
        //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
        yoyoEase = tween._yEase;
        tween._yEase = tween._ease;
        tween._ease = yoyoEase;
    }
    if (!tl) {
        //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
        harness = targets[0] ? _getCache(targets[0]).harness : 0;
        harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.
        cleanVars = _copyExcluding(vars, _reservedProps);
        prevStartAt && prevStartAt.render(-1, true).kill();
        if (startAt) {
            _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
                data: "isStart",
                overwrite: false,
                parent: parent,
                immediateRender: true,
                lazy: _isNotFalse(lazy),
                startAt: null,
                delay: 0,
                onUpdate: onUpdate,
                onUpdateParams: onUpdateParams,
                callbackScope: callbackScope,
                stagger: 0
            }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);
            if (immediateRender) {
                if (time > 0) {
                    autoRevert || (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.
                }
                else if (dur && !(time < 0 && prevStartAt)) {
                    time && (tween._zTime = time);
                    return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
                }
            }
        }
        else if (runBackwards && dur) {
            //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
            if (prevStartAt) {
                !autoRevert && (tween._startAt = 0);
            }
            else {
                time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
                p = _setDefaults({
                    overwrite: false,
                    data: "isFromStart",
                    //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                    lazy: immediateRender && _isNotFalse(lazy),
                    immediateRender: immediateRender,
                    //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                    stagger: 0,
                    parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})
                }, cleanVars);
                harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})
                _removeFromParent(tween._startAt = Tween.set(targets, p));
                if (!immediateRender) {
                    _initTween(tween._startAt, _tinyNum); //ensures that the initial values are recorded
                }
                else if (!time) {
                    return;
                }
            }
        }
        tween._pt = 0;
        lazy = dur && _isNotFalse(lazy) || lazy && !dur;
        for (i = 0; i < targets.length; i++) {
            target = targets[i];
            gsData = target._gsap || _harness(targets)[i]._gsap;
            tween._ptLookup[i] = ptLookup = {};
            _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
            index = fullTargets === targets ? i : fullTargets.indexOf(target);
            if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
                tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
                plugin._props.forEach(function (name) {
                    ptLookup[name] = pt;
                });
                plugin.priority && (hasPriority = 1);
            }
            if (!harness || harnessVars) {
                for (p in cleanVars) {
                    if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) {
                        plugin.priority && (hasPriority = 1);
                    }
                    else {
                        ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
                    }
                }
            }
            tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
            if (autoOverwrite && tween._pt) {
                _overwritingTween = tween;
                _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(0)); //Also make sure the overwriting doesn't overwrite THIS tween!!!
                overwritten = !tween.parent;
                _overwritingTween = 0;
            }
            tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
        }
        hasPriority && _sortPropTweensByPriority(tween);
        tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
    }
    tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.
}, _addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
    if (!propertyAliases) {
        return vars;
    }
    copy = _merge({}, vars);
    for (p in propertyAliases) {
        if (p in copy) {
            aliases = propertyAliases[p].split(",");
            i = aliases.length;
            while (i--) {
                copy[aliases[i]] = copy[p];
            }
        }
    }
    return copy;
}, _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
}, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase", _staggerPropsToSkip = (_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger").split(",");
/*
 * --------------------------------------------------------------------------------------
 * TWEEN
 * --------------------------------------------------------------------------------------
 */
var Tween = /*#__PURE__*/ function (_Animation2) {
    _inheritsLoose(Tween, _Animation2);
    function Tween(targets, vars, time, skipInherit) {
        var _this3;
        if (typeof vars === "number") {
            time.duration = vars;
            vars = time;
            time = null;
        }
        _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars), time) || this;
        var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = _this3.parent, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [targets] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
        _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
        _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property
        _this3._overwrite = overwrite;
        if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
            vars = _this3.vars;
            tl = _this3.timeline = new Timeline({
                data: "nested",
                defaults: defaults || {}
            });
            tl.kill();
            tl.parent = _assertThisInitialized(_this3);
            if (keyframes) {
                _setDefaults(tl.vars.defaults, {
                    ease: "none"
                });
                keyframes.forEach(function (frame) {
                    return tl.to(parsedTargets, frame, ">");
                });
            }
            else {
                l = parsedTargets.length;
                staggerFunc = stagger ? distribute(stagger) : _emptyFunc;
                if (_isObject(stagger)) {
                    //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
                    for (p in stagger) {
                        if (~_staggerTweenProps.indexOf(p)) {
                            staggerVarsToMerge || (staggerVarsToMerge = {});
                            staggerVarsToMerge[p] = stagger[p];
                        }
                    }
                }
                for (i = 0; i < l; i++) {
                    copy = {};
                    for (p in vars) {
                        if (_staggerPropsToSkip.indexOf(p) < 0) {
                            copy[p] = vars[p];
                        }
                    }
                    copy.stagger = 0;
                    yoyoEase && (copy.yoyoEase = yoyoEase);
                    staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                    curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.
                    copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                    copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                    if (!stagger && l === 1 && copy.delay) {
                        // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
                        _this3._delay = delay = copy.delay;
                        _this3._start += delay;
                        copy.delay = 0;
                    }
                    tl.to(curTarget, copy, staggerFunc(i, curTarget, parsedTargets));
                }
                tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
            }
            duration || _this3.duration(duration = tl.duration());
        }
        else {
            _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
        }
        if (overwrite === true) {
            _overwritingTween = _assertThisInitialized(_this3);
            _globalTimeline.killTweensOf(parsedTargets);
            _overwritingTween = 0;
        }
        parent && _postAddChecks(parent, _assertThisInitialized(_this3));
        if (immediateRender || !duration && !keyframes && _this3._start === _round(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
            _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
            _this3.render(Math.max(0, -delay)); //in case delay is negative
        }
        scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
        return _this3;
    }
    var _proto3 = Tween.prototype;
    _proto3.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._tDur, dur = this._dur, tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
        if (!dur) {
            _renderZeroDurationTween(this, totalTime, suppressEvents, force);
        }
        else if (tTime !== this._tTime || !totalTime || force || this._startAt && this._zTime < 0 !== totalTime < 0) {
            //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
            time = tTime;
            timeline = this.timeline;
            if (this._repeat) {
                //adjust the time for repeats and yoyos
                cycleDuration = dur + this._rDelay;
                time = _round(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                if (tTime === tDur) {
                    // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                    iteration = this._repeat;
                    time = dur;
                }
                else {
                    iteration = ~~(tTime / cycleDuration);
                    if (iteration && iteration === tTime / cycleDuration) {
                        time = dur;
                        iteration--;
                    }
                    time > dur && (time = dur);
                }
                isYoyo = this._yoyo && iteration & 1;
                if (isYoyo) {
                    yoyoEase = this._yEase;
                    time = dur - time;
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                if (time === prevTime && !force && this._initted) {
                    //could be during the repeatDelay part. No need to render and fire callbacks.
                    return this;
                }
                if (iteration !== prevIteration) {
                    timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality
                    if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                        this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.
                        this.render(_round(cycleDuration * iteration), true).invalidate()._lock = 0;
                    }
                }
            }
            if (!this._initted) {
                if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
                    this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.
                    return this;
                }
                if (dur !== this._dur) {
                    // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
                    return this.render(totalTime, suppressEvents, force);
                }
            }
            this._tTime = tTime;
            this._time = time;
            if (!this._act && this._ts) {
                this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
                this._lazy = 0;
            }
            this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
            if (this._from) {
                this.ratio = ratio = 1 - ratio;
            }
            time && !prevTime && !suppressEvents && _callback(this, "onStart");
            pt = this._pt;
            while (pt) {
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
            timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * ratio, suppressEvents, force) || this._startAt && (this._zTime = totalTime);
            if (this._onUpdate && !suppressEvents) {
                totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
                _callback(this, "onUpdate");
            }
            this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
            if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
                totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
                (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
                    // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
                    _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                    this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                }
            }
        }
        return this;
    };
    _proto3.targets = function targets() {
        return this._targets;
    };
    _proto3.invalidate = function invalidate() {
        this._pt = this._op = this._startAt = this._onUpdate = this._act = this._lazy = 0;
        this._ptLookup = [];
        this.timeline && this.timeline.invalidate();
        return _Animation2.prototype.invalidate.call(this);
    };
    _proto3.kill = function kill(targets, vars) {
        if (vars === void 0) {
            vars = "all";
        }
        if (!targets && (!vars || vars === "all")) {
            this._lazy = 0;
            if (this.parent) {
                return _interrupt(this);
            }
        }
        if (this.timeline) {
            var tDur = this.timeline.totalDuration();
            this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweenng, interrupt.
            this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.
            return this;
        }
        var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
        if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
            vars === "all" && (this._pt = 0);
            return _interrupt(this);
        }
        overwrittenProps = this._op = this._op || [];
        if (vars !== "all") {
            //so people can pass in a comma-delimited list of property names
            if (_isString(vars)) {
                p = {};
                _forEachName(vars, function (name) {
                    return p[name] = 1;
                });
                vars = p;
            }
            vars = _addAliasesToVars(parsedTargets, vars);
        }
        i = parsedTargets.length;
        while (i--) {
            if (~killingTargets.indexOf(parsedTargets[i])) {
                curLookup = propTweenLookup[i];
                if (vars === "all") {
                    overwrittenProps[i] = vars;
                    props = curLookup;
                    curOverwriteProps = {};
                }
                else {
                    curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                    props = vars;
                }
                for (p in props) {
                    pt = curLookup && curLookup[p];
                    if (pt) {
                        if (!("kill" in pt.d) || pt.d.kill(p) === true) {
                            _removeLinkedListItem(this, pt, "_pt");
                        }
                        delete curLookup[p];
                    }
                    if (curOverwriteProps !== "all") {
                        curOverwriteProps[p] = 1;
                    }
                }
            }
        }
        this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
        return this;
    };
    Tween.to = function to(targets, vars) {
        return new Tween(targets, vars, arguments[2]);
    };
    Tween.from = function from(targets, vars) {
        return new Tween(targets, _parseVars(arguments, 1));
    };
    Tween.delayedCall = function delayedCall(delay, callback, params, scope) {
        return new Tween(callback, 0, {
            immediateRender: false,
            lazy: false,
            overwrite: false,
            delay: delay,
            onComplete: callback,
            onReverseComplete: callback,
            onCompleteParams: params,
            onReverseCompleteParams: params,
            callbackScope: scope
        });
    };
    Tween.fromTo = function fromTo(targets, fromVars, toVars) {
        return new Tween(targets, _parseVars(arguments, 2));
    };
    Tween.set = function set(targets, vars) {
        vars.duration = 0;
        vars.repeatDelay || (vars.repeat = 0);
        return new Tween(targets, vars);
    };
    Tween.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween;
}(Animation);
_setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.
_forEachName("staggerTo,staggerFrom,staggerFromTo", function (name) {
    Tween[name] = function () {
        var tl = new Timeline(), params = _slice.call(arguments, 0);
        params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
        return tl[name].apply(tl, params);
    };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */
var _setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
}, _setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
}, _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
}, _setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
}, _getSetter = function _getSetter(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
}, _renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000, data);
}, _renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
}, _renderComplexString = function _renderComplexString(ratio, data) {
    var pt = data._pt, s = "";
    if (!ratio && data.b) {
        //b = beginning string
        s = data.b;
    }
    else if (ratio === 1 && data.e) {
        //e = ending string
        s = data.e;
    }
    else {
        while (pt) {
            s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.
            pt = pt._next;
        }
        s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
    }
    data.set(data.t, data.p, s, data);
}, _renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;
    while (pt) {
        pt.r(ratio, pt.d);
        pt = pt._next;
    }
}, _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt, next;
    while (pt) {
        next = pt._next;
        pt.p === property && pt.modifier(modifier, tween, target);
        pt = next;
    }
}, _killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while (pt) {
        next = pt._next;
        if (pt.p === property && !pt.op || pt.op === property) {
            _removeLinkedListItem(this, pt, "_pt");
        }
        else if (!pt.dep) {
            hasNonDependentRemaining = 1;
        }
        pt = next;
    }
    return !hasNonDependentRemaining;
}, _setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
}, _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt, next, pt2, first, last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)
    while (pt) {
        next = pt._next;
        pt2 = first;
        while (pt2 && pt2.pr > pt.pr) {
            pt2 = pt2._next;
        }
        if (pt._prev = pt2 ? pt2._prev : last) {
            pt._prev._next = pt;
        }
        else {
            first = pt;
        }
        if (pt._next = pt2) {
            pt2._prev = pt;
        }
        else {
            last = pt;
        }
        pt = next;
    }
    parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)
var PropTween = /*#__PURE__*/ function () {
    function PropTween(next, target, prop, start, change, renderer, data, setter, priority) {
        this.t = target;
        this.s = start;
        this.c = change;
        this.p = prop;
        this.r = renderer || _renderPlain;
        this.d = data || this;
        this.set = setter || _setterPlain;
        this.pr = priority || 0;
        this._next = next;
        if (next) {
            next._prev = this;
        }
    }
    var _proto4 = PropTween.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
        this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)
        this.set = _setterWithModifier;
        this.m = func;
        this.mt = target; //modifier target
        this.tween = tween;
    };
    return PropTween;
}(); //Initialization tasks
_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function (name) {
    return _reservedProps[name] = 1;
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */
var _gsap = {
    registerPlugin: function registerPlugin() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }
        args.forEach(function (config) {
            return _createPlugin(config);
        });
    },
    timeline: function timeline(vars) {
        return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
        return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property, unit, uncache) {
        _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in
        var getter = _getCache(target || {}).get, format = unit ? _passThrough : _numericIfPossible;
        unit === "native" && (unit = "");
        return !target ? target : !property ? function (property, unit, uncache) {
            return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
        } : format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
    },
    quickSetter: function quickSetter(target, property, unit) {
        target = toArray(target);
        if (target.length > 1) {
            var setters = target.map(function (t) {
                return gsap.quickSetter(t, property, unit);
            }), l = setters.length;
            return function (value) {
                var i = l;
                while (i--) {
                    setters[i](value);
                }
            };
        }
        target = target[0] || {};
        var Plugin = _plugins[property], cache = _getCache(target), p = cache.harness && (cache.harness.aliases || {})[property] || property, 
        // in case it's an alias, like "rotate" for "rotation".
        setter = Plugin ? function (value) {
            var p = new Plugin();
            _quickTween._pt = 0;
            p.init(target, unit ? value + unit : value, _quickTween, 0, [target]);
            p.render(1, p);
            _quickTween._pt && _renderPropTweens(1, _quickTween);
        } : cache.set(target, p);
        return Plugin ? setter : function (value) {
            return setter(target, p, unit ? value + unit : value, cache, 1);
        };
    },
    isTweening: function isTweening(targets) {
        return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
        value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
        return _mergeDeep(_defaults, value || {});
    },
    config: function config(value) {
        return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref) {
        var name = _ref.name, effect = _ref.effect, plugins = _ref.plugins, defaults = _ref.defaults, extendTimeline = _ref.extendTimeline;
        (plugins || "").split(",").forEach(function (pluginName) {
            return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
        });
        _effects[name] = function (targets, vars, tl) {
            return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
        };
        if (extendTimeline) {
            Timeline.prototype[name] = function (targets, vars, position) {
                return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
            };
        }
    },
    registerEase: function registerEase(name, ease) {
        _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
        return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
        return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
        if (vars === void 0) {
            vars = {};
        }
        var tl = new Timeline(vars), child, next;
        tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
        _globalTimeline.remove(tl);
        tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).
        tl._time = tl._tTime = _globalTimeline._time;
        child = _globalTimeline._first;
        while (child) {
            next = child._next;
            if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) {
                _addToTimeline(tl, child, child._start - child._delay);
            }
            child = next;
        }
        _addToTimeline(_globalTimeline, tl, 0);
        return tl;
    },
    utils: {
        wrap: wrap,
        wrapYoyo: wrapYoyo,
        distribute: distribute,
        random: random,
        snap: snap,
        normalize: normalize,
        getUnit: getUnit,
        clamp: clamp,
        splitColor: splitColor,
        toArray: toArray,
        mapRange: mapRange,
        pipe: pipe,
        unitize: unitize,
        interpolate: interpolate,
        shuffle: shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
        PropTween: PropTween,
        globals: _addGlobal,
        Tween: Tween,
        Timeline: Timeline,
        Animation: Animation,
        getCache: _getCache,
        _removeLinkedListItem: _removeLinkedListItem
    }
};
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function (name) {
    return _gsap[name] = Tween[name];
});
_ticker.add(Timeline.updateRoot);
_quickTween = _gsap.to({}, {
    duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------
var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;
    while (pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop) {
        pt = pt._next;
    }
    return pt;
}, _addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets, p, i, pt;
    for (p in modifiers) {
        i = targets.length;
        while (i--) {
            pt = tween._ptLookup[i][p];
            if (pt && (pt = pt.d)) {
                if (pt._pt) {
                    // is a plugin
                    pt = _getPluginPropTween(pt, p);
                }
                pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
            }
        }
    }
}, _buildModifierPlugin = function _buildModifierPlugin(name, modifier) {
    return {
        name: name,
        rawVars: 1,
        //don't pre-process function-based values or "random()" strings.
        init: function init(target, vars, tween) {
            tween._onInit = function (tween) {
                var temp, p;
                if (_isString(vars)) {
                    temp = {};
                    _forEachName(vars, function (name) {
                        return temp[name] = 1;
                    }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.
                    vars = temp;
                }
                if (modifier) {
                    temp = {};
                    for (p in vars) {
                        temp[p] = modifier(vars[p]);
                    }
                    vars = temp;
                }
                _addModifiers(tween, vars);
            };
        }
    };
}; //register core plugins
var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
        var p, pt;
        for (p in vars) {
            pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
            pt && (pt.op = p);
            this._props.push(p);
        }
    }
}, {
    name: "endArray",
    init: function init(target, value) {
        var i = value.length;
        while (i--) {
            this.add(target, i, target[i] || 0, value[i]);
        }
    }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.
Tween.version = Timeline.version = gsap.version = "3.5.1";
_coreReady = 1;
if (_windowExists()) {
    _wake();
}
/*!
 * CSSPlugin 3.5.1
 * https://greensock.com
 *
 * Copyright 2008-2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var _win$1, _doc$1, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _windowExists$1 = function _windowExists() {
    return typeof window !== "undefined";
}, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum$1 = 1e8, _capsExp = /([A-Z])/g, _horizontalExp = /(?:left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, _renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
}, _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
}, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
}, 
//if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -.5 : .5)) + data.u, data);
}, _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
}, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
}, _setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
}, _setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
}, _setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
}, _setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
}, _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
}, _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
}, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _supports3D, _createElement = function _createElement(type, ns) {
    var e = _doc$1.createElementNS ? _doc$1.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc$1.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.
    return e.style ? e : _doc$1.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
}, _getComputedProperty = function _getComputedProperty(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
}, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || _tempDiv, s = e.style, i = 5;
    if (property in s && !preferPrefix) {
        return property;
    }
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while (i-- && !(_prefixes[i] + property in s)) { }
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
}, _initCore = function _initCore() {
    if (_windowExists$1() && window.document) {
        _win$1 = window;
        _doc$1 = _win$1.document;
        _docElement = _doc$1.documentElement;
        _tempDiv = _createElement("div") || {
            style: {}
        };
        _tempDivStyler = _createElement("div");
        _transformProp = _checkPropPrefix(_transformProp);
        _transformOriginProp = _transformProp + "Origin";
        _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.
        _supports3D = !!_checkPropPrefix("perspective");
        _pluginInitted = 1;
    }
}, _getBBoxHack = function _getBBoxHack(swapIfPossible) {
    //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) {
        try {
            bbox = this.getBBox();
            this._gsapBBox = this.getBBox; //store the original
            this.getBBox = _getBBoxHack;
        }
        catch (e) { }
    }
    else if (this._gsapBBox) {
        bbox = this._gsapBBox();
    }
    if (oldParent) {
        if (oldSibling) {
            oldParent.insertBefore(this, oldSibling);
        }
        else {
            oldParent.appendChild(this);
        }
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
}, _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;
    while (i--) {
        if (target.hasAttribute(attributesArray[i])) {
            return target.getAttribute(attributesArray[i]);
        }
    }
}, _getBBox = function _getBBox(target) {
    var bounds;
    try {
        bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
    }
    catch (error) {
        bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
        x: +_getAttributeFallbacks(target, ["x", "cx", "x1"]) || 0,
        y: +_getAttributeFallbacks(target, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : bounds;
}, _isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
}, 
//reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
    if (property) {
        var style = target.style;
        if (property in _transformProps && property !== _transformOriginProp) {
            property = _transformProp;
        }
        if (style.removeProperty) {
            if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") {
                //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
                property = "-" + property;
            }
            style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
        }
        else {
            //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
            style.removeAttribute(property);
        }
    }
}, _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new PropTween(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
}, _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
}, 
//takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", 
    // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
    style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) {
        return curValue;
    }
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if (toPercent && (_transformProps[property] || ~property.indexOf("adius"))) {
        //transforms and borderRadius are relative to the size of the element itself!
        return _round(curValue / (isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty]) * amount);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) {
        parent = (target.ownerSVGElement || {}).parentNode;
    }
    if (!parent || parent === _doc$1 || !parent.appendChild) {
        parent = _doc$1.body;
    }
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === _ticker.time) {
        return _round(curValue / cache.width * amount);
    }
    else {
        (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
        parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.
        parent.appendChild(_tempDiv);
        px = _tempDiv[measureProperty];
        parent.removeChild(_tempDiv);
        style.position = "absolute";
        if (horizontal && toPercent) {
            cache = _getCache(parent);
            cache.time = _ticker.time;
            cache.width = parent[measureProperty];
        }
    }
    return _round(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
}, _get = function _get(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
        property = _propertyAliases[property];
        if (~property.indexOf(",")) {
            property = property.split(",")[0];
        }
    }
    if (_transformProps[property] && property !== "transform") {
        value = _parseTransform(target, uncache);
        value = property !== "transformOrigin" ? value[property] : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    }
    else {
        value = target.style[property];
        if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) {
            value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || _getProperty(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
        }
    }
    return unit && !~(value + "").indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
}, _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    //note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    if (!start || start === "none") {
        // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
        var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
        if (s && s !== start) {
            prop = p;
            start = s;
        }
        else if (prop === "borderColor") {
            start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
        }
    }
    var pt = new PropTween(this._pt, target.style, prop, 0, 1, _renderComplexString), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, relative, endValues;
    pt.b = start;
    pt.e = end;
    start += ""; //ensure values are strings
    end += "";
    if (end === "auto") {
        target.style[prop] = end;
        end = _getComputedProperty(target, prop) || end;
        target.style[prop] = start;
    }
    a = [start, end];
    _colorStringFilter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().
    start = a[0];
    end = a[1];
    startValues = start.match(_numWithUnitExp) || [];
    endValues = end.match(_numWithUnitExp) || [];
    if (endValues.length) {
        while (result = _numWithUnitExp.exec(end)) {
            endValue = result[0];
            chunk = end.substring(index, result.index);
            if (color) {
                color = (color + 1) % 5;
            }
            else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") {
                color = 1;
            }
            if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                startNum = parseFloat(startValue) || 0;
                startUnit = startValue.substr((startNum + "").length);
                relative = endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
                if (relative) {
                    endValue = endValue.substr(2);
                }
                endNum = parseFloat(endValue);
                endUnit = endValue.substr((endNum + "").length);
                index = _numWithUnitExp.lastIndex - endUnit.length;
                if (!endUnit) {
                    //if something like "perspective:300" is passed in and we must add a unit to the end
                    endUnit = endUnit || _config.units[prop] || startUnit;
                    if (index === end.length) {
                        end += endUnit;
                        pt.e += endUnit;
                    }
                }
                if (startUnit !== endUnit) {
                    startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
                } //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
                pt._pt = {
                    _next: pt._pt,
                    p: chunk || matchIndex === 1 ? chunk : ",",
                    //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                    s: startNum,
                    c: relative ? relative * endNum : endNum - startNum,
                    m: color && color < 4 ? Math.round : 0
                };
            }
        }
        pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    }
    else {
        pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    }
    if (_relExp.test(end)) {
        pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    }
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.
    return pt;
}, _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
        //the user provided them in the wrong order, so flip them
        value = x;
        x = y;
        y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
}, _renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
        var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
        if (props === "all" || props === true) {
            style.cssText = "";
            clearTransforms = 1;
        }
        else {
            props = props.split(",");
            i = props.length;
            while (--i > -1) {
                prop = props[i];
                if (_transformProps[prop]) {
                    clearTransforms = 1;
                    prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
                }
                _removeProperty(target, prop);
            }
        }
        if (clearTransforms) {
            _removeProperty(target, _transformProp);
            if (cache) {
                cache.svg && target.removeAttribute("transform");
                _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.
                cache.uncache = 1;
            }
        }
    }
}, 
// note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
        if (tween.data !== "isFromStart") {
            var pt = plugin._pt = new PropTween(plugin._pt, target, property, 0, 0, _renderClearProps);
            pt.u = endValue;
            pt.pr = -10;
            pt.tween = tween;
            plugin._props.push(property);
            return 1;
        }
    }
    /* className feature (about 0.4kb gzipped).
    , className(plugin, target, property, endValue, tween) {
      let _renderClassName = (ratio, data) => {
              data.css.render(ratio, data.css);
              if (!ratio || ratio === 1) {
                  let inline = data.rmv,
                      target = data.t,
                      p;
                  target.setAttribute("class", ratio ? data.e : data.b);
                  for (p in inline) {
                      _removeProperty(target, p);
                  }
              }
          },
          _getAllStyles = (target) => {
              let styles = {},
                  computed = getComputedStyle(target),
                  p;
              for (p in computed) {
                  if (isNaN(p) && p !== "cssText" && p !== "length") {
                      styles[p] = computed[p];
                  }
              }
              _setDefaults(styles, _parseTransform(target, 1));
              return styles;
          },
          startClassList = target.getAttribute("class"),
          style = target.style,
          cssText = style.cssText,
          cache = target._gsap,
          classPT = cache.classPT,
          inlineToRemoveAtEnd = {},
          data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
          changingVars = {},
          startVars = _getAllStyles(target),
          transformRelated = /(transform|perspective)/i,
          endVars, p;
      if (classPT) {
          classPT.r(1, classPT.d);
          _removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
      }
      target.setAttribute("class", data.e);
      endVars = _getAllStyles(target, true);
      target.setAttribute("class", startClassList);
      for (p in endVars) {
          if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
              changingVars[p] = endVars[p];
              if (!style[p] && style[p] !== "0") {
                  inlineToRemoveAtEnd[p] = 1;
              }
          }
      }
      cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
      if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://greensock.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
          style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
      }
      _parseTransform(target, true); //to clear the caching of transforms
      data.css = new gsap.plugins.css();
      data.css.init(target, changingVars, tween);
      plugin._props.push(...data.css._props);
      return 1;
    }
    */
}, 
/*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */
_identity2DMatrix = [1, 0, 0, 1, 0, 0], _rotationalProperties = {}, _isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
}, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match(_numExp).map(_round);
}, _getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || _getCache(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
        temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.
        matrix = [temp.a, temp.b, temp.c, temp.d, temp.e, temp.f];
        return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    }
    else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
        //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
        temp = style.display;
        style.display = "block";
        parent = target.parentNode;
        if (!parent || !target.offsetParent) {
            // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
            addedToDOM = 1; //flag
            nextSibling = target.nextSibling;
            _docElement.appendChild(target); //we must add it to the DOM in order to get values properly
        }
        matrix = _getComputedTransformMatrixAsArray(target);
        temp ? style.display = temp : _removeProperty(target, "display");
        if (addedToDOM) {
            nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
        }
    }
    return force2D && matrix.length > 6 ? [matrix[0], matrix[1], matrix[4], matrix[5], matrix[12], matrix[13]] : matrix;
}, _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
        bounds = _getBBox(target);
        xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
        yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    }
    else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
        //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
        x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
        y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
        xOrigin = x;
        yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
        tx = xOrigin - xOriginOld;
        ty = yOrigin - yOriginOld;
        cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
        cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    }
    else {
        cache.xOffset = cache.yOffset = 0;
    }
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).
    if (pluginToAddPropTweensTo) {
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
}, _parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new GSCache(target);
    if ("x" in cache && !uncache && !cache.uncache) {
        return cache;
    }
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
        t1 = !cache.uncache && target.getAttribute("data-svg-origin");
        _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
        a = matrix[0]; //a11
        b = matrix[1]; //a21
        c = matrix[2]; //a31
        d = matrix[3]; //a41
        x = a12 = matrix[4];
        y = a22 = matrix[5]; //2D matrix
        if (matrix.length === 6) {
            scaleX = Math.sqrt(a * a + b * b);
            scaleY = Math.sqrt(d * d + c * c);
            rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
            skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
            skewX && (scaleY *= Math.cos(skewX * _DEG2RAD));
            if (cache.svg) {
                x -= xOrigin - (xOrigin * a + yOrigin * c);
                y -= yOrigin - (xOrigin * b + yOrigin * d);
            } //3D matrix
        }
        else {
            a32 = matrix[6];
            a42 = matrix[7];
            a13 = matrix[8];
            a23 = matrix[9];
            a33 = matrix[10];
            a43 = matrix[11];
            x = matrix[12];
            y = matrix[13];
            z = matrix[14];
            angle = _atan2(a32, a33);
            rotationX = angle * _RAD2DEG; //rotationX
            if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a12 * cos + a13 * sin;
                t2 = a22 * cos + a23 * sin;
                t3 = a32 * cos + a33 * sin;
                a13 = a12 * -sin + a13 * cos;
                a23 = a22 * -sin + a23 * cos;
                a33 = a32 * -sin + a33 * cos;
                a43 = a42 * -sin + a43 * cos;
                a12 = t1;
                a22 = t2;
                a32 = t3;
            } //rotationY
            angle = _atan2(-c, a33);
            rotationY = angle * _RAD2DEG;
            if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a * cos - a13 * sin;
                t2 = b * cos - a23 * sin;
                t3 = c * cos - a33 * sin;
                a43 = d * sin + a43 * cos;
                a = t1;
                b = t2;
                c = t3;
            } //rotationZ
            angle = _atan2(b, a);
            rotation = angle * _RAD2DEG;
            if (angle) {
                cos = Math.cos(angle);
                sin = Math.sin(angle);
                t1 = a * cos + b * sin;
                t2 = a12 * cos + a22 * sin;
                b = b * cos - a * sin;
                a22 = a22 * cos - a12 * sin;
                a = t1;
                a12 = t2;
            }
            if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
                rotationX = rotation = 0;
                rotationY = 180 - rotationY;
            }
            scaleX = _round(Math.sqrt(a * a + b * b + c * c));
            scaleY = _round(Math.sqrt(a22 * a22 + a32 * a32));
            angle = _atan2(a12, a22);
            skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
            perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
        }
        if (cache.svg) {
            //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
            t1 = target.getAttribute("transform");
            cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
            t1 && target.setAttribute("transform", t1);
        }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
        if (invertedScaleX) {
            scaleX *= -1;
            skewX += rotation <= 0 ? 180 : -180;
            rotation += rotation <= 0 ? 180 : -180;
        }
        else {
            scaleY *= -1;
            skewX += skewX <= 0 ? 180 : -180;
        }
    }
    cache.x = ((cache.xPercent = x && Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0) ? 0 : x) + px;
    cache.y = ((cache.yPercent = y && Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0) ? 0 : y) + px;
    cache.z = z + px;
    cache.scaleX = _round(scaleX);
    cache.scaleY = _round(scaleY);
    cache.rotation = _round(rotation) + deg;
    cache.rotationX = _round(rotationX) + deg;
    cache.rotationY = _round(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) {
        style[_transformOriginProp] = _firstTwoOnly(origin);
    }
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = _config.force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
}, _firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
}, 
//for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = getUnit(start);
    return _round(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
}, _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
}, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
        var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
        angle = parseFloat(rotationX) * _DEG2RAD;
        cos = Math.cos(angle);
        x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
        y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
        z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) {
        transforms += "perspective(" + transformPerspective + _endParenthesis;
    }
    if (xPercent || yPercent) {
        transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    }
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) {
        transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    }
    if (rotation !== _zeroDeg) {
        transforms += "rotate(" + rotation + _endParenthesis;
    }
    if (rotationY !== _zeroDeg) {
        transforms += "rotateY(" + rotationY + _endParenthesis;
    }
    if (rotationX !== _zeroDeg) {
        transforms += "rotateX(" + rotationX + _endParenthesis;
    }
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) {
        transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    }
    if (scaleX !== 1 || scaleY !== 1) {
        transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    }
    target.style[_transformProp] = transforms || "translate(0, 0)";
}, _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
        //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
        skewY = parseFloat(skewY);
        skewX += skewY;
        rotation += skewY;
    }
    if (rotation || skewX) {
        rotation *= _DEG2RAD;
        skewX *= _DEG2RAD;
        a11 = Math.cos(rotation) * scaleX;
        a21 = Math.sin(rotation) * scaleX;
        a12 = Math.sin(rotation - skewX) * -scaleY;
        a22 = Math.cos(rotation - skewX) * scaleY;
        if (skewX) {
            skewY *= _DEG2RAD;
            temp = Math.tan(skewX - skewY);
            temp = Math.sqrt(1 + temp * temp);
            a12 *= temp;
            a22 *= temp;
            if (skewY) {
                temp = Math.tan(skewY);
                temp = Math.sqrt(1 + temp * temp);
                a11 *= temp;
                a21 *= temp;
            }
        }
        a11 = _round(a11);
        a21 = _round(a21);
        a12 = _round(a12);
        a22 = _round(a22);
    }
    else {
        a11 = scaleX;
        a22 = scaleY;
        a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
        tx = _convertToUnit(target, "x", x, "px");
        ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
        tx = _round(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
        ty = _round(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
        //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
        temp = target.getBBox();
        tx = _round(tx + xPercent / 100 * temp.width);
        ty = _round(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    if (forceCSS) {
        //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the  transform attribute changes!)
        target.style[_transformProp] = temp;
    }
}, _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue, relative) {
    var cap = 360, isString = _isString(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = relative ? endNum * relative : endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
        direction = endValue.split("_")[1];
        if (direction === "short") {
            change %= cap;
            if (change !== change % (cap / 2)) {
                change += change < 0 ? cap : -cap;
            }
        }
        if (direction === "cw" && change < 0) {
            change = (change + cap * _bigNum$1) % cap - ~~(change / cap) * cap;
        }
        else if (direction === "ccw" && change > 0) {
            change = (change - cap * _bigNum$1) % cap - ~~(change / cap) * cap;
        }
    }
    plugin._pt = pt = new PropTween(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
}, _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
    var style = _tempDivStyler.style, startCache = target._gsap, exclude = "perspective,force3D,transformOrigin,svgOrigin", endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    style.cssText = getComputedStyle(target).cssText + ";position:absolute;display:block;"; //%-based translations will fail unless we set the width/height to match the original target (and padding/borders can affect it)
    style[_transformProp] = transforms;
    _doc$1.body.appendChild(_tempDivStyler);
    endCache = _parseTransform(_tempDivStyler, 1);
    for (p in _transformProps) {
        startValue = startCache[p];
        endValue = endCache[p];
        if (startValue !== endValue && exclude.indexOf(p) < 0) {
            //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
            startUnit = getUnit(startValue);
            endUnit = getUnit(endValue);
            startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
            endNum = parseFloat(endValue);
            plugin._pt = new PropTween(plugin._pt, startCache, p, startNum, endNum - startNum, _renderCSSProp);
            plugin._pt.u = endUnit || 0;
            plugin._props.push(p);
        }
    }
    _doc$1.body.removeChild(_tempDivStyler);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.
_forEachName("padding,margin,Width,Radius", function (name, index) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [t, r, b, l] : [t + l, t + r, b + r, b + l]).map(function (side) {
        return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function (plugin, target, property, endValue, tween) {
        var a, vars;
        if (arguments.length < 4) {
            // getter, passed target, property, and unit (from _get())
            a = props.map(function (prop) {
                return _get(plugin, prop, property);
            });
            vars = a.join(" ");
            return vars.split(a[0]).length === 5 ? a[0] : vars;
        }
        a = (endValue + "").split(" ");
        vars = {};
        props.forEach(function (prop, i) {
            return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
        });
        plugin.init(target, vars, tween);
    };
});
var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
        return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index, targets) {
        var props = this._props, style = target.style, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority;
        _pluginInitted || _initCore();
        for (p in vars) {
            if (p === "autoRound") {
                continue;
            }
            endValue = vars[p];
            if (_plugins[p] && _checkPlugin(p, vars, tween, index, target, targets)) {
                //plugins
                continue;
            }
            type = typeof endValue;
            specialProp = _specialProps[p];
            if (type === "function") {
                endValue = endValue.call(tween, index, target, targets);
                type = typeof endValue;
            }
            if (type === "string" && ~endValue.indexOf("random(")) {
                endValue = _replaceRandom(endValue);
            }
            if (specialProp) {
                if (specialProp(this, target, p, endValue, tween)) {
                    hasPriority = 1;
                }
            }
            else if (p.substr(0, 2) === "--") {
                //CSS variable
                this.add(style, "setProperty", getComputedStyle(target).getPropertyValue(p) + "", endValue + "", index, targets, 0, 0, p);
            }
            else if (type !== "undefined") {
                startValue = _get(target, p);
                startNum = parseFloat(startValue);
                relative = type === "string" && endValue.charAt(1) === "=" ? +(endValue.charAt(0) + "1") : 0;
                if (relative) {
                    endValue = endValue.substr(2);
                }
                endNum = parseFloat(endValue);
                if (p in _propertyAliases) {
                    if (p === "autoAlpha") {
                        //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
                        if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) {
                            //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
                            startNum = 0;
                        }
                        _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                    }
                    if (p !== "scale" && p !== "transform") {
                        p = _propertyAliases[p];
                        ~p.indexOf(",") && (p = p.split(",")[0]);
                    }
                }
                isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---
                if (isTransformRelated) {
                    if (!transformPropTween) {
                        cache = target._gsap;
                        cache.renderTransform || _parseTransform(target); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.
                        smooth = vars.smoothOrigin !== false && cache.smooth;
                        transformPropTween = this._pt = new PropTween(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)
                        transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
                    }
                    if (p === "scale") {
                        this._pt = new PropTween(this._pt, cache, "scaleY", cache.scaleY, relative ? relative * endNum : endNum - cache.scaleY);
                        props.push("scaleY", p);
                        p += "X";
                    }
                    else if (p === "transformOrigin") {
                        endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.
                        if (cache.svg) {
                            _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                        }
                        else {
                            endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!
                            endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                            _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                        }
                        continue;
                    }
                    else if (p === "svgOrigin") {
                        _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                        continue;
                    }
                    else if (p in _rotationalProperties) {
                        _addRotationalPropTween(this, cache, p, startNum, endValue, relative);
                        continue;
                    }
                    else if (p === "smoothOrigin") {
                        _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                        continue;
                    }
                    else if (p === "force3D") {
                        cache[p] = endValue;
                        continue;
                    }
                    else if (p === "transform") {
                        _addRawTransformPTs(this, endValue, target);
                        continue;
                    }
                }
                else if (!(p in style)) {
                    p = _checkPropPrefix(p) || p;
                }
                if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                    startUnit = (startValue + "").substr((startNum + "").length);
                    endNum || (endNum = 0); // protect against NaN
                    endUnit = getUnit(endValue) || (p in _config.units ? _config.units[p] : startUnit);
                    startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                    this._pt = new PropTween(this._pt, isTransformRelated ? cache : style, p, startNum, relative ? relative * endNum : endNum - startNum, endUnit === "px" && vars.autoRound !== false && !isTransformRelated ? _renderRoundedCSSProp : _renderCSSProp);
                    this._pt.u = endUnit || 0;
                    if (startUnit !== endUnit) {
                        //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
                        this._pt.b = startValue;
                        this._pt.r = _renderCSSPropWithBeginning;
                    }
                }
                else if (!(p in style)) {
                    if (p in target) {
                        //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
                        this.add(target, p, target[p], endValue, index, targets);
                    }
                    else {
                        _missingPlugin(p, endValue);
                        continue;
                    }
                }
                else {
                    _tweenComplexCSSString.call(this, target, p, startValue, endValue);
                }
                props.push(p);
            }
        }
        hasPriority && _sortPropTweensByPriority(this);
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
        //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
        var p = _propertyAliases[property];
        p && p.indexOf(",") < 0 && (property = p);
        return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}) && (property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !_isUndefined(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : _getSetter(target, property);
    },
    core: {
        _removeProperty: _removeProperty,
        _getMatrix: _getMatrix
    }
};
gsap.utils.checkPrefix = _checkPropPrefix;
(function (positionAndScale, rotation, others, aliases) {
    var all = _forEachName(positionAndScale + "," + rotation + "," + others, function (name) {
        _transformProps[name] = 1;
    });
    _forEachName(rotation, function (name) {
        _config.units[name] = "deg";
        _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    _forEachName(aliases, function (name) {
        var split = name.split(":");
        _propertyAliases[split[1]] = all[split[0]];
    });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
_forEachName("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (name) {
    _config.units[name] = "px";
});
gsap.registerPlugin(CSSPlugin);
var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap;
/* We can revert to commit 70b732e8ff9c19abbd3210fc56e4e32838fa1a8f
 * in case we need to go back to clip-path animations for Chrome.
 * We have reverted the clip-path animation because of the flickering line
 * that appears due to the clip-path animations.
 * clip-path was the closest animation to the mock-ups suggested by Daniel
 * and are linked in JIRA card HOMENAV-629, but we could not find a way
 *  to remove the flickering bug. */
var OverlayAnimation = /** @class */ (function () {
    function OverlayAnimation() {
        var _this_1 = this;
        this.killAnimation = function (animation) {
            if (animation) {
                animation.kill();
            }
        };
        this.slideDown = function (element) {
            _this_1.killAnimation(_this_1.showOverlay);
            _this_1.killAnimation(_this_1.hideOverlay);
            _this_1.showOverlay = gsapWithCSS.to(element, {
                maxHeight: '1000px',
                duration: 0.54,
                ease: 'sine.inOut',
                visibility: 'visible'
            });
        };
        this.show = function (element) {
            _this_1.killAnimation(_this_1.showOverlay);
            _this_1.killAnimation(_this_1.hideOverlay);
            _this_1.showOverlay = gsapWithCSS.set(element, {
                maxHeight: '1000px',
                visibility: 'visible'
            });
        };
        this.hide = function (element) {
            _this_1.killAnimation(_this_1.showOverlay);
            _this_1.killAnimation(_this_1.hideOverlay);
            _this_1.hideOverlay = gsapWithCSS.set(element, {
                maxHeight: '0',
                onComplete: function () {
                    element.style.visibility = 'hidden';
                }
            });
        };
        this.slideUp = function (element) {
            _this_1.killAnimation(_this_1.showOverlay);
            _this_1.killAnimation(_this_1.hideOverlay);
            _this_1.hideOverlay = gsapWithCSS.to(element, {
                maxHeight: '0',
                duration: 0.43,
                ease: 'sine.inOut',
                onComplete: function () {
                    element.style.visibility = 'hidden';
                },
                onInterrupt: function () {
                    element.style.visibility = 'hidden';
                }
            });
        };
    }
    return OverlayAnimation;
}());
var menuDesktopLevel1Css = ".menu-desktop-level-1.sc-phn-menu-desktop-level-1{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between}@media (min-width: 1300px){.menu-desktop-level-1.sc-phn-menu-desktop-level-1{padding-top:1.625rem}}@media (min-width: 1760px){.menu-desktop-level-1.sc-phn-menu-desktop-level-1{padding-top:1.3125rem}}.menu-desktop-level-1.sc-phn-menu-desktop-level-1 .menu-series-shop-and-more.sc-phn-menu-desktop-level-1{display:-ms-inline-flexbox;display:inline-flex}.menu-desktop-level-1.sc-phn-menu-desktop-level-1 .menu-separator.sc-phn-menu-desktop-level-1{width:1px;height:2.375rem;background-color:#c9cacb;margin-top:0.875rem}@media (min-width: 1760px){.menu-desktop-level-1.sc-phn-menu-desktop-level-1 .menu-separator.sc-phn-menu-desktop-level-1{height:3rem;margin-top:1.0625rem}}.menu-desktop-level-1.sc-phn-menu-desktop-level-1 .metafunctionalities.sc-phn-menu-desktop-level-1{padding-top:1.3125rem}@media (-ms-high-contrast: none) and (min-width: 1300px) and (max-width: 1759px){.menu-desktop-level-1.sc-phn-menu-desktop-level-1 .metafunctionalities.sc-phn-menu-desktop-level-1{-ms-flex:1;flex:1}}@media (min-width: 1300px) and (max-width: 1759px){.menu-desktop-level-1.sc-phn-menu-desktop-level-1 .metafunctionalities.sc-phn-menu-desktop-level-1{padding-top:0}}@media (min-width: 1760px){.menu-desktop-level-1.sc-phn-menu-desktop-level-1 .metafunctionalities.sc-phn-menu-desktop-level-1{padding-top:1.6875rem}}";
var MenuDesktopLevel1 = /** @class */ (function () {
    function MenuDesktopLevel1(hostRef) {
        var _this_1 = this;
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.hoverIntentService = new HoverIntentService();
        this.overlayAnimation = new OverlayAnimation();
        this.mouseMoveListener = function (event) { return _this_1.onmousemove(event); };
        this.handleMouseLeave = function () {
            document.removeEventListener('mousemove', _this_1.mouseMoveListener);
            _this_1.hoverIntentService.handleHoverOut();
            _this_1.mouseLeftNavigation = true;
        };
        this.showOverlayHandler = function (overlayElement) {
            clearTimeout(_this_1.analyticsCaptureTimeout);
            _this_1.analyticsCaptureTimeout = setTimeout(function () {
                var megaMenuSelected = overlayElement.closest('phn-mega-fly-out-overlay');
                var megaMenuButtonClasses = megaMenuSelected.querySelector('.mega-fly-out-overlay-button').classList;
                if (megaMenuButtonClasses.contains('mega-fly-out-overlay-button-active')) {
                    var openOverlay = megaMenuSelected.querySelector('phn-car-series-model-overview') ||
                        megaMenuSelected.querySelector('phn-shops-and-more-overview');
                    if (openOverlay !== null) {
                        openOverlay.triggerAnalyticsEvent();
                    }
                }
            }, 500);
            if (_this_1.previousOverlay) {
                _this_1.overlayAnimation.show(overlayElement);
            }
            else {
                _this_1.overlayAnimation.slideDown(overlayElement);
            }
        };
        this.hideOverlayHandler = function (overlayElement) {
            if (_this_1.mouseLeftNavigation) {
                _this_1.previousOverlay = undefined;
            }
            else {
                _this_1.previousOverlay = overlayElement;
            }
            if (_this_1.mouseLeftNavigation) {
                _this_1.overlayAnimation.slideUp(overlayElement);
            }
            else {
                _this_1.overlayAnimation.hide(overlayElement);
            }
        };
        this.keyboardShowOverlayHandler = function (overlayElement) {
            _this_1.previousOverlay = overlayElement;
            _this_1.overlayAnimation.slideDown(overlayElement);
            var megaMenuSelected = overlayElement.closest('phn-mega-fly-out-overlay');
            var openOverlay = megaMenuSelected.querySelector('phn-car-series-model-overview') ||
                megaMenuSelected.querySelector('phn-shops-and-more-overview');
            openOverlay.triggerAnalyticsEvent();
        };
        this.keyboardHideOverlayHandler = function () {
            if (_this_1.previousOverlay) {
                _this_1.overlayAnimation.slideUp(_this_1.previousOverlay);
            }
            _this_1.previousOverlay = undefined;
        };
    }
    MenuDesktopLevel1.prototype.handleMouseEnter = function () {
        if (navStateStore.get('navigationLoaded')) {
            document.addEventListener('mousemove', this.mouseMoveListener);
            this.mouseLeftNavigation = false;
        }
    };
    MenuDesktopLevel1.prototype.onmousemove = function (event) {
        this.hoverIntentService.handleMouseMove(event, '.overlay-trigger');
    };
    MenuDesktopLevel1.prototype.render = function () {
        var _this_1 = this;
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "menu-desktop-level-1" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "menu-series-shop-and-more", onMouseEnter: function () { return _this_1.handleMouseEnter(); }, onMouseLeave: function () { return _this_1.handleMouseLeave(); } }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-car-series-list", { showOverlayHandler: this.showOverlayHandler, hideOverlayHandler: this.hideOverlayHandler, keyboardShowOverlayHandler: this.keyboardShowOverlayHandler, keyboardHideOverlayHandler: this.keyboardHideOverlayHandler }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-shops-and-more", { showOverlayHandler: this.showOverlayHandler, hideOverlayHandler: this.hideOverlayHandler, keyboardShowOverlayHandler: this.keyboardShowOverlayHandler, keyboardHideOverlayHandler: this.keyboardHideOverlayHandler })), navStateStore.get('navigationLoaded') ? Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "menu-separator" }) : null, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-meta-functionalities", { class: "metafunctionalities" })));
    };
    return MenuDesktopLevel1;
}());
MenuDesktopLevel1.style = menuDesktopLevel1Css;
var MenuDrawerAnimation = /** @class */ (function () {
    function MenuDrawerAnimation() {
        this.slideInFirstMenuDrawer = function (element, eventDispatch) {
            // Specifically used to slide in first drawer with backdrop
            var menuDrawerContainer = element.querySelector('.menu-drawer-container');
            var styles = {
                visibility: 'visible',
                backgroundColor: 'rgba(0,0,0,0)'
            };
            Object.assign(menuDrawerContainer.style, styles);
            gsapWithCSS.to(menuDrawerContainer, {
                backgroundColor: 'rgba(0,0,0,0.8)',
                duration: 0.32
            });
            gsapWithCSS.to(element.querySelector('.menu-drawer-content'), {
                right: '0%',
                duration: 0.32,
                ease: 'sine.inOut',
                onComplete: function () {
                    eventDispatch();
                }
            });
        };
        this.slideInMenuDrawer = function (mobileLayoutElement, element) {
            // Slide in all other drawers except first and without backdrop
            element.querySelector('.menu-drawer-container').setAttribute('style', 'visibility: visible;');
            gsapWithCSS.to(element.querySelector('.menu-drawer-content'), {
                right: '0%',
                duration: 0.32,
                ease: 'sine.inOut',
                onComplete: function () {
                    if (mobileLayoutElement) {
                        var bottomDrawers = mobileLayoutElement.querySelectorAll('.drawer-trigger:not(:last-child) .menu-drawer-content');
                        var lastBottomDrawer = bottomDrawers[bottomDrawers.length - 1];
                        lastBottomDrawer.scrollTop = 0;
                        lastBottomDrawer.style.visibility = 'hidden';
                    }
                }
            });
        };
        this.slideOutMenuDrawer = function (mobileLayout, element, callback) {
            var bottomDrawers = mobileLayout.querySelectorAll('.drawer-trigger:not(:last-child)');
            var lastBottomDrawer = bottomDrawers[bottomDrawers.length - 1];
            lastBottomDrawer.querySelector('.menu-drawer-content').style.visibility = 'visible';
            lastBottomDrawer.focus();
            gsapWithCSS.to(element.querySelector('.menu-drawer-content'), {
                right: '-100%',
                duration: 0.24,
                ease: 'sine.inOut',
                onComplete: function () {
                    element.querySelector('.menu-drawer-container').setAttribute('style', 'visibility:hidden');
                    callback();
                }
            });
        };
        this.slideOutAllMenuDrawers = function (mobileLayoutElement, resetDrawerStates) {
            gsapWithCSS.to(mobileLayoutElement.querySelector('.drawer-trigger .menu-drawer-container'), {
                backgroundColor: 'rgba(0,0,0,0)',
                duration: 0.24
            });
            gsapWithCSS.to(mobileLayoutElement.querySelectorAll('.drawer-trigger .menu-drawer-content'), {
                right: '-100%',
                duration: 0.24,
                ease: 'sine.inOut',
                onComplete: function () {
                    resetDrawerStates();
                }
            });
        };
    }
    return MenuDrawerAnimation;
}());
var menuDrawerCss = ".menu-drawer.sc-phn-menu-drawer .menu-drawer-container.sc-phn-menu-drawer{position:fixed;z-index:300;top:0;left:0;width:100%;height:100vh;visibility:hidden}@media (min-width: 1300px){.menu-drawer.sc-phn-menu-drawer .menu-drawer-container.sc-phn-menu-drawer{display:none}}.menu-drawer.sc-phn-menu-drawer .menu-drawer-container.sc-phn-menu-drawer .menu-drawer-content.sc-phn-menu-drawer{position:fixed;right:-100%;bottom:0;top:0;overflow-y:auto;background-color:#fff;width:100%}@media (min-width: 1000px) and (max-width: 1299px){.menu-drawer.sc-phn-menu-drawer .menu-drawer-container.sc-phn-menu-drawer .menu-drawer-content.sc-phn-menu-drawer{width:568px}}.menu-drawer.sc-phn-menu-drawer .menu-drawer-container.sc-phn-menu-drawer .menu-drawer-content.sc-phn-menu-drawer .menu-drawer-content-wrapper.sc-phn-menu-drawer{padding-left:7%;padding-right:7%}@media (min-width: 1000px) and (max-width: 1299px){.menu-drawer.sc-phn-menu-drawer .menu-drawer-container.sc-phn-menu-drawer .menu-drawer-content.sc-phn-menu-drawer .menu-drawer-content-wrapper.sc-phn-menu-drawer{padding-left:6.34%;padding-right:6.34%}}.menu-drawer.sc-phn-menu-drawer .menu-drawer-container.sc-phn-menu-drawer .menu-drawer-content.sc-phn-menu-drawer .menu-drawer-content-wrapper.sc-phn-menu-drawer .drawer-back-and-close.sc-phn-menu-drawer{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding-top:1.1875rem}@media (min-width: 760px) and (max-width: 999px){.menu-drawer.sc-phn-menu-drawer .menu-drawer-container.sc-phn-menu-drawer .menu-drawer-content.sc-phn-menu-drawer .menu-drawer-content-wrapper.sc-phn-menu-drawer .drawer-back-and-close.sc-phn-menu-drawer{padding-top:0.75rem}}@media (min-width: 1000px){.menu-drawer.sc-phn-menu-drawer .menu-drawer-container.sc-phn-menu-drawer .menu-drawer-content.sc-phn-menu-drawer .menu-drawer-content-wrapper.sc-phn-menu-drawer .drawer-back-and-close.sc-phn-menu-drawer{padding-top:1.5rem}}@media (min-width: 1300px){.menu-drawer.sc-phn-menu-drawer .menu-drawer-container.sc-phn-menu-drawer .menu-drawer-content.sc-phn-menu-drawer .menu-drawer-content-wrapper.sc-phn-menu-drawer .drawer-back-and-close.sc-phn-menu-drawer{padding-top:unset}}.menu-drawer.sc-phn-menu-drawer .menu-drawer-container.sc-phn-menu-drawer .menu-drawer-content.sc-phn-menu-drawer .menu-drawer-content-wrapper.sc-phn-menu-drawer .drawer-back-and-close.sc-phn-menu-drawer .back-button.sc-phn-menu-drawer{margin-left:-0.625rem}.menu-drawer.sc-phn-menu-drawer .menu-drawer-container.sc-phn-menu-drawer .menu-drawer-content.sc-phn-menu-drawer .menu-drawer-content-wrapper.sc-phn-menu-drawer .drawer-back-and-close.sc-phn-menu-drawer .close-button.sc-phn-menu-drawer{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}@media (min-width: 760px) and (max-width: 999px){.menu-drawer.sc-phn-menu-drawer .menu-drawer-container.sc-phn-menu-drawer .menu-drawer-content.sc-phn-menu-drawer .menu-drawer-content-wrapper.sc-phn-menu-drawer .drawer-back-and-close.sc-phn-menu-drawer .close-button.sc-phn-menu-drawer{margin-right:-1.875rem;height:3rem;width:3rem}}@media (min-width: 1000px){.menu-drawer.sc-phn-menu-drawer .menu-drawer-container.sc-phn-menu-drawer .menu-drawer-content.sc-phn-menu-drawer .menu-drawer-content-wrapper.sc-phn-menu-drawer .drawer-back-and-close.sc-phn-menu-drawer .close-button.sc-phn-menu-drawer{margin-right:-0.3125rem}}.menu-drawer.sc-phn-menu-drawer .menu-drawer-container.sc-phn-menu-drawer .menu-drawer-content.sc-phn-menu-drawer .menu-drawer-content-wrapper.sc-phn-menu-drawer .drawer-back-and-close.drawer-close.sc-phn-menu-drawer{-ms-flex-pack:end;justify-content:flex-end}";
var MenuDrawer = /** @class */ (function () {
    function MenuDrawer(hostRef) {
        var _this_1 = this;
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.closeAllDrawers = Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this, "closeAllDrawers", 7);
        this.menuOverlayOpen = Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["i"])(this, "menuOverlayOpen", 7);
        this.isTopmostDrawer = '';
        this.menuDrawerAnimation = new MenuDrawerAnimation();
        this.isFirstDrawer = false;
        this.handleBack = function () {
            _this_1.menuDrawerAnimation.slideOutMenuDrawer(_this_1.mobileLayout, _this_1.el, function () {
                var newStack = navStateStore.get('drawerContentStack');
                newStack.pop();
                navStateStore.set('drawerContentStack', __spreadArrays(newStack));
            });
        };
        this.close = function () {
            _this_1.closeAllDrawers.emit();
        };
        this.stopClickEvent = function (event) {
            event.stopPropagation();
        };
        this.initFirstAndLastFocusableElements = function () {
            var focusableElements = _this_1.el.querySelectorAll('button, a, p-link-pure, p-button-pure, [tabindex]:not([tabindex="-1"])');
            _this_1.firstFocusableElement = focusableElements[0];
            _this_1.lastFocusableElement = focusableElements[focusableElements.length - 1];
        };
    }
    MenuDrawer.prototype.handleKeyDown = function (ev) {
        if (!ev.shiftKey && ev.key === 'Tab' && ev.target === this.lastFocusableElement) {
            this.firstKeyboardAnchor.focus();
        }
        if (ev.shiftKey && ev.key === 'Tab' && ev.target === this.firstFocusableElement) {
            this.lastKeyboardAnchor.focus();
        }
    };
    MenuDrawer.prototype.getValueForField = function (fieldName) {
        var text = '';
        var menu = navContentStore.get('menu');
        if (menu && menu.length > 0) {
            var menuItem = menu.find(function (m) { return m.PhraseId === MENU_PHRASE_ID; });
            if (menuItem && menuItem[fieldName]) {
                text = menuItem[fieldName];
            }
        }
        return text;
    };
    MenuDrawer.prototype.componentWillLoad = function () {
        this.isFirstDrawer = navStateStore.get('drawerContentStack').length === 1;
    };
    MenuDrawer.prototype.componentDidLoad = function () {
        this.initFirstAndLastFocusableElements();
        if (this.isFirstDrawer) {
            this.menuDrawerAnimation.slideInFirstMenuDrawer(this.el, this.menuOverlayOpen.emit);
        }
        else {
            this.menuDrawerAnimation.slideInMenuDrawer(this.mobileLayout, this.el);
        }
        if (this.isTopmostDrawer) {
            isFeatureEnabled(FEATURE_MOBILE_FOCUS)
                ? this.firstFocusableElement.focus()
                : this.firstKeyboardAnchor.focus();
        }
    };
    MenuDrawer.prototype.componentDidUpdate = function () {
        if (this.isTopmostDrawer) {
            isFeatureEnabled(FEATURE_MOBILE_FOCUS)
                ? this.firstFocusableElement.focus()
                : this.firstKeyboardAnchor.focus();
        }
    };
    MenuDrawer.prototype.render = function () {
        var _this_1 = this;
        var backButtonText = this.backButton || this.getValueForField(TEXT_FIELD_NAME);
        var backButtonId = this.getValueForField(PHRASEID_FIELD_NAME);
        var backAndCloseClass = !this.isFirstDrawer ? 'drawer-back-and-close' : 'drawer-back-and-close drawer-close';
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: "drawer-trigger", tabindex: "-1" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "menu-drawer" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "menu-drawer-container", onClick: this.close }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "menu-drawer-content", onClick: this.stopClickEvent }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "menu-drawer-content-wrapper", role: "dialog", "aria-modal": "true" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { ref: function (el) { return (_this_1.firstKeyboardAnchor = el); }, "aria-hidden": "true", tabindex: "-1" }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: backAndCloseClass }, !this.isFirstDrawer && (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-back-button", { class: "back-button", onClick: this.handleBack, buttonId: backButtonId, text: backButtonText })), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-button-pure", { class: "close-button", icon: "close", hideLabel: "true", role: "button", "aria-label": "close dialog", size: "small", onClick: this.close }, "Close Dialog")), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", { name: "content" }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { ref: function (el) { return (_this_1.lastKeyboardAnchor = el); }, "aria-hidden": "true", tabindex: "-1" })))))));
    };
    Object.defineProperty(MenuDrawer.prototype, "el", {
        get: function () { return Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
        enumerable: false,
        configurable: true
    });
    return MenuDrawer;
}());
MenuDrawer.style = menuDrawerCss;
var MenuMobileLevel1 = /** @class */ (function () {
    function MenuMobileLevel1(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    MenuMobileLevel1.prototype.render = function () {
        var seriesList = navContentStore.get('seriesList');
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "menu-mobile-level-1 mobile-level-1-item" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mobile-level-1 mobile-level-1-item-scroll" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "drawer-container" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "drawer-content" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-mobile-car-series-list", { class: "mobile-car-series-list", carSeries: seriesList }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-mobile-shops-and-more", null), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-meta-functionalities", { class: "meta-functionalities" }))))));
    };
    return MenuMobileLevel1;
}());
var messagesLinkCss = ".sc-phn-messages-link-h .list-item-link.sc-phn-messages-link{display:block;-webkit-box-sizing:border-box;box-sizing:border-box;font-size:1rem;border-bottom:1px solid #c9cacb}.sc-phn-messages-link-h .list-item-link.sc-phn-messages-link:hover{color:#d5001c;cursor:pointer}@media (min-width: 760px) and (max-width: 999px){.sc-phn-messages-link-h .list-item-link.sc-phn-messages-link{font-size:1.125rem}}@media (min-width: 1300px){.sc-phn-messages-link-h .list-item-link.sc-phn-messages-link{border-bottom:0;padding-left:0}}.sc-phn-messages-link-h .list-item-link.sc-phn-messages-link a.sc-phn-messages-link{text-decoration:none;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;width:100%;padding:0.875rem 0 0.875rem 0.625rem}@media (min-width: 760px) and (max-width: 999px){.sc-phn-messages-link-h .list-item-link.sc-phn-messages-link a.sc-phn-messages-link{padding-top:1.125rem;padding-bottom:1.125rem}}@media (min-width: 1300px){.sc-phn-messages-link-h .list-item-link.sc-phn-messages-link a.sc-phn-messages-link{padding-bottom:0}}.sc-phn-messages-link-h .list-item-link.sc-phn-messages-link .unread-messages-count.sc-phn-messages-link{height:1rem;margin-left:0.5rem;padding:0 0.3125rem;background-color:#d5001c;border-radius:8px;font-size:0.75rem;color:#fff;line-height:1rem}@media (min-width: 760px) and (max-width: 999px){.sc-phn-messages-link-h .list-item-link.sc-phn-messages-link .unread-messages-count.sc-phn-messages-link{height:1.125rem;font-size:0.875rem;line-height:1.125rem}}.sc-phn-messages-link-h .list-item-link.sc-phn-messages-link .unread-messages-count.sc-phn-messages-link:hover{color:#fff}.sc-phn-messages-link-h .list-item-link.sc-phn-messages-link .unread-messages-count.hidden.sc-phn-messages-link{display:none}";
var MessagesLink = /** @class */ (function () {
    function MessagesLink(hostRef) {
        var _this_1 = this;
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.item = EMPTY_ITEM;
        this.sendNavigationClickAnalyticsEvent = function () {
            var contentItem = { PhraseId: _this_1.item.PhraseId, Text: _this_1.item.Text, Link: _this_1.item.Link };
            var analyticsSetup = {
                applicationId: analyticsSetupStore.get('applicationId'),
                locale: analyticsSetupStore.get('locale'),
                window: analyticsSetupStore.get('window'),
                environment: analyticsSetupStore.get('environment')
            };
            var navigationClick = new NavigationClickEvent(analyticsSetup, contentItem);
            var pagData = (window['pagData'] = window['pagData'] || []);
            pagData.push(navigationClick.event());
        };
    }
    MessagesLink.prototype.render = function () {
        var unreadMessagesCount = navContentStore.get('unreadMessagesCount');
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: "list-item-link", tag: "div", color: "inherit", size: "inherit" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: this.item.Link, onClick: this.sendNavigationClickAnalyticsEvent }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "link-text" }, this.item.Text), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: unreadMessagesCount > 0 ? 'unread-messages-count' : 'unread-messages-count hidden' }, unreadMessagesCount)))));
    };
    return MessagesLink;
}());
MessagesLink.style = messagesLinkCss;
var MetaFunctionClick = /** @class */ (function (_super_1) {
    __extends(MetaFunctionClick, _super_1);
    function MetaFunctionClick(analyticsSetup, linkItem) {
        var _this_1 = _super_1.call(this, analyticsSetup) || this;
        _this_1.context.eventAction = 'PAGHomeNav_MetaFunction_Click';
        _this_1.initComponentClick();
        _this_1.populateComponentClick(linkItem);
        return _this_1;
    }
    MetaFunctionClick.prototype.initComponentClick = function () {
        var _b;
        this.componentClick = (_b = {},
            _b[ComponentClickCollectionDimension.ClickElementId] = undefined,
            _b[ComponentClickCollectionDimension.ClickElementName] = undefined,
            _b[ComponentClickCollectionDimension.ClickElementType] = undefined,
            _b[ComponentClickCollectionDimension.TargetUrl] = undefined,
            _b);
    };
    MetaFunctionClick.prototype.populateComponentClick = function (linkItem) {
        this.componentClick.clickElementId = linkItem.PhraseId;
        this.componentClick.clickElementName = linkItem.Text;
        this.componentClick.clickElementType = 'link';
        this.componentClick.targetUrl = linkItem.Link;
    };
    MetaFunctionClick.prototype.event = function () {
        var componentClick = this.componentClick;
        return Object.assign(Object.assign({}, _super_1.prototype.event.call(this)), { componentClick: componentClick });
    };
    return MetaFunctionClick;
}(AnalyticsEvent));
var metaFunctionalitiesCss = ".metafunctionalities.sc-phn-meta-functionalities{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-direction:column;flex-direction:column;font-size:1rem}@media (-ms-high-contrast: none) and (min-width: 1300px) and (max-width: 1759px){.metafunctionalities.sc-phn-meta-functionalities{float:right}}@media (min-width: 760px) and (max-width: 999px){.metafunctionalities.sc-phn-meta-functionalities{font-size:1.125rem}}@media (min-width: 1300px) and (max-width: 1759px){.metafunctionalities.sc-phn-meta-functionalities{-ms-flex-align:center;align-items:center;padding-top:0;height:4.0625rem;padding-left:1.25rem;-ms-flex-direction:row;flex-direction:row;font-size:1rem}.metafunctionalities.sc-phn-meta-functionalities .dealer-search.sc-phn-meta-functionalities{margin-right:1.125rem}}@media (min-width: 1760px){.metafunctionalities.sc-phn-meta-functionalities{-ms-flex-align:center;align-items:center;-ms-flex-direction:row;flex-direction:row;font-size:1.25rem}.metafunctionalities.sc-phn-meta-functionalities .dealer-search.sc-phn-meta-functionalities{margin-right:1.5rem}.metafunctionalities.sc-phn-meta-functionalities .dealer-search.sc-phn-meta-functionalities:only-child{margin-right:10.5625rem}}";
var MetaFunctionalities = /** @class */ (function () {
    function MetaFunctionalities(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.sendMetaFunctionClickAnalyticsEvent = function (linkItem) {
            var analyticsSetup = {
                applicationId: analyticsSetupStore.get('applicationId'),
                locale: analyticsSetupStore.get('locale'),
                window: analyticsSetupStore.get('window'),
                environment: analyticsSetupStore.get('environment')
            };
            var metaFunctionClick = new MetaFunctionClick(analyticsSetup, linkItem);
            var pagData = (window['pagData'] = window['pagData'] || []);
            pagData.push(metaFunctionClick.event());
        };
    }
    MetaFunctionalities.prototype.getFieldValueForPhraseId = function (phraseId, fieldName) {
        var functionality = navContentStore.get('metafunctionalities').find(function (meta) { return meta.PhraseId === phraseId; });
        if (!functionality) {
            return '';
        }
        return functionality[fieldName] ? functionality[fieldName] : '';
    };
    MetaFunctionalities.prototype.myPorscheExists = function () {
        return (navContentStore.get('metafunctionalities').find(function (meta) { return meta.PhraseId === MYPORSCHE_PHRASE_ID; }) !== undefined);
    };
    MetaFunctionalities.prototype.getLoggedInStatusTranslations = function () {
        var functionality = navContentStore
            .get('metafunctionalities')
            .find(function (meta) { return meta.PhraseId === MYPORSCHE_PHRASE_ID; });
        var loggedInStatusTranslations = {};
        if (functionality && functionality.Items) {
            functionality.Items.forEach(function (meta) {
                loggedInStatusTranslations[meta.PhraseId] = meta[TEXT_FIELD_NAME];
            });
        }
        return loggedInStatusTranslations;
    };
    MetaFunctionalities.prototype.render = function () {
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "metafunctionalities" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-dealer-search", { class: "dealer-search", dealerSearchText: this.getFieldValueForPhraseId(DEALER_SEARCH_PHRASE_ID, TEXT_FIELD_NAME), dealerSearchLink: this.getFieldValueForPhraseId(DEALER_SEARCH_PHRASE_ID, LINK_FIELD_NAME), sendMetaFunctionClickAnalyticsEvent: this.sendMetaFunctionClickAnalyticsEvent }), this.myPorscheExists() && (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-myporsche", { myporscheText: this.getFieldValueForPhraseId(MYPORSCHE_PHRASE_ID, TEXT_FIELD_NAME), myporscheLink: this.getFieldValueForPhraseId(MYPORSCHE_PHRASE_ID, LINK_FIELD_NAME), loggedInStatusTranslations: this.getLoggedInStatusTranslations(), sendMetaFunctionClickAnalyticsEvent: this.sendMetaFunctionClickAnalyticsEvent, setActiveDrawer: this.setActiveDrawer, closeActiveDrawer: this.closeActiveDrawer }))));
    };
    Object.defineProperty(MetaFunctionalities.prototype, "hostElement", {
        get: function () { return Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
        enumerable: false,
        configurable: true
    });
    return MetaFunctionalities;
}());
MetaFunctionalities.style = metaFunctionalitiesCss;
var ModelRangeClickEvent = /** @class */ (function (_super_1) {
    __extends(ModelRangeClickEvent, _super_1);
    function ModelRangeClickEvent(analyticsSetup, modelRangeName, series) {
        var _this_1 = _super_1.call(this, analyticsSetup, modelRangeName) || this;
        _this_1.context.eventAction = 'PAGHomeNav_ModelRange_Click';
        _this_1.populateComponentClick(series);
        return _this_1;
    }
    ModelRangeClickEvent.prototype.populateComponentClick = function (series) {
        this.componentClick.clickElementId = series.PhraseId;
        this.componentClick.clickElementName = series.Name;
        this.componentClick.clickElementType = 'button';
    };
    ModelRangeClickEvent.prototype.event = function () {
        var car = this.car;
        var componentClick = this.componentClick;
        return Object.assign(Object.assign({}, _super_1.prototype.event.call(this)), { car: car,
            componentClick: componentClick });
    };
    return ModelRangeClickEvent;
}(ModelAnalyticsEvent));
var mobileCarSeriesListCss = ".mobile-car-series-list.sc-phn-mobile-car-series-list{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.mobile-car-series-list.sc-phn-mobile-car-series-list .mobile-car-series.sc-phn-mobile-car-series-list{width:50%}@media (min-width: 760px) and (max-width: 999px){.mobile-car-series-list.sc-phn-mobile-car-series-list .mobile-car-series.sc-phn-mobile-car-series-list{margin-top:0.625rem}}.mobile-car-series-list.sc-phn-mobile-car-series-list .mobile-car-series.sc-phn-mobile-car-series-list .car-series-button.sc-phn-mobile-car-series-list{display:-ms-flexbox;display:flex;font-family:inherit;width:100%;margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;outline:transparent none;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;text-decoration:none;text-align:left;background:transparent;cursor:pointer;color:inherit;-ms-flex-pack:center;justify-content:center}.mobile-car-series-list.sc-phn-mobile-car-series-list .mobile-car-series.sc-phn-mobile-car-series-list .car-series-button.sc-phn-mobile-car-series-list::-moz-focus-inner{border:0}.mobile-car-series-list.sc-phn-mobile-car-series-list .mobile-car-series.sc-phn-mobile-car-series-list .car-series-button.sc-phn-mobile-car-series-list:focus{outline-width:2px;outline-style:solid;outline-offset:1px;outline-color:#00d5b9}.mobile-car-series-list.sc-phn-mobile-car-series-list .mobile-car-series.sc-phn-mobile-car-series-list .car-series-button.sc-phn-mobile-car-series-list:focus{outline-offset:-2px}";
var MobileCarSeriesList = /** @class */ (function () {
    function MobileCarSeriesList(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.carSeries = DEFAULT_SERIES_LIST;
        this.sendNavigationClickAnalyticsEvent = function (series) {
            var analyticsSetup = {
                applicationId: analyticsSetupStore.get('applicationId'),
                locale: analyticsSetupStore.get('locale'),
                window: analyticsSetupStore.get('window'),
                environment: analyticsSetupStore.get('environment')
            };
            var modelSeriesClickEvent = new ModelRangeClickEvent(analyticsSetup, series.Name, series);
            var pagData = (window['pagData'] = window['pagData'] || []);
            pagData.push(modelSeriesClickEvent.event());
        };
    }
    MobileCarSeriesList.prototype.showDrawer = function (_, series, index) {
        var phnDrawerCarSeriesModelOverview = {
            content: (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-drawer-car-series-model-overview", { series: series, class: 'drawer-car-series-model-overview drawer-car-series-model-overview-' + index, slot: "content" }))
        };
        navStateStore.set('drawerContentStack', __spreadArrays(navStateStore.get('drawerContentStack'), [
            phnDrawerCarSeriesModelOverview
        ]));
        this.sendNavigationClickAnalyticsEvent(series);
    };
    MobileCarSeriesList.prototype.render = function () {
        var _this_1 = this;
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mobile-car-series-list" }, this.carSeries.map(function (series, index) { return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mobile-car-series", key: index }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "car-series-button", onClick: function (event) { return _this_1.showDrawer(event, series, index); } }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-car-series", { class: 'car-series car-series-' + index, text: series.Name, image: series.Image })))); })));
    };
    return MobileCarSeriesList;
}());
MobileCarSeriesList.style = mobileCarSeriesListCss;
var setScrollbarWidth = function () {
    var scrollDiv = document.createElement('div');
    scrollDiv.style.width = '100px';
    scrollDiv.style.height = '100px';
    scrollDiv.style.overflow = 'scroll';
    scrollDiv.style.position = 'absolute';
    scrollDiv.style.top = '-9999px';
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
};
var BodyScrollLock = /** @class */ (function () {
    function BodyScrollLock() {
        var _this_1 = this;
        this.activate = function () {
            _this_1.recordCurrentBodyStyles();
            _this_1.initBodyPaddingRight();
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.width = '100%';
            document.body.style.paddingRight = "" + (_this_1.initialBodyPaddingRightValue + _this_1.scrollbarWidth) + _this_1.initialBodyPaddingRightUnit;
        };
        this.deactivate = function () {
            document.body.style.overflow = _this_1.initialBodyOverflow;
            document.body.style.position = _this_1.initialBodyPosition;
            document.body.style.width = _this_1.initialBodyWidth;
            document.body.style.paddingRight = "" + _this_1.initialBodyPaddingRightValue + _this_1.initialBodyPaddingRightUnit;
        };
        this.recordCurrentBodyStyles = function () {
            _this_1.initialBodyOverflow = document.body.style.overflow;
            _this_1.initialBodyPosition = document.body.style.position;
            _this_1.initialBodyWidth = document.body.style.width;
        };
        this.scrollbarWidth = setScrollbarWidth();
    }
    BodyScrollLock.prototype.initBodyPaddingRight = function () {
        var body = document.body;
        var paddingRight = window.getComputedStyle(body, null).getPropertyValue('padding-right');
        this.initialBodyPaddingRightValue = parseFloat(paddingRight);
        this.initialBodyPaddingRightUnit = paddingRight.split(this.initialBodyPaddingRightValue.toString())[1];
    };
    return BodyScrollLock;
}());
var mobileLayoutCss = ".sc-phn-mobile-layout-h .burger-button.sc-phn-mobile-layout{height:100%}.sc-phn-mobile-layout-h .burger-button-skeleton.sc-phn-mobile-layout{height:0.875rem}";
var MobileLayout = /** @class */ (function () {
    function MobileLayout(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.bodyScrollLock = new BodyScrollLock();
        this.menuDrawerAnimation = new MenuDrawerAnimation();
    }
    MobileLayout.prototype.handleKeyDown = function (ev) {
        if (navStateStore.get('isDrawerOpen') === true && ev.key === 'Escape') {
            this.handleCloseAllDrawers();
        }
    };
    MobileLayout.prototype.handleMenuOverlayOpen = function () {
        this.bodyScrollLock.activate();
        navStateStore.set('isDrawerOpen', true);
    };
    MobileLayout.prototype.handleMenuOverlayClose = function () {
        this.bodyScrollLock.deactivate();
    };
    MobileLayout.prototype.handleCloseAllDrawers = function () {
        var resetDrawerStates = function () {
            navStateStore.set('drawerContentStack', []);
        };
        navStateStore.set('isDrawerOpen', false);
        this.menuDrawerAnimation.slideOutAllMenuDrawers(this.mobileLayoutElement, resetDrawerStates);
        this.bodyScrollLock.deactivate();
    };
    MobileLayout.prototype.showMobileLevel1 = function () {
        var drawer = { content: Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-menu-mobile-level-1", { slot: "content" }) };
        navStateStore.set('drawerContentStack', [drawer]);
    };
    MobileLayout.prototype.render = function () {
        var _this_1 = this;
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-burger-button", { class: "burger-button", onClick: this.showMobileLevel1 }), navStateStore.get('drawerContentStack').map(function (drawer, index, array) {
            var isTopmostDrawer = array.length - 1 === index;
            return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-menu-drawer", { key: index, backButton: drawer.backButton, mobileLayout: _this_1.mobileLayoutElement, isTopmostDrawer: isTopmostDrawer ? 'true' : '' }, drawer.content));
        })));
    };
    Object.defineProperty(MobileLayout.prototype, "mobileLayoutElement", {
        get: function () { return Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
        enumerable: false,
        configurable: true
    });
    return MobileLayout;
}());
MobileLayout.style = mobileLayoutCss;
var mobileShopAndMoreItemCss = ".sc-phn-mobile-shop-and-more-item-h{display:-ms-flexbox;display:flex;color:#000;font-size:1rem;padding:0.875rem 0 1rem 0.625rem;border-bottom:1px solid #c9cacb}.sc-phn-mobile-shop-and-more-item-h:hover{color:#d5001c;cursor:pointer}@media (min-width: 480px) and (max-width: 759px){.sc-phn-mobile-shop-and-more-item-h:focus{outline-width:2px;outline-style:solid;outline-offset:1px;outline-color:#00d5b9}}@media (min-width: 760px) and (max-width: 999px){.sc-phn-mobile-shop-and-more-item-h{padding:1.125rem 0 1.125rem 0.625rem;font-size:1.125rem}.sc-phn-mobile-shop-and-more-item-h:focus{outline-width:2px;outline-style:solid;outline-offset:1px;outline-color:#00d5b9}}@media (min-width: 1000px){.sc-phn-mobile-shop-and-more-item-h{padding:0.875rem 0 0.875rem 0.625rem}.sc-phn-mobile-shop-and-more-item-h:focus{outline-width:2px;outline-style:solid;outline-offset:1px;outline-color:#00d5b9}}.sc-phn-mobile-shop-and-more-item-h .mobile-shop-and-more-item-drawer.sc-phn-mobile-shop-and-more-item{display:-ms-flexbox;display:flex;width:100%}@media (min-width: 1300px){.sc-phn-mobile-shop-and-more-item-h .mobile-shop-and-more-item-drawer.sc-phn-mobile-shop-and-more-item{display:none}}";
var MobileShopAndMoreItem = /** @class */ (function () {
    function MobileShopAndMoreItem(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.item = EMPTY_ITEM;
    }
    MobileShopAndMoreItem.prototype.render = function () {
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: "mobile-shop-and-more-item" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-button-extended", { class: "mobile-shop-and-more-item-drawer", icon: "arrow-head-right" }, this.item.Text)));
    };
    return MobileShopAndMoreItem;
}());
MobileShopAndMoreItem.style = mobileShopAndMoreItemCss;
var mobileShopsAndMoreCss = ".sc-phn-mobile-shops-and-more-h{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-direction:column;flex-direction:column;border-top:1px solid #c9cacb;margin-top:1.5rem}@media (min-width: 760px) and (max-width: 1299px){.sc-phn-mobile-shops-and-more-h{margin-top:3rem}}";
var MobileShopsAndMore = /** @class */ (function () {
    function MobileShopsAndMore(hostRef) {
        var _this_1 = this;
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.showDrawer = function (_, item) {
            var phnDrawerShopsAndMore = {
                content: (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-drawer-shops-and-more", { headline: item.Text, item: item.Items && item.Items.length === 1 ? item.Items[0] : item, slot: "content", class: "shops-and-more-drawer-level-1" }))
            };
            navStateStore.set('drawerContentStack', __spreadArrays(navStateStore.get('drawerContentStack'), [phnDrawerShopsAndMore]));
            _this_1.sendNavigationClickAnalyticsEvent(item);
        };
        this.handleKeyDown = function (event, item) {
            if (event.key === 'Enter') {
                _this_1.showDrawer(event, item);
            }
        };
        this.sendNavigationClickAnalyticsEvent = function (item) {
            var contentItem = { PhraseId: item.PhraseId, Text: item.Text, Link: undefined };
            var analyticsSetup = {
                applicationId: analyticsSetupStore.get('applicationId'),
                locale: analyticsSetupStore.get('locale'),
                window: analyticsSetupStore.get('window'),
                environment: analyticsSetupStore.get('environment')
            };
            var navigationClickEvent = new NavigationClickEvent(analyticsSetup, contentItem);
            var pagData = (window['pagData'] = window['pagData'] || []);
            pagData.push(navigationClickEvent.event());
        };
    }
    MobileShopsAndMore.prototype.getItems = function () {
        var items = [];
        var shops = navContentStore.get('shops');
        var more = navContentStore.get('more');
        if (shops && shops.length > 0) {
            items.push(shops[0]);
        }
        if (more && more.length > 0) {
            items.push(more[0]);
        }
        return items;
    };
    MobileShopsAndMore.prototype.render = function () {
        var _this_1 = this;
        var items = this.getItems();
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: "mobile-shops-and-more" }, items.map(function (item, index) {
            return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "shops-and-more-container" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-mobile-shop-and-more-item", { item: item, class: 'mobile-shop-and-more-item mobile-shop-and-more-item-' + index, tabindex: "0", onClick: function (event) { return _this_1.showDrawer(event, item); }, onKeyDown: function (event) { return _this_1.handleKeyDown(event, item); } })));
        })));
    };
    return MobileShopsAndMore;
}());
MobileShopsAndMore.style = mobileShopsAndMoreCss;
var isDesktop = function () {
    return window.matchMedia('(min-width: 1300px)').matches;
};
var myporscheCss = ".myporsche.sc-phn-myporsche-h p-link-pure.sc-phn-myporsche,.myporsche.sc-phn-myporsche-h p-button-pure.sc-phn-myporsche{border-bottom:1px solid #c9cacb;padding:0.875rem 0 0.875rem 0;width:100%}@media (min-width: 760px) and (max-width: 999px){.myporsche.sc-phn-myporsche-h p-link-pure.sc-phn-myporsche,.myporsche.sc-phn-myporsche-h p-button-pure.sc-phn-myporsche{padding:1.125rem 0 1.125rem 0}}@media (min-width: 1300px){.myporsche.sc-phn-myporsche-h p-link-pure.sc-phn-myporsche,.myporsche.sc-phn-myporsche-h p-button-pure.sc-phn-myporsche{border-bottom:0;padding:0}}.myporsche.sc-phn-myporsche-h p-link-pure.sc-phn-myporsche .login-status.sc-phn-myporsche,.myporsche.sc-phn-myporsche-h p-button-pure.sc-phn-myporsche .login-status.sc-phn-myporsche{margin-top:-0.25rem;font-size:0.75rem}@media (min-width: 760px) and (max-width: 999px){.myporsche.sc-phn-myporsche-h p-link-pure.sc-phn-myporsche .login-status.sc-phn-myporsche,.myporsche.sc-phn-myporsche-h p-button-pure.sc-phn-myporsche .login-status.sc-phn-myporsche{margin-top:-0.1875rem}}@media (min-width: 1300px){.myporsche.sc-phn-myporsche-h p-link-pure.sc-phn-myporsche .login-status.sc-phn-myporsche,.myporsche.sc-phn-myporsche-h p-button-pure.sc-phn-myporsche .login-status.sc-phn-myporsche{margin-top:unset;position:absolute;top:0}}@media (min-width: 1300px) and (max-width: 1759px){.myporsche.sc-phn-myporsche-h p-link-pure.sc-phn-myporsche .login-status.sc-phn-myporsche,.myporsche.sc-phn-myporsche-h p-button-pure.sc-phn-myporsche .login-status.sc-phn-myporsche{left:1.75rem;padding-top:1.1875rem}}@media (min-width: 1760px){.myporsche.sc-phn-myporsche-h p-link-pure.sc-phn-myporsche .login-status.sc-phn-myporsche,.myporsche.sc-phn-myporsche-h p-button-pure.sc-phn-myporsche .login-status.sc-phn-myporsche{left:2.1875rem;font-size:0.875rem;padding-top:1.6875rem}}.myporsche.sc-phn-myporsche-h .myporsche-logged-in.sc-phn-myporsche{padding:0.875rem 0 0.875rem 0;border-bottom:1px solid #c9cacb}@media (min-width: 760px) and (max-width: 999px){.myporsche.sc-phn-myporsche-h .myporsche-logged-in.sc-phn-myporsche{padding:1.125rem 0 1.125rem 0}}@media (min-width: 1300px){.myporsche.sc-phn-myporsche-h .myporsche-logged-in.sc-phn-myporsche{display:none}}@media (min-width: 1300px){.myporsche.sc-phn-myporsche-h .myporsche-skeleton.sc-phn-myporsche{width:8rem;margin-top:0.125rem;width:6.375rem;height:0.875rem;background-color:#c9cacb}}";
var Myporsche = /** @class */ (function () {
    function Myporsche(hostRef) {
        var _this_1 = this;
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.myporscheLink = '';
        this.myporscheText = '';
        this.loggedInStatusTranslations = {};
        this.hiddenStyle = { display: 'none' };
        this.renderMyPorsche = function (loggedInState) {
            if (loggedInState === LOGGED_OUT_USER_STATUS) {
                return _this_1.renderLoggedOutComponent();
            }
            if (loggedInState === LOADING_STATUS) {
                return _this_1.renderLoadingComponent();
            }
            return _this_1.isDesktop ? _this_1.renderLoggedInFlyout() : _this_1.renderLoggedInDrawer();
        };
    }
    Myporsche.prototype.resizeHandler = function () {
        this.isDesktop = isDesktop();
    };
    Myporsche.prototype.getSubTextForUser = function () {
        var loggedInState = navContentStore.get('loggedInState');
        var phraseId = MYPORSCHE_PHRASE_ID + "." + loggedInState;
        return this.loggedInStatusTranslations[phraseId] || loggedInState;
    };
    Myporsche.prototype.renderLoggedOutComponent = function () {
        var _this_1 = this;
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-link-pure", { style: navStateStore.get('navigationLoaded') ? {} : this.hiddenStyle, class: "myporsche-logged-out", href: this.myporscheLink, onClick: function () {
                var linkItem = {
                    PhraseId: MYPORSCHE_PHRASE_ID,
                    Text: _this_1.myporscheText,
                    Link: _this_1.myporscheLink
                };
                _this_1.sendMetaFunctionClickAnalyticsEvent(linkItem);
            }, size: "inherit", icon: "user" }, this.myporscheText, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: "login-status", color: "inherit", size: "inherit", ellipsis: "true", align: "left" }, this.getSubTextForUser())));
    };
    Myporsche.prototype.renderLoadingComponent = function () {
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-button-pure", { class: "myporsche-loading", loading: "true", size: "inherit", "aria-label": "myporsche loading", style: navStateStore.get('navigationLoaded') ? {} : this.hiddenStyle }, this.myporscheText));
    };
    Myporsche.prototype.renderLoggedInFlyout = function () {
        var unreadMessagesCount = navContentStore.get('unreadMessagesCount');
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-myporsche-flyout", { style: navStateStore.get('navigationLoaded') ? {} : this.hiddenStyle, class: "myporsche-flyout", myPorscheText: this.myporscheText, loginStatus: this.getSubTextForUser(), unreadMessagesCount: unreadMessagesCount }));
    };
    Myporsche.prototype.renderLoggedInDrawer = function () {
        var unreadMessagesCount = navContentStore.get('unreadMessagesCount');
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-myporsche-drawer", { class: "myporsche-logged-in", myPorscheText: this.myporscheText, loginStatus: this.getSubTextForUser(), unreadMessagesCount: unreadMessagesCount }));
    };
    Myporsche.prototype.componentWillLoad = function () {
        this.isDesktop = isDesktop();
    };
    Myporsche.prototype.render = function () {
        var loggedInState = navContentStore.get('loggedInState');
        var hiddenStyle = { display: 'none' };
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["H"], { class: "myporsche" }, this.renderMyPorsche(loggedInState), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "myporsche-skeleton", style: navStateStore.get('navigationLoaded') ? hiddenStyle : {} })));
    };
    Object.defineProperty(Myporsche.prototype, "el", {
        get: function () { return Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["e"])(this); },
        enumerable: false,
        configurable: true
    });
    return Myporsche;
}());
Myporsche.style = myporscheCss;
var myporscheDrawerCss = ".sc-phn-myporsche-drawer-h{display:block}.sc-phn-myporsche-drawer-h .login-status.sc-phn-myporsche-drawer{margin-top:-0.25rem;font-size:0.75rem}@media (min-width: 760px) and (max-width: 999px){.sc-phn-myporsche-drawer-h .login-status.sc-phn-myporsche-drawer{margin-top:-0.1875rem}}@media (min-width: 1300px){.sc-phn-myporsche-drawer-h .login-status.sc-phn-myporsche-drawer{margin-top:unset}}.sc-phn-myporsche-drawer-h .myporsche-drawer-trigger.sc-phn-myporsche-drawer:focus-within{outline-width:2px;outline-style:solid;outline-offset:1px;outline-color:#00d5b9}.sc-phn-myporsche-drawer-h .myporsche-drawer-trigger-label.sc-phn-myporsche-drawer{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-direction:column;flex-direction:column;padding-left:0.25rem}.sc-phn-myporsche-drawer-h .myporsche-unread-messages-indicator.sc-phn-myporsche-drawer{position:absolute;width:0.375rem;height:0.375rem;border-radius:50%;background-color:#d5001c;left:1.0625rem;top:0.0625rem}.sc-phn-myporsche-drawer-h .myporsche-unread-messages-indicator.hidden.sc-phn-myporsche-drawer{display:none}";
var MyPorscheDrawer = /** @class */ (function () {
    function MyPorscheDrawer(hostRef) {
        var _this_1 = this;
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.unreadMessagesCount = 0;
        this.openDrawer = function () {
            var phnMyporscheItemsDrawer = {
                content: Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-myporsche-items-drawer", { slot: "content", myPorscheText: _this_1.myPorscheText })
            };
            navStateStore.set('drawerContentStack', __spreadArrays(navStateStore.get('drawerContentStack'), [phnMyporscheItemsDrawer]));
        };
    }
    MyPorscheDrawer.prototype.render = function () {
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-button-extended", { class: "myporsche-drawer-trigger", icon: "arrow-head-right", onClick: this.openDrawer, cancelTabIndex: false }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: this.unreadMessagesCount > 0
                ? 'myporsche-unread-messages-indicator'
                : 'myporsche-unread-messages-indicator hidden' }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-icon", { color: "inherit", name: "user", size: "small" }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "myporsche-drawer-trigger-label" }, this.myPorscheText, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: "login-status", color: "inherit", size: "inherit", ellipsis: "true", align: "left" }, this.loginStatus)))));
    };
    return MyPorscheDrawer;
}());
MyPorscheDrawer.style = myporscheDrawerCss;
var myporscheFlyoutCss = ".sc-phn-myporsche-flyout-h{display:none;position:relative}@media (min-width: 1300px){.sc-phn-myporsche-flyout-h{display:block}}.sc-phn-myporsche-flyout-h .flyout-trigger.sc-phn-myporsche-flyout{cursor:pointer}.sc-phn-myporsche-flyout-h .flyout-trigger.sc-phn-myporsche-flyout:focus{outline-width:2px;outline-style:solid;outline-offset:1px;outline-color:#00d5b9}@media (min-width: 1300px) and (max-width: 1759px){.sc-phn-myporsche-flyout-h .flyout-trigger.sc-phn-myporsche-flyout:first-child{padding-right:1.125rem}}@media (min-width: 1760px){.sc-phn-myporsche-flyout-h .flyout-trigger.sc-phn-myporsche-flyout:first-child{padding-right:1.5rem}}@media (min-width: 1300px){.sc-phn-myporsche-flyout-h .flyout-trigger.sc-phn-myporsche-flyout .login-status.sc-phn-myporsche-flyout{position:absolute;top:0;padding-bottom:0.625rem;left:1.75rem;font-size:0.75rem;padding-top:1.1875rem}}@media (min-width: 1760px){.sc-phn-myporsche-flyout-h .flyout-trigger.sc-phn-myporsche-flyout .login-status.sc-phn-myporsche-flyout{left:2.1875rem;font-size:0.875rem;padding-top:1.6875rem}}.sc-phn-myporsche-flyout-h .myporsche-items.sc-phn-myporsche-flyout{-webkit-box-sizing:border-box;box-sizing:border-box;display:block;position:absolute;background:#fff;right:-3rem;z-index:300}.sc-phn-myporsche-flyout-h .myporsche-items.sc-phn-myporsche-flyout phn-myporsche-items.sc-phn-myporsche-flyout{-webkit-box-sizing:inherit;box-sizing:inherit;border:1px solid #c9cacb;position:relative;background:#fff}.sc-phn-myporsche-flyout-h .myporsche-items.sc-phn-myporsche-flyout phn-myporsche-items.sc-phn-myporsche-flyout:before{content:\"\";width:0;height:0;position:absolute;top:-0.375rem;right:50%;-webkit-transform:translateX(50%);transform:translateX(50%);border-style:solid;border-width:0 0.3125rem 0.3125rem;border-color:transparent transparent #c9cacb}.sc-phn-myporsche-flyout-h .myporsche-items.sc-phn-myporsche-flyout phn-myporsche-items.sc-phn-myporsche-flyout:after{content:\"\";width:0;height:0;position:absolute;top:-0.3125rem;right:50%;-webkit-transform:translateX(50%);transform:translateX(50%);border-style:solid;border-width:0 0.3125rem 0.3125rem;border-color:transparent transparent #fff}@media (min-width: 1300px) and (max-width: 1759px){.sc-phn-myporsche-flyout-h .myporsche-items.sc-phn-myporsche-flyout{width:14.625rem;top:2.75rem}}@media (min-width: 1760px){.sc-phn-myporsche-flyout-h .myporsche-items.sc-phn-myporsche-flyout{width:17.125rem;top:3.5625rem}}@media (min-width: 1300px){.sc-phn-myporsche-flyout-h .myporsche-items.sc-phn-myporsche-flyout phn-myporsche-items.sc-phn-myporsche-flyout{padding:0.625rem 1.5rem 2.25rem 1.5rem}}.sc-phn-myporsche-flyout-h .myporsche-unread-messages-indicator.sc-phn-myporsche-flyout{position:absolute;width:0.375rem;height:0.375rem;border-radius:50%;background-color:#d5001c;left:1.0625rem;top:0.0625rem}@media (min-width: 1760px){.sc-phn-myporsche-flyout-h .myporsche-unread-messages-indicator.sc-phn-myporsche-flyout{width:0.5rem;height:0.5rem;left:1.25rem;top:0.0625rem}}.sc-phn-myporsche-flyout-h .myporsche-unread-messages-indicator.hidden.sc-phn-myporsche-flyout{display:none}";
var MyPorscheFlyout = /** @class */ (function () {
    function MyPorscheFlyout(hostRef) {
        var _this_1 = this;
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.env = DEFAULT_ENVIRONMENT;
        this.unreadMessagesCount = 0;
        this.isActive = false;
        this.screenReaderId = 'myporsche-flyout';
        this.keyDownHandler = function (event) {
            if (event.shiftKey && event.key === 'Tab') {
                _this_1.isActive = false;
            }
        };
        // also activates screenreader space and enter
        this.handleClick = function (event) {
            event.stopPropagation(); // prevents button from losing focus
            _this_1.isActive = true;
        };
    }
    MyPorscheFlyout.prototype.myPorscheCloseHandler = function () {
        this.isActive = false;
    };
    MyPorscheFlyout.prototype.mouseEnterHandler = function () {
        this.isActive = true;
    };
    MyPorscheFlyout.prototype.mouseLeaveHandler = function () {
        this.isActive = false;
    };
    MyPorscheFlyout.prototype.render = function () {
        var _this_1 = this;
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { "aria-hidden": "true", class: this.unreadMessagesCount > 0
                ? 'myporsche-unread-messages-indicator'
                : 'myporsche-unread-messages-indicator hidden' }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-button-pure", { class: "flyout-trigger", size: "inherit", icon: "user", active: this.isActive, onKeyDown: this.keyDownHandler, "aria-haspopup": "true", "aria-expanded": this.isActive ? 'true' : 'false', onClick: this.handleClick, id: this.screenReaderId, role: "button", "aria-label": "open myporsche flyout" }, this.myPorscheText, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { class: "login-status", color: "inherit", size: "inherit", ellipsis: "true", align: "left" }, this.loginStatus)), this.isActive ? (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "myporsche-items", "aria-labelledby": this.screenReaderId, role: "region" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-myporsche-items", { myPorscheCloseHandler: function () { return _this_1.myPorscheCloseHandler(); } }))) : null));
    };
    return MyPorscheFlyout;
}());
MyPorscheFlyout.style = myporscheFlyoutCss;
var myporscheItemsCss = ".sc-phn-myporsche-items-h{display:block}.sc-phn-myporsche-items-h ul.sc-phn-myporsche-items{margin:0;padding:0;text-indent:0;list-style-type:none}.sc-phn-myporsche-items-h li.sc-phn-myporsche-items{margin:0;padding:0;text-indent:0;list-style-type:none}.sc-phn-myporsche-items-h hr.sc-phn-myporsche-items{display:none}@media (min-width: 1300px){.sc-phn-myporsche-items-h hr.sc-phn-myporsche-items{display:block;height:1px;border:none;background-color:#c9cacb;margin:0.875rem 0 0 0;text-align:center}}";
var MyPorscheItems = /** @class */ (function () {
    function MyPorscheItems(hostRef) {
        var _this_1 = this;
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.handlePressShiftTabKey = function (event) {
            if (window.innerWidth > MAX_M_VIEWPORT_WIDTH && event.shiftKey && event.key === 'Tab') {
                _this_1.myPorscheCloseHandler();
            }
        };
        this.handlePressTabKey = function (event) {
            if (window.innerWidth > MAX_M_VIEWPORT_WIDTH && !event.shiftKey && event.key === 'Tab') {
                _this_1.myPorscheCloseHandler();
            }
        };
        this.displayListItems = function (item, index) {
            if (item.PhraseId === MYPORSCHE_PHRASE_ID + ".messages") {
                if (index === 0) {
                    return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-messages-link", { class: "myporsche-list-item", item: item, onKeyDown: _this_1.handlePressShiftTabKey })));
                }
                return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-messages-link", { class: "myporsche-list-item", item: item })));
            }
            if (index === 0) {
                return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-list-item", { class: "myporsche-list-item", item: item, onKeyDown: _this_1.handlePressShiftTabKey })));
            }
            return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-list-item", { class: "myporsche-list-item", item: item })));
        };
    }
    MyPorscheItems.prototype.getMyPorscheItemFromTemplateAsLinkItem = function (id) {
        var phraseId = MYPORSCHE_PHRASE_ID + "." + id;
        // TODO Add test for Items presence, find failure
        var myPorscheItems = navContentStore.get('metafunctionalities').find(function (m) { return m.PhraseId === MYPORSCHE_PHRASE_ID; })
            .Items;
        return myPorscheItems.find(function (item) { return item.PhraseId === phraseId; });
    };
    MyPorscheItems.prototype.render = function () {
        if (navContentStore.get('metafunctionalities').length > 0) {
            var myPorscheItems = navContentStore.get('metafunctionalities').find(function (m) { return m.PhraseId === MYPORSCHE_PHRASE_ID; })
                .Items;
            var nonStaticItems = myPorscheItems.filter(function (item) { return item.PhraseId !== MYPORSCHE_PHRASE_ID + "." + LOGGED_IN_USER_NO_NAME_STATUS &&
                item.PhraseId !== MYPORSCHE_PHRASE_ID + "." + LOGGED_OUT_USER_STATUS &&
                item.PhraseId !== MYPORSCHE_PHRASE_ID + ".logout"; });
            return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", null, nonStaticItems.map(this.displayListItems), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hr", { "aria-hidden": "true" }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-list-item", { class: "myporsche-list-item logout", item: this.getMyPorscheItemFromTemplateAsLinkItem('logout'), onKeyDown: this.handlePressTabKey }))));
        }
        return null;
    };
    return MyPorscheItems;
}());
MyPorscheItems.style = myporscheItemsCss;
var myporscheItemsDrawerCss = ".sc-phn-myporsche-items-drawer-h{padding-bottom:3.125rem}";
var MyPorscheItemsDrawer = /** @class */ (function () {
    function MyPorscheItemsDrawer(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    MyPorscheItemsDrawer.prototype.render = function () {
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "drawer-container" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-headline", { text: this.myPorscheText, class: "drawer-headline" }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-myporsche-items", null))));
    };
    return MyPorscheItemsDrawer;
}());
MyPorscheItemsDrawer.style = myporscheItemsDrawerCss;
var previewBadgeCss = ".sc-phn-preview-badge-h{display:block;position:absolute;top:0;right:0;background-color:#d5001c;z-index:9999;padding:0 0.125rem}";
var PreviewBadge = /** @class */ (function () {
    function PreviewBadge(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    PreviewBadge.prototype.render = function () {
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["H"], null, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("p-text", { theme: "dark", size: "x-small" }, this.versionString)));
    };
    return PreviewBadge;
}());
PreviewBadge.style = previewBadgeCss;
var shopsAndMoreCss = ".shops-and-more.sc-phn-shops-and-more{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row}@media (min-width: 1300px) and (max-width: 1759px){.shops-and-more.sc-phn-shops-and-more{padding-right:1.5rem}}@media (min-width: 1300px) and (max-width: 1759px){.shops-and-more.sc-phn-shops-and-more .shops-and-more-overlay-trigger.sc-phn-shops-and-more{padding:0 0.5625rem;height:91px}}@media (min-width: 1760px){.shops-and-more.sc-phn-shops-and-more .shops-and-more-overlay-trigger.sc-phn-shops-and-more{padding:0 0.75rem;height:102px}}";
var ShopsAndMore = /** @class */ (function () {
    function ShopsAndMore(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    ShopsAndMore.prototype.getItems = function () {
        var items = [];
        var shops = navContentStore.get('shops');
        var more = navContentStore.get('more');
        if (shops && shops.length > 0) {
            items.push(shops[0]);
        }
        if (more && more.length > 0) {
            items.push(more[0]);
        }
        return items;
    };
    ShopsAndMore.prototype.render = function () {
        var _this_1 = this;
        var items = this.getItems();
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "shops-and-more" }, items.map(function (item) {
            return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-mega-fly-out-overlay", { class: "shops-and-more-overlay-trigger overlay-trigger", showOverlayHandler: _this_1.showOverlayHandler, hideOverlayHandler: _this_1.hideOverlayHandler, keyboardShowOverlayHandler: _this_1.keyboardShowOverlayHandler, keyboardHideOverlayHandler: _this_1.keyboardHideOverlayHandler }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-desktop-shop-and-more-item", { slot: "button", itemText: item.Text, class: "desktop-shop-and-more-item" }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-shops-and-more-overview", { slot: "content", item: item })));
        })));
    };
    return ShopsAndMore;
}());
ShopsAndMore.style = shopsAndMoreCss;
var hasLinkItemChild = function (item) {
    if (item.Items) {
        for (var index = 0; index < item.Items.length; index++) {
            if (item.Items[index].Link) {
                return true;
            }
        }
    }
    return false;
};
var NavigationLoadEvent = /** @class */ (function (_super_1) {
    __extends(NavigationLoadEvent, _super_1);
    function NavigationLoadEvent(analyticsSetup, item) {
        var _this_1 = _super_1.call(this, analyticsSetup) || this;
        _this_1.context.eventAction = 'PAGHomeNav_Navigation_Load';
        _this_1.initComponentClick();
        _this_1.populateComponentClickFromContentItem(item);
        return _this_1;
    }
    NavigationLoadEvent.prototype.initComponentClick = function () {
        var _b;
        this.componentClick = (_b = {},
            _b[ComponentClickCollectionDimension.ClickElementId] = undefined,
            _b[ComponentClickCollectionDimension.ClickElementName] = undefined,
            _b[ComponentClickCollectionDimension.ClickElementType] = undefined,
            _b[ComponentClickCollectionDimension.TargetUrl] = undefined,
            _b);
    };
    NavigationLoadEvent.prototype.populateComponentClickFromContentItem = function (item) {
        this.componentClick.clickElementId = item.PhraseId;
        this.componentClick.clickElementName = item.Text;
        this.componentClick.clickElementType = 'button';
        this.componentClick.targetUrl = undefined;
    };
    NavigationLoadEvent.prototype.event = function () {
        var componentClick = this.componentClick;
        return Object.assign(Object.assign({}, _super_1.prototype.event.call(this)), { componentClick: componentClick });
    };
    return NavigationLoadEvent;
}(AnalyticsEvent));
var shopsAndMoreOverviewCss = ".shops-and-more-overview.sc-phn-shops-and-more-overview ul.sc-phn-shops-and-more-overview{margin:0;padding:0;text-indent:0;list-style-type:none}.shops-and-more-overview.sc-phn-shops-and-more-overview li.sc-phn-shops-and-more-overview{margin:0;padding:0;text-indent:0;list-style-type:none}.shops-and-more-overview.sc-phn-shops-and-more-overview .shops-and-more-overview-content.sc-phn-shops-and-more-overview{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center}@media (min-width: 1300px) and (max-width: 1759px){.shops-and-more-overview.sc-phn-shops-and-more-overview .shops-and-more-overview-content.sc-phn-shops-and-more-overview{padding-top:3.125rem}}@media (min-width: 1760px){.shops-and-more-overview.sc-phn-shops-and-more-overview .shops-and-more-overview-content.sc-phn-shops-and-more-overview{padding-top:3rem}}@media (min-width: 1300px) and (max-width: 1759px){.shops-and-more-overview.sc-phn-shops-and-more-overview .shops-and-more-overview-content.sc-phn-shops-and-more-overview .link-group.sc-phn-shops-and-more-overview{margin-left:3.75rem;margin-right:3.75rem;width:16.6875rem}}@media (min-width: 1760px){.shops-and-more-overview.sc-phn-shops-and-more-overview .shops-and-more-overview-content.sc-phn-shops-and-more-overview .link-group.sc-phn-shops-and-more-overview{margin-left:3rem;margin-right:3rem;width:21.6875rem}}.shops-and-more-overview.sc-phn-shops-and-more-overview .shops-and-more-overview-content.sc-phn-shops-and-more-overview .link-group.sc-phn-shops-and-more-overview:nth-child(2){margin:0}.shops-and-more-overview.sc-phn-shops-and-more-overview .shops-and-more-overview-content.sc-phn-shops-and-more-overview .link-group.sc-phn-shops-and-more-overview .list-item-group.sc-phn-shops-and-more-overview{padding-top:0.375rem;padding-left:0.625rem;padding-right:0.625rem}";
var ShopsAndMoreOverview = /** @class */ (function () {
    function class_4(hostRef) {
        Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.item = EMPTY_ITEM;
    }
    class_4.prototype.triggerAnalyticsEvent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pagData, analyticsSetup, analyticsEvent;
            return __generator(this, function (_b) {
                pagData = (window['pagData'] = window['pagData'] || []);
                analyticsSetup = {
                    applicationId: analyticsSetupStore.get('applicationId'),
                    locale: analyticsSetupStore.get('locale'),
                    window: analyticsSetupStore.get('window'),
                    environment: analyticsSetupStore.get('environment')
                };
                analyticsEvent = new NavigationLoadEvent(analyticsSetup, this.item);
                pagData.push(analyticsEvent.event());
                return [2 /*return*/];
            });
        });
    };
    class_4.prototype.renderLinkGroup = function (_items, _title) {
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "link-group" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-headline", { role: "heading", "aria-level": "2", text: _title, class: "head-line" }), Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", { class: "list-item-group" }, _items.map(function (linkItem) {
            return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("phn-list-item", { item: linkItem })));
        }))));
    };
    class_4.prototype.renderLinkGroups = function (_items) {
        var _this_1 = this;
        return (_items &&
            _items.map(function (childItem) {
                return _this_1.renderLinkGroup(childItem.Items, childItem.Text);
            }));
    };
    class_4.prototype.render = function () {
        return (Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "shops-and-more-overview" }, Object(_index_866367c9_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "shops-and-more-overview-content" }, hasLinkItemChild(this.item)
            ? this.renderLinkGroup(this.item.Items, this.item.Text)
            : this.renderLinkGroups(this.item.Items))));
    };
    return class_4;
}());
ShopsAndMoreOverview.style = shopsAndMoreOverviewCss;



/***/ })

};;
//# sourceMappingURL=26.render-page.js.map