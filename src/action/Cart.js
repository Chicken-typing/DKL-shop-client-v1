import { ADD_TO_CART } from "../ActionType";

export const addToCart = (data) => {
    return {
        type: ADD_TO_CART,
        data,

    };
}