import React from "react";
import { useNavigate } from "react-router-dom";
import ClientTable from "./ClientTable";
import "../App.css";

function ClientManager() {
  const navigate = useNavigate();
  const existingData = JSON.parse(localStorage.getItem("clientData")) || [];

  const openCreateClient = () => {
    navigate("/create-client");
  };

  return (
    <>
      <div className="react-container">
        <h2>Client Manager</h2>
        <button className="project-button" onClick={openCreateClient}>
          Create client
        </button>
      </div>
      <ClientTable clientData={existingData} />
    </>
  );
}

export default ClientManager;
