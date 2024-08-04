import React, { useState} from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.png";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [login, setLogin] = useState(false);
    const btnName = login ? "Logout" : "Login";
    const loginBtn = () => {
        setLogin(!login);
    }

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between md:bg-purple-300 shadow-lg mb-3 sm:bg-amber-400 hover:bg-purple-400">
            <div className="w-28">
                <img src={logo} alt="Daphne Food App"/>
            </div>
            <div className="flex items-center">
                <ul className="flex m-8 p-6">
                    <li className="px-4 font-bold text-lg text-white">
                        {onlineStatus ? "Online" : "Offline"}
                    </li>
                    <li className="px-4 font-bold text-lg">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-4 font-bold text-lg">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="px-4 font-bold text-lg">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="px-4 font-bold text-lg">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-4 font-bold text-lg">Cart</li>
                    <button className="px-4 font-bold text-lg" onClick={loginBtn}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;