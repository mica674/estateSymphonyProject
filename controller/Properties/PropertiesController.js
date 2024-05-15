const { Op } = require('sequelize');
const db = require('../../models/index.js');
const { SyntaxErrorMessage, PropertyNoFound, PropertyNotDeleted, PropertyDeleted, PropertyArchived, PropertyNotArchived, PropertyRestored, PropertyNotRestored, PropertyNotUpdated, PropertyUpdated, DistrictNoFound, StatusNoFound, PropertyCreated, PropertyNotCreated, NoPropertyFoundWithSearch, NoPropertyFound, PropertyAlreadyArchived, PropertyAlreadyRestored } = require('../../config/Constants.js');
const propertiesTable = db['Properties'];
const districtsTable = db['Districts'];
const statusesTable = db['Statuses'];
const photosTable = db['Photos'];

const getProperty = async (req, res) => {
    try {
        const property = await propertiesTable.findByPk(req.params.id, { include: 'district' });
        if (property) {
            res.status(200).send({
                data: property
            })
        } else {
            res.status(422).send({
                message: PropertyNoFound
            })
        }
    } catch (error) {
        res.status(422).send({
            message: SyntaxErrorMessage,
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
                message: NoPropertyFound
            })
        }
    }
    catch (error) {
        console.log(error.message);
        res.status(422).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }
}
const getPropertiesBySearch = async (req, res) => {
    try {
        const data = { ...req.body };
        if (data && data.length !== 0) {
            console.log(data);
            //Controle de la validité des valeurs des champs de recherche
            const whereClause = {};
            if (data.price) { whereClause.price = { [Op.lte]: data.price } }
            if (data.surface) { whereClause.surface = { [Op.gte]: data.surface }; } // opérateur between pour gérer 2 valeurs plus tard
            if (data.showerRoom) { whereClause.showerRoom = { [Op.gte]: data.showerRoom }; }
            // if (data.energising) { 
            //     let letterList = ['A', 'B','C','D','E','F','G'];
            //     letterList.forEach(letter => {
            //         if (letter === data.energising) {

            //         }
            //     });
            //     whereClause.energising = data.energising; }
            if (data.typeEnergic) { whereClause.typeEnergic = data.typeEnergic; }
            if (data.heatingSystem) { whereClause.heatingSystem = data.heatingSystem; }
            if (data.floor) { whereClause.floor = data.floor; }
            if (data.balcony) { whereClause.balcony = data.balcony; }
            if (data.parking) { whereClause.parking = data.parking; }
            if (data.rooms) { whereClause.rooms = { [Op.gte]: data.rooms }; }
            if (data.status) {
                const statusFound = await statusesTable.findByPk(data.status);
                if (statusFound) {
                    whereClause.idStatuses = data.status
                }
            }
            if (data.district) {
                const districtFound = await districtsTable.findByPk(data.district);
                if (districtFound) {
                    whereClause.idDistricts = data.district
                }
            }
            whereClause.archived = false;
            //Si aucune condition, toutes les propriétés seront affichées de la plus récente à la plus ancienne
            const propertiesBySearch = await propertiesTable.findAll({
                where: whereClause,
                order: ['createdAt', 'updatedAt', 'price', 'surface']

            })
            if (propertiesBySearch && propertiesBySearch.length !== 0) {
                res.status(200).send({
                    data: propertiesBySearch
                })
            } else {
                res.status(422).send({
                    message: NoPropertyFoundWithSearch,
                })

            }
        }
    } catch (error) {
        res.status(422).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }
}
//#NAWELLE
const createProperty = async (req, res) => {
    const transaction = await db.sequelize.transaction();
    try {
        let files = req.file;
        /// PROBLEME DE MULTER INSERTION DES PHOTOS : Condition forcée à TRUE
        if (true) {
            const data = req.body;
            const idDistrict = data.idDistricts;
            const idDistrictFound = await districtsTable.findByPk(idDistrict);
            if (idDistrictFound) {
                const idStatus = data.idStatuses;
                const idStatusFound = await statusesTable.findByPk(idStatus);
                if (idStatusFound) {
                    const newProperties = await propertiesTable.create(data, { transaction: transaction });
                    if (!newProperties) {
                        res.status(422).send({
                            message: PropertyNotCreated,
                        })
                        await transaction.rollback();
                    }
                    let newData = [];
                    /// PROBLEME DE MULTER INSERTION DES PHOTOS : Mise en commentaire du code gérant l'insertion des photos
                    // files.forEach(item => {
                    //     let path = `public/propertiesPhotos/${item.filename}`
                    //     let newItem = {
                    //         idProperties: newProperties.id,
                    //         photo: path
                    //     }
                    //     newData.push(newItem);
                    // });
                    // const newPhoto = await photosTable.bulkCreate(newData, { transaction: transaction });
                    // console.log(newPhoto);
                    // if (!newPhoto) {
                    //     throw "error"
                    // }
                    await transaction.commit();
                    res.status(200).send({
                        message: PropertyCreated,
                        data: newProperties
                    })
                } else {
                    res.status(422).send({
                        message: StatusNoFound
                    })
                    await transaction.rollback();
                }
            } else {
                res.status(422).send({
                    message: DistrictNoFound
                })
                await transaction.rollback();
            }
        } else {
            res.status(422).send({
                message: 'Aucune image trouvée'
            })
            await transaction.rollback();
        }
    } catch (error) {
        await transaction.rollback();
        res.status(422).send({
            message: SyntaxErrorMessage,
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
                    message: PropertyUpdated
                })
            } else {
                res.status(422).send({
                    message: PropertyNotUpdated
                })
            }
        } else {
            res.status(422).send({
                message: PropertyNoFound
            })
        }
    } catch (error) {
        res.status(422).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }
}
const archiveProperty = async (req, res) => {
    try {
        const idProperty = req.params.id;
        const idPropertyFound = await propertiesTable.findByPk(idProperty);
        if (!idPropertyFound.archived) {

            if (idPropertyFound) {
                const archiveProperty = await propertiesTable.update(
                    { archived: 1 },
                    { where: { id: idProperty } }
                )
                if (archiveProperty[0] === 1) {
                    res.status(200).send({
                        message: PropertyArchived
                    })
                } else {
                    res.status(422).send({
                        message: PropertyNotArchived
                    })
                }
            } else {
                res.status(422).send({
                    message: PropertyNoFound
                })
            }
        } else {
            res.status(200).send({
                message: PropertyAlreadyArchived
            })
        }
    } catch (error) {
        res.status(422).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }
}
const restoreProperty = async (req, res) => {
    try {
        const idProperty = req.params.id;
        const idPropertyFound = await propertiesTable.findByPk(idProperty);
        if (idPropertyFound.archived) {

            if (idPropertyFound) {
                const archiveProperty = await propertiesTable.update(
                    { archived: 0 },
                    { where: { id: idProperty } }
                )
                if (archiveProperty[0] === 1) {
                    res.status(200).send({
                        message: PropertyRestored
                    })
                } else {
                    res.status(422).send({
                        message: PropertyNotRestored,
                    })
                }
            } else {
                res.status(422).send({
                    message: PropertyNoFound
                })
            }
        } else {
            res.status(200).send({
                message: PropertyAlreadyRestored
            })
        }
    } catch (error) {
        res.status(422).send({
            message: SyntaxErrorMessage,
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
                    message: PropertyDeleted,
                    data: deleteProperty
                })
            } else {
                res.status(422).send({
                    message: PropertyNotDeleted
                })
            }
        } else {
            res.status(422).send({
                message: PropertyNoFound
            })
        }
    } catch (error) {
        res.status(422).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }
}

module.exports = { getProperty, getProperties, getPropertiesBySearch, createProperty, modifyProperty, archiveProperty, restoreProperty, deleteProperty };