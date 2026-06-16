export const roadmaps = [
  {
    id: 'crash',
    title: 'Crash Bandicoot',
    tag: 'Mecánicas',
    description: 'Mecánicas estilo Crash (plataformas, giro/ataque, saltos).',
    nodes: [
      { id: 'move', label: 'Movimiento base', desc: 'Caminar, correr y control de dirección.' },
      { id: 'jump', label: 'Salto', desc: 'Salto simple, salto cargado y ajuste de altura.' },
      { id: 'spin', label: 'Giro/Attack', desc: 'Ataque giratorio que elimina enemigos cercanos.' },
      { id: 'dash', label: 'Dash', desc: 'Impulso corto para esquivar o cubrir distancia.' }
    ]
  },
  {
    id: 'platform',
    title: 'Plataformas - General',
    tag: 'Sistemas',
    description: 'Mecánicas comunes de juegos de plataformas.',
    nodes: [
      { id: 'p-move', label: 'Movimiento base', desc: 'Desplazamiento y control de personaje.', completed: true },
      { id: 'p-jump', label: 'Doble salto', desc: 'Añadir una segunda fase de salto.', completed: false },
      { id: 'p-wall', label: 'Agarrarse a muros', desc: 'Mantenerse en muros y escalar.', completed: false },
      { id: 'p-grab', label: 'Agarrar objetos', desc: 'Interacción con objetos y agarres.', completed: false }
    ]
  }
];
