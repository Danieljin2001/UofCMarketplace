import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    ownerID: {
      type: String,
    },
    title: {
      type: String,
    },
    price: {
      type: String,
    },
    desc: {
      type: String,
    },
    productType: {
      type: String,
    },
    contactInfo: {
      type: String,
    },
    adType: {
      type: String,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("post", PostSchema);
export default Post;
