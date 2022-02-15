// homework by Coco Koban (cococokoko), Ishia Calinisan (ishiacalinisan), Hanna Horst (horsthanna) and Philippe Henderson

// <---------User creation form code----------->

function createUser(event) {
    event.preventDefault();

    const fetchUrl = 'https://mscbt-luis-grande.herokuapp.com/session5/users';
    const fetchOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(getUserData())
    };

    fetch(fetchUrl, fetchOptions)
        .then(response => response.json())
        .then(data => console.log(data));
}

function getUserData() {
    return {
        userName: getUserName(),
        email: getEmail(),
        favouriteBand: getFavouriteBand(),
        favouriteDish: getFavouriteDish(),
        somethingAboutYou: getSomethingAboutYou()
    };
}

function getUserName() {
    const userNameInput = document.querySelector('#userName');
    return userNameInput.value;
}

function getEmail() {
    const emailInput = document.querySelector('#email');
    return emailInput.value;
}

function getFavouriteBand() {
    const favouriteBandInput = document.getElementById('favouriteBand');
    return favouriteBandInput.value;
}

function getFavouriteDish() {
    const favouriteDishInput = document.getElementById('favouriteDish');
    return favouriteDishInput.value;
}

function getSomethingAboutYou() {
    const somethingAboutYouInput = document.getElementById('somethingAboutYou');
    return somethingAboutYouInput.value;
}

// Use document.querySelector and addEventListener to select the form in the HTML (you can do it via the tag selector or via the id selector) and add a listener to the "submit" event with the eventHandler "createUser"

// EVENT HANDLING
document.querySelector('#create-user-form').addEventListener('submit', createUser);


// <---------End of user creation form code----------->

// <---------Refresh user list code----------->

function refreshUserList() {
    const fetchUrl = 'https://mscbt-luis-grande.herokuapp.com/session5/users';


    fetch(fetchUrl)
        .then(response => response.json())
        .then(data => { renderUserList(data) });

    // YOUR FETCH CODE HERE
}

function renderUserList(users) {
    // Select HTML element with id user-list
    const userList = document.querySelector('#user-list');
    // Remove everything in the user-list container
    userList.innerHTML = '';
    // For each user, execute code
    users.forEach(user => {
        // Create "li" tag
        const listElement = document.createElement('li');
        // Add classes for styling
        listElement.classList.add('users__list-item');
        // Add text list element
        listElement.innerText = user.userName;

        // YOUR CODE FOR EVENT HANDLING HERE
        listElement.addEventListener('click', () => { getUserInfo(user.userName) })

        // Append list element to userList element
        userList.appendChild(listElement);
    });
}

document.getElementById('refresh-users-button').addEventListener('click', refreshUserList);

// <---------End of refresh user list code----------->

// <---------Get user info code----------->

function getUserInfo(userName) {
    const fetchUrl = 'https://mscbt-luis-grande.herokuapp.com/session5/users' + userName;

    fetch(fetchUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            renderUserList(data)
        });

    // YOUR FETCH CODE HERE
}

function renderUserInfo(userData) {
    // Select HTML element with "userInfo" id
    const userInfo = document.getElementById("userInfo")

    // Set innerHTML property of selected element to an empty string
    userInfo.innerHTML = '';

    // Loop over the userData object (Remember, you can use the for...in loop style we saw in session3)
    for (userKey in userData) {
        // Create an h3 element
        const h3_element = document.createElement('h3');

        // Set the innerText property of the h3 element to the key of the loop interation
        h3_element.innerText = userKey;

        // Create a p element
        const p_element = document.createElement('p');

        // Set the innerText property of the p element to the value of the loop iteration
        p_element.innerText = userData[userKey];

        // Append the h3 element to the userInfo container
        userInfo.appendChild(h3_element);

        // Append the p element to the userInfo container
        userInfo.appendChild(p_element);

    }
}

// <---------End of get user info code----------->


// <---------Part 1----------->

// Fill in the code for getEmail, getFavouriteBand, getFavouriteDish and getSomethingAboutYou functions to get the values of the inputs in the form (you can use getUserName as an example)

// Fill in the code for createUser function to use fetch to call the "fetchUrl" with the provided "fetchOptions".

// Fill in the code where it says YOUR CODE HERE FOR EVENT HANDLING

// In the web browser, fill in the data in the form to tell us something about you and click the create user button

// <--------- End of Part 1----------->

// <---------Part 2----------->

// Fill in the code refreshUserList function to use fetch to call the "fetchUrl", extract the json from the response and render a list of users (Hint: there is a function already written for that)

// Click the refresh user list button and see what happens. We will discus what's happened

// Modify the function that renders the user list and add an event handler to each list element that when the elements gets clicked, executes the getUserInfo handler passing the user as a parameter of the function call

// <--------- End of Part 2----------->

// <---------Part 3----------->
// Fill in the code for getUserInfo function to use fetch to cal the "fetchUrl", extract the json from the response and render the info for that user

// Fill in the code of renderUserInfo to actually render the info for the user we just fetched from the web server.

// Now, when clicking on one of the users in the user list you should get a detail of the data for that user

// <--------- End of Part 3----------->

// <---------Homework----------->

// Feel free to join in groups to do the homework (Top 3/4 people). If that's the case, put the group members in the top of the file as a code comment
// Please push a branch to the repo with your name/s as branch name with the solutions for homework
// To create a new branch using git run the following command:
// git checkout -b BRANCH_NAME
// To push it to the repo using git, run the following command:
// git push origin BRANCH_NAME
// Branch names should not contain strange characters, so for example "git checkout -b Luis Grande" is invalid as branch name, run "git checkout -b luis_grande" for example

// In Part 1, show a success notification when receiving the response from the server when creating a new user
// Hint: there are already some functions implemented to show notifications (Check the bottom of the file)
// In Part 1, create an if else clause that executes two different things. If the json we get from the response contains a key "errorMessage", then show an error notification and if not, show the success notification we just created.
// Note: The web server will return this "errorMessage" key in the response when trying to create a user who has a userName that has already been used.

// Do Part 3 of the exercise

// If you want to prepare for next class, here you have a couple of CodeAcademy links that will be very useful:
// https://www.codecademy.com/courses/learn-css/lessons/box-model-intro/exercises/box-model-intro
// https://www.codecademy.com/courses/learn-css/lessons/css-display-positioning

// <---------End of homework----------->

// <---------Notification code----------->
function showUserCreatedNotification(userName) {
    showNotification('success', userName + ' user created');
}

function showErrorNotification(message) {
    showNotification('error', message);
}

function showNotification(type, content) {
    // Create a div tag for the container of the notification
    const notificationContainer = document.createElement('div');
    // Add classes to the notification container
    notificationContainer.classList.add('notification');
    if (type === 'success') {
        notificationContainer.classList.add('notification--success');
    }
    if (type === 'error') {
        notificationContainer.classList.add('notification--error');
    }
    // Create a p tag for the content for the notification
    const notificationContent = document.createElement('p');
    // Add classes to the notification content
    notificationContent.classList.add('notification__content');
    // Add text to the notification content
    notificationContent.innerText = content;
    // Append the p tag representing the content to the div tag representing the container
    notificationContainer.appendChild(notificationContent);
    // Append the notification element to the body tag
    document.querySelector('body').appendChild(notificationContainer);
    // Add visible class after 100ms to allow notification animation
    setTimeout(() => {
        notificationContainer.classList.add('notification--visible');
    }, 100);
    // Remove visible class after 5000ms to allow notification animation
    setTimeout(() => {
        notificationContainer.classList.remove('notification--visible');
    }, 5000);
}

// <---------End of notification code----------->