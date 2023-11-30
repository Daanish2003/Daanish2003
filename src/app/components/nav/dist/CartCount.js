"use client";
"use strict";
exports.__esModule = true;
var navigation_1 = require("next/navigation");
var react_1 = require("react");
var useCart_1 = require("../../../hooks/useCart");
var ci_1 = require("react-icons/ci");
var CartCount = function () {
    var cartTotalQty = useCart_1.useCart().cartTotalQty;
    var router = navigation_1.useRouter();
    return (react_1["default"].createElement("div", { className: "relative cursor-pointer", onClick: function () { return router.push("/cart"); } },
        react_1["default"].createElement("div", { className: "text-3xl" },
            react_1["default"].createElement(ci_1.CiShoppingCart, null),
            react_1["default"].createElement("span", { className: "absolute top-[-10px] right-[-10px] bg-slate-700 text-white h-6 w-6 rounded-full flex items-center justify-center text-sm" }, cartTotalQty))));
};
exports["default"] = CartCount;
