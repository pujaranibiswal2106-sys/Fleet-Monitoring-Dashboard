# Fleet-Monitoring-Dashboard
Fleet Monitoring Dashboard with real-time driver event simulation using Node.js, WebSocket and MySQL.

## Description
Fleet Monitoring Dashboard is a web-based system that simulates real-time driver events and displays them on a dashboard.  
The system uses Node.js and WebSocket to generate and transmit driver behavior data to the frontend interface.

## Features
- Real-time driver event simulation
- Live dashboard updates using WebSocket
- Driver behavior monitoring
- Backend event generation using simulator
- Simple frontend dashboard visualization

## Technologies Used
- Node.js
- WebSocket
- MySQL
- HTML
- CSS
- JavaScript

## Project Structure
Fleet-Monitoring-Dashboard/
│
├── backend
│   ├── server.js
│   ├── simulator.js
│   ├── package.json
│   └── package-lock.json
│
├── frontend
│   ├── index.html
│   ├── script.js
│   └── style.css
│
├── database.sql
├── API_DOCUMENTATION.md
├── Architecture Diagram.png
└── README.md

## How to Run the Project

### 1. Install Node.js
Download and install Node.js.

### 2. Install dependencies
Open terminal inside backend folder and run:

npm install

### 3. Start the backend server

node server.js

### 4. Run the driver event simulator

node simulator.js

### 5. Open the dashboard
Open the following file in your browser:

frontend/index.html

## Database Setup
1. Open MySQL.
2. Create a database using the SQL file:

database.sql

## API Documentation
Detailed API endpoints are provided in the file:

API_DOCUMENTATION.md

## Author
Pujarani Biswal
