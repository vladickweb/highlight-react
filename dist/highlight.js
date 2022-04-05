"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
function Highlight(_a) {
    var children = _a.children, search = _a.search;
    if (search === '' || !search) {
        return children;
    }
    var markSearch = function (children, HTMLtype) {
        var isString = typeof children === 'string';
        var isArray = Array.isArray(children);
        var isElement = !isString && !isArray;
        var regex = new RegExp(search, 'gi');
        if (!children) {
            return '';
        }
        if (isString) {
            if (!search || search === '') {
                return children;
            }
            var markedElementString = children.replace(regex, function (match) {
                if (!match)
                    return match;
                return "<mark>" + match + "</mark>";
            });
            return react_1.createElement(HTMLtype || 'span', {
                dangerouslySetInnerHTML: { __html: markedElementString }
            });
        }
        if (isArray) {
            return children.map(function (child) { return markSearch(child); });
        }
        if (isElement) {
            var _a = children.props, childChildren = _a.children, props = __rest(_a, ["children"]);
            var newChildren = markSearch(childChildren);
            return react_1.createElement(HTMLtype || (children === null || children === void 0 ? void 0 : children.type), __assign(__assign({}, props), { children: newChildren }));
        }
        return children;
    };
    return react_1.default.createElement(react_1.default.Fragment, null, markSearch(children));
}
exports.default = Highlight;
