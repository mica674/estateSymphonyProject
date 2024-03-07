const { where } = require('sequelize');
const db = require('../../models/index.js');
const propertiesTable = db['Properties'];
const districtsTable = db['Districts'];
const statusesTable = db['Statuses'];
const photosTable = db['Photos'];

const getProperty = async (req, res) => {
    try {
        const property = await propertiesTable.findByPk(req.params.id);
        if (property) {
            res.status(200).send({
                data: property
            })
        } else {
            res.status(422).send({
                message: 'Propriété pas trouvée'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const getProperties = async (req, res) => {
    try {
        const properties = await propertiesTable.findAll();
        if (properties && properties.length !== 0) {
            res.status(200).send({
                data: properties
            })
        } else {
            res.status(422).send({
                message: 'Pas de propriété trouvée'
            })
        }
    }
    catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const getPropertiesBySearch = async (req, res) => {
    try {
        const data = { ...req.body };
        //Controle de la validité des valeurs des champs de recherche
        const whereClause = {};
        if (data.energising && data.energising !== '') {
            whereClause.energising = data.energising;
        }
        if (data.floor) { whereClause.floor = data.floor; }
        if (data.parking) { whereClause.parking = data.parking; }
        if (data.rooms) { whereClause.rooms = data.rooms; }
        if (data.showerRoom) { whereClause.showerRoom = data.showerRoom; }
        if (data.surface) { whereClause.surface = data.surface; }
        if (data && data.length !== 0) {
            console.log(data.energising);
            const propertiesBySearch = await propertiesTable.findAll({
                where: whereClause
            })
            if (propertiesBySearch && propertiesBySearch.length !== 0) {
                res.status(200).send({
                    data: propertiesBySearch
                })
            } else {
                res.status(422).send({
                    message: 'Aucune propriété correspond à la recherche'
                })
            }
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
    const transaction = await db.sequelize.transaction();
    let files = req.files;
    try {
        const data = { ...req.body };
        const idDistrict = data.idDistricts;
        const idDistrictFound = await districtsTable.findByPk(idDistrict);
        if (idDistrictFound) {
            const idStatus = data.idStatuses;
            const idStatusFound = await statusesTable.findByPk(idStatus);
            if (idStatusFound) {
                const newProperties = await propertiesTable.create(req.body, { transaction: transaction });
                if (!newProperties) {
                    throw "error"
                }
                let newData = [];
                files.forEach(item => {
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
                    message: 'Propriété créée',
                    data: newProperties
                })
            } else {
                res.status(422).send({
                    message: 'Status pas trouvé'
                })
                throw 'error'
            }
        } else {
            res.status(422).send({
                message: 'District pas trouvé'
            })
            throw 'error'
        }
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
        if (idPropertyFound) {
            const updateProperty = await propertiesTable.update(
                newData,
                {
                    where: { id: idProperty }
                })
            if (updateProperty[0] === 1) {
                res.status(200).send({
                    message: 'Propriété modifiée'
                })
            } else {
                res.status(422).send({
                    message: 'Propriété pas modifiée'
                })
            }
        } else {
            res.status(422).send({
                message: 'Propriété pas trouvée'
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
        if (idPropertyFound) {
            const deleteProperty = await propertiesTable.destroy({
                where: { id: idProperty }
            });
            if (deleteProperty === 1) {
                res.status(200).send({
                    message: 'Propriété supprimée',
                    data: deleteProperty
                })
            } else {
                res.status(422).send({
                    message: 'Propriété pas supprimée'
                })
            }
        } else {
            res.status(422).send({
                message: 'Proprité pas trouvée'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

module.exports = { getProperty, getProperties, getPropertiesBySearch, createProperty, modifyProperty, deleteProperty };