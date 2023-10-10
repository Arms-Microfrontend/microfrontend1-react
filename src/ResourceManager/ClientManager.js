import React from "react";
import "../App.css"

function ClientManager() {
  const openAlert = () => {
    window.alert("clicked")
  }
  return (
    <div className="react-container">
      <h2>Client Manager</h2>
      <button className="project-button" onClick={openAlert}>Create client</button>
    </div>
  );
}

export default ClientManager;
