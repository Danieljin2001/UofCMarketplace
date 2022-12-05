import mongoose from "mongoose";

const express = require('express')
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// backend and socket server running on same port
server.listen(3000, () => {
    console.log('listening on port 3000');
});

// all server socket message event functions
io.on('connection', (socket) => {

});

// client side connection
const socket = io("http://localhost:3000", {});
socket.on("connect", () => {
    console.log(socket.id);
});

