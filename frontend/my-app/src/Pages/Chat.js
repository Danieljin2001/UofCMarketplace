import React from 'react'
import ChatBox from '../components/ChatBox'
import ChatInput from '../components/ChatInput'
import SideBar from '../components/SideBar'
import './Chat.css'
const Chat = () => {
  return (
    <>
      <div className='container my-4'>
        <div className='chat'>
          <SideBar/>
          <ChatBox />
        </div>
      </div>
    </>
  )
}

export default Chat