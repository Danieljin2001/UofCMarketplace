import Post from "../models/post";
import Student from "../models/student";
import { getAdmin } from "./admin";
import { getStudent } from "./student";
const { ObjectId } = require("mongodb");

export const getAllPosts = async (req, res) => {
  try {
    const addy = await getAdmin(req, res);
    if (!addy) return res.status(403).json({ error: "Access Denied" });
    const allPosts = await Post.find();
    if (!allPosts) {
      res.status(200).json({ error: "No posts found" });
    }
    res.status(200).json({ msg: allPosts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const updatePost = async (req, res) => {
  try {
    const { postID } = req.body;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNewPost = async (req, res) => {
  try {
    const stu = await getStudent(req, res);
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
