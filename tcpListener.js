var net = require('net');

var client_counter = 0;

// create server object
var server = net.createServer(function(socket){
	client_counter++;
	console.log("Client " + client_counter + " connected.");
	socket.write("Connected to server.\n\n");

	//Echo back to client
	socket.pipe(socket);
});

server.listen(8080, "127.0.0.1");