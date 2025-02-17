import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import the context
import AppHeader from "../components/app-layout/AppHeader";
import AppFooter from "../components/app-layout/AppFooter";

const isAdmin = true

const ProtectedRoute = () => {
    const { user } = useAuth();

    return user ? <><AppHeader /><Outlet /> <AppFooter /></> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
