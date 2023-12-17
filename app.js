const http = require('http');

const hostname = '0.0.0.0';
const port = 3000;

const mongoDB = 'mongodb://root:wMwonzj=yGq8@35.175.199.244:27017';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Actividad 1 - Jorge Anselmo Alvarado Balbuena\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});