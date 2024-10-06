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
  console.log(sockets.map((s) => s.id));
  if (sockets.length > 0) {
    const firstSocket = popFistSocket();
    if (firstSocket) {
      io.to(firstSocket.id).emit("couple", firstSocket.id);
      io.to(socket.id).emit("couple", socket.id);
    }
    return;
  }
  addSocket(socket);
}
