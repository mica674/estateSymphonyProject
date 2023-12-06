const db = require('../models/index.js');
const userTable = db['User'];

const getUser = async (req, res) => {

    try {
        //  Récupération de l'utilisateur avec son id passé en paramètre d'URL
        const user = await userTable.findByPk(req.params.id);

        
        res.status(200).send({
            message : `Bonjour ${user.firstname} ${user.firstname}`
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

module.exports = {getUser};