const http = require('http');

const hostname = '0.0.0.0';
const port = 3001; // Puerto cambiado a 3001

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('mongodb://root:wMwonzj=yGq8@35.175.19.245:27017\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
