import axios from "axios";
import { API_PRODUCT } from "../linkTo";
const deleteProduct = (id) => {
  const user = JSON.parse(localStorage.getItem("userInfor"));
  const header = {
    authorization: `Bearer ${user.token}`,
  };
  return axios
    .delete(`${API_PRODUCT}/${id}`, { headers: header })
    .catch((error) => console.error(error));
};
export default deleteProduct;
