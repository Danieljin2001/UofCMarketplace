import React from 'react'
import Message from '../components/Message'
import ChatInput from './ChatInput'

const ChatBox = () => {
  return (
    <div style ={{border:'1px solid white', flex:'2'}}>
        <div className='container'style ={{backgroundColor:"white", height:"93%"}}>
            <div class="row" style ={{height:"5vh"}}>
                <div class="col" style ={{backgroundColor:"red"}}></div>
            </div>
                    <Message></Message>
                    <Message></Message>
                    <Message></Message>
                    <Message></Message>
                    <Message></Message>
                    <Message></Message>
        </div>
            <ChatInput/>
    </div>
  )
}

export default ChatBox