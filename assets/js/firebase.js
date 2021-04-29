var firebaseConfig = {
    apiKey: "AIzaSyDo50KSfFJdC_tuxskU-XARKyeeFr-GR4w",
    authDomain: "java-platform.firebaseapp.com",
    projectId: "java-platform",
    storageBucket: "java-platform.appspot.com",
    messagingSenderId: "177248004637",
    appId: "1:177248004637:web:1212c250f6f063a1fff4f4",
    measurementId: "G-5PYSDK03X9"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

//messages collections
var messagesRef = firebase.database().ref('messages');

let contactForm = document.getElementById("contact-from");
contactForm.addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    //GetValues
    let name = getInputValues("name");
    let phone = "+996" + getInputValues("phone");
    let message = getInputValues("message");
    console.log(name);
    console.log(phone);

    if (phonenumber()) {
        saveMessage(name, phone, message);
        showAlert();
        disable();
    }

    //reset input values
    contactForm.reset();
}

//show alert
function showAlert() {
    //show alert
    document.querySelector('.sent-message').style.display = 'block';

    //Hide alert after 4 seconds
    setTimeout(function () {
        document.querySelector('.sent-message').style.display = 'none';
    }, 4000);
}

//disable button after send messages
function disable() {
    let x = document.getElementById("submit");
    x.disabled = true;
    setTimeout(function () {
        x.disabled = false;
    }, 4000);
}


//function to get form values
function getInputValues(id) {
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(name, phone, message) {
    let newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        phone: phone,
        message: message,
    });
}