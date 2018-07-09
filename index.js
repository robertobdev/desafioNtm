const express = require('express');
const app = express();


app.use('/public', express.static(__dirname + '/public'));

app.listen('9000', () => {
  console.log("Server up");
});

app.get("/", (req,res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get("/dados.json", (req, res) => {
  res.sendFile(__dirname + '/dados.json');
});

