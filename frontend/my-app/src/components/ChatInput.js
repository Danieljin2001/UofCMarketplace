import React from 'react'
import { InputGroup, Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

const ChatInput = () => {
  return (
    <InputGroup className="mb-3" style ={{backgroundColor:"white", height:"7.1%"}}>
        <Form.Control placeholder="Message..."/>
        <Button variant="outline-secondary">Send</Button>
    </InputGroup>

  )
}

export default ChatInput