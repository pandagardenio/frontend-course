"use strict";

let field = document.querySelector("#user");

let fn = (event) => {
    field.style.borderColor = field.value;
};

field.addEventListener("keyup", fn);
