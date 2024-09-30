"use client";

import Image from "next/image";
import type * as chess from "chess";
import { useState } from "react";
import { getCharByPieceType } from "../utils";
import { Draggable } from "react-beautiful-dnd";

interface PieceProps {
  piece: chess.Piece;
}

export const Piece: React.FC<PieceProps> = ({ piece }) => {
  const [id] = useState(
    () => `${getCharByPieceType(piece.type)}*${crypto.randomUUID()}`,
  );

  return (
    <Draggable draggableId={id} index={0}>
      {(provided,snapshot) => (
        <div
          className="relative h-full w-full"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Image
            src={`/pieces/${piece.side.name}/${piece.type}.png`}
            alt={piece.type}
            fill
            sizes="75px"
            className="hover:cursor-pointer"
            style={{
              filter: "drop-shadow(0 0 0.3rem #fff)",
            }}
          />
        </div>
      )}
    </Draggable>
  );
};
