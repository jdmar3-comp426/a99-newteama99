
window.addEventListener("load", function () {
    function sendData() {
        const sendRequest = new XMLHttpRequest();
        const signupInfo = new URLSearchParams(new FormData(registerForm));

        sendRequest.open("POST", "http://localhost:5000/app/new/");
        sendRequest.send(signupInfo);
    };  

    const registerForm = document.getElementById("signup");

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        sendData();
    });
    
});