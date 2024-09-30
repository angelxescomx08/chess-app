"use client";

import clsx from "clsx";
import { getSquareColor } from "../utils";
import { useDroppable } from "@dnd-kit/core";
import { Piece } from "./piece";
import type * as chess from "chess";

interface SquareProps {
  square: chess.Square;
}

export const Square: React.FC<SquareProps> = ({ square }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: `square-${square.file}${square.rank}`, // ID único de la casilla
  });

  const style: React.CSSProperties = {
    backgroundColor: isOver ? "green" : undefined, // Cambia el color cuando se suelta una pieza
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={clsx("col-span-1 aspect-square", {
        "bg-white text-black": getSquareColor(square) === "light",
        "bg-black": getSquareColor(square) === "dark",
      })}
    >
      {square.piece && <Piece piece={square.piece} />}
    </div>
  );
};
