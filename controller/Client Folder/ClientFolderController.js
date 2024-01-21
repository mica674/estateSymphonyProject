const db = require('../../models/index.js');
const clientFoldersTable = db['clientFolders'];
const usersTable = db['User'];

const getClientFolder = async (req, res) => {

    try {

        const clientFolder = await clientFoldersTable.findByPk(req.params.id, { include: 'userClientFolders' });
        if (clientFolder !== null) {
            res.status(200).send({
                data: clientFolder
            })
        } else {
            res.status(404).send({
                message: 'Client folder not found'
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
        if (clientFolders !== null && clientFolders.length > 0) {
            res.status(200).send({
                data: clientFolders
            })
        } else {
            res.status(404).send({
                message: 'No clients folders are found'
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
        let idUserFound = await usersTable.findOne({
            where: { id: data.idUsers }
        });
        if (idUserFound !== null) {
            const newClientFolders = await clientFoldersTable.create(data);
            if (newClientFolders !== null) {
                res.status(200).send({
                    message: 'Client folder created',
                    data: newClientFolders
                })
            } else {
                res.status(400).send({
                    message: 'Client folder not created'
                })
            }
        } else {
            res.status(404).send({
                message: 'idUsers not found'
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
        const idClientFolders = req.params.id;
        let idClientFoldersFound = await clientFoldersTable.findByPk(idClientFolders)
        if (idClientFoldersFound !== null) {
            const data = { ...req.body };
            let idUserFound = await usersTable.findOne({
                where: { id: data.idUsers }
            });
            if (idUserFound !== null) {
                const updateClientFolders = await clientFoldersTable.update(
                    data,
                    {
                        where: {
                            id: idClientFolders
                        }
                    })
                if (updateClientFolders[0] == 1) {
                    res.status(200).send({
                        message: 'Client folder updated'
                    })
                } else {
                    res.status(400).send({
                        message: 'Client folder not updated'
                    })
                }
            } else {
                res.status(404).send({
                    message: 'idUsers not found'
                })
            }
        } else {
            res.status(404).send({
                message: 'Client folder not found'
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
        const idClientFolders = req.params.id;
        let idClientFoldersFound = await clientFoldersTable.findByPk(idClientFolders, { include: 'userClientFolders' })
        if (idClientFoldersFound !== null) {
            const deleteClientFolder = await clientFoldersTable.destroy({ where: { id: req.params.id } });
            if (deleteClientFolder !== null) {
                res.status(201).send({
                    message: 'Client folder deleted'
                })
            } else {
                res.status(400).send({
                    message: 'Client folder not deleted'
                })
            }
        } else {
            res.status(404).send({
                message: 'Client folder not found'
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