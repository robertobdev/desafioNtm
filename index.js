const express = require('express');
const app = express();


app.listen('9000', () => {
  console.log("Server up");
});

app.get("/", (req,res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get("/dados.json", (req, res) => {
  res.sendFile(__dirname + '/dados.json');
});

