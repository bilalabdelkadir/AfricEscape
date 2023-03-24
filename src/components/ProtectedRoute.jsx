import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../Hooks/useAuth";

const ProtectedRoute = () => {
  const { authState } = useAuth();
  const { token } = authState;
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
