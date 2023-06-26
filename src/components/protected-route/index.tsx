import React, { ReactNode, useEffect } from "react";
import { Route, Navigate, useNavigate } from "react-router-dom";
import { AUTH_TOKEN, routes } from "../../services";
import axios from "axios";

type params = {
    children: ReactNode
}

const ProtectedRoute = ({ children }: params) => {
    const token = localStorage.getItem(AUTH_TOKEN);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    }, [token])


    return token ? children : <Navigate to={routes.adminLogin} replace />;
};

export default ProtectedRoute;