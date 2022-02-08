// #### Part 1
// We are going to fetch data from an external API and create elements with the response we receive


// For this exercises we are going to use an API with quotes from series
const apiUrl = 'https://movie-quote-api.herokuapp.com';

// Use fetch to call the API and console log the response

//---------------------//

fetch(apiUrl)
    .then(data => data.json())
    .then(json => console.log(json.showSlugs))


// YOUR CODE HERE

//---------------------//

// From the response, get the data as json and console log the "showSlugs" key

//---------------------//

// YOUR CODE HERE

//---------------------//

// Create a "ul" tag with class "show-slugs__list" and append it to the "div" with class "show-slugs" we have just created
// For each show slug in the "showSlugs" array from the response, create a "li" tag with class "show-slugs__list-item" and append it to the "ul" we have just created

//---------------------//
\
const divContainer = document.querySelector('.show-slugs');

const ulContainer = document.createElement("ul");
ulContainer.classList.add('show-slugs__list');

fetch(apiUrl)
    .then(data => data.json())
    .then(json => {
        json.showSlug.forEach((showSlug, index) => {
            const liContainer = document.createElement('li')
            liContainer.classList.add('show-slugs__list-item')
            liContainer.innerText = showSlug;
            if (index % 2 === 0) {
                liContainer.classList.add('highlight')
            }
            ulContainer.appendChild(liContainer)
        })
        divContainer.append(ulContainer)
    })


// YOUR CODE HERE

//---------------------//

// #### Part 2
// We are going to add some styles to the list of shows we have created


// Go to the movie-quote.html file and link the css file "movie-quote.css" in your html using a "link" tag

// Open the css file in the code editor and create a "show-slugs__list" class selector and set the following properties:
// list-style --> none

// Open the css file in the code editor and create a "show-slugs__list-item" class selector and set the following properties:
// padding --> 8px

// Open the css file in the code editor and create a "highlight" class selector and set the following properties:
// color --> use your favourite color

// Modify the code where we are creating the li elements and add the highlight class only for the odd elements


// #### Part 3
// We are going to add events to the HTML we just created

// This is the URL to get a quote from a show. You need to append the show slug to this URL (ex. https://movie-quote-api.herokuapp.com/v1/shows/the-wire)
const apiQuoteUrl = 'https://movie-quote-api.herokuapp.com/v1/shows/';

// Modify the code to add the following behaviour

// Add an event listener to the click event on each "li" tag that fires a request to the apiQuoteUrl for the corresponding show slug.
// With that response, do the following DOM manipulations
// Create a "h2" tag with the "show" key we have received from the server and appending to the "div" with class "show-quote".
// Create a "h3" tag with the "role" key we have received from the server and appending to the "div" with class "show-quote".
// Create a "p" tag with the "quote" key we have received from the server and appending to the "div" with class "show-quote".

// Modify the css we created and add a selector for the "show-slugs__list-item" class and set the following properties:
// cursor --> pointer
