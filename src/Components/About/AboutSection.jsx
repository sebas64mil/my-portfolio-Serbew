import React from "react";
import RoleItem from "./RoleItem";
import SkillBar from "./SkillBar";

import GithubIcon from "../../assets/Icons/GithubIcon.jsx";
import LinkedinIcon from "../../assets/Icons/LinkedinIcon.jsx";
import InstagramIcon from "../../assets/Icons/InstagramIcon.jsx";
import ItchioIcon from "../../assets/Icons/ItchioIcon.jsx";
import DownloadIcon from "../../assets/Icons/DownloadIcon.jsx";

import GameIcon from "../../assets/Icons/GameIcon.jsx";
import VfxIcon from "../../assets/Icons/VfxIcon.jsx";
import ProgrammerIcon from "../../assets/Icons/ProgrammerIcon.jsx";
import UxuiIcon from "../../assets/Icons/UxuiIcon.jsx";

import ComunityIcon from "../../assets/IconsSocial/Socialicons.jsx"; 
import CriticalThinkingIcon from "../../assets/IconsSocial/CriticalThinkingIcon.jsx";
import PrototypeSpeedIcon from "../../assets/IconsSocial/PrototypeSpeedIcon.jsx";
import FocusObjectivesIcon from "../../assets/IconsSocial/FocusObjectivesIcon.jsx";
import CreativityInnovationIcon from "../../assets/IconsSocial/CreativityInnovationIcon.jsx";
import AdaptabilitySpeedIcon from "../../assets/IconsSocial/AdaptabilitySpeedIcon.jsx";
import EmpathyUnderstandingIcon from "../../assets/IconsSocial/EmpathyUnderstandingIcon.jsx";
import PassionateIcon from "../../assets/IconsSocial/PassionateIcon.jsx";

import ProfilePic from "../../assets/Images/FotoPerfil.png";
import CV from "../../assets/Docs/hoja_de_vida_jsrv.pdf";

import { useLanguage } from "../../Data/LanguageContext.jsx";
import { translations } from "../../Data/translations.js";

import Button from "../Buttons/Button.jsx";

export default function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language];

  const actions = [
    { icon: <GithubIcon className="w-5 h-5 text-teal-300"/>, link: "https://github.com/sebas64mil" },
    { icon: <LinkedinIcon className="w-5 h-5 text-teal-300"/>, link: "https://www.linkedin.com/in/juan-sebastian-rincon-villamil-26a38a340/" },
    { icon: <InstagramIcon className="w-5 h-5 text-teal-300"/>, link: "https://www.instagram.com/serbew__/" },
    { icon: <ItchioIcon className="w-5 h-5 text-teal-300"/>, link: "https://serbew.itch.io" },
  ];

  return (
    <section className="w-full bg-slate-950 flex flex-col items-center gap-10 pb-14">

      {/*  🔹 TÍTULO PRINCIPAL */}
      <header className="w-full bg-teal-500 py-6 text-center shadow-teal-400/30 shadow-md">
        <h2 className="text-slate-950 font-['Oxanium'] text-4xl sm:text-5xl md:text-6xl font-bold">
          {t.about.title}
        </h2>
      </header>

      <article className="max-w-[1200px] w-full px-4 md:px-6 lg:px-0 flex flex-col lg:flex-row items-center lg:items-start gap-10">

        {/* 🔹 FOTO */}
        <figure className="flex justify-center w-full lg:w-auto"> 
          <img
            src={ProfilePic}
            alt={`Foto de ${t.about.name}`}
            className="w-full max-w-[350px] sm:max-w-[420px] lg:w-[460px] lg:h-[485px] rounded-2xl shadow-[0_0_8px_#5eead4]"
          />
        </figure>

        {/* 🔹 INFORMACIÓN */}
        <section className="flex-1 flex flex-col gap-5 text-teal-300 font-['Oxanium']">

          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
            {t.about.name}
          </h3>

          <p className="text-sm sm:text-lg md:text-2xl leading-6 sm:leading-7 md:leading-9 opacity-90">
            {t.about.description}
          </p>

          {/* 🔹 BOTONES */}
          <div className="flex flex-wrap gap-3">
            <Button
              variant="light"
              iconPosition="right"
              icon={<DownloadIcon className="w-5 h-5 text-slate-950" />}
              onClick={() => window.open(CV, "_blank", "noopener,noreferrer")}
            >
              {t.about.cvButton}
            </Button>

            {actions.map((item, i) => (
              <Button
                key={i}
                size="sm"
                variant="dark"
                icon={item.icon}
                onClick={() => window.open(item.link, "_blank", "noopener,noreferrer")}
              />
            ))}
          </div>

          {/* 🔹 DATOS RÁPIDOS */}
          <p className="text-base md:text-2xl">
            <strong>{language === "es" ? "Aliniamientos:" : "Alignments:"}</strong> {t.about.alignments}
          </p>

          <p className="text-base md:text-2xl">
            <strong>{language === "es" ? "Nivel:" : "Level:"}</strong> {t.about.level}
          </p>

          {/* 🔹 ROLES (Adaptable a 1 → 2 columnas) */}
          <section aria-labelledby="roles-heading">
            <h4 id="roles-heading" className="text-xl sm:text-2xl md:text-3xl font-bold mt-2">
              {t.about.rolesTitle}
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {t.about.roles.map((role, i) => {
                const IconMap = [<GameIcon />, <VfxIcon />, <ProgrammerIcon />, <UxuiIcon />];
                return <RoleItem key={i} name={role} Icon={IconMap[i]} />;
              })}
            </div>
          </section>

        </section>
      </article>

      {/* 🔹 SKILLS — 1 → 2 → 4 columnas responsive */}
      <section
        aria-label="Skill bars"
        className="max-w-[1250px] w-full px-4 md:px-0
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {t.about.skills.map((skill, i) => {
          const IconMap = [
            <ComunityIcon />,
            <CriticalThinkingIcon />,
            <PrototypeSpeedIcon />,
            <FocusObjectivesIcon />,
            <CreativityInnovationIcon />,
            <AdaptabilitySpeedIcon />,
            <EmpathyUnderstandingIcon />,
            <PassionateIcon />,
          ];
          return <SkillBar key={i} Icon={IconMap[i]} progress={skill.progress} skillTag={skill.name} />;
        })}
      </section>

    </section>
  );
}
