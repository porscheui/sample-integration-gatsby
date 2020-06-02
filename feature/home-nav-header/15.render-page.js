exports.ids = [15];
exports.modules = {

/***/ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-icon_2.entry.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@porsche-design-system/components-js/dist/esm-es5/p-icon_2.entry.js ***!
  \******************************************************************************************/
/*! exports provided: p_icon, p_text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p_text", function() { return Text; });
/* harmony import */ var _index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-381d535c.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-381d535c.js");
/* harmony import */ var _index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index-0a27866a.js */ "./node_modules/@porsche-design-system/components-js/dist/esm-es5/index-0a27866a.js");
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
var CDN_BASE_URL = "https://cdn.ui.porsche.com/porsche-design-system/icons";
var ICONS_MANIFEST = { "360": "360.min.36e182d8ac8e0c10384b679393f63b69.svg", "arrowDoubleDown": "arrow-double-down.min.596800021e18153493559081e663ee88.svg", "arrowDoubleLeft": "arrow-double-left.min.4e15fa5ed5ede67284450f7bfb1ec451.svg", "arrowDoubleRight": "arrow-double-right.min.1f19809f37d01d19cfbb9578c41b6395.svg", "arrowDoubleUp": "arrow-double-up.min.1dfdee0293f35663e189028e18a09911.svg", "arrowDown": "arrow-down.min.c8aeeeac5077b25177e53b2ace17c1f7.svg", "arrowFirst": "arrow-first.min.a507d4cd79a8f0edd5f0b9ae3b2f7bc6.svg", "arrowHeadDown": "arrow-head-down.min.fdb5ae2bcbe9e89a4ca462ff709c0ea8.svg", "arrowHeadLeft": "arrow-head-left.min.ea16150c4d0fb48adbc092527171962f.svg", "arrowHeadRight": "arrow-head-right.min.490cb49eb241569ee5d537730ee9658f.svg", "arrowHeadUp": "arrow-head-up.min.3c502817abbea4e2593ff3773ecc470b.svg", "arrowLast": "arrow-last.min.e90409d415c7dd4352f888e7dc59ef34.svg", "arrowLeft": "arrow-left.min.40f3788a970e42dcd828f3140e5ef7db.svg", "arrowRight": "arrow-right.min.0e9d5d854b941542ccede8934e22d22a.svg", "arrowUp": "arrow-up.min.b58d1eba1b2ec77686fc3e383b99a983.svg", "chat": "chat.min.9a3b604ed40dbb2bcc78fc50d305f424.svg", "email": "email.min.4b513e97cb42aea4db45fb30dff3d7b3.svg", "exclamation": "exclamation.min.f22d4aade626a58fccc731cf7439d05d.svg", "information": "information.min.de80f382aaa5aa3c6dc5fa0d85135b04.svg", "phone": "phone.min.d2d999abf71a01da4e7e7b7240e7a323.svg", "question": "question.min.cbbd87dfb87449c5a963d6a6e320ff18.svg", "warning": "warning.min.9afca66172d660341dfbd4ebde686e41.svg", "batteryEmpty": "battery-empty.min.6fc99423bfaaf476f6b61504bc05f020.svg", "chargingStation": "charging-station.min.a578ab2027c2185237b2b5612400f731.svg", "flash": "flash.min.29fe78661e78a57136ac43010cb6b380.svg", "plug": "plug.min.e173ff03b456923a7ae3a92ce0520bdb.svg", "add": "add.min.d23d39a3685d43ec6dbd3a0335558efd.svg", "adjust": "adjust.min.e8172b10131d90f24d3e216a78f00e27.svg", "chart": "chart.min.fe1c4df96d842e62d5ac73848d70e067.svg", "check": "check.min.7d7dc5323782dd8cd3cbb5716a81595b.svg", "close": "close.min.6b6c3f57d0a694ab0d23e2ba52b854ae.svg", "compare": "compare.min.861b69e5349e6a4845d860b416d85f17.svg", "configurate": "configurate.min.c87179686f825f52b8c4b390e73b7452.svg", "delete": "delete.min.1538b6843b13d0bd31f28b59dcbbde49.svg", "disable": "disable.min.012e84ef3fb22320fe0b1aca612fa86b.svg", "download": "download.min.46357a2fa5acc920a28e7920d607b4ec.svg", "edit": "edit.min.8d5c875029b56483d1d985763822b2f6.svg", "external": "external.min.a39d626056f818ed0eba855ceae71afe.svg", "filter": "filter.min.88e87eed72da8d15773017e1ec3e645e.svg", "grid": "grid.min.75cc26f9f44da33e1bad1417430f717c.svg", "increase": "increase.min.3421600f54125e983d5570bad938cd7d.svg", "list": "list.min.ab36881a07fc9486bb6ecfe16f7a4f72.svg", "logout": "logout.min.c9e4f8b9af27da6849c9c1147895a6c6.svg", "menuDotsHorizontal": "menu-dots-horizontal.min.ed37b11a6f013819666e39f54646530d.svg", "menuLines": "menu-lines.min.1336b797ec9d3db4b88f197cf276d1e4.svg", "minus": "minus.min.f6e41865cfb6cd9dd9af041ef914c0ce.svg", "plus": "plus.min.3b406279e5d6d27dd2f4a0115e681f8f.svg", "refresh": "refresh.min.799d80abfe0daf2533e408442c6bb4df.svg", "reset": "reset.min.52ba839599314f03c12148e568349ead.svg", "save": "save.min.d963d7071f327a42c9d9e69c7b2824c3.svg", "search": "search.min.ee057857b65350597af5e07f15d2f484.svg", "sort": "sort.min.385a606b10fac5fd1a7e515a1aa1f3bb.svg", "stack": "stack.min.1d650e779dd577903a0388c02c2af5d5.svg", "subtract": "subtract.min.c7fad8bc562e7ee9f892beb4eeecc8da.svg", "switch": "switch.min.8e99a2a0e92b40c07a59732ad175d87c.svg", "upload": "upload.min.bc7c05ef34ec35c27a2779ee34e9ca46.svg", "viewOff": "view-off.min.2f9fe59f2a5a721ce311797600a7c0c0.svg", "view": "view.min.8f02073d04cb813e2f7a1aba712bbffe.svg", "zoomIn": "zoom-in.min.8d6cb3185186300b31c8a5c657dce597.svg", "zoomOut": "zoom-out.min.7a5a17a95965e7a5e6d97efe9fad7914.svg", "augmentedReality": "augmented-reality.min.e29e295fe394352de150c9e80a2fa1d4.svg", "broadcast": "broadcast.min.1d1c19603354ace294e233dd0c297fae.svg", "camera": "camera.min.e82addb91138d97fa73896b05a7996d0.svg", "closedCaption": "closed-caption.min.c7392aba9cb6d8aca3b0513f1e123193.svg", "document": "document.min.e9d0000022e97c189f9c78fe2ce20016.svg", "image": "image.min.4126facf3cb3d99e45f1a37f30e99f34.svg", "mobile": "mobile.min.f5548b22b12599952ff0de25fb01671e.svg", "pause": "pause.min.e5986452c700aabb3f6f5585c9af0c8c.svg", "play": "play.min.52a93696e40445bb04fbfe1205196d1e.svg", "printer": "printer.min.50bbdfc8f1ddc81888568624f3754a74.svg", "replay": "replay.min.ec95e695888bc41fa69edb7f688464cd.svg", "screen": "screen.min.364959f2f1bd377080ca7b7613ea38e8.svg", "tablet": "tablet.min.fd14ef85a1720341a11f2148d5cc9207.svg", "video": "video.min.b09b4e0279c1d8f614c7fcfa14667609.svg", "volumeOff": "volume-off.min.951414124a2ce4987a4cd36e63f5a22e.svg", "volumeUp": "volume-up.min.6c017134b33109911e6f6327d4cc1e90.svg", "wifi": "wifi.min.e8cfa383e5a6eedffb3eecd44ee5f89b.svg", "city": "city.min.b9915939643538d7db0ea353595daec0.svg", "countryRoad": "country-road.min.dabfedbea115a45ee1422c04f3a9d51e.svg", "globe": "globe.min.ffd891bc3a5a1be3e5a7951c09827621.svg", "highway": "highway.min.88ef248f470b6383e5a167b614d2d79a.svg", "home": "home.min.74de9da062f400c7665302ee8e2a8219.svg", "locate": "locate.min.2f65417a5cc0916a7189d5fa25b64bbb.svg", "pin": "pin.min.c24b7edd7366375e3c28c844b1c42a81.svg", "route": "route.min.016fcb0fe74da406f708db29a3bd7b91.svg", "gift": "gift.min.62f7af2ac6734a0d574d967b6e78aaeb.svg", "leaf": "leaf.min.c120ba52cc0f496821e7ef85e2c1781b.svg", "leather": "leather.min.3df2738f69be418a3e0b7f1650d22fad.svg", "light": "light.min.658b75673a7843d376998093659cb056.svg", "lockOpen": "lock-open.min.624561c9b687b0da964875ff9f9255f4.svg", "lock": "lock.min.63e55dcdf547e44193c0cb1aaaea78c9.svg", "moon": "moon.min.65029347707c8e70385fd1a9e856adb8.svg", "racingFlag": "racing-flag.min.833768cc92801a52baedbd440bd0e8b4.svg", "snowflake": "snowflake.min.c45044ffb2aa320df0dcbdaeb978e991.svg", "star": "star.min.8ab416782295d83b4dd801ef6d6e6ec8.svg", "sun": "sun.min.b58311e9b0e6b33f9da8b53e7687bcf4.svg", "weight": "weight.min.41380c81f276d2f04d49c1ace8a36ece.svg", "work": "work.min.2036de9b3a4152307148bc846e99dcd6.svg", "wrench": "wrench.min.a5a221aa17142e2f6449b5744a966cb5.svg", "calendar": "calendar.min.393ec1ba5f6266419e968fb90f9a49a3.svg", "clock": "clock.min.4c72818993ac750a986bea949e8b2806.svg", "duration": "duration.min.f734fad84bb0702a34d3ce008b00d23f.svg", "stopwatch": "stopwatch.min.acf3cb35259edda8676bbce9dba41c4d.svg", "calculator": "calculator.min.13b7e15a1f262b7c5e35219ae345659e.svg", "card": "card.min.aa7c52dec67a081077c37bdc74ff6f7b.svg", "purchase": "purchase.min.7a333ad48579912f314fed81eb53a617.svg", "shoppingCart": "shopping-cart.min.831bbb130257a56ddcf252cedf2ec57d.svg", "userGroup": "user-group.min.2b26b0e6cc2b584427746e6e6378af1d.svg", "user": "user.min.ab0f36161a4941069718c4bb0218720a.svg", "logoBaidu": "logo-baidu.min.8fb7eec5f84348a08e9c254e1569804e.svg", "logoDelicious": "logo-delicious.min.74e149acb8c83430ea6da1822e5d71e5.svg", "logoDigg": "logo-digg.min.eb05007cb50acb1b5321ff641dfbe567.svg", "logoFacebook": "logo-facebook.min.8a3d5b2d305c7aefb2b0b4e02d63c53f.svg", "logoFoursquare": "logo-foursquare.min.93432ef92edd0e4ea4f7454ba199795b.svg", "logoGmail": "logo-gmail.min.4a1fd0a4667e003b4a6aa421b3be817d.svg", "logoGoogle": "logo-google.min.593967a455d4c9414d557a4a5e488807.svg", "logoHatena": "logo-hatena.min.7b6172046adb034a8632d3c17d02b910.svg", "logoInstagram": "logo-instagram.min.479184b41f3feab1da95de81e11dc6ae.svg", "logoKaixin": "logo-kaixin.min.6b3ad0783209835f184b12bfd0db449a.svg", "logoLinkedin": "logo-linkedin.min.f27cb9ab65fac0f01b9025fd81562790.svg", "logoPinterest": "logo-pinterest.min.294b3c40ad9bee556a794c5d1799a0fd.svg", "logoQqShare": "logo-qq-share.min.4fa04694e6c44eff9ef45fa2489d5282.svg", "logoQq": "logo-qq.min.fd8dc19871866f386126656b3ee9904d.svg", "logoSkyrock": "logo-skyrock.min.c30539d5960976625cb2f54ecc357db7.svg", "logoSohu": "logo-sohu.min.66f10ef41eb6beda54e86585302512a5.svg", "logoTecent": "logo-tecent.min.ef82131597d0c53f047656a879e4f860.svg", "logoTelegram": "logo-telegram.min.55dc592b84c665643a159422ed54ff50.svg", "logoTumblr": "logo-tumblr.min.d3a7fd333e57d5ce11194e7f294fd940.svg", "logoTwitter": "logo-twitter.min.cfb78b3c906847db1a14388d7c2de8a5.svg", "logoViber": "logo-viber.min.839423c4576dde70fd32ca9b38bbd595.svg", "logoVk": "logo-vk.min.252858e66ac9a449a79c567e74d85906.svg", "logoWechat": "logo-wechat.min.9c7a9a3c24b166878e4e8f9b0d63fa5b.svg", "logoWeibo": "logo-weibo.min.8f4405a72d30ce6c4d37b6cc4f2d3df5.svg", "logoWhatsapp": "logo-whatsapp.min.399d91ef024514790748242192dbad24.svg", "logoXing": "logo-xing.min.dbb964c9c15c3d34d98ff116da281705.svg", "logoYahoo": "logo-yahoo.min.41d8b14ca14a9dc9bb414a3caca71ab9.svg", "logoYouku": "logo-youku.min.55160948572d233bc6098a5f44bf9216.svg", "logoYoutube": "logo-youtube.min.47d3a1e7eb13056f8f0fecdd46b1e32f.svg", "rss": "rss.min.bec948aabe336d7690e9274f757464da.svg", "share": "share.min.8424917f4c64dc71e2f3e8048cd31fda.svg", "car": "car.min.cfc20c66544b8967c4f6cfe174e32539.svg", "co2Emission": "co2-emission.min.2bfd1a9eb3e582ee43ae1ad149c4f491.svg", "cubicCapacity": "cubic-capacity.min.9ad1a643ecbbdf1c25e3d19c9b1b7a67.svg", "fuelStation": "fuel-station.min.26b511126522568f0bd5c8ca56ff2f76.svg", "oilCan": "oil-can.min.0706d6654b025a10b1470823df00ceeb.svg", "steeringWheel": "steering-wheel.min.7e732be187e55b43b1d4bfe7682c8be0.svg", "tachometer": "tachometer.min.75245f7775bac32604d23d94d706b093.svg", "truck": "truck.min.f50a553807e221027cc418d52898db33.svg" };
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var __assign = function () {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
                if (Object.prototype.hasOwnProperty.call(s, p))
                    t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
    return noCase(input, __assign({ delimiter: "", transform: pascalCaseTransform }, options));
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
    return pascalCase(input, __assign({ transform: camelCaseTransform }, options));
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
            req = fetch(url).then(function (rsp) { return rsp.ok ? rsp.text().then(validateContent) : ''; }, function () { return ''; } // reject callback
            );
            requestCache.set(url, req);
        }
        return [2 /*return*/, req];
    });
}); };
var buildIconUrl = function (iconNameOrSource) {
    if (iconNameOrSource === void 0) { iconNameOrSource = DEFAULT_ICON_NAME; }
    if (iconNameOrSource === null) {
        return buildIconUrl(DEFAULT_ICON_NAME);
    }
    else if (isUrl(iconNameOrSource)) {
        return iconNameOrSource;
    }
    else if (ICONS_MANIFEST[camelCase(iconNameOrSource)]) { // check if IconName exists
        return CDN_BASE_URL + "/" + ICONS_MANIFEST[camelCase(iconNameOrSource)];
    }
    // Only occurs if consumer is not using typescript -> necessary?
    console.warn('Please provide either an name property or a source property!');
    return buildIconUrl(DEFAULT_ICON_NAME);
};
var iconCss = ":host{display:-ms-inline-flexbox;display:inline-flex;vertical-align:top}.p-icon{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;margin:0;padding:0;-webkit-box-sizing:border-box;box-sizing:border-box;width:1.5rem;height:1.5rem}.p-icon--size-small{width:1.5rem;height:1.5rem}.p-icon--size-medium{width:2.25rem;height:2.25rem}.p-icon--size-large{width:3rem;height:3rem}.p-icon--size-inherit{width:inherit;height:inherit}.p-icon--color-brand.p-icon--theme-light{fill:#d5001c}.p-icon--color-brand.p-icon--theme-dark{fill:#d5001c}.p-icon--color-default.p-icon--theme-light{fill:#000}.p-icon--color-default.p-icon--theme-dark{fill:#fff}.p-icon--color-neutral-contrast-high.p-icon--theme-light{fill:#323639}.p-icon--color-neutral-contrast-high.p-icon--theme-dark{fill:#e3e4e5}.p-icon--color-neutral-contrast-medium.p-icon--theme-light{fill:#626669}.p-icon--color-neutral-contrast-medium.p-icon--theme-dark{fill:#b0b1b2}.p-icon--color-neutral-contrast-low.p-icon--theme-light{fill:#c9cacb}.p-icon--color-neutral-contrast-low.p-icon--theme-dark{fill:#4a4e51}.p-icon--color-notification-success.p-icon--theme-light{fill:#018a16}.p-icon--color-notification-success.p-icon--theme-dark{fill:#01ba1d}.p-icon--color-notification-warning.p-icon--theme-light{fill:#ff9b00}.p-icon--color-notification-warning.p-icon--theme-dark{fill:#ff9b00}.p-icon--color-notification-error.p-icon--theme-light{fill:#e00000}.p-icon--color-notification-error.p-icon--theme-dark{fill:#fc1717}.p-icon--color-inherit{fill:currentColor}";
var Icon = /** @class */ (function () {
    function Icon(hostRef) {
        Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
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
        var iconClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('icon'), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("icon--size-" + this.size), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("icon--color-" + this.color), this.color !== 'inherit' && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("icon--theme-" + this.theme));
        return (Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["H"], { role: 'img' }, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: iconClasses, innerHTML: this.svgContent })));
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
        get: function () { return Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Icon, "watchers", {
        get: function () {
            return {
                "source": ["loadIcon"],
                "name": ["loadIcon"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return Icon;
}());
Icon.style = iconCss;
var textCss = ":host{display:block}.p-text{font-size:1rem;line-height:1.5;font-family:\"Porsche Next\", \"Arial Narrow\", Arial, sans-serif;font-weight:400;padding:0;margin:0;list-style-type:none;display:inherit;-webkit-transition:font-size 1ms linear;transition:font-size 1ms linear}.p-text--size-x-small{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small{font-size:1rem;line-height:1.5}.p-text--size-medium{font-size:1.5rem;line-height:1.5}.p-text--size-large{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit{font-size:inherit;line-height:inherit}@media (min-width: 480px){.p-text--size-x-small-xs{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small-xs{font-size:1rem;line-height:1.5}.p-text--size-medium-xs{font-size:1.5rem;line-height:1.5}.p-text--size-large-xs{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large-xs{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit-xs{font-size:inherit;line-height:inherit}}@media (min-width: 760px){.p-text--size-x-small-s{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small-s{font-size:1rem;line-height:1.5}.p-text--size-medium-s{font-size:1.5rem;line-height:1.5}.p-text--size-large-s{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large-s{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit-s{font-size:inherit;line-height:inherit}}@media (min-width: 1000px){.p-text--size-x-small-m{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small-m{font-size:1rem;line-height:1.5}.p-text--size-medium-m{font-size:1.5rem;line-height:1.5}.p-text--size-large-m{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large-m{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit-m{font-size:inherit;line-height:inherit}}@media (min-width: 1300px){.p-text--size-x-small-l{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small-l{font-size:1rem;line-height:1.5}.p-text--size-medium-l{font-size:1.5rem;line-height:1.5}.p-text--size-large-l{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large-l{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit-l{font-size:inherit;line-height:inherit}}@media (min-width: 1760px){.p-text--size-x-small-xl{font-size:0.75rem;line-height:1.6666666667}.p-text--size-small-xl{font-size:1rem;line-height:1.5}.p-text--size-medium-xl{font-size:1.5rem;line-height:1.5}.p-text--size-large-xl{font-size:2.25rem;line-height:1.3333333333}.p-text--size-x-large-xl{font-size:3.25rem;line-height:1.2307692308}.p-text--size-inherit-xl{font-size:inherit;line-height:inherit}}.p-text--weight-thin{font-weight:100}.p-text--weight-regular{font-weight:400}.p-text--weight-bold{font-weight:700}.p-text--align-left{text-align:left}.p-text--align-center{text-align:center}.p-text--align-right{text-align:right}.p-text--color-brand.p-text--theme-light{color:#d5001c}.p-text--color-brand.p-text--theme-dark{color:#d5001c}.p-text--color-default.p-text--theme-light{color:#000}.p-text--color-default.p-text--theme-dark{color:#fff}.p-text--color-neutral-contrast-high.p-text--theme-light{color:#323639}.p-text--color-neutral-contrast-high.p-text--theme-dark{color:#e3e4e5}.p-text--color-neutral-contrast-medium.p-text--theme-light{color:#626669}.p-text--color-neutral-contrast-medium.p-text--theme-dark{color:#b0b1b2}.p-text--color-neutral-contrast-low.p-text--theme-light{color:#c9cacb}.p-text--color-neutral-contrast-low.p-text--theme-dark{color:#4a4e51}.p-text--color-notification-success.p-text--theme-light{color:#018a16}.p-text--color-notification-success.p-text--theme-dark{color:#01ba1d}.p-text--color-notification-warning.p-text--theme-light{color:#ff9b00}.p-text--color-notification-warning.p-text--theme-dark{color:#ff9b00}.p-text--color-notification-error.p-text--theme-light{color:#e00000}.p-text--color-notification-error.p-text--theme-dark{color:#fc1717}.p-text--color-inherit{color:inherit}.p-text--ellipsis{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";
var Text = /** @class */ (function () {
    function Text(hostRef) {
        Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
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
    Text.prototype.componentDidLoad = function () {
        var _this = this;
        var tagName = this.element.tagName.toLowerCase();
        var style = tagName + " a {\n      outline: none transparent;\n      color: inherit;\n      text-decoration: underline;\n      -webkit-transition: outline-color .24s ease, color .24s ease;\n      transition: outline-color .24s ease, color .24s ease;\n    }\n\n    " + tagName + " a:hover {\n      color: #d5001c;\n    }\n\n    " + tagName + " a:focus {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }";
        Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["b"])(this.element, style);
        Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["t"])(this.textTag, 'font-size', function () {
            _this.textTag.style.lineHeight = "" + Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["a"])(_this.textTag);
        });
    };
    Text.prototype.render = function () {
        var _this = this;
        var TagType = this.tag;
        var textClasses = Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["c"])(Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('text'), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["m"])('text--size', this.size), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("text--weight-" + this.weight), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("text--align-" + this.align), Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("text--color-" + this.color), this.ellipsis && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])('text--ellipsis'), this.color !== 'inherit' && Object(_index_0a27866a_js__WEBPACK_IMPORTED_MODULE_1__["p"])("text--theme-" + this.theme));
        return (Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])(TagType, { class: textClasses, ref: function (el) { return _this.textTag = el; } }, Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["h"])("slot", null)));
    };
    Object.defineProperty(Text.prototype, "element", {
        get: function () { return Object(_index_381d535c_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); },
        enumerable: true,
        configurable: true
    });
    return Text;
}());
Text.style = textCss;



/***/ })

};;
//# sourceMappingURL=15.render-page.js.map