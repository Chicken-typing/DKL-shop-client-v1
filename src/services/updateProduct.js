import axios from "axios";
import { API_PRODUCT } from "../linkTo";
const updateProduct = (id, value) => {
  return axios
    .put(`${API_PRODUCT}/${id}`, value)
    .catch((error) => console.error(error.response));
};
export default updateProduct;
