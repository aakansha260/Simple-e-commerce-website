function validateForm() {
    var name = document.getElementById("nameField").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;

    if (name.trim() === '') {
        alert('Please enter Full Name');
        return false;
    }

    var emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailReg.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    var phoneReg = /^\d{10}$/;
    if (!phoneReg.test(phone)) {
        alert('Please enter a valid phone number');
        return false;
    }

    if (address.trim() === '') {
        alert('Please enter Shipping Address');
        return false;
    }

    if (state === '') {
        alert('Please select a State');
        return false;
    }

    var zipReg = /^\d{6}$/;
    if (!zipReg.test(zip)) {
        alert('Please enter a valid ZIP code');
        return false;
    }

    return true;
}