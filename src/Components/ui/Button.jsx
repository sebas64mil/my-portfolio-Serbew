import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Componente de Botón Reutilizable con el efecto "fancy" estilo blueprint/sketch.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - Texto o contenido interno del botón.
 * @param {string} [props.to] - Ruta de React Router (si navega internamente).
 * @param {string} [props.href] - Enlace/ancla HTML nativo (si es enlace externo o scroll local).
 * @param {function} [props.onClick] - Función al hacer click.
 * @param {'fancy-primary'|'fancy-secondary'} [props.variant='fancy-primary'] - Variante de color (cian o magenta).
 * @param {'sm'|'md'|'lg'} [props.size='md'] - Tamaño del botón.
 * @param {string} [props.className=''] - Clases adicionales de CSS.
 */
export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'fancy-primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) {
  const baseClass = `btn-${variant} btn-${size} ${disabled ? 'disabled opacity-40 cursor-not-allowed pointer-events-none' : ''} ${className}`;

  const content = (
    <>
      <span className="top-key" />
      <span className="btn-text">{children}</span>
      <span className="bottom-key-1" />
      <span className="bottom-key-2" />
    </>
  );

  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  // Si tiene la propiedad 'to', se renderiza con React Router Link
  if (to) {
    return (
      <Link to={to} onClick={handleClick} className={baseClass} {...props}>
        {content}
      </Link>
    );
  }

  // Si tiene la propiedad 'href', se renderiza como enlace HTML clásico (útil para anclas locales como #about)
  if (href) {
    return (
      <a href={href} onClick={handleClick} className={baseClass} {...props}>
        {content}
      </a>
    );
  }

  // Por defecto se renderiza como elemento <button>
  return (
    <button onClick={handleClick} className={baseClass} disabled={disabled} {...props}>
      {content}
    </button>
  );
}
