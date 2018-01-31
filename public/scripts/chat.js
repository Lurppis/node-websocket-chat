// Make client connection
var socket = io.connect('http://localhost:3000');

// Query DOM
var message = document.getElementById('message');
var handle = document.getElementById('handle');
var btn = document.getElementById('send');
var output = document.getElementById('output');
var feedback = document.getElementById('feedback');

// Emit event
btn.addEventListener('click', () => {
	socket.emit('send-chat-to-server', {
		message: message.value,
		handle: handle.value
	});
	message.value='';	
});

message.addEventListener('keypress', () => {
	socket.emit('typing', {
		handle: handle.value
	});
});

// Listen for events
socket.on('send-chat-to-client', (data) => {
	feedback.innerHTML = '';
	output.innerHTML += `<p><strong>${data.handle}:</strong>${data.message}</p>`;
	$('#chat-window').animate({scrollTop: +1000}, 500);
});

// Listen for typing
socket.on('typing', (data) => {
	feedback.innerHTML = `<p><em>${data.handle} is typing message...</em></p>`;
});