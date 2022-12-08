import axios from "axios";
import { API_PRODUCT } from "../linkTo";
const updateProduct = (id, value) => {
  const user = JSON.parse(localStorage.getItem("userInfor"));
  const header = {
    authorization: `Bearer ${user.token}`,
  };
  return axios
    .put(`${API_PRODUCT}/${id}`, value, { headers: header })
    .catch((error) => console.error(error.response));
};
export default updateProduct;
