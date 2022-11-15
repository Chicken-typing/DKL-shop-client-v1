import { FETCH_API_PRODUCT, FETCH_API_PRODUCT_SUCCESS, SHOW_SEARCH } from "../ActionType";

const initialize = false

const showSearchReducer = (state = initialize, action) => {
    switch (action.type) {
        case SHOW_SEARCH:
            return action.payload
        default:
            return state;
    }
}
export default showSearchReducer