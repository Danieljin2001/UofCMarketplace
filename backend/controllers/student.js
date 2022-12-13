import argon2 from "argon2";
import Student from "../models/student";
import jwt from "jsonwebtoken";
import { getAdmin } from "./admin";
const { ObjectId } = require("mongodb");

export const getUser = async (req, res) => {
  const { id } = req.body;

  try {
    console.log("getting friend w ", id);
    const user = await Student.findById(id);
    if (user) {
      const { password, ...otherDetails } = user._doc;

      res.status(200).json(otherDetails);
    } else {
      res.json({ error: "No such User" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

export const changeStudentPassword = async (req, res) => {
  try {
    const stu = await getStudent(req, res);
    if (!stu) return res.json({ error: "Access Denied" });
    const { password, newPassword, confirmPassword } = req.body;
    const comparePW = await argon2.verify(stu.password, password);
    if (!comparePW) return res.json({ error: "Invalid credentials. " });
    if (newPassword !== confirmPassword)
      return res.json({ error: "Passwords Do Not Match" });

    const newPWHash = await argon2.hash(newPassword);
    await Student.updateOne(
      { _id: ObjectId(stu._id) },
      { password: newPWHash }
    );
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAdminStudent = async (req, res) => {
  try {
    const { stuID } = req.body;
    const addy = await getAdmin(req, res);
    if (!addy) return res.json({ error: "Access Denied" });
    const myStudent = await Student.findById(ObjectId(stuID));
    if (!myStudent) return res.json({ error: "No Student Found" });

    await Student.deleteOne(ObjectId(stuID));
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllStudents = async (req, res) => {
  try {
    const addy = await getAdmin(req, res);
    if (!addy) return res.json({ error: "Access Denied" });
    const allStudents = await Student.find();
    if (!allStudents) {
      res.json({ error: "No students found" });
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

export const getStudentObject = async (req, res) => {
  try {
    console.log("finding student w id=...", req.user.id);
    var stu = await Student.findById(ObjectId(req.user.id));
    console.log("student= ", stu);
    if (!stu) {
      return res.json({ error: "No Student Found" });
    }
    res.status(200).json(stu);
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
      return res.json({ error: "Email must be @ucalgary.ca " });

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
    if (!user) return res.json({ error: "Student does not exist. " });

    const comparePW = await argon2.verify(user.password, password);
    if (!comparePW) return res.json({ error: "Invalid credentials. " });

    const token = jwt.sign(
      { id: user._id, isAdmin: false },
      process.env.JWT_SECRET
    );

    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const deleteStudent = async (req, res) => {
  try {
    const { stuID } = req.body;
    const myStudent = await Student.findById(ObjectId(stuID));
    if (!myStudent) return res.json({ error: "No Student Found" });

    await Student.deleteOne(ObjectId(stuID));
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
