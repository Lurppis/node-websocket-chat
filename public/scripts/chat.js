// Make client connection
var socket = io.connect('http://localhost:3000');

// Query DOM
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');

// Emit event
btn.addEventListener('click', () => {
	socket.emit('send-chat-to-server', {
		message: message.value,
		handle: handle.value
	});
});

// Listen for events
socket.on('send-chat-to-client', (data) => {
	output.innerHTML += `<p><strong>${data.handle}:</strong>${data.message}</p>`;
});