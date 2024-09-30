import Image from "next/image";
import clsx from "clsx";
import type * as chess from "chess";
import { useDraggable } from "@dnd-kit/core";

type Props = {
  piece: chess.Piece;
};

export const Piece = ({ piece }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `piece-${piece.side.name}-${piece.type}-${crypto.randomUUID()}`,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        zIndex: 200
      }
    : undefined;
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <Image
        style={{
          filter: "drop-shadow(0 0 0.3rem #fff)",
        }}
        className={clsx({
          "hover:cursor-pointer": true,
        })}
        src={`/pieces/${piece.side.name}/${piece.type}.png`}
        alt={piece.type}
        fill
      />
    </div>
  );
};
