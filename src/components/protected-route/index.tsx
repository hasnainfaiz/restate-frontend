import React, { useEffect } from "react";
import { Route, Navigate, useNavigate } from "react-router-dom";
import { AUTH_TOKEN, routes } from "../../services";
import axios from "axios";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
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