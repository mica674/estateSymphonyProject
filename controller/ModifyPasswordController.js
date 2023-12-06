const db = require('../models/index.js');
const bcrypt = require('bcrypt');
const userTable = db['User'];

const modifyPassword = async (req, res) =>{
    try {
        
        const { password } = req.body;
        const salt = await bcrypt.genSaltSync(12);
        const hash = await bcrypt.hashSync(password, salt);
        let newData = {password: hash};

        const newPassword = await userTable.update(newData);
        
        res.status(200).send({
            message : 'Vous avez bien modifié votre mot de passe',
            data : newPassword
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

module.exports = {modifyPassword};