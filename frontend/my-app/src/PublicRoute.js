import { Navigate, Outlet } from "react-router";
import { isAuth } from "./routeProtection";

const PublicRoute = (props) => {
  const auth = isAuth();
  return auth ? <Navigate to="/home" /> : <Outlet />;
};
export default PublicRoute;
