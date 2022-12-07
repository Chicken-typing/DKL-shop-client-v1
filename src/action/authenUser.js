import { SIGNIN_USER, SIGNOUT_USER } from "../ActionType";

export const login = (data) => {
  return {
    type: SIGNIN_USER,
    payload: data,
  };
};

export const logout = () => {
  return {
    type: SIGNOUT_USER,
  };
};
