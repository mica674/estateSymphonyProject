const db = require('../models/index.js');
const userTable = db['User'];


const createUser = async (req, res) =>{

    try {
        console.log(req.body);
        const { email, password, lastname, firstname, phone, roleId ='User' } = req.body;
        const newUser = await userTable.create({ email, password, lastname, firstname, phone, roleId})
        
        
        res.status(200).send({
            message : 'Create',
            data : newUser
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

module.exports = {createUser};