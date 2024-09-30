
type typePiece = "pawn" | "knight" | "bishop" | "rook" | "queen" | "king";

export function getCharByPieceType(pieceType: typePiece) {
  switch (pieceType) {
    case "pawn":
      return "";
    case "knight":
      return "N";
    case "bishop":
      return "B";
    case "rook":
      return "R";
    case "queen":
      return "Q";
    case "king":
      return "K";
  }
}