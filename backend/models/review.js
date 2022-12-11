import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
    },
    reviewerId: {
      type: String,
    },
    content: {
      type: String,
    },
    rating: {
      type: Number,
    },
    likes: {
      type: [String],
      default: [],
    },
    dislikes: {
      type: [String],
      default: [],
    },
  },
  { timestamps: true }
);

const Review = mongoose.model("review", ReviewSchema);
export default Review;
