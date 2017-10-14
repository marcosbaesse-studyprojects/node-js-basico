var socket = new WebSocket('ws://localhost:8040');

socket.onopen = function() {
    socket.send('Im open from client');
};

socket.onmessage = function(message) {
    console.log(message);
};

socket.onerror = function(err) {
    console.log('Erro ->', err);
};