import React from 'react'

const Message = () => {
  return (
    <>
        <div id="message" className='my-2 py-2 px-2' style ={{borderRadius:"15px 15px 15px 0px", color:"white", backgroundColor:"grey", width:"fit-content", maxWidth:"45%"}}>
                test
        </div>

        <div id="ownerMessage" className='my-2 py-2 px-2' style ={{float:"right", color:"white", backgroundColor:"#147efb", width:"fit-content", borderRadius:"15px 15px 0px 15px", maxWidth:"45%"}}>
            test
        </div>
    </>

  )
}

export default Message