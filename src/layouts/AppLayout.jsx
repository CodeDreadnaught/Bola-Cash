import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavLoginContext from "../context/NavLoginContext";
import Alert from "../components/Alert";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppLayout = () => {
    const [ifClickSignIn, setIfClickSignIn] = useState(true),
    [ showModal, setShowModal ] = useState({
        heading: "Error",
        message: "You are not authorized to perform this action",
        on: false,
        success: false
    });

    const [ user, SetUser ] = useState(null),
    [ token, setToken ] = useState(localStorage.getItem("site") || "");

    return (
        <div className="app-container">
            <NavLoginContext.Provider value={{ ifClickSignIn, setIfClickSignIn, showModal, setShowModal, user, SetUser, token, setToken }}>
                <Alert />
                <Header />
                <Outlet />
                <Footer />
            </NavLoginContext.Provider>
        </div>
    );
};

export default AppLayout;