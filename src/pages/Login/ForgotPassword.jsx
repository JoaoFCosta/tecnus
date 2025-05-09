import React from "react";
import { Link } from "react-router";
import Saturno1 from "../../assets/saturno1.png";
import Saturno2 from "../../assets/saturno2.png";
import { IoWarningOutline } from "react-icons/io5";

const ForgotPassword = () => {
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
        <div className="forgotPassContainer d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-header-color fw-bold text-center">
            Recupere sua <br /> senha
          </h1>

          <div>
            <label htmlFor="name" className="label text-light">
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
                className="input bg-transparent border border-3 border-black rounded-3 mb-3 p-3"
              />
            </div>
          </div>

          <div className="d-flex text-center mt-3">
            <IoWarningOutline className="warning" />
            <span className="warningText text-light fw-bold ms-2">
              Um link será enviado para o seu e-mail para que você possa
              redefinir sua senha e acessar a sua conta!
            </span>
          </div>

          <button type="submit" className="button btn mt-4 fw-bold">
            Entrar
          </button>
        </div>

        <div className="d-flex flex-column align-items-center justify-content-center mt-5">
          <h1 className="textLink text-light fs-5 mt-4">
            Lembrou sua senha? 
          </h1>
          <Link
            to="/login"
            className="textLink text-decoration-none text-light fs-5 fw-bold mb-3"
          >
            Então entre em sua conta
          </Link>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
