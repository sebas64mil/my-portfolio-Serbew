import React, { useState, useRef } from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import AboutSection from "./Components/About/AboutSection.jsx";
import ProjectsSection from "./Components/PortfolioCards/ProjectsSection.jsx";
import ProjectEspecific  from "./Components/PortfolioCards/ProjectEspecific.jsx";   
import SectionHabilities from "./Components/Habilities/SectionHabilities.jsx";
import SectionContacts from "./Components/Contacts/SectionContacs.jsx";
import Footer from "./Components/Footer/Footer.jsx";

import { projectsData } from "./Data/projectsData.jsx";

import FillBatteryGame from "./Game/FillBatteryGame.jsx";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const habilitiesRef = useRef(null);
  const contactRef = useRef(null);
  const specificRef = useRef(null);

  const handleSelectProject = (project) => {
    setSelectedProject(project);
    setTimeout(() => {
      specificRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  const scrollToSection = (section) => {
    switch (section) {
      case "top":
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "projects":
        projectsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "habilities":
        habilitiesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
        break;
    }
  };

  return (
    <div className="bg-slate-950 min-h-[200vh] pt-[100px]">

      <Navbar scrollToSection={scrollToSection} />

      <FillBatteryGame />

      <div ref={aboutRef}><AboutSection /></div>

      <div ref={projectsRef}>
        <ProjectsSection projects={projectsData} onSelectProject={handleSelectProject} />
      </div>

      {selectedProject && <div ref={specificRef}><ProjectEspecific {...selectedProject} /></div>}
     
      <div ref={habilitiesRef}><SectionHabilities /></div>
      
      <div ref={contactRef}><SectionContacts /></div>
      
      <Footer />
    </div>
  );
}

