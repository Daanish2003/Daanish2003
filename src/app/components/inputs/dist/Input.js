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
var Input = function (_a) {
    var id = _a.id, label = _a.label, type = _a.type, disabled = _a.disabled, required = _a.required, register = _a.register, errors = _a.errors;
    return (React.createElement("div", { className: "w-full relative" },
        React.createElement("input", __assign({ autoComplete: "off", id: id, disabled: disabled }, register(id, { required: required }), { placeholder: "", type: type, className: "\n        peer\n        w-full\n        p-4\n        pt-6\n        outline-none\n        bg-white\n        font-light\n        border-2\n        rounded-md\n        transition\n        disabled:opacity-70\n        disabled:cursor-not-allowed\n        " + (errors[id] ? "border-red-400" : "border-slate-300") + "\n        " + (errors[id] ? "focus: border-red-400" : "focus: border-slate-300") + "\n        " })),
        React.createElement("label", { htmlFor: id, className: "absolute\n        cursor-text\n        text-md\n        duration-150\n        transform\n        -translate-y-3\n        top-5\n        z-10\n        origin-[0]\n        left-4\n        peer-placeholder-shown:scale-100\n        peer-placeholder-shown:translate-y-0\n        peer-focus:scale-75\n        peer-focus:-translate-y-4\n        " + (errors[id] ? "text-rose-500" : "text-slate-400") + "\n        " }, label)));
};
exports["default"] = Input;
