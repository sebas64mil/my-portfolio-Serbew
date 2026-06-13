import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { siteData } from '../data/siteData';
import Navbar from '../Components/ui/Navbar';
import Footer from '../Components/ui/Footer';
import SkillTree from '../Components/ui/SkillTree';
import WireframeScene from '../Components/graphics/WireframeScene';
import GridBackground from '../Components/graphics/GridBackground';
import Button from '../Components/ui/Button';
import { FaGithub, FaLinkedin, FaInstagram, FaGamepad, FaFileAlt } from 'react-icons/fa';

const GRID_COLORS = [
  { name: 'Cian', value: '#00f0ff' }
];

export default function HomePage() {
  const sceneRef = useRef(null);
  const location = useLocation();
  const [gridColor, setGridColor] = useState('#00f0ff');

  const handleExportScene = () => {
    if (sceneRef.current) {
      sceneRef.current.exportScene();
    }
  };

  // Gestión de scroll suave cuando se navega a una sección (incluyendo navegación cruzada)
  useEffect(() => {
    if (location.hash) {
      const timeout = setTimeout(() => {
        const el = document.querySelector(location.hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [location.hash, location.pathname]);

  return (
    <div className="relative w-full min-h-screen" style={{ background: 'var(--sketch-bg)' }}>
      <Navbar />

      {/* ========== HERO ========== */}
      <section
        id="hero"
        className="relative w-full overflow-hidden"
        style={{ height: '100vh' }}
      >
        {/* Fondo 3D */}
        <WireframeScene ref={sceneRef} />

        {/* Overlay de contenido */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 pointer-events-none select-none">
          {/* Contenedor principal de info del Hero */}
          <div
            className="sketch-card max-w-2xl w-full p-8 md:p-12 flex flex-col items-center justify-center text-center pointer-events-auto relative"
            style={{
              background: 'rgba(5, 5, 8, 0.8)',
              backdropFilter: 'blur(10px)',
              border: '2px dashed var(--sketch-border-solid)',
              boxShadow: 'var(--sketch-glow), inset 0 0 20px rgba(0, 240, 255, 0.03)',
            }}
          >
            {/* Pequeñas cruces decorativas (+) en las cuatro esquinas (dibujo técnico) */}
            <span className="absolute top-2 left-3 font-mono text-xs select-none" style={{ color: 'var(--sketch-border-solid)' }}>+</span>
            <span className="absolute top-2 right-3 font-mono text-xs select-none" style={{ color: 'var(--sketch-border-solid)' }}>+</span>
            <span className="absolute bottom-2 left-3 font-mono text-xs select-none" style={{ color: 'var(--sketch-border-solid)' }}>+</span>
            <span className="absolute bottom-2 right-3 font-mono text-xs select-none" style={{ color: 'var(--sketch-border-solid)' }}>+</span>

            {/* Badge */}
            <div
              className="border-sketch-subtle px-4 py-1.5 mb-6"
              style={{
                borderRadius: '9999px',
                background: 'rgba(0, 240, 255, 0.05)',
              }}
            >
              <span
                className="font-mono text-[10px] uppercase tracking-[0.2em]"
                style={{ color: 'var(--sketch-primary)' }}
              >
                Portafolio 2026
              </span>
            </div>

            {/* Slogan */}
            <h1
              className="font-sketch text-4xl md:text-6xl text-center text-glow neon-flicker leading-tight"
              style={{ color: 'var(--sketch-primary)' }}
            >
              {siteData.slogan}
            </h1>

            {/* Descripción */}
            <p
              className="font-mono text-sm md:text-base mt-6 text-center max-w-md"
              style={{ color: 'var(--sketch-text-dim)' }}
            >
              {siteData.heroDescription}
            </p>

            {/* Social buttons */}
            <div className="mt-6 flex items-center gap-3">
              <Button variant="fancy-primary" size="sm" onClick={() => {}} aria-label="GitHub">
                <>
                  <FaGithub /> <span className="ml-2">GitHub</span>
                </>
              </Button>

              <Button variant="fancy-primary" size="sm" onClick={() => {}} aria-label="LinkedIn">
                <>
                  <FaLinkedin /> <span className="ml-2">LinkedIn</span>
                </>
              </Button>

              <Button variant="fancy-primary" size="sm" onClick={() => {}} aria-label="Instagram">
                <>
                  <FaInstagram /> <span className="ml-2">Instagram</span>
                </>
              </Button>

              <Button variant="fancy-primary" size="sm" onClick={() => {}} aria-label="Itch.io">
                <>
                  <FaGamepad /> <span className="ml-2">Itch.io</span>
                </>
              </Button>

              <Button variant="fancy-primary" size="sm" onClick={() => {}} aria-label="CV">
                <>
                  <FaFileAlt /> <span className="ml-2">CV</span>
                </>
              </Button>
            </div>
          </div>

          {/* Flecha indicadora */}
          <div className="mt-12 flex flex-col items-center gap-2 pointer-events-auto">
            <span
              className="font-mono text-[10px] uppercase tracking-widest"
              style={{ color: 'var(--sketch-text-dim)' }}
            >
              Scroll
            </span>
            <div
              className="w-px h-10"
              style={{
                background: 'linear-gradient(to bottom, var(--sketch-primary), transparent)',
              }}
            />
          </div>
        </div>
      </section>

      {/* ========== ABOUT ========== */}
      <section id="about" className="relative py-24 px-6 overflow-hidden">
        {/* Fondo de cuadrícula técnica con coordenadas */}
        <GridBackground color={gridColor} />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Título de sección */}
          <div className="flex items-center gap-4 mb-16">
            <div className="sketch-line flex-1" />
            <h2
              className="font-sketch text-2xl tracking-wider text-glow"
              style={{ color: 'var(--sketch-primary)' }}
            >
              Sobre mí
            </h2>
            <div className="sketch-line flex-1" />
          </div>

          {/* Contenido en dos columnas */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Columna izquierda: Espacio para foto (landscape) */}
            <div className="w-full md:w-1/2 sketch-card p-2 flex items-center justify-center" style={{ minHeight: '350px' }}>
              <div className="w-full h-full rounded-md flex items-center justify-center text-center" style={{
                background: 'linear-gradient(135deg, rgba(0,18,30,0.6), rgba(0,36,54,0.4))',
                border: '1px dashed var(--sketch-border-solid)',
                color: 'var(--sketch-text-dim)'
              }}>
                <div>
                  <div className="font-mono text-sm mb-2">Tu foto aquí</div>
                  <div className="text-[10px] font-mono" style={{ opacity: 0.7 }}>Sube tu imagen en /src/assets o reemplázala aquí</div>
                </div>
              </div>
            </div>

            {/* Columna derecha: Texto */}
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <h3
                className="font-sketch text-4xl text-glow neon-flicker"
                style={{ color: 'var(--sketch-primary)' }}
              >
                {siteData.aboutTitle}
              </h3>
              <div className="sketch-line w-20" />
              <p
                className="font-mono text-sm leading-relaxed"
                style={{ color: 'var(--sketch-text-dim)' }}
              >
                {siteData.aboutDescription}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SKILLS ========== */}
      <section id="skills" className="relative py-24 px-6 overflow-hidden">
        {/* Fondo de cuadrícula técnica con coordenadas */}
        <GridBackground color={gridColor} />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Título de sección */}
          <div className="flex items-center gap-4 mb-16">
            <div className="sketch-line flex-1" />
            <h2
              className="font-sketch text-2xl tracking-wider text-glow"
              style={{ color: 'var(--sketch-primary)' }}
            >
              Herramientas
            </h2>
            <div className="sketch-line flex-1" />
          </div>

          <SkillTree />
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <Footer />
    </div>
  );
}
