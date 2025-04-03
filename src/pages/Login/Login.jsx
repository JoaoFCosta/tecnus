import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router";
import FundoLogin from "../../assets/fundologin.png";

const Login = () => {
  return (
    <>
      <div className={styles.container}>
        <header className="navbar d-flex bg-transparent">
          <Link className="fs-3 fw-bold text-decoration-none text-white" to="/">
            Tecnus Saturn
          </Link>
        </header>
      </div>
    </>
  );
};

export default Login;
