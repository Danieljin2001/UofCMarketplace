import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema({
    senderId: {
        type: Number,
    },
    receiverId: {
        type: Number,
    },
    dateCreated: {
        type: String,
    },
    message: {
        type: String,
    },
});

const Message = mongoose.model("message", MessageSchema);
export default Message;