import { createNewPost, getMyPosts } from "../controllers/post";
import { studentLogin, studentSignup } from "../controllers/student";
import { verifyToken } from "../utils/verifyToken";

const express = require("express");
export const studentRouter = express.Router();

studentRouter.post("/signup", studentSignup);
studentRouter.post("/login", studentLogin);
studentRouter.post("/createpost", verifyToken, createNewPost);
studentRouter.post("/posts", verifyToken, getMyPosts);

// studentRouter.post("/updatepost", verifyToken, updatePost);
