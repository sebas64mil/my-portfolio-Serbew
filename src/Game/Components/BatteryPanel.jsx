import MoreBatery from "../IconsGame/MoreBattery.jsx";
import BatteryEmpty from "../../assets/Images/BatteryEmpty.png"; 
import BorderNoise from "../../assets/Images/FondoLight.png";

import { useLanguage } from "../../Data/LanguageContext.jsx"; // <-- import
import { translations } from "../../Data/translations.js";

export default function BatteryPanel({
  title = "Fill Battery",
  image = BatteryEmpty,
  onClick = () => {} // función de clic pasada desde el padre
}) {

     const { language } = useLanguage();  // 👈 usado para traducir
   const t = translations[language];     // 👈 acceso rápido

  return (
    <div className="flex flex-col items-center gap-5">

      {/* 🔥 TITULO CON BORDE NOISE */}
      <div
        className="px-3 py-2 bg-slate-950"
        style={{
          border: "8px solid transparent",
          borderImage: `url(${BorderNoise}) 30 round`,
          borderRadius: "14px"
        }}
      >
        <h2 className="text-4xl text-teal-300 font-[Oxanium] font-bold underline text-center">
          {t.fillBatteryGame.rechargeEnergy}
        </h2>
      </div>

      {/* 🔋 CONTENEDOR DE BATERIA */}
      <div
        className="w-[223px] h-[241px] bg-slate-950 flex items-center justify-center"
        style={{
          border: "10px solid transparent",
          borderImage: `url(${BorderNoise}) 30 round`,
          borderRadius: "14px"
        }}
      >
        <img src={image} alt="Battery" className="h-[200px] object-contain" />
      </div>

      {/* ⚡ BOTON CON BORDE NOISE */}
      <button
        onClick={onClick} // <- ahora ejecuta addEnergy
        className="
          w-[70px] h-[70px]
          flex items-center justify-center
          bg-slate-950 rounded-lg p-2
          transition-transform duration-150
          hover:scale-110 active:scale-95
        "
        style={{
          border: "8px solid transparent",
          borderImage: `url(${BorderNoise}) 30 round`,
          borderRadius: "12px"
        }}
      >
        <MoreBatery className="w-9 h-9 fill-teal-300" />
      </button>

    </div>
  );
}
