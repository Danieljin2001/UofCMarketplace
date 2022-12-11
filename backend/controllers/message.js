import Message from "../models/msg";
import _ from "lodash";

export const getUnreadChats = async (req, res) => {
  try {
    const stu = await getStudent(req, res);
    if (!stu) return res.json({ error: "Access Denied" });
    const me = req.user._id;

    let result = [];
    const map = {};

    const sent = await Message.find({ senderId: stu._id });
    const received = await Message.find({ receiverId: stu._id });

    //filter chats with different users and the latest times
    result = filterChats(result, map, sent, "receiver");
    result = filterChats(result, map, received, "sender");

    result = result.filter((c) => c.read === null && c.senderId !== stu._id);

    res.json({ success: true, unread: result.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const readMsg = async (req, res) => {
  try {
    const stu = await getStudent(req, res);
    if (!stu) return res.json({ error: "Access Denied" });
    const { receiver } = req.body;
    await Message.updateMany(
      { receiverId: stu._id, senderId: receiver },
      { read: new Date() }
    );
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const filterChats = (result, map, messages, userType) => {
  messages.forEach((msg) => {
    if (!map[msg[userType]]) {
      map[msg[userType]] = msg.dateSent;
      result.push(msg);
    } else if (map[msg[userType]] <= msg.dateSent) {
      map[msg[userType]] = msg.dateSent;

      const idx = _.findIndex(result, [userType, msg[userType]]);
      result.splice(idx, 1);
      result.push(msg);
    }
  });

  return result;
};
export const getMyChats = async (req, res) => {
  try {
    const stu = await getStudent(req, res);
    if (!stu) return res.json({ error: "Access Denied" });

    let result = [];
    const map = {};

    const sentMsgs = await Message.find({ senderId: stu._id });
    const receviedMsgs = await Message.find({ receiverId: stu._id });

    result = filterChats(result, map, sentMsgs, "receiver");
    result = filterChats(result, map, receviedMsgs, "sender");

    result.sort((a, b) => b.createdAt - a.createdAt);

    res.status(200).json({ success: true, chats: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getConversation = async (req, res) => {
  try {
    const stu = await getStudent(req, res);
    if (!stu) return res.json({ error: "Access Denied" });
    const { receiver } = req.body;
    // get msgs where I sent the msg, or I received a msg
    const myMessages = await Message.find({
      $or: [
        { receiverId: stu._id, senderId: receiver },
        { receiverId: receiver, senderId: stu._id },
      ],
    });
    myMessages.sort((a, b) => b.createdAt - a.createdAt);
    res.status(200).json({ success: true, msgs: myMessages });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const sendNewMessage = async (req, res) => {
  try {
    const stu = await getStudent(req, res);
    if (!stu) return res.json({ error: "Access Denied" });
    const { receiver, msg } = req.body;
    const sender = stu._id;
    const newMsg = new Message({
      senderId: sender,
      receiverId: receiver,
      message: msg,
    });
    const result = await newMsg.save();
    if (!result) {
      res.json({ error: "error saving new message" });
    }
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
