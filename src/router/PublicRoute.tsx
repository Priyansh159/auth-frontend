import { Navigate, Outlet } from "react-router-dom";

const PublicRoute: React.FC = () => {
  const token = localStorage.getItem("token");

  // ✅ Already logged in → block login/signup
  if (token) {
    return <Navigate to="/home" replace />;
  }

  // ❌ Not logged in → allow access
  return <Outlet />;
};

export default PublicRoute;
