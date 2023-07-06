import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

const app = express();

const corsOptions = {
  origin: "http://localhost:5173", // Update with your Vite app's URL
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // Update with your Vite app's URL
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
    console.log(`User joined room: ${roomId}`);
  });

  socket.on("textUpdate", (roomId, updatedText) => {
    io.to(roomId).emit("updateText", updatedText);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});
const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`server working on port ${port}`);
});
