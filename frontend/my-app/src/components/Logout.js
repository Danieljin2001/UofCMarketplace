import axios, * as others from 'axios';
import {useNavigate} from "react-router-dom";
import React from "react";

const Logout = () => {
    const navigate = useNavigate();
    localStorage.clear(); // clear auth token
    delete axios.defaults.headers.common["Authorization"];  // clear private requests
    React.useEffect( () => { // navigate to old home page
        navigate("/")
    });
}
export default Logout