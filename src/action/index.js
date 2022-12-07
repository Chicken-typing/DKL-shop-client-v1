import { fetchAPI, fetchAPISuccess, fetchAPIFailure } from "./fetch";
import { fetchProduct, fetchProductSuccess } from "./fetchProducts";
import { fetchOrders, fetchOrdersSuccess } from "./fetchOrders";
import {
    fetchStatic,
    fetchAccessionSuccess,
    fetchRevenueSuccess,
    fetchNeededSuccess,
} from "./fetchStatic";
import { addToCart, removeFromCart, deleteFromCart } from "./Cart";
import { savePaymentMethod, saveShippingAddress } from "./Shipping";
import { fetchUser, fetchUserSuccess } from "./fetchUser";
import { login, logout } from "./authenUser";
import { getPath } from "./getPathname";
export {
    fetchAPI,
    fetchAPISuccess,
    fetchAPIFailure,
    fetchProduct,
    fetchProductSuccess,
    fetchStatic,
    fetchAccessionSuccess,
    fetchRevenueSuccess,
    fetchNeededSuccess,
    fetchOrders,
    fetchOrdersSuccess,
    addToCart,
    removeFromCart,
    deleteFromCart,
    savePaymentMethod,
    saveShippingAddress,
    fetchUser,
    fetchUserSuccess,
    login,
    logout,
    getPath,

};