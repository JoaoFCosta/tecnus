import React, { useState } from "react";
import { Link } from "react-router";
import AdminHeader from "../../components/AdminHeader";
import AdminCourses from "../../components/AdminCourses";
import DashboardData from "../../components/DashboardData";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardData />;
      case "cursos":
        return <AdminCourses />;
      default:
        return null;
    }
  };

  return (
    <div className="d-flex">
      <AdminHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-grow-1 p-4">
        <div className="d-flex justify-content-end">
          <Link
            to="/"
            className="position-absolute m-3 text-decoration-none fs-2 text-light top-0 end-0 fw-bold"
          >
            Tecnus Saturn
          </Link>
        </div>
        <div className="dashboard-content">{renderContent()}</div>
      </div>
    </div>
  );
};

export default Dashboard;
