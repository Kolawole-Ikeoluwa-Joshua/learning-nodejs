// importing files, core modules
const http = require('http');

// importing 3rd party Nodejs modules
const express = require('express');

const app = express();



// creating http response server

const server = http.createServer();

server.listen(3500);