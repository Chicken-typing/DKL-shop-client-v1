import { SEARCH_PRODUCT, FETCH_API_PRODUCT, FETCH_API_PRODUCT_SUCCESS } from "../ActionType";

const initialize = {
    text: '',
    products: [],
    error: "",
};

const searchProductReducer = (state = initialize, action) => {
    switch (action.type) {
        case SEARCH_PRODUCT:
            return {
                ...state,
                text: action.payload,
            };
        case FETCH_API_PRODUCT:
            return {
                ...state,
            };
        case FETCH_API_PRODUCT_SUCCESS:
            return {
                ...state,
                products: action.payload.data,
            };
        default:
            return state;
    }
}
export default searchProductReducer