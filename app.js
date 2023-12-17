const http = require('http');
const mongoose = require('mongoose');

const hostname = '0.0.0.0';
//const hostname = 'localhost';
const port = 3000;

// MongoDB connection string
const mongoDB = 'mongodb://root:wMwonzj=yGq8@35.175.199.244:27017';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;
const localDb = db.useDb('local');

// Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
const StartupLog = localDb.model('StartupLog', new mongoose.Schema({}, { strict: false }), 'startup_log');

const server = http.createServer(async (req, res) => {
    try {
        // Query the database
        const logs = await StartupLog.find({});
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        // Convert logs to string and append to response
        res.end('Actividad 2 - Jorge Anselmo Alvarado Balbuena\n' + JSON.stringify(logs, null, 2));
    } catch (err) {
        console.error(err);
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        res.end('An error occurred while retrieving data from MongoDB\n');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
