import React, {useEffect, useState} from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import UserContext from "../utils/UserContext";
import { Provider} from "react-redux";
import store from "../utils/store";

const AppLayout = () => {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const data = {
            name: "Metin",
        };
        setUserName(data.name)
    }, []);

    return (
        <div className="app">
            <Provider store={store}>
                <UserContext.Provider value={{ loggedInUSer: userName, setUserName }}>
                    <Header />
                    <Outlet />
                    <Footer />
                </UserContext.Provider>
            </Provider>
        </div>
    )
};

export default AppLayout;