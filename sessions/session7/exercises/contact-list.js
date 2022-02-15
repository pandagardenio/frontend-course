// const usersEndpoint = 'https://mscbt-luis-grande.herokuapp.com/session7/contacts'
const usersEndpoint = 'http://localhost:3100/session7/contacts'

function getContacts() {
    return fetch(usersEndpoint)
        .then(response => response.json())
        .then(contacts => contacts.filter(contact => contact.userName));
}

function getContact(contact) {
    return fetch(usersEndpoint + '/' + contact.userName)
        .then(response => response.json())
}

function renderContacts(contacts) {
    const contactListContainer = document.getElementById('contact-list');
    const contactList = document.createElement('ul');
    contactList.classList.add('contact-list__items');
    contacts.forEach(contact => {
        const contactListItem = document.createElement('li');
        contactListItem.classList.add('contact-list__item');
        contactListItem.innerText = contact.userName;
        contactListItem.addEventListener('click', () => {
            getContact(contact)
                .then(fetchedContact => { renderContactDetails(fetchedContact); });
        });
        contactList.appendChild(contactListItem);
    });
    contactListContainer.appendChild(contactList);
}

function clearContactDetails() {
    const contactDetailsContent = document.querySelector('#contact-details-content');
    const contactDetails = document.querySelector('#contact-details');
    contactDetails.classList.remove('contact-details--with-content');
    contactDetailsContent.innerHTML = 'Click on a contact name to show contact details';
}

function renderContactDetails(contact) {
    const contactDetails = document.querySelector('#contact-details');
    contactDetails.classList.add('contact-details--with-content');
    const contactDetailsContent = document.querySelector('#contact-details-content');
    contactDetailsContent.innerHTML = '';
    for (contactKey in contact) {
        const keyTitle = document.createElement('h3');
        keyTitle.innerText = contactKey;
        const valueText = document.createElement('p');
        valueText.innerText = contact[contactKey];
        contactDetailsContent.appendChild(keyTitle);
        contactDetailsContent.appendChild(valueText);
    }
}

function createElegibleContactsContainer() {
    const elegibleContactsContainer = document.createElement('div');
    elegibleContactsContainer.id = 'elegible-contacts';
    elegibleContactsContainer.classList.add('elegible-contacts');
    document.getElementById('contact-search-container').appendChild(elegibleContactsContainer);
    return elegibleContactsContainer;
}

function clearElegibleContacts() {
    const elegibleContactsContainer = document.querySelector('#elegible-contacts');
    elegibleContactsContainer.parentNode.removeChild(elegibleContactsContainer);
}

function renderElegibleContact(elegibleContactsContainer, elegibleContact) {
    const elegibleContactContainer = document.createElement('div');
    elegibleContactContainer.classList.add('elegible-contacts__item');
    elegibleContactContainer.innerText = elegibleContact.userName;
    elegibleContactContainer.addEventListener('click', () => {
        renderContactDetails(elegibleContact);
        clearElegibleContacts();
    });
    elegibleContactsContainer.appendChild(elegibleContactContainer);
}

function searchContacts(query) {
    getContacts()
        .then(contacts => {
            const elegibleContacts = contacts.filter(contact => {
                console.log(query, contact.userName, contact.userName.indexOf(query));
                return contact.userName.toLowerCase().indexOf(query) > -1;
            });
            const elegibleContactsContainer = document.querySelector('#elegible-contacts') || createElegibleContactsContainer();
            elegibleContactsContainer.innerHTML = '';
            elegibleContacts.forEach(elegibleContact => {
                renderElegibleContact(elegibleContactsContainer, elegibleContact);
            });
        });
}

function initSearchContact() {
    const contactSearch = document.getElementById('contact-search');
    contactSearch.addEventListener('keyup', () => {
        searchContacts(contactSearch.value);
    });
}

function initContactDetailsClose() {
    document.getElementById('contact-details-close').addEventListener('click', () => {
        clearContactDetails();
    });
}

clearContactDetails();
initContactDetailsClose();
initSearchContact();
getContacts().then(contacts => {
    renderContacts(contacts);
});
