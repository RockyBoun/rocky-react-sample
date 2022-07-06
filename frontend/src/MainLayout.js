import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import ManagePage from "./pages/manage";
import Header from "./layouts/header";
import SettingPage from "./pages/setting";
import SignInPage from "./pages/auth/signin";
import SignUpPage from "./pages/auth/signup";

const MainLayout = () => {
  return (
    <React.Suspense fallback="loading">
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/manage" element={<ManagePage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </React.Suspense>
  );
};

export default MainLayout;
