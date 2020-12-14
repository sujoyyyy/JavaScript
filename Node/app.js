//Testing some features

//Displaying path
const path = require('path');
var pathObj = path.parse(__filename);
console.log(pathObj);

//OS details
const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log(`${totalMemory} : Total Memory`);
console.log(`${freeMemory} : Free Memory`)

//File System
const fs = require('fs');
const files = fs.readdirSync('./');
fs.readdir('./',function(err,files){
    if(err) console.log('Error : ',err);
    else console.log('Result: ',files);
});

//Events
const EventEmitter = require('events');
const Logger = require('./logger');
const logger  = new Logger();
logger.on('messageLogged',(arg)=>{
    console.log('Listener called', arg);
});

logger.log('message');


//HTTP
const http = require('http');
const server  = http.createServer(function(req,res){
    if(req.url==='/'){
        res.write('Hello World');
        res.end();
    }
    if(req.url==='/array'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);
console.log('Listening on port 3000');