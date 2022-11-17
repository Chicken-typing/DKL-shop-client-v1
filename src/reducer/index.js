import { combineReducers } from "redux";
import fetchProductReducer from "./fetchProductReducer";
import fetchReducer from "./fetchReducer";
import fetchStaticReducer from "./fetchStaticReducer";
import fetchOrderReducer from "./fetchOrderReducer";
import fetchAdvertiseReducer from "./fetchAdvertiseReducer";
import fetchUserReducer from "./fetchUserReducer";

const rootReducer = combineReducers({
  fetch: fetchReducer,
  fetchProduct: fetchProductReducer,
  fetchStatic: fetchStaticReducer,
  fetchOrder: fetchOrderReducer,
  fetchAdvertise: fetchAdvertiseReducer,
  fetchUser: fetchUserReducer,
});
export default rootReducer;
