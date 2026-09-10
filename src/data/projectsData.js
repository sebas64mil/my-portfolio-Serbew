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

// Imports para Juego 6: El caso de Chomping Street
import chompingStreetCover from '../assets/Images/Juego5/ElCasoCover.png';
import chompingStreet2 from '../assets/Images/Juego5/ElCaso1.jpg';
import chompingStreet3 from '../assets/Images/Juego5/ElCaso2.jpg';
import chompingStreet4 from '../assets/Images/Juego5/ElCaso3.jpg';
import chompingStreet5 from '../assets/Images/Juego5/ElCaso4.jpg';

// Imports para Proyecto Web: El Barrio
import AndesPage1 from '../assets/Images/AndesPages/Andes1.png'; 
import AndesPage2 from '../assets/Images/AndesPages/Andes2.png'; 
import AndesPage3 from '../assets/Images/AndesPages/Andes3.png'; 
import AndesPage4 from '../assets/Images/AndesPages/Andes4.png'; 

export const webProjects = [
{
  id: 'web-1',
  category: 'Web',
  title: 'El Barrio: Una Ciencia de Vivir Juntos',
  summary: 'Landing page interactiva para presentar experiencias de realidad aumentada, audiovisuales e interactivas desarrolladas en conjunto por la Universidad de San Buenaventura y la Universidad de los Andes.',
  coverImage: AndesPage3,
  youtubeUrl: null,
  tools: ['WordPress', 'Figma'],
  extendedDetails: `
**El Barrio: Una Ciencia de Vivir Juntos** es una **landing page interactiva** desarrollada como parte de un convenio entre la **Universidad de San Buenaventura** y la **Universidad de los Andes**, cuyo objetivo fue presentar y reunir diferentes experiencias digitales y audiovisuales realizadas en conjunto.

La página funciona como un espacio central para dar a conocer los diferentes proyectos desarrollados durante el convenio, permitiendo a los visitantes explorar las experiencias de una manera visual, organizada y accesible.

#### Experiencias presentadas

La landing page reúne diferentes tipos de contenidos y experiencias desarrolladas dentro del proyecto:

- 📱 **Cinco experiencias de Realidad Aumentada (AR).**
- 🎬 **Cortometrajes** desarrollados durante el proyecto.
- 🎥 **Videos y piezas audiovisuales.**
- 🖱️ **Experiencias interactivas y contenidos digitales.**
- 🌐 Diferentes propuestas desarrolladas a partir de la colaboración entre ambas universidades.

Uno de los componentes principales de la página fue la presentación de las **experiencias de realidad aumentada**, permitiendo que los visitantes conocieran las diferentes propuestas y accedieran a ellas desde un mismo espacio.

#### Diseño y desarrollo

El proyecto fue planteado como una **landing page enfocada en la presentación de experiencias**, por lo que el diseño buscó priorizar la organización del contenido, la navegación y el impacto visual de los diferentes proyectos.

El proceso de diseño se realizó utilizando **Figma**, definiendo la estructura visual, la distribución de los contenidos y la forma en que las diferentes experiencias serían presentadas antes de llevarlas a la implementación web mediante **WordPress**.

La página fue estructurada para que cada experiencia pudiera tener su propio espacio dentro del sitio, manteniendo una identidad visual coherente mientras se presentaban formatos de contenido diferentes, como experiencias AR, videos y cortometrajes.

#### Mi participación

Participé como **co-creador de la landing page**, involucrándome directamente en el proceso de conceptualización, diseño y desarrollo de la plataforma junto con el equipo del proyecto.

Mi trabajo estuvo enfocado en transformar la idea de reunir las diferentes experiencias del convenio en una **plataforma web funcional y visualmente atractiva**, trabajando con **Figma** para la propuesta y organización visual, y **WordPress** para la implementación de la landing page.
`,
  images: [AndesPage1, AndesPage2, AndesPage4],
  publishPlatform: 'WordPress',
  publishUrl: 'https://elbarriopre.uniandes.edu.co/#Seccion',
  gameTypes: ['AR', 'Diseño Web', 'WordPress', 'Landing Page']
},
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
  },


{
  id: 'game-6',
  category: 'Game',
  title: 'El Caso de Chomping Street',
  summary: 'Aventura detectivesca 2D desarrollada para la Sanda Game Jam 2026, donde deberás explorar una misteriosa mansión, resolver minijuegos y reunir fragmentos para descubrir qué fue robado.',
  coverImage: chompingStreetCover,
  youtubeUrl: 'https://youtu.be/oQXgYy-Fhj4?si=pVw-XRwC60DS53fI',
  tools: ['Unity', 'C#', 'GitHub', 'Git'],

extendedDetails: `

**El Caso de Chomping Street** es un videojuego **2D de aventura y misterio**, desarrollado en equipo durante la **Sanda Game Jam 2026** bajo la temática **"Fragmentos"**, entre el 19 y el 23 de agosto.

El juego combina exploración, investigación y minijuegos, llevando al jugador a investigar una misteriosa mansión para descubrir qué fue robado.

#### Historia

La historia sigue a **Luis**, un detective que llega a la mansión del **Sr. Rodríguez** tras recibir un reporte de robo. Para descubrir qué ocurrió, deberá explorar la mansión, encontrar pistas y reunir diferentes **fragmentos** que le permitirán desbloquear la computadora del Sr. Rodríguez y acceder a la información oculta.

> Explorá la mansión, resolvé divertidos minijuegos y seguí las pistas para descubrir qué ocurrió.

#### Jugabilidad

- 🕵️ **Exploración** e investigación de la mansión.
- 🔎 **Búsqueda de pistas** para avanzar en el caso.
- 🧩 **Minijuegos** relacionados con la investigación.
- 🧩 **Recolección de fragmentos**.
- 💻 **Desbloqueo de la computadora** del Sr. Rodríguez.
- 🖱️ Interacción mediante **click izquierdo**.

#### Mi participación

Participé como **Tech Artist**, trabajando en los aspectos técnicos relacionados con la integración y presentación visual del juego dentro de Unity.

Mi rol consistió en servir como puente entre las necesidades artísticas y la implementación técnica, apoyando la integración de los recursos creados por el equipo y la resolución de problemas técnicos durante el desarrollo.

#### Equipo

- 🎨 **Arte 2D y gestión:** Candela Llorens.
- 💻 **Programación:** Andrés Flórez.
- 🛠️ **Tech Art:** Serbew.
- 🖼️ **UI Art:** BlueWakon.
- 🧠 **Game Design:** Todo el equipo.

El proyecto fue desarrollado bajo las restricciones de tiempo de una **Game Jam**, priorizando la creación de una experiencia jugable y completa dentro del plazo establecido.

`,

  images: [chompingStreet2, chompingStreet3, chompingStreet4, chompingStreet5],
  publishPlatform: 'itchio',
  publishUrl: 'https://candellorens.itch.io/el-caso-de-chomping-street',
  gameTypes: ['Minijuegos', 'Jam', '2D', 'Sanda']
}


];

export const systemsProjects = [
  // Deja espacio para futura carga de contenido (Efectos visuales, mecánicas, sistemas)
];
