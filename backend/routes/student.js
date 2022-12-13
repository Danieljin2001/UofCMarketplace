import {
  createNewPost,
  deleteMyPost,
  getMyPosts,
  updatePost,
} from "../controllers/post";
import {
  changeStudentPassword,
  studentLogin,
  studentSignup,
} from "../controllers/student";
import { verifyToken } from "../utils/verifyToken";

const express = require("express");
export const studentRouter = express.Router();

studentRouter.post("/signup", studentSignup);
studentRouter.post("/login", studentLogin);
studentRouter.post("/createpost", verifyToken, createNewPost);
studentRouter.post("/posts", verifyToken, getMyPosts);
studentRouter.post("/deletepost", verifyToken, deleteMyPost);
studentRouter.post("/updatepw", verifyToken, changeStudentPassword);
studentRouter.post("/updatepost", verifyToken, updatePost);
