import { type PieceSymbol } from "chess.js";

export function getFullPieceName(type: PieceSymbol) {
  switch (type) {
    case "p":
      return "pawn";
    case "n":
      return "knight";
    case "b":
      return "bishop";
    case "r":
      return "rook";
    case "q":
      return "queen";
    case "k":
      return "king";
    default:
      return "pawn";
  }
}