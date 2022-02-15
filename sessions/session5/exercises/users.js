// By Raban Sieglier, Jules de Vil, Nick Deitmers

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
    const userNameInput = document.getElementById('userName');
    return userNameInput.value;
}

function getEmail() {
    const emailInput = document.getElementById('email');
    return emailInput.value;
}

function getFavouriteBand() {
    const bandInput = document.getElementById('favouriteBand');
    return bandInput.value;
}

function getFavouriteDish() {
    const dishInput = document.getElementById('favouriteDish');
    return dishInput.value;
}

function getSomethingAboutYou() {
    const aboutInput = document.getElementById('somethingAboutYou');
    return aboutInput.value;
}

// Use document.querySelector and addEventListener to select the form in the HTML (you can do it via the tag selector or via the id selector) and add a listener to the "submit" event with the eventHandler "createUser"

const forum = document.querySelector('#create-user-form')
forum.addEventListener('submit', createUser)

// <---------End of user creation form code----------->

// <---------Refresh user list code----------->

function refreshUserList() {
    const fetchUrl = 'https://mscbt-luis-grande.herokuapp.com/session5/users'
    

    fetch(fetchUrl)
        .then(response => response.json())
        .then(data => {renderUserList(data)});

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

        listElement.addEventListener('click', () => {getUserInfo(user.userName)})
        
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
            renderUserList(data)});
        
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
        user_info.appendChild(h3_element);

        // Append the p element to the userInfo container
        user_info.appendChild(p_element);

    }
}

// <---------End of get user info code----------->

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