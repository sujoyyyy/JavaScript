const name='Sujoy';
const age = 20;

//concatenation
console.log('My name is '+name+' and my age is '+age);
//template literals
console.log(`My name is ${name} and I am ${age}`);

//strings
const s= 'Hello World';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(' '));

//Arrays-can't be reassigned
const numbers = new Array(1,2,3,4,5);
console.log(numbers);
const fruits  = ['apples','oranges','pears'];
fruits[3]='grapes';
console.log(fruits[0]);
fruits.push('bananas');
fruits.unshift('strawberry');
console.log(fruits.pop());
console.log(fruits);
console.log(fruits.indexOf('oranges'));
console.log(Array.isArray(fruits));

//object-value
const person={
    firstname: 'Sujoy',
    lastname: 'Datta',
    age: 20,
    work: ['intern','coder'],
    address:{
        college: 'IIITDM'
    }
}
person.email='sujoydatta.2009@gmail.com';
console.log(person);
const {firstname, lastname,address:{college}} = person;
console.log(college);

//array example of todosJSON
const todos = [
    {
        id:1,
        text: 'Take out Trash',
        isCompleted: true
    },
    {
        id:2,
        text: 'Email Newsletter',
        isCompleted: true
    },
    {
        id:3,
        text: 'Analytics Research',
        isCompleted: false
    }
];
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

//For loops
for(let i=0;i<3;i++)
{
    console.log(todos[i].text);
}
for(let todo of todos)
{
    console.log(todo.text);
}
todos.forEach(function(todo){
    console.log(todo.id);
})
const todoText =  todos.map(function(todo){
    return todo.text;
})
console.log(todoText);
const todoID = todos.filter(function(todo){
    return todo.isCompleted ==true;
}).map(function(todo){
    console.log(todo.text);
})

//While loops
let i=0;
while(i<3)
{
    console.log(todos[i].id);
    i++;
}

//conditionals
const x=12;
const color = x>10? 'green':'blue';
console.log(color);
if (x===10){
    console.log(x+' true');
}
else{
    console.log('False');
}

//switches
switch(color){
    case 'red': console.log('Color is Red');break;
    case 'blue': console.log('Color is Blue'); break;
    default:
        console.log('Not red or blue');
}

//Functions
function add(num1=6,num2=2){ //default
    return num1+num2;
}
console.log(add(1,2));
const addNums = (num1=1,num2=1) => num1+num2; //ES6
console.log(addNums(1,2));

//OOP

function Person(firstname, lastname, dob)
{
    this.firstname=firstname;
    this.lastname=lastname;
    this.dob= new Date(dob);
}
Person.prototype.getBirthYear=function(){
    return this.dob.getFullYear();
}
Person.prototype.getName=function(){
    return `${this.firstname} ${this.lastname}`;
}
const person1 = new Person('Sujoy','Datta','07-11-2000');
console.log(person1);

//Class
class Person_Class{
    constructor(firstname, lastname, dob){
        this.firstname=firstname;
        this.lastname=lastname;
        this.dob= new Date(dob);
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
    getName(){
        return `${this.firstname} ${this.lastname}`;
    }
}

const person2 = new Person_Class('Shubham','Datta','03-03-1998');
console.log(person2);