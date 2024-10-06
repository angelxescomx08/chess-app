import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";
import { coupleSockets, removeSocket, type CustomSocket } from "~/app/sockets";

const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

await app.prepare().then(() => {
  // eslint-disable-next-line @typescript-eslint/no-misused-promises
  const httpServer = createServer(handler);

  const io = new Server(httpServer);

  io.on("connection", (socket: CustomSocket) => {
    console.log("a user connected");
    coupleSockets(socket);
    socket.on("message", (data) => {
      io.emit("message", data);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
      removeSocket(socket);
    });
  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
