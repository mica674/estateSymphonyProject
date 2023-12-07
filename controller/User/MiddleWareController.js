const db = require('../../models/index.js');
const bcrypt = require('bcrypt');
const userTable = db['User'];
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const middleWare = async (req, res, next) => {

        let token = req.headers['authorization'].split(" ")[1];
        console.log("token : " + token);
        let decoded = jwt.verify(token, process.env.SECRET_TOKEN);
        console.log("decoded : " + decoded);
        req.user = decoded;
        console.log("req.user : " + req.user);
        req.token = token;
        // res.status(200).json(req.user);
        next();

        // CODE DE NICOLAS
        // const token = req.headers.authorization;
        // if (!token)
        //     res.status(401).json({ error: "Vous n'avez pas le droit d'être ici" });
        // else {
        //     console.log(token.split(" "));
        //     jwt.verify(
        //         token.split(" ")[1],
        //         process.env.SECRET_TOKEN,
        //         (err, value) => {
        //             if (err)
        //                 {res.status(401).json({ error: "Authentification échoué" });}
        //                 else{

        //                     console.log(value);
        //                 }
        //             // req.user = value.id;
        //             // console.log(req.user);
        //         }
        //     );
        // }
}

// librairies multer pour upload de fichier
module.exports = { middleWare };