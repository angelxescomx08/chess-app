"use client"

import clsx from "clsx"
import Image from "next/image"
import { getSquareColor } from "../utils"
import type * as chess from "chess"
import { Droppable, Draggable } from 'react-beautiful-dnd';

type Props = {
  square: chess.Square;
  index: number;
}

export const Square = ({ square, index }:Props) => {

  return(
    <Droppable droppableId={`${square.file}${square.rank+1}`}>
      {(provided) => (
        <div
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
          ref={provided.innerRef}
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          {...provided.droppableProps}
          className={clsx({
            "col-span-1 aspect-square relative": true,
            "bg-white text-black": getSquareColor(square) === "light",
            "bg-black": getSquareColor(square) === "dark",
          })}
        >
          {/* {square.file}
          {square.rank + 1} */}
          {
            square.piece&&
            <Draggable
              draggableId={`${square.file}-${square.rank}`}
              index={index}
            >
              {(provided) => (
                <div 
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                  ref={provided.innerRef}
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                  {...provided.draggableProps}
                  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
                  {...provided.dragHandleProps}
                  
                >
                  <Image
                    style={{
                      filter: 'drop-shadow(0 0 0.3rem #fff)',
                    }}
                    className={clsx({
                      "hover:cursor-pointer": true,
                    })}
                    src={`/pieces/${square.piece.side.name}/${square.piece.type}.png`} 
                    alt={square.piece.type}
                    fill
                  />
                </div>
              )}
            </Draggable>
              
          }
        </div> 
      )}
    </Droppable>
  )
}