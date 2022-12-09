import axios from "axios";
import store from "../store";
const deleteUser = (url, id) => {
  const state = store.getState();
  const user = state?.User?.userInfor;
  const header = {
    authorization: `Bearer ${user.token}`,
  };
  return axios
    .delete(`${url}/${id}`, { headers: header })
    .catch((error) => console.error(error));
};
export default deleteUser;
