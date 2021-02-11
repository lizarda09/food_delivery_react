import React from 'react';
import "./Login.scss";

const Login = () => {
    return (
        <div className="register_form">
            <span>Registration</span>
            <input type="text" placeholder="Enter your name"/>
            <input type="email" placeholder="Enter your mail"/>
            <input type="phone" placeholder="Enter your phone"/>
            <button id="regBtn">Register</button>
        </div>
    )
}

export default Login;