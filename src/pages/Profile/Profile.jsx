import React, { useEffect, useState } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProfileImage from "../../assets/profilePhoto.png";
import { GoPencil } from "react-icons/go";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [editData, setEditData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    password: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed);
      setEditData({
        name: parsed.name || "",
        email: parsed.email || "",
        phone: parsed.phone || "",
        city: parsed.city || "",
        password: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    }
  }, []);

  if (!user) {
    return <div className="text-light">Nenhum usuário logado.</div>;
  }

  const handleChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Validação de senha
    if (
      editData.newPassword &&
      editData.newPassword !== editData.confirmNewPassword
    ) {
      alert("As novas senhas não coincidem!");
      return;
    }
    // Se o usuário quer trocar a senha, verifica a senha antiga
    if (editData.newPassword && editData.password !== user.password) {
      alert("Senha atual incorreta!");
      return;
    }
    const updatedUser = {
      ...user,
      name: editData.name,
      email: editData.email,
      phone: editData.phone,
      city: editData.city,
      password: editData.newPassword ? editData.newPassword : user.password,
    };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    // Dispara evento para atualizar o Header
    window.dispatchEvent(new Event("userUpdated"));
    alert("Perfil atualizado com sucesso!");
    setEditData({
      ...editData,
      password: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  };
  return (
    <>
      <Header />

      <div className="container mt-5 text-light">
        <form onSubmit={handleSave}>
          <div className="row">
            <div className="bg-gray-800 col-5 p-5 rounded-5 mb-3 d-flex flex-column align-items-center">
              <img src={ProfileImage} alt="" className="mb-5 h-50" />
              <div className="col-10 mb-3 d-flex">
                <input
                  type="text"
                  className="form-control bg-transparent border-0 textLink text-start fs-4 fw-bolder"
                  name="name"
                  value={editData.name}
                  onChange={handleChange}
                  placeholder="Nome"
                  required
                />
                <GoPencil className="fs-1" />
              </div>
              <div className="col-10 mb-3">
                <input
                  type="email"
                  className="form-control bg-transparent border-0 textLink text-start fs-5"
                  name="email"
                  value={editData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
              </div>
            </div>
            <div className="col-2"></div>
            <div className="col-5 mb-3 d-flex flex-column justify-content-center bg-gray-800 p-5 rounded-5">
              <h1 className="textLink mb-5 fw-bold">Nova Senha</h1>
              <div className="mb-3">
                <label className="form-label">
                  <strong className="textLink fs-3">Senha</strong>
                </label>
                <input
                  type="password"
                  className="form-control textLink text-start bg-gray-600 border-0"
                  name="newPassword"
                  value={editData.newPassword}
                  onChange={handleChange}
                  placeholder="Nova senha"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  <strong className="textLink fs-3">Confirmar senha</strong>
                </label>
                <input
                  type="password"
                  className="form-control textLink text-start bg-gray-600 border-0"
                  name="confirmNewPassword"
                  value={editData.confirmNewPassword}
                  onChange={handleChange}
                  placeholder="Confirme a nova senha"
                />
              </div>
            </div>
          </div>
          <div className="row bg-gray-800 p-5 rounded-5 mb-3 mt-5">
            <div className="col-5 mb-3">
              <h1 className="textLink">Cidade</h1>
              <label className="form-label">
                <strong className="textLink">Adicione a sua cidade</strong>
              </label>
              <input
                type="text"
                className="form-control textLink text-start bg-gray-600 border-0"
                name="city"
                value={editData.city}
                onChange={handleChange}
                placeholder="Cidade"
              />
            </div>
            <div className="col-2"></div>
            <div className="col-5 mb-3">
              <h1 className="textLink">Telefone</h1>
              <label className="form-label">
                <strong className="textLink">
                  Alterar meu telefone:{" "}
                  <span className="fw-normal textLink">{user.phone}</span>
                </strong>
              </label>
              <input
                type="tel"
                className="form-control textLink text-start bg-gray-600 border-0"
                name="phone"
                value={editData.phone}
                onChange={handleChange}
                placeholder="Telefone"
              />
            </div>
          </div>
          <div className="d-flex justify-content-center mt-5">
            <button
              type="submit"
              className="btn textLink p-2 px-5 moreBtn fw-bold text-black border-0 fs-3"
            >
              Salvar conta
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Profile;
