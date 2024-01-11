const db = require('../../models/index.js');
const historiesTable = db['Histories'];

const getHistory = async (req, res) => {
    try {
        const history = await historiesTable.findByPk(req.params.id);

        res.status(200).send({
            message: `History ID :  ${history.id}`,
            data: history
        })
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

        res.status(200).send({
            message: 'Select all of histories',
            data: histories
        })

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
        const newHistory = await historiesTable.create(data);

        res.status(200).send({
            message: 'History created',
            data: newHistory
        })
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
        const updateHistory = await historiesTable.update(
            newData,
            {
                where: {
                    id: idHistory
                }
            })
        if (updateHistory[0] == 1) {
            res.status(200).send({
                message: 'History updated'
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
        const deletedHistory = await historiesTable.destroy({
            where: { id: idHistory }
        })
        console.log(deletedHistory);
        if (deletedHistory == 1) {
            res.status(200).send({
                message: 'History deleted'
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