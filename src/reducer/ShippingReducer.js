import { SAVE_SHIPPING_ADDRESS } from "../ActionType";

const initialize = {
    shippingAddress: {}
};

const ShippingReducer = (state = initialize, action) => {
    switch (action.type) {
        case SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload
            }
        default:
            return state
    }
}

export default ShippingReducer