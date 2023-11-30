"use strict";
exports.__esModule = true;
var MenuItem = function (_a) {
    var children = _a.children, onClick = _a.onClick;
    return (React.createElement("div", { onClick: onClick, className: "px-4 py-3 hover:bg-neutral-100 transition" }, children));
};
exports["default"] = MenuItem;
