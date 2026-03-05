const ws = new WebSocket("ws://localhost:5000");

ws.onmessage = (event) => {

let data = JSON.parse(event.data);

document.getElementById("trips").innerText = data.trips;
document.getElementById("drivers").innerText = data.drivers;
document.getElementById("violations").innerText = data.violations;
document.getElementById("risk").innerText = data.riskScore;

let alertBox = document.getElementById("alertBox");
let violationCard = document.getElementById("violationCard");

if(data.violations > 5){

alertBox.style.display="block";
alertBox.innerText="ALERT: Too Many Violations!";

violationCard.classList.add("redAlert");

}else{

alertBox.style.display="none";
violationCard.classList.remove("redAlert");

}



};