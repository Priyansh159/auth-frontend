import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hooks";

const PublicRoute: React.FC = () => {
  const isAuthenticated = useAppSelector(
    (state) => state.auth.isAuthenticated
  );

  // If logged in → block login/signup
  if (isAuthenticated) {
    return <Navigate to="/main" replace />;
  }

  // If not logged in → allow access
  return <Outlet />;
};

export default PublicRoute;

// import { Navigate, Outlet } from "react-router-dom";

// const PublicRoute: React.FC = () => {
//   const token = localStorage.getItem("token");

//   // ✅ Already logged in → block login/signup
//   if (token) {
//     return <Navigate to="/home" replace />;
//   }

//   // ❌ Not logged in → allow access
//   return <Outlet />;
// };

// export default PublicRoute;
