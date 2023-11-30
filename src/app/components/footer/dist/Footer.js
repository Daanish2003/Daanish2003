"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Container_1 = require("../Container");
var FooterList_1 = require("./FooterList");
var link_1 = require("next/link");
var md_1 = require("react-icons/md");
var ai_1 = require("react-icons/ai");
var Footer = function () {
    return (react_1["default"].createElement("footer", { className: "bg-slate-700 text-slate-200 text-sm mt-16 " },
        react_1["default"].createElement(Container_1["default"], null,
            react_1["default"].createElement("div", { className: "flex flex-col md:flex-row justify-between pt-16 pb-8" },
                react_1["default"].createElement(FooterList_1["default"], null,
                    react_1["default"].createElement("h3", { className: "text-base font-bold" }, "Shop Categories"),
                    react_1["default"].createElement(link_1["default"], { href: "#" }, "Phones"),
                    react_1["default"].createElement(link_1["default"], { href: "#" }, "Laptops"),
                    react_1["default"].createElement(link_1["default"], { href: "#" }, "Desktops"),
                    react_1["default"].createElement(link_1["default"], { href: "#" }, "Watches"),
                    react_1["default"].createElement(link_1["default"], { href: "#" }, "TVs"),
                    react_1["default"].createElement(link_1["default"], { href: "#" }, "Accessories")),
                react_1["default"].createElement(FooterList_1["default"], null,
                    react_1["default"].createElement("h3", { className: "text-base font-bold" }, "Customer Service"),
                    react_1["default"].createElement(link_1["default"], { href: "#" }, "Contact Us"),
                    react_1["default"].createElement(link_1["default"], { href: "#" }, "Shipping Policy"),
                    react_1["default"].createElement(link_1["default"], { href: "#" }, "Return & Exchanges"),
                    react_1["default"].createElement(link_1["default"], { href: "#" }, "FAQs")),
                react_1["default"].createElement("div", { className: "w-full md:w-1/2 mb-6 md:mb-0" },
                    react_1["default"].createElement("h3", { className: "text-base font-bold" }, "About Us"),
                    react_1["default"].createElement("p", { className: "mb-2" }, "At our electronic store, we are dedicated to providing the latest and greatest devices and accessories to our customers. With a wide selection of phones, TVs, laptops, watches and accessories."),
                    react_1["default"].createElement("p", null,
                        "\u00A9 ",
                        new Date().getFullYear(),
                        " E-Shop. All rights reserved")),
                react_1["default"].createElement(FooterList_1["default"], null,
                    react_1["default"].createElement("h3", { className: "text-base font-bold mb-2" }, "Follow Us"),
                    react_1["default"].createElement("div", { className: "flex gap-2" },
                        react_1["default"].createElement(link_1["default"], { href: "#" },
                            react_1["default"].createElement(md_1.MdFacebook, { size: 24 })),
                        react_1["default"].createElement(link_1["default"], { href: "#" },
                            react_1["default"].createElement(ai_1.AiFillTwitterCircle, { size: 24 })),
                        react_1["default"].createElement(link_1["default"], { href: "#" },
                            react_1["default"].createElement(ai_1.AiFillInstagram, { size: 24 })),
                        react_1["default"].createElement(link_1["default"], { href: "#" },
                            react_1["default"].createElement(ai_1.AiFillYoutube, { size: 24 }))))))));
};
exports["default"] = Footer;
