// Imports para Juego 1: Cristales De La Mazmorra
import cristalMazmorraCover from '../assets/Images/Juego1/CristalMazmorra.png';
import cristalMazmorra1 from '../assets/Images/Juego1/cristalesMazmorra1.png';
import cristalMazmorra2 from '../assets/Images/Juego1/cristalesMazmorra2.png';
import cristalMazmorra3 from '../assets/Images/Juego1/cristalesMazmorra3.png';
import cristalMazmorra4 from '../assets/Images/Juego1/cristalesMazmorra4.png';

// Imports para Juego 2: Lado Digital
import ladoDigitalCover from '../assets/Images/Juego2/LadoDigital.png';
import ladoDigital1 from '../assets/Images/Juego2/LadoDigital1.png';
import ladoDigital2 from '../assets/Images/Juego2/LadoDigital2.png';
import ladoDigital3 from '../assets/Images/Juego2/LadoDigital3.png';
import ladoDigital5 from '../assets/Images/Juego2/LadoDigital5.png';
import ladoDigital6 from '../assets/Images/Juego2/LadoDigital6.png';

// Imports para Juego 3: Teatrino
import teatrinoCover from '../assets/Images/Juego3/Teatrino1.png';
import teatrino2 from '../assets/Images/Juego3/Teatrino2.png';
import teatrino3 from '../assets/Images/Juego3/Teatrino3.png';
import teatrino4 from '../assets/Images/Juego3/Teatrino4.png';

// Imports para Juego 4: The Eternal Cleaner
import eternalCleanerCover from '../assets/Images/Juego4/TheEternalCleaner.png';
import eternalCleaner1 from '../assets/Images/Juego4/eternnalcleaner1.png';
import eternalCleaner2 from '../assets/Images/Juego4/eternnalcleaner2.png';
import eternalCleaner3 from '../assets/Images/Juego4/eternnalcleaner3.png';
import eternalCleaner4 from '../assets/Images/Juego4/eternnalcleaner4.png';

// Imports para RedHunt: Red Hunt
import redHuntCover from '../assets/Images/RedHunt/RedHunt1.png';
import redHunt2 from '../assets/Images/RedHunt/RedHunt2.png';
import redHunt3 from '../assets/Images/RedHunt/RedHunt3.png';
import redHunt4 from '../assets/Images/RedHunt/RedHunt4.png';
import redHunt5 from '../assets/Images/RedHunt/RedHunt5.png';

export const webProjects = [
  {
    id: 'web-1',
    category: 'Web',
    title: 'Sistema de pedidos para restaurante',
    summary: 'Sistema inspirado en procesos reales de restaurantes para optimizar la comunicación entre meseros y cocina',
    url: '#',
    coverImage: null,
    youtubeUrl: 'https://youtu.be/7kKMODi9Vtg',
    tools: ['React', 'Node.js', 'Express', 'MongoDB'],
    extendedDetails: 'Un sistema completo diseñado para agilizar las operaciones en restaurantes de alto volumen. Cuenta con paneles en tiempo real para la cocina, interfaz táctil para meseros y un sistema de facturación integrado.',
    images: [],
    publishPlatform: 'github',
    publishUrl: 'https://github.com/sebas64mil',
    gameTypes: ['Aprendizaje', 'Conceptos']
  },
  {
    id: 'web-2',
    category: 'Web',
    title: 'Simulación AR de entrenamiento físico',
    summary: 'Recrear ejercicios físicos comunes en un entorno de realidad aumentada para entrenamiento en casa.',
    url: '#',
    coverImage: null,
    youtubeUrl: 'https://youtu.be/7kKMODi9Vtg',
    tools: ['React', 'Three.js', 'Tailwind'],
    extendedDetails: 'Aplicación web interactiva que utiliza la cámara del dispositivo para superponer un entrenador virtual en realidad aumentada, guiando al usuario a través de rutinas de ejercicio con feedback en tiempo real.',
    images: [],
    publishPlatform: 'github',
    publishUrl: 'https://github.com/sebas64mil',
    gameTypes: ['Aprendizaje', 'Conceptos']
  },
  {
    id: 'web-3',
    category: 'Web',
    title: 'Aun en toma de decisiones',
    summary: 'Pendiente de decidir el próximo proyecto web, posiblemente algo relacionado con visualización de datos o una aplicación interactiva.',
    url: '#',
    coverImage: null,
    youtubeUrl: 'https://youtu.be/7kKMODi9Vtg',
    tools: [],
    extendedDetails: 'Próximamente se añadirá un nuevo proyecto web innovador a esta sección.',
    images: [],
    publishPlatform: 'github',
    publishUrl: 'https://github.com/sebas64mil',
    gameTypes: ['Aprendizaje', 'Conceptos']
  }
];

