const db = require('../../models/index.js');
const messagesTable = db['Messages'];
const usersTable = db['Users']

const getMessageID = async (req, res) => {
    try {
        const message = await messagesTable.findByPk(req.params.id);
        if (message) {
            res.status(200).send({
                data: message
            })
        } else {
            res.status(422).send({
                message: 'Message pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const getMessages = async (req, res) => {
    try {
        let messagefound = await messagesTable.findOne();
        if (messagefound) {
            const messages = await messagesTable.findAll();
            res.status(200).send({
                data: messages
            })
        } else {
            res.status(422).send({
                message: 'Pas de message trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const createMessage = async (req, res) => {
    try {
        const data = { ...req.body };
        const idUserOwnerFound = await usersTable.findByPk(data.idUsers);
        if (idUserOwnerFound) {
            const idUserBuyerFound = await usersTable.findByPk(data.idUsersB)
            if (idUserBuyerFound) {
                if (data.idUsers !== data.idUsersB) {
                    const newMessage = await messagesTable.create(data);
                    if (newMessage) {
                        res.status(200).send({
                            message: 'Message créé',
                            data: newMessage
                        })
                    } else {
                        res.status(422).send({
                            message: 'Message pas créé'
                        })
                    }
                } else {
                    res.status(422).send({
                        message: 'Les utilisateurs doivent être différents'
                    })
                }
            } else {
                res.status(422).send({
                    message: 'Utilisateur (Buyer) pas trouvé'
                })
            }
        } else {
            res.status(422).send({
                message: 'Utilisateur (Owner) pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const modifyMessage = async (req, res) => {
    try {
        const data = { ...req.body };
        const idUserOwner = data.idUsers;
        const idUserOwnerFound = await usersTable.findByPk(idUserOwner);
        if (idUserOwnerFound) {
            const idUserBuyer = data.idUsersB;
            const idUserBuyerFound = await usersTable.findByPk(idUserBuyer)
            if (idUserBuyerFound) {
                if (data.idUsers !== data.idUsersB) {
                    const idMessage = req.params.id;
                    const messageFound = await messagesTable.findByPk(idMessage);
                    if (messageFound) {
                        const updateMessages = await messagesTable.update(
                            data,
                            {
                                where: {
                                    id: idMessage
                                }
                            })
                        if (updateMessages[0] == 1) {
                            res.status(200).send({
                                message: 'Message modifié'
                            })
                        } else {
                            res.status(422).send({
                                message: 'Message pas modifié'
                            })
                        }
                    } else {
                        res.status(422).send({
                            message: 'Message pas trouvé'
                        })
                    }
                } else {
                    res.status(422).send({
                        message: 'Les utilisateurs doivent être différents'
                    })
                }
            } else {
                res.status(422).send({
                    message: 'Utilisateur (Buyer) pas trouvé'
                })
            }
        } else {
            res.status(422).send({
                message: 'Utilisateur (Owner) pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const deleteMessage = async (req, res) => {
    try {
        const idMessage = req.params.id;
        const idMessageFound = await messagesTable.findByPk(idMessage);
        if (idMessageFound) {
            const deletedMessage = await messagesTable.destroy({
                where: { id: idMessage }
            })
            if (deletedMessage == 1) {
                res.status(200).send({
                    message: 'Message supprimé'
                })
            } else {
                res.status(422).send({
                    message: 'Message pas supprimé'
                })
            }
        } else {
            res.status(422).send({
                message: 'Message pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

module.exports = { getMessageID, getMessages, createMessage, modifyMessage, deleteMessage }