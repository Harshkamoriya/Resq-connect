// app/api/socket/route.ts
import { Server } from "socket.io"
import { NextRequest } from "next/server"

let io= Server 

export function GET(req) {
  if (!io) {
    const server = (res).socket?.server
    if (!server?.io) {
      const ioInstance = new Server(server, {
        path: "/api/socket",
        cors: {
          origin: "*",
        },
      })

      server.io = ioInstance

      ioInstance.on("connection", (socket) => {
        console.log("✅ Socket connected:", socket.id)

        // Receive location from helper and broadcast to others
        socket.on("helperLocationUpdate", (data) => {
          socket.broadcast.emit("locationUpdate", data)
        })
      })

      io = ioInstance
    }
  }

  return new Response("Socket server initialized")
}
