import express from "express";
import * as http from "http";
import { Server } from "socket.io";
import { defineConfig, loadEnv } from "vite";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("connection successfull", socket.id);
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`server working on port ${port}`);
});
