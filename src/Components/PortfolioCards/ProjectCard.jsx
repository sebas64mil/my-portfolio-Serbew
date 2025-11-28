import React, { useState } from "react";
import clsx from "clsx";

export default function ProjectCard({ onClick, ...rest }) {
  const {
    title = "Nombre Juego",
    description = "Lorem ipsum dolor sit amet consectetur...",
    categories = ["cate1", "cate2"],
    image = "https://placehold.co/345x289",
    icon: TitleIcon = null,
    floatingIcon: FloatingIcon = null,
    status = "normal",
  } = rest;

  const [hovering, setHovering] = useState(false);

  const isDisabled = status === "disabled";
  const isHover =
    (!isDisabled && status === "normal" && hovering) || status === "hover";

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onClick={!isDisabled ? onClick : undefined}
      className={clsx(
        "w-[305px] h-fit relative rounded-lg inline-flex flex-col overflow-hidden transition-shadow duration-300",

        !isDisabled && "cursor-pointer",

        isDisabled
          ? "bg-slate-950 outline-[1.6px] outline-offset-[-1.6px] outline-teal-400 cursor-default"
          : "bg-slate-950",

        isHover && !isDisabled
          ? "shadow-[0px_0px_18px_0px_rgba(94,234,212,1)]"
          : !isDisabled &&
              "outline-[1.6px] outline-offset-[-1.6px] outline-teal-400"
      )}
    >
      {!isDisabled && (
        <img
          className="self-stretch h-[289px] object-cover"
          src={image}
          alt={title}
        />
      )}

      <div
        className={clsx(
          "self-stretch px-3 flex flex-col",
          !isDisabled && "gap-3.5 py-3",
          isDisabled && "justify-center items-start py-3 gap-2 h-fit"
        )}
      >
        <div className="self-stretch inline-flex justify-between items-center">
          <div
            className={clsx(
              "text-xl font-extrabold font-['Oxanium'] leading-8",
              isDisabled ? "text-teal-500" : "text-teal-300"
            )}
          >
            {title}
          </div>

          {TitleIcon && (
            <div className="w-8 h-8 flex items-center justify-center">
              {React.cloneElement(TitleIcon, {
                className: clsx(
                  "w-6 h-6",
                  isDisabled ? "text-teal-500" : "text-teal-300"
                ),
              })}
            </div>
          )}
        </div>

        <div
          className={clsx(
            "self-stretch text-justify text-base font-normal font-['Oxanium'] leading-6",
            "line-clamp-3",
            isDisabled ? "text-teal-500" : "text-teal-300"
          )}
        >
          {description}
        </div>

        <div
          className={clsx(
            "self-stretch text-base font-normal font-['Oxanium'] leading-6",
            "whitespace-normal break-word line-clamp-1",
            isDisabled ? "text-teal-500" : "text-teal-300"
          )}
        >
          <span className="font-bold">Categorias: </span>
          <span className="underline">{categories.join(", ")}</span>
        </div>

        {!isDisabled && FloatingIcon && (
          <div className="absolute top-3 right-3 bg-slate-950 rounded-2xl p-1 flex items-center justify-center">
            {React.cloneElement(FloatingIcon, {
              className: "w-7 h-7 text-teal-300",
            })}
          </div>
        )}
      </div>
    </div>
  );
}
