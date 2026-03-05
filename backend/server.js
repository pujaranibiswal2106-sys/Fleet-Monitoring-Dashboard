const express = require("express");
const http = require("http");
const WebSocket = require("ws");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

let stats = {
  trips: 1,
  drivers: 3,
  violations: 0,
  riskScore: 0
};

// MYSQL CONNECTION
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Puja@0987",
  database: "fleetdb"
});

db.connect((err) => {
  if (err) {
    console.log("Database connection failed");
  } else {
    console.log("MySQL Connected");
  }
});

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// WEBSOCKET CONNECTION
wss.on("connection", ws => {
  ws.send(JSON.stringify(stats));
});

// BROADCAST FUNCTION
function broadcast(data) {
  wss.clients.forEach(client => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
}

// EVENT API
app.post("/event", (req, res) => {

  const event = req.body;

  if (event.type === "speeding") stats.violations++;
  if (event.type === "braking") stats.violations++;
  if (event.type === "drowsy") stats.violations++;
  if (event.type === "drowsy") stats.violations++;

  stats.riskScore = stats.violations * 10;

  const query = "INSERT INTO driver_events(event_type, speed) VALUES (?, ?)";

  db.query(query, [event.type, event.speed], (err, result) => {
    if (err) {
      console.log("DB insert error", err);
    }
  });

  broadcast(stats);

  res.json(stats);

});

// START SERVER
server.listen(5000, () => {
  console.log("Server running on port 5000");
});