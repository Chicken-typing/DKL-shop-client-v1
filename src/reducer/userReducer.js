import { SIGNIN_USER, SIGNOUT_USER } from "../ActionType";

const initialize = {
    userInfo: "",
    token: false,
};

const userReducer = (state = initialize, action) => {

    switch (action.type) {

        case SIGNIN_USER:
            return {
                ...state,
                token: true,
                userInfo: action.payload
            }
        case SIGNOUT_USER:
            return {
                ...state,
                userInfo: null,
                token: false,
            }

        default:
            return state
    }
}
export default userReducer