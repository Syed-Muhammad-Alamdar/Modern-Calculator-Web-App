let user = localStorage.getItem("username");

if (!user) {
    alert("Please login first!");
    window.location.href = "index.html";
}

function getCleanHistory() {
    let data = localStorage.getItem("Result");
    if (!data) return []; 
    
    try {
        let parsed = JSON.parse(data);
        if (!Array.isArray(parsed)) {
            return [];
        }
        return parsed;
    } catch(e) {
        return [];
    }
}

function add(){
    let n1 = document.getElementById("num1").value;
    let n2 = document.getElementById("num2").value;
    let result = Number(n1) + Number(n2);

    document.getElementById("result").innerHTML = "Result<br>";
    document.getElementById("result-2").innerHTML = result;

    let history = getCleanHistory(); 
    history.push(`${n1} + ${n2} = ${result} (${new Date().toLocaleString()})`);
    localStorage.setItem("Result", JSON.stringify(history));
}

function subtract(){
    let n3 = document.getElementById("num1").value;
    let n4 = document.getElementById("num2").value;
    let result = Number(n3) - Number(n4);

    document.getElementById("result").innerHTML = "Result<br>";
    document.getElementById("result-2").innerHTML = result;

    let history = getCleanHistory();
    history.push(`${n3} - ${n4} = ${result} (${new Date().toLocaleString()})`);
    localStorage.setItem("Result", JSON.stringify(history));
}

function multiply(){
    let n5 = document.getElementById("num1").value;
    let n6 = document.getElementById("num2").value;
    let result = Number(n5) * Number(n6);

    document.getElementById("result").innerHTML = "Result<br>";
    document.getElementById("result-2").innerHTML = result;

    let history = getCleanHistory();
    history.push(`${n5} * ${n6} = ${result} (${new Date().toLocaleString()})`);
    localStorage.setItem("Result", JSON.stringify(history));
}

function divide(){
    let n7 = document.getElementById("num1").value;
    let n8 = document.getElementById("num2").value;
    let result = Number(n7) / Number(n8);

    document.getElementById("result").innerHTML = "Result<br>";
    document.getElementById("result-2").innerHTML = result;

    let history = getCleanHistory();
    history.push(`${n7} / ${n8} = ${result} (${new Date().toLocaleString()})`);
    localStorage.setItem("Result", JSON.stringify(history));
}

function clearInputs(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result-2").innerHTML = 0;
}

function clearHistory(){
    localStorage.removeItem("Result");
    alert("History Deleted!");
}

window.onload = function(){
    let username = localStorage.getItem("username");
    if(username){
        document.getElementById("p-js").innerHTML = "Hello " + username + "!"; 
    }
}