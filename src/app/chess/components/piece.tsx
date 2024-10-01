"use client";

import Image from "next/image";
import { useDraggable } from "@dnd-kit/core";
import { useState } from "react";
import { type PieceInBoard } from "../interfaces";
import { getFullPieceName } from "../utils";

interface PieceProps {
  piece: PieceInBoard;
}

export const Piece: React.FC<PieceProps> = ({ piece }) => {
  const [id] = useState(`${crypto.randomUUID()}`);
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
        src={`/pieces/${piece.color}/${getFullPieceName(piece.type)}.png`}
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
