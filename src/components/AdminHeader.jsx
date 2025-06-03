import React, { useState } from "react";
import { RxDashboard, RxExit } from "react-icons/rx";
import { LuTv } from "react-icons/lu";
import { Link, useNavigate } from "react-router";
import DashLogo from "../assets/LOGOVETOBRANCO1.png";

const AdminHeader = ({ setActiveTab }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserName("");
    navigate("/login");
  };

  const notifications = [
    "Bem-vindo ao Tecnus!",
    "Novo curso disponível.",
    "Lucas Costa respondeu seu comentário.",
  ];

  return (
    <div className={`sidebar z-3 ${collapsed ? "collapsed" : ""}`}>
      <div className="top-section d-flex justify-content-center">
        <button onClick={() => setCollapsed(!collapsed)} className="toggle-btn">
          <img src={DashLogo} alt="" height={100} />
        </button>
      </div>
      <div className="icon-list d-flex align-items-start flex-column">
        <div
          className="d-flex flex-row gap-4 mb-5"
          role="button"
          onClick={() => setActiveTab("dashboard")}
        >
          <RxDashboard className="fs-1" />
          {!collapsed && (
            <span className="textLink text-decoration-none">Dashboard</span>
          )}
        </div>
        <div
          className="d-flex flex-row gap-4 mt-5 mb-5"
          role="button"
          onClick={() => setActiveTab("cursos")}
        >
          <LuTv className="fs-1" />
          {!collapsed && (
            <span className="textLink text-decoration-none">Cursos</span>
          )}
        </div>

        <div className="icon-lisgt d-flex align-items-center flex-column">
          <div className="d-flex flex-row gap-4 mb-5 mt-5" role="button" onClick={() => navigate("/")}>
            <RxExit className="fs-1" />
            {!collapsed && (
              <span className="textLink">Sair</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
