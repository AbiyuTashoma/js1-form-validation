const feedbackContainer = document.querySelector(".message");
const form = document.querySelector("form");
const firstNameContainer = document.querySelector("#firstname");
const lastNameContainer = document.querySelector("#lastname");
const emailContainer = document.querySelector("#email");
const button = document.querySelector("button");

function validate (){
    const firstName = firstNameContainer.value;
    const lastName = lastNameContainer.value;
    const email = emailContainer.value;
    
    if (validateName(firstName) && validateName(lastName, 4) && validateEmail(email)) {
        console.log(firstName);
        console.log(lastName);
        console.log(email);
        button.disabled = false;
    }

    else {
        feedbackContainer.innerHTML = "";
        button.disabled = true;
    }  

}

function validateName (value, len = 1) {
    if (value.trim().length >= len) {
        return true
    }
}

function validateEmail (emailValue) {
    const regEx = /\S+@\S+\.\S+/;
    const match = regEx.test(emailValue);
    return match;
}

function displayMessage() {
    feedbackContainer.innerHTML = `<div class="feedback">Your form has been sent</div>`;
}

firstNameContainer.addEventListener("keyup", validate);
lastNameContainer.addEventListener("keyup", validate);
emailContainer.addEventListener("keyup", validate);

function submit(event) {
    event.preventDefault();
    displayMessage();
    form.reset();
}

form.addEventListener("submit", submit);