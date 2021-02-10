import logo1 from "../../images/logo.png";
import "./Header.scss";

function Header() {
    return (
    <header>
        <img src={logo1} alt=""/>
        <div className="navbar">
            <a href="">Home</a>
            <a href="">Destinations</a>
            <a href="">About</a>
            <a href="">Partner</a>
            <button className="login">Login</button>
            <button className="register">Register</button>
        </div>
    </header>
    )
}

export default Header;