import React, { useState } from 'react';
import Navbar from '../Components/ui/Navbar';
import GridBackground from '../Components/graphics/GridBackground';
import ParticlesBackground from '../Components/graphics/ParticlesBackground';
import CardCarousel from '../Components/ui/CardCarousel';
import Roadmap from '../Components/ui/Roadmap';
import { webProjects, gameProjects } from '../data/projectsData';
import Button from '../Components/ui/Button';
import Footer from '../Components/ui/Footer';



export default function ProjectsPage() {
  const [tab, setTab] = useState('web');
  const items = tab === 'web' ? webProjects : gameProjects;

  const localLinks = [
    { href: '#projects', label: 'Proyectos' },
    { href: '#experimentos', label: 'Experimentos' }
  ];

  const pageLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/contact', label: 'Contacto' }
  ];

  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center px-6"
      style={{ background: 'var(--sketch-bg)' }}
    >
      {/* Grid background */}
      <GridBackground color="#00f0ff" />

      {/* Use same width as navbar for alignment */}
      <div className="w-[92%] max-w-4xl mx-auto pt-24">
        <Navbar localLinks={localLinks} pageLinks={pageLinks} basePath={'/projects'} />

        {/* Separator line under navbar (page-specific) */}
        <div style={{ borderTop: 'px dashed rgba(0,240,255,0.12)', marginTop: '18px' }} />

        <div className="mt-6">
          <h1 className="font-sketch text-4xl text-glow" style={{ color: 'var(--sketch-primary)' }}>Proyectos</h1>

          {/* Category buttons under title */}
          <div className="flex gap-3 mt-4 mb-6">
            <Button variant={tab === 'web' ? 'fancy-primary' : 'fancy-secondary'} size="sm" onClick={() => setTab('web')}>Web</Button>
            <Button variant={tab === 'games' ? 'fancy-primary' : 'fancy-secondary'} size="sm" onClick={() => setTab('games')}>Videojuegos</Button>
          </div>

          {/* Carousel for selected category */}
          <div id="projects" style={{ scrollMarginTop: '96px' }}>
            {items && items.length > 0 ? (
              <CardCarousel items={items} />
            ) : (
              <div className="sketch-card p-8 text-center" style={{ minHeight: '220px' }}>
                <p className="font-mono">Sección vacía — agrega proyectos en src/data/projectsData.js</p>
              </div>
            )}
          </div>

          {/* Separator between sections */}
          <div style={{ borderTop: '1px dashed rgba(0,240,255,0.08)', marginTop: '18px' }} />

          {/* Roadmap / Experimentos técnicos */}
          <div id="experimentos" className="mt-12" style={{ scrollMarginTop: '96px' }}>
            <h2 className="font-sketch text-2xl text-glow" style={{ color: 'var(--sketch-primary)' }}>Experimentos técnicos</h2>
            <p className="font-mono text-sm mt-2 text-[var(--sketch-text-dim)]">Este apartado es para recrear mecánicas, sistemas de videojuegos y aprendizaje del desarrollo de software.</p>

            <div className="mt-4">
              <div className="relative sketch-card overflow-hidden p-6" style={{ minHeight: '260px' }}>
                <ParticlesBackground color="#00f0ff" count={300} blur={3} />

                <div className="relative z-10">
                  <Roadmap initial={tab === 'games' ? 'crash' : 'crash'} />
                </div>
              </div>
              {/* Separator below roadmap */}
              <div style={{ borderTop: '1px dashed rgba(0,240,255,0.08)', marginTop: '18px' }} />
            </div>
          </div>


          
        </div>
      </div>

      <br />
      <br />

    <Footer />
      
    </div>
  );
}
