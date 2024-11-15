const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/route')


const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.use(cors());
app.use(router);
app.use(express.static('public'));

app.listen(port, hostname, () => {
    console.log(`Serveur démarrer à l'adresse http://${hostname}:${port}/`);
})

//test email
// require ('./NodeMailerTest.js');

