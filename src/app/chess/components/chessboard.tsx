"use client";

import { useStatus } from "../hooks";
import { Square } from "./square";
import type * as chess from "chess";
import { DragDropContext, type DropResult } from "react-beautiful-dnd";

export const ChessBoard = () => {
  const { status, move } = useStatus();

  const onDragEnd = (result:DropResult)=>{
    const { source, destination } = result;
  
    // Si no hay destino, salimos de la función
    if (!destination) return;

    // Lógica para actualizar el estado del tablero de ajedrez
    //move(source.droppableId, destination.droppableId);
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid w-[600px] max-w-full grid-cols-8">
        {status.board.squares.map((square: chess.Square, index: number) => (
          <Square key={`square-${index}`} square={square} />
        ))}
      </div>
    </DragDropContext>
  );
};
