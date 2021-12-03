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

        updateSuccessMsg.style.opacity = 1;
    
})