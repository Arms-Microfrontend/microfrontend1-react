import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProjectManager from "./ResourceManager/ProjectManager";
import ClientManager from "./ResourceManager/ClientManager";
import SkillManager from "./ResourceManager/SkillManager";
import CreateClient from "./ResourceManager/CreateClient";
import "./App.css";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  return (
    <Router>
      <div className="App">
        <div class="custom-nav">
          <div class="custom-nav-inner">
            <div class="custom-flex custom-items-center custom-justify-between">
              <div class="custom-flex custom-items-center custom-justify-between custom-full-width custom-mx-20">
                <div>
                  <span class="custom-title">Resource Management</span>
                  <span
                    onClick={() => setToggleSidebar(!toggleSidebar)}
                    className="toggleSidebar"
                  >
                    {toggleSidebar ? "Hide sidebar" : "Show sidebar"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="main">
          {toggleSidebar && (
            <div className="sidebar">
              <ul>
                <li className="heading">
                  <div className="header">
                    <Link to="/project-manager">Project Manager</Link>
                  </div>
                </li>
                <li className="heading">
                  <div className="header">
                    <Link to="/skill-manager">Skill Manager</Link>
                  </div>
                </li>
                {/* <li className="heading">
                  <div className="header">
                    <span className="title">Staff Manager</span>
                  </div>
                </li> */}
                <li className="heading">
                  <div className="header">
                  <Link to="/">Client Manager</Link>
                  </div>
                </li>
              </ul>
            </div>
          )}

          <div className="main-page">
            <Routes>
              <Route path="/" element={<ClientManager />} />
              <Route path="/project-manager" element={<ProjectManager />} />
              <Route path="/skill-manager" element={<SkillManager />} />
              <Route path="/create-client" element={<CreateClient />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
