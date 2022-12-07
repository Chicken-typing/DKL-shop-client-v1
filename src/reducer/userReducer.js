import { SIGNIN_USER, SIGNOUT_USER } from "../ActionType";

const initialize = {
  userInfor: {},
};
const userReducer = (state = initialize, action) => {
  switch (action.type) {
    case SIGNIN_USER:
      return {
        ...state,
        userInfor: action.payload,
      };
    case SIGNOUT_USER:
      return {
        ...state,
        userInfor: {},
      };
    default:
      return { ...state };
  }
};
export default userReducer;

