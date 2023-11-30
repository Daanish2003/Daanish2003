"use strict";
exports.__esModule = true;
var react_1 = require("react");
var HomeBanner_1 = require("./components/HomeBanner");
var Container_1 = require("./components/Container");
var Products_1 = require("../utils/Products");
var ProductCard_1 = require("./components/products/ProductCard");
var page = function () {
    return (react_1["default"].createElement("div", { className: "p-8" },
        react_1["default"].createElement(Container_1["default"], null,
            react_1["default"].createElement("div", null,
                react_1["default"].createElement(HomeBanner_1["default"], null)),
            react_1["default"].createElement("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8" }, Products_1.products.map(function (product) {
                return react_1["default"].createElement(ProductCard_1["default"], { data: product });
            })))));
};
exports["default"] = page;
