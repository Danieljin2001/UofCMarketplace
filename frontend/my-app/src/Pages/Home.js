import React from 'react'
import './Home.css';
import NavBar from "../components/NavBar";

function Home() {
  return (
  <>
  <NavBar />
  <div className='square-box d-flex justify-content-center align-items-center' style={{border:"none"}}>
        <div>
          <h1>University of Calgary Marketplace</h1>
          <p>Exclusive access to UofC students</p>
        </div>
  </div>
  </>
  )
}
export default Home