const db = require('../../models/index.js');
const bcrypt = require('bcrypt');
const userTable = db['User'];


const createUser = async (req, res) => {

    try {

        const { password } = req.body;
        //  Génération du SALT pour le chiffrement du mot de passe
        const salt = await bcrypt.genSaltSync(12);
        //  Chiffrement du mot de passe avec 'bcrypt'
        const hash = await bcrypt.hashSync(password, salt);
        //  Récupère les données du body et modifie le password et l'id de Role
        let data = { ...req.body, password: hash, roleId: 2 }
        //  Créé l'utilisateur dans la base de données
        const newUser = await userTable.create(data);

        //  Réponse avec l'action faite ('message') et les données de l'utilisateur créé ('data')
        res.status(200).send({
            message: 'Create',
            data: newUser
        })

    } catch (error) {
        console.log(error.message);

        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })

        res.status(401).send({
            message: 'Vous n\'êtes pas autorisé.',
            error: error.message
        })

        res.status(403).send({
            message: 'Vous n\'avez pas les droits d\'accès.',
            error: error.message
        })

        res.status(404).send({
            message: 'Le serveur n\'a pas trouvé la source demandé.',
            error: error.message
        })

        res.status(500).send({
            message: 'Erreur serveur.',
            error: error.message
        })
    }
}



module.exports = { createUser };