"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Container_1 = require("../Container");
var link_1 = require("next/link");
var google_1 = require("next/font/google");
var CartCount_1 = require("./CartCount");
var UserMenu_1 = require("./UserMenu");
var redressed = google_1.Redressed({ subsets: ['latin'], weight: ["400"] });
var Navbar = function () {
    return (react_1["default"].createElement("div", { className: "\r\n    sticky \r\n    top-0 \r\n    w-full\r\n    bg-slate-200 \r\n    z-30 \r\n    shadow-sm\r\n    " },
        react_1["default"].createElement("div", { className: "py-4 border-b-[1px]" },
            react_1["default"].createElement(Container_1["default"], null,
                react_1["default"].createElement("div", { className: "\r\n                flex\r\n                item-center\r\n                justify-between\r\n                gap-3\r\n                md:gap-0\r\n                " },
                    react_1["default"].createElement(link_1["default"], { href: "/", className: redressed.className + " font-bold text-2xl" }, "E-shop"),
                    react_1["default"].createElement("div", { className: "hidden md:block" }, "Search"),
                    react_1["default"].createElement("div", { className: "\r\n                flex \r\n                item-center\r\n                justify-between\r\n                gap-8\r\n                md:gap-12\r\n                " },
                        react_1["default"].createElement(CartCount_1["default"], null),
                        react_1["default"].createElement(UserMenu_1["default"], null)))))));
};
exports["default"] = Navbar;
