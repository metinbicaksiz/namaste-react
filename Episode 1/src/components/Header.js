import React, { useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";

const Header = () => {
    const [login, setLogin] = useState(false);
    const btnName = login ? "Logout" : "Login";
    const loginBtn = () => {
        setLogin(!login);
    }

    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Daphne Food App"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={loginBtn}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;