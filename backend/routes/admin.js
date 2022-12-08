const express = require("express");
import { adminLogin, adminSignup } from "../controllers/admin";
import { getAllPosts } from "../controllers/post";
import { getAllStudents } from "../controllers/student";
import { verifyToken } from "../utils/verifyToken";
export const adminRouter = express.Router();

adminRouter.post("/signup", adminSignup);
adminRouter.post("/login", adminLogin);
adminRouter.get("/allposts", verifyToken, getAllPosts);
adminRouter.get("/allstudents", verifyToken, getAllStudents);

// adminRouter.use("/logout");
// adminRouter.use("/remove-post/:id?");
// adminRouter.use("/remove-student/:id?");
