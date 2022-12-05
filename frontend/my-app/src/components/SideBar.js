import React from 'react'

const SideBar = () => {
  return (
    <div style ={{borderRight:'1px solid black', flex:'1', backgroundColor:"white"}}>
        <div className='container text-center'style ={{backgroundColor:"white", height:"100%", overflow:"auto", color:"black"}}>
            People that you've messaged before
        </div>
    </div>
  )
}

export default SideBar