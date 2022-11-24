import axios from "axios";
import { API_USER } from "../linkTo";
const deleteUser = (id) => {
  console.log(`${API_USER}/${id}`);
  return axios
    .delete(`${API_USER}/${id}`)
    .catch((error) => console.error(error));
};
export default deleteUser;
