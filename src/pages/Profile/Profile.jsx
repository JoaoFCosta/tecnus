import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileImage from "../../assets/profilePhoto.png";
import { GoPencil } from "react-icons/go";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();

  // --- Estado ÚNICO para todos os dados do formulário ---
  const [formData, setFormData] = useState({
    // Dados do Perfil Principal
    nomeCompleto: "",
    email: "", // Para exibição no perfil, e também será o novo email para alteração
    telefone: "",

    // Dados de Alterar Senha
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",

    // Dados de Alterar Email (o 'email' acima já é o novo email)
    currentPasswordForEmail: "", // Senha para confirmar alteração de email
  });

  const [isProfileEditing, setIsProfileEditing] = useState(false); // Modo de edição do perfil principal

  // --- Estados para mensagens e loading ---
  const [generalMessage, setGeneralMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Um único loading para todas as operações

  // --- URLs da API ---
  const API_PROFILE_URL = "https://localhost:7289/api/Usuario/profile";
  const API_CHANGE_PASSWORD_URL =
    "https://localhost:7289/api/Usuario/change-password";
  const API_CHANGE_EMAIL_URL =
    "https://localhost:7289/api/Usuario/change-email";

  // --- Efeito para carregar os dados do perfil ao montar o componente ---
  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        setIsLoading(true); // Começa a carregar
        const response = await fetch(API_PROFILE_URL, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          setFormData((prev) => ({
            ...prev,
            nomeCompleto: data.nomeCompleto || "",
            email: data.email || "", // O email atual do usuário
            telefone: data.telefone || "",
          }));
          setGeneralMessage("Perfil carregado.");
          setIsSuccess(true);
        } else if (response.status === 401) {
          localStorage.removeItem("authToken");
          localStorage.removeItem("loggedInUsername");
          navigate("/login");
          setGeneralMessage("Sua sessão expirou. Faça login novamente.");
          setIsSuccess(false);
        } else {
          const errorData = await response.json();
          setGeneralMessage(
            "Erro ao carregar perfil: " +
              (errorData.message || "Erro desconhecido")
          );
          setIsSuccess(false);
        }
      } catch (error) {
        setGeneralMessage("Erro de conexão: " + error.message);
        setIsSuccess(false);
      } finally {
        setIsLoading(false); // Termina de carregar
      }
    };

    fetchUserProfile();
  }, [navigate]);

  // --- Handler único para mudanças nos inputs ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // --- O ÚNICO HANDLESUBMIT ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setGeneralMessage("Salvando alterações...");
    setIsSuccess(false);
    setIsLoading(true);

    const token = localStorage.getItem("authToken");
    if (!token) {
      setGeneralMessage("Token de autenticação não encontrado. Faça login.");
      setIsSuccess(false);
      setIsLoading(false);
      navigate("/login");
      return;
    }

    let profileUpdated = false;
    let passwordUpdated = false;
    let emailUpdated = false;

    try {
      // 1. Tentar SALVAR DADOS DO PERFIL (Nome, Telefone)
      if (isProfileEditing) {
        // Só envia se estiver no modo de edição do perfil
        const profileResponse = await fetch(API_PROFILE_URL, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            NomeCompleto: formData.nomeCompleto,
            Telefone: formData.telefone,
          }),
        });

        if (profileResponse.ok) {
          profileUpdated = true;
          setGeneralMessage("Perfil atualizado!");
          setIsSuccess(true);
          // Atualiza o username no localStorage se o nome completo mudou
          localStorage.setItem("loggedInUsername", formData.nomeCompleto);
          window.dispatchEvent(
            new CustomEvent("userUpdated", {
              detail: { username: formData.nomeCompleto },
            })
          );
          setIsProfileEditing(false); // Sai do modo de edição do perfil
        } else {
          const errorData = await profileResponse.json();
          setGeneralMessage(
            "Erro ao atualizar perfil: " +
              (errorData.message || JSON.stringify(errorData))
          );
          setIsSuccess(false);
          setIsLoading(false);
          return; // Para a execução se o perfil não puder ser salvo
        }
      }

      // 2. Tentar ALTERAR SENHA (se os campos estiverem preenchidos)
      if (
        formData.currentPassword &&
        formData.newPassword &&
        formData.confirmNewPassword
      ) {
        if (formData.newPassword !== formData.confirmNewPassword) {
          setGeneralMessage("As novas senhas não coincidem!");
          setIsSuccess(false);
          setIsLoading(false);
          return;
        }

        const passwordResponse = await fetch(API_CHANGE_PASSWORD_URL, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            currentPassword: formData.currentPassword,
            newPassword: formData.newPassword,
          }),
        });

        if (passwordResponse.ok) {
          passwordUpdated = true;
          setGeneralMessage((prev) => prev + " Senha alterada com sucesso!");
          setIsSuccess(true);
          // Limpa os campos da senha após o sucesso
          setFormData((prev) => ({
            ...prev,
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: "",
          }));
        } else {
          const errorData = await passwordResponse.json();
          setGeneralMessage(
            "Erro ao alterar senha: " +
              (errorData.message || JSON.stringify(errorData))
          );
          setIsSuccess(false);
          setIsLoading(false);
          return;
        }
      }

      // 3. Tentar ALTERAR EMAIL (se o campo de novo email e senha estiverem preenchidos e diferentes do atual)
      if (
        formData.email &&
        formData.currentPasswordForEmail &&
        formData.email !== formData.prevEmail
      ) {
        // Adicionei 'prevEmail' ao formData se vc quiser comparar
        const emailResponse = await fetch(API_CHANGE_EMAIL_URL, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            newEmail: formData.email,
            currentPassword: formData.currentPasswordForEmail,
          }),
        });

        if (emailResponse.ok) {
          emailUpdated = true;
          setGeneralMessage(
            (prev) =>
              prev + " Email alterado com sucesso! Faça login novamente."
          );
          setIsSuccess(true);
          // Após alterar o email, o token antigo é inválido. Redirecionar para login.
          localStorage.removeItem("authToken");
          localStorage.removeItem("loggedInUsername");
          setTimeout(() => navigate("/login"), 3000);
        } else {
          const errorData = await emailResponse.json();
          setGeneralMessage(
            "Erro ao alterar email: " +
              (errorData.message || JSON.stringify(errorData))
          );
          setIsSuccess(false);
          setIsLoading(false);
          return;
        }
      }

      // Mensagem final se nada específico foi atualizado mas o formulário foi submetido
      if (!profileUpdated && !passwordUpdated && !emailUpdated) {
        setGeneralMessage("Nenhuma alteração foi detectada para salvar.");
        setIsSuccess(false);
      }
    } catch (error) {
      setGeneralMessage("Erro de conexão geral: " + error.message);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  // --- Renderização Condicional ---
  if (isLoading && generalMessage === "Salvando alterações...") {
    // Ajusta para não mostrar "Carregando perfil..." durante o save
    return (
      <div className="text-light text-center mt-5">Carregando perfil...</div>
    );
  }
  // Se estiver carregando o perfil inicialmente, exibe a mensagem de carregamento.
  if (
    isLoading &&
    formData.nomeCompleto === "" &&
    generalMessage === "Perfil carregado."
  ) {
    return (
      <div className="text-light text-center mt-5">Carregando perfil...</div>
    );
  }

  return (
    <>
      <Header />

      <div className="container mt-5 text-light">
        {/* Formulário de Perfil Principal */}
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="bg-gray-800 col-5 p-5 rounded-5 mb-3 d-flex flex-column align-items-center">
              <h1 className="textLink mb-5">Perfil</h1>
              <div className="col-10 mb-3 d-flex align-items-center">
                <input
                  type="text"
                  className="form-control bg-transparent border-0 textLink text-start fs-4 mt-5 fw-bolder h-50"
                  name="nomeCompleto"
                  value={formData.nomeCompleto}
                  onChange={handleChange}
                  placeholder="Nome Completo"
                />
              </div>
              <div className="col-10 mb-3">
                <input
                  className="form-control bg-transparent border-0 textLink text-start fs-5 mt-2 h-75"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="E-mail"
                />
              </div>
            </div>

            <div className="col-2"></div>

            <div className="bg-gray-800 col-5 p-5 rounded-5 mb-3 d-flex flex-column align-items-center">
              <h1 className="textLink mb-5">Alterar Senha</h1>
              <div className="col-10 mb-3 d-flex align-items-center">
                <input
                  className="form-control bg-transparent border-0 textLink text-start fs-4 mt-5 fw-bolder h-50"
                  type="password"
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  placeholder="Senha"
                />
              </div>
              <div className="col-10 mb-3">
                <input
                  className="form-control bg-transparent border-0 textLink text-start mt-2 fs-5 h-75"
                  type="password"
                  name="confirmarSenha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  placeholder="Confirmar Senha"
                />
              </div>
            </div>

            <div className="col-12 bg-gray-800 p-5 rounded-5 mb-3 d-flex flex-column align-items-center">
              <h1 className="textLink mb-4">Telefone</h1>

              <input
                className="form-control bg-transparent border-0 textLink text-start fs-4 mt-2 fw-bolder h-50"
                type="text"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="Telefone"
              />
            </div>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <button type="submit" className="btn moreBtn text-black fs-3">
              Salvar
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Profile;
