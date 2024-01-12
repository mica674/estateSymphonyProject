const { Sequelize } = require('sequelize');
const db = require('../../models/index.js');
const propertiesTable = db['Properties'];
const photosTable = db['Photos'];

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

    //const transaction = await sequelize.transaction();
    const transaction = await sequelize.transaction();

    let files = req.files;

    //console.log(files)
    //console.log(req.body.name);
    try {


        const newProperties = await propertiesTable.create(req.body, { transaction: transaction });
        if (!newProperties) {
            throw "error"
        }

        let newData = [];

        files.forEach(item => {
            console.log(item);
            let path = `propertiesPhotos/${item.filename}`
            let newItem = {
                idProperties: newProperties.id,
                photo: path
            }
            newData.push(newItem);

        });

        const newPhoto = await photosTable.bulkCreate(newData, { transaction: transaction });
        if (!newPhoto) {
            throw "error"
        }

        await transaction.commit();

        //const  = await propertiesTable.create(data);


        res.status(200).send({
            message: 'Create',
            data: newProperties
        })

    } catch (error) {
        await transaction.rollback();
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