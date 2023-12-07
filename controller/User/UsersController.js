const db = require('../../models/index.js');
const userTable = db['User'];

const getAllUser = async (req, res) =>{
    try {
        //  Récupération de tous les utilisateurs
        const user = await userTable.findAll();

        //  Envoie de tous les utilisateurs
        res.status(200).send({
            message : 'select',
            data : users
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

module.exports = {getAllUser};