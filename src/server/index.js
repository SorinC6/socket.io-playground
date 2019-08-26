const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 4001;

io.on("connection", function(socket) {
  console.log("made socket connection ", socket.id);

  socket.on("CHAT_MESSAGE", data => {
    io.emit("CHAT_MESSAGE", data);
  });
});

app.get("/", (req, res) => {
  res.send("Server working");
});

server.listen(PORT, () => {
  console.log("Connected to port:" + PORT);
});
