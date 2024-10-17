import { useEffect } from "react";
import { io, type Socket } from "socket.io-client";
import { type Player } from "~/app/player";

let socket: Socket | null = null;

type Props = {
  onCouple: (player: Player) => void;
  onMessage: (msg: unknown) => void;
}

const handleSocket = ({ onCouple, onMessage }: Props) => {
  socket = io();

  socket.on("connect", () => {
    console.log("Connected to server");
  });

  socket.on("message", (msg) => {
    onMessage(msg);
  });

  socket.on("couple", (data: Player) => {
    onCouple(data);
  });
};

export const useSocket = ({ onCouple, onMessage }: Props) => {

  useEffect(() => {
    handleSocket({
      onCouple,
      onMessage
    });

    return () => {
      socket?.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    socket,
  };
};
