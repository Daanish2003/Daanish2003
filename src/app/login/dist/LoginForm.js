"use client";
"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var react_1 = require("react");
var Heading_1 = require("../components/Heading");
var Input_1 = require("../components/inputs/Input");
var react_hook_form_1 = require("react-hook-form");
var Button_1 = require("../components/Button");
var link_1 = require("next/link");
var ai_1 = require("react-icons/ai");
var react_2 = require("next-auth/react");
var react_hot_toast_1 = require("react-hot-toast");
var navigation_1 = require("next/dist/client/components/navigation");
var LoginForm = function () {
    var _a = react_1.useState(false), isLoading = _a[0], SetIsLoading = _a[1];
    var _b = react_hook_form_1.useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    }), register = _b.register, handleSubmit = _b.handleSubmit, errors = _b.formState.errors;
    var router = navigation_1.useRouter();
    var onSubmit = function (data) {
        SetIsLoading(true);
        react_2.signIn('credentials', __assign(__assign({}, data), { redirect: false })).then(function (callback) {
            SetIsLoading(false);
            if (callback === null || callback === void 0 ? void 0 : callback.ok) {
                router.push("/cart");
                router.refresh();
                react_hot_toast_1["default"].success("Logged In");
            }
            if (callback === null || callback === void 0 ? void 0 : callback.error) {
                react_hot_toast_1["default"].error(callback.error);
            }
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Heading_1["default"], { title: "Sign in for E-shop" }),
        React.createElement(Button_1["default"], { outline: true, label: "Continue with Google", icon: ai_1.AiOutlineGoogle, onClick: function () { } }),
        React.createElement("hr", { className: "bg-slate-300 w-full h-px" }),
        React.createElement(Input_1["default"], { id: "email", label: "Email", disabled: isLoading, register: register, errors: errors, required: true, type: "email" }),
        React.createElement(Input_1["default"], { id: "password", label: "Password", disabled: isLoading, register: register, errors: errors, required: true, type: "password" }),
        React.createElement(Button_1["default"], { label: isLoading ? "Loading" : "Login", onClick: handleSubmit(onSubmit) }),
        React.createElement("p", { className: "text-sm" },
            "Don't have an account? ",
            React.createElement(link_1["default"], { className: "underline", href: "/register" }, "Sign Up"))));
};
exports["default"] = LoginForm;
