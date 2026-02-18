import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Error from "./pages/Error";
import ProtectedRoute from "./router/ProtectedRoutes";
import PublicRoute from "./router/PublicRoute";
import Auth from "./components/LoginSignup/Auth";
import HomeMain from "./components/Home";

const App: React.FC = () => {
  return (
    <Routes>
      {/* Default */}
      
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* 🚫 Public-only Routes */}
       <Route element={<PublicRoute />}>
        <Route path="/auth" element={<Auth />} />
        <Route path="/home" element={<HomeMain />} />
      </Route>

      {/* 🔐 Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/main" element={<Home />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
