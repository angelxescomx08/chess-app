"use client";

import Image from "next/image";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import type * as chess from "chess";
import { useState } from "react";

interface PieceProps {
  piece: chess.Piece;
}

export const Piece: React.FC<PieceProps> = ({ piece }) => {
  const [id] = useState(() => `piece-${crypto.randomUUID()}`);
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id, // ID único de la pieza
  });

  const style: React.CSSProperties = transform
    ? {
        transform: CSS.Translate.toString(transform), // Aplicar la transformación de arrastre
      }
    : {};

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative h-full w-full"
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
