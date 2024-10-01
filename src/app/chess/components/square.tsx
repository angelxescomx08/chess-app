"use client";

import clsx from "clsx";
import { getSquareColor } from "../utils";
import { Piece } from "./piece";
import { useDroppable } from "@dnd-kit/core";
import { type PieceInBoard } from "../interfaces/piece";
import { type Square as TypeSquare } from "chess.js";

interface SquareProps {
  square: TypeSquare;
  piece?: PieceInBoard | null;
}

export const Square: React.FC<SquareProps> = ({ square, piece }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: square,
  });
  const style = {
    backgroundColor: isOver ? "green" : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={clsx("relative col-span-1 aspect-square", {
        "bg-white text-black": getSquareColor(square) === "light",
        "bg-black": getSquareColor(square) === "dark",
      })}
    >
      <span className="absolute left-1 top-0 font-bold">{square}</span>
      {piece && <Piece piece={piece} />}
    </div>
  );
};
