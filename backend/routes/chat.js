import { createChat, findChat, userChats } from "../controllers/chat";
import { verifyToken } from "../utils/verifyToken";

const express = require("express");

export const chatRouter = express.Router();

chatRouter.post("/", verifyToken, createChat);
chatRouter.post("/:userId", verifyToken, userChats);
chatRouter.post("/find/:firstId/:secondId", verifyToken, findChat);
