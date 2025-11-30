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
        "h-fit relative rounded-lg inline-flex flex-col overflow-hidden transition-shadow duration-300",

        // Mobile: 305px
        // Tablet (lg): 260px
        // Desktop (xl): 305px
        "w-[305px] lg:w-[260px] xl:w-[305px]",

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
          className={clsx(
            "self-stretch object-cover",

            // Mobile: 289px
            // Tablet: más pequeño
            // Desktop: vuelve a grande
            "h-[289px] lg:h-60 xl:h-[289px]"
          )}
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
              "font-extrabold font-['Oxanium'] leading-8",
              // Mobile → grande, Tablet → mediano, Desktop → grande
              "text-xl lg:text-lg xl:text-xl",
              isDisabled ? "text-teal-500" : "text-teal-300"
            )}
          >
            {title}
          </div>

          {TitleIcon && (
            <div
              className={clsx(
                "flex items-center justify-center",
                "w-8 h-8 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
              )}
            >
              {React.cloneElement(TitleIcon, {
                className: clsx(
                  "w-6 h-6 lg:w-5 lg:h-5 xl:w-6 xl:h-6",
                  isDisabled ? "text-teal-500" : "text-teal-300"
                ),
              })}
            </div>
          )}
        </div>

        <div
          className={clsx(
            "self-stretch text-justify font-normal font-['Oxanium'] leading-6",
            "line-clamp-3",
            "text-base lg:text-sm xl:text-base",
            isDisabled ? "text-teal-500" : "text-teal-300"
          )}
        >
          {description}
        </div>

        <div
          className={clsx(
            "self-stretch font-normal font-['Oxanium'] leading-6 whitespace-normal break-word",
            "text-base lg:text-sm xl:text-base",
            "line-clamp-1",
            isDisabled ? "text-teal-500" : "text-teal-300"
          )}
        >
          <span className="font-bold">Categorias: </span>
          <span className="underline">{categories.join(", ")}</span>
        </div>

        {!isDisabled && FloatingIcon && (
          <div
            className={clsx(
              "absolute bg-slate-950 rounded-2xl p-1 flex items-center justify-center",
              "top-3 right-3 lg:top-2 lg:right-2"
            )}
          >
            {React.cloneElement(FloatingIcon, {
              className:
                "text-teal-300 w-7 h-7 lg:w-6 lg:h-6 xl:w-7 xl:h-7",
            })}
          </div>
        )}
      </div>
    </div>
  );
}
