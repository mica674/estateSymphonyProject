const { Sequelize } = require('sequelize');
const db = require('../../models/index.js');
const propertiesTable = db['Properties'];
const photosTable = db['Photos'];

const getProperty = async (req, res) => {
    try {
        const property = await propertiesTable.findByPk(req.params.id);
        if (property !== null) {
            res.status(200).send({
                data: property
            })
        } else {
            res.status(404).send({
                message: 'Property not found'
            })
        }
    } catch (error) {
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
        const properties = await propertiesTable.findAll();
        if (properties !== null && properties.length !== 0) {
            res.status(200).send({
                data: properties
            })
        } else {
            res.status(404).send({
                message: 'No property found'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

//#NAWELLE
const createProperty = async (req, res, next) => {
    const transaction = await sequelize.transaction();
    let files = req.files;
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
        res.status(200).send({
            message: 'Property created',
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
        const idPropertyFound = await propertiesTable.findByPk(idProperty);
        if (idPropertyFound !== null) {
            const updateProperty = await propertiesTable.update(
                newData,
                {
                    where: { id: idProperty }
                })
            if (updateProperty[0] == 1) {
                res.status(200).send({
                    message: 'Property updated'
                })
            } else {
                res.status(400).send({
                    message: 'Property was not updated'
                })
            }
        } else {
            res.status(404).send({
                message: 'Property not found'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const deleteProperty = async (req, res) => {
    try {
        const idProperty = req.params.id;
        const idPropertyFound = await propertiesTable.findByPk(idProperty);
        if (idPropertyFound !== null) {
            const deleteProperty = await propertiesTable.destroy({
                where: { id: idProperty }
            });
            if (deleteProperty == 1) {
                res.status(200).send({
                    message: 'Property deleted',
                    data: deleteProperty
                })
            } else {
                res.status(400).send({
                    message: 'Property was not deleted'
                })
            }
        } else {
            res.status(404).send({
                message: 'Property not found'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
module.exports = { getProperty, getProperties, createProperty, modifyProperty, deleteProperty };