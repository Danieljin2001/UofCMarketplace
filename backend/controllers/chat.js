import ChatModel from "../models/chat";

export const createChat = async (req, res) => {
  try {
    const { senderId, receiverId } = req.body;
    const doesChatExist = await ChatModel.findOne({
      members: { $all: [senderId, receiverId] },
    });
    console.log("Does Chat Exists= ", doesChatExist);
    if (doesChatExist) return res.status(200).json({ exists: true });
    const newChat = new ChatModel({
      members: [senderId, receiverId],
    });
    const result = await newChat.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const userChats = async (req, res) => {
  try {
    const chat = await ChatModel.find({
      members: { $in: [req.params.userId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const findChat = async (req, res) => {
  try {
    const chat = await ChatModel.findOne({
      members: { $all: [req.params.firstId, req.params.secondId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    res.status(500).json(error);
  }
};
