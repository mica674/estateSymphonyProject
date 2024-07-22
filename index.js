const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/route')
const path = require('path')

const hostname = '127.0.0.1';
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(router);

app.listen(port, hostname, () => {
    console.log(`Serveur démarrer à l'adresse http://${hostname}:${port}/`);
})

//test email
// require ('./NodeMailerTest.js');

