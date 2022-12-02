import axios from "axios";
import { API_PRODUCT } from "../linkTo";
const deleteProduct = (id) => {
  return axios
    .delete(`${API_PRODUCT}/${id}`)
    .catch((error) => console.error(error));
};
export default deleteProduct;
