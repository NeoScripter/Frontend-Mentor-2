const form = document.getElementById("email-form");
const emailInput = document.getElementById("email");
const errorMessage = document.getElementById("email-error");
const inputEmail = document.querySelector("input");
const icon = document.querySelector(".icon");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    if (emailInput.value === "") {
        emailInput.classList.add("input-error");
        errorMessage.textContent = "Please enter an email";
        icon.style.display = "block";
        errorMessage.style.display = "block";
        inputEmail.style.border = "2px solid hsl(0, 93%, 68%)";
    } else if (!validateEmail(emailInput.value)) {
        emailInput.classList.add("input-error");
        errorMessage.textContent = "Please provide a valid email";
        icon.style.display = "block";
        errorMessage.style.display = "block";
        inputEmail.style.border = "2px solid hsl(0, 93%, 68%)";
    } else {
        icon.style.display = "none";
        errorMessage.style.display = "block";
        errorMessage.style.color = "green";
        errorMessage.textContent = "Email submitted";
        emailInput.style.border = "1px solid hsl(0, 36%, 70%)";

        setTimeout(() => {
            errorMessage.style.display = "none";
            errorMessage.style.color = "";
            emailInput.style.border = ""; 
            emailInput.value = "";
        }, 3000);

        emailInput.classList.remove("input-error");
    }
});

emailInput.addEventListener("input", function() {
    emailInput.classList.remove("input-error");
    errorMessage.style.display = "none";
    icon.style.display = "none";
    errorMessage.textContent = "";
    inputEmail.style.border = "1px solid hsl(0, 36%, 70%)";
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}
