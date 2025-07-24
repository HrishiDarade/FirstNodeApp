'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Route
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello Page</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #000;
            color: #00BFFF
            text-align: center;
            padding: 50px;
          }
          h1 {
            color: #00BFFF;
          }
          p{
             color: #00BFFF;
          }
          img {
            width: 300px;
            margin-top: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0,0,0,0.5);
          }
        </style>
      </head>
      <body>
        <h1>Hello World</h1>
        <p>Testing CI/CD Deployment</p>
        <br />
        <img src="https://as2.ftcdn.net/jpg/06/30/90/99/1000_F_630909929_xHWmhNMPob3F5JDJE9Cfdjg6d80WBv6S.webp" alt="External Image" />
      </body>
    </html>
  `);
});

// Start server
app.listen(PORT, HOST, () => {
  console.log(`🚀 Server running at http://${HOST}:${PORT}`);
});
