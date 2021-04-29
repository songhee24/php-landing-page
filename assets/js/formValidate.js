function phoneNumberFormatter() {
    const inputField = document.getElementById("phone");
    const formattedInputValue = formattPhoneNumber(inputField.value);
    inputField.value = formattedInputValue;
}

function formattPhoneNumber(value) {
    if (!value) return value;
    const phoneNumber = value.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
        return ` ${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3)}`;
    }
    // finally, if the phoneNumberLength is greater then seven, we add the last
    // bit of formatting and return it.
    return ` ${phoneNumber.slice(0, 3)} ${phoneNumber.slice(3, 6)} ${phoneNumber.slice(6, 8)}`;
}

function phonenumber() {
    let error = document.getElementById("error-message");
    let inputtxt = document.getElementById("phone").value;
    console.log("validator " + inputtxt);
    let phoneno = /\d{3}[-.\s]?\d{3}[-.\s]?\d{3}/g;
    if ((inputtxt.match(phoneno))) {
        error.classList.remove('d-block');
        return true;
    } else {
        console.log(error);
        error.classList.add('d-block');
        error.innerHTML = "Номер туура эмес";
        return false;
    }
}