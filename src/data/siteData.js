// ============================================================
// PLANTILLA DE DATOS DEL PORTAFOLIO
// Modifica este archivo para cambiar toda la información del sitio.
// ============================================================

export const siteData = {
  // --- Identidad ---
  nickname: 'Serbew',
  slogan: 'De bocetos a proyectos',
  heroDescription: 'Bienvenido/a a mi portafolio, disfruta del recorrido.',

  // --- Sobre mí ---
  aboutTitle: 'Serbew',
  aboutDescription:
    'Desarrollador creativo apasionado por los videojuegos, la web y el arte digital. Transformo ideas en experiencias interactivas con código, shaders y un toque de arte.',

  // --- Navegación ---
  navLocalLinks: [
    { label: 'Inicio', href: '#hero' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Herramientas', href: '#skills' },
  ],
  navPageLinks: [
    { label: 'Proyectos', path: '/projects' },
    { label: 'Contacto', path: '/contact' },
  ],

  // --- Árbol de Habilidades ---
  skillTrees: {
    gamedev: {
      label: 'Game Dev',
      core: 'Desarrollo de Videojuegos',
      skills: [
        { name: 'Unity', icon: '🎮' },
        { name: 'C#', icon: '⚙️' },
        { name: 'Blender', icon: '🧊' },
        { name: 'Phaser', icon: '🕹️' },
        { name: 'Shaders', icon: '✨' },
        { name: 'Aseprite', icon: '🎨' },
        { name: 'Substance', icon: '🖌️' },
        { name: 'Particles', icon: '💫' },
      ],
    },
    webdev: {
      label: 'Web Dev',
      core: 'Desarrollo Web',
      skills: [
        { name: 'React', icon: '⚛️' },
        { name: 'JavaScript', icon: '📜' },
        { name: 'Three.js', icon: '🌐' },
        { name: 'Tailwind', icon: '💨' },
        { name: 'HTML/CSS', icon: '🏗️' },
        { name: 'Vite', icon: '⚡' },
        { name: 'Figma', icon: '🖼️' },
        { name: 'Node.js', icon: '🟢' },
      ],
    },
    extras: {
      label: 'Extras',
      core: 'Herramientas Extra',
      skills: [
        { name: 'Photoshop', icon: '🖼️' },
        { name: 'Illustrator', icon: '✏️' },
        { name: 'UX/UI', icon: '📐' },
        { name: 'Git', icon: '🔀' },
        { name: 'Blender 3D', icon: '🧊' },
        { name: 'After Effects', icon: '🎬' },
      ],
    },
  },

  // --- Footer ---
  footerText: 'Serbew',
  footerTagline: 'Proyectos y bocetos',
  socialLinks: [
    { label: 'GitHub', url: 'https://github.com/sebas64mil' },
    { label: 'LinkedIn', url: '#' },
    { label: 'Instagram', url: '#' },
    { label: 'Itch.io', url: '#' },
    { label: 'CV', url: '#' },
  ],
};
