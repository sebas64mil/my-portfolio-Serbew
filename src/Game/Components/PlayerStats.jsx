import React from "react";
import CountsBattery from "../IconsGame/CountsBattery";
import BorderNoise from "../../assets/Images/FondoLight.png";

import { useLanguage } from "../../Data/LanguageContext.jsx"; // <-- import
import { translations } from "../../Data/translations.js";

export default function PlayerStats({
  level = 1,
  totalEnergy = "0/0",
  energyPerClick = 1,
  autoClick = "0/s",
  autoClickBoost = "0/s",       // ← 🔥 nuevo stat
  batteriesCollected = 0
}) {

     const { language } = useLanguage();  // 👈 usado para traducir
   const t = translations[language];     // 👈 acceso rápido


  return (
    <div className="w-fit h-fit flex flex-col items-center gap-3">

      {/* 🔹 NIVEL */}
      <div
        className="w-full h-fit pb-1 flex items-center justify-center rounded-md bg-slate-950"
        style={{
          border: "8px solid transparent",
          borderImage: `url(${BorderNoise}) 30 round`,
          borderRadius: "14px"
        }}
      >
        <p className="text-teal-300 font-[Oxanium] font-bold text-[26px] leading-10">
          {t.fillBatteryGame.level} {level}
        </p>
      </div>

      {/* 🔸 CONTENEDOR DE STATS */}
      <div
        className="w-full px-3 py-4 rounded-md bg-slate-950 flex flex-col gap-2.5"
        style={{
          border: "10px solid transparent",
          borderImage: `url(${BorderNoise}) 30 round`,
          borderRadius: "14px"
        }}
      >
        
<StatItem label={t.fillBatteryGame.stats.totalEnergy} value={totalEnergy} />
<StatItem label={t.fillBatteryGame.stats.energyPerClick} value={energyPerClick} />
<StatItem label={t.fillBatteryGame.stats.autoClickBase} value={autoClick} />
<StatItem label={t.fillBatteryGame.stats.autoClickBoost} value={autoClickBoost} />
<StatItem label={t.fillBatteryGame.stats.generatorsCollected} value={batteriesCollected} />

      </div>
    </div>
  );
}

function StatItem({ label, value }) {
  return (
    <div className="flex justify-between items-center w-full">
      <p className="w-40 text-teal-400 text-[16px] font-[Oxanium] font-semibold">
        {label}
      </p>
      <div className="flex items-center gap-1">
        <span className="text-teal-400 text-[14px] font-[Oxanium]">{value}</span>
        <CountsBattery className="w-5 h-5 fill-teal-400" />
      </div>
    </div>
  );
}
