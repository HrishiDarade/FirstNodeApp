'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send(`
    <h1>Hello World</h1>
    <p>Testing CICD2</p>
  `);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
