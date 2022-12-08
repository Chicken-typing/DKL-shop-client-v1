import axios from "axios";
import { API_ORDER } from "../linkTo";
const confirmOrder = (id) => {
  const user = JSON.parse(localStorage.getItem("userInfor"));
  const header = {
    authorization: `Bearer ${user.token}`,
  };
  console.log(user.token);
  return axios
    .put(`${API_ORDER}/${id}/deliver`, {}, { headers: header })
    .catch((error) => console.error(error.response));
};
export default confirmOrder;
