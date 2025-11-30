import React from "react";
import clsx from "clsx";
import Button from "../Buttons/Button.jsx";

import { translations } from "../../Data/translations.js";
import { useLanguage } from "../../Data/LanguageContext.jsx";

export default function ProjectEspecific({
  title,
  description,
  categories = [],
  image,
  floatingIcon: FloatingIcon = null,
  link,
}) {
  const { language } = useLanguage();
  const t = translations[language];

  // ---------- Traducciones dinámicas ----------
  const translatedTitle =
    typeof title === "object" ? title[language] : title;

  const translatedDescription =
    typeof description === "object" ? description[language] : description;

  const translatedCategories =
    typeof categories === "object" &&
    !Array.isArray(categories)
      ? categories[language]
      : categories;

  return (
    <section
      className="w-full h-screen relative text-teal-300 font-['Oxanium']"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Capa degradada */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/90"></div>

      {/* Contenido */}
      <div className="relative h-full flex flex-col justify-end px-2 py-5 gap-4 max-w-7xl mx-auto">
        
        {/* Título + botón */}
        <div className="flex justify-between items-center w-full">
          
          {/* Nombre */}
          <h1 className="text-6xl font-bold">{translatedTitle}</h1>

          {/* Botón acción */}
          <Button
            variant="light"
            size="lg"
            onClick={() => window.open(link, "_blank")}
          >
            {t.projects.button}
          </Button>
        </div>

        {/* Descripción */}
        <p className="text-2xl leading-9 max-w-5xl">
          {translatedDescription}
        </p>

        {/* Categorías */}
        <div className="text-xl flex gap-2">
          <span className="underline">
            {translatedCategories.join(", ")}
          </span>
        </div>

        {/* Icono flotante */}
        {FloatingIcon && (
          <div className="absolute top-4 right-2 bg-slate-950 rounded-4xl p-2">
            {React.cloneElement(FloatingIcon, {
              className: "w-12 h-12 text-teal-300",
            })}
          </div>
        )}
      </div>
    </section>
  );
}
