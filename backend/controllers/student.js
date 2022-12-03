import argon2 from "argon2";
import Student from "../models/student";

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
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export const studentLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Student.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "Student does not exist. " });

    const comparePW = await argon2.verify(password, user.password);
    if (!comparePW)
      return res.status(400).json({ msg: "Invalid credentials. " });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
