import argon2 from "argon2";
import Admin from "../models/admin";
import jwt from "jsonwebtoken";
const { ObjectId } = require("mongodb");

export const getAdmin = async (req, res) => {
  try {
    console.log("finding admin w id=...", req.user.id);
    var addy = await Admin.findById(ObjectId(req.user.id));
    console.log("admin= ", addy);
    if (!addy) {
      addy = null;
      return addy;
    }
    return addy;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const adminSignup = async (req, res) => {
  try {
    const { username, password } = req.body;

    const hashed = await argon2.hash(password);
    const newAdmin = new Admin({
      username: username,
      password: hashed,
    });
    const result = await newAdmin.save();
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Admin.findOne({ username: username });
    if (!user) return res.status(400).json({ msg: "Admin does not exist. " });

    const comparePW = await argon2.verify(user.password, password);
    if (!comparePW)
      return res.status(400).json({ msg: "Invalid credentials. " });
    const token = jwt.sign(
      { id: user._id, isAdmin: true },
      process.env.JWT_SECRET
    );
    // console.log("TOKEN= ", jwt_decode(token));
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
