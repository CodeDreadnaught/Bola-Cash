import { useContext } from "react";
import NavLoginContext from "../context/NavLoginContext";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () => {
    const { user } = useContext(NavLoginContext);

    return user ? <Outlet /> : <Navigate to="/login" />

};

export default ProtectedRoutes;