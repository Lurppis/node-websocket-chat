const express = require('express');
const socket = require('socket.io');
const app = express();

var server = app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});

//Run app, then load http://localhost:3000 in a browser to see the output.

//Static files
app.use(express.static('public'));

// Socket setup
var io = socket(server);

// Server listen for connection
io.on('connection', (socket) => {
	console.log('Made socket connection', socket.id);

	socket.on('send-chat-to-server', (data) => {
		io.sockets.emit('send-chat-to-client', data);
	});
});