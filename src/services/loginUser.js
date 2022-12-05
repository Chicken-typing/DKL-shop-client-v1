import axios from "axios";
import { API_SIGNIN } from "../linkTo";
const loginUser = (data) => {
  return axios
    .post(API_SIGNIN, data)
    .then((res) => {
      localStorage.setItem("userInfor", JSON.stringify(res.data));
    })
    .catch(() => localStorage.setItem("userInfor", JSON.stringify({})));
};
export default loginUser;
