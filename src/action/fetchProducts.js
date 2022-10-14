import { FETCH_API_PRODUCT, FETCH_API_PRODUCT_FAILURE, FETCH_API_PRODUCT_SUCCESS } from "../ActionType";
export const fetchProduct = () => {
    return {
        type: FETCH_API_PRODUCT
    }
} 
export const fetchProductSuccess = (res) => {
    return {
        type: FETCH_API_PRODUCT_SUCCESS,
        payload: {
            data:res
        }
    }
}
export const fetchProductFailure = (message) => {
    return {
        type: FETCH_API_PRODUCT_FAILURE,
        payload:{
        error:message
        }
    }
}