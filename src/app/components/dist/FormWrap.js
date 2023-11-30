"use strict";
exports.__esModule = true;
var react_1 = require("react");
var FormWrap = function (_a) {
    var children = _a.children;
    return (react_1["default"].createElement("div", { className: "min-h-fit h-full flex items-center justify-center pb-12 pt-24" },
        react_1["default"].createElement("div", { className: "max-w-[650px] w-full flex flex-col gap-6 items-center shadow-xl shadow-slate-200 rounded-md p-4 md:p-8" }, children)));
};
exports["default"] = FormWrap;
