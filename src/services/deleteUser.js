import axios from "axios";
const deleteUser = (url, id) => {
  const user = JSON.parse(localStorage.getItem("userInfor"));
  const header = {
    authorization: `Bearer ${user.token}`,
  };
  return axios
    .delete(`${url}/${id}`, { headers: header })
    .catch((error) => console.error(error));
};
export default deleteUser;
