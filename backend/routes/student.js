import {
  createNewPost,
  deleteMyPost,
  getMyPosts,
  updatePost,
} from "../controllers/post";
import {
  changeStudentPassword,
  getStudentObject,
  getUser,
  studentLogin,
  studentSignup,
  deleteStudent,
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
studentRouter.post("/myself", verifyToken, getStudentObject);
studentRouter.post("/friend", verifyToken, getUser);
studentRouter.post("/delete", verifyToken, deleteStudent)
