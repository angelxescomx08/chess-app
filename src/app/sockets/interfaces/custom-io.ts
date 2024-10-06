import { type DefaultEventsMap, type Server } from "socket.io";

export type CustomIO = Server<
  DefaultEventsMap,
  DefaultEventsMap,
  DefaultEventsMap,
  unknown
>;
