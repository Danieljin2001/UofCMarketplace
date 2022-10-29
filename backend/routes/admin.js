const express = require("express");
import { adminLogin } from "../controllers/admin";
export const adminRouter = express.Router();

adminRouter.post("/login", adminLogin);
// adminRouter.use("/logout");
// adminRouter.use("/remove-post/:id?");
// adminRouter.use("/remove-student/:id?");
