import { useState } from "react";
import { Outlet } from "react-router-dom";
import EnsurePageLoadsFromTop from "../utils/EnsurePageLoadsFromTop";
import NavLoginContext from "../context/NavLoginContext";
import Alert from "../components/Alert";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppLayout = () => {
    const [ headerBg, setHeaderBg ] = useState("");
    
    const [ifClickSignIn, setIfClickSignIn] = useState(true),
    [ showModal, setShowModal ] = useState({
        heading: "Error",
        message: "You are not authorized to perform this action",
        on: false,
        success: false
    });

    const [ user, setUser ] = useState(null),
    [ requestPickUp, setRequestPickUp ] = useState(false),
    [ token, setToken ] = useState(localStorage.getItem("site") || null);

    const [ clickProfileIcon, setClickProfileIcon ] = useState(false);

    return (
        <div className="app-container">
            <EnsurePageLoadsFromTop>
                <NavLoginContext.Provider value={{ headerBg, setHeaderBg, ifClickSignIn, setIfClickSignIn, showModal, setShowModal, user, setUser, token, setToken, clickProfileIcon, setClickProfileIcon, requestPickUp, setRequestPickUp }}>
                    <Alert />
                    <Header />
                    <Outlet />
                    <Footer />
                </NavLoginContext.Provider>
            </EnsurePageLoadsFromTop>
        </div>
    );
};

export default AppLayout;