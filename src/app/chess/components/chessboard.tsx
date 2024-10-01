"use client";

import { useStatus } from "../hooks";
import { Square } from "./square";
import type * as chess from "chess";
import { DndContext } from "@dnd-kit/core";

export const ChessBoard = () => {
  const { status, move } = useStatus();

  return (
    <DndContext>
      <div className="grid w-[600px] max-w-full grid-cols-8">
        {status.board.squares.map((square: chess.Square) => (
          <Square key={`${square.file}${square.rank}`} square={square} />
        ))}
      </div>
    </DndContext>
  );
};
