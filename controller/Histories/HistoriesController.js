const db = require('../../models/index.js');
const historiesTable = db['Histories'];
const propertiesTable = db['Properties'];
const usersTable = db['User'];

const getHistory = async (req, res) => {
    try {
        const history = await historiesTable.findByPk(req.params.id);
        if (history) {
            res.status(200).send({
                data: history
            })
        } else {
            res.status(422).send({
                message: 'Historique pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const getHistories = async (req, res) => {
    try {
        const histories = await historiesTable.findAll();
        if (histories && histories.length !== 0) {
            res.status(200).send({
                data: histories
            })
        } else {
            res.status(422).send({
                message: 'Pas d\'historique trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const createHistory = async (req, res) => {
    try {
        let data = { ...req.body };
        const idProperty = data.idProperties;
        const idPropertyFound = await propertiesTable.findByPk(idProperty);
        if (idPropertyFound) {
            const idUser = data.idUsers;
            const idUserFound = await usersTable.findByPk(idUser);
            if (idUserFound) {
                const newHistory = await historiesTable.create(data);
                if (newHistory !== null) {
                    res.status(200).send({
                        message: 'Historique crée',
                        data: newHistory
                    })
                } else {
                    res.status(422).send({
                        message: 'Historique pas crée'
                    })
                }
            } else {
                res.status(422).send({
                    message: 'Utilisateur pas trouvé'
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

const modifyHistory = async (req, res) => {
    try {
        const newData = { ...req.body };
        const idHistory = req.params.id;
        const idHistoryFound = await historiesTable.findByPk(idHistory);
        if (idHistoryFound) {
            const idProperty = data.idProperties;
            const idPropertyFound = await propertiesTable.findByPk(idProperty);
            if (idPropertyFound) {
                const idUser = data.idUsers;
                const idUserFound = await usersTable.findByPk(idUser);
                if (idUserFound) {
                    const updateHistory = await historiesTable.update(
                        newData,
                        {
                            where: { id: idHistory }
                        })
                    if (updateHistory[0] == 1) {
                        res.status(200).send({
                            message: 'Historique modifié'
                        })
                    } else {
                        res.status(422).send({
                            message: 'Historique pas modifié'
                        })
                    }
                } else {
                    res.status(422).send({
                        message: 'Utilisateur pas trouvé'
                    })
                }
            } else {
                res.status(422).send({
                    message: 'Propriété pas trouvée'
                })
            }
        } else {
            res.status(422).send({
                message: 'Historique pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const deleteHistory = async (req, res) => {
    try {
        const idHistory = req.params.id;
        const idHistoryFound = await historiesTable.findByPk(idHistory);
        if (idHistoryFound) {
            const deletedHistory = await historiesTable.destroy({
                where: { id: idHistory }
            })
            if (deletedHistory == 1) {
                res.status(200).send({
                    message: 'Historique supprimé'
                })
            } else {
                res.status(422).send({
                    message: 'Historique pas supprimé'
                })
            }
        } else {
            res.status(422).send({
                message: 'Historique pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

module.exports = { getHistory, getHistories, createHistory, modifyHistory, deleteHistory }