import { useRef, useState } from "react";
import { chess } from "../utils";

export const useBoard = () => {
  const [board, setBoard] = useState(chess.board());
  const from = useRef<string | null>(null);

  const move = (move: string) => {
    chess.move(move);
    setBoard(chess.board());
  };

  return {
    board,
    setStatus: setBoard,
    gameClient: chess,
    move,
    from
  };
};
