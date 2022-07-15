const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    // routing requests

    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcome Page</title><head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();

    }

    if (url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>User Page</title><head>');
        res.write('<body><ul><li>User 1</li></ul></body>');
        res.write('</html>');
        return res.end();

    }
    // redirecting requests
    

    if (url === '/create-user') {

        // parsing request bodies event listeners (streams & buffers)
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();

    }

};

// export handler
module.exports = requestHandler;