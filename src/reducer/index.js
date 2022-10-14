import { combineReducers } from "redux";
import fetchProductReducer from "./fetchProductReducer";
import fetchReducer from "./fetchReducer";


const rootReducer= combineReducers(
    {
        fetch: fetchReducer,
        fetchProduct:fetchProductReducer
    }
)
export default rootReducer;