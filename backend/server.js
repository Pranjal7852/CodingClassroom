import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();

app.use(cors);

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Update with your Vite app's URL
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});
const userSocketMap = {};
function getAllConnectedClients(roomId) {
  return Array.from(io.sockets.adapter.rooms.get(roomId) || []).map(
    (socketId) => {
      return {
        socketId,
        userName: userSocketMap[socketId],
      };
    }
  );
}
io.on("connection", (socket) => {
  console.log("A user connected", socket.id);
  socket.on("join", ({ roomId, userName }) => {
    userSocketMap[socket.id] = userName;
    socket.join(roomId);
    const clients = getAllConnectedClients(roomId);
    console.log(clients);
    clients.forEach(({ socketId }) => {
      io.to(socketId).emit("joined", {
        clients,
        userName,
        socketId,
      });
      console.log("joined emited");
    });
  });
});
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`server working on port ${port}`);
});
