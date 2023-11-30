"use strict";
exports.__esModule = true;
exports.truncateText = void 0;
exports.truncateText = function (str) {
    if (str.length < 25)
        return str;
    return str.substring(0, 25) + "...";
};
