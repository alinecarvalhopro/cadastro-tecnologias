import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "../pages/Login";
import { RegisterForm } from "../pages/RegisterForm";
import { Home } from "../pages/Home";
import { PublicRoutes } from "./PublicRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Route>
    </Routes>
  );
};