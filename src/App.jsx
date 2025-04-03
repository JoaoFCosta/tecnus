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

// 🔹 Componente responsável pela mudança de fundo
const AppContent = () => {
  const location = useLocation(); // Captura a rota atual

  useEffect(() => {
    // Remove todas as classes anteriores do body
    document.body.className = "";

    // Adiciona a classe de fundo correspondente à página
    if (location.pathname === "/") {
      document.body.classList.add("home-bg");
    } else if (location.pathname === "/login") {
      document.body.classList.add("login-bg");
    } else {
      document.body.classList.add("default-bg");
    }
  }, [location.pathname]); // Executa sempre que a rota mudar

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
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
