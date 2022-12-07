import React from 'react'
import SideChat from './SideChat'

const SideBar = () => {
  return (
    <div style ={{borderRight:'1px solid black', flex:'1', backgroundColor:"white"}}>
        <div className='container text-center'style ={{backgroundColor:"white", height:"100%", overflow:"auto", color:"black"}}>
            <SideChat/>
            <SideChat/>
            <SideChat/>
            <SideChat/>
        </div>
    </div>
  )
}

export default SideBar