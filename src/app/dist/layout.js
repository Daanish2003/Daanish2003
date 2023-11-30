"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var Navbar_1 = require("./components/nav/Navbar");
var Footer_1 = require("./components/footer/Footer");
var CartProviders_1 = require("../providers/CartProviders");
var react_hot_toast_1 = require("react-hot-toast");
var poppins = google_1.Poppins({ subsets: ['latin'], weight: ['400', '700'] });
exports.metadata = {
    title: 'Eshop',
    description: 'E-commerce website for buying products'
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: poppins.className + " text-slate-700" },
            React.createElement(react_hot_toast_1.Toaster, { toastOptions: {
                    style: {
                        background: 'rgb(51, 65, 85)',
                        color: '#fff'
                    }
                } }),
            React.createElement(CartProviders_1["default"], null,
                React.createElement("div", { className: "flex flex-col min-h-screen" },
                    React.createElement(Navbar_1["default"], null),
                    React.createElement("main", { className: "flex-grow" }, children),
                    React.createElement(Footer_1["default"], null))))));
}
exports["default"] = RootLayout;
