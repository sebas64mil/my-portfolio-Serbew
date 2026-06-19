import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../Components/ui/Navbar';
import Footer from '../Components/ui/Footer';
import Button from '../Components/ui/Button';
import GridBackground from '../Components/graphics/GridBackground';
import { webProjects, gameProjects } from '../data/projectsData';
import { siteData } from '../data/siteData';
import { FaGamepad, FaGithub } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [videoEnded, setVideoEnded] = useState(false);

  // Scroll to top on mount or id change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Find the project from projects data
  const allProjects = [...webProjects, ...gameProjects];
  const project = allProjects.find((p) => p.id === id);

  // Find current list and indices for bottom project navigation
  const currentList = project && project.category === 'Web' ? webProjects : gameProjects;
  const currentIndex = project ? currentList.findIndex((p) => p.id === project.id) : -1;
  const prevProject = project && currentIndex !== -1 ? currentList[(currentIndex - 1 + currentList.length) % currentList.length] : null;
  const nextProject = project && currentIndex !== -1 ? currentList[(currentIndex + 1) % currentList.length] : null;

  // Helper to extract YouTube video ID
  const getYoutubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const youtubeId = project ? getYoutubeId(project.youtubeUrl) : null;

  // Custom YouTube API integration for video-to-image transition
  useEffect(() => {
    if (!youtubeId || !id) return;

    let player;
    const playerId = `yt-player-${id}`;
    const scriptId = 'youtube-iframe-api-script';
    let scriptTag = document.getElementById(scriptId);

    // Reset video ended state on project change
    setVideoEnded(false);

    // Global callback required by YouTube iframe API
    if (!window.onYouTubeIframeAPIReady) {
      window.onYouTubeIframeAPIReady = () => {
        window.dispatchEvent(new Event('youtubeAPIReady'));
      };
    }

    const initPlayer = () => {
      const container = document.getElementById(playerId);
      if (!container || player) return;

      player = new window.YT.Player(playerId, {
        videoId: youtubeId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          showinfo: 0,
          rel: 0,
          iv_load_policy: 3,
          playsinline: 1,
          disablekb: 1,
          fs: 0,
        },
        events: {
          onReady: (event) => {
            event.target.mute();
            event.target.playVideo();
          },
          onStateChange: (event) => {
            // YT.PlayerState.ENDED is 0
            if (event.data === window.YT.PlayerState.ENDED) {
              setVideoEnded(true);
              // Wait 4 seconds, then restart video
              setTimeout(() => {
                setVideoEnded(false);
                if (player && typeof player.seekTo === 'function') {
                  player.seekTo(0);
                  player.playVideo();
                }
              }, 4000);
            }
          },
        },
      });
    };

    const handleAPIReady = () => {
      initPlayer();
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.addEventListener('youtubeAPIReady', handleAPIReady);
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);
      }
    }

    return () => {
      window.removeEventListener('youtubeAPIReady', handleAPIReady);
      if (player && typeof player.destroy === 'function') {
        player.destroy();
      }
    };
  }, [youtubeId, id]);

  // Helper to dynamically resolve tool icons from siteData
  const getToolIcon = (toolName) => {
    if (!siteData || !siteData.skillTrees) return null;
    for (const key in siteData.skillTrees) {
      const tree = siteData.skillTrees[key];
      if (tree.skills) {
        const skill = tree.skills.find(
          (s) => s.name.toLowerCase() === toolName.toLowerCase()
        );
        if (skill) return skill.icon;
      }
    }
    return null;
  };

  // Custom secondary navbar links (Home, Projects, Contact)
  const pageLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/projects', label: 'Proyectos' },
    { path: '/contact', label: 'Contacto' },
  ];

  if (!project) {
    return (
      <div 
        className="relative w-full min-h-screen flex flex-col items-center justify-center px-6"
        style={{ background: 'var(--sketch-bg)' }}
      >
        <GridBackground color="#d94cff" />
        <div className="sketch-card p-8 text-center max-w-md relative z-10">
          <h1 className="font-sketch text-3xl text-glow mb-4 text-(--sketch-secondary)">Proyecto no encontrado</h1>
          <p className="font-mono text-sm text-(--sketch-text-dim)">
            El proyecto con ID "{id}" no se encuentra registrado en el sistema.
          </p>
          <Link to="/projects">
            <span className="btn-fancy-primary btn-md">
              <span className="btn-text">Volver a Proyectos</span>
            </span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full min-h-screen flex flex-col"
      style={{ background: 'var(--sketch-bg)', overflowX: 'hidden' }}
    >
      {/* Grid background for the page */}
      <GridBackground color={project.category === 'Web' ? '#00f0ff' : '#00f0ff'} opacity={0.5} />

      {/* Navbar with only secondary (page) links */}
      <Navbar localLinks={[]} pageLinks={pageLinks} />

      {/* ============================================================
         NETFLIX-STYLE HERO BACKGROUND SECTION
         ============================================================ */}
      <section className="relative w-full h-[65vh] md:h-[80vh] overflow-hidden flex items-end">
        {/* Absolute Background Container */}
        <div className="absolute inset-0 z-0">
          {/* Cover image (fallback / transition state) */}
          {project.coverImage && (
            <img 
              src={project.coverImage} 
              alt={project.title} 
              className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 opacity-35 sm:opacity-0 ${
                videoEnded ? 'sm:opacity-45' : ''
              }`} 
            />
          )}

          {/* YouTube Video Embed */}
          {youtubeId && (
            <div 
              className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden hidden sm:block transition-opacity duration-1000 ${
                videoEnded ? 'opacity-0' : 'opacity-70'
              }`}
            >
              <div 
                id={`yt-player-${id}`}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-[177.77vh] h-[56.25vw]"
              />
            </div>
          )}

          {/* Dark gradients for text contrast */}
          <div className="absolute inset-0 bg-linear-to-t from-(--sketch-bg) via-[#0a0a0c40] to-[#0a0a0ce0] z-10" />
          <div className="absolute inset-0 bg-linear-to-r from-(--sketch-bg) via-transparent to-(--sketch-bg) opacity-60 z-10 hidden md:block" />
        </div>

        {/* Banner Content */}
        <div className="relative z-20 w-[92%] max-w-4xl mx-auto pb-12 px-4 md:px-0">
          <div className="max-w-2xl text-left">
            {/* Category Tag */}
            <div className="flex flex-wrap gap-2 items-center">
              <span 
                className="font-mono text-xs uppercase tracking-widest px-2.5 py-0.5 rounded-sm border inline-block"
                style={{ 
                  color: project.category === 'Web' ? 'var(--sketch-primary)' : 'var(--sketch-secondary)',
                  borderColor: project.category === 'Web' ? 'var(--sketch-primary)' : 'var(--sketch-secondary)'
                }}
              >
                {project.category === 'Web' ? 'Desarrollo Web' : 'Videojuegos'}
              </span>
            </div>

            <h1 
              className="font-sketch text-4xl md:text-6xl text-glow mt-4 leading-tight"
              style={{ color: 'var(--sketch-primary)' }}
            >
              {project.title}
            </h1>

            <p className="font-mono text-sm md:text-base mt-4 text-(--sketch-text) leading-relaxed max-w-xl">
              {project.summary}
            </p>

            {/* Netflix-style Publication Action Button */}
            {project.publishUrl && (
              <div className="mt-5">
                {project.publishPlatform === 'itchio' ? (
                  <Button 
                    href={project.publishUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variant="fancy-secondary"
                    size="md"
                    className="flex items-center gap-2"
                  >
                    <span className="flex items-center gap-2">
                      <FaGamepad className="text-base" /> Jugar en Itch.io
                    </span>
                  </Button>
                ) : (
                  <Button 
                    href={project.publishUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    variant="fancy-primary"
                    size="md"
                    className="flex items-center gap-2"
                  >
                    <span className="flex items-center gap-2">
                      <FaGithub className="text-base" /> Ver en GitHub
                    </span>
                  </Button>
                )}
              </div>
            )}

            {/* Game Type Tags — below the action button */}
            {project.gameTypes && project.gameTypes.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5 items-center">
                {project.gameTypes.map((type) => (
                  <span
                    key={type}
                    className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-sm bg-[#1a1a22]/90 text-white border border-gray-700/60"
                  >
                    {type}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Separator Line */}
      <div className="w-[92%] max-w-4xl mx-auto border-t border-dashed border-(--sketch-border-solid) my-1 opacity-50" />

      {/* ============================================================
         TOOLS / TECHNOLOGIES STRIP
         ============================================================ */}
      {project.tools && project.tools.length > 0 && (
        <div className="w-[92%] max-w-4xl mx-auto px-4 md:px-0 mt-6 mb-2">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="font-mono text-xs text-(--sketch-text-dim) uppercase tracking-widest mr-2">Herramientas:</span>
            {project.tools.map((tool) => {
              const ToolIcon = getToolIcon(tool);
              return (
                <span
                  key={tool}
                  className="font-mono text-xs px-3 py-1.5 bg-[#111115]/90 border border-(--sketch-border-solid) rounded-sm text-(--sketch-primary) hover:border-(--sketch-primary) hover:bg-[#1a1a22]/90 transition-all duration-200 flex items-center gap-1.5 shadow-sm"
                >
                  {ToolIcon && <ToolIcon className="text-sm" />}
                  {tool}
                </span>
              );
            })}
          </div>
        </div>
      )}

      {/* ============================================================
         DETAILS & IMAGES CONTAINER SECTION
         ============================================================ */}
      <main className="w-[92%] max-w-4xl mx-auto px-4 md:px-0 mt-8 mb-16 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Extended Information */}
          <div className="sketch-card p-6 flex flex-col gap-4">
            <h2 
              className="font-sketch text-2xl text-glow"
              style={{ color: 'var(--sketch-primary)' }}
            >
              Detalles del Proyecto
            </h2>
            <div className="project-description font-mono text-sm leading-relaxed text-(--sketch-text) space-y-3 pt-2">
              {project.extendedDetails ? (
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p className="mb-3 last:mb-0">{children}</p>,
                    strong: ({ children }) => <strong className="font-bold text-(--sketch-primary)">{children}</strong>,
                    em: ({ children }) => <em className="italic text-(--sketch-text)">{children}</em>,
                    ul: ({ children }) => <ul className="list-disc list-inside space-y-1 pl-2 my-2">{children}</ul>,
                    ol: ({ children }) => <ol className="list-decimal list-inside space-y-1 pl-2 my-2">{children}</ol>,
                    li: ({ children }) => <li className="text-(--sketch-text) leading-relaxed">{children}</li>,
                    h3: ({ children }) => <h3 className="font-sketch text-lg text-(--sketch-secondary) mt-4 mb-1">{children}</h3>,
                    h4: ({ children }) => <h4 className="font-bold text-(--sketch-primary) text-sm mt-3 mb-1 uppercase tracking-wide">{children}</h4>,
                    blockquote: ({ children }) => (
                      <blockquote className="border-l-2 border-(--sketch-secondary) pl-3 italic text-(--sketch-text-dim) my-3">
                        {children}
                      </blockquote>
                    ),
                    code: ({ children }) => (
                      <code className="bg-[#111115] border border-(--sketch-border-solid) px-1.5 py-0.5 rounded text-xs text-(--sketch-secondary) font-mono">
                        {children}
                      </code>
                    ),
                  }}
                >
                  {project.extendedDetails}
                </ReactMarkdown>
              ) : (
                <p>No se dispone de detalles extendidos sobre este proyecto.</p>
              )}
            </div>

            {/* Publication Details Info Text */}
            {project.publishUrl && (
              <div className="mt-4 pt-4 border-t border-dashed border-(--sketch-border-solid)">
                <p className="font-mono text-xs text-(--sketch-text-dim)">
                  <span className="text-(--sketch-primary) font-bold">Publicación: </span>
                  {project.publishPlatform === 'itchio' ? (
                    <>
                      Proyecto publicado en{' '}
                      <a 
                        href={project.publishUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline text-(--sketch-secondary) hover:text-white transition-colors"
                      >
                        Itch.io
                      </a>{' '}
                      como <strong>Prototipo y Proyecto</strong> para ser jugado directamente en el navegador o descargado.
                    </>
                  ) : (
                    <>
                      Código y documentación publicados en{' '}
                      <a 
                        href={project.publishUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="underline text-(--sketch-primary) hover:text-white transition-colors"
                      >
                        GitHub
                      </a>{' '}
                      como proyecto de <strong>Aprendizaje y Conceptos</strong> técnicos.
                    </>
                  )}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Game Screenshots Container */}
          <div className="sketch-card p-6 flex flex-col gap-4">
            <h2 
              className="font-sketch text-2xl text-glow"
              style={{ color: 'var(--sketch-secondary)' }}
            >
              Imágenes del Juego
            </h2>
            {project.images && project.images.length > 0 ? (
              <div className="flex flex-col gap-4 pt-2">
                {project.images.map((imgSrc, index) => (
                  <div 
                    key={index}
                    onClick={() => setSelectedImage(imgSrc)}
                    className="relative aspect-video rounded-sm overflow-hidden cursor-pointer border border-dashed border-(--sketch-border-solid) hover:border-(--sketch-secondary) transition-all duration-300 group shadow-md"
                  >
                    <img 
                      src={imgSrc} 
                      alt={`${project.title} Screenshot ${index + 1}`} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-200" />
                    <span className="absolute bottom-2 right-2 font-mono text-[10px] text-white/60 bg-black/50 px-1.5 py-0.5 rounded-sm">
                      {index + 1} / {project.images.length}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center border border-dashed border-(--sketch-border-solid) rounded-sm">
                <p className="font-mono text-sm text-(--sketch-text-dim)">
                  No hay capturas disponibles para este proyecto.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* ============================================================
         INTERACTIVE LIGHTBOX MODAL (POPUP SCREENSHOT)
         ============================================================ */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[85vh] animate-zoom-in" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Screenshot Zoom" 
              className="w-full h-auto max-h-[80vh] object-contain border border-(--sketch-primary) shadow-[0_0_25px_rgba(0,240,255,0.45)]"
            />
            
            {/* Close Button */}
            <button 
              className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center bg-black border border-(--sketch-primary) text-(--sketch-primary) font-mono hover:bg-(--sketch-primary) hover:text-black transition-colors duration-200 shadow-md"
              onClick={() => setSelectedImage(null)}
              aria-label="Cerrar vista"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* ============================================================
         PAGINATION NAVIGATION BUTTONS (BOTTOM)
         ============================================================ */}
      {prevProject && nextProject && currentList.length > 1 && (
        <nav className="w-[92%] max-w-4xl mx-auto px-4 md:px-0 mb-12 flex justify-between gap-4 relative z-20">
          <Button
            to={`/projects/${prevProject.id}`}
            variant="fancy-secondary"
            size="sm"
            className="flex-1 max-w-[48%]"
          >
            <span className="truncate block text-center">← {prevProject.title}</span>
          </Button>

          <Button
            to={`/projects/${nextProject.id}`}
            variant="fancy-primary"
            size="sm"
            className="flex-1 max-w-[48%]"
          >
            <span className="truncate block text-center">{nextProject.title} →</span>
          </Button>
        </nav>
      )}

      {/* Footer Section */}
      <Footer />
    </div>
  );
}
