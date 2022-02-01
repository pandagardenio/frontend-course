"use strict";

// 1. Create a loop that iterates 10 times logging the current iteration

for(let i = 0; i < 10; i++) {
    console.log(i);
}

// 2. Iterate over the following array, describing what a band needs!
let aBandNeeds = ["drummer", "guitarist", "bassist", "singer"];

for (let i = 0; i < aBandNeeds.length; i++) {
    console.log(aBandNeeds[i]);
}

// 3. Create a loop that prints what do all beatles do!

let beatles = {
    drummer: "Ringo",
    guitarist: "George",
    bassist: "Paul",
    singer: "John"
};

for (let instrument in beatles) {
    console.log(beatles[instrument] + ' is a ' + instrument);
}

console.log(Object.keys(beatles));
