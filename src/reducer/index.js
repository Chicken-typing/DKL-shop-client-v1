import { combineReducers } from "redux";
import fetchProductReducer from "./fetchProductReducer";
import fetchReducer from "./fetchReducer";
import fetchStaticReducer from "./fetchStaticReducer";

const rootReducer = combineReducers({
  fetch: fetchReducer,
  fetchProduct: fetchProductReducer,
  fetchStatic: fetchStaticReducer,
});
export default rootReducer;
