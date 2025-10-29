// ==========================================
// COLORES CANDY - Sincronizado con SASS
// ==========================================

export const CANDY_COLORS = {
  // Colores principales (iguales a tu _variables.scss)
  pink: '#ff6b9d',
  purple: '#c084fc',
  blue: '#60a5fa',
  cyan: '#22d3ee',
  
  // Variaciones claras (para hover, etc)
  pinkLight: '#ffb3d1',
  purpleLight: '#ddb3ff',
  blueLight: '#93c5fd',
  cyanLight: '#7dd3fc',
  
  // Colores base del proyecto
  dark: '#0f172a',
  light: '#f8fafc',
}

// Array para iterar fácilmente (4 colores principales)
export const CANDY_ARRAY = [
  CANDY_COLORS.pink,
  CANDY_COLORS.purple,
  CANDY_COLORS.blue,
  CANDY_COLORS.cyan,
]

// Grupos de colores por ley Gestalt (usar después)
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