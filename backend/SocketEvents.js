const JOIN_EVENT = "JOIN";
const NEW_MESSAGE_EVENT = "NEW_MESSAGE";
const MESSAGE_NOTIFICATION_EVENT = "MESSAGE_NOTIFICATION";
const IS_TYPING_EVENT = "IS_TYPING";
const STOP_TYPING_EVENT = "STOP_TYPING";
const READ_MESSAGES_EVENT = "READ_MESSAGES";
const UPDATE_NAVBAR_EVENT = "UPDATE_NAVBAR";
const DISCONNECT_EVENT = "DISCONNECT";

const socketEvents = (io) => {
  io.on("connection", (socket) => {
    console.log("a user connected");
  });
};

export default socketEvents;
