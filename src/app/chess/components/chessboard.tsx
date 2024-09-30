"use client";

import { useStatus } from "../hooks";
import { Square } from "./square";
import { DndContext } from "@dnd-kit/core";

export const ChessBoard = () => {
  const { status, move } = useStatus();
  return (
    <DndContext>
      <button onClick={()=>move("e4")}>Click</button>
      <div className="grid w-[600px] max-w-full grid-cols-8">
        {status
          .board.squares
          .map((square, index) => (
            <Square key={`square-${index}`} square={square} />
          ))}
      </div>
    </DndContext>
  );
};
