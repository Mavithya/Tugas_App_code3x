import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import TokenPage from "../pages/TokenPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/token" element={<TokenPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;