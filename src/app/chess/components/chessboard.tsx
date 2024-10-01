"use client";

import { useBoard } from "../hooks";
import { getFullBoard } from "../utils";
import { Square } from "./square";
import {
  DndContext,
  type DragOverEvent,
  type DragEndEvent,
} from "@dnd-kit/core";

export const ChessBoard = () => {
  const { board, move, from } = useBoard();

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

  console.log(getFullBoard(board));

  return (
    <DndContext onDragOver={onDragOver} onDragEnd={onDragEnd}>
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
