// ==========================================
// COLORES METÁLICOS - Sincronizados con SASS
// ==========================================

export const CANDY_COLORS = {
  // Colores principales (metálicos y elegantes)
  pink: '#FF6F91',        // rosa metálico (más profundo que el pastel)
  purple: '#A569FF',      // púrpura cromo
  blue: '#4A90E2',        // azul acero
  cyan: '#2DD4E9',        // cian brillante tipo titanio

  // Variaciones claras (para hover, reflejo o luz)
  pinkLight: '#FF9EBB',
  purpleLight: '#C79EFF',
  blueLight: '#7DB9F7',
  cyanLight: '#74E3F1',

  // Colores base del proyecto
  dark: '#0f172a',        // fondo espacial oscuro
  light: '#f8fafc',       // texto claro o reflejo blanco
}

// Array para iterar fácilmente (4 colores principales)
export const CANDY_ARRAY = [
  CANDY_COLORS.pink,
  CANDY_COLORS.purple,
  CANDY_COLORS.blue,
  CANDY_COLORS.cyan,
]

// Grupos de colores por ley Gestalt (manteniendo la estructura)
export const GESTALT_COLORS = {
  proximity: [CANDY_COLORS.pink, CANDY_COLORS.purple],
  similarity: [CANDY_COLORS.blue, CANDY_COLORS.cyan, CANDY_COLORS.pink],
  closure: [CANDY_COLORS.purple],
  continuity: [CANDY_COLORS.cyan, CANDY_COLORS.blue],
  symmetry: [CANDY_COLORS.pink, CANDY_COLORS.purple],
  figureGround: [CANDY_COLORS.blue, CANDY_COLORS.dark],
  commonFate: [CANDY_COLORS.cyan, CANDY_COLORS.purple],
  connection: [CANDY_COLORS.pink, CANDY_COLORS.blue],
}

