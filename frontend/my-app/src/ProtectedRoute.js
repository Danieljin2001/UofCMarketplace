import { Navigate, Outlet } from "react-router";
import { isAdmin, isAuth } from "./routeProtection";

const ProtectedRoute = (props) => {
  const auth = isAuth();
  const addy = isAdmin();
  return auth && !addy ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
