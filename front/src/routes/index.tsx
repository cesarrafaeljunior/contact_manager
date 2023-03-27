import { Routes, Route, Navigate } from "react-router-dom";
import { DashboardPage } from "../pages/Dashboard";
import { HomePage } from "../pages/HomePage/index";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/homePage" />} />
      <Route path="/homePage" element={<HomePage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
    </Routes>
  );
};
