import { SEARCH_PRODUCT, SEARCH_PRODUCT_SUCCESS, SHOW_SEARCH } from "../ActionType";

export const searchProduct = (query) => {
    return {
        type: SEARCH_PRODUCT,
        payload: query
    }
};
export const searchProductSuccess = (res) => {
    return {
        type: SEARCH_PRODUCT_SUCCESS,
        payload: {
            data: res,
        }
    }
}
export const setShowSearch = (res) => {
    return {
        type: SHOW_SEARCH,
        payload: res
    }
}