const express = require('express');
const cors = require('cors');
const app = express();
const router = require('./routes/route')


const HOST = '0.0.0.0';
const PORT = process.env.PORT || 3000; // Utilisation de la variable d'environnement

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

app.use(cors());
app.use(router);
app.use(express.static('public'));

//Health Check
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

setTimeout(() => {

    app.listen(PORT, HOST, () => {
        console.log(`Serveur démarrer à l'adresse http://${HOST}:${PORT}/`);
    })
}, 1000);// Délai d'1 seconde avant de démarrer l'écoute

//test email
// require ('./NodeMailerTest.js');

