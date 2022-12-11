import { createNewPost, deleteMyPost, getMyPosts } from "../controllers/post";
import {
  checkIfUserLiked,
  createReview,
  getReviewById,
  getReviews,
  likeReview,
  removeLike,
} from "../controllers/review";
import {
  changeStudentPassword,
  getStu,
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
studentRouter.post("/getstudent", verifyToken, getStu);
studentRouter.post("/leavereview", verifyToken, createReview);
studentRouter.post("/allreviews", verifyToken, getReviews);
studentRouter.post("/like", verifyToken, likeReview);
studentRouter.post("/getreview", verifyToken, getReviewById);
studentRouter.post("/isliked", verifyToken, checkIfUserLiked);
studentRouter.post("/removelike", verifyToken, removeLike);

// studentRouter.post("/updatepost", verifyToken, updatePost);
