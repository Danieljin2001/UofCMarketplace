const JOIN_EVENT = "JOIN";
const NEW_MESSAGE_EVENT = "NEW_MESSAGE";
const RECEIVE_MESSAGE_EVENT = "RECEIVE_MESSAGE";
const IS_TYPING_EVENT = "IS_TYPING";
const STOP_TYPING_EVENT = "STOP_TYPING";
const DISCONNECT_EVENT = "disconnect";
const GET_ACTIVE_USERS_EVENT = "get-users";
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
      io.emit(GET_ACTIVE_USERS_EVENT, activeUsers);
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

    socket.on(IS_TYPING_EVENT, (data) => {
      const { receiverId, chatId } = data;
      const receiverUser = activeUsers.find((user) => user.id === receiverId);
      if (receiverUser) {
        io.to(receiverUser.socketId).emit(IS_TYPING_EVENT, chatId);
      }
    });

    socket.on(STOP_TYPING_EVENT, (data) => {
      const { receiverId, chatId } = data;
      const receiverUser = activeUsers.find((user) => user.id === receiverId);
      if (receiverUser) {
        io.to(receiverUser.socketId).emit(STOP_TYPING_EVENT, chatId);
      }
    });

    socket.on(DISCONNECT_EVENT, (id) => {
      activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);

      // console.log("userid is disconecting...= ", id);
      // const usr = activeUsers.find((user) => user.id === id);
      // console.log("found active usr= ", usr);
      // // find user who wants to disconnect
      // activeUsers = activeUsers.filter(
      //   (user) => user.socketId !== socket.id && user.id === usr.id
      // );
      console.log("User Disconnected", activeUsers);
      socket.disconnect();
      io.emit(GET_ACTIVE_USERS_EVENT, activeUsers);
    });
  });
};

export default socketEvents;
