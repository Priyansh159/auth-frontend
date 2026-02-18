import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const ProtectedRoute: React.FC = () => {
  const isAuthenticated = useAppSelector(
    (state) => state.auth.isAuthenticated
  );

  if (!isAuthenticated) {
    return <Navigate to="/home" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

// import { Navigate, Outlet } from "react-router-dom";

// const ProtectedRoute: React.FC = () => {
//   const token = localStorage.getItem("token");

//   // ❌ Not logged in → redirect
//   if (!token) {
//     return <Navigate to="/login" replace />;
//   }

//   // ✅ Logged in → allow access
//   return <Outlet />;
// };

// export default ProtectedRoute;
