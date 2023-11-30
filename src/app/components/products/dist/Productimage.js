'use client';
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var Productimage = function (_a) {
    var cartProduct = _a.cartProduct, product = _a.product, handleColorSelect = _a.handleColorSelect;
    return (React.createElement("div", { className: "grid\r\n    grid-cols-6\r\n    gap-2\r\n    h-full\r\n    max-h-[500px]\r\n    min-h-[300px]\r\n    sm:min-h-[400px]\r\n    " },
        React.createElement("div", { className: "flex\r\n       flex-col\r\n       items-center\r\n       justify-center\r\n       gap-4\r\n       cursor-pointer\r\n       border\r\n       h-full\r\n       max-h-[500px]\r\n       min-h-[300px]\r\n       sm:min-h-[400px]\r\n       " }, product.images.map(function (image) {
            return (React.createElement("div", { key: image.color, onClick: function () { return handleColorSelect(image); }, className: "relative w-[80%] \n        aspect-square rounded border-teal-300\n        " + (cartProduct.selectedImg.color === image.color ? 'border-[1.5px]' : 'border-none') + "\n        " },
                React.createElement(image_1["default"], { src: image.image, alt: image.color, fill: true, className: "object-contain" })));
        })),
        React.createElement("div", { className: "col-span-5 relative aspect-square" },
            React.createElement(image_1["default"], { src: cartProduct.selectedImg.image, alt: cartProduct.name, fill: true, className: "w-full h-full object-contain\r\n         max-h-[500px]\r\n         min-h-[300px]\r\n         sm:min-h-[400px]" }))));
};
exports["default"] = Productimage;
