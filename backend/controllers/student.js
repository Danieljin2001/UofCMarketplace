import argon2 from "argon2";
import Student from "../models/student";
import jwt from "jsonwebtoken";
import { getAdmin } from "./admin";
const { ObjectId } = require("mongodb");

export const getAllStudents = async (req, res) => {
  try {
    const addy = await getAdmin(req, res);
    if (!addy) return res.status(403).json({ error: "Access Denied" });
    const allStudents = await Student.find();
    if (!allStudents) {
      res.status(200).json({ error: "No students found" });
    }
    res.status(200).json({ msg: allStudents });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getStudent = async (req, res) => {
  try {
    console.log("finding student w id=...", req.user.id);
    var stu = await Student.findById(ObjectId(req.user.id));
    console.log("student= ", stu);
    if (!stu) {
      stu = null;
      return stu;
    }
    return stu;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const studentSignup = async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashed = await argon2.hash(password);
    const emailCheck = email.substring(email.lastIndexOf("@") + 1);
    if (emailCheck !== "ucalgary.ca")
      return res.status(400).json({ msg: "Email must be @ucalgary.ca " });

    const newStudent = new Student({
      email: email,
      password: hashed,
    });
    const result = await newStudent.save();
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const studentLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Student.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "Student does not exist. " });

    const comparePW = await argon2.verify(user.password, password);
    if (!comparePW)
      return res.status(400).json({ msg: "Invalid credentials. " });

    const token = jwt.sign(
      { id: user._id, isAdmin: false },
      process.env.JWT_SECRET
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
