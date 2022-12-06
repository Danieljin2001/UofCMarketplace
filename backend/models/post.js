import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  ownerID: {
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
});

const Post = mongoose.model("post", PostSchema);
export default Post;
