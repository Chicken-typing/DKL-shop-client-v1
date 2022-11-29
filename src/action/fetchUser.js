import { FETCH_USER, FETCH_USER_SUCCESS } from "../ActionType";
export const fetchUser = (params) => {
  return {
    type: FETCH_USER,
    params,
  };
};
export const fetchUserSuccess = (res) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: res,
  };
};
