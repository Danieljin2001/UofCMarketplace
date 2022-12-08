import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
});

const Student = mongoose.model("student", StudentSchema);
export default Student;
