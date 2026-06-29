function clickk() {

    let enteredUsername = document.getElementById("username").value.trim();
    let enteredPassword = document.querySelector(".username-2").value;

    let savedUsername = localStorage.getItem("registeredUsername");
    let savedPassword = localStorage.getItem("Password");

    if (enteredUsername === "") {
        alert("Enter username first!");
        return false;
    }

    if (enteredUsername !== savedUsername) {
        alert("Username not found!");
        return false;
    }

    if (enteredPassword !== savedPassword) {
        alert("Incorrect password!");
        return false;
    }

    localStorage.setItem("username", enteredUsername);

    alert("Login successful!");

    return true;
}