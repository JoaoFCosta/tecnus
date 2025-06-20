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

import Profile from "./pages/Profile/Profile";
import MyCourses from "./pages/Profile/MyCourses";
import Quiz from "./pages/Quizzes/Quiz";
import Resultado from "./pages/Quizzes/Result";
import Classes from "./pages/Classes/Classes";
import Dashboard from "./pages/AdminDashboard/Dashboard";

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
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/quizzes" element={<Quiz />} />
        <Route path="/quizzes/:quizId" element={<Quiz />} />
        <Route path="/quizzes/:quizId/resultado" element={<Resultado />} />
        <Route path="/quizzes/resultado" element={<Resultado />} />
        <Route path="/class" element={<Classes />} />
        <Route path="/class/google-drive/aula/:id" element={<Classes />} />
        <Route path="/class/google-docs/aula/:id" element={<Classes />} />
        <Route path="/class/google-gmail/aula/:id" element={<Classes />} />
        <Route path="/class/google-planilhas/aula/:id" element={<Classes />} />
        <Route
          path="/class/google-apresentacao/aula/:id"
          element={<Classes />}
        />
        <Route path="/class/google-classroom/aula/:id" element={<Classes />} />
        <Route path="/class/seguranca/aula/:id" element={<Classes />} />
        <Route path="/class/excel-iniciante/aula/:id" element={<Classes />} />
        <Route
          path="/class/excel-intermediario/aula/:id"
          element={<Classes />}
        />
        <Route
          path="/class/direitos-consumidor/aula/:id"
          element={<Classes />}
        />
        <Route path="/class/banco-dados/aula/:id" element={<Classes />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
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
