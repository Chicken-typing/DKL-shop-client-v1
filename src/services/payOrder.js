import axios from "axios";
import { API_ORDER } from "../linkTo";
import store from "../store";
const payOrder = (data,callback) => {
  const state = store.getState();
  const user = state?.User?.userInfor;
  const header = {
    authorization: `Bearer ${user.token}`,
    };
  return axios
    .post(`${API_ORDER}`, { ...data }, { headers: header })
    .then(()=>callback())
    .catch((error) => {
      console.error(error.response)
      callback()
    });
};
export default payOrder;
