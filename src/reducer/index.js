import { combineReducers } from "redux";
import fetchReducer from "./fetchReducer";
import postLinkReducer from "./postLinkReducer";


const rootReducer= combineReducers(
    {
        fetch: fetchReducer,
        postLink:postLinkReducer
    }
)
export default rootReducer;