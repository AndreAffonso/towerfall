const express = require('express');
// const mongoose = require('mongoose');
const configurations = require('./utils/config');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const ip = require('ip');
// WEB SOCKET
// const client = require('socket.io').listen(configurations.PORT).sockets;

// mongoose.connect(`mongodb://localhost:27017/towerfall`);

// const db = mongoose.connection;

// db.once('open', () => {
//   console.log('Connected to mongodb');
// });

// db.on('error', err => {
//   console.log(err);
// });

// CHAT WEBSOCKET
let numUsers = 0;
const connections = [];

io.on('connection', socket => {
  let addedUser = false;

  // when the client emits 'new message', this listens and executes
  socket.on('new message', data => {
    // we tell the client to execute 'new message'
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data,
      createdAt: Date.now(),
    });
  });

  // when the client emits 'add user', this listens and executes
  socket.on('add user', username => {
    if (addedUser) return;
    // we store the username in the socket session for this client
    socket.username = username;
    ++numUsers;
    addedUser = true;
    socket.emit('login', {
      numUsers,
    });
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit('user joined', {
      username: socket.username,
      numUsers,
    });
  });

  // when the client emits 'typing', we broadcast it to others
  socket.on('typing', () => {
    socket.broadcast.emit('typing', {
      username: socket.username,
    });
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('stop typing', () => {
    socket.broadcast.emit('stop typing', {
      username: socket.username,
    });
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', () => {
    if (addedUser) {
      --numUsers;

      // echo globally that this client has left
      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers,
      });
    }
  });
});
//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Route Files
const personagens = require('./routes/personagens');

app.use('/personagens', personagens);

server.listen(configurations.PORT, () => {
  console.log(`LAN ${ip.address()}:${configurations.PORT}`);
});
