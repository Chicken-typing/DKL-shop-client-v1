import { ADD_TO_CART, REMOVE_FROM_CART, DELETE_FROM_CART, CLEAR_CART } from "../ActionType";


// const carts = localStorage.getItem('carts') !== null ? JSON.parse(localStorage.getItem('carts')) : []

const initialize = {
    carts: []

};

const CartReducer = (state = initialize, action) => {

    switch (action.type) {

        case ADD_TO_CART:
            const IteamIndex = state.carts.findIndex((iteam) => iteam._id === action.payload._id);
            localStorage.setItem('carts', JSON.stringify(state.carts))
            if (IteamIndex >= 0) {
                state.carts[IteamIndex].quantity += 1
                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else {
                const temp = {...action.payload, quantity: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }

        case REMOVE_FROM_CART:

            const IteamIndex_dec = state.carts.findIndex((iteam) => iteam._id === action.payload._id);
            if (state.carts[IteamIndex_dec].quantity >= 1) {
                const dltiteams = state.carts[IteamIndex_dec].quantity -= 1
                console.log([...state.carts, dltiteams]);

                return {
                    ...state,
                    carts: [...state.carts]
                }
            } else if (state.carts[IteamIndex_dec].quantity === 1) {
                const data = state.carts.filter((el) => el._id !== action.payload);

                return {
                    ...state,
                    carts: data
                }
            }
        case DELETE_FROM_CART:
            const data = state.carts.filter((el) => el._id !== action.payload);
            // localStorage.setItem('carts', JSON.stringify(state.carts))
            return {
                ...state,
                carts: data
            }
        case CLEAR_CART:
            return {
                ...state,
                carts: []
            }
        default:
            return state


    }
}
export default CartReducer