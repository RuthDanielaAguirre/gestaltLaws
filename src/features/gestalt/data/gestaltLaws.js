export const gestaltLaws = [
  {
    id: 'proximidad',
    title: 'Proximidad',
    subtitle: 'Los elementos cercanos se perciben como un grupo',
    description: 'Nuestra mente agrupa automáticamente objetos que están cerca unos de otros.',
    color: '#3b82f6',
    hasParallax: true,
    example: { type: 'dots', config: {} }
  },
  {
    id: 'semejanza',
    title: 'Semejanza',
    subtitle: 'Lo similar se agrupa mentalmente',
    description: 'Elementos con características visuales similares se perciben como parte del mismo conjunto.',
    color: '#8b5cf6',
    hasParallax: false,
    example: { type: 'shapes', config: {} }
  },
  {
    id: 'continuidad',
    title: 'Continuidad',
    subtitle: 'Seguimos las líneas y curvas naturalmente',
    description: 'Preferimos percibir figuras continuas y fluidas.',
    color: '#06b6d4',
    hasParallax: true,
    example: { type: 'lines', config: {} }
  },
  {
    id: 'cierre',
    title: 'Cierre',
    subtitle: 'Completamos formas incompletas',
    description: 'Nuestro cerebro llena los espacios vacíos.',
    color: '#10b981',
    hasParallax: false,
    example: { type: 'incomplete', config: {} }
  }
];