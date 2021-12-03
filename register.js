const registerForm = document.getElementById("register-form");
const registerButton = document.getElementById("register-form-submit");
const registerErrorMsg = document.getElementById("register-error-msg");

// When the login button is clicked, the following code is executed
registerButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    const username = registerForm.username.value;
    const password = registerForm.password.value;
    if (username.length > 0 && password.length > 0) {
        // If the credentials are valid, return to login   
           
        location.replace("index.html");
    } else {
        // Otherwise, make the login error message show (change its oppacity)
        registerErrorMsg.style.opacity = 1;
    }
    
})