"use client";

import { useStatus } from "../hooks";
import { Square } from "./square";
import type * as chess from "chess";
import {
  DndContext,
  type DragOverEvent,
  type DragEndEvent,
} from "@dnd-kit/core";

export const ChessBoard = () => {
  const { status, move, from } = useStatus();

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id === over?.id) return;

    const fromString = from.current;
    const piece = (active.id as string).split("--")[0];
    const to = over?.id;

    // console.log({
    //   fromString,
    //   to,
    //   piece,
    // });

    if (to) {
      console.log(`${fromString}-${to}`);
      move(`e2-e4`);
    }
  };

  const onDragOver = (event: DragOverEvent) => {
    if (!from.current) {
      from.current = (event?.over?.id as string) || null;
    }
  };

  return (
    <DndContext onDragOver={onDragOver} onDragEnd={onDragEnd}>
      <div className="grid w-[600px] max-w-full grid-cols-8">
        {status.board.squares.map((square: chess.Square) => (
          <Square key={`${square.file}${square.rank}`} square={square} />
        ))}
      </div>
    </DndContext>
  );
};
