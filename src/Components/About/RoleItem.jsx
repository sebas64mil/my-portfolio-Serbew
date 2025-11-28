import React from "react";
import clsx from "clsx";

/**
 * RoleItem
 * Props:
 *  - name: string (nombre del role)
 *  - Icon: React element (opcional)
 *  - className: string (clases tailwind adicionales)
 */
export default function RoleItem({ name, Icon = null, className = "" }) {
  return (
    <article className={clsx("flex items-center gap-1", className)}>
      <h3 className="text-teal-300 text-lg leading-6 font-['Oxanium']">
        {name}
      </h3>
      <div
        className="min-w-12 w-12 h-12 flex items-center justify-center rounded-md "
        aria-hidden="true"
      >
        {Icon ? (
          // Si pasas un icon (SVG como componente), respetará su clase
          React.cloneElement(Icon, {
            className: clsx(
              "w-7 h-7 fill-current text-teal-300",
              Icon.props?.className
            ),
          })
        ) : (
          <div className="w-7 h-7 bg-teal-300 rounded" />
        )}
      </div>
    </article>
  );
}
