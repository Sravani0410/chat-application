// const express= require("express")

// const app=express();
// const socket=require("socket.io")
// const io=socket(server)
// io.on('connection', (socket)=>{
//     console.log('Socket connected successfully')
//  }
// );

// app.use(express.static('public'));

// app.listen(3030,()=>{
//     console.log("listening the port 3030")
// })
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});