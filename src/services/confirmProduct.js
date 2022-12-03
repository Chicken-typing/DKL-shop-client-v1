import axios from "axios";
import { API_ORDER } from "../linkTo";
const confirmOrder = (id, value) => {
  return axios
    .put(`${API_ORDER}/${id}`, value)
    .catch((error) => console.error(error.response));
};
export default confirmOrder;
