import { useState } from "react";
import { type Player } from "../interfaces/player";
import { COLOR } from "~/app/chess";

export const usePlayer = () => {
  const [player, setPlayer] = useState<Player>({
    id: "",
    color: COLOR.WHITE,
    oponentId: "",
    oponentColor: COLOR.BLACK,
  });

  return { player, setPlayer };
}