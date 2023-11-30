"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var fa_1 = require("react-icons/fa");
var Avatar = function (_a) {
    var src = _a.src;
    if (src) {
        return (React.createElement(image_1["default"], { src: src, alt: "Avatar", className: "rounded-full", height: "30", width: "30" }));
    }
    return (React.createElement(fa_1.FaUserCircle, null));
};
exports["default"] = Avatar;
