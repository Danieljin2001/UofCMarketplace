import ChatModel from "../models/chat";
import Message from "../models/msg";

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

export const deleteMyChats = async (req, res) => {
  try {
    const chats = await ChatModel.find({
      members: { $in: [req.body.stuID] },
    });
    if (chats) {
      for (let i = 0; i < chats.length; i++) {
        const chat = chats[i];
        const { _id } = chat;
        await Message.deleteMany({ chatId: _id });
      }
      // run this last, first delete all msgs
      await ChatModel.deleteMany({
        members: { $in: [req.body.stuID] },
      });
    }
    return;
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
