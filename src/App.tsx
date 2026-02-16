import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Error from "./pages/Error";
import ProtectedRoute from "./router/ProtectedRoutes";
import PublicRoute from "./router/PublicRoute";

const App: React.FC = () => {
  return (
    <Routes>
      {/* Default */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* 🚫 Public-only Routes */}
      <Route element={<PublicRoute />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      {/* 🔐 Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/home" element={<Home />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
