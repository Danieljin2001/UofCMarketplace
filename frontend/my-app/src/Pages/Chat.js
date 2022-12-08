import React from "react";
import ChatBox from "../components/ChatBox";
import ChatInput from "../components/ChatInput";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import "./Chat.css";
const Chat = () => {
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
