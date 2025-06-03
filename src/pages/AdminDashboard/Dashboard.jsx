import React from "react";
import AdminHeader from "../../components/AdminHeader";
import { Link } from "react-router";

const Dashboard = () => {
  return (
    <>
      <AdminHeader />
      <div className="w-50 d-flex justify-content-end align-items-start position-absolute top-0 end-0">
        <Link to="/" className="m-3 text-decoration-none fs-1 text-light fw-bold">
          Tecnus Saturn
        </Link>
      </div>
    </>
  );
};

export default Dashboard;
