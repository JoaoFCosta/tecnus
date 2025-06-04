import React, { useState } from "react";
import { Link } from "react-router";
import Saturno1 from "../../assets/saturno1.png";
import Saturno2 from "../../assets/saturno2.png";

const CreateAccount = () => {
  const [form, setForm] = useState({
    Id_Usuario: 0,
    Nome_Usuario: "",
    Email_Usuario: "",
    Telefone_Usuario: "",
    Endereco_Usuario: "",
    Complemento_Usuario: "",
    CPF_Usuario: "",
    CEP_Usuario: "",
    Senha_Usuario: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Corpo da requisição:", form);

    fetch("http://tecnusapi.somee.com/UsuarioControler/Cadastrar%20Usuario", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Erro ao cadastrar usuário");
        return response.json();
      })
      .then((data) => {
        console.log("Usuário cadastrado com sucesso!", data);
        alert("Usuário cadastrado com sucesso!");
        setForm({
          Id_Usuario: 0,
          Nome_Usuario: "",
          Email_Usuario: "",
          Telefone_Usuario: "",
          Endereco_Usuario: "",
          Complemento_Usuario: "",
          CPF_Usuario: "",
          CEP_Usuario: "",
          Senha_Usuario: "",
        });
      })
      .catch(async (error) => {
        const errorMsg = (await error?.response?.text?.()) ?? error.message;
        console.error("Erro:", errorMsg);
        alert("Erro ao cadastrar usuário: " + errorMsg);
      });
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

        <h1 className="text-header-color fw-bold text-center">
          Crie sua conta gratuitamente
        </h1>

        <form onSubmit={handleSubmit}>
          <div className="container d-flex justify-content-center">
            <div className="row">
              {/* Coluna Esquerda */}
              <div className="col-md-6">
                <div className="createAccContainer p-5">
                  <div>
                    <label
                      htmlFor="nome"
                      className="label textLink fs-4 text-light"
                    >
                      Nome Completo
                    </label>
                    <input
                      id="nome"
                      name="Nome_Usuario"
                      type="text"
                      required
                      placeholder="Digite o seu nome completo"
                      className="input textLink bg-transparent border border-3 border-black rounded-3 mb-3 p-3"
                      value={form.Nome_Usuario}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="label textLink fs-4 text-light"
                    >
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="Email_Usuario"
                      type="email"
                      required
                      placeholder="Digite seu e-mail"
                      className="input textLink bg-transparent border border-3 border-black rounded-3 mb-3 p-3"
                      value={form.Email_Usuario}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="telefone"
                      className="label textLink fs-4 text-light"
                    >
                      Telefone
                    </label>
                    <input
                      id="telefone"
                      name="Telefone_Usuario"
                      type="text"
                      required
                      placeholder="Digite seu telefone"
                      className="input textLink bg-transparent border border-3 border-black rounded-3 mb-3 p-3"
                      value={form.Telefone_Usuario}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="endereco"
                      className="label textLink fs-4 text-light"
                    >
                      Endereço
                    </label>
                    <input
                      id="endereco"
                      name="Endereco_Usuario"
                      type="text"
                      required
                      placeholder="Digite seu endereço"
                      className="input textLink bg-transparent border border-3 border-black rounded-3 mb-3"
                      value={form.Endereco_Usuario}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Coluna Direita */}
              <div className="col-md-6">
                <div className="createAccContainer p-4">
                  <div>
                    <label
                      htmlFor="complemento"
                      className="label textLink fs-4 text-light"
                    >
                      Complemento
                    </label>
                    <input
                      id="complemento"
                      name="Complemento_Usuario"
                      type="text"
                      placeholder="Digite o complemento (se houver)"
                      className="input textLink bg-transparent border border-3 border-black rounded-3 mb-3 p-3"
                      value={form.Complemento_Usuario}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cpf"
                      className="label textLink fs-4 text-light"
                    >
                      CPF
                    </label>
                    <input
                      id="cpf"
                      name="CPF_Usuario"
                      type="text"
                      required
                      placeholder="Digite seu CPF"
                      className="input textLink bg-transparent border border-3 border-black rounded-3 mb-3 p-3"
                      value={form.CPF_Usuario}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="cep"
                      className="label textLink fs-4 text-light"
                    >
                      CEP
                    </label>
                    <input
                      id="cep"
                      name="CEP_Usuario"
                      type="text"
                      required
                      placeholder="Digite seu CEP"
                      className="input textLink bg-transparent border border-3 border-black rounded-3 mb-3 p-3"
                      value={form.CEP_Usuario}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="senha"
                      className="label textLink fs-4 text-light"
                    >
                      Senha
                    </label>
                    <input
                      id="senha"
                      name="Senha_Usuario"
                      type="password"
                      required
                      placeholder="Digite sua senha"
                      className="input textLink bg-transparent border border-3 border-black rounded-3 mb-3 p-3"
                      value={form.Senha_Usuario}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center mt-4">
            <button
              type="submit"
              className="btn textLink moreBtn w-50 text-black fw-bold"
            >
              Criar
            </button>
          </div>
        </form>
        <div className="d-flex flex-column align-items-center justify-content-center mt-4">
          <h1 className="textLink text-light fs-5">Já tem uma conta?</h1>
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
