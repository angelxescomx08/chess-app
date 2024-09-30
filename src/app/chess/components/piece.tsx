"use client";

import Image from "next/image";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import type * as chess from "chess";

interface PieceProps {
  piece: chess.Piece;
}

export const Piece: React.FC<PieceProps> = ({ piece }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `piece-${piece.side.name}-${piece.type}`, // ID único de la pieza
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
      className="relative w-full h-full"
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
