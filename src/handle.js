function handle(request, response) {
    response.end('Hello from http module');
}

module.exports = handle; // a função é acessada através de handle
module.exports.server = handle; // a função é acessada através de handle.server

// vale lembrar que o module.exports também pode ser um objeto.