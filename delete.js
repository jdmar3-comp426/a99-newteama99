
window.addEventListener("load", function () {
  
    var url = window.location.href.indexOf("?id");
    var userID = window.location.href.substring(url+4);
    
    async function deleteUser() {
       const response = await fetch('http://localhost:5000/app/delete/user/' + userID, {
           method: 'DELETE'
       });

    };  

    const registerForm = document.getElementById("signup");

    registerForm.addEventListener("click", function(event) {
        event.preventDefault();
        deleteUser();
        location.replace("index.html");
    });
    
});