import argon2 from "argon2";
import Admin from "../models/admin";
export const adminSignup = async (req, res) => {
  try {
    const { username, password } = req.body;

    const hashed = await argon2.hash(password);
    const newAdmin = new Admin({
      username: username,
      password: hashed,
    });
    const result = await newAdmin.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await Admin.findOne({ username: username });
    if (!user) return res.status(400).json({ msg: "Admin does not exist. " });

    const comparePW = await argon2.verify(password, user.password);
    if (!comparePW)
      return res.status(400).json({ msg: "Invalid credentials. " });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
