import { Server as HTTPServer } from "http";
import { Server as IOServer } from "socket.io";

let io;

export function initSocket(server) {
  if (!io) {
    io = new IOServer(server, {
      cors: { origin: "*" },
    });

    io.on("connection", (socket) => {
      console.log("User connected:", socket.id);

      socket.on("sendLocation", (data) => {
        // Broadcast to everyone else
        socket.broadcast.emit("receiveLocation", data);
      });
    });
  }
  return io;
}
