import Review from "../models/review";
import Student from "../models/student";
import { getStudent } from "./student";

export const createReview = async (req, res) => {
  try {
    const stu = await getStudent(req, res);
    if (!stu) return res.json({ error: "Access Denied" });
    const { id, content, rating } = req.body;
    const reviewed = await Student.findById(id);
    if (!reviewed) return res.json({ error: "User To Review Does Not Exist" });

    const newReview = new Review({
      userEmail: reviewed.email,
      reviewerId: stu._id,
      content,
      rating,
    });

    await newReview.save();

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getReviews = async (req, res) => {
  try {
    const { email } = req.body;

    const reviews = await Review.find({ userEmail: email });

    reviews.sort((a, b) => b.createdAt - a.createdAt);
    res.status(200).json({ success: true, reviews: reviews });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const likeReview = async (req, res) => {
  try {
    const stu = await getStudent(req, res);
    if (!stu) return res.json({ error: "Access Denied" });

    const { reviewId } = req.body;

    const review = await Review.findOne({ _id: reviewId });
    const { likes } = review;

    likes.push(stu._id);

    await Review.updateOne({ _id: reviewId }, { likes });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeLike = async (req, res) => {
  try {
    const stu = await getStudent(req, res);
    if (!stu) return res.json({ error: "Access Denied" });

    const { reviewId } = req.body;

    const review = await Review.findOne({ _id: reviewId });
    const { likes } = review;

    likes.splice(likes.indexOf(stu._id), 1);

    await Review.updateOne({ _id: reviewId }, { likes });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const checkIfUserLiked = async (req, res) => {
  try {
    const stu = await getStudent(req, res);
    if (!stu) return res.json({ error: "Access Denied" });

    const { reviewId } = req.body;

    const review = await Review.findOne({ _id: reviewId });
    const { likes } = review;

    res.status(200).json({ success: true, liked: likes.includes(stu._id) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const dislikeReview = async (req, res) => {
  try {
    const stu = await getStudent(req, res);
    if (!stu) return res.json({ error: "Access Denied" });

    const { reviewId } = req.body;

    const review = await Review.findOne({ _id: reviewId });
    const { dislikes } = review;

    dislikes.push(stu._id);

    await Review.updateOne({ _id: reviewId }, { dislikes });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeDislike = async (req, res) => {
  try {
    const stu = await getStudent(req, res);
    if (!stu) return res.json({ error: "Access Denied" });

    const { reviewId } = req.body;

    const review = await Review.findOne({ _id: reviewId });
    const { dislikes } = review;

    dislikes.splice(dislikes.indexOf(stu._id), 1);

    await Review.updateOne({ _id: reviewId }, { dislikes });
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const checkIfUserDisliked = async (req, res) => {
  try {
    const stu = await getStudent(req, res);
    if (!stu) return res.json({ error: "Access Denied" });
    const { reviewId } = req.body;

    const review = await Review.findOne({ _id: reviewId });
    const { dislikes } = review;

    res.status(200).json({ disliked: dislikes.includes(stu._id) });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getReviewById = async (req, res) => {
  try {
    const { id } = req.body;

    const review = await Review.findOne({ _id: id });
    res.status(200).json({ success: true, review: review });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
