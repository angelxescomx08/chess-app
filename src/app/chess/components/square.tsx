"use client";

import clsx from "clsx";
import { getSquareColor } from "../utils";
import type * as chess from "chess";
import { useDroppable } from "@dnd-kit/core";
import { Piece } from "./piece";

type Props = {
  square: chess.Square;
};

export const Square = ({ square }: Props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: `square-${square.file}-${square.rank}`,
  });
  const style = {
    color: isOver ? "green" : undefined,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      className={clsx({
        "relative col-span-1 aspect-square": true,
        "bg-white text-black": getSquareColor(square) === "light",
        "bg-black": getSquareColor(square) === "dark",
      })}
    >
      {/* {square.file}
          {square.rank + 1} */}
      {square.piece && <Piece piece={square.piece} />}
    </div>
  );
};
