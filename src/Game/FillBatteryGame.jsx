import React, { useState, useEffect, useRef } from "react";
import PowerUpsContainer from "./Components/PowerUpsContainer";
import PlayerStats from "./Components/PlayerStats";
import BatteryPanel from "./Components/BatteryPanel";

import BatteryEmpty from "../assets/Images/BatteryEmpty.png"; 
import Battery25 from "../assets/Images/Baterry25percent.png"; 
import Battery50 from "../assets/Images/Baterry50percent.png";
import Battery75 from "../assets/Images/Baterry75percent.png";
import Battery100 from "../assets/Images/Baterry100percent.png";

import SectionPowerUps from "../assets/Images/SectionPowerUps.png";
import SeccionBatery from "../assets/Images/SeccionBaterry.png";
import seccionStats from "../assets/Images/SeccionStats.png";

import ClickSound from "../assets/SoundsGame/Click.mp3";
import SoundComplete from "../assets/SoundsGame/CompleteLevel.mp3";

import { useLanguage } from "../Data/LanguageContext.jsx"; // <-- import
import { translations } from "../Data/translations.js";

// 🎵 Crear objetos de audio sin reproducirse todavía
const clickAudio = new Audio(ClickSound);
const levelUpAudio = new Audio(SoundComplete);

// Evita que sigan reproduciéndose si se triggeran rápido
clickAudio.preload = "auto";
levelUpAudio.preload = "auto";

