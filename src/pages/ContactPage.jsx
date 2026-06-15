import React, { useState } from 'react';
import Navbar from '../Components/ui/Navbar';
import GridBackground from '../Components/graphics/GridBackground';
import ParticlesBackground from '../Components/graphics/ParticlesBackground';
import Button from '../Components/ui/Button';
import Footer from '../Components/ui/Footer';
import { FaGithub, FaLinkedin, FaInstagram, FaGamepad, FaFileAlt } from 'react-icons/fa';

const SOCIALS = [
  { id: 'itchio', Icon: FaGamepad, title: 'Itch.io', desc: 'Juegos y demos' },
  { id: 'instagram', Icon: FaInstagram, title: 'Instagram', desc: 'Imágenes y proceso' },
  { id: 'linkedin', Icon: FaLinkedin, title: 'LinkedIn', desc: 'Perfil profesional' },
  { id: 'github', Icon: FaGithub, title: 'GitHub', desc: 'Repositorios y código' },
  { id: 'cv', Icon: FaFileAlt, title: 'CV', desc: 'Hoja de vida (PDF)' }
];

export default function ContactPage() {
  const [offer, setOffer] = useState('games'); // 'games' | 'web' | 'extras'

  const localLinks = [
    { href: '#services', label: 'Servicios' },
    { href: '#socials', label: 'Redes Sociales' }
  ];

  const pageLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/projects', label: 'Proyectos' }
  ];

  return (
    <div className="relative w-full min-h-screen" style={{ background: 'var(--sketch-bg)' }}>
      {/* grid background */}
      <GridBackground color="#00f0ff" />

      <div className="w-[92%] max-w-4xl mx-auto pt-24">
        <Navbar localLinks={localLinks} pageLinks={pageLinks} basePath={'/contact'} />

        {/* separator under navbar */}
        <div style={{ borderTop: '1px dashed rgba(0,240,255,0.08)', marginTop: '18px' }} />

        <div className="mt-8">
          <h1 className="font-sketch text-4xl text-glow" style={{ color: 'var(--sketch-primary)' }}>Contacto</h1>

 
          {/* Services anchor and container (split: description + image placeholder) */}
          <div id="services" className="text-center my-6" style={{ scrollMarginTop: '96px' }}>
            <h2 className="font-sketch text-2xl text-glow" style={{ color: 'var(--sketch-primary)' }}>Servicios</h2>
            <div className="sketch-line mx-auto w-28 mt-2" />
          </div>

         {/* Primary local buttons: lo que ofrezco */}
          <div className="flex gap-3 mt-4 mb-6">
            <Button variant={offer === 'games' ? 'fancy-primary' : 'fancy-secondary'} size="sm" onClick={() => setOffer('games')}>Dev Juegos</Button>
            <Button variant={offer === 'web' ? 'fancy-primary' : 'fancy-secondary'} size="sm" onClick={() => setOffer('web')}>Web</Button>
            <Button variant={offer === 'extras' ? 'fancy-primary' : 'fancy-secondary'} size="sm" onClick={() => setOffer('extras')}>Extras</Button>
          </div>


          <div className="sketch-card p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="font-sketch text-xl" style={{ color: 'var(--sketch-primary)' }}>{offer === 'games' ? 'Desarrollo de Juegos' : offer === 'web' ? 'Desarrollo Web' : 'Servicios Extras'}</h3>
                <p className="font-mono mt-3 text-[var(--sketch-text-dim)]">
                  {offer === 'games' ? 'Desarrollo de prototipos, mecánicas y gameplay.' : offer === 'web' ? 'Sitios responsivos, SPAs y aplicaciones.' : 'Sistemas, herramientas y efectos visuales.'}
                </p>
                <div className="mt-4">
                  <Button variant="fancy-primary" size="sm" onClick={() => { /* placeholder */ }}>Contactar</Button>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full h-40 border border-dashed rounded-md flex items-center justify-center text-center text-sm font-mono text-[var(--sketch-text-dim)]">
                  Espacio para imagen (sube en src/assets y reemplaza)
                </div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px dashed rgba(0,240,255,0.08)', marginTop: '18px' }} />

          <div id="socials" className="text-center my-6" style={{ scrollMarginTop: '96px' }}>
            <h2 className="font-sketch text-2xl text-glow" style={{ color: 'var(--sketch-primary)' }}>Redes Sociales</h2>
            <div className="sketch-line mx-auto w-28 mt-2" />
          </div>

          <div className="relative sketch-card overflow-hidden p-6" style={{ minHeight: '260px' }}>
            <ParticlesBackground color="#00f0ff" count={300} blur={3} />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4">
              {SOCIALS.map((s) => (
                <div key={s.id} className="flex items-center gap-4 p-4 border border-dashed" style={{ background: 'rgba(0,0,0,0.45)' }}>
                  <div className="text-2xl" style={{ color: '#00f0ff' }}>
                    <s.Icon />
                  </div>
                  <div className="flex-1">
                    <div className="font-sketch text-base" style={{ color: 'var(--sketch-primary)' }}>{s.title}</div>
                    <div className="font-mono text-sm text-[var(--sketch-text-dim)]">{s.desc}</div>
                  </div>
                  <Button variant="fancy-primary" size="sm" onClick={() => { /* placeholder */ }}>Abrir</Button>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-12">
          <Footer />
        </div>
      </div>
    </div>
  );
}
