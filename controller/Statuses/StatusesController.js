const db = require('../../models/index.js');
const statusesTable = db['Statuses'];

const getStatus = async (req, res) => {
    try {
        const status = await statusesTable.findByPk(req.params.id);
        if (status) {
            res.status(200).send({
                data: status
            })
        } else {
            res.status(422).send({
                message: 'Status pas trouvé'
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
        if (statuses && statuses.length !== 0) {
            res.status(200).send({
                data: statuses
            })
        } else {
            res.status(422).send({
                message: 'Pas de status trouvé'
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
        if (newStatus[0] === 1) {
            res.status(200).send({
                message: 'Status créé',
                data: newStatus
            })
        } else {
            res.status(422).send({
                message: 'Status pas créé'
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
        if (idStatusFound) {
            const updateStatus = await statusesTable.update(
                newData,
                {
                    where: { id: idStatus }
                })
            if (updateStatus[0] == 1) {
                res.status(200).send({
                    message: 'Status modifié'
                })
            } else {
                res.status(422).send({
                    message: 'Status pas modifié'
                })
            }
        } else {
            res.status(422).send({
                message: 'Status pas trouvé'
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
        if (idStatusFound) {
            const deletedStatus = await statusesTable.destroy({
                where: { id: idStatus }
            })
            if (deletedStatus == 1) {
                res.status(200).send({
                    message: 'Status supprimé',
                    data: deleteStatus
                })
            } else {
                res.status(422).send({
                    message: 'Status pas supprimé'
                })
            }
        } else {
            res.status(422).send({
                message: 'Status pas trouvé'
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