"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var formatPrice_1 = require("../../utils/formatPrice");
var truncateText_1 = require("../../utils/truncateText");
var image_1 = require("next/image");
var setQuantity_1 = require("../components/products/setQuantity");
var useCart_1 = require("../../hooks/useCart");
var ItemContent = function (_a) {
    var item = _a.item;
    var _b = useCart_1.useCart(), handleRemoveProductFromCart = _b.handleRemoveProductFromCart, handleCartQtyIncrease = _b.handleCartQtyIncrease, handleCartQtyDecrease = _b.handleCartQtyDecrease;
    return (React.createElement("div", { className: " grid grid-cols-5 text-xs md:text-sm gap-4 border-t-[1.5px] border-slate-200 py-4 items-center" },
        React.createElement("div", { className: "col-span-2 justify-self-start flex gap-2 md:gap-4" },
            React.createElement(link_1["default"], { href: "/product/" + item.id },
                React.createElement("div", { className: "relative w-[70px] aspect-square" },
                    React.createElement(image_1["default"], { src: item.selectedImg.image, alt: item.name, fill: true, className: "object-contain" }))),
            React.createElement("div", { className: "flex flex-col justify-between" },
                React.createElement(link_1["default"], { href: "/product/" + item.id }, truncateText_1.truncateText(item.name)),
                React.createElement("div", null, item.selectedImg.color),
                React.createElement("div", { className: "w-[70px]" }),
                React.createElement("button", { className: "text-slate-500 underline", onClick: function () { handleRemoveProductFromCart(item); } }, "Remove"))),
        React.createElement("div", { className: "justify-self-center" }, formatPrice_1.formatPrice(item.price)),
        React.createElement("div", { className: "justify-self-center" },
            React.createElement(setQuantity_1["default"], { cartCounter: true, cartProduct: item, handleQtyIncrease: function () { handleCartQtyIncrease(item); }, handleQtyDecrease: function () { handleCartQtyDecrease(item); } })),
        React.createElement("div", { className: "justify-self-end font-semibold" }, formatPrice_1.formatPrice(item.price * item.quantity))));
};
exports["default"] = ItemContent;
