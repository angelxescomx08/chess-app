// app/api/socket/route.ts

import { Server } from "socket.io";

let io: Server | undefined;

export function GET(req: Request) {
  if (!io) {
    // Solo inicializa Socket.IO si aún no está inicializado
    io = new Server({
      path: "/api/socket",
    });

    io.on("connection", (socket) => {
      console.log("A user connected");

      socket.on("message", (msg: string) => {
        console.log("Message: " + msg);
        io?.emit("message", msg);
      });

      socket.on("disconnect", () => {
        console.log("User disconnected");
      });
    });
  }

  return Response.json({ message: "Socket.IO server initialized" });
}
