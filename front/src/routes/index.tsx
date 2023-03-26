import { Routes, Route, Navigate } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/landingPage" />} />
      <Route path="/landingPage" element={<LandingPage />} />
    </Routes>
  );
};
