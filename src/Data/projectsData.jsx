import UnityIcon from "../assets/IconsProjects/UnityIcon.jsx";
import TechGameIcon from "../assets/IconsProjects/TechGameIcon.jsx";
import MagicGameIcon from "../assets/IconsProjects/MagicGameIcon.jsx";

import ImageGame1 from "../assets/Images/CristalMazmorra.png";
import ImageGame2 from "../assets/Images/LadoDigital.png";
import ImageGame3 from "../assets/Images/TheEternalCleaner.png";

export const projectsData = [
  {
    title: {
      es: "Cristales de la Mazmorra",
      en: "Cristales de la Mazmorra",
    },
    description: {
      es: `La historia gira en torno a un joven mago que recibe una misión: adentrarse en una mazmorra para recolectar unos cristales necesarios para un hechizo importante.
De manera irónica, en este prototipo aún no se llega a entrar a la mazmorra, pero deja la base lista por si en el futuro se desea continuar.`,
      en: `The story follows a young wizard who receives a mission: enter a dungeon to collect crystals needed for an important spell. Ironically, in this prototype you don’t actually enter the dungeon yet, but the base is ready for future continuation.`,
    },
    categories: {
      es: ["Puzzle"],
      en: ["Puzzle"],
    },
    image: ImageGame1,
    icon: <MagicGameIcon />,
    floatingIcon: <UnityIcon />,
    link: "https://serbew.itch.io/cristales-de-la-mazmorra",
  },

  {
    title: {
      es: "Lado Digital",
      en: "Lado Digital",
    },
    description: {
      es: "Eres una chica resultado de un experimento que salió mal: ahora puedes entrar y salir de dispositivos electrónicos. En el mundo físico (3D en primera persona) deberás moverte con sigilo, pero dentro de los dispositivos (2D) te enfrentarás a retos de plataformas. Asciende por los pisos del laboratorio, descubre qué te hicieron y encuentra la forma de escapar.",
      en: "You are a girl born from a failed experiment: now you can enter and exit electronic devices. In the physical world (3D first person) you must move stealthily, but inside the devices (2D) you will face platforming challenges. Climb the floors of the lab, discover what they did to you, and find a way to escape.",
    },
    categories: {
      es: ["Sigilo", "Plataformas2D", "PixelArt"],
      en: ["Stealth", "2D Platforms", "PixelArt"],
    },
    image: ImageGame2,
    icon: <TechGameIcon />,
    floatingIcon: <UnityIcon />,
    link: "https://serbew.itch.io/ladodigitalv1",
  },

  {
    title: {
      es: "The Eternal Cleaner",
      en: "The Eternal Cleaner",
    },
    description: {
      es: `Los Cucarabot son robots con una misión: deshacerse de la basura en "La fábrica", un lugar ajeno al tiempo que se mantiene eternamente en operación — un trabajo que realizan hasta oxidarse y ser reemplazados.`,
      en: `The Cucarabot are robots with a mission: to get rid of trash in "The Factory", a timeless place that runs eternally — a job they perform until they rust and are replaced.`,
    },
    categories: {
      es: ["Aventura"],
      en: ["Adventure"],
    },
    image: ImageGame3,
    icon: <TechGameIcon />,
    floatingIcon: <UnityIcon />,
    link: "https://falquior.itch.io/the-eternal-cleaner",
  },
];

