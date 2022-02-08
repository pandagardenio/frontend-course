const eventsContainer = document.querySelector('#events');

const writeEvent = (event) => {
    const pContainer = document.createElement('p');
    let eventText = 'Event: ' + event.type + '; Element: ' + event.target.tagName.toLowerCase() + ';';
    if (event.type === 'keydown') {
        eventText += 'Key code: ' + event.code + ';';
    }
    if (event.type === 'change') {
        eventText += 'Value: ' + event.target.value + ';';
    }
    pContainer.innerText = eventText;
    eventsContainer.appendChild(pContainer);
}

const button = document.querySelector('#button-1');
button.addEventListener('click', writeEvent);
const input = document.querySelector('#input-1');
input.addEventListener('change', writeEvent);
input.addEventListener('keydown', writeEvent);
const square = document.querySelector('#square');
square.addEventListener('mouseover', writeEvent);
square.addEventListener('mouseout', writeEvent);
