var http = require('http');
var ws = require('websocket').server;

var socket = new ws({
    httpServer: http.createServer().listen(8040)
});

socket.on('request', function (req) {
    var conn = req.accept(null, req.origin);
    console.log('Origin ->', req.origin);

    conn.on('message', function (message) {
        conn.sendUTF('Hello from server');
        console.log(message);
    });
    
    conn.on('close', function() {
        console.log('Connection is closed');
    }); 

    setInterval(function(){ 
        conn.sendUTF("Hello"); 
    }, 3000);
});

// var server = http.createServer(handle);
// server.listen(8040, function() {
//     console.log('Server is listening as port 8040');
// }