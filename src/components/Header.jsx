import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Profile from "../assets/User.png";
import { Link } from "react-router";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Verifica se o usuário está logado no localStorage
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  return (
    <header className="navbar text-decoration-none text-light p-3 d-flex header">
      <div className="container-fluid">
        <Link
          className="my-3 mx-3 fs-3 fw-bold text-decoration-none text-white"
          to="/"
        >
          Tecnus Saturn
        </Link>

        <div className="d-flex align-content-center gap-4 fs-5">
          {isLoggedIn && (
            <Link
              to="/courses"
              className="navbar text-decoration-none text-white"
            >
              Cursos
            </Link>
          )}
          <Link to="/about" className="navbar text-decoration-none text-white">
            Sobre nós
          </Link>
        </div>

        <Link to="/login" className="text-decoration-none text-white">
          <div className="d-flex align-items-center fs-5">
            <span className="text-white me-2">
              {isLoggedIn ? "Bem-vindo!" : "Olá, visitante"}
            </span>
            <img src={Profile} alt="" className="w-25" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
