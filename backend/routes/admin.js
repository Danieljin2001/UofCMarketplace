const express = require("express");
import {
  adminLogin,
  adminSignup,
  getAdminObject,
  getBannedStudents,
  unBanStudent,
} from "../controllers/admin";
import { deleteAdminPost, getAllPosts } from "../controllers/post";
import {
  banStudent,
  deleteAdminStudent,
  getAllStudents,
} from "../controllers/student";
import { verifyToken } from "../utils/verifyToken";
export const adminRouter = express.Router();

adminRouter.post("/signup", adminSignup);
adminRouter.post("/login", adminLogin);
adminRouter.get("/allposts", getAllPosts);
adminRouter.post("/allstudents", verifyToken, getAllStudents);
adminRouter.post("/deletepost", verifyToken, deleteAdminPost);
adminRouter.post("/deletestudent", verifyToken, deleteAdminStudent);
adminRouter.post("/myself", verifyToken, getAdminObject);
adminRouter.post("/ban", verifyToken, banStudent);
adminRouter.post("/blacklisted", verifyToken, getBannedStudents);
adminRouter.post("/unban", verifyToken, unBanStudent);

// adminRouter.use("/logout");
// adminRouter.use("/remove-post/:id?");
// adminRouter.use("/remove-student/:id?");
