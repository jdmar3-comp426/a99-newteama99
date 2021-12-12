
window.addEventListener("load", function () {
  
    //Searches URL for ID passed from connecting website
    var url = window.location.href.indexOf("?id");
    var userID = window.location.href.substring(url+4);
    
    //API delete connector
    async function deleteUser() {
       const response = await fetch('http://localhost:5000/app/delete/user/' + userID, {
           method: 'DELETE'
       });

    };  

    const registerForm = document.getElementById("signup");

    //Will delete based on logged in ID and return to login
    registerForm.addEventListener("click", function(event) {
        event.preventDefault();
        deleteUser();
        location.replace("index.html");
    });
    
});