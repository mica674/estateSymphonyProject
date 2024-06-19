const db = require('../../models/index.js');
const propertiesFoldersTable = db['Properties_Folders'];
const propertiesTable = db['Properties'];
const clientFoldersTable = db['clientFolders'];

const getPropertyFolder = async (req, res) => {
    try {
        const propertyFolder = await propertiesFoldersTable.findByPk(req.params.id);
        if (propertyFolder) {
            res.status(200).send({
                data: propertyFolder
            })
        } else {
            res.status(422).send({
                message: 'Property Folder pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const getPropertiesFolders = async (req, res) => {
    try {
        const propertiesFolders = await propertiesFoldersTable.findAll();
        if (propertiesFolders && propertiesFolders.length !== 0) {
            res.status(200).send({
                data: propertiesFolders
            })
        } else {
            res.status(422).send({
                message: 'Pas de propertiesFolders trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const createPropertyFolder = async (req, res) => {
    try {
        const data = { ...req.body };
        const idProperty = data.idProperties;
        const idPropertyFound = await propertiesTable.findByPk(idProperty);
        if (idPropertyFound) {
            const idClientFolders = data.idClientFolders;
            const idClientFoldersFound = await clientFoldersTable.findByPk(idClientFolders);
            if (idClientFoldersFound) {
                const newPropertyFolder = await propertiesFoldersTable.create(data);
                if (newPropertyFolder) {
                    res.status(200).send({
                        message: 'Property-Folder créé',
                        data: newPropertyFolder
                    })
                } else {
                    res.status(422).send({
                        message: 'PropertyFolder pas créé'
                    })
                }
            } else {
                res.status(422).send({
                    message: 'Dossier lient pas trouvé'
                })
            }
        } else {
            res.status(422).send({
                message: 'Property pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const modifyPropertyFolder = async (req, res) => {
    try {
        const idPropertyFolder = req.params.id;
        const idPropertyFolderFound = await propertiesFoldersTable.findByPk(idPropertyFolder);
        if (idPropertyFolderFound) {
            const newData = { ...req.body };
            const idProperty = newData.idProperties;
            const idPropertyFound = await propertiesTable.findByPk(idProperty);
            if (idPropertyFound) {
                const idClientFolders = newData.idClientFolders;
                const idClientFoldersFound = await clientFoldersTable.findByPk(idClientFolders);
                if (idClientFoldersFound) {
                    const updatePropertyFolder = await propertiesFoldersTable.update(
                        newData,
                        {
                            where: { id: idPropertyFolder }
                        })
                    if (updatePropertyFolder[0] == 1) {
                        res.status(200).send({
                            message: 'Property-Folder modifié'
                        })
                    } else {
                        res.status(422).send({
                            message: 'PropertyFolder pas modifié'
                        })
                    }
                } else {
                    res.status(422).send({
                        message: 'Dossier client pas trouvé'
                    })
                }
            } else {
                res.status(422).send({
                    message: 'Propriété pas trouvée'
                })
            }
        } else {
            res.status(422).send({
                message: 'PropertyFolder pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const deletePropertyFolder = async (req, res) => {
    try {
        const idPropertyFodler = req.params.id;
        const idPropertyFolderFound = await propertiesFoldersTable.findByPk(idPropertyFodler);
        if (idPropertyFolderFound) {
            const deletePropertyFolder = await propertiesFoldersTable.destroy({ where: { id: req.params.id } });
            if (deletePropertyFolder !== 0) {
                res.status(200).send({
                    message: 'Property Folder supprimé',
                    data: deletePropertyFolder
                })
            } else {
                res.status(422).send({
                    message: 'Property Folder pas supprimé'
                })
            }
        } else {
            res.status(422).send({
                message: 'Property Folder pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
module.exports = { getPropertyFolder, getPropertiesFolders, createPropertyFolder, modifyPropertyFolder, deletePropertyFolder };