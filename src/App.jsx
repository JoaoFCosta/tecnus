import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./App.css";
import "./scss/style.scss";
import { useLocation } from "react-router";
import { useEffect } from "react";

import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Login from "./pages/Login/Login";
import CreateAccount from "./pages/Login/CreateAccount";
import ForgotPassword from "./pages/Login/ForgotPassword";
import Courses from "./pages/Courses/Courses";
import Terms from "./pages/Terms/Terms";
import GoogleDrive from "./pages/Courses/GoogleDrive";
import GoogleDocs from "./pages/Courses/GoogleDocs";
import GoogleGmail from "./pages/Courses/GoogleGmail";
import GooglePlanilhas from "./pages/Courses/GooglePlanilhas";
import GoogleApresentacao from "./pages/Courses/GoogleApresentacao";
import GoogleClassroom from "./pages/Courses/GoogleClassroom";
import Seguranca from "./pages/Courses/Seguranca";

// 🔹 Componente responsável pela mudança de fundo
const AppContent = () => {
  const location = useLocation(); // Captura a rota atual

  useEffect(() => {
    // Remove todas as classes anteriores do body, manter apenas a de overflow-x-hidden
    document.body.className = "overflow-x-hidden";

    // Define a classe de fundo com base na rota
    if (location.pathname === "/") {
      document.body.classList.add("home-bg");
    } else if (
      ["/login", "/create-account", "/forgot-password"].includes(
        location.pathname
      )
    ) {
      document.body.classList.add("login-bg");
    } else {
      document.body.classList.add("default-bg");
    }
  }, [location.pathname]); // Executa sempre que a rota mudar

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/google-drive" element={<GoogleDrive />} />
        <Route path="/google-docs" element={<GoogleDocs />} />
        <Route path="/google-gmail" element={<GoogleGmail />} />
        <Route path="/google-planilhas" element={<GooglePlanilhas />} />
        <Route path="/google-apresentacao" element={<GoogleApresentacao />} />
        <Route path="/google-classroom" element={<GoogleClassroom />} />
        <Route path="/seguranca" element={<Seguranca />} />
      </Routes>
    </main>
  );
};

// 🔹 Componente principal que engloba o BrowserRouter
const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
