"use client";

import { DndContext, type DragEndEvent } from "@dnd-kit/core";
import { useStatus } from "../hooks";
import { Square } from "./square";
import type * as chess from "chess";

export const ChessBoard = () => {
  const { status, move } = useStatus();

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;

    console.log(event);

    // if (over) {
    //   const from = active.id.split("-")[1]; // Casilla de origen
    //   const to = over.id.split("-")[1]; // Casilla de destino
    //   console.log({
    //     text: `Pieza ${active.id} movida de ${from} a ${to}`,
    //     change: `${from}${to}`,
    //   });
    //   move(`${from}${to}`); // Mueve la pieza en el backend
    // }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="grid w-[600px] max-w-full grid-cols-8">
        {status.board.squares.map((square: chess.Square, index: number) => (
          <Square key={`square-${index}`} square={square} />
        ))}
      </div>
    </DndContext>
  );
};
