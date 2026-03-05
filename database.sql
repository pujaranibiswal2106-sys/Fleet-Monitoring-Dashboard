CREATE DATABASE fleetdb;
use fleetdb;
CREATE TABLE driver_events (
 id INT AUTO_INCREMENT PRIMARY KEY,
 event_type VARCHAR(50),
 speed INT,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);