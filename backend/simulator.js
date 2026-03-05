const axios = require("axios");

const events = ["speeding","braking","drowsy"];

setInterval(()=>{

let event = events[Math.floor(Math.random()*events.length)];

axios.post("http://localhost:5000/event",{
type:event,
speed:Math.floor(Math.random()*120)
});

console.log("Event Sent:",event);

},3000);