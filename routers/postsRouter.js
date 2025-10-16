//importo modulo express
const express = require("express");
//creo un router
const router = express.Router();

// index
app.get('/', function (req, res) {
res.send('Lista dei post');
});

