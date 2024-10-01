"use client";

import clsx from "clsx";
import { getSquareColor } from "../utils";
import { Piece } from "./piece";
import type * as chess from "chess";
import { useDroppable } from "@dnd-kit/core";

interface SquareProps {
  square: chess.Square;
}

export const Square: React.FC<SquareProps> = ({ square }) => {
  const { isOver, setNodeRef } = useDroppable({
    id: `${square.file}${square.rank}`,
  });
  const style = {
    backgroundColor: isOver ? "green" : undefined,
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
      {/* {`${square.file}${square.rank}`} */}
      {square.piece && <Piece piece={square.piece} />}
    </div>
  );
};
