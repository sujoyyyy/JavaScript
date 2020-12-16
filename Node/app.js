//Modular Coding
const tutorial = require('./tutorial');
console.log(tutorial.sum(1,1));
console.log(tutorial.PI);
console.log(new tutorial.SomeMathObject());

//Event Emitter
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('tutorial',(num1,num2)=>{
    console.log(num1+num2);
}) 
eventEmitter.emit('tutorial',1,2);
class Person extends EventEmitter{
    constructor(name)
    {
        super();
        this._name = name;
    }

    get name(){
        return this._name;
    }
}
let sujoy = new Person('Sujoy');
sujoy.on('name',()=>{
    console.log('my name is '+sujoy.name);
})
sujoy.emit('name');