export default function FillBatteryGame() {

    const { language } = useLanguage();  // 👈 usado para traducir
  const t = translations[language];     // 👈 acceso rápido


  // Estados
  const [energy, setEnergy] = useState(0);
  const [maxEnergy, setMaxEnergy] = useState(1);
  const [multiplier, setMultiplier] = useState(1);
  const [generators, setGenerators] = useState(0);
  const [genSpeed, setGenSpeed] = useState(6000);
  const [fullVisible, setFullVisible] = useState(false);
  const [level, setLevel] = useState(1);

  const [multiplierCost, setMultiplierCost] = useState(5);
  const [generatorCost, setGeneratorCost] = useState(8);

  // 🔥 NUEVO ESTADO DE MEJORA DE AUTOCLICK
  const [autoGenMultiplier, setAutoGenMultiplier] = useState(1);
  const [autoGenCost, setAutoGenCost] = useState(10);

  // 🔒 CONTROL PARA EVITAR DOBLE LEVEL UP
  const isLevelingRef = useRef(false);

  const MIN_GEN_SPEED = 500; // 0.5s de mínimo
const SPEED_REDUCTION = 0.95; // reduce 5% por generador


  // -------------------------------
  // 🔋 SUBIR NIVEL
  // -------------------------------
  const handleLevelUp = () => {
    if (isLevelingRef.current) return;
    isLevelingRef.current = true;

    levelUpAudio.currentTime = 0;
levelUpAudio.play();


    setFullVisible(true);

    setTimeout(() => {
      setEnergy(0);
      setMaxEnergy(prev => prev * 2);
      setLevel(prev => prev + 1);

      setFullVisible(false);
      isLevelingRef.current = false;
    }, 2000);
  };

  // -------------------------------
  // 🔘 CLICK MANUAL
  // -------------------------------
  const addEnergy = () => {
    if (fullVisible || isLevelingRef.current) return;

      clickAudio.currentTime = 0;
  clickAudio.play();

    setEnergy(prev => {
      if (prev >= maxEnergy) return prev;
      const newEnergy = prev + multiplier;

      if (newEnergy >= maxEnergy) {
        handleLevelUp();
        return maxEnergy;
      }

      return newEnergy;
    });
  };

  // -------------------------------
  // ⚙️ GENERADORES AUTOMÁTICOS
  // -------------------------------
  useEffect(() => {
    if (generators === 0) return;

    const interval = setInterval(() => {
      if (fullVisible || isLevelingRef.current) return;

      setEnergy(prev => {
        if (prev >= maxEnergy) return prev;

        const amount = generators * autoGenMultiplier; // 🔥 USO DEL MULTIPLICADOR

        const newEnergy = prev + amount;

        if (newEnergy >= maxEnergy) {
          handleLevelUp();
          return maxEnergy;
        }

        return newEnergy;
      });
    }, genSpeed);

    return () => clearInterval(interval);
  }, [generators, genSpeed, autoGenMultiplier, maxEnergy, fullVisible]);

  // -------------------------------
  // 🖼 IMAGEN DE LA BATERÍA
  // -------------------------------
  const percent = (energy / maxEnergy) * 100;

  const batteryImage =
    fullVisible ? Battery100 :
    percent >= 75 ? Battery75 :
    percent >= 50 ? Battery50 :
    percent >= 25 ? Battery25 :
    BatteryEmpty;

  // -------------------------------
  // 🔥 POWER UPS
  // -------------------------------
  const buyMultiplier = () => {
    if (energy < multiplierCost || multiplier >= 10) return;

    clickAudio.currentTime = 0;
clickAudio.play();


    setEnergy(prev => prev - multiplierCost);
    setMultiplier(m => m + 1);
    setMultiplierCost(c => Math.floor(c * 2.5));
  };

  const buyGenerator = () => {
    if (energy < generatorCost) return;

    clickAudio.currentTime = 0;
clickAudio.play();


    setEnergy(prev => prev - generatorCost);
    setGenerators(g => g + 1);
    setGeneratorCost(c => Math.floor(c * 3.5));
      // 🔥 Reducción de velocidad del ciclo
  setGenSpeed(prev => Math.max(MIN_GEN_SPEED, prev * SPEED_REDUCTION));
  };

  // 🔥 NUEVA MEJORA — AUTOCLICK MULTIPLIER
  const buyAutoGenBoost = () => {
    if (energy < autoGenCost) return;

    clickAudio.currentTime = 0;
clickAudio.play();


    setEnergy(prev => prev - autoGenCost);
    setAutoGenMultiplier(m => m + 1); // suma x1
    setAutoGenCost(c => Math.floor(c * 5.8));
  };

  const autoClickTime = (genSpeed / 1000).toFixed(1);

  // Listado de mejoras dinámicas
  const powerUps = [
    {
      name: t.fillBatteryGame.powerUpsList.multiplier,
      amount: `x${multiplier}`,
      description: `${t.fillBatteryGame.powerUpsList.multiplierDesc} ${multiplierCost}`,
      buy: buyMultiplier
    },
    multiplier >= 3 && {
      name: t.fillBatteryGame.powerUpsList.generator,
      amount: generators,
      description: `${t.fillBatteryGame.powerUpsList.generatorDesc} ${generatorCost}`,
      buy: buyGenerator
    },
    generators >= 2 && {
      name: t.fillBatteryGame.powerUpsList.autoBoost,
      amount: `x${autoGenMultiplier}`,
      description: `${t.fillBatteryGame.powerUpsList.autoBoostDesc} ${autoGenCost}`,
      buy: buyAutoGenBoost
    }
  ].filter(Boolean);

  return (
    <div
      className="
        w-full h-auto md:h-[471px]
        flex flex-col md:flex-row
        justify-center items-center
        bg-linear-to-b
        from-[#334F90] via-[#203159] to-[#0F172A]
        border-4 border-teal-300
        rounded-md overflow-hidden
      "
    >
      {/* POWER UPS */}
      <div
        className="w-full md:flex-1 h-full py-4 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${SectionPowerUps})` }}
      >
        <PowerUpsContainer items={powerUps} />
      </div>

      {/* BATERÍA */}
      <div
        className="w-full md:flex-1 h-full md:py-4 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${SeccionBatery})` }}
      >
        <BatteryPanel title="Recargar Energía" image={batteryImage} onClick={addEnergy} />
      </div>

      {/* STATS */}
      <div
        className="w-full md:flex-1 h-full py-4 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${seccionStats})` }}
      >
        <PlayerStats
          level={level}
          totalEnergy={`${energy}/${maxEnergy}`}
          energyPerClick={multiplier}
          autoClick={`${generators} /ciclo (${autoClickTime}s)`}
          autoClickBoost={`x${autoGenMultiplier}`}
          batteriesCollected={generators}
        />
      </div>
    </div>
  );
}
