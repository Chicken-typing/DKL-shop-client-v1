import axios from "axios";
import { API_USER } from "../linkTo";
const updateUser = (id, value) => {
  return axios
    .put(`${API_USER}/${id}`, value)
    .catch((error) => console.error(error.response));
};
export default updateUser;
