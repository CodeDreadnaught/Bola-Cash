import { useState } from "react";
import { Outlet } from "react-router-dom";
import NavLoginContext from "../context/NavLoginContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppLayout = () => {
    const [ifClickSignIn, setIfClickSignIn] = useState(true);

    return (
        <div className="app-container">
            <NavLoginContext.Provider value={{ ifClickSignIn, setIfClickSignIn }}>
                <Header />
                <Outlet />
                <Footer />
            </NavLoginContext.Provider>
        </div>
    );
};

export default AppLayout;