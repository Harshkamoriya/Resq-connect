// lib/socket.ts
import { io } from "socket.io-client"

const socket = io("http://localhost:3000", {
  path: "/api/socket", // Must match the server's socket path
})

export default socket
