const db = require('../../models/index.js');
const propertiesFoldersTable = db['Properties_Folders'];

const getPropertyFolder = async (req, res) => {

    try {
        //  Récupération de l'utilisateur avec son id passé en paramètre d'URL
        const propertyFolder = await propertiesFoldersTable.findByPk(req.params.id);

        res.status(200).send({
            message: `Property-Folder ID : ${propertyFolder.id}`,
            data: propertyFolder
        })

    } catch (error) {

        console.log(error);

        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })

        // res.status(401).send({
        //     message: 'Vous n\'êtes pas autorisé.',
        //     error: error.message
        // })

        // res.status(403).send({
        //     message: 'Vous n\'avez pas les droits d\'accès.',
        //     error: error.message
        // })

        // res.status(404).send({
        //     message: 'Le serveur n\'a pas trouvé la source demandé.',
        //     error: error.message
        // })

        // res.status(500).send({
        //     message: 'Erreur serveur.',
        //     error: error.message
        // })
    }
}
const getPropertiesFolders = async (req, res) => {
    try {
        //  Récupération de tous les utilisateurs
        const propertiesFolders = await propertiesFoldersTable.findAll();

        //  Envoie de tous les utilisateurs
        res.status(200).send({
            message: 'Select all of properties-folders',
            data: propertiesFolders
        })

    } catch (error) {
        console.log(error);

        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })

        // res.status(401).send({
        //     message: 'Vous n\'êtes pas autorisé.',
        //     error: error.message
        // })

        // res.status(403).send({
        //     message: 'Vous n\'avez pas les droits d\'accès.',
        //     error: error.message
        // })

        // res.status(404).send({
        //     message: 'Le serveur n\'a pas trouvé la source demandé.',
        //     error: error.message
        // })

        // res.status(500).send({
        //     message: 'Erreur serveur.',
        //     error: error.message
        // })
    }
}
const createPropertyFolder = async (req, res, next) => {

    try {
        const data = { ...req.body };
        const newPropertyFolder = await propertiesFoldersTable.create(data);

        next.
            res.status(200).send({
                message: 'Property-Folder created',
                data: newPropertyFolder
            })

    } catch (error) {

        console.log(error.message);

        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const modifyPropertyFolder = async (req, res) => {

    try {

        const newData = { ...req.body };
        const idPropertyFolder = req.params.id;
        const updatePropertyFolder = await propertiesFoldersTable.update(
            newData,
            {
                where: {
                    id: idPropertyFolder
                }
            })
        if (updatePropertyFolder[0] == 1) {
            res.status(200).send({
                message: 'Property-Folder updated'
            })
        }

    } catch (error) {

        console.log(error);

        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }

}
const deletePropertyFolder = async (req, res) => {
    try {

        const deletePropertyFolder = await propertiesFoldersTable.destroy({ where: { id: req.params.id } });
        res.status(201).send({
            message: 'Property-Folder deleted',
            data: deletePropertyFolder
        })

    } catch (error) {
        console.log(error);

        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
module.exports = { getPropertyFolder, getPropertiesFolders, createPropertyFolder, modifyPropertyFolder, deletePropertyFolder };