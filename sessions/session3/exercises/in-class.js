// select the element
const button = document.querySelector('#button-clicky');

// create a handler
const showAlert = () => {
    const myContainer = document.createElement('div');
    myContainer.innerHTML = 'Button Clicked';
    document.querySelector('body').appendChild(myContainer);
};

// add the listener
button.addEventListener('click', showAlert);
