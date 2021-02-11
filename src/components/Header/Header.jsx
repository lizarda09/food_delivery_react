import React from 'react';
import logo1 from "../../images/logo.png";
import "./Header.scss";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
            <header>
                <img src={logo1} alt=""/>
                <div className="navbar">
                    <NavLink to="/home"><a href="">Home</a></NavLink>
                    <NavLink to="/destinations"><a href="">Destinations</a></NavLink>
                    <NavLink to="/about"><a href="">About</a></NavLink>
                    <NavLink to="/partner"><a href="">Partner</a></NavLink>
                    <NavLink to="/login"><button className="login">Login</button></NavLink>
                    <NavLink to="/register"><button className="register">Register</button></NavLink>
                </div>
            </header>
    )
}

export default Header;