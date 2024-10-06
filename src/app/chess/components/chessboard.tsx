"use client";

import { useId } from "react";
import { useBoard } from "../hooks";
import { getFullBoard } from "../utils";
import { Square } from "./square";
import {
  DndContext,
  type DragOverEvent,
  type DragEndEvent,
} from "@dnd-kit/core";
import { useSocket } from "~/app/sockets";

export const ChessBoard = () => {
  const id = useId();
  const { board, move, from } = useBoard();
  const { socket } = useSocket();
  

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (active.id === over?.id) return;

    const fromString = from.current;
    const to = over?.id;

    if (to) {
      // move({
      //   fromMove: fromString!,
      //   to: to as string,
      // });
    }
    socket?.emit("message", { from: fromString, to });
  };

  const onDragOver = (event: DragOverEvent) => {
    if (!from.current) {
      from.current = (event?.over?.id as string) || null;
    }
  };

  return (
    <DndContext id={id} onDragOver={onDragOver} onDragEnd={onDragEnd}>
      <div className="grid w-[600px] max-w-full grid-cols-8">
        {getFullBoard(board)
          .flat()
          .map((square) => (
            <Square
              key={square.square}
              square={square.square}
              piece={square.piece}
            />
          ))}
      </div>
    </DndContext>
  );
};
