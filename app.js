const form = document.getElementById("form");
const submitBtn = document.getElementById("submit-btn");
const errorText = document.querySelector(".error-text");
const emailInput = document.getElementById("email");
const modalWrapper = document.querySelector(".modal-wrapper");

// Checking email address
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return re.test(String(email).toLowerCase()); 
}

function showError(message) {
    errorText.classList.add("show");
    emailInput.classList.add("error");
    errorText.textContent = message;

    setTimeout(() => {
        hideWarning();
    }, 4000)
}

function hideWarning() {
    errorText.classList.remove("show");
    emailInput.classList.remove("error");
    errorText.textContent = "";
}

function showModal() {
    modalWrapper.classList.add("show");

    setTimeout(() => {
        modalWrapper.classList.remove("show");
    }, 5000);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    // empty email address
    if(emailInput.value === "") {
       showError("Whoops! It looks like you forgot to add your email");
       return;
     } 
    //  incorrect email address
    if(!isValidEmail(emailInput.value)) {
        showError("Please provide a valid email address");
        return;
    } 
    showModal();
    emailInput.value = "";
  
});