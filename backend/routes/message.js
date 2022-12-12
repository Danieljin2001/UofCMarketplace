const express = require("express");
import {
  addMessage,
  getConversation,
  getMessages,
  getMyChats,
  getUnreadChats,
  readMsg,
  sendNewMessage,
} from "../controllers/message";
import { verifyToken } from "../utils/verifyToken";

export const msgRouter = express.Router();

msgRouter.post("/add", addMessage);
msgRouter.post("/", getMessages);

// msgRouter.post("/getuserchats", verifyToken, getMyChats);
// msgRouter.post("/sendmsg", verifyToken, sendNewMessage);
// msgRouter.post("/getconvo", verifyToken, getConversation);
// msgRouter.post("/readmsg", verifyToken, readMsg);
// msgRouter.post("/unreadmsg", verifyToken, getUnreadChats);
