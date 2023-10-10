import React from "react";
import "../App.css"

function SkillManager() {
  const openAlert = () => {
    window.alert("clicked")
  }
  return (
    <div className="react-container">
      <h2>Skill Manager</h2>
      <button className="project-button" onClick={openAlert}>Create skill</button>
    </div>
  );
}

export default SkillManager;
