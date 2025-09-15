import React, { useState, useEffect } from 'react';
import './style/style.css';

// Import all section components
import AboutDepartment from "./components/AboutDepartment";
import HODMessage from "./components/HODMessage";
import Vision from './components/Vision';
import Programs from './components/Programs';
import LearningResources from './components/LearningResources';
import FacultyProfile from "./components/FacultyProfile";
import ResearchPublications from "./components/ResearchPublications";
import Placements from './components/Placements';
import Projects from './components/Projects';
import Admissions from './components/Admissions';
import IQACDocuments from "./components/IQACDocuments"; 
import Achievements from './components/Achievements';
import Alumni from './components/Alumni';
import GradientSelector from "./components/GradientSelector";

function App() {
  const [bgGradient, setBgGradient] = useState("linear-gradient(90deg, #fff5d1, #f4c15f)");

  // Apply gradient to body
  useEffect(() => {
    document.body.style.backgroundImage = bgGradient;
    document.body.style.transition = "background 0.5s";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
  }, [bgGradient]);

  return (
    <div className="App" style={{ minHeight: "100vh" }}>
      {/* Header */}
      <header className="site-header">
        <h1>AIML Department — GMU</h1>
        <nav>
          <a href="about-department">About</a>
          <a href="#hod-message">HODMessage</a>
          <a href="#vision">Vision</a>
          <a href="#programs">Programs</a>
          <a href="#learning-resources">Resources</a>
          <a href="#faculty-profile">Faculty</a>
          <a href="#research-publications">Research</a>
          <a href="#placements">Placements</a>
          <a href="#projects">Projects</a>
          <a href="#admissions">Admissions</a>
          <a href="#iqac-documents">IQAC</a>
          <a href="#achievements">Achievements</a>
          <a href="#alumni">Alumni</a>
        </nav>
      </header>

      {/* Gradient Selector */}
      <div style={{ maxWidth: "1000px", margin: "20px auto" }}>
        <GradientSelector onSelect={setBgGradient} />
      </div>

      {/* Main Content */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
        <AboutDepartment />
        <HODMessage />
        <Vision />
        <Programs />
        <LearningResources />
        <FacultyProfile /> 
        <ResearchPublications /> 
        <Placements />
        <Projects />
        <Admissions />
        <IQACDocuments />
        <Achievements />
        <Alumni />
      </main>

      {/* Footer */}
      <footer style={{ textAlign: "center", padding: "20px", color: "#5b1f1f" }}>
        <p>&copy; 2025 AIML Department, GMU</p>
      </footer>
    </div>
  );
}

export default App;
