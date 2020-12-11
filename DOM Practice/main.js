/*
//Single element
console.log(document.getElementById('my-form'));
console.log(document.querySelector('h1'));

//Multiple element
console.log(document.getElementsByClassName('item'));
const items= document.querySelectorAll('item');
items.forEach((item) => console.log(item));

var ul = document.querySelector('.items');
ul.remove();
ul.lastElementChild.remove();
ul.firstElementChild.textContent='Hello';
ul.children[1].innerText='Welcome';
ul.children[2].innerHTML='<h1>Hello</h1>';

const btn= document.querySelector('.btn');
btn.style.background='red';
btn.addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#my-form').style.background='#ccc';
    document.querySelector('.items').lastElementChild.innerHTML='<h1>Hello</h1>'
    
});
*/


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const users = document.querySelector('#users');
myForm.addEventListener('submit', onSubmit);

function onSubmit(e){
    e.preventDefault();
    if(nameInput.value===''|| emailInput.value==='')
    {
        msg.classList.add('error');
        msg.innerHTML = 'Please Enter All Fields.';
        setTimeout(()=> msg.remove(),3000);
    }
    else
    {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        users.appendChild(li);

        //ClearFields
        nameInput.value='';
        emailInput.value='';
    }
}