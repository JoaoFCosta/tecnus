import React from "react";
import styles from "./Login.module.css";
import { Link } from "react-router";
import { BsEnvelope } from "react-icons/bs";

const Login = () => {
  return (
    <>
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
        </div>
      </header>

      <div className="container d-flex justify-content-center align-items-center">
        <div className={styles.loginContainer}>
          <h1 className="text-header-color fw-bold">Entre na sua conta</h1>
          <div>
            <label htmlFor="email" className={`text-light ${styles.label}`}>
              E-mail
            </label>
            <div>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Digite o seu e-mail"
                className={styles.input}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className={`text-light ${styles.label}`}>
              Senha
            </label>
            <div>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="password"
                required
                placeholder="Digite a sua senha"
                className={styles.input}
              />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <input
              className={`form-check-input ${styles.checkbox}`}
              type="checkbox"
              value=""
              id="checkDefault"
            />
            <label
              className={`ms-1 ${styles.checkboxLabel}`}
              htmlFor="checkDefault"
            >
              Lembrar de mim
            </label>
            <Link to="/" className={styles.forgotPassword}>
              Esqueci minha senha
            </Link>
          </div>

          <button type="submit" className={`btn mt-4 fw-bold ${styles.button}`}>
            Entrar
          </button>
        </div>
      </div>

      <div className="container d-flex flex-column justify-content-center align-items-center mt-4">
        <h1 className={`fs-5 text-light ${styles.text}`}>Ainda não tem uma conta? </h1>

        <Link to="/" className={`fs-5 fw-bold text-decoration-none text-light ${styles.link}`}>
          Faça seu cadastro gratuito
        </Link>
      </div>
    </>
  );
};

export default Login;
