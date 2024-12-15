import { Navigate, Outlet } from "react-router-dom";

const ProtectRoutes = ({children}) => {
    const token = localStorage.getItem("access_token");
    if (!token && token === null) {
        return <Navigate to="/login" />;
    }

    return <> { children || <Outlet /> }</>;
}
 
export default ProtectRoutes;