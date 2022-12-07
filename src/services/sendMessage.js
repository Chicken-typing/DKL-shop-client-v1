// TODO: post new message into database
import moment from "moment";
const sendMessage = async (user, message, socket, getNewest) => {
  const messageData = {
    room: user.id,
    author: user.id,
    sentAt: moment()._d,
    message: message,
  };
  await socket.emit("send_message", messageData);
  getNewest(messageData);
};
export default sendMessage;
