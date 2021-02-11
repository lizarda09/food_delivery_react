import React from 'react';
import "./Register.scss";

const Register = () => {
    return (
        <div className="register_form">
            <span>Registration</span>
            <input type="text" placeholder="Enter your name"/>
            <input type="email" placeholder="Enter your mail"/>
            <input type="phone" placeholder="Enter your phone"/>
            <input type="password" placeholder="Enter password"/>
            <input type="password" placeholder="Again password"/>
            <button id="regBtn">Register</button>
        </div>
    )
}

export default Register;