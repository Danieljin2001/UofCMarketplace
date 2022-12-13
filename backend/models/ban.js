import mongoose from "mongoose";

const BanSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
});

const Ban = mongoose.model("ban", BanSchema);
export default Ban;
