import { type Square } from "chess.js";
import { type Board, type PieceInBoard } from "../interfaces";
import { getSquareColor } from "./get-color";

export function getFullBoard(board: Board) {
  const fullBoard: ({
    color: "light" | "dark";
    square: Square;
    piece?: PieceInBoard | null;
  })[][] = [];

  // Recorrer las filas y columnas del tablero
  for (let row = 0; row < board.length; row++) {
    const rowArray: ({
      color: "light" | "dark";
      square: Square;
      piece?: PieceInBoard | null;
    })[] = [];

    for (let col = 0; col < (board[row]?.length || 0); col++) {
      // Obtener la pieza o null
      const piece = board[row]?.[col] ?? null;
      // Columna (a-h)
      const columnLetter = String.fromCharCode(97 + col);
      // Filas (8-1)
      const rowNumber = 8 - row;

      rowArray.push({
        color: getSquareColor(`${columnLetter}${rowNumber}` as Square),
        square: `${columnLetter}${rowNumber}` as Square,
        piece: piece ? piece : null
      });
    }

    // Agregar fila al tablero completo
    fullBoard.push(rowArray);
  }

  return fullBoard;
}
