"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Avatar_1 = require("../products/Avatar");
var ai_1 = require("react-icons/ai");
var link_1 = require("next/link");
var MenuItem_1 = require("./MenuItem");
var react_2 = require("next-auth/react");
var BackDrop_1 = require("./BackDrop");
var UserMenu = function () {
    var _a = react_1.useState(false), isOpen = _a[0], setIsOpen = _a[1];
    var toggleOpen = react_1.useCallback(function () {
        setIsOpen(function (prev) { return !prev; });
    }, []);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "relative z-30" },
            React.createElement("div", { onClick: toggleOpen, className: "p-2\r\n        border-[1px]\r\n        border-slate-400\r\n        flex\r\n        flex-row\r\n        items-center\r\n        gap-1\r\n        rounded-full\r\n        cursor-pointer\r\n        hover:shadow-md\r\n        transition\r\n        text-slate-700\r\n        " },
                React.createElement(Avatar_1["default"], null),
                React.createElement(ai_1.AiFillCaretDown, null)),
            isOpen && (React.createElement("div", { className: "absolute\r\n            rounded-md\r\n            shadow-md\r\n            w-[170px]\r\n            bg-white\r\n            overflow-hidden\r\n            right-0\r\n            top-12\r\n            text-sm\r\n            flex\r\n            flex-col\r\n            cursor-pointer" },
                React.createElement("div", null,
                    React.createElement(link_1["default"], { href: "/orders" },
                        React.createElement(MenuItem_1["default"], { onClick: toggleOpen }, "Your Orders")),
                    React.createElement(link_1["default"], { href: "/admin" },
                        React.createElement(MenuItem_1["default"], { onClick: toggleOpen }, "Admin Dashboard")),
                    React.createElement(MenuItem_1["default"], { onClick: function () { toggleOpen(); react_2.signOut(); } }, "Logout")),
                React.createElement("div", null,
                    React.createElement(link_1["default"], { href: "/login" },
                        React.createElement(MenuItem_1["default"], { onClick: toggleOpen }, "Login")),
                    React.createElement(link_1["default"], { href: "/register" },
                        React.createElement(MenuItem_1["default"], { onClick: toggleOpen }, "Register")))))),
        isOpen ? React.createElement(BackDrop_1["default"], { onClick: toggleOpen }) : null));
};
exports["default"] = UserMenu;
