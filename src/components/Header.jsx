import React, { useEffect, useRef, useState } from "react";
import Profile from "../assets/User.png";
import { Link, useNavigate } from "react-router";

import { FaRegUserCircle } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { LuBellRing } from "react-icons/lu";
import { RxExit } from "react-icons/rx";
import { RxDashboard } from "react-icons/rx";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const menuRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const updateUser = () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        setIsLoggedIn(true);
        setUserName(user.name);
      } else {
        setIsLoggedIn(false);
        setUserName("");
      }
    };

    updateUser();
    window.addEventListener("userUpdated", updateUser);
    return () => window.removeEventListener("userUpdated", updateUser);
  }, []);

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

  const notifications = [
    "Bem-vindo ao Tecnus!",
    "Novo curso disponível.",
    "Lucas Costa respondeu seu comentário.",
  ];

  return (
    <header className="header textLink navbar fixed-top top-0 start-0 end-0 z-3 text-light p-3">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Logo */}
        <Link className="fs-3 fw-bold text-decoration-none text-white" to="/">
          Tecnus Saturn
        </Link>

        {/* Links centralizados */}
        <div className="d-none d-lg-flex flex-grow-1 justify-content-center gap-4 fs-5">
          {isLoggedIn && (
            <Link
              to="/courses"
              className="text-decoration-none text-white textLink"
            >
              Cursos
            </Link>
          )}
          <Link
            to="/about"
            className="text-decoration-none text-white textLink"
          >
            Sobre nós
          </Link>
        </div>

        {/* Perfil */}
        <div
          className="d-flex align-items-center position-relative"
          ref={menuRef}
        >
          <span className="text-white me-2">
            {isLoggedIn ? `Olá, ${userName.split(" ")[0]}!` : "Olá, visitante"}
          </span>
          <img
            src={Profile}
            alt="Perfil"
            onClick={handleProfileClick}
            className="rounded-circle cursor-pointer"
            width={40}
            height={40}
          />
          {isLoggedIn && showMenu && (
            <div className="position-absolute d-flex flex-column top-100 end-0 mt-2 bg-gray-700 text-light rounded-4 py-4 px-3 shadow p-2 z-3">
              <span className="textLink text-start text-gray-400 mb-3">
                Conta
              </span>
              <Link
                to="/profile"
                className="dropdown-item textLink bg-gray-800 p-2 px-4 rounded-4"
              >
                <FaRegUserCircle className="fs-4 mx-2 me-4" />
                Minha Conta
              </Link>

              <Link
                to="/my-courses"
                className="dropdown-item textLink bg-gray-800 p-2 px-4 rounded-4 mt-2 mb-2"
              >
                <MdOndemandVideo className="fs-4 mx-2 me-4" />
                Meus Cursos
              </Link>
              {userName === "admin" ? (
                <Link
                  to="/admin-dashboard"
                  className="dropdown-item textLink bg-gray-800 p-2 px-4 rounded-4 mb-2"
                >
                  <RxDashboard className="fs-4 me-4"/>
                  Dashboard
                </Link>) : <></>
              }
              <span className="textLink text-gray-400 text-start mt-3">
                Notificações
              </span>
              <br />
              <button
                type="button"
                className="dropdown-item textLink bg-gray-800 p-2 px-4 rounded-4"
                onClick={() => setShowNotifications((prev) => !prev)}
              >
                <LuBellRing className="fs-4 mx-2 me-4" />
                Notificações
              </button>

              {showNotifications && (
                <div className="bg-gray-900 rounded-4 p-3 mt-2">
                  <span className="fw-bold textLink">Notificações</span>
                  <ul className="list-unstyled mt-2 mb-0">
                    {notifications.length === 0 ? (
                      <li className="text-gray-400">Nenhuma notificação</li>
                    ) : (
                      notifications.map((n, i) => (
                        <li key={i} className="textLink mb-2">
                          {n}
                        </li>
                      ))
                    )}
                  </ul>
                </div>
              )}

              <hr />

              <button
                className="dropdown-item textLink bg-gray-800 p-2 px-4 rounded-4 mt-2"
                onClick={handleLogout}
              >
                <RxExit className="fs-4 mx-2 me-4" />
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
