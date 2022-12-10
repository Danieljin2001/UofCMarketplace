const express = require("express");
import { adminLogin, adminSignup } from "../controllers/admin";
import { deleteAdminPost, getAllPosts } from "../controllers/post";
import { deleteAdminStudent, getAllStudents } from "../controllers/student";
import { verifyToken } from "../utils/verifyToken";
export const adminRouter = express.Router();

adminRouter.post("/signup", adminSignup);
adminRouter.post("/login", adminLogin);
adminRouter.get("/allposts", getAllPosts);
adminRouter.post("/allstudents", verifyToken, getAllStudents);
adminRouter.post("/deletepost", verifyToken, deleteAdminPost);
adminRouter.post("/deletestudent", verifyToken, deleteAdminStudent);

// adminRouter.use("/logout");
// adminRouter.use("/remove-post/:id?");
// adminRouter.use("/remove-student/:id?");
