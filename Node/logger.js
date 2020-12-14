const EventEmitter = require('events');
const emitter = new EventEmitter();

var url = 'http://www.google.com';


class Logger extends EventEmitter
{
    log(message)
    {
        console.log(message);
        this.emit('messageLogged',{id: 1, url: 'http://www.google.com'});
    }
}
module.exports =Logger;