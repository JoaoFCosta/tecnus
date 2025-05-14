import React, { useEffect, useRef, useState } from "react";
import Profile from "../assets/User.png";
import { Link, useNavigate } from "react-router"; // Corrigido: useRouter -> useNavigate

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      setUserName(user.name);
    }
  }, []);

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProfileClick = () => {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setShowMenu((prev) => !prev);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserName("");
    setShowMenu(false);
    navigate("/login");
  };

  return (
    <header className="navbar text-light p-3 d-flex header">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <Link
          className="my-3 mx-3 fs-3 fw-bold text-decoration-none text-white"
          to="/"
        >
          Tecnus Saturn
        </Link>

        <div className="d-flex align-items-center gap-4 fs-5">
          {isLoggedIn && (
            <Link to="/courses" className="text-decoration-none text-white textLink">
              Cursos
            </Link>
          )}
          <Link to="/about" className="text-decoration-none text-white textLink">
            Sobre nós
          </Link>
        </div>

        <div className="position-relative" ref={menuRef}>
          <div
            className="d-flex align-items-center fs-5 cursor-pointer"
            onClick={handleProfileClick}
            style={{ cursor: "pointer" }}
          >
            <span className="text-white me-2">
              {isLoggedIn ? `Olá, ${userName.split(" ")[0]}!` : "Olá, visitante"}
            </span>
            <img src={Profile} alt="Perfil" className="rounded-circle" width={40} height={40} />
          </div>

          {isLoggedIn && showMenu && (
            <div
              className="position-absolute end-0 mt-2 bg-white text-dark rounded shadow p-2"
              style={{ zIndex: 1000 }}
            >
              <Link to="/profile" className="dropdown-item text-dark">
                Perfil
              </Link>
              <button className="dropdown-item text-danger" onClick={handleLogout}>
                Sair
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
