import React from 'react'
import './Home.css';
import NavBarAuth from "../components/NavBarAuth";

function HomeAuth() {
    return (
        <>
            <NavBarAuth />
            <div className='square-box d-flex justify-content-center align-items-center'>
                <div>
                    <h1>University of Calgary Marketplace</h1>
                    <p>Exclusive access to UofC students</p>
                </div>
            </div>
        </>
    )
}
export default HomeAuth