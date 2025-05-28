import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import Saturno1 from "../../assets/saturno1.png";
import Saturno2 from "../../assets/saturno2.png";

const CreateAccount = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }

    const user = { name, email, phone, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Conta criada com sucesso!");
    navigate("/login");
  };

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
        <div className="createAccContainer">
          <h1 className="text-header-color fw-bold text-center mb-3">
            Crie sua conta gratuitamente
          </h1>

          <div>
            <label htmlFor="name" className="label textLink fs-4 text-light">
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
                className="input textLink bg-transparent border border-3 border-black rounded-3 mb-3 p-3"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="label textLink fs-4 text-light">
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
                className="input textLink bg-transparent border border-3 border-black rounded-3 mb-3 p-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="label textLink fs-4 text-light">
              Telefone para Contato
            </label>
            <div>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                required
                placeholder="Digite o seu telefone"
                className="input textLink bg-transparent border border-3 border-black rounded-3 mb-3 p-3"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="label textLink fs-4 text-light">
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
                className="input textLink bg-transparent border border-3 border-black rounded-3 mb-3 p-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="label textLink fs-4 text-light">
              Confirmar Senha
            </label>
            <div>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="password"
                required
                placeholder="Confirme a sua senha"
                className="input textLink bg-transparent border border-3 border-black rounded-3 mb-3 p-3"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            type="button"
            className="btn textLink moreBtn w-75 text-black mt-4 fw-bold"
            onClick={handleCreateAccount}
          >
            Criar
          </button>
        </div>

        <div className="d-flex flex-column align-items-center justify-content-center">
          <h1 className="textLink text-light fs-5 mt-4">
            Já tem uma conta?
          </h1>
          <Link
            to="/login"
            className="textLink text-decoration-none text-light fs-5 fw-bold mb-3"
          >
            Fazer login
          </Link>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
