import React, { useEffect, useRef, useState } from "react";
import { getStudentFriend, getStudentMsgs, sendMsgToStudent } from "../api";
import Message from "../components/Message";
import formatDate from "../formatDate";
import ChatInput from "./ChatInput";
import Loading from "./Loading";
import { InputGroup, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import InputEmoji from "react-input-emoji";
import TypingBubble from "./TypingBubble";

const IS_TYPING_EVENT = "IS_TYPING";
const STOP_TYPING_EVENT = "STOP_TYPING";
let timeout;
let txt = "Click A Chat To View Conversation";
const ChatBox = ({
  chat,
  currentUser,
  setSendMsg,
  receiveMsg,
  socket,
  typing,
  setTyping,
}) => {
  const [friendData, setFriendData] = useState(null);
  const [isSelected, setIsSelected] = useState(false);
  const [msgs, setMsgs] = useState([]);
  const [newMsg, setNewMsg] = useState("");
  const scroll = useRef();

  useEffect(() => {
    if (socket) {
      socket.on(IS_TYPING_EVENT, (id) => {
        if (chat._id === id) {
          setTyping(true);
        } else {
          setTyping(null);
        }
        // if (currentChat?._id) {
        //   if (id === currentChat._id) {
        //     setTyping(true);
        //   }
        // }

        // id === currentChat?._id ? setTyping(true) : null
      });
      socket.on(STOP_TYPING_EVENT, (id) => {
        if (chat._id === id) {
          setTyping(false);
        } else {
          setTyping(null);
        }

        // if (currentChat?._id) {
        //   if (id === currentChat._id) {
        //     setTyping(false);
        //   }
        // }
      });
    }

    return () => {
      if (socket) {
        socket.off(IS_TYPING_EVENT);
        socket.off(STOP_TYPING_EVENT);
      }
    };
  }, [currentUser, friendData, chat]);

  useEffect(() => {
    scroll.current?.scrollIntoView({
      behavior: "smooth",
      alignToTop: false,
    });
  }, [msgs, typing]);

  useEffect(() => {
    console.log("Message Arrived: ", receiveMsg);
    if (!isSelected) return;
    if (receiveMsg !== null && receiveMsg.chatId === chat._id) {
      console.log("Received Msg in Chatbox: ", receiveMsg);
      setMsgs([...msgs, receiveMsg]);
    }
  }, [receiveMsg]);

  async function handleKey(e) {
    if (newMsg.length > 0) {
      let myMsg = newMsg;
      console.log("msg to send= ", myMsg);
      setNewMsg("");
      const payload = {
        senderId: currentUser._id,
        text: myMsg,
        chatId: chat._id,
      };
      // send msg to db
      const result = await sendMsgToStudent(payload);
      // update old msgs with new msg
      console.log("msg result= ", result);
      setMsgs([...msgs, result]);
      // send msg to socket
      const receiverId = friendData._id;
      setSendMsg({ ...result, receiverId });
    }
  }

  function handleChange(e) {
    const otherUser = chat?.members?.find((id) => id !== currentUser._id);
    const payload = { receiverId: otherUser, chatId: chat._id };
    if (e.target.value === "") {
      socket.emit(STOP_TYPING_EVENT, payload);
    } else {
      socket.emit(IS_TYPING_EVENT, payload);

      if (timeout) clearTimeout(timeout);

      const cb = () => socket.emit(STOP_TYPING_EVENT, payload);
      timeout = setTimeout(cb, 5000);
    }

    setNewMsg(e.target.value);
  }

  async function handleSend(e) {
    e.preventDefault();
    if (newMsg.length > 0) {
      let myMsg = newMsg;
      console.log("msg to send= ", myMsg);
      setNewMsg("");
      const payload = {
        senderId: currentUser._id,
        text: myMsg,
        chatId: chat._id,
      };
      // send msg to db
      const result = await sendMsgToStudent(payload);
      // update old msgs with new msg
      console.log("msg result= ", result);
      setMsgs([...msgs, result]);
      // send msg to socket
      const receiverId = friendData._id;
      setSendMsg({ ...result, receiverId });
    }
  }

  useEffect(() => {
    const otherUser = chat?.members?.find((id) => id !== currentUser._id);
    console.log("other user= ", otherUser);
    const getFriendData = async (data) => {
      const friend = await getStudentFriend(data);
      setFriendData(friend);
    };
    if (chat !== null) getFriendData({ id: otherUser });
  }, [chat, currentUser]);
  useEffect(() => {
    if (friendData !== null && chat !== null) {
      setIsSelected(true);
    }
    return () => {};
  }, [friendData, currentUser, chat]);
  useEffect(() => {
    const getMyMsgs = async (chatId) => {
      const chatMsgs = await getStudentMsgs(chatId);
      setMsgs(chatMsgs);
      console.log("chat msgs= ", msgs);
    };
    if (chat !== null) getMyMsgs({ chatId: chat._id });
  }, [chat]);

  return (
    <div style={{ flex: "3" }}>
      {isSelected === false ? (
        <Loading props={txt} />
      ) : (
        <>
          <div
            class="col"
            style={{
              textAlign: "center",
              height: "12%",
              backgroundColor: "white",
            }}
          >
            {/* name of person you're messaging */}
            <div
              id="name"
              class="py-2"
              style={{
                color: "black",
                backgroundColor: "white",
                borderBottom: "1px solid black",
              }}
            >
              {friendData.email}
            </div>
          </div>
          <div
            className="container d-flex flex-column justify-content-space-between "
            style={{
              backgroundColor: "white",
              height: "82%",
              overflow: "auto",
              overflowX: "hidden",
            }}
          >
            {msgs.map((msg) => (
              <div
                key={msg._id}
                className=" my-2 py-2 px-2"
                style={
                  msg.senderId === currentUser._id
                    ? {
                        alignSelf: "end",
                        color: "white",
                        backgroundColor: "#147efb",
                        width: "fit-content",
                        borderRadius: "15px 15px 0px 15px",
                        maxWidth: "45%",
                      }
                    : {
                        borderRadius: "15px 15px 15px 0px",
                        color: "white",
                        backgroundColor: "grey",
                        width: "fit-content",
                        maxWidth: "45%",
                      }
                }
              >
                <div
                  style={
                    msg.senderId === currentUser._id
                      ? {
                          alignSelf: "start",
                          color: "white",
                          backgroundColor: "#147efb",
                        }
                      : {
                          color: "white",
                          backgroundColor: "grey",
                        }
                  }
                >
                  {msg.text}
                </div>
                <div
                  ref={scroll}
                  style={
                    msg.senderId === currentUser._id
                      ? {
                          float: "right",
                          color: "white",
                          backgroundColor: "#147efb",
                          fontSize: "0.5rem",
                        }
                      : {
                          color: "white",
                          backgroundColor: "grey",
                          fontSize: "0.5rem",
                        }
                  }
                >
                  {" "}
                  {formatDate(msg.createdAt)}
                </div>
              </div>
            ))}
            {typing && (
              <TypingBubble innerRef={scroll} userEmail={friendData.email} />
            )}
          </div>
          <InputGroup className="mb-3" style={{ backgroundColor: "white" }}>
            <Form.Control
              type="text"
              value={newMsg}
              onChange={handleChange}
              placeholder="Message..."
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  handleKey();
                }
              }}
            />
            <div style={{ background: "white" }}>
              <Button onClick={handleSend} variant="primary">
                Send
              </Button>
            </div>
          </InputGroup>
        </>
      )}
    </div>
  );
};

export default ChatBox;
