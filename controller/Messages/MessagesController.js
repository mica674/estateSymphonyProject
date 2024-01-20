const db = require('../../models/index.js');
const messagesTable = db['Messages'];
const usersTable = db['User']

const getMessageID = async (req, res) => {
    try {
        const message = await messagesTable.findByPk(req.params.id);
        console.log(message);
        if (message !== null) {
            res.status(200).send({
                message: `Message id : ${message.id}`,
                data: message
            })
        } else {
            res.status(404).send({
                message: 'Message was not found'
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
        if (messagefound !== null) {
            const messages = await messagesTable.findAll();
            res.status(200).send({
                message: 'select all',
                data: messages
            })
        } else {
            res.status(400).send({
                message: 'Empty table'
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
        let data = { ...req.body };
        // console.log(`idUser1 : ${data.idUser1} ; idUser2 : ${data.idUser2} `);
        let idUser1Found = await usersTable.findOne({
            where: { id: data.idUser1 }
        });
        let idUser2Found = await usersTable.findOne({
            where: { id: data.idUser2 }
        });
        if (idUser1Found !== null && idUser2Found !== null) {

            if (data.idUser1 !== data.idUser2) {

                const newMessage = await messagesTable.create(data);
                if (newMessage !== null) {

                    res.status(200).send({
                        message: 'Message created',
                        data: newMessage
                    })
                } else {
                    res.status(400).send({
                        message: 'Message was not created'
                    })
                }
            } else {
                res.status(400).send({
                    message: 'idUser1 & idUser2 can\'t are the same'
                })
            }
        } else {
            res.status(404).send({
                message: 'User not existed'
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
        let idUser1Found = await usersTable.findOne({
            where: { id: data.idUser1 }
        });
        let idUser2Found = await usersTable.findOne({
            where: { id: data.idUser2 }
        });
        if (idUser1Found !== null && idUser2Found !== null) {
            if (data.idUser1 !== data.idUser2) {

                const idMessage = req.params.id;
                let messageFound = await messagesTable.findByPk(idMessage);
                if (messageFound !== null) {
                    const updateMessages = await messagesTable.update(
                        data,
                        {
                            where: {
                                id: idMessage
                            }
                        })
                    if (updateMessages[0] == 1) {
                        res.status(200).send({
                            message: 'Message updated'
                        })
                    } else {
                        res.status(400).send({
                            message: 'Message was not updated'
                        })
                    }
                } else {
                    res.status(400).send({
                        message: 'Message was not found'
                    })
                }
            } else {
                res.status(404).send({
                    message: 'idUser1 & idUser2 can\'t are the same'
                })
            }
        } else {
            res.status(404).send({
                message: 'User not existed'
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
        let messageFound = await messagesTable.findByPk(idMessage);
        if (messageFound !== null) {
            const deletedMessage = await messagesTable.destroy({
                where: { id: idMessage }
            })
            if (deletedMessage == 1) {
                res.status(200).send({
                    message: 'Message deleted'
                })
            } else {
                res.status(400).send({
                    message: 'Message was not deleted'
                })
            }
        } else {
            res.status(404).send({
                message: 'Message was not found'
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