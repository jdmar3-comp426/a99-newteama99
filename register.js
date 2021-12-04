
window.addEventListener("load", function () {
  
    function sendData() {
        const sendRequest = new XMLHttpRequest();
        const signupInfo = new FormData(registerForm);

        sendRequest.addEventListener("error", function (event) {
            alert('Submission unsuccessful! Please try again.');
        });
        sendRequest.addEventListener("load", function (event) {
            alert('Your account was created!');
        });

        sendRequest.open("POST", "http://localhost:5000/app/new");
        sendRequest.send(signupInfo);
    }   

    const registerForm = document.getElementById("signup");

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        sendData();
    });
    
});