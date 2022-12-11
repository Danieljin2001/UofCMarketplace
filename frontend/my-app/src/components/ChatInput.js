import React, { useState } from "react";
import { InputGroup, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const ChatInput = ({ props }) => {
  console.log(props);
  const [msg, setMsg] = useState("");
  function handleChange(e) {
    setMsg(e.target.value);
  }

  function handleSend(e) {
    e.preventDefault();
    if (msg.length > 0) {
      props.emit("chat", {
        msg: msg,
      });
    }
  }
  return (
    <InputGroup
      className="mb-3"
      style={{ backgroundColor: "white", height: "7.1%" }}
    >
      <Form.Control
        type="text"
        value={msg}
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
