const JOIN_EVENT = "JOIN";
const NEW_MESSAGE_EVENT = "NEW_MESSAGE";
const RECEIVE_MESSAGE_EVENT = "RECEIVE_MESSAGE";

const MESSAGE_NOTIFICATION_EVENT = "MESSAGE_NOTIFICATION";
const IS_TYPING_EVENT = "IS_TYPING";
const STOP_TYPING_EVENT = "STOP_TYPING";
const READ_MESSAGES_EVENT = "READ_MESSAGES";
const UPDATE_NAVBAR_EVENT = "UPDATE_NAVBAR";
const DISCONNECT_EVENT = "DISCONNECT";
let activeUsers = [];

const socketEvents = (io) => {
  io.on("connection", (socket) => {
    // add new user
    socket.on(JOIN_EVENT, (newUserId) => {
      console.log("new user id= ", newUserId);
      if (!activeUsers.some((user) => user.id === newUserId)) {
        activeUsers.push({ id: newUserId, socketId: socket.id });
      }
      console.log("New User Connected", activeUsers);
      io.emit("get-users", activeUsers);
    });

    socket.on(NEW_MESSAGE_EVENT, (data) => {
      const { receiverId } = data;
      const receiverUser = activeUsers.find((user) => user.id === receiverId);
      console.log("Sending from socket to: ", receiverUser);
      console.log("socket new msg data= ", data);
      // if user exists  then send it to a socket id
      if (receiverUser) {
        console.log("usr exists, sending msg");
        io.to(receiverUser.socketId).emit(RECEIVE_MESSAGE_EVENT, data);
      }
    });

    socket.on(DISCONNECT_EVENT, () => {
      // find user who wants to disconnect
      activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
      console.log("User Disconnected", activeUsers);

      io.emit("get-users", activeUsers);
    });
  });
};

export default socketEvents;
