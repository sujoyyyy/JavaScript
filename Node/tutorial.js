function sum(num1,num2){
    return num1+num2;
}
const PI = 3.14;
class SomeMathObject{
    constructor(){
        console.log('Object created');
    }
}
module.exports = {
    sum: sum,
    PI:PI,
    SomeMathObject: SomeMathObject
};
