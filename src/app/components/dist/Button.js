'use client';
"use strict";
exports.__esModule = true;
var Button = function (_a) {
    var label = _a.label, disabled = _a.disabled, outline = _a.outline, small = _a.small, custom = _a.custom, Icon = _a.icon, onClick = _a.onClick;
    return (React.createElement("button", { onClick: onClick, disabled: disabled, className: "\n    disabled:opacity-70\n    disabled:cursor-not-allowed\n    rounded-md\n    hover:opacity-80\n    transition\n    w-full\n    border-slate-700\n    flex\n    items-center\n    justify-center\n    gap-2\n    " + (outline ? "bg-white" : 'bg-slate-700') + "\n    " + (outline ? "text-slate-700" : 'text-white') + "\n    " + (small ? "px-2 py-1 text-sm font-light border-[1px]" : 'px-4 py-3 text-md font-semibold border-2') + "\n    " + (custom ? custom : '') + "\n    " },
        Icon && React.createElement(Icon, { size: 24 }),
        label));
};
exports["default"] = Button;
