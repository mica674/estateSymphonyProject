const { where } = require('sequelize');
const db = require('../../models/index.js');
const { NoAgendaFound, SyntaxErrorMessage, AgendaNoFound, UserNoFound, AgendaCreated, AgendaNotCreated, EmployeeNoFound, UserEmployeeNoFound, AgendaUpdated, AgendaNotUpdated, AgendaDeleted, AgendaNotDeleted } = require('../../config/Constants.js');
const agendasTable = db['Agendas'];
const usersTable = db['Users'];
const employeesTable = db['Employees'];

const getAgenda = async (req, res) => {
    try {
        const agenda = await agendasTable.findByPk(req.params.id, { include: 'user', include: 'employee' });
        if (agenda) {
            res.status(200).send({
                data: agenda
            })
        } else {
            res.status(422).send({
                message: AgendaNoFound,
            })
        }
    } catch (error) {
        res.status(400).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }
}
const getAgendas = async (req, res) => {
    try {
        //  Récupération de tous les utilisateurs
        const agendas = await agendasTable.findAll();
        if (agendas && agendas.length > 0) {
            res.status(200).send({
                data: agendas
            })
        } else {
            res.status(422).send({
                message: NoAgendaFound
            })
        }
    } catch (error) {
        res.status(400).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }
}
const getAgendasByUser = async (req, res) => {
    try {
        //  Récupération de l'agenda d'un seul utilisateur
        const idUser = req.params.id;
        const idUserFound = await usersTable.findByPk(idUser);
        if (idUserFound) {
            const agendas = await agendasTable.findAll({ where: { idUsers: idUser } });
            if (agendas && agendas.length > 0) {
                res.status(200).send({
                    data: agendas
                })
            } else {
                res.status(422).send({
                    message: NoAgendaFound
                })
            }
        } else {
            res.status(422).send({
                message: UserNoFound
            })
        }
    } catch (error) {
        res.status(400).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }
}
const createAgenda = async (req, res) => {
    try {
        const data = { ...req.body };
        const idEmployee = data.idEmployees
        const idEmployeeFound = await employeesTable.findByPk(idEmployee)
        const idUser = data.idUsers;
        const idUserFound = await usersTable.findByPk(idUser);
        if (idEmployeeFound && idUserFound) {
            const newAgenda = await agendasTable.create(data);
            if (newAgenda[0] === 1) {
                res.status(200).send({
                    message: AgendaCreated,
                    data: newAgenda
                })
            } else {
                res.status(422).send({
                    message: AgendaNotCreated
                })
            }
        } else if (!idUserFound && idEmployeeFound) {
            res.status(422).send({
                message: UserNoFound
            })
        } else if (!idEmployeeFound && idUserFound) {
            res.status(422).send({
                message: EmployeeNoFound
            })
        } else {
            res.status(422).send({
                message: UserEmployeeNoFoundd
            })
        }
    } catch (error) {
        res.status(400).send({
            message: SyntaxErrorMessage,
            error: error.message
        })

    }
}
const modifyAgenda = async (req, res) => {

    try {
        const data = { ...req.body };
        const idAgendas = req.params.id;
        const idAgendasFound = await agendasTable.findByPk(idAgendas);
        if (idAgendasFound) {
            const idEmployee = data.idEmployees;
            const idEmployeeFound = await employeesTable.findByPk(idEmployee);
            const idUser = data.idUser;
            const idUserFound = await usersTable.findByPk(idUser);
            if (idEmployeeFound && idUserFound) {
                const updateAgenda = await agendasTable.update(
                    data,
                    {
                        where: { id: idAgendas }
                    })
                if (updateAgenda[0] == 1) {
                    res.status(200).send({
                        message: AgendaUpdated
                    })
                } else {
                    res.status(422).send({
                        message: AgendaNotUpdated
                    })
                }
            } else if (!idUserFound && idEmployeeFound) {
                res.status(422).send({
                    message: UserNoFound
                })
            } else if (!idEmployeeFound && idUserFound) {
                res.status(422).send({
                    message: EmployeeNoFound
                })
            } else {
                res.status(422).send({
                    message: UserEmployeeNoFound
                })
            }
        } else {
            res.status(422).send({
                message: AgendaNoFound
            })
        }
    } catch (error) {
        res.status(400).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }

}
const deleteAgenda = async (req, res) => {
    try {
        const idAgenda = req.params.id;
        const idAgendaFound = await agendasTable.findByPk(idAgenda)
        if (idAgendaFound) {
            const deletedAgenda = await agendasTable.destroy({
                where: { id: idAgenda }
            })
            if (deletedAgenda == 1) {
                res.status(200).send({
                    message: AgendaDeleted
                })
            } else {
                res.status(422).send({
                    message: AgendaNotDeleted
                })
            }
        } else {
            res.status(422).send({
                message: AgendaNoFound
            })
        }
    } catch (error) {
        res.status(400).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }
}
module.exports = { createAgenda, getAgenda, getAgendasByUser, getAgendas, modifyAgenda, deleteAgenda };