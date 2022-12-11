import React, { useEffect, useRef, useState } from "react";
import ChatBox from "../components/ChatBox";
import ChatInput from "../components/ChatInput";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import "./Chat.css";
import { io } from "socket.io-client";
import { getDecodedToken } from "../routeProtection";

const Chat = () => {
  const isSecondRender = useRef(false);
  const [socket, setSocket] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    isSecondRender.current && setSocket(io("http://localhost:3001"));
    isSecondRender.current = true;
  }, []);
  return (
    <>
      <NavBar></NavBar>
      <div className="container my-4">
        <div className="chat">
          <SideBar />
          <ChatBox props={socket} />
        </div>
      </div>
    </>
  );
};

export default Chat;
