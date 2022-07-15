// importing files, core modules
const http = require('http');

// importing custom module
const routes = require('./routes');

// creating http response server with an anonymous func

const server = http.createServer(routes);

server.listen(3000);