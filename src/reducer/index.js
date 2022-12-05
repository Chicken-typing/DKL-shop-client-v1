import { combineReducers } from "redux";
import fetchProductReducer from "./fetchProductReducer";
import fetchReducer from "./fetchReducer";
import fetchStaticReducer from "./fetchStaticReducer";
import fetchOrderReducer from "./fetchOrderReducer";
import fetchAdvertiseReducer from "./fetchAdvertiseReducer";
import CartReducer from "./CartReducer";
import ShippingReducer from "./ShippingReducer"
import PaymentReducer from "./PaymentReducer";

const rootReducer = combineReducers({
    fetch: fetchReducer,
    fetchProduct: fetchProductReducer,
    fetchStatic: fetchStaticReducer,
    fetchOrder: fetchOrderReducer,
    fetchAdvertise: fetchAdvertiseReducer,
    Cart: CartReducer,
    ShippingInfo: ShippingReducer,
    PaymentMethod: PaymentReducer,
});
export default rootReducer;