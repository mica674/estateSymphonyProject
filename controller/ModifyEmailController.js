const db = require('../models/index.js');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const userTable = db['User'];


const modifyEmail = async (req, res) =>{

    try {

        const { email } = req.body;
        let newData = {email: email};
        //req.token est le token transmis par le middleware
        let email1 = jwt.verify(req.token,process.env.SECRET_TOKEN).email;
        console.log(email1);


        const newEmail = await userTable.update(newData, {
            where:{ 
                email:email1           
            }
        });
        

        res.status(200).send({
            message : 'Vous avez bien modifié votre email',
            data : newEmail
        })

    } catch (error) {
        
        console.log(error);

        res.status(400).send({
            message : 'Erreur de synthaxe de la requête.',
            error : error.message
        })

        res.status(401).send({
            message : 'Vous n\'êtes pas autorisé.',
            error : error.message
        })

        res.status(403).send({
            message : 'Vous n\'avez pas les droits d\'accès.',
            error : error.message
        })

        res.status(404).send({
            message : 'Le serveur n\'a pas trouvé la source demandé.',
            error : error.message
        })

        res.status(500).send({
            message : 'Erreur serveur.',
            error : error.message
        })

    }

}

module.exports = {modifyEmail}