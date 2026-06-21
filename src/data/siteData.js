// ============================================================
// PLANTILLA DE DATOS DEL PORTAFOLIO
// Modifica este archivo para cambiar toda la información del sitio.
// ============================================================
import cvPdf from '../assets/Docs/hoja_de_vida_jsrv.pdf'; 

import {
  FaUnity,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaVuejs,
  FaLayerGroup, 
  FaMagic,
  FaGithub 
} from 'react-icons/fa';

import {
  TbBrandCSharp,
  TbBrandBlender,
  TbBrandThreejs ,
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandVite,
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,

} from 'react-icons/tb';


import { RiTailwindCssFill } from "react-icons/ri";

import { MdSportsEsports } from "react-icons/md";

import { SiVrchat,
          SiDavinciresolve 
 } from "react-icons/si";

import AsepriteIcon from '../Components/IconsExcepcion/AsepriteIcon.jsx';
import SubstancePainterIcon from '../Components/IconsExcepcion/SubstanceIcon.jsx';

export const siteData = {
  // --- Colores del Tema Centralizados ---
  theme: {
    primary: '#00f0ff',     // Color Primario (Cian)
    secondary: '#d94cff',   // Color Secundario (Magenta)
    bg: '#0a0a0c',          // Color de Fondo
    line: '#1a1a22',        // Color de Líneas de Cuadrícula
  },

  // --- Identidad ---
  nickname: 'Serbew',
  slogan: 'De bocetos a proyectos',
  heroDescription: 'Bienvenido/a a mi portafolio, disfruta del recorrido.',

  // --- Sobre mí ---
  // aboutDescription: array de segmentos de texto.
  // Cada segmento puede ser:
  //   { text: 'texto plano' }                        → texto normal
  //   { text: 'término', bold: true, color: 'primary' }   → negrilla cian
  //   { text: 'término', bold: true, color: 'secondary' }  → negrilla magenta
  //   { text: 'término', bold: true, color: 'text' }       → negrilla blanca
  aboutTitle: 'Serbew',
  aboutDescription: [
    { text: 'Ingeniero Multimedia',          bold: true,  color: 'primary'   },
    { text: ' especializado en ' },
    { text: 'desarrollo de videojuegos',     bold: true,  color: 'primary'   },
    { text: ', ' },
    { text: 'desarrollo web',                bold: true,  color: 'primary'   },
    { text: ' y ' },
    { text: 'arte técnico',                  bold: true,  color: 'secondary' },
    { text: '. Me apasiona transformar ideas en ' },
    { text: 'experiencias interactivas',     bold: true,  color: 'primary'   },
    { text: ', combinando ' },
    { text: 'programación',   },
    { text: ', ' },
    { text: 'diseño de sistemas',  },
    { text: ', ' },
    { text: 'efectos visuales',              bold: true,  color: 'secondary' },
    { text: ' y ' },
    { text: 'herramientas digitales',   },
    { text: ' para llevar un concepto desde sus primeros ' },
    { text: 'bocetos',                       bold: true,  color: 'primary'   },
    { text: ' hasta un ' },
    { text: 'producto funcional y atractivo', bold: true, color: 'primary'   },
    { text: '. Disfruto explorar nuevas ' },
    { text: 'tecnologías',                   bold: true,  color: 'secondary' },
    { text: ', crear ' },
    { text: 'soluciones innovadoras', },
    { text: ' y desarrollar proyectos que integren ' },
    { text: 'creatividad',                   bold: true,  color: 'primary'   },
    { text: ' y ' },
    { text: 'tecnología',                    bold: true,  color: 'primary'   },
    { text: ' de manera significativa.' },
  ],

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
  { name: 'Unity', icon: FaUnity },
  { name: 'C#', icon: TbBrandCSharp },
  { name: 'Game Design', icon: MdSportsEsports },
  { name: 'UI Systems', icon: FaLayerGroup },
  { name: 'VFX', icon: FaMagic },
  { name: 'VRChat', icon: SiVrchat },
]
    },
    webdev: {
      label: 'Web Dev',
      core: 'Desarrollo Web',
skills: [
  { name: 'React', icon: FaReact },
  { name: 'JavaScript', icon: TbBrandJavascript },
  { name: 'Three.js', icon: TbBrandThreejs  },
  { name: 'Tailwind', icon: RiTailwindCssFill },
  { name: 'HTML', icon: TbBrandHtml5 },
  { name: 'CSS', icon: TbBrandCss3 },
  { name: 'Vite', icon: TbBrandVite },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Vue.js', icon: FaVuejs },
],
    },
    extras: {
      label: 'Extras',
      core: 'Herramientas Extra',
      skills: [
        { name: 'Photoshop', icon: TbBrandAdobePhotoshop },
        { name: 'Illustrator', icon: TbBrandAdobeIllustrator },
        { name: 'Figma', icon: FaFigma },
        { name: 'Git', icon: FaGitAlt },
        { name: 'GitHub', icon: FaGithub },
        { name: 'Blender 3D', icon: TbBrandBlender },
        { name: 'Aseprite', icon: AsepriteIcon },
        { name: 'Substance Painter', icon: SubstancePainterIcon },
        { name: 'DaVinci Resolve', icon: SiDavinciresolve },
      ],
    },
  },

  // --- Footer ---
  footerText: 'Serbew',
  footerTagline: 'Proyectos y bocetos',
socialLinks: [
    {
      label: 'GitHub',
      url: 'https://github.com/sebas64mil',
    },
    {
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/juan-sebastian-rincon-villamil-26a38a340/',
    },
    {
      label: 'Instagram',
      url: 'https://instagram.com/serbew__/',
    },
    {
      label: 'Itch.io',
      url: 'https://serbew.itch.io',
    },
    {
      label: 'CV',
      url: cvPdf,
    },
  ],
};
