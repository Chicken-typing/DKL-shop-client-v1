import { FETCH_API_PRODUCT, FETCH_API_PRODUCT_SUCCESS } from "../ActionType";
export const fetchProduct = () => {
  return {
    type: FETCH_API_PRODUCT,
  };
};
export const fetchProductSuccess = (res) => {
  return {
    type: FETCH_API_PRODUCT_SUCCESS,
    payload: {
      data: res,
    },
  };
};
