import { type CustomSocket } from "../interfaces/custom-socket";

export const sockets: CustomSocket[] = [];

export function addSocket(socket: CustomSocket) {
  sockets.push(socket);
}

export function removeSocket(socket: CustomSocket) {
  const index = sockets.indexOf(socket);
  if (index > -1) {
    sockets.splice(index, 1);
  }
}
