import { type DefaultEventsMap, type Socket } from "socket.io";

export type CustomSocket = Socket<
  DefaultEventsMap,
  DefaultEventsMap,
  DefaultEventsMap,
  unknown
>;
