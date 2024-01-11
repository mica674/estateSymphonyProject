const { where } = require('sequelize');
const db = require('../../models/index.js');
const propertiesTable = db['Properties'];

const getProperty = async (req, res) => {

    try {
        //  Récupération de l'utilisateur avec son id passé en paramètre d'URL
        const property = await propertiesTable.findByPk(req.params.id);

        res.status(200).send({
            message: `Property ID : ${property.id}`,
            data: property
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
const getProperties = async (req, res) => {
    try {
        //  Récupération de tous les utilisateurs
        const properties = await propertiesTable.findAll();

        //  Envoie de tous les utilisateurs
        res.status(200).send({
            message: 'Select all of properties',
            data: properties
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
const createProperty = async (req, res, next) => {

    try {

        // const data = { ...req.body, photosTable: photo };
        // const newProperties = await propertiesTable.clicCount(data);
        const data = { ...req.body };
        const newProperty = await propertiesTable.create(data);

        next.
            res.status(200).send({
                message: 'Property created',
                data: newProperty
            })

    } catch (error) {

        console.log(error.message);

        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const modifyProperty = async (req, res) => {

    try {

        const newData = { ...req.body };
        const idProperty = req.params.id;
        const updateProperty = await propertiesTable.update(
            newData,
            {
                where: {
                    id: idProperty
                }
            })
        if (updateProperty[0] == 1) {
            res.status(200).send({
                message: 'Property updated'
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
const deleteProperty = async (req, res) => {
    try {

        const deleteProperty = await propertiesTable.destroy({ where: { id: req.params.id } });
        res.status(201).send({
            message: 'Property deleted',
            data: deleteProperty
        })

    } catch (error) {
        console.log(error);

        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
module.exports = { getProperty, getProperties, createProperty, modifyProperty, deleteProperty };