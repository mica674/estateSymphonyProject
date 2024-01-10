const db = require('../../models/index.js');
const messagesTable = db['Messages'];

const getMessageID = async (req, res)=>{
    try {
        const message = await messagesTable.findByPk(req.params.id);

        res.status(200).send({
            message: `Message id : ${message.id}`,
            data:   message
        })
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })  
    }
}

const getMessages = async (req, res)=>{
    try {
        const messages = await messagesTable.findAll();

        res.status(200).send({
            message : 'select all',
            data:   messages
        })

    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const createMessage = async (req, res)=>{
    try {
        let data = {...req.body};
        const newMessage = await messagesTable.create(data);
        
        res.status(200).send({
            message : 'Message créé',
            data: newMessage
        })
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const modifyMessage = async (req, res)=>{
    try {
        const {message} = req.body;
        const idMessage = req.params.id;
        const updateMessages = await messagesTable.update(
            {message : message},
            {where :{
                    id : idMessage
                }
            })
            if(updateMessages[0] == 1){
                res.status(200).send({
                    message : 'Message modifié'
                })
            }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const deleteMessage =async (req,  res)=>{
    try {
        const idMessage = req.params.id;
        const deletedMessage = await messagesTable.destroy({
            where  : {id : idMessage}
        })
        if (deletedMessage == 1) {
            res.status(200).send({
                message: 'Message supprimé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

module.exports = {getMessageID, getMessages, createMessage, modifyMessage, deleteMessage}