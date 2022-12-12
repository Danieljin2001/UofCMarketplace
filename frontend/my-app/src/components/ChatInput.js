import React, { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ChatInput = ({ props }) => {
  console.log(props);
  const [newMsg, setNewMsg] = useState("");
  function handleChange(e) {
    setNewMsg(e.target.value);
  }

  function handleSend(e) {
    e.preventDefault();
    if (newMsg.length > 0) {
      let myMsg = newMsg;
      console.log("msg to send= ", myMsg);
      setNewMsg("");
    }
  }
  return (
    <InputGroup
      className="mb-3"
      style={{ backgroundColor: "white", height: "7.1%" }}
    >
      <Form.Control
        type="text"
        value={newMsg}
        onChange={handleChange}
        placeholder="Message..."
      />
      <Button onClick={handleSend} variant="outline-secondary">
        Send
      </Button>
    </InputGroup>
  );
};

export default ChatInput;
