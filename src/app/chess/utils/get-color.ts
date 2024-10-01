import { type Square } from "chess.js";

export function getSquareColor(square: Square): 'light' | 'dark' {
  const file = square.charCodeAt(0) - 'a'.charCodeAt(0); // Columna (a-h)
  const rank = square[1] ? parseInt(square[1], 10) - 1 : 0; // Fila (1-8)

  // Si la suma de la fila y columna es par, es oscuro; si es impar, es claro
  return (file + rank) % 2 === 0 ? 'dark' : 'light';
}
