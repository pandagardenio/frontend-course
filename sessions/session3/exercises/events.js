"use strict";

// add a handler to button 1 so it changes the background of the page when clicked


const button1 = document.querySelector('#button1');
const button1Handler = () => {
    const body = document.querySelector('body');
    body.style.backgroundColor = 'black';
}
button1.addEventListener('click', button1Handler);


// add a handler to button 2 so it adds the text "dynamically created" to the <h1>
const button2 = document.querySelector('#button2');
const button2Handler = () => {
    const h1Tag = document.querySelector('h1');
    h1Tag.innerHTML = 'dynamically Created';
}
button2.addEventListener('click', button2Handler);

// add a handler to button 3 so it changes the color of the text in the title
const button3 = document.querySelector('#button3');
const button3Handler = () => {
    const h1Tag = document.querySelector('h1');
    h1Tag.style.color = 'red';
}

button3.addEventListener('click', button3Handler);
