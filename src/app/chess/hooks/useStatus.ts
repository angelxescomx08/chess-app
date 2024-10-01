import { useRef, useState } from "react";
import { gameClient } from "../utils";

export const useStatus = () => {
  const [status, setStatus] = useState(gameClient.getStatus());
  const from = useRef<string | null>(null);

  const move = (move: string) => {
    gameClient.move(move);
    setStatus(gameClient.getStatus());
  };

  return {
    status,
    setStatus,
    gameClient,
    move,
    from
  };
};
