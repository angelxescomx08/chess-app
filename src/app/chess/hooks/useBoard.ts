import { useRef, useState } from "react";
import { chess } from "../utils";

export const useBoard = () => {
  const [board, setBoard] = useState(chess.board());
  const from = useRef<string | null>(null);

  const move = ({ fromMove, to }: { fromMove: string; to: string }) => {
    chess.move({
      from: fromMove,
      to,
    });
    from.current = null;
    setBoard(chess.board());
  };

  return {
    board,
    setStatus: setBoard,
    gameClient: chess,
    move,
    from,
  };
};
