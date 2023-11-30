"use strict";
exports.__esModule = true;
var Heading = function (_a) {
    var title = _a.title, center = _a.center;
    return (React.createElement("div", { className: center ? 'text-center' : 'text-start' },
        React.createElement("h1", { className: "font-bold text-2xl" }, title)));
};
exports["default"] = Heading;
