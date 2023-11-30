'use client';
"use strict";
exports.__esModule = true;
var useCart_1 = require("../hooks/useCart");
var CartProvider = function (_a) {
    var children = _a.children;
    return React.createElement(useCart_1.CartContextProvider, null, children);
};
exports["default"] = CartProvider;
