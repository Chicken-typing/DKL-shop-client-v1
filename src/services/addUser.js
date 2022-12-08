import axios from "axios";
import { API_USER } from "../linkTo";
const addUser = async (data) => {
  const user = JSON.parse(localStorage.getItem("userInfor"));
  const header = {
    authorization: `Bearer ${user.token}`,
  };
  return await axios
    .post(
      API_USER,
      {
        ...data,
      },
      { headers: header }
    )
    .catch((error) => console.error(error));
};
export default addUser;

/**
 * Format user data
 * {
 * name,
 *
 * email,
 * password,
 * address,
 * role,
 * phonenumber,
 * isActive
 * }
 *
 *
 *
 */
