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

/*  imagenes    */

import profilePic from '../assets/Images/FotoPerfil.png';

const GRID_COLORS = [
  { name: 'Color Primario', value: siteData.theme.primary }
];

const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  'Itch.io': FaGamepad,
  CV: FaFileAlt,
};

// Arriba del componente (antes del return)
const youtubeUrl = "https://youtu.be/7kKMODi9Vtg";

// Extraer automáticamente el ID del video
const videoId = youtubeUrl.match(
  /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/,
)?.[1];

export default function HomePage() {
  const sceneRef = useRef(null);
  const location = useLocation();
  const [gridColor, setGridColor] = useState(siteData.theme.primary);

  // visibility and stats animation state
  const [visible, setVisible] = useState({});
  const [statsCounts, setStatsCounts] = useState({ years: 0, projects: 0, jams: 0 });
  const [currentSection, setCurrentSection] = useState('Inicio');

  const localLinks = [
    { href: '#hero', label: 'Inicio' },
    { href: '#about', label: 'Sobre mí' },
    { href: '#skills', label: 'Herramientas' },
    { href: '#Proyectos', label: 'Proyectos' },
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
    const targets = { years: 2, projects: 4, jams: 6 };
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
    const ids = ['hero', 'about', 'skills', 'Proyectos', 'stats', 'goals', 'education'];
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
  {siteData.socialLinks.map((social) => {
    const Icon = socialIcons[social.label];

    return (
      <Button
        key={social.label}
        variant="fancy-primary"
        size="sm"
        onClick={() => window.open(social.url, '_blank')}
        aria-label={social.label}
      >
        <>
          {Icon && <Icon />}
          <span className="ml-2">{social.label}</span>
        </>
      </Button>
    );
  })}
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
{/* Columna izquierda: Foto */}
<div
  className="w-full md:w-1/2 sketch-card p-2"
  style={{ minHeight: '350px' }}
>
  <div
    className="relative w-full h-full overflow-hidden rounded-md"
    style={{
      background:
        'linear-gradient(135deg, rgba(0,18,30,0.6), rgba(0,36,54,0.4))',
      border: '1px dashed var(--sketch-border-solid)',
    }}
  >

    <img
      src={profilePic}
      alt="Serbew"
      className="w-full h-full object-cover rounded-md"
      draggable={false}
    />

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
                {siteData.aboutDescription.map((seg, i) => {
                  if (!seg.bold) return <span key={i}>{seg.text}</span>;
                  const colorMap = {
                    primary:   { color: 'var(--sketch-primary)',   textShadow: '0 0 8px rgba(0,240,255,0.5)' },
                    secondary: { color: 'var(--sketch-secondary)', textShadow: '0 0 8px rgba(217,76,255,0.5)' },
                    text:      { color: 'var(--sketch-text)' },
                  };
                  return (
                    <strong key={i} style={colorMap[seg.color] || colorMap.text}>
                      {seg.text}
                    </strong>
                  );
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== SKILLS ========== */}
      <section id="skills" className="relative py-6 px-6 overflow-hidden">
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
<section
  id="Proyectos"
  className="home-animate relative py-6 px-6 overflow-hidden"
  style={{ scrollMarginTop: '96px' }}
>
  <GridBackground color={gridColor} />

  <div className="max-w-6xl mx-auto relative z-10">

    <div className="flex items-center gap-4 mb-6">
      <div className="sketch-line flex-1" />

      <h2
        className="font-sketch text-3xl tracking-wider text-glow"
        style={{ color: 'var(--sketch-primary)' }}
      >
        Proyectos y Experimentos
      </h2>

      <div className="sketch-line flex-1" />
    </div>


    <div
      className="sketch-card p-6 mb-6"
      style={{ backdropFilter: 'blur(6px)' }}
    >

      <h3
        className="font-sketch text-2xl"
        style={{ color: 'var(--sketch-primary)' }}
      >
        Proyectos y Experiencias
      </h3>

      <p className="font-mono text-sm mt-3 text-(--sketch-text-dim)">
        Cada proyecto representa una oportunidad para aprender,
        experimentar y transformar ideas en experiencias interactivas.
        Desde sistemas de videojuegos y herramientas de desarrollo hasta
        aplicaciones web y efectos visuales, aquí encontrarás una muestra
        de mi crecimiento, creatividad y pasión por construir soluciones
        digitales.
      </p>


      <div className="mt-4">
        <Button
          variant="fancy-primary"
          size="md"
          onClick={() => {
            window.location.href = '/projects#projects';
          }}
        >
          Explorar proyectos
        </Button>
      </div>



      {/* Showcase Video */}
      <div
        className="mt-6 overflow-hidden rounded-md border border-white/10"
      >

        {videoId ? (

          <iframe
            className="w-full aspect-video"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=1&rel=0`}
            title="Showcase Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />

        ) : (

          <div
            className="h-[420px] flex items-center justify-center font-mono text-sm text-(--sketch-text-dim)"
          >
            Introduce un enlace válido de YouTube
          </div>

        )}

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
  {
    title: 'Alcanzar el nivel B2 de inglés',
    desc: 'Mejorar la fluidez, la comprensión y la comunicación técnica en inglés.',
    priority: 'Alta'
  },
  {
    title: 'Completar un roadmap de desarrollo',
    desc: 'Finalizar uno de los roadmaps de mecánicas, sistemas o proyectos para fortalecer mis habilidades prácticas.',
    priority: 'Alta'
  },
  {
    title: 'Comenzar mi camino en Unreal Engine',
    desc: 'Explorar las bases del motor, su flujo de trabajo y las herramientas fundamentales para futuros proyectos.',
    priority: 'Media'
  },
  {
    title: 'Crear contenido para redes sociales',
    desc: 'Compartir proyectos, avances, aprendizajes y experimentos para documentar mi crecimiento como desarrollador.',
    priority: 'Baja'
  }
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
              { institution: 'Universidad de San Buenaventura', program: 'Ingenieria Multimedia', date: '2022 - 2026', desc: 'Estudios en diseño y desarrollo de contenido multimedia interactivo.' },
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
