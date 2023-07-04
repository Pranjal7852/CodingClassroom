const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
  console.log(socket.id);
});

const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`server working on port ${port}`);
});
