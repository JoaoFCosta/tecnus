import React from "react";
import styles from "./CreateAccount.module.css";
import { Link } from "react-router";
import Saturno1 from "../../assets/saturno1.png";
import Saturno2 from "../../assets/saturno2.png";

const CreateAccount = () => {
  return (
    <>
      <div className="container-fluid">
        <header className="navbar navbar-expand-lg text-light p-3 d-flex position-fixed top-0">
          <Link
            className="my-3 mx-3 fs-3 fw-bold text-decoration-none text-white"
            to="/"
          >
            Tecnus Saturn
          </Link>
        </header>
      </div>

      <div className="container d-flex flex-column justify-content-center align-items-center">
        <img
          src={Saturno1}
          alt=""
          className="position-absolute start-0 top-50"
        />
        <img src={Saturno2} alt="" className="position-absolute end-0 top-0" />
        <div className={styles.loginContainer}>
          <h1 className="text-header-color fw-bold text-center">
            Crie sua conta gratuitamente
          </h1>

          <div>
            <label htmlFor="name" className={`text-light ${styles.label}`}>
              Nome Completo
            </label>
            <div>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Digite o seu nome completo"
                className={styles.input}
              />
            </div>
          </div>

          <div>
            <label htmlFor="name" className={`text-light ${styles.label}`}>
              Telefone para contato
            </label>
            <div>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                placeholder="Digite seu número"
                className={styles.input}
              />
            </div>
          </div>

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

          <div>
            <label htmlFor="password" className={`text-light ${styles.label}`}>
              Confirme sua senha
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

          <button type="submit" className={`btn mt-4 fw-bold ${styles.button}`}>
            Criar
          </button>
        </div>

        <div className="d-flex flex-column align-items-center justify-content-center">
          <h1 className={`text-light fs-5 mt-4 ${styles.text}`}>
            Já tem uma conta?
          </h1>
          <Link
            to="/login"
            className={`text-decoration-none text-light fs-5 fw-bold mb-3 ${styles.link}`}
          >
            Fazer login
          </Link>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
