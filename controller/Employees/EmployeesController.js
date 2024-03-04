const db = require('../../models/index.js');
const employeesTable = db['Employees'];
const usersTable = db['Users'];

const getEmployee = async (req, res) => {
    try {
        const employee = await employeesTable.findByPk(req.params.id);
        if (employee) {
            res.status(200).send({
                data: employee
            })
        } else {
            res.status(422).send({
                message: 'Employé pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const getEmployees = async (req, res) => {
    try {
        const employees = await employeesTable.findAll();
        if (employees && employees.length > 0) {
            res.status(200).send({
                data: employees
            })
        } else {
            res.status(422).send({
                message: 'Pas d\'employé trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const createEmployee = async (req, res) => {
    try {
        const data = { ...req.body };
        const idUser = data.idUsers;
        const idUserFound = await usersTable.findOne({
            where: { id: idUser },
            include: 'userEmployees'
        });
        if (idUserFound) {
            //Name value from to idUserFound
            data = { ...req.body, name: idUserFound.firstname }
            const newEmployee = await employeesTable.create(data);
            if (newEmployee[0] === 1) {
                res.status(200).send({
                    message: 'Employé créé',
                    data: newEmployee
                })
            } else {
                res.status(422).send({
                    message: 'Employé pas créé'
                })
            }
        } else {
            res.status(422).send({
                message: 'Utilisateur pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const modifyEmployee = async (req, res) => {
    try {
        const data = { ...req.body };
        const idEmployee = req.params.id;
        const idEmployeeFound = await employeesTable.findByPk(idEmployee)
        if (idEmployeeFound) {
            const idUserFound = await usersTable.findOne({
                where: { id: data.idUsers },
                include: 'userEmployees'
            });
            if (idUserFound) {
                //Name value from to idUserFound
                data = { ...req.body, name: idUserFound.firstname }
                const updateEmployee = await employeesTable.update(
                    data,
                    {
                        where: {
                            id: idEmployee
                        }
                    })
                if (updateEmployee[0] == 1) {
                    res.status(200).send({
                        message: 'Employee updated',
                        data: data
                    })
                } else {
                    res.status(422).send({
                        message: 'Employee pas modifié'
                    })
                }
            } else {
                res.status(422).send({
                    message: 'idUsers pas trouvé'
                })
            }
        } else {
            res.status(422).send({
                message: 'Employee pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de syntaxe de la requête.',
            error: error.message
        })
    }
}

const deleteEmployee = async (req, res) => {
    try {
        const idEmployee = req.params.id;
        const idEmployeeFound = await employeesTable.findByPk(idEmployee);
        if (idEmployeeFound) {
            const deletedEmployee = await employeesTable.destroy({
                where: { id: idEmployee }
            })
            if (deletedEmployee[0] === 1) {
                res.status(200).send({
                    message: 'Employé supprimé',
                    data: idEmployeeFound
                })
            } else {
                res.status(422).send({
                    message: 'Employé pas supprimé'
                })
            }
        } else {
            res.status(422).send({
                message: 'Employé pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de syntaxe de la requête.',
            error: error.message
        })
    }
}

module.exports = { getEmployee, getEmployees, createEmployee, modifyEmployee, deleteEmployee }