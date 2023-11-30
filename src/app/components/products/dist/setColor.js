'use client';
"use strict";
exports.__esModule = true;
var SetColor = function (_a) {
    var images = _a.images, cartProduct = _a.cartProduct, handleColorSelect = _a.handleColorSelect;
    return (React.createElement("div", null,
        React.createElement("div", { className: "flex gap-4 items-center" },
            React.createElement("span", { className: "font-semibold" }, "COLOR:"),
            React.createElement("div", { className: "flex gap-1" }, images.map(function (image) {
                return (React.createElement("div", { key: image.color, onClick: function () { return handleColorSelect(image); }, className: "\n                h-7\n                w-7\n                rounded-full\n                border-teal-300\n                flex\n                items-center\n                justify-center\n                " + (cartProduct.selectedImg.color === image.color ? "border-[1.5px]" : "border-none") + "\n                " },
                    React.createElement("div", { style: { background: image.colorCode }, className: "h-5 w-5 rounded-full border-[1.2px] border-slate-300 cursor-pointer" })));
            })))));
};
exports["default"] = SetColor;
