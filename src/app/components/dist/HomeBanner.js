"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var HomeBanner = function () {
    return (React.createElement("div", { className: "relative bg-gradient-to-r from-sky-500 to-sky-700 mb-8" },
        React.createElement("div", { className: "mx-auto px-8 py-12 flex flex-col gap-2 and md:flex-row items-center justify-evenly" },
            React.createElement("div", { className: "mb-8 md:mb-0 text-center" },
                React.createElement("h1", { className: "text-4xl md:text-6xl font-bold\r\n                text-white mb-4" }, "Summer Sale!"),
                React.createElement("p", { className: "text-lg md:text-xl text-white mb-2" }, "Enjoy discount on selected items"),
                React.createElement("p", { className: "text-2xl md:text-5xl text-yellow-400 font-bold" }, "GET 50% OFF")),
            React.createElement("div", { className: "w-1/3 relative aspect-video" },
                React.createElement(image_1["default"], { src: "/banner-image.png", fill: true, alt: "Banner Image", className: "object-contain" })))));
};
exports["default"] = HomeBanner;
