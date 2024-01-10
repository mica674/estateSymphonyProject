const http = require('http');
const express = require('express');
const app = express();
const router = require('./routes/route')


const hostname = '127.0.0.1';
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(router);

app.listen(port, hostname, () => {
    console.log(`Serveur démarrer à l'adresse http://${hostname}:${port}/`);
})

//test email
// require ('./NodeMailerTest.js');