'use client';
"use strict";
exports.__esModule = true;
var btnStyle = "border-[1.2px] border-slate-300 px-2 rounded";
var SetQuantity = function (_a) {
    var cartCounter = _a.cartCounter, cartProduct = _a.cartProduct, handleQtyIncrease = _a.handleQtyIncrease, handleQtyDecrease = _a.handleQtyDecrease;
    return (React.createElement("div", { className: "flex gap-8 items-center" },
        cartCounter ? " " : React.createElement("div", { className: "font-semibold" }, "Quantity:"),
        React.createElement("div", { className: "flex gap-4 items-center text-base" },
            React.createElement("button", { onClick: handleQtyDecrease, className: btnStyle }, "-")),
        React.createElement("div", null, cartProduct.quantity),
        React.createElement("div", { className: "flex gap-4 items-center text-base" },
            React.createElement("button", { onClick: handleQtyIncrease, className: btnStyle }, "+"))));
};
exports["default"] = SetQuantity;
