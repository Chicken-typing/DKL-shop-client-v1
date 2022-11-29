import { combineReducers } from "redux";
import fetchProductReducer from "./fetchProductReducer";
import fetchReducer from "./fetchReducer";
import fetchStaticReducer from "./fetchStaticReducer";
import fetchOrderReducer from "./fetchOrderReducer";
import fetchAdvertiseReducer from "./fetchAdvertiseReducer";
import CartReducer from "./CartReducer";
import ShippingReducer from "./ShippingReducer"

const rootReducer = combineReducers({
    fetch: fetchReducer,
    fetchProduct: fetchProductReducer,
    fetchStatic: fetchStaticReducer,
    fetchOrder: fetchOrderReducer,
    fetchAdvertise: fetchAdvertiseReducer,
    Cart: CartReducer,
    ShippingInfo: ShippingReducer
});
export default rootReducer;