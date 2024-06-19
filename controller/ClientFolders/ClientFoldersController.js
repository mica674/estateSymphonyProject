const { ClientFolderNoFound, SyntaxErrorMessage, NoClientFolderFound, ClientFolderCreated, ClientFolderNotCreated, UserNoFound, ClientFolderUpdated, ClientFolderNotUpdated, ClientFolderDeleted, ClientFolderNotDeleted } = require('../../config/Constants.js');
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
                message: ClientFolderNoFound
            })
        }
    } catch (error) {
        res.status(400).send({
            message: SyntaxErrorMessage,
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
                message: NoClientFolderFound
            })
        }
    } catch (error) {
        res.status(400).send({
            message: SyntaxErrorMessage,
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
                    message: ClientFolderCreated,
                    data: newClientFolders
                })
            } else {
                res.status(422).send({
                    message: ClientFolderNotCreated
                })
            }
        } else {
            res.status(422).send({
                message: UserNoFound
            })
        }
    } catch (error) {
        res.status(400).send({
            message: SyntaxErrorMessage,
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
                        message: ClientFolderUpdated
                    })
                } else {
                    res.status(422).send({
                        message: ClientFolderNotUpdated
                    })
                }
            } else {
                res.status(422).send({
                    message: UserNoFound
                })
            }
        } else {
            res.status(422).send({
                message: ClientFolderNoFound
            })
        }
    } catch (error) {
        res.status(400).send({
            message: SyntaxErrorMessage,
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
                    message: ClientFolderDeleted
                })
            } else {
                res.status(422).send({
                    message: ClientFolderNotDeleted
                })
            }
        } else {
            res.status(422).send({
                message: ClientFolderNoFound
            })
        }
    } catch (error) {
        res.status(400).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }
}

module.exports = { createClientFolder, getClientFolder, getClientFolders, modifyClientFolder, deleteClientFolder };