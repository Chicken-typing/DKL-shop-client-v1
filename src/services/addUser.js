import axios from "axios";
import { API_USER } from "../linkTo";
const addUser = async (data) => {
  return await axios
    .post(API_USER, {
      ...data,
    })
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
