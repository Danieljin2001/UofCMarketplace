import { Navigate, Outlet } from "react-router";
import { isAdmin } from "./routeProtection";

const AdminRoute = (props) => {
  const auth = isAdmin();
  return auth ? <Outlet /> : <Navigate to="/login" />;
};
export default AdminRoute;
