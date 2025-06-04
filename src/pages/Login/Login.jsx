import React, { useState } from "react";
import { Link } from "react-router";
import Saturno1 from "../../assets/saturno1.png";
import Saturno2 from "../../assets/saturno2.png";

const Login = () => {
  const [form, setForm] = useState({
    Email_Usuario: "",
    Senha_Usuario: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Corpo da requisição:", form);

    fetch("http://tecnusapi.somee.com/UsuarioControler/Login", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText || "Erro ao fazer login");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Login realizado com sucesso!", data);
        alert("Login realizado com sucesso!");
        setForm({
          Email_Usuario: "",
          Senha_Usuario: "",
        });
        // Aqui você pode salvar dados no localStorage ou atualizar estado global
      })
      .catch((error) => {
        console.error("Erro:", error.message);
        alert("Erro ao fazer login: " + error.message);
      });
  };

  return (
    <>
      <header className="navbar navbar-expand-lg text-light p-3 d-flex position-fixed top-0">
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
        <img
          src={Saturno1}
          alt=""
          className="position-absolute start-0 top-50"
        />
        <img src={Saturno2} alt="" className="position-absolute end-0 top-0" />
        <div className="loginContainer d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-header-color fw-bold">Entre na sua conta</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="label textLink fs-4 text-light">
                E-mail
              </label>
              <div>
                <input
                  id="email"
                  name="Email_Usuario"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="Digite o seu e-mail"
                  className="input textLink bg-transparent border border-3 border-black rounded-3 mb-3 p-3"
                  value={form.Email_Usuario}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="label textLink fs-4 text-light"
              >
                Senha
              </label>
              <div>
                <input
                  id="password"
                  name="Senha_Usuario"
                  type="password"
                  autoComplete="password"
                  required
                  placeholder="Digite a sua senha"
                  className="input textLink bg-transparent border border-3 border-black rounded-3 mb-3 p-3"
                  value={form.Senha_Usuario}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <input
                className="checkbox bg-transparent form-check-input text-light"
                type="checkbox"
                value=""
                id="checkDefault"
              />
              <label
                className="checkboxLabel textLink ms-1 text-light ms-2 me-5"
                htmlFor="checkDefault"
              >
                Lembrar de mim
              </label>
              <Link
                to="/forgot-password"
                className="textLink text-decoration-none text-light text-end ms-5"
              >
                Esqueci minha senha
              </Link>
            </div>

            <div className="d-flex justify-content-center align-items-center">
              <button
                type="submit"
                className="btn textLink moreBtn w-75 text-black mt-4 fw-bold"
              >
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container d-flex flex-column justify-content-center align-items-center mt-4">
        <h1 className="textLink fs-5 text-light">Ainda não tem uma conta? </h1>

        <Link
          to="/create-account"
          className="textLink fs-5 fw-bold text-decoration-none text-light"
        >
          Faça seu cadastro gratuito
        </Link>
      </div>
    </>
  );
};

export default Login;
