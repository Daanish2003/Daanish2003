"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Container_1 = require("../components/Container");
var FormWrap_1 = require("../components/FormWrap");
var RegisterForm_1 = require("./RegisterForm");
var Register = function () {
    return (react_1["default"].createElement(Container_1["default"], null,
        react_1["default"].createElement(FormWrap_1["default"], null,
            react_1["default"].createElement(RegisterForm_1["default"], null))));
};
exports["default"] = Register;
