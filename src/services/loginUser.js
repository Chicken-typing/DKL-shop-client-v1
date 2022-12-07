import axios from "axios";
import { API_SIGNIN } from "../linkTo";
const loginUser = (data, callback) =>
  axios
    .post(API_SIGNIN, data)
    .then((res) => {
      callback(res.data);
      localStorage.setItem("userInfor", JSON.stringify(res.data));
    })
    .catch(() => callback({}));
export default loginUser;
