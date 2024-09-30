"use client"

import { DragDropContext } from "react-beautiful-dnd";
import { gameClient } from "../utils";
import { Square } from "./square";

export const ChessBoard = () => {
  return (
    <div className="grid w-[600px] max-w-full grid-cols-8">
      <DragDropContext onDragEnd={(result)=>{
          const { source, destination } = result;
    
          // Si no hay destino (fuera del tablero), no hacer nada
          if (!destination) return;
        
          // Si el origen y el destino son iguales, no hacer nada
          if (source.index === destination.index) return;
        }}>
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
            <Square key={`square-${index}`} index={index} square={square} />
          ))}
      </DragDropContext>
    </div>
  );
};
