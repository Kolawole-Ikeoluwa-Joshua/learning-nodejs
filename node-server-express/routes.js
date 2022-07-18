// importing files, core modules

const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    // routing requests
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    // redirecting requests
    if (url === '/message' && method === 'POST') {

        // parsing request bodies event listeners (streams & buffers)
        const body = [];

        // event driven code
        // Nodejs handles works with event loops (handles event callbacks) & worker pools (multi threads for heavy lifting)
        // Event loop has the following components:
            // Timers - execute setTimeout, setInterval Callbacks
            // Pending callbacks - execute I/O related callbacks that were deferred
            // Poll - retrieve new I/O events, execute their callbacks
            // Check - execute setImmediate callbacks
            // Close callbacks - execute all 'close' event callbacks

        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();

};

// export handler
module.exports = requestHandler;

// other ways of exporting handler

// module.exports = {
//    handler: requestHandler,
//   someText: 'Some hard coded text'
// };