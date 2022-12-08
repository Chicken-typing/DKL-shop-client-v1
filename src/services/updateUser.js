import axios from "axios";
const updateUser = (url, id, value) => {
  const user = JSON.parse(localStorage.getItem("userInfor"));
  const header = {
    authorization: `Bearer ${user.token}`,
  };
  return axios
    .put(`${url}/${id}`, value, { headers: header })
    .catch((error) => console.error(error.response));
};
export default updateUser;
