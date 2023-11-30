"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var navigation_1 = require("next/dist/client/components/navigation");
var Heading_1 = require("../components/Heading");
var Input_1 = require("../components/inputs/Input");
var react_hook_form_1 = require("react-hook-form");
var Button_1 = require("../components/Button");
var link_1 = require("next/link");
var ai_1 = require("react-icons/ai");
var axios_1 = require("axios");
var react_hot_toast_1 = require("react-hot-toast");
var react_2 = require("next-auth/react");
var RegisterForm = function () {
    var _a = react_1.useState(false), isLoading = _a[0], setIsLoading = _a[1];
    var _b = react_hook_form_1.useForm({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    }), register = _b.register, handleSubmit = _b.handleSubmit, errors = _b.formState.errors;
    var router = navigation_1.useRouter();
    var onSubmit = function (data) {
        setIsLoading(true);
        axios_1["default"].post('/api/register', data).then(function () {
            react_hot_toast_1["default"].success("Account created");
            react_2.signIn('credentials', {
                email: data.email,
                passsword: data.password,
                redirect: false
            }).then(function (callback) {
                if (callback === null || callback === void 0 ? void 0 : callback.ok) {
                    router.push('/cart');
                    router.refresh();
                    react_hot_toast_1["default"].success('Logged In');
                }
                if (callback === null || callback === void 0 ? void 0 : callback.error) {
                    react_hot_toast_1["default"].error(callback.error);
                }
            });
        })["catch"](function () { return react_hot_toast_1["default"].error("Something went wrong"); })["finally"](function () {
            setIsLoading(false);
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Heading_1["default"], { title: "Sign-up for E-shop" }),
        React.createElement(Button_1["default"], { outline: true, label: "Sign up with Google", icon: ai_1.AiOutlineGoogle, onClick: function () { } }),
        React.createElement("hr", { className: "bg-slate-300 w-full h-px" }),
        React.createElement(Input_1["default"], { id: "name", label: "Name", disabled: isLoading, register: register, errors: errors, required: true, type: "string" }),
        React.createElement(Input_1["default"], { id: "email", label: "Email", disabled: isLoading, register: register, errors: errors, required: true, type: "email" }),
        React.createElement(Input_1["default"], { id: "password", label: "Password", disabled: isLoading, register: register, errors: errors, required: true, type: "password" }),
        React.createElement(Button_1["default"], { label: isLoading ? "Loading" : "SignUp", onClick: handleSubmit(onSubmit) }),
        React.createElement("p", { className: "text-sm" },
            "Already have an account? ",
            React.createElement(link_1["default"], { className: "underline", href: "/login" }, "Login"))));
};
exports["default"] = RegisterForm;
