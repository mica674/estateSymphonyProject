const db = require('../../models/index.js');
const statusesTable = db['Status'];

const getStatus = async (req, res) => {
    try {
        const status = await statusesTable.findByPk(req.params.id);
        if (status !== null) {
            res.status(200).send({
                data: status
            })
        } else {
            res.status(404).send({
                message: 'Status not found'
            })
        }
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
        if (statuses !== null && statuses.length !== 0) {
            res.status(200).send({
                data: statuses
            })
        } else {
            res.status(404).send({
                message: 'No status found'
            })
        }
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
        if (newStatus !== null) {
            res.status(200).send({
                message: 'Status created',
                data: newStatus
            })
        } else {
            res.status(400).send({
                message: 'Status not created'
            })
        }
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
        const idStatusFound = await statusesTable.findByPk(idStatus);
        if (idStatusFound !== null) {

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
            } else {
                res.status(400).send({
                    message: 'Status was not updated'
                })
            }
        } else {
            res.status(404).send({
                message: 'Status not found'
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
        const idStatusFound = await statusesTable.findByPk(idStatus);
        if (idStatusFound !== null) {

            const deletedStatus = await statusesTable.destroy({
                where: { id: idStatus }
            })
            console.log(deletedStatus);
            if (deletedStatus == 1) {
                res.status(200).send({
                    message: 'Status deleted'
                })
            } else {
                res.status(400).send({
                    message: 'Status was not deleted'
                })
            }
        } else {
            res.status(404).send({
                message: 'Status not found'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête',
            error: error.message
        })
    }
}

module.exports = { getStatus, getStatuses, createStatus, modifyStatus, deleteStatus }