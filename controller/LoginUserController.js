const db = require('../models/index.js');
const bcrypt = require('bcrypt');
const userTable = db['User'];
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const loginUser = async (req, res, next) => {
    try {
        //Recherche d'un utilisateur correspondant à l'adresse email renseignée
        const user = await userTable.findOne({ where: { email: req.body.email }});
        //Test si un utilisateur avec cette adresse email existe
        if (user) {
            //Comparaison du mot de passe renseigné par l'utilisateur et le hash stocké en base
            const compare = await bcrypt.compareSync(req.body.password, user.password);
            //Si la comparaison est bonne
            if (compare) {
                //Génération d'un token contenant les informations (id et email) & la clé secrète 'SECRET_TOKEN'
                let token = jwt.sign({ email: user.email }, process.env.SECRET_TOKEN, {
                    expiresIn : '1d'
                });
                //Réponse HTTP 200 et le token en data
                res.status(200).json({ token: token });
            }
        }

        
    } catch (error) {
        
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

module.exports = {loginUser};