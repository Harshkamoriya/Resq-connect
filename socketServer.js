// socketServer.ts
import { Server } from "socket.io"

let io = Server;


export default function initSocket(server) {
  if (!io) {
    io = new Server(server, {
      cors: {
        origin: "*",
      },
    })

    io.on("connection", (socket) => {
      console.log("Socket connected:", socket.id)

      socket.on("helperLocationUpdate", (data) => {
        socket.broadcast.emit("locationUpdate", data)
      })
    })
  }
}
