import { combineReducers } from "redux";
import fetchProductReducer from "./fetchProductReducer";
import fetchReducer from "./fetchReducer";
import fetchStaticReducer from "./fetchStaticReducer";
import fetchOrderReducer from "./fetchOrderReducer";

const rootReducer = combineReducers({
  fetch: fetchReducer,
  fetchProduct: fetchProductReducer,
  fetchStatic: fetchStaticReducer,
  fetchOrder: fetchOrderReducer,
});
export default rootReducer;
