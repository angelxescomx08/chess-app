"use client";

import { gameClient } from "../utils";
import { Square } from "./square";
import { DndContext } from "@dnd-kit/core";

export const ChessBoard = () => {
  return (
    <DndContext>
      <div className="grid w-[600px] max-w-full grid-cols-8">
        {gameClient
          .getStatus()
          .board.squares.reverse()
          .map((square, index) => {
            const file = String.fromCharCode("a".charCodeAt(0) + (index % 8));
            const rank = Math.floor(index / 8) + 1;
            return {
              ...square,
              file,
              rank: 8 - rank,
            };
          })
          .map((square, index) => (
            <Square key={`square-${index}`} square={square} />
          ))}
      </div>
    </DndContext>
  );
};
