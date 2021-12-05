const updateForm = document.getElementById("update-form");
const updateButton = document.getElementById("update-form-submit");
const updateSuccessMsg = document.getElementById("update-success-msg");

// When the login button is clicked, the following code is executed
updateButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    const username = updateForm.username.value;
    const password = updateForm.password.value;

    var url = window.location.href.indexOf("?id");
    var userID = window.location.href.substring(url+4);

    function sendData() {
        const sendRequest = new XMLHttpRequest();
        const signupInfo = new URLSearchParams(new FormData(registerForm));

        sendRequest.open("PATCH", "http://localhost:5000/app/user/"+ userID);
        sendRequest.send(signupInfo);
    };  

    //Gets User, pass, and email into a form object
    const registerForm = document.getElementById("signup");

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        sendData();
    });


    updateSuccessMsg.style.opacity = 1;
    
})