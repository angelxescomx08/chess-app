import { type Color, type PieceSymbol, type Square } from "chess.js";

export type PieceInBoard = {
  square: Square;
  type: PieceSymbol;
  color: Color;
}