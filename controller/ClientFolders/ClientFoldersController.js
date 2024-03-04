const db = require('../../models/index.js');
const clientFoldersTable = db['clientFolders'];
const usersTable = db['Users'];

const getClientFolder = async (req, res) => {
    try {
        const clientFolder = await clientFoldersTable.findByPk(req.params.id, { include: 'userClientFolders' });
        if (clientFolder) {
            res.status(200).send({
                data: clientFolder
            })
        } else {
            res.status(422).send({
                message: 'Dossier client pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const getClientFolders = async (req, res) => {
    try {
        const clientFolders = await clientFoldersTable.findAll();
        if (clientFolders && clientFolders.length > 0) {
            res.status(200).send({
                data: clientFolders
            })
        } else {
            res.status(422).send({
                message: 'Pas de dossier client trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const createClientFolder = async (req, res) => {
    try {
        const data = { ...req.body };
        const idUser = data.idUsers;
        const idUserFound = await usersTable.findByPk(idUser)
        if (idUserFound) {
            const newClientFolders = await clientFoldersTable.create(data);
            if (newClientFolders[0] === 1) {
                res.status(200).send({
                    message: 'Dossier client créé',
                    data: newClientFolders
                })
            } else {
                res.status(422).send({
                    message: 'Dossier client pas créé'
                })
            }
        } else {
            res.status(422).send({
                message: 'Utilisateur pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const modifyClientFolder = async (req, res) => {
    try {
        const idClientFolder = req.params.id;
        const idClientFoldersFound = await clientFoldersTable.findByPk(idClientFolder)
        if (idClientFoldersFound) {
            const data = { ...req.body };
            const idUser = data.idUsers;
            const idUserFound = await usersTable.findByPk(idUser)
            if (idUserFound) {
                const updateClientFolders = await clientFoldersTable.update(
                    data,
                    {
                        where: { id: idClientFolder }
                    })
                if (updateClientFolders[0] === 1) {
                    res.status(200).send({
                        message: 'Dossier client modifié'
                    })
                } else {
                    res.status(422).send({
                        message: 'Dossier client pas modifié'
                    })
                }
            } else {
                res.status(422).send({
                    message: 'Utilisateur pas trouvé'
                })
            }
        } else {
            res.status(422).send({
                message: 'Dossier client pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const deleteClientFolder = async (req, res) => {
    try {
        const idClientFolder = req.params.id;
        const idClientFoldersFound = await clientFoldersTable.findByPk(idClientFolder)
        if (idClientFoldersFound) {
            const deleteClientFolder = await clientFoldersTable.destroy({ where: { id: idClientFolder } });
            if (deleteClientFolder[0] === 1) {
                res.status(200).send({
                    message: 'Dossier client supprimé'
                })
            } else {
                res.status(422).send({
                    message: 'Dossier client pas supprimé'
                })
            }
        } else {
            res.status(422).send({
                message: 'Dossier client pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

module.exports = { createClientFolder, getClientFolder, getClientFolders, modifyClientFolder, deleteClientFolder };