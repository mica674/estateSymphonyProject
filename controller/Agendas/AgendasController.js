const db = require('../../models/index.js');
const agendasTable = db['Agendas'];
const usersTable = db['User'];
const employeesTable = db['Employees'];

const getAgenda = async (req, res) => {

    try {

        const agenda = await agendasTable.findByPk(req.params.id, { include: 'user', include: 'employee' });
        if (agenda !== null) {
            res.status(200).send({
                data: agenda
            })
        } else {
            res.status(404).send({
                message: 'Agenda not found'
            })
        }
    } catch (error) {

        console.log(error);

        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const getAgendas = async (req, res) => {
    try {
        //  Récupération de tous les utilisateurs
        const agendas = await agendasTable.findAll();
        if (agendas !== null) {
            res.status(200).send({
                data: agendas
            })
        } else {
            res.status(404).send({
                message: 'No agenda found'
            })
        }

    } catch (error) {
        console.log(error);

        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const createAgenda = async (req, res) => {
    try {
        const data = { ...req.body };
        const idEmployeeFound = await employeesTable.findOne({
            where: { id: data.idEmployee }
        })
        const idUserFound = await usersTable.findOne({
            where: { id: data.idUser }
        })
        if (idEmployeeFound !== null && idUserFound !== null) {
            const newAgenda = await agendasTable.create(data);
            if (newAgenda !== null) {
                res.status(200).send({
                    message: 'Agenda created',
                    data: newAgenda
                })
            } else {
                res.status(400).send({
                    message: 'Agenda not created'
                })
            }
        } else if (idUserFound === null && idEmployeeFound !== null) {
            res.status(404).send({
                message: 'IdUser not found'
            })
        } else if (idEmployeeFound === null && idUserFound !== null) {
            res.status(404).send({
                message: 'IdEmployee not found'
            })
        } else {
            res.status(404).send({
                message: 'IdUser AND idEmployee not found'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })

    }
}
const modifyAgenda = async (req, res) => {

    try {
        const data = { ...req.body };
        const idAgendas = req.params.id;
        const idAgendasFound = await agendasTable.findByPk(idAgendas);
        if (idAgendasFound !== null) {
            const idEmployeeFound = await employeesTable.findOne({
                where: { id: data.idEmployee }
            })
            const idUserFound = await usersTable.findOne({
                where: { id: data.idUser }
            })
            if (idEmployeeFound !== null && idUserFound !== null) {
                const updateAgenda = await agendasTable.update(
                    data,
                    {
                        where: {
                            id: idAgendas
                        }
                    })
                if (updateAgenda[0] == 1) {
                    res.status(200).send({
                        message: 'Agenda updated'
                    })
                } else {
                    res.status(400).send({
                        message: 'Agenda not updated'
                    })
                }
            } else if (idUserFound === null && idEmployeeFound !== null) {
                res.status(404).send({
                    message: 'idUser not found'
                })
            } else if (idEmployeeFound === null && idUserFound !== null) {
                res.status(404).send({
                    message: 'IdEmployee not found'
                })
            } else {
                res.status(404).send({
                    message: 'idUser AND idEmployee not found'
                })
            }
        } else {
            res.status(404).send({
                message: 'Agenda not found'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }

}
const deleteAgenda = async (req, res) => {
    try {
        const idAgenda = req.params.id;
        const idAgendaFound = await agendasTable.findOne({
            where: { id: idAgenda }
        })
        if (idAgendaFound !== null) {
            const deletedAgenda = await agendasTable.destroy({
                where: { id: idAgenda }
            })
            if (deletedAgenda == 1) {
                res.status(200).send({
                    message: 'Agenda deleted'
                })
            }
        } else {
            res.status(404).send({
                message: 'Agenda not found'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
module.exports = { createAgenda, getAgenda, getAgendas, modifyAgenda, deleteAgenda };