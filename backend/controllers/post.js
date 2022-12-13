import Post from "../models/post";
import Student from "../models/student";
import { getAdmin } from "./admin";
import { getStudent } from "./student";
import argon2 from "argon2";

const { ObjectId } = require("mongodb");

export const deleteAdminPost = async (req, res) => {
  try {
    const { postID } = req.body;
    const addy = await getAdmin(req, res);
    if (!addy) return res.json({ error: "Access Denied" });
    const myPost = await Post.findById(ObjectId(postID));
    if (!myPost) return res.json({ error: "No Post Found" });

    await Post.deleteOne(ObjectId(postID));
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteMyPost = async (req, res) => {
  try {
    const { postID } = req.body;
    const stu = await getStudent(req, res);
    const myPost = await Post.findById(ObjectId(postID));
    if (!myPost) return res.json({ error: "No Post Found" });

    console.log("mypost= ", ObjectId(myPost.ownerID));
    console.log("mystudent= ", stu._id);

    if (!stu) return res.json({ error: "Access Denied" });
    if (myPost.ownerID != stu._id)
      return res.json({
        error: "Access Denied post owner is not student owner",
      });
    await Post.deleteOne(ObjectId(postID));
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getMyPosts = async (req, res) => {
  try {
    const stu = await getStudent(req, res);
    if (!stu) return res.json({ error: "Access Denied" });
    const myPosts = await Post.find({ ownerID: stu._id });
    if (!myPosts) {
      res.json({ error: "No posts found by student" });
    }
    res.status(200).json({ msg: myPosts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    // const addy = await getAdmin(req, res);
    // if (!addy) return res.json({ error: "Access Denied" });
    const allPosts = await Post.find();
    if (!allPosts) {
      res.json({ error: "No posts found" });
    }
    res.status(200).json({ msg: allPosts });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
    // check if password matches the token password
    const stu = await getStudent(req, res);
    if (!stu) return res.json({ error: "Access Denied" });
    const { data, fieldToChange } = req.body;

    const comparePW = await argon2.verify(stu.password, data.password);
    if (!comparePW) return res.json({ error: "Invalid credentials. " });

    console.log("update p w data= ", data);
    console.log("update p w fields= ", fieldToChange);
    if (
      fieldToChange.title &&
      fieldToChange.description &&
      fieldToChange.adType &&
      fieldToChange.price &&
      fieldToChange.contactInfo &&
      fieldToChange.productType
    ) {
      const { title, price, description, productType, adType, contactInfo } =
        data;
      await Post.findOneAndUpdate(
        { _id: data.postId },
        { title, price, desc: description, productType, adType, contactInfo }
      );
      return res.status(200).json({ success: true });
    } else if (
      fieldToChange.title &&
      fieldToChange.description &&
      fieldToChange.adType &&
      fieldToChange.price &&
      fieldToChange.contactInfo
    ) {
      const { title, price, description, productType, adType, contactInfo } =
        data;
      await Post.findOneAndUpdate(
        { _id: data.postId },
        { title, price, desc: description, productType, adType, contactInfo }
      );
      return res.status(200).json({ success: true });
    } else if (
      fieldToChange.title &&
      fieldToChange.description &&
      fieldToChange.adType &&
      fieldToChange.price
    ) {
      const { title, description, adType, price } = data;
      await Post.findOneAndUpdate(
        { _id: data.postId },
        { title, desc: description, adType, price }
      );
      return res.status(200).json({ success: true });
    } else if (
      fieldToChange.title &&
      fieldToChange.description &&
      fieldToChange.adType
    ) {
      const { title, description, adType } = data;
      await Post.findOneAndUpdate(
        { _id: data.postId },
        { title, desc: description, adType }
      );
      return res.status(200).json({ success: true });
    } else if (fieldToChange.title && fieldToChange.description) {
      const { title, description } = data;
      await Post.findOneAndUpdate(
        { _id: data.postId },
        { title, desc: description }
      );
      return res.status(200).json({ success: true });
    } else if (fieldToChange.description) {
      const { description } = data;
      await Post.findOneAndUpdate({ _id: data.postId }, { desc: description });
      return res.status(200).json({ success: true });
    } else if (fieldToChange.title) {
      const { title } = data;
      await Post.findOneAndUpdate({ _id: data.postId }, { title });
      return res.status(200).json({ success: true });
    } else if (fieldToChange.adType) {
      const { adType } = data;
      await Post.findOneAndUpdate({ _id: data.postId }, { adType });
      return res.status(200).json({ success: true });
    } else if (fieldToChange.price) {
      const { price } = data;
      await Post.findOneAndUpdate({ _id: data.postId }, { price });
      return res.status(200).json({ success: true });
    } else if (fieldToChange.contactInfo) {
      const { contactInfo } = data;
      await Post.findOneAndUpdate({ _id: data.postId }, { contactInfo });
      return res.status(200).json({ success: true });
    } else if (fieldToChange.productType) {
      const { productType } = data;
      await Post.findOneAndUpdate({ _id: data.postId }, { productType });
      return res.status(200).json({ success: true });
    }
    res.status(200).json({ error: "Nothing to Update" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createNewPost = async (req, res) => {
  try {
    const stu = await getStudent(req, res);
    if (!stu) return res.json({ error: "Access Denied" });
    const { adType, price, description, productType, contact, title } =
      req.body;
    console.log("req user= ", req.user);
    const newPost = new Post({
      title: title,
      ownerID: stu._id,
      price: price,
      desc: description,
      productType: productType,
      contactInfo: contact ? contact : stu.email,
      adType: adType,
    });
    const postResult = await newPost.save();
    if (!postResult) {
      res.json({ error: "error saving new post" });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const { postID } = req.body;
    const stu = await getStudent(req, res);
    const myPost = await Post.findById(ObjectId(postID));
    if (!myPost) return res.json({ error: "No Post Found" });
    else res.status(200).json({ msg: myPost });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteMyPosts = async (req, res) => {
  try {
    await Post.deleteMany({
      ownerID: req.body.stuID,
    });

    return;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
