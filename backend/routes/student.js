import { studentLogin, studentSignup } from "../controllers/student";

const express = require("express");
export const studentRouter = express.Router();

studentRouter.post("/signup", studentSignup);
studentRouter.post("/login", studentLogin);
