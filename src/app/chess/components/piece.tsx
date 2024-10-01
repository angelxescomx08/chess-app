"use client";

import Image from "next/image";
import type * as chess from "chess";
import { getCharByPieceType } from "../utils";
import { useDraggable } from "@dnd-kit/core";
import { useState } from "react";

interface PieceProps {
  piece: chess.Piece;
}

export const Piece: React.FC<PieceProps> = ({ piece }) => {
  const [id] = useState(
    `${getCharByPieceType(piece.type)}--${crypto.getRandomValues(new Uint32Array(1))[0]}`,
  );
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: 100,
      }
    : undefined;

  return (
    <div
      className="relative h-full w-full"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
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
  );
};
