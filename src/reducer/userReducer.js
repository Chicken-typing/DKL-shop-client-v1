import { SIGNIN_USER, SIGNOUT_USER } from "../ActionType";

const initialize = {
    userInfor: {},
    token: false
};
const userReducer = (state = initialize, action) => {
    switch (action.type) {
        case SIGNIN_USER:
            return {
                ...state,
                userInfor: action.payload,
                token: true
            };
        case SIGNOUT_USER:
            return {
                ...state,
                token: false,
                userInfor: {},
            };
        default:
            return state;
    }
};
export default userReducer;