const net = require('net');

const server = net.createServer((socket) => {
    console.log("Client Connected");

    socket.write("Welcome Client\n");

    socket.on("data", (data) => {
        const message = data.toString().trim();
        console.log("Received from client:", message);

        socket.write(`Message received: ${message}\n`);
    });

    socket.on("end", () => {
        console.log("Client Disconnected");
    });
});

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});