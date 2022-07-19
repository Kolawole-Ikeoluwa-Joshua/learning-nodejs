// importing files, core modules
const http = require('http');

// importing 3rd party Nodejs modules
const express = require('express');


// express function used to create an express application
const app = express();


// use created express application to implement middleware
/* middleware concept: you add functions hooked into the funnel through which request goes
you either have next to reach next middleware or you return a response */



app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next(); // Allows the request to continue to the next middleware in line

}); 


// Handling different routes

app.use('/add-product', (req, res, next) => {
    console.log('In the middleware!');
    res.send('<h1>The add product page!</h1>');

});

app.use('/', (req, res, next) => {
    console.log('In another middleware!');
    res.send('<h1>Hello from Express!</h1>');

});


// creating http response server

const server = http.createServer(app);

server.listen(3500);