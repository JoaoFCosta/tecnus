import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import Saturno1 from "../../assets/saturno1.png";
import Saturno2 from "../../assets/saturno2.png";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();

  const API_LOGIN_URL = "https://localhost:7289/api/Usuario/login";

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setResponseMessage("Enviando credenciais...");
    setIsSuccess(false);

    try {
      const response = await fetch(API_LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok) {
        if (responseData.token) {
          localStorage.setItem("authToken", responseData.token);

          // AQUI ESTÁ A MUDANÇA: Armazene o nome diretamente da resposta
          if (responseData.username) {
            // Verifique se a propriedade 'username' existe
            localStorage.setItem("loggedInUsername", responseData.username);
          } else {
            // Caso a API não retorne o username por algum motivo
            localStorage.removeItem("loggedInUsername");
          }

          setResponseMessage("Login bem-sucedido! Redirecionando...");
          setIsSuccess(true);
          navigate("/");
        } else {
          setResponseMessage(
            "Login bem-sucedido, mas nenhum token foi retornado pela API."
          );
          setIsSuccess(false);
        }
      } else {
        setResponseMessage(
          "Erro (" +
            response.status +
            "): " +
            JSON.stringify(responseData, null, 2)
        );
        setIsSuccess(false);
        console.error("Erro no login:", responseData);
      }
    } catch (error) {
      setResponseMessage("Erro na conexão ou na requisição: " + error.message);
      setIsSuccess(false);
      console.error("Erro na requisição:", error);
    }
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
          <form onSubmit={handleLogin}>
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
                  value={formData.email}
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
                  name="password"
                  type="password"
                  autoComplete="password"
                  required
                  placeholder="Digite a sua senha"
                  className="input textLink bg-transparent border border-3 border-black rounded-3 mb-3 p-3"
                  value={formData.password}
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
