const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const app = express();
const server = http.createServer(app);
const io = new Server(server);
let totalScore = 14;
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/scoreboard.html');
});
io.on('connection', (socket) => {
  console.log('A user connected');
  socket.emit('updateScore', totalScore);

  socket.on('plusOne', () => {
    totalScore++; 
    
    io.emit('updateScore', totalScore);
  });
});
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});