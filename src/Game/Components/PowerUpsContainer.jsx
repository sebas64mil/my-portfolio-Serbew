import React from "react";
import PowerUp from "./PowerUp";
import BorderNoise from "../../assets/Images/FondoLight.png"; // PNG del borde

import { useLanguage } from "../../Data/LanguageContext.jsx"; // <-- import
import { translations } from "../../Data/translations.js";

export default function PowerUpsContainer({ items = [] }) {

    const { language } = useLanguage();  // 👈 usado para traducir
  const t = translations[language];     // 👈 acceso rápido

  return (
    <div
      className="
        w-fit bg-slate-950  flex flex-col
      "
      style={{
        border: "10px solid transparent",          // grosor del marco
        borderImage: `url(${BorderNoise}) 20 round`, // imagen como borde
        borderRadius: "20px",                        // si quieres esquinas redondas
      }}
    >

      {/* 🔹 ENCABEZADO */}
      <div className="w-full h-14 flex items-center justify-center">
        <h2 className="text-teal-300 font-extrabold text-[20px] font-[Oxanium]">
          {t.fillBatteryGame.powerUps}
        </h2>
      </div>

      {/* 🔸 LISTA DE POWER UPS */}
      <div className="flex flex-col w-full">
        {items.map((p, i) => (
          <PowerUp
            key={i}
            name={p.name}
            description={p.description}
            amount={p.amount}
            onClick={p.buy} // <- ahora cada powerup ejecuta su función

          />
        ))}
      </div>

    </div>
  );
}
