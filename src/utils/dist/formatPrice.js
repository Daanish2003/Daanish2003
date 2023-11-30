"use strict";
exports.__esModule = true;
exports.formatPrice = void 0;
exports.formatPrice = function (amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
};
