// ## Exercise 1

// Create a simple webpage in which, when a button is clicked, all the
// links change their background to blue and their text color to white.
const button = document.querySelector('#exercise-1-button');
function buttonHandler() {
    const links = document.querySelectorAll('a');
    links.forEach((link) => {
        link.style.color = 'white';
        link.style.backgroundColor = 'blue';
    });
}
button.addEventListener('click', buttonHandler);

// ## Exercise 2

// Investigate the functional methods on array.  Namely **map**,
// **filter**, **forEach**, and **reduce**.

// Try to apply them to the following cases:

// - given an array of numbers, return only the **even ones**
// - given an array of numbers, return its **sum**
// - given an array of numbers, **log all** in the console
// - given an array of numbers, return a new array with **all elements
//   squared**

const numbers = [12, 18, 15, 16, 5, 9, 2, 6, 13, 7, 14, 10, 8, 4, 11];

function evenNumbersLoops(numbers) {
    const evenNumbers = [];
    for (let i = 0; i<numbers.length; i++) {
        const isEven = numbers[i] % 2 == 0;
        if (isEven) {
            evenNumbers.push(numbers[i]);
        }
    }
    return evenNumbers;
}

function evenNumbers(numbers) {
    return numbers.filter((number) => {
        const isEven = number % 2 == 0;
        return isEven;
    });
}

console.log(evenNumbers(numbers));
console.log(evenNumbersLoops(numbers));

function sumNumbersLoop(numbers) {
    let sum = 0;
    for(let i = 0; i <numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum
}

function sumNumbers(numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
}

console.log(sumNumbers(numbers));
console.log(sumNumbersLoop(numbers));

function logNumbers(numbers) {
    numbers.forEach(number => {
        console.log(number);
    });
}

logNumbers(numbers);


function squaredNumbers(numbers) {
    return numbers.map(number => {
        return Math.pow(number, 2);
        return number * number;
    });
}

console.log(squaredNumbers(numbers));
