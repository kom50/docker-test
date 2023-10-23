const http = require('http');
const port = processenv.PORT || 8000;

// we create a simple http server
http.createServer((request, response) => {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.end('Docker is awesome!!!');

}).listen(port);

// Console will print the message
console.log(`Server running at http://127.0.0.1:${port}`);
