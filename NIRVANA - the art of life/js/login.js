var forms = document.getElementById("forms");
var usernames = document.getElementById("usernames");
var emails = document.getElementById("emails");
var password1s = document.getElementById("password");

var msg = document.querySelector("small");

forms.addEventListener("submit", function(e) {
    e.preventDefault();
    checkInput1();
});

function checkInput1() {
    const usernameValues = usernames.value.trim();
    if (usernameValues === '') {
        showError(usernames, "Username can not be blank");
    } else if (!isUsernameValid(usernameValues)) {
        showError(usernames, "Enter valid Username");
    } else {
        showSuccess(usernames);
    }
    const emailValues = emails.value.trim();
    if (emailValues === '') {
        showError(emails, "Email can not be blank");
    } else if (!isEmailValid(emailValues)) {
        showError(emails, "Enter valid mail id");
    } else {
        showSuccess(emails);
    }
    const password1Values = password1s.value.trim();
    if (password1Values === '') {
        showError(password1s, "Password can not be blank");
    } else {
        showSuccess(password1s);
    }
   
}

function showError(input, msg) {
    const formControl = input.parentNode;
    formControl.className = "form-data error";
    const small = formControl.querySelector("small")
    small.innerHTML = msg

}

function showSuccess(input) {
    const formControl = input.parentNode;
    formControl.className = "form-data success";
   
}

function isEmailValid(email) {
    return /^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email);
}

function isUsernameValid(username) {
    return /^([a-z0-9]+)$/.test(username);
}