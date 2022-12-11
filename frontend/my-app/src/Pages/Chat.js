import React, { useEffect, useState } from "react";
import ChatBox from "../components/ChatBox";
import ChatInput from "../components/ChatInput";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import "./Chat.css";
import { io } from "socket.io-client";
import { getDecodedToken } from "../routeProtection";

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    setSocket(io("http://localhost:3001"));
    const userId = getDecodedToken().id;
    setUserId(userId);
  }, []);
  return (
    <>
      <NavBar></NavBar>
      <div className="container my-4">
        <div className="chat">
          <SideBar />
          <ChatBox />
        </div>
      </div>
    </>
  );
};

export default Chat;
