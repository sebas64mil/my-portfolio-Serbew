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
    coverImage: cristalMazmorraCover,
    youtubeUrl: 'https://youtu.be/4DuJWZsfzJM',
    tools: ['Unity', 'C#', 'Photoshop', 'Blender 3D','Substance Painter','Git','GitHub'],
    extendedDetails: `
**Cristales de la Mazmorra** es un prototipo de videojuego ambientado en un mundo mágico de inspiración medieval, desarrollado como un **proyecto personal** para explorar herramientas, sistemas y procesos de trabajo dentro de Unity.

#### Funcionalidades implementadas

- ✨ Sistemas de partículas y efectos visuales.
- 🧍 Movimiento mediante Character Controller.
- 🧩 Puzles basados en orden y tiempo.
- 🌍 Sistema de localización para múltiples idiomas.
- 💬 Sistema de diálogos.
- 🎛️ Menú de opciones configurable.
- 🧭 Interfaz 3D para el menú principal.
- 💡 Iluminación y ambientación mágica.

#### Historia

La aventura sigue a un **joven mago** que recibe la misión de adentrarse en una antigua mazmorra para recuperar unos cristales esenciales para la realización de un importante hechizo.

> Curiosamente, el estado actual del prototipo aún no permite acceder a la mazmorra, aunque deja preparadas las bases técnicas, narrativas y de diseño para continuar su desarrollo en el futuro. Por lo que el jugador puede probar una especie de "demo técnica".

#### Proyecto personal

Este videojuego fue desarrollado íntegramente por mí como un espacio de **aprendizaje, experimentación y validación de mecánicas**.

Algunos modelos, texturas y recursos artísticos utilizados durante el prototipado fueron obtenidos de bibliotecas y repositorios públicos disponibles en Internet. Sus respectivos autores y licencias son reconocidos y referenciados dentro del propio proyecto.
`,
    images: [cristalMazmorra1, cristalMazmorra2, cristalMazmorra3, cristalMazmorra4],
    publishPlatform: 'itchio',
    publishUrl: 'https://serbew.itch.io/cristales-de-la-mazmorra',
    gameTypes: ['3D', 'puzzles','Prototipo', 'plataforma3D']
  },
  {
    id: 'game-2',
    category: 'Game',
    title: 'Lado Digital',
    summary: 'Eres una chica que quieres descubrir sobre esa zona que te llevaron , pero quizas puede ser algo mas',
    coverImage: ladoDigitalCover,
    youtubeUrl: 'https://youtu.be/fhwBnInxCwQ',
    tools: ['Unity', 'C#', 'Aseprite', 'Figma', 'Git', 'GitHub','Blender 3D'],
   extendedDetails: `
**Lado Digital** es un prototipo de videojuego desarrollado como un **proyecto personal**, concebido como un espacio para experimentar con mecánicas híbridas y profundizar en distintas áreas del diseño y desarrollo de videojuegos.

#### Mecánicas principales

El juego combina dos estilos de experiencia claramente diferenciados:

- 🥷 Exploración y sigilo en **primera persona (3D)**.
- 🖥️ Secciones de **plataformas en 2D** dentro de dispositivos electrónicos.
- ⚡ Transición entre ambos mundos como parte central de la progresión.
- 🏢 Exploración de un laboratorio tecnológico dividido en múltiples pisos.

#### Enfoque de diseño

Uno de los principales objetivos del proyecto fue profundizar en el estudio y práctica del **Level Design**, prestando especial atención a:

- 🗺️ Construcción de recorridos y rutas alternativas.
- 🎮 Ritmo de exploración y progresión del jugador.
- 📍 Comunicación espacial en entornos tridimensionales.
- 🧩 Diseño de desafíos para niveles de plataformas en 2D.

Cada modalidad fue concebida para transmitir sensaciones distintas, buscando mantener una progresión coherente entre ambos estilos de juego.

#### Historia

La protagonista, **Samantha**, acepta un empleo en **NeuroLink Industries**, una corporación dedicada a la fusión entre la mente humana y el mundo digital. Tras un experimento fallido, obtiene la capacidad de entrar y salir de dispositivos electrónicos, obligándola a explorar las instalaciones mientras descubre la verdadera naturaleza del proyecto.

> A medida que avanza, Samantha descubre una inquietante verdad: podría no ser humana, sino la inteligencia artificial más avanzada creada por la corporación, diseñada para creer que lo es.

#### Proyecto personal

Este videojuego fue desarrollado íntegramente como un proyecto personal. Algunos modelos, texturas, efectos visuales y recursos artísticos empleados durante el proceso de prototipado fueron obtenidos de bibliotecas y repositorios públicos disponibles en Internet.

Sus respectivos autores y licencias son reconocidos y referenciados dentro del propio proyecto. Su utilización tuvo como propósito facilitar la experimentación, el aprendizaje y la validación de mecánicas, sistemas y propuestas de diseño durante el desarrollo del prototipo.
`,
    images: [ladoDigital1, ladoDigital2, ladoDigital3, ladoDigital5, ladoDigital6],
    publishPlatform: 'itchio',
    publishUrl: 'https://serbew.itch.io/ladodigitalv1',
    gameTypes: ['sigilo', 'plataformaS','3D', '2D','Proyecto']
  },
  {
    id: 'game-3',
    category: 'Game',
    title: 'Teatrino',
    summary: 'Teatrino es una aventura donde un actor escapa de un teatro abandonado evitando peligros y recolectando tickets.',
    coverImage: teatrinoCover,
    youtubeUrl: 'https://youtu.be/aF-G700DW9Y',
    tools: ['Unity', 'C#','aseprite'],
  extendedDetails: `
**Teatrino** es un prototipo de videojuego desarrollado durante la **Global Game Jam 2026**, concebido y completado en un corto periodo de tiempo como parte de una experiencia colaborativa de creación rápida de videojuegos.

#### Mecánicas principales

El juego propone una aventura en vista **Top-Down**, centrada en la exploración, la evasión de obstáculos y la utilización estratégica de mecánicas simples pero expresivas.

Entre las principales características del prototipo destacan:

- 🎭 Cambio dinámico entre una máscara feliz y una máscara triste.
- 👻 Evasión de fantasmas, trampas y peligros ambientales.
- 🎟️ Recolección de tickets para progresar en el nivel.
- 🗺️ Diseño de niveles orientado a la exploración y descubrimiento.

#### Concepto

El jugador encarna a un actor atrapado en un pequeño teatro abandonado, cuyo objetivo es encontrar una salida mientras aprende a utilizar las propiedades únicas de cada máscara para superar los desafíos presentes en el escenario.

> La mecánica principal del juego gira en torno al cambio de estado del personaje, permitiendo afrontar situaciones de distintas maneras dependiendo de la máscara equipada.

#### Desarrollo en equipo

Uno de los principales aprendizajes obtenidos durante este proyecto fue profundizar en las dinámicas de **trabajo en equipo dentro del contexto de una Game Jam**, coordinando disciplinas artísticas, técnicas y de diseño bajo restricciones de tiempo.

El equipo estuvo conformado por:

- 🎨 **Felipe Paz** — Artista 2D y diseñador de sonido.
- 🖌️ **Paranoid Alien** — Artista 2D y diseñador UI/UX.
- 💻 **Serbew (Sebastián Rincón)** — Desarrollador en Unity, encargado de la programación e integración de sistemas.

#### Experiencia obtenida

Este proyecto permitió poner en práctica metodologías de desarrollo rápido, comunicación constante, iteración de ideas y toma de decisiones de diseño en un entorno de producción intensivo y con tiempo limitado.
`,
    images: [teatrinoCover, teatrino2, teatrino3, teatrino4],
    publishPlatform: 'itchio',
    publishUrl: 'https://paranoid-alien.itch.io/teatrino-ggj2026',
    gameTypes: ['JAM', '2D','top-down']
  },
  {
    id: 'game-4',
    category: 'Game',
    title: 'The Eternal Cleaner',
    summary: 'Videojuego de gestión y acción donde controlas a un conserje espacial en una estación llena de caos.',
    coverImage: eternalCleanerCover,
    youtubeUrl: 'https://youtu.be/cP3oEX1aR58',
    tools: ['Unity', 'C#', 'Substance Painter', 'Blender 3D'],
extendedDetails: `
**The Eternal Cleaner** es un prototipo de videojuego desarrollado durante una **Unity 20th Anniversary Game Jam**, concebido como una experiencia colaborativa de desarrollo rápido en la que el principal objetivo fue fortalecer habilidades de comunicación, organización y trabajo en equipo.

#### Concepto

El jugador asume el papel del último conserje de una estación espacial abandonada, encargado de mantener las instalaciones operativas mientras evita su colapso debido a la acumulación de residuos intergalácticos.

Entre las mecánicas presentes en el prototipo destacan:

- 🧹 Recolección de residuos radioactivos.
- 🔧 Reparación de sistemas averiados.
- ⏳ Desafíos contrarreloj.
- ☢️ Gestión del estado general de la estación espacial.

#### Experiencia de desarrollo

Uno de los principales aprendizajes obtenidos durante el desarrollo fue profundizar en las dinámicas de **trabajo en equipo dentro del contexto de una Game Jam**, coordinando tareas, integrando contenido de distintas disciplinas y tomando decisiones de diseño bajo restricciones de tiempo.

> El proyecto permitió poner en práctica metodologías de desarrollo rápido, comunicación constante y adaptación a cambios durante el proceso creativo.

#### Recursos utilizados

Gran parte de los modelos, texturas y recursos artísticos empleados fueron proporcionados por los organizadores y colaboradores de la propia Game Jam, permitiendo al equipo concentrarse principalmente en la implementación de mecánicas, la iteración del diseño y la construcción de una experiencia jugable funcional en un periodo de desarrollo limitado.
`,
    images: [eternalCleaner1, eternalCleaner2, eternalCleaner3, eternalCleaner4],
    publishPlatform: 'itchio',
    publishUrl: 'https://falquior.itch.io/the-eternal-cleaner',
    gameTypes: ['3d', 'JAM','gestión','Atemporal']
  },
  {
    id: 'game-5',
    category: 'Game',
    title: 'Red Hunt',
    summary: 'Prototipo multijugador local inspirado en juegos asimétricos, desarrollado para explorar networking mediante TCP y arquitectura cliente-servidor.',
    coverImage: redHuntCover,
    youtubeUrl: 'https://youtu.be/Jxvu-wzVO-Q',
    tools: ['Unity', 'C#', 'GitHub','Git','figma'],
extendedDetails: `
**Red Hunt** es un prototipo multijugador local desarrollado con fines de **aprendizaje y experimentación técnica**, enfocado principalmente en la implementación de sistemas de comunicación en red utilizando el protocolo **TCP**.

#### Concepto

Inspirado en experiencias multijugador asimétricas como *Dead by Daylight*, el juego enfrenta a un **Lobo** contra varias **Caperucitas Rojas**.

Mientras el lobo persigue y elimina jugadores, las caperucitas deben:

- 🔍 Buscar pistas distribuidas por el escenario.
- 🏃 Evadir constantemente al cazador.
- 🤝 Cooperar para completar sus objetivos antes de ser atrapadas.

#### Aspectos técnicos

Uno de los principales objetivos del proyecto fue profundizar en conceptos relacionados con el desarrollo de videojuegos en red, prestando especial atención a:

- 🌐 Comunicación mediante protocolo **TCP**.
- 📦 Envío y recepción de paquetes de datos.
- 🔄 Sincronización básica entre clientes.
- 🧩 Arquitectura orientada a sistemas multijugador locales.
- 🛠️ Uso de Git y GitHub para control de versiones.

> Más que un videojuego pensado para ser distribuido y jugado por el público general, este proyecto fue concebido como un espacio de aprendizaje para experimentar con tecnologías de networking y permitir la revisión del código, la estructura del proyecto y las soluciones implementadas.

#### Desarrollo en equipo

El proyecto fue realizado de manera colaborativa, contando con la participación de:

- 🎨 **Katherine Guayazan** — Artista 3D y diseñadora de interfaces.
- 📝 **Elisa Ingilar** — Soporte y apoyo en producción.
- 💻 **Serbew (Sebastián Rincón)** — Desarrollador en Unity, encargado de la programación, integración de sistemas y networking.

#### Proyecto de aprendizaje

Este prototipo representa una aproximación práctica al desarrollo de experiencias multijugador y sirvió como una oportunidad para comprender mejor los desafíos asociados a la comunicación en red, la sincronización de estados y el trabajo colaborativo dentro de un pequeño equipo de desarrollo.
`,
    images: [redHuntCover, redHunt2, redHunt3, redHunt4, redHunt5],
    publishPlatform: 'github',
    publishUrl: 'https://github.com/sebas64mil/red-hunt',
    gameTypes: ['Aprendizaje', 'TCP','3D','Multijugador']
  }
];

export const systemsProjects = [
  // Deja espacio para futura carga de contenido (Efectos visuales, mecánicas, sistemas)
];
