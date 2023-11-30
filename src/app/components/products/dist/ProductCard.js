'use client';
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var truncateText_1 = require("../../../utils/truncateText");
var formatPrice_1 = require("../../../utils/formatPrice");
var material_1 = require("@mui/material");
var navigation_1 = require("next/navigation");
var ProductCard = function (_a) {
    var data = _a.data;
    var router = navigation_1.useRouter();
    var productRating = data.reviews.reduce(function (acc, item) { return acc + item.rating; }, 0) / data.reviews.length;
    return (React.createElement("div", { onClick: function () { return router.push("/product/" + data.id); }, className: "col-span-1\r\n     cursor-pointer \r\n     border-[1.2px]\r\n    border-slate-200\r\n    bg-slate-50 \r\n    rounded-sm \r\n    p-2\r\n    transition \r\n    hover:scale-105 \r\n    text-center \r\n    text-sm" },
        React.createElement("div", { className: "flex flex-col item-center w-full gap-1" },
            React.createElement("div", { className: "aspect-square overflow-hidden relative w-full" },
                React.createElement(image_1["default"], { fill: true, src: data.images[0].image, alt: data.name, className: "w-full h-full object-contain" })),
            React.createElement("div", { className: "mt-4" }, truncateText_1.truncateText(data.name)),
            React.createElement("div", null,
                React.createElement(material_1.Rating, { value: 3.2, readOnly: true })),
            React.createElement("div", null,
                data.reviews.length,
                " reviews"),
            React.createElement("div", { className: "font-semibold" }, formatPrice_1.formatPrice(data.price)))));
};
exports["default"] = ProductCard;
