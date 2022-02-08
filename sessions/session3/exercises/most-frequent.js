"use strict";

function findMostFrequentElement(array) {
    let maxFrequency = 0;
    let iterationFrequency = 0;
    let item;

    for (var i = 0; i < array.length; i++) {
        for (var j = i; j < array.length; j++) {
            if (array[i] === array[j]) {
                iterationFrequency++;
            }

            if (maxFrequency < iterationFrequency) {
                maxFrequency = iterationFrequency;
                item = array[i];
            }
        }
        iterationFrequency = 0;
    }

    console.log(item + ' (' + maxFrequency + 'times)');
}

findMostFrequentElement([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);
