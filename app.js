const http = require('http');

const hostname = '0.0.0.0';
const port = 3001; // Puerto cambiado a 3001

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Actividad 2 - Jorge Anselmo Alvarado Balbuena\n');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
