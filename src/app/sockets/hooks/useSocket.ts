import { useEffect } from "react";
import { io, type Socket } from "socket.io-client";

let socket: Socket | null = null;

const handleSocket = async () => {
  socket = io();

  socket.on("connect", () => {
    console.log("Connected to server");
  });

  socket.on("message", (msg: string) => {
    console.log("Message from server:", msg);
  });

  socket.on("couple", (data) => {
    console.log(data);
  });
};

export const useSocket = () => {
  useEffect(() => {
    void handleSocket();

    return () => {
      socket?.disconnect();
    };
  }, []);

  return {
    socket,
  };
};
