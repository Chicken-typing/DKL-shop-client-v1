import { SAVE_SHIPPING_ADDRESS } from "../ActionType";

export const saveShippingAddress = (shippingAddress) => {


    return {
        type: SAVE_SHIPPING_ADDRESS,
        payload: shippingAddress
    };
}