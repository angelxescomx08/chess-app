"use client";

import clsx from "clsx";
import { getSquareColor } from "../utils";
import { Piece } from "./piece";
import type * as chess from "chess";
import { Droppable } from "react-beautiful-dnd";

interface SquareProps {
  square: chess.Square;
}

export const Square: React.FC<SquareProps> = ({ square }) => {
  return (
    <Droppable droppableId={`${square.file}${square.rank}`}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          className={clsx("col-span-1 aspect-square", {
            "bg-white text-black": getSquareColor(square) === "light",
            "bg-black": getSquareColor(square) === "dark",
          })}
        >
          {/* {`${square.file}${square.rank}`} */}
          {square.piece && <Piece piece={square.piece} />}
        </div>
      )}
    </Droppable>
  );
};
