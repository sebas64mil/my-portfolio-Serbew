export const roadmaps = [
  {
    id: 'Inventory',
    title: 'Inventarios de Videojuegos',
    tag: 'Sistemas',
    description: 'Recrear sistemas de inventario comunes en videojuegos, con enfoque en la exploración, accion, historia y RPG.',
    nodes: [
      { id: 'Basic', label: 'Inventario Básico', desc: 'Menu donde se gestionan los objetos tanto en la recolección como en el uso.', completed: false },
      { id: 'flex_Inventory', label: 'Inventario Flexible', desc: 'segun el elemento recolectado abarca mayor o menos espacio en el inventario.', completed: false },
      { id: 'slot_inventory', label: 'Slots complementarios', desc: 'puedes mover objetos a los slots de uso y de atajos los cuales al oprimir un input específico se activan.', completed: false },
      { id: 'quick_slots', label: 'Slots Rápidos y Atajos', desc: 'Asignación de objetos, armas o habilidades a espacios rápidos (1, 2, 3...) para utilizarlos instantáneamente mediante entradas del jugador, similar a juegos como Valorant, Minecraft o Terraria.', completed: false },
      { id: 'inventario_Multiple', label: 'Inventario Múltiple', desc: 'como en juegos tipo sandbox , hay diferentes tipos de almacenamientos como en cofres y demas asi junto a 9 slot de uso', completed: false }
    ]
  },
  {
    id: 'Detroit',
    title: 'Recreación Detroit Become Human',
    tag: 'Mecánicas',
    description: 'Mecánicas y Vfx inspirados en Detroit Become Human, con enfoque en la exploración, acción y narrativa.',
    nodes: [
      { id: 'Espacio analisis', label: 'Analisis de androide', desc: 'espacio que recrea el entorno de análisis del androide.', completed: false },
      { id: 'QTE Detroit', label: 'sistema de QTE', desc: 'Sistema de toques rápidos para interacciones específicas con y sin movimiento del personaje.', completed: false },
      { id: 'simulacion_movimiento', label: 'Simulación de Movimiento', desc: 'tener varios movimientos disponibles para el personaje con diferentes rutas al mismo destino.', completed: false },
      { id: 'cambio_camaras', label: 'Cambio de Cámara', desc: 'Segun el ángulo de visión, cambia la cámara para mejorar la experiencia del jugador.', completed: false }
    ]
  },

    {
    id: 'RestaurantSystem',
    title: 'Sistema de Pedidos Gamificado',
    tag: 'Web Dev',
    description: 'Sistema inspirado en procesos reales de restaurantes para optimizar la comunicación entre meseros y cocina mediante elementos de gamificación.',
    nodes: [
      { id: 'orders', label: 'Gestión de Pedidos', desc: 'Creación, edición y seguimiento de órdenes.', completed: false },
      { id: 'status', label: 'Estados de Preparación', desc: 'Sistema de toques rápidos para interacciones específicas con y sin movimiento del personaje.', completed: false },
      { id: 'rewards', label: 'Sistema de Recompensas', desc: 'Registro de desempeño para meseros y cocineros mediante puntos, métricas y objetivos basados en pedidos completados.', completed: false },
      { id: 'stock', label: 'Control de Disponibilidad', desc: 'Los productos agotados se marcan automáticamente para evitar que sean solicitados o registrados por error.', completed: false }
    ]
  },
  
];
