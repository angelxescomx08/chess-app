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

export function coupleSockets(socket: CustomSocket) {
  if (sockets.length > 1) {
    const firstSocket = popFistSocket();
    if (firstSocket) {
      firstSocket.emit("couple", socket.id);
      socket.emit("couple", firstSocket.id);
    }
    return;
  }
  addSocket(socket);
}
