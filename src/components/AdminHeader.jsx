import React, { useEffect, useRef, useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { LuTv } from "react-icons/lu";
import { PiBellSimpleRinging } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { Link, useNavigate } from "react-router";
import DashLogo from "../assets/LOGOVETOBRANCO1.png";

const AdminHeader = () => {
  const [collapsed, setCollapsed] = useState(false);
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
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="top-section d-flex justify-content-center">
        <button onClick={() => setCollapsed(!collapsed)} className="toggle-btn">
          <img src={DashLogo} alt="" height={100} />
        </button>
      </div>
      <div className="icon-list d-flex align-items-start flex-column">
        <div className="d-flex flex-row gap-4 mb-5">
          <RxDashboard className="fs-1" />
          {!collapsed && (
            <Link
              to="/admin-dashboard"
              className="textLink text-decoration-none"
            >
              Dashboard
            </Link>
          )}
        </div>

        <div className="d-flex flex-row gap-4 mt-5 mb-5">
          <LuTv className="fs-1 " />
          {!collapsed && (
            <Link
              to="/admin-dashboard"
              className="textLink text-decoration-none"
            >
              Cursos
            </Link>
          )}
        </div>

        <div className="d-flex flex-row gap-4 mt-5 mb-5">
          <PiBellSimpleRinging className="fs-1" />
          {!collapsed && (
            <Link
              to="/admin-dashboard"
              className="textLink text-decoration-none"
            >
              Notificações
            </Link>
          )}
        </div>

        <div className="d-flex flex-row gap-4 mt-5 mb-5">
          <FaRegUserCircle className="fs-1" />
          {!collapsed && (
            <Link
              to="/admin-dashboard"
              className="textLink text-decoration-none"
            >
              Perfil
            </Link>
          )}
        </div>

        <div className="d-flex flex-row gap-4 mt-5">
          <RxExit className="fs-1" />
          {!collapsed && (
            <Link
              to="/admin-dashboard"
              className="textLink text-decoration-none"
            >
              Sair
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
