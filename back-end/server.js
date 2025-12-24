// server.js

const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// 1. Define a basic route (GET request to the root URL '/')
app.get('/', (req, res) => {
  // Send a text response
 res.sendFile(path.join(__dirname, '../front-end/index.html'));
// serve static frontend (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, '../front-end')));
});

// 2. Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});