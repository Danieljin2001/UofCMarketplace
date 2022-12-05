import React from 'react'
import Message from '../components/Message'
import ChatInput from './ChatInput'

const ChatBox = () => {
  return (
    <div style ={{border:'1px solid white', flex:'2'}}>
 
        <div class="col" style ={{textAlign:"center", height:"10%" ,backgroundColor:"white"}}>
            <div id="name" class="py-3" style = {{color:"black", backgroundColor:"white", borderBottom:"1px solid black"}}>
                Sunny
            </div>
        </div>
        <div className='container'style ={{backgroundColor:"white", height:"83%", overflow:"auto"}}>
                    <Message></Message>
        </div>
            <ChatInput/>
    </div>
  )
}

export default ChatBox