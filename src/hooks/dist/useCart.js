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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.useCart = exports.CartContextProvider = exports.CartContext = void 0;
var react_1 = require("react");
var react_hot_toast_1 = require("react-hot-toast");
exports.CartContext = react_1.createContext(null);
exports.CartContextProvider = function (props) {
    var _a = react_1.useState(0), cartTotalQty = _a[0], setCartTotalQty = _a[1];
    var _b = react_1.useState(0), cartTotalAmount = _b[0], setCartTotalAmount = _b[1];
    var _c = react_1.useState(null), cartProducts = _c[0], setCartProducts = _c[1];
    react_1.useEffect(function () {
        var cartItems = localStorage.getItem("eShopCartItems");
        var cartProducts = JSON.parse(cartItems);
        setCartProducts(cartProducts);
    }, []);
    react_1.useEffect(function () {
        var getTotals = function () {
            if (cartProducts) {
                var _a = cartProducts === null || cartProducts === void 0 ? void 0 : cartProducts.reduce(function (acc, item) {
                    var itemTotal = item.price * item.quantity;
                    acc.total += itemTotal;
                    acc.qty += item.quantity;
                    return acc;
                }, {
                    total: 0,
                    qty: 0
                }), total = _a.total, qty = _a.qty;
                setCartTotalQty(qty);
                setCartTotalAmount(total);
            }
        };
        getTotals();
    }, [cartProducts]);
    var handleAddProductToCart = react_1.useCallback(function (product) {
        setCartProducts(function (prev) {
            var updatedCart;
            if (prev) {
                updatedCart = __spreadArrays(prev, [product]);
            }
            else {
                updatedCart = [product];
            }
            react_hot_toast_1.toast.success("Product added to cart");
            localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
            return updatedCart;
        });
    }, [cartProducts]);
    var handleRemoveProductFromCart = react_1.useCallback(function (product) {
        if (cartProducts) {
            var filteredProducts = cartProducts.filter(function (item) {
                return item.id !== product.id;
            });
            setCartProducts(filteredProducts);
            react_hot_toast_1.toast.success("Product removed");
            localStorage.setItem("eShopCartItems", JSON.stringify(filteredProducts));
        }
    }, [cartProducts]);
    var handleCartQtyIncrease = react_1.useCallback(function (product) {
        var updatedCart;
        if (product.quantity === 99) {
            return react_hot_toast_1.toast.error("Max quantity reached");
        }
        if (cartProducts) {
            updatedCart = __spreadArrays(cartProducts);
            var existingIndex = cartProducts.findIndex(function (item) { return item.id === product.id; });
            if (existingIndex > -1) {
                updatedCart[existingIndex].quantity = ++updatedCart[existingIndex].quantity;
            }
            setCartProducts(updatedCart);
            localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
        }
    }, [cartProducts]);
    var handleCartQtyDecrease = react_1.useCallback(function (product) {
        var updatedCart;
        if (product.quantity === 1) {
            return react_hot_toast_1.toast.error("Minimum quantity reached");
        }
        if (cartProducts) {
            updatedCart = __spreadArrays(cartProducts);
            var existingIndex = cartProducts.findIndex(function (item) { return item.id === product.id; });
            if (existingIndex > -1) {
                updatedCart[existingIndex].quantity = --updatedCart[existingIndex].quantity;
            }
            setCartProducts(updatedCart);
            localStorage.setItem("eShopCartItems", JSON.stringify(updatedCart));
        }
    }, [cartProducts]);
    var handleClearCart = react_1.useCallback(function () {
        setCartProducts(null);
        setCartTotalQty(0);
        localStorage.setItem("eShopCartItems", JSON.stringify(null));
    }, [cartProducts]);
    var value = {
        cartTotalQty: cartTotalQty,
        cartTotalAmount: cartTotalAmount,
        cartProducts: cartProducts,
        handleAddProductToCart: handleAddProductToCart,
        handleRemoveProductFromCart: handleRemoveProductFromCart,
        handleCartQtyIncrease: handleCartQtyIncrease,
        handleCartQtyDecrease: handleCartQtyDecrease,
        handleClearCart: handleClearCart
    };
    return React.createElement(exports.CartContext.Provider, __assign({ value: value }, props));
};
exports.useCart = function () {
    var context = react_1.useContext(exports.CartContext);
    if (context === null) {
        throw new Error("useCart must be used within a CartContextProvider");
    }
    return context;
};
