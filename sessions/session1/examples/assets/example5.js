function getInputValue(inputElement) {
    return inputElement.value;
}

function getFormName() {
    return getInputValue(document.querySelector('#form-name'));
}

function getFormFavouriteAnimals() {
    return getInputValue(document.querySelector('#form-favourite-animals'));
}

function getFormComments() {
    return getInputValue(document.querySelector('#form-comments'));
}

function getFormValues() {
    return {
        name: getFormName(),
        favouriteAnimals: getFormFavouriteAnimals(),
        comments: getFormComments()
    };
}

document.querySelector('#form-submit').addEventListener('click', function (event) {
    event.preventDefault();
    alert(JSON.stringify(getFormValues()));
});