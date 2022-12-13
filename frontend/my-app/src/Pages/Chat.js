import React, { useEffect, useRef, useState } from "react";
import ChatBox from "../components/ChatBox";
import ChatInput from "../components/ChatInput";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import "./Chat.css";
import { io } from "socket.io-client";
import { getDecodedToken } from "../routeProtection";
import { getStudent, getStudentChats } from "../api";
import Loading from "../components/Loading";
const wsEndpoint = "http://localhost:3001";
const JOIN_EVENT = "JOIN";
const NEW_MESSAGE_EVENT = "NEW_MESSAGE";
const RECEIVE_MESSAGE_EVENT = "RECEIVE_MESSAGE";
const GET_ACTIVE_USERS_EVENT = "get-users";

const Chat = () => {
  const [typing, setTyping] = useState(false);
  const socket = useRef(null);
  const isSecondRender = useRef(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMsg, setSendMsg] = useState(null);

  // const receiveMsg = useRef();
  const [receiveMsg, setReceiveMsg] = useState(null);
  console.log("SOCKETID= ", socket.current?.id);
  const checkOnlineStatus = (chat) => {
    const isMember = chat.members.find((member) => member !== user._id);
    const online = onlineUsers.find((user) => user.id === isMember);
    return online ? true : false;
  };

  useEffect(() => {
    if (!user) return;
    if (socket.current && socket.current.connected) return;
    socket.current = io(wsEndpoint);
    socket.current.emit(JOIN_EVENT, user._id); // user joins
    socket.current.on(GET_ACTIVE_USERS_EVENT, (users) => {
      setOnlineUsers(users);
      console.log("oneline users= ", onlineUsers);
    });

    socket.current.on(RECEIVE_MESSAGE_EVENT, (data) => {
      console.log("received msg on frontend= ", data);
      setReceiveMsg(data);
      // receiveMsg.current = data;
    });

    // socket.current.on(IS_TYPING_EVENT, (id) => {
    //   setTyping(true);
    //   // if (currentChat?._id) {
    //   //   if (id === currentChat._id) {
    //   //     setTyping(true);
    //   //   }
    //   // }

    //   // id === currentChat?._id ? setTyping(true) : null
    // });
    // socket.current.on(STOP_TYPING_EVENT, (id) => {
    //   setTyping(false);

    //   // if (currentChat?._id) {
    //   //   if (id === currentChat._id) {
    //   //     setTyping(false);
    //   //   }
    //   // }
    // });

    return () => {
      socket.current.off(JOIN_EVENT);
      socket.current.off(GET_ACTIVE_USERS_EVENT);
      socket.current.off(RECEIVE_MESSAGE_EVENT);
      // socket.current.off(IS_TYPING_EVENT);
      // socket.current.off(STOP_TYPING_EVENT);
      // socket.current.emit(DISCONNECT_EVENT);
      socket.current.disconnect();
    };
  }, [user]);

  // send msg to socket
  useEffect(() => {
    if (sendMsg === null) return;
    console.log("sending msg from frontend to socket ", sendMsg);
    socket.current.emit(NEW_MESSAGE_EVENT, sendMsg);

    return () => {
      socket.current.off(NEW_MESSAGE_EVENT);
    };
  }, [sendMsg]);

  // receive msg from socket
  // useEffect(() => {
  //   if (socket.current === null) return;
  //   console.log("retrieved msg event");
  //   socket.current.on(RECEIVE_MESSAGE_EVENT, (data) => {
  //     console.log("received msg on frontend= ", data);
  //     setReceiveMsg(data);
  //   });
  //   return () => {
  //     socket.current.off(RECEIVE_MESSAGE_EVENT);
  //   };
  // }, []);

  async function getChats() {
    const data = await getStudentChats();
    console.log("all chats= ", data);
    setChats(data);
  }
  async function getUser() {
    const data = await getStudent();
    setUser(data);
    console.log("user= ", user);
  }
  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    getChats();
  }, [user]);

  useEffect(() => {
    if (user !== null && chats.length >= 0) {
      setLoading(false);
    }
  }, [user, chats]);

  // const isSecondRender = useRef(false);
  // const [socket, setSocket] = useState(null);
  // const [userId, setUserId] = useState(null);

  // useEffect(() => {
  //   isSecondRender.current && setSocket(io("http://localhost:3001"));
  //   isSecondRender.current = true;
  // }, []);
  return (
    <div>
      <NavBar></NavBar>
      <div className="container my-4">
        <div className="chat">
          {loading === true ? (
            <Loading />
          ) : (
            <div className="chat-list" style={{ overflow: "auto" }}>
              {chats.length ? (
                chats.map((chat) => (
                  <div
                    style={{
                      borderRight: "1px solid #5D3FD3",
                      flex: "1",
                      fontSize: "1rem",
                    }}
                    key={chat._id}
                    className="chat-header-click"
                    onClick={() => {
                      console.log("clicked a chat");

                      setCurrentChat(chat);
                    }}
                  >
                    <SideBar
                      online={checkOnlineStatus(chat)}
                      data={chat}
                      currentUser={user}
                      typing={typing}
                      currentChat={currentChat}
                    />
                    <hr />
                  </div>
                ))
              ) : (
                <h2
                  style={{ borderRight: "1px solid #5D3FD3" }}
                  className="text-white p-4"
                >
                  You Have No Chats
                </h2>
              )}
            </div>
          )}
          <ChatBox
            chat={currentChat}
            currentUser={user}
            setSendMsg={setSendMsg}
            receiveMsg={receiveMsg}
            socket={socket.current}
            typing={typing}
            setTyping={setTyping}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
