import { SAVE_SHIPPING_ADDRESS, SAVE_PAYMENT_METHOD } from "../ActionType";

const initialize = {
    shippingAddress: {},
};

const ShippingReducer = (state = initialize, action) => {
    switch (action.type) {
        case SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload
            }




        case SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload
            }

        default:
            return state
    }
}

export default ShippingReducer