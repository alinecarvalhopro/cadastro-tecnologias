import { Navigate, Outlet } from "react-router-dom";

export const PublicRoutes = () => {
  const token = localStorage.getItem("@TOKEN");
  return <>{!token ? <Outlet /> : <Navigate to="/home" />}</>;
};
