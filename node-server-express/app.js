// importing files, core modules
const http = require('http');

// importing 3rd party Nodejs modules
const express = require('express');


// express function used to create an express application
const app = express();


// use created express application to implement middleware

app.use((req, res, next) => {
    console.log('In the middleware!');
    next(); // Allows the request to continue to the next middleware in line

});

app.use((req, res, next) => {
    console.log('In the middleware!');

});


// creating http response server

const server = http.createServer(app);

server.listen(3500);