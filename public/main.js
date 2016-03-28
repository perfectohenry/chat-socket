var socket = io.connect('http://localhost:8080', { 'forceNew': true });

socket.on('messages', function(data) {
	console.log(data);
	render(data);
})


function render (data) {
	var html = data.map(function(element, index) {
		return(`<div>
					<strong>${element.author}</strong>:
					<em>${element.text}</em>
				</div>`);
	}).join(" ");
	document.getElementById('messages').innerHTML = html;
}

function addMessage(event) {
	var payload = {
		author: document.getElementById('username').value,
		text: document.getElementById('text').value
	};

	socket.emit('send-message', payload);
	return false;
}