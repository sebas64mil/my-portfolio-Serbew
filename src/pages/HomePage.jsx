import React, { useRef, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { siteData } from '../data/siteData';
import Navbar from '../Components/ui/Navbar';
import Footer from '../Components/ui/Footer';
import SkillTree from '../Components/ui/SkillTree';
import WireframeScene from '../Components/graphics/WireframeScene';
import GridBackground from '../Components/graphics/GridBackground';
import Button from '../Components/ui/Button';
import StatCard from '../Components/ui/StatCard';
import GoalCard from '../Components/ui/GoalCard';
import EducationItem from '../Components/ui/EducationItem';
import { FaGithub, FaLinkedin, FaInstagram, FaGamepad, FaFileAlt } from 'react-icons/fa';

const GRID_COLORS = [
  { name: 'Cian', value: '#00f0ff' }
];

export default function HomePage() {
  const sceneRef = useRef(null);
  const location = useLocation();
  const [gridColor, setGridColor] = useState('#00f0ff');

  // visibility and stats animation state
  const [visible, setVisible] = useState({});
  const [statsCounts, setStatsCounts] = useState({ years: 0, projects: 0, jams: 0 });
  const [currentSection, setCurrentSection] = useState('Inicio');

  const localLinks = [
    { href: '#hero', label: 'Inicio' },
    { href: '#about', label: 'Sobre mí' },
    { href: '#skills', label: 'Herramientas' },
    { href: '#featured', label: 'Featured' },
    { href: '#stats', label: 'Estadísticas' },
    { href: '#goals', label: 'Metas' },
    { href: '#education', label: 'Educación' },
  ];

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

  // Observe sections to trigger simple reveal animations
  useEffect(() => {
    const els = document.querySelectorAll('.home-animate');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const id = e.target.id || e.target.dataset.key;
          setVisible((v) => ({ ...v, [id]: true }));
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Animate stats when stats section becomes visible
  useEffect(() => {
    if (!visible.stats) return;
    const targets = { years: 3, projects: 12, jams: 5 };
    const duration = 900; // ms
    const start = performance.now();

    function step(now) {
      const t = Math.min((now - start) / duration, 1);
      setStatsCounts({
        years: Math.floor(targets.years * t),
        projects: Math.floor(targets.projects * t),
        jams: Math.floor(targets.jams * t),
      });
      if (t < 1) requestAnimationFrame(step);
      else setStatsCounts(targets);
    }
    requestAnimationFrame(step);
  }, [visible.stats]);

  // Scroll spy to update the vertical menu and active section state
  useEffect(() => {
    const ids = ['hero', 'about', 'skills', 'featured', 'stats', 'goals', 'education'];
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) setCurrentSection(e.target.id || '');
      });
    }, { threshold: 0.6 });

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return (
    <div className="relative w-full min-h-screen" style={{ background: 'var(--sketch-bg)' }}>
      <Navbar localLinks={localLinks} />

      {/* Right-side vertical section nav */}
      <div className="hidden lg:flex flex-col items-end gap-3 fixed right-3 top-1/2 transform -translate-y-1/2 z-50">
        {localLinks.map((link) => {
          const id = (link.href || '').replace('#', '');
          const active = currentSection === id;
          return (
            <button
              key={link.href}
              onClick={() => {
                const el = document.querySelector(link.href);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                window.history.pushState(null, '', link.href);
              }}
              className={`text-right font-mono text-sm px-2 transition-colors ${active ? 'text-(--sketch-primary)' : 'text-(--sketch-text-dim) hover:text-(--sketch-primary)'}`}
            >
              <span className="block">{link.label}</span>
              <span className={`block h-0.5 bg-(--sketch-primary) mt-1 transition-all ${active ? 'w-full' : 'w-0'}`} />
            </button>
          );
        })}
      </div>

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
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
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

      {/* ========== FEATURED / CTA ========== */}
      <section id="featured" className="home-animate relative py-24 px-6 overflow-hidden" style={{ scrollMarginTop: '96px' }}>
        <GridBackground color={gridColor} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="sketch-line flex-1" />
            <h2 className="font-sketch text-3xl tracking-wider text-glow" style={{ color: 'var(--sketch-primary)' }}>Featured Project</h2>
            <div className="sketch-line flex-1" />
          </div>

          <div className="sketch-card p-6 mb-6" style={{ backdropFilter: 'blur(6px)' }}>
            <h3 className="font-sketch text-2xl" style={{ color: 'var(--sketch-primary)' }}>Featured Project</h3>
            <p className="font-mono text-sm mt-3 text-(--sketch-text-dim)">A showcase of one of my most representative projects, highlighting both technical implementation and game design decisions.</p>
            <div className="mt-4">
              <Button variant="fancy-primary" size="md" onClick={() => { window.location.href = '/projects#projects'; }}>View Projects</Button>
            </div>

            <div className="mt-6 w-full bg-black rounded-md overflow-hidden" style={{ minHeight: '320px' }}>
              {/* Video/embed placeholder */}
              <div className="w-full h-full flex items-center justify-center text-[12px] font-mono text-(--sketch-text-dim)">Video showcase placeholder — replace with &lt;iframe&gt; or &lt;video&gt;</div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== STATISTICS ========== */}
      <section id="stats" className="home-animate relative py-16 px-6 overflow-hidden" style={{ scrollMarginTop: '96px' }}>
        <GridBackground color={gridColor} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="sketch-line flex-1" />
            <h2 className="font-sketch text-2xl tracking-wider text-glow" style={{ color: 'var(--sketch-primary)' }}>Estadísticas</h2>
            <div className="sketch-line flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard value={statsCounts.years} label="Years Learning Game Development" />
            <StatCard value={statsCounts.projects} label="Projects Completed" />
            <StatCard value={statsCounts.jams} label="Game Jams Participated In" />
          </div>
        </div>
      </section>

      {/* ========== GOALS ========== */}
      <section id="goals" className="home-animate relative py-16 px-6 overflow-hidden" style={{ scrollMarginTop: '96px' }}>
        <GridBackground color={gridColor} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="sketch-line flex-1" />
            <h2 className="font-sketch text-2xl tracking-wider text-glow" style={{ color: 'var(--sketch-primary)' }}>Current Goals</h2>
            <div className="sketch-line flex-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Reach B2 English Level', desc: 'Improve fluency and technical communication.', priority: 'High' },
              { title: 'Publish Second Complete Game', desc: 'Ship a full game on itch.io with analytics.', priority: 'High' },
              { title: 'Improve Three.js Skills', desc: 'Learn advanced rendering and optimization.', priority: 'Medium' },
              { title: 'Learn Advanced Game Architecture', desc: 'Study ECS, decoupled systems and tools.', priority: 'Low' },
            ].map((g, i) => (
              <GoalCard key={i} title={g.title} desc={g.desc} priority={g.priority} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== EDUCATION & LEARNING ========== */}
      <section id="education" className="home-animate relative py-16 px-6 overflow-hidden" style={{ scrollMarginTop: '96px' }}>
        <GridBackground color={gridColor} />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="sketch-line flex-1" />
            <h2 className="font-sketch text-2xl tracking-wider text-glow" style={{ color: 'var(--sketch-primary)' }}>Education & Learning</h2>
            <div className="sketch-line flex-1" />
          </div>

          <div className="space-y-4">
            {[
              { institution: 'Universidad de Ejemplo', program: 'Licenciatura en Informática', date: '2018 - 2022', desc: 'Estudios formales en ciencias de la computación.' },
              { institution: 'Curso Three.js Avanzado', program: 'Curso Online', date: '2024', desc: 'Renderizado avanzado y optimización.' },
              { institution: 'Game Jam XYZ', program: 'Participación', date: '2023', desc: 'Prototipado rápido y teamwork.' },
            ].map((e, i) => (
              <EducationItem key={i} institution={e.institution} program={e.program} date={e.date} desc={e.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <Footer />
    </div>
  );
}
