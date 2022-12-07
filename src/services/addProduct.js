import axios from "axios";
import { API_PRODUCT } from "../linkTo";
const addProduct = async (data) => {
  const user = JSON.parse(localStorage.getItem("userInfor"));
  console.log(data);
  return await axios
    .post(
      API_PRODUCT,
      {
        ...data,
      },
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    )
    .catch((error) => console.error(error));
};
export default addProduct;
