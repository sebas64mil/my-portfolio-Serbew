import React, { useState } from 'react';
import Navbar from '../Components/ui/Navbar';
import GridBackground from '../Components/graphics/GridBackground';
import ParticlesBackground from '../Components/graphics/ParticlesBackground';
import Button from '../Components/ui/Button';
import Footer from '../Components/ui/Footer';
import { FaGithub, FaLinkedin, FaInstagram, FaGamepad, FaFileAlt, FaBehance, FaArtstation } from 'react-icons/fa';
import { siteData } from '../data/siteData';
import gameServicesImg from '../assets/Images/Services/GameServices.png';
import webServicesImg from '../assets/Images/Services/WebServices.png';
import extraServicesImg from '../assets/Images/Services/ExtraServices.png';


const socialIcons = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  Behance: FaBehance,
  ArtStation: FaArtstation,
  'Itch.io': FaGamepad,
  CV: FaFileAlt,
};

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
                <p className="font-mono mt-3 text-(--sketch-text-dim)">
                  {offer === 'games' ? 'Desarrollo de prototipos, sistemas de juego y experiencias interactivas utilizando motores modernos y herramientas especializadas. ' : offer === 'web' ? 'Diseño y desarrollo de sitios web modernos, interactivos y responsivos.' : 'Herramientas de desarrollo, efectos visuales y soluciones personalizadas para proyectos creativos.'}
                </p>
                <div className="mt-4">
                  <Button
                  variant="fancy-primary"
                  size="sm"
                  href={`mailto:vsebasjrincon12@gmail.com?subject=${encodeURIComponent('Contacto desde el portafolio - ' + (offer === 'games' ? 'Desarrollo de Videojuegos' : offer === 'web' ? 'Desarrollo Web' : 'Servicios Extras'))}`}
                >
                  Contactar por Gmail
                </Button>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <div className="relative w-full overflow-hidden rounded-md border border-dashed" style={{ borderColor: 'var(--sketch-border-solid)' }}>
                  {[
                    { key: 'games', src: gameServicesImg, alt: 'Servicios de Desarrollo de Juegos' },
                    { key: 'web',   src: webServicesImg,  alt: 'Servicios de Desarrollo Web' },
                    { key: 'extras',src: extraServicesImg,alt: 'Servicios Extras' },
                  ].map(({ key, src, alt }) => (
                    <img
                      key={key}
                      src={src}
                      alt={alt}
                      className="w-full h-48 object-cover transition-all duration-500"
                      style={{
                        display: offer === key ? 'block' : 'none',
                        opacity: offer === key ? 1 : 0,
                      }}
                    />
                  ))}
                  {/* Subtle overlay gradient */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: 'linear-gradient(to bottom, transparent 60%, rgba(10,10,13,0.55) 100%)',
                    }}
                  />
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
{siteData.socialLinks.map((social) => {
  const Icon = socialIcons[social.label];

  return (
    <div
      key={social.label}
      className="flex items-center gap-4 p-4 border border-dashed"
      style={{ background: 'rgba(0,0,0,0.45)' }}
    >
      <div
        className="text-2xl"
        style={{ color: 'var(--sketch-primary)' }}
      >
        {Icon && <Icon />}
      </div>

      <div className="flex-1">
        <div
          className="font-sketch text-base"
          style={{ color: 'var(--sketch-primary)' }}
        >
          {social.label}
        </div>

        <div className="font-mono text-sm text-(--sketch-text-dim)">
          {social.label === 'GitHub' && 'Repositorios y código'}
          {social.label === 'LinkedIn' && 'Perfil profesional'}
          {social.label === 'Instagram' && 'Videos, publicaciones y procesos'}
          {social.label === 'Behance' && 'Portafolio de diseño y proyectos visuales'}
          {social.label === 'ArtStation' && 'Portafolio de VFX y arte 3D'}
          {social.label === 'Itch.io' && 'Proyectos, demos y juegos completos'}
          {social.label === 'CV' && 'Hoja de vida (PDF)'}
        </div>
      </div>

      <Button
        variant="fancy-primary"
        size="sm"
        onClick={() => window.open(social.url, '_blank')}
      >
        Abrir
      </Button>
    </div>
  );
})}
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
