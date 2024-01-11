const db = require('../../models/index.js');
const statusesTable = db['Statuses'];

const getStatus = async (req, res) => {
    try {
        const status = await statusesTable.findByPk(req.params.id);

        res.status(200).send({
            message: `Status ID :  ${status.id}`,
            data: status
        })
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const getStatuses = async (req, res) => {
    try {
        const statuses = await statusesTable.findAll();

        res.status(200).send({
            message: 'Select all of statuses',
            data: statuses
        })

    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const createStatus = async (req, res) => {
    try {
        let data = { ...req.body };
        const newStatus = await statusesTable.create(data);

        res.status(200).send({
            message: 'Status created',
            data: newStatus
        })
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const modifyStatus = async (req, res) => {
    try {
        const newData = { ...req.body };
        const idStatus = req.params.id;
        const updateStatus = await statusesTable.update(
            newData,
            {
                where: {
                    id: idStatus
                }
            })
        if (updateStatus[0] == 1) {
            res.status(200).send({
                message: 'Status updated'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const deleteStatus = async (req, res) => {
    try {
        const idStatus = req.params.id;
        const deletedStatus = await statusesTable.destroy({
            where: { id: idStatus }
        })
        console.log(deletedStatus);
        if (deletedStatus == 1) {
            res.status(200).send({
                message: 'Status deleted'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

module.exports = { getStatus, getStatuses, createStatus, modifyStatus, deleteStatus }