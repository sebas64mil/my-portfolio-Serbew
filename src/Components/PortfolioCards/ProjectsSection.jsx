import React, { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard.jsx";
import ChevronLeft from "../../assets/IconsProjects/ChevronLeft.jsx";
import ChevronRight from "../../assets/IconsProjects/ChevronRight.jsx";

import { translations } from "../../Data/translations.js";
import { useLanguage } from "../../Data/LanguageContext.jsx";

export default function ProjectsSection({ projects = [], onSelectProject }) {
  const { language } = useLanguage();
  const t = translations[language];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
  );

  const total = projects.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prev = () => setCurrentIndex((prev) => (prev - 1 + total) % total);
  const next = () => setCurrentIndex((prev) => (prev + 1) % total);

  const getVisibleIndexes = () => {
    if (isMobile) return [currentIndex];

    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;
    return [prevIndex, currentIndex, nextIndex];
  };

  const visible = getVisibleIndexes();

  return (
    <section className="w-full py-8 flex flex-col items-center text-teal-300 font-['Oxanium']">
      <h2 className="text-6xl font-bold mb-16">{t.projects.title}</h2>

<div className="w-full max-w-7xl px-6 flex justify-between items-center gap-4 lg:gap-8">

        <button
          onClick={prev}
          className="p-2 flex items-center justify-center hover:scale-160 transition"
        >
          <ChevronLeft className="text-teal-300 active:text-teal-500 w-8 h-8" />
        </button>

        {/* CARDS */}
<div
  className="
    flex items-center justify-center 
    gap-0        /* Mobile (0–767px) */
    md:gap-0     /* Small tablet (768–1023px) */
    lg:gap-2     /* Tablet grande (1024–1279px) */
    xl:gap-12    /* Desktop (1280px+) */
    w-full
  "
>

          {visible.map((projectIndex, i) => {
            const project = projects[projectIndex];
            const isCenter = visible.length === 1 ? true : i === 1;

            const scale = isCenter
              ? "scale-100 opacity-100"
              : "scale-90 opacity-50";

            return (
              <div
                key={projectIndex}
                className={`transition-all duration-300 ${scale}`}
              >
                <ProjectCard
                  {...project}
                  title={project.title[language]}
                  description={project.description[language]}
                  categories={project.categories[language]}
                  status={isCenter ? "normal" : "disabled"}
                  onClick={() => onSelectProject(project)}
                />
              </div>
            );
          })}
        </div>

        <button
          onClick={next}
          className="p-2 flex items-center justify-center hover:scale-160 transition"
        >
          <ChevronRight className="text-teal-300 active:text-teal-500 w-8 h-8" />
        </button>

      </div>
    </section>
  );
}
