import React from 'react';

/**
 * Componente que renderiza una cuadrícula técnica sutil de fondo
 * con marcas y coordenadas estilo dibujo técnico/plano.
 */
export default function GridBackground({ color = 'var(--sketch-primary)' }) {
  // Lista de marcas y coordenadas a esparcir sutilmente de fondo
  const markers = [
    { label: '0.00', top: '12%', left: '15%' },
    { label: 'X: 42.91', top: '22%', left: '85%' },
    { label: 'Y: -18.44', top: '78%', left: '12%' },
    { label: 'SCALE: 1.0', top: '88%', left: '82%' },
    { label: 'SEC_01', top: '15%', left: '48%' },
    { label: 'NODE-GRID_B', top: '52%', left: '92%' },
    { label: '[A-1]', top: '82%', left: '35%' },
    { label: 'SYS_0', top: '6%', left: '72%' }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" style={{ zIndex: 0 }}>
      {/* Líneas de cuadrícula técnica atenuadas */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${color} 1px, transparent 1px),
            linear-gradient(90deg, ${color} 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          opacity: 0.18,
          maskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'radial-gradient(circle at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0) 100%)'
        }}
      />
      
      {/* Marcadores numéricos atenuados en el plano */}
      {markers.map((marker, idx) => (
        <span
          key={idx}
          className="absolute font-mono text-[9px] tracking-widest opacity-25 select-none"
          style={{
            color: color,
            top: marker.top,
            left: marker.left,
            transform: 'translate(-50%, -50%)',
            textShadow: `0 0 4px ${color}`
          }}
        >
          {marker.label}
        </span>
      ))}
    </div>
  );
}
