
function isValidEmail(email) {
    const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailReg.test(email);
}

function isValidPhoneNumber(phoneNumber) {
    return phoneNumber.length === 10 && !isNaN(phoneNumber);
}

function isValidPassword(password) {
    return password.length >= 8;
}

function validateLogin() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (!isValidEmail(email)) {
        alert("Invalid email address. Please enter a valid email address.");
        return false;
    }

    if (!isValidPassword(password)) {
        alert("Invalid password. Password length should be at least 8 characters.");
        return false;
    }

    return true;
}

function validateSignUp() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("signupEmail").value;
    const phoneNumber = document.getElementById("contactNumber").value;
    const password = document.getElementById("signupPassword").value;

    if (!isValidEmail(email)) {
        alert("Invalid email address. Please enter a valid email address.");
        return false;
    }

    if (!isValidPhoneNumber(phoneNumber)) {
        alert("Invalid phone number. Please enter a valid 10-digit phone number.");
        return false;
    }

    if (!isValidPassword(password)) {
        alert("Invalid password. Password length should be at least 8 characters.");
        return false;
    }

    return true;
}