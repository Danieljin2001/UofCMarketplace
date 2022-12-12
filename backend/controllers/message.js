import Message from "../models/msg";
import _ from "lodash";

export const addMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;
  const message = new Message({
    chatId,
    senderId,
    text,
  });
  try {
    const result = await message.save();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getMessages = async (req, res) => {
  const { chatId } = req.body;
  try {
    const result = await Message.find({ chatId });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
