"use strict";

const bands = [
  {
    name: "The Beatles",
    instruments: {
      John: "voice",
      Paul: "bass",
      Ringo: "drums",
      George: "guitar"
    }
  },
  {
    name: "The Ramones",
    instruments: {
      Johnny: "voice",
      Joey: "guitar",
      Marky: "drums",
      DeeDee: "bass"
    }
  }
];


// Render all the HTML generated in the element with class main
// Each band should be inside a div
// Band name should be in a h2 tag
// Band members should be in a p tag each with its instrument as class attribute
<<<<<<< HEAD

const main = document.querySelector('.main');

for (let i in bands){
  let band = bands[i];
  let bandDiv = document.createElement("div");

  bandDiv.innerHTML = "<h2>" + band.name + "</h2>";

  for (let member in band.instruments){
    let memberContainer = document.createElement("p");
    memberContainer.innerHTML = member;
    memberContainer.classList.add(band.instruments[member]);
    bandDiv.appendChild(memberContainer)
  }

  main.appendChild(bandDiv);
}


const show = () => {
  const myContainer = document.createElement("div");
  myContainer.innerHTML = '<h2>' + HI + '</h2>'
  document.appendChild(myContainer)
}

button.addEventListener('click', show)
=======
const main = document.querySelector('.main');

for (let i in bands) {
    let band = bands[i];
    let bandDiv = document.createElement("div");

    let bandName = document.createElement('h2');
    bandName.innerHTML = band.name;
    // bandDiv.innerHTML = "<h2>" + band.name + "</h2>";
    bandDiv.appendChild(bandName);

    for (let member in band.instruments) {
        let memberContainer = document.createElement("p");
        memberContainer.innerHTML = member;
        memberContainer.classList.add(band.instruments[member]);
        bandDiv.appendChild(memberContainer);
    }

    main.appendChild(bandDiv);
  }
>>>>>>> 448269e9f5633b34101d8bf758b17e1fbcfd658c
