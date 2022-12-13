import argon2 from "argon2";
import Admin from "../models/admin";
import jwt from "jsonwebtoken";
import Ban from "../models/ban";
const { ObjectId } = require("mongodb");

export const unBanStudent = async (req, res) => {
  try {
    const { email } = req.body;
    await Ban.deleteOne({
      email: email,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBannedStudents = async (req, res) => {
  try {
    const banned = await Ban.find();

    res.status(200).json(banned);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAdminObject = async (req, res) => {
  try {
    console.log("finding object w id=...", req.user.id);
    var addy = await Admin.findById(ObjectId(req.user.id));
    console.log("admin= ", addy);
    if (!addy) {
      return res.json({ error: "No Admin Found" });
    }
    res.status(200).json(addy);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

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
    if (!user) return res.json({ error: "Admin does not exist. " });

    const comparePW = await argon2.verify(user.password, password);
    if (!comparePW) return res.json({ error: "Invalid credentials. " });
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
