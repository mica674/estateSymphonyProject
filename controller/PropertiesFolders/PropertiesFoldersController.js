const db = require('../../models/index.js');
const propertiesFoldersTable = db['Properties_Folders'];
const propertiesTable = db['Properties'];
const clientFoldersTable = db['clientFolders'];

const getPropertyFolder = async (req, res) => {
    try {
        const propertyFolder = await propertiesFoldersTable.findByPk(req.params.id);
        if (propertyFolder !== null) {
            res.status(200).send({
                data: propertyFolder
            })
        } else {
            res.status(404).send({
                message: 'Property Folder not found'
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
const getPropertiesFolders = async (req, res) => {
    try {
        const propertiesFolders = await propertiesFoldersTable.findAll();
        if (propertiesFolders && propertiesFolders.length !== 0) {
            res.status(200).send({
                data: propertiesFolders
            })
        } else {
            res.status(404).send({
                message: 'No propertiesFolders found'
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
                        message: 'Property-Folder created',
                        data: newPropertyFolder
                    })
                } else {
                    res.status(400).send({
                        message: 'PropertyFolder was not created'
                    })
                }
            } else {
                res.status(404).send({
                    message: 'Client Folder not found'
                })
            }
        } else {
            res.status(404).send({
                message: 'Property not found'
            })
        }
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
                            message: 'Property-Folder updated'
                        })
                    } else {
                        res.status(400).send({
                            message: 'PropertyFolder not updated'
                        })
                    }
                } else {
                    res.status(404).send({
                        message: 'Client folder not found'
                    })
                }
            } else {
                res.status(404).send({
                    message: 'Property not found'
                })
            }
        } else {
            res.status(404).send({
                message: 'PropertyFolder not found'
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
                    message: 'Property Folder deleted',
                    data: deletePropertyFolder
                })
            } else {
                res.status(400).send({
                    message: 'Property Folder was not deleted'
                })
            }
        } else {
            res.status(404).send({
                message: 'Property Folder not found'
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