import React from "react";
import Button from "../../Components/Buttons/Button";
import CountsBattery from "../IconsGame/CountsBattery.jsx";

export default function PowerUp({ 
  name = "Nombre potenciador", 
  amount = 5, 
  description = "Descripcion del potenciador que afectara la jugabilidad del clicker",
  onClick = () => {} // <- recibimos la función de compra
}) {
  return (
    <div
      className="
        w-full px-2 py-1.5
        border-t-2 border-b-2 border-teal-300
        flex flex-col gap-0.5
      "
    >
      {/* 🔹 NOMBRE + ICON + CANTIDAD */}
      <div className="flex justify-between w-full">
        <p className="text-teal-300 font-extrabold text-[14px] font-[Oxanium] leading-5">
          {name}
        </p>

        <div className="flex items-center gap-1">
          <CountsBattery className="w-3.5 h-3.5 text-teal-300 fill-teal-300" />
          <span className="text-teal-300 font-bold text-[14px] font-[Oxanium] leading-5">
            {amount}
          </span>
        </div>
      </div>

      {/* 🔸 DESCRIPCIÓN + BOTÓN */}
      <div className="flex justify-between items-center w-full">
        <p className="w-[175px] text-teal-300 text-[12px] font-[Oxanium] font-normal leading-4">
          {description}
        </p>

        <Button 
          onClick={onClick} // <- ejecuta la compra
          variant="dark" 
          size="sm" 
          glow={false}
        >
          Comprar
        </Button>
      </div>
    </div>
  );
}
