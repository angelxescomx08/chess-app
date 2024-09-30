import clsx from "clsx";
import { gameClient, getSquareColor } from "../utils";
import Image from "next/image";

export const ChessBoard = () => {
  return (
    <div className="grid w-[600px] max-w-full grid-cols-8">
      {gameClient
        .getStatus()
        .board.squares.reverse()
        .map((square, index) => {
          const file = String.fromCharCode("a".charCodeAt(0) + (index % 8)); // 'a' a 'h'
          const rank = Math.floor(index / 8) + 1; // Rango 1 a 8
          return {
            ...square,
            file,
            rank: 8 - rank, // Cambiar el rango para que empiece desde 8 hasta 1
          };
        })
        .map((square, index) => (
          <div
            key={`square-${index}`}
            className={clsx({
              "col-span-1 aspect-square relative": true,
              "bg-white text-black": getSquareColor(square) === "light",
              "bg-black": getSquareColor(square) === "dark",
            })}
          >
            {square.file}
            {square.rank + 1}
            {
              square.piece&&
                <Image 
                  src={`/pieces/${square.piece.side.name}/${square.piece.type}.png`} 
                  alt={square.piece.type}
                  fill
                />
            }
          </div>
        ))}
    </div>
  );
};
