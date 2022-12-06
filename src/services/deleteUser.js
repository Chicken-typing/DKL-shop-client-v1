import axios from "axios";
const deleteUser = (url, id) => {
  return axios.delete(`${url}/${id}`).catch((error) => console.error(error));
};
export default deleteUser;
