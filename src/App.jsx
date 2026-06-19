import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import { siteData } from './data/siteData';

export default function App() {
  useEffect(() => {
    if (siteData && siteData.theme) {
      const root = document.documentElement;
      root.style.setProperty('--sketch-primary', siteData.theme.primary);
      root.style.setProperty('--sketch-secondary', siteData.theme.secondary);
      root.style.setProperty('--sketch-bg', siteData.theme.bg);
      if (siteData.theme.line) {
        root.style.setProperty('--sketch-line', siteData.theme.line);
      }
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
