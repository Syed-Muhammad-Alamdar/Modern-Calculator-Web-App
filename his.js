let user = localStorage.getItem("username");

if (!user) {
    alert("Please login first!");
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function () {
    let history = JSON.parse(localStorage.getItem("Result")) || [];
    let container = document.getElementById("history-container");
    let emptyMessage = document.getElementById("empty-message");

    if (history.length === 0) {
        emptyMessage.innerHTML = "You don't have any history 😃";
    } else {
        emptyMessage.style.display = "none";
                for (let i = 0; i < history.length; i++) {
            container.innerHTML += `<div class="history-item"><span>${history[i]}</span></div>`;
        }
    }
});