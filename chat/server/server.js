const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

const socketio = require("socket.io");
const io = socketio(server);

//Iniciamos la comunicación
io.on("connection", (socket) => {
  let name;
  socket.on("connected", (nom) => {
    name = nom;
    //cada vez que un usuario se conecte se envía a todos menos a ti mismo
    socket.broadcast.emit("messages", {
      name: name,
      message: `${name} has entered the chat room`,
    });
  });

  socket.on("message", (name, message) => {
    io.emit("messages", { name, message }); // send an Object
  });

  socket.on("disconnect", () => {
    io.emit("messages", {
      server: "Server",
      message: `${name} has left the chat room`,
    });
  });
});

server.listen(3000, () => console.log("Server initialized"));
