import Post from "../models/post";
import Student from "../models/student";
import { getStudent } from "./student";
const { ObjectId } = require("mongodb");

export const createNewPost = async (req, res) => {
  try {
    console.log("userid= ", req.user.id);
    const stu = await Student.findById(ObjectId(req.user.id));
    console.log("student= ", stu);

    // const res = await getStudent(req, res);
    if (!stu) return res.status(403).json({ error: "Access Denied" });
    const { adType, price, description, productType, contact } = req.body;
    console.log("req user= ", req.user);
    const newPost = new Post({
      ownerID: stu._id,
      price: price,
      desc: description,
      productType: productType,
      contactInfo: contact ? contact : stu.email,
      adType: adType,
    });
    const postResult = await newPost.save();
    if (!postResult) {
      res.status(400).json({ success: false, msg: "error saving new post" });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
