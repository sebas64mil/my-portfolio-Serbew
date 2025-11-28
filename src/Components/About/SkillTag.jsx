import React from "react";
import clsx from "clsx";

export default function SkillTag({ text, visible = false, className = "" }) {
  return (
    <div
      className={clsx(
        "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 py-1 px-3 bg-teal-300 rounded-xl text-slate-950 text-md font-medium font-['Oxanium'] text-center transition-opacity duration-300 inline-block whitespace-nowrap",
        visible ? "opacity-100" : "opacity-0 pointer-events-none",
        className
      )}
    >
      {text}
    </div>
  );
}
