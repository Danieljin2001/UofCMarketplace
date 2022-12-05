import React from 'react'
import Button from 'react-bootstrap/Button'



const Account = () => {
  return (
        <div className='container align-items-center' style={{marginTop:"10%"}}>
          <div className=' text-center'>
                <Button  className='my-2 py-3 btn-light' style={{borderBottom:"1px solid black", width:"20%"}}>My Posts</Button>
          </div>
          <div className='text-center'>
                <Button variant="light" className='my-2 py-3 btn-light' style={{borderBottom:"1px solid black", width:"20%"}}>Update Password</Button>
          </div>
          <div className='text-center'>
                <Button variant="dark" className='my-2 py-3 btn-light' style={{borderBottom:"1px solid black", width:"20%"}}>Log Out</Button>
          </div>
        </div>
  )
}

export default Account