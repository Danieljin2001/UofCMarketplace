const express = require("express");
import { adminLogin, adminSignup } from "../controllers/admin";
export const adminRouter = express.Router();

adminRouter.post("/signup", adminSignup);
adminRouter.post("/login", adminLogin);
// adminRouter.use("/logout");
// adminRouter.use("/remove-post/:id?");
// adminRouter.use("/remove-student/:id?");
