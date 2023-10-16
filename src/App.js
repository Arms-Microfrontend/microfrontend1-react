import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectManager from "./ResourceManager/ProjectManager";
import ClientManager from "./ResourceManager/ClientManager";
import SkillManager from "./ResourceManager/SkillManager";
import CreateClient from "./ResourceManager/CreateClient";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/project-manager" element={<ProjectManager />} />
        <Route path="/client-manager" element={<ClientManager />} />
        <Route path="/skill-manager" element={<SkillManager />} />
        <Route path="/create-client" element={<CreateClient />} />
      </Routes>
    </Router>
  );
}

export default App;
