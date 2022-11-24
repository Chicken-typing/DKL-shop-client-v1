import axios from "axios";
import { API_USER } from "../linkTo";
const addAdmin = async ({ id, role }) => {
  return await axios
    .put(`${API_USER}/${id}`, {
      role: "ADMIN",
    })
    .catch((error) => console.error(error));
};
export default addAdmin;
