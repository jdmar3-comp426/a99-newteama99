
window.addEventListener("load", function () {
    
    //XML Request to Pst a new user to database
    function sendData() {
        const sendRequest = new XMLHttpRequest();
        const signupInfo = new URLSearchParams(new FormData(registerForm));

        sendRequest.open("POST", "http://localhost:5000/app/new/");
        sendRequest.send(signupInfo);
    };  

    //Gets User, pass, and email into a form object
    const registerForm = document.getElementById("signup");

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        sendData();
    });
    
});