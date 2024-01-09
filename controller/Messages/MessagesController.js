const db = require('../../models/index.js');
const messagesTable = db['Messages'];

const getMessage = async (req,res)=>{
    try {
        const message = await messagesTable.findByPk(req.params.id);

        res.status(200).send({
            message: `Messageaire ${message.id}`,
            data:message
        })
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })  
    }
}

const getAllMessages = async (req,res)=>{
    try {
        const messages = await messagesTable.findAll();

        res.status(200).send({
            message : 'select all',
            data:messages
        })

    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const createMessages = async (req,res)=>{
    try {
        let data = {...req.body};
        const newMessages = await messagesTable.create(data);
        
        res.status(200).send({
            message : 'Messages créé',
            data: newMessages
        })
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const modifyMessages = async (req,res)=>{
    try {
        const {message} = req.body;
        const idMessages = req.params.id;
        const updateMessages = await messagesTable.update(
            {message : message},
            {where :{
                    id : idMessages
                }
            })
            if(updateMessages[0] == 1){
                res.status(200).send({
                    message : 'Messages modifié'
                })
            }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const deleteMessages =async (req, res)=>{
    try {
        const idMessages = req.params.id;
        const deletedMessage = await messagesTable.destroy({
            where  : {id : idMessage}
        })
        console.log(deletedMessage);
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

module.exports = {getMessage, getAllMessages, createMessages, modifyMessages, deleteMessages}