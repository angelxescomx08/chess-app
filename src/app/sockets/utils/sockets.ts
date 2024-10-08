import { assignColorToCouple } from "~/app/chess";
import { type CustomIO } from "../interfaces/custom-io";
import { type CustomSocket } from "../interfaces/custom-socket";

export const sockets: CustomSocket[] = [];

export function addSocket(socket: CustomSocket) {
  sockets.push(socket);
}

export function popFistSocket(): CustomSocket | undefined {
  return sockets.shift();
}

export function removeSocket(socket: CustomSocket) {
  const index = sockets.indexOf(socket);
  if (index > -1) {
    sockets.splice(index, 1);
  }
}

export function coupleSockets(io: CustomIO, socket: CustomSocket) {
  if (sockets.length > 0) {
    const firstSocket = popFistSocket();
    if (firstSocket) {
      const [color1, color2] = assignColorToCouple();
      io.to(firstSocket.id).emit("couple", {
        id: firstSocket.id,
        color: color1,
        oponentId: socket.id,
        oponentColor: color2,
      });
      io.to(socket.id).emit("couple", {
        id: socket.id,
        color: color2,
        oponentId: firstSocket.id,
        oponentColor: color1,
      });
    }
    return;
  }
  addSocket(socket);
}
