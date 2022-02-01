"use strict";

// add a handler to button 1 so it changes the background of the page when clicked


const button1 = document.querySelector("button1");
const body = document.querySelector("body");

const button1Handler = () => {
    body.style.backgroundColor = "red";
    console.log("hi");
}

button1.addEventListener("click", button1Handler)

// add a handler to button 2 so it adds the text "dynamically created" to the <h1>

// add a handler to button 3 so it changes the color of the text in the title
