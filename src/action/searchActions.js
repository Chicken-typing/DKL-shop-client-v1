import { SEARCH_PRODUCT, SEARCH_PRODUCT_SUCCESS } from "../ActionType";

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