export const gameProjects = [
  {
    id: 'game-1',
    category: 'Game',
    title: 'Cristales De La Mazmorra',
    summary: 'Prototipo de videojuego mágico medieval con diálogos, puzles y efectos visuales.',
    url: '#',
    coverImage: cristalMazmorraCover,
    youtubeUrl: 'https://youtu.be/4DuJWZsfzJM',
    tools: ['Unity', 'C#', 'Photoshop', 'Blender 3D', 'VFX'],
    extendedDetails: 'Cristales De La Mazmorra es un prototipo interactivo desarrollado en Unity. En esta aventura mágico-medieval, el jugador debe resolver complejos puzles y dialogar con los habitantes de un reino misterioso para restaurar los cristales elementales de la mazmorra sagrada.\n\nEl proyecto destaca por su sistema de diálogos ramificado, efectos visuales de partículas (VFX Graph) y una estética blueprint estilizada que combina elementos clásicos del pixel art con sombreadores 3D modernos.',
    images: [cristalMazmorra1, cristalMazmorra2, cristalMazmorra3, cristalMazmorra4],
    publishPlatform: 'itchio',
    publishUrl: 'https://serbew.itch.io/cristales-de-la-mazmorra',
    gameTypes: ['Prototipo', 'Proyecto']
  },
  {
    id: 'game-2',
    category: 'Game',
    title: 'Lado Digital',
    summary: 'Eres una chica que quieres descubrir sobre esa zona que te llevaron , pero quizas puede ser algo mas',
    url: '#',
    coverImage: ladoDigitalCover,
    youtubeUrl: 'https://youtu.be/fhwBnInxCwQ',
    tools: ['Unity', 'C#', 'Aseprite', 'Figma'],
    extendedDetails: 'En Lado Digital, encarnas a una joven protagonista transportada a un mundo cibernético alterno. Tu misión es explorar un entorno desconocido lleno de misterios lógicos, superar retos tecnológicos y desentrañar los secretos detrás de esta dimensión oculta.\n\nEl juego utiliza mecánicas de sigilo e interacción en 2D, con un estilo visual fuertemente influenciado por la estética cyberpunk retro, desarrollado utilizando Aseprite para todo el arte conceptual y sprites.',
    images: [ladoDigital1, ladoDigital2, ladoDigital3, ladoDigital5, ladoDigital6],
    publishPlatform: 'itchio',
    publishUrl: 'https://serbew.itch.io/ladodigitalv1',
    gameTypes: ['Prototipo', 'Proyecto']
  },
  {
    id: 'game-3',
    category: 'Game',
    title: 'Teatrino',
    summary: 'Teatrino es una aventura donde un actor escapa de un teatro abandonado evitando peligros y recolectando tickets.',
    url: '#',
    coverImage: teatrinoCover,
    youtubeUrl: 'https://youtu.be/aF-G700DW9Y',
    tools: ['Unity', 'C#', 'Illustrator'],
    extendedDetails: 'Teatrino es una aventura donde un actor escapa de un teatro abandonado evitando peligros y recolectando tickets dorados.\n\nEl diseño de niveles hace uso intensivo de Tilemaps y físicas personalizadas para brindar un movimiento fluido y preciso. El apartado sonoro y artístico evoca una atmósfera nostálgica y teatral.',
    images: [teatrinoCover, teatrino2, teatrino3, teatrino4],
    publishPlatform: 'itchio',
    publishUrl: 'https://paranoid-alien.itch.io/teatrino-ggj2026',
    gameTypes: ['Prototipo', 'Proyecto']
  },
  {
    id: 'game-4',
    category: 'Game',
    title: 'The Eternal Cleaner',
    summary: 'Videojuego de gestión y acción donde controlas a un conserje espacial en una estación llena de caos.',
    url: '#',
    coverImage: eternalCleanerCover,
    youtubeUrl: 'https://youtu.be/cP3oEX1aR58',
    tools: ['Unity', 'C#', 'Substance Painter', 'Blender 3D'],
    extendedDetails: 'The Eternal Cleaner te pone en las botas del último conserje de una estación espacial abandonada. Tu labor consiste en reparar sistemas, recolectar residuos radioactivos y evitar que la estación colapse ante la acumulación de basura intergaláctica.\n\nEl juego destaca por sus mecánicas de física de fluidos, modelado 3D de alta fidelidad texturizado en Substance Painter y una jugabilidad adictiva tipo contra reloj.',
    images: [eternalCleaner1, eternalCleaner2, eternalCleaner3, eternalCleaner4],
    publishPlatform: 'itchio',
    publishUrl: 'https://falquior.itch.io/the-eternal-cleaner',
    gameTypes: ['Prototipo', 'Proyecto']
  },
  {
    id: 'game-5',
    category: 'Game',
    title: 'Red Hunt',
    summary: 'Un shooter táctico de scroll lateral con mecánicas de hackeo y combate dinámico.',
    url: '#',
    coverImage: redHuntCover,
    youtubeUrl: 'https://youtu.be/Jxvu-wzVO-Q',
    tools: ['Unity', 'C#', 'GitHub'],
    extendedDetails: 'Red Hunt es un shooter de ritmo rápido en el que controlas a un cazarrecompensas cibernético. Abre camino a través de hordas de enemigos controlados por una IA corrupta, utilizando un arsenal táctico y habilidades de hackeo en tiempo real para modificar los elementos del mapa.\n\nImplementado con Shader Graph para lograr efectos visuales distópicos y sombreadores de escaneo térmico.',
    images: [redHuntCover, redHunt2, redHunt3, redHunt4, redHunt5],
    publishPlatform: 'github',
    publishUrl: 'https://github.com/sebas64mil/red-hunt',
    gameTypes: ['Aprendizaje', 'Conceptos']
  }
];

export const systemsProjects = [
  // Deja espacio para futura carga de contenido (Efectos visuales, mecánicas, sistemas)
];
