import React from "react";
import { useState } from "react";

import SkillTag from "../About/SkillTag.jsx";

import { translations } from "../../Data/translations.js";
import { useLanguage } from "../../Data/LanguageContext.jsx";


import UnityIcon from "../../assets/IconsProjects/UnityIcon.jsx";
import CsharpIcon from "../../assets/IconsSkills/CsharpIcon.jsx";
import JSIcon from "../../assets/IconsSkills/JSIcon.jsx";
import PhaserIcon from "../../assets/IconsSkills/PhaserIcon.jsx";
import ShaderIcon from "../../assets/IconsSkills/ShaderIcon.jsx";
import ParticlesIcon from "../../assets/IconsSkills/ParticlesIcon.jsx";

import FigmaIcon from "../../assets/IconsSkills/FigmaIcon.jsx";
import BlenderIcon from "../../assets/IconsSkills/BlenderIcon.jsx";
import AseSpriteIcon from "../../assets/IconsSkills/AseSpriteIcon.jsx";
import SubstanceIcon from "../../assets/IconsSkills/SubstanceIcon.jsx";

import GithubIcon from "../../assets/Icons/GithubIcon.jsx"; 
import IlustratorIcon from "../../assets/IconsSkills/IlustratorIcon.jsx";
import PhotoshopIcon from "../../assets/IconsSkills/PhotoshopIcon.jsx";
import ReactIcon from "../../assets/IconsSkills/ReactIcon.jsx";
import TailwindIcon from "../../assets/IconsSkills/TailwindIcon.jsx";



export default function SectionHabilities() {

  const { language } = useLanguage();
  const t = translations[language];


  return (
    <section className=" pb-4 w-full text-teal-300 font-['Oxanium'] flex flex-col items-center">
      
      {/* Título */} 
      <div className="w-full py-3 bg-teal-500 flex justify-center items-center">
        <h2 className="text-slate-950 text-5xl font-bold font-['Oxanium']">
        {t.habilities.skills_title}
        </h2>
      </div>

      {/* Contenedor principal */}
      <div className="flex pt-10 flex-wrap justify-center gap-12 max-w-7xl">

        {/* =========================== */}
        {/* COLUMNA 1: DESARROLLO */}
        {/* =========================== */}
        <div className="w-60 p-6 rounded-xl outline-2 outline-teal-300 flex flex-col items-center gap-8 bg-slate-950">
          
          <h3 className="text-4xl font-bold">{t.habilities.skills_dev}</h3>

          {/* Árbol */}
          <div className="flex flex-col items-center">


            {/* Nodo con dos ramas */}
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <SkillNode Icon= {CsharpIcon} label="C#"  />
                <SkillLine />
                <SkillNode Icon= {UnityIcon} label="Unity" />
              </div>

              <div className="flex flex-col items-center">
                <SkillNode Icon= {JSIcon} label="JavaScript" />
                <SkillLine />
                <SkillNode Icon={PhaserIcon} label="Phaser" />
              </div>
            </div>

            {/* Nodo principal */}

            <SkillLine />
            <SkillNode Icon={ShaderIcon} label="Shaders" />

            <SkillLine />
            <SkillNode Icon={ParticlesIcon} label={t.habilities.skills_particles} />

          </div>
        </div>

        {/* =========================== */}
        {/* COLUMNA 2: DISEÑO */}
        {/* =========================== */}
        <div className="w-60 p-6 rounded-xl outline-2 outline-teal-300 flex flex-col items-center gap-8 bg-slate-950">
          
          <h3 className="text-4xl font-bold">{t.habilities.skills_design}</h3>

            {/* Nodo con dos ramas */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <SkillNode Icon= {FigmaIcon} label="Figma"  />
                <SkillLine />
                <SkillNode Icon= {SubstanceIcon} label="Substance" />
              </div>

              <div className="flex flex-col items-center">
                <SkillNode Icon= {BlenderIcon} label="Blender" />
                <SkillLine />
                <SkillNode Icon= {AseSpriteIcon} label="AseSprite" />
              </div>
            </div>

        </div>

        {/* =========================== */}
        {/* COLUMNA 3: COMPLEMENTARIO */}
        {/* =========================== */}
        <div className="w-70 p-6 rounded-xl outline-2 outline-teal-300 flex flex-col items-center gap-8 bg-slate-950">
          
          <h3 className="text-4xl font-bold">{t.habilities.skills_other}</h3>
            {/* Nodo con dos ramas */}
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <SkillNode Icon={PhotoshopIcon} label="Photoshop"/>
                <SkillLine />
                <SkillNode Icon={IlustratorIcon} label="Ilustrator"/>
              </div>

              <div className="flex flex-col items-center">
                <SkillNode Icon={GithubIcon} label="Github" />
                <SkillLine />
                <SkillNode Icon={ReactIcon} label="React" />
                <SkillLine />
                <SkillNode Icon={TailwindIcon} label="Tailwind" />
              </div>
            </div>
        </div>

      </div>
    </section>
  );
}

/* ===============================
   COMPONENTE: NODO DEL ÁRBOL
   =============================== */
function SkillNode({ Icon, label }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="relative p-2 bg-slate-950 rounded-2xl shadow-[0_0_12px_rgba(94,234,212,1)]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {Icon && <Icon className="w-12 h-12 text-teal-300" />}
      
      {label && <SkillTag text={label} visible={hover} />}
    </div>
  );
}

/* ===============================
   COMPONENTE: LÍNEA VERTICAL
   =============================== */
function SkillLine({ height = 40 }) {
  return (
    <svg width="4" height={height} className="my-3">
      <line x1="2" y1="0" x2="2" y2={height} stroke="#5EEAD4" strokeWidth="4" />
    </svg>
  );
}
