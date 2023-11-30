'use client';
"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var useCart_1 = require("../../hooks/useCart");
var md_1 = require("react-icons/md");
var Heading_1 = require("../components/Heading");
var Button_1 = require("../components/Button");
var ItemContent_1 = require("./ItemContent");
var formatPrice_1 = require("../../utils/formatPrice");
var CartClient = function () {
    var _a = useCart_1.useCart(), cartProducts = _a.cartProducts, handleClearCart = _a.handleClearCart, cartTotalAmount = _a.cartTotalAmount;
    if (!cartProducts || cartProducts.length === 0) {
        return (React.createElement("div", { className: "flex flex-col item-center" },
            React.createElement("div", { className: "text-2xl" }, "Your cart is empty"),
            React.createElement("div", null,
                React.createElement(link_1["default"], { href: "/", className: "text-slate-500 flex items-center gap-1 mt-2" },
                    React.createElement(md_1.MdArrowBack, null),
                    React.createElement("span", null, "Start Shopping")))));
    }
    return (React.createElement("div", null,
        React.createElement(Heading_1["default"], { title: "Shopping Cart", center: true }),
        React.createElement("div", { className: "grid grid-cols-5 text-xs gap-4 pb-2 items-center mt-8" },
            React.createElement("div", { className: "col-span-2 justify-self-start" }, "PRODUCT"),
            React.createElement("div", { className: "justify-self-center" }, "PRICE"),
            React.createElement("div", { className: "justify-self-center" }, "QUALITY"),
            React.createElement("div", { className: "justify-self-end" }, "TOTAL")),
        React.createElement("div", null, cartProducts && cartProducts.map(function (item) {
            return React.createElement(ItemContent_1["default"], { key: item.id, item: item });
        })),
        React.createElement("div", { className: "border-t-[1.5px] border-slate-200 py-4 flex justify-between gap-4" },
            React.createElement("div", { className: "w-[90px]" },
                React.createElement(Button_1["default"], { label: "Clear Cart", onClick: function () { handleClearCart(); }, small: true, outline: true })),
            React.createElement("div", { className: "text-sm flex flex-col gap-1 items-start" },
                React.createElement("div", { className: "flex justify-between w-full text-base font-semibold" },
                    React.createElement("span", null, "Subtotal"),
                    React.createElement("span", null, formatPrice_1.formatPrice(cartTotalAmount))),
                React.createElement("p", { className: "text-slate-500" }, "Taxes and Shipping calculate at checkout"),
                React.createElement(Button_1["default"], { label: "Checkout", onClick: function () { } }),
                React.createElement(link_1["default"], { href: "/", className: "text-slate-500 flex items-center gap-1 mt-2" },
                    React.createElement(md_1.MdArrowBack, null),
                    React.createElement("span", null, "Continue Shopping"))))));
};
exports["default"] = CartClient;
