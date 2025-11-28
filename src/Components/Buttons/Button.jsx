import React from "react";
import clsx from "clsx";

export default function Button({
  children,
  variant = "dark",
  size = "sm",
  icon,
  iconPosition = "left",
  glow = true,
  ...props
}) {
  // base styles
  const baseStyles =
    "inline-flex items-center gap-2 font-semibold rounded-lg transition transform active:scale-95 w-fit border-[1.6px]";

  // variantes visuales del botón + borde correspondiente
  const variants = {
    dark:  "bg-slate-950 text-teal-300 border-teal-300",
    light: "bg-teal-300 text-slate-950 border-slate-950",
    ghost: "bg-transparent text-teal-300 border-transparent"
  };

  // tamaños
  const sizes = {
    sm: "text-md px-3 py-1 font-medium",
    lg: "text-2xl px-4 py-2"
  };

  // 🟩 GLOW centrado aplicado SOLO en hover
  const glowStyles = glow && (
    variant === "ghost"
      ? "hover:[text-shadow:0_0_6px_var(--teal-300,#5EEAD4)] shadow-none"
      : "hover:shadow-[0_0_8px_0_var(--teal-300,#5EEAD4)] shadow-none"
  );

  // 🎨 Si el icono trae color propio no lo modificamos
  const hasCustomColor =
    icon?.props?.className?.includes("text-") ||
    icon?.props?.className?.includes("fill-");

  const iconClasses = clsx(
    "w-6 h-6 fill-current",
    !hasCustomColor && (variant === "light" ? "text-slate-900" : "text-teal-300"),
    !hasCustomColor && "dark:text-slate-100"
  );

  const renderIcon = () =>
    icon && React.cloneElement(icon, { className: clsx(iconClasses, icon.props.className) });

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        glowStyles,
        "hover:scale-110" // <- efecto de crecer en hover
      )}
      {...props}
    >
      {icon && iconPosition === "left" && renderIcon()}
      {children}
      {icon && iconPosition === "right" && renderIcon()}
    </button>
  );
}
