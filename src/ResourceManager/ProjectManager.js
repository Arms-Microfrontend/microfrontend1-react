import React from "react";
import "../App.css"

function ProjectManager() {
  const openAlert = () => {
    window.alert("clicked")
  }
  return (
    <div className="react-container">
      <h2>Project Manager</h2>
      <button className="project-button" onClick={openAlert}>Create project</button>
    </div>
  );
}

export default ProjectManager;
