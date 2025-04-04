import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import styles from "./Header.module.css";
import Profile from "../../assets/User.png";
import { Link } from "react-router";

const Header = () => {
  return (
    <header
      className={`navbar navbar-expand-lg text-light p-3 d-flex ${styles.header}`}
    >
      <div className="container-fluid">
        <Link
          className="my-3 mx-3 fs-3 fw-bold text-decoration-none text-white"
          to="/"
        >
          Tecnus Saturn
        </Link>

        <div className="d-flex align-content-center gap-4 fs-5">
          <div className={styles.navbar}>Cursos</div>
          <Link to="/about" className={styles.navbar}>
            Sobre nós
          </Link>
        </div>

        <Link to="/login" className="text-decoration-none text-white">
          <div className="d-flex align-items-center fs-5">
            <span className="text-white me-2">Olá, visitante</span>
            <img src={Profile} alt="" className="w-25" />
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;
