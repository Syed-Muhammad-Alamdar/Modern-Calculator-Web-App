function clikk() {

    let username = document.getElementById("username").value.trim();
    let password = document.querySelector(".username-2").value;
    let phoneNumber = document.querySelector(".username-4").value;

    localStorage.setItem("registeredUsername", username);
    localStorage.setItem("Password", password);
    localStorage.setItem("Phone", phoneNumber);

    alert("Account created successfully!");

    return true;
}