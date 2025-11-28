import React, { useState } from "react";
import clsx from "clsx";
import SkillTag from "./SkillTag";

export default function SkillBar({
  label = "",
  Icon = null,
  progress = 75,
  width = "w-[220px]",
  skillTag = "",
  className = "",
}) {
  const [hovered, setHovered] = useState(false);
  const safeProgress = Math.max(0, Math.min(100, Math.round(progress)));

  return (
    <div
      className={clsx("flex items-center gap-1 relative", className)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icono */}
      <div className="min-w-10 w-10 h-10 flex items-center justify-center rounded-md">
        {Icon ? (
          React.cloneElement(Icon, {
            className: clsx("w-8 h-8 fill-current text-teal-300", Icon.props?.className),
          })
        ) : (
          <div className="w-5 h-5 bg-teal-300 rounded" />
        )}
      </div>

      {/* Barra + SkillTag */}
      <div className="flex flex-col relative">
        {/* SkillTag encima */}
        {skillTag && <SkillTag text={skillTag} visible={hovered} />}

        {label && (
          <div className="text-teal-300 text-base font-['Oxanium'] mb-2">{label}</div>
        )}

        <div className={clsx("relative bg-teal-900 rounded-full h-5 overflow-hidden", width)}>
          <div
            className="absolute left-0 top-0 h-full bg-teal-300 rounded-full transition-all duration-300"
            style={{ width: `${safeProgress}%` }}
            role="progressbar"
            aria-valuenow={safeProgress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={label || "skill progress"}
          />
        </div>
      </div>
    </div>
  );
}
