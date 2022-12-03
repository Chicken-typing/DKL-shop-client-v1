import axios from "axios";
import { API_PRODUCT } from "../linkTo";
const addProduct = async (data) => {
  return await axios
    .post(API_PRODUCT, {
      ...data,
    })
    .catch((error) => console.error(error));
};
export default addProduct;
