import { createChat, findChat, userChats } from "../controllers/chat";
import { verifyToken } from "../utils/verifyToken";

const express = require("express");

export const chatRouter = express.Router();

chatRouter.post("/", createChat);
chatRouter.post("/:userId", userChats);
chatRouter.post("/find/:firstId/:secondId", findChat);
