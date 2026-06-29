let user = localStorage.getItem("username");

if (!user) {
    alert("Please login first!");
    window.location.href = "index.html";
}

function verifyPhone() {
    let Phone = localStorage.getItem("Phone");
    let val = document.getElementById("inp").value;
    let displayElement = document.getElementById("password-display");
    
    if(Phone == val){
        let pass = localStorage.getItem("Password");
        displayElement.innerText = "Your Password: " + pass;
    } else {
        displayElement.innerText = "Phone number not found!";
        displayElement.style.color = "#ff4d4d"; 
        displayElement.style.textShadow = "0 0 10px rgba(255, 77, 77, 0.4)";
    }
}