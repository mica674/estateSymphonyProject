const db = require('../../models/index.js');
const employeesTable = db['Employees'];
const usersTable = db['User'];

const getEmployee = async (req, res) => {
    try {
        const employee = await employeesTable.findByPk(req.params.id);
        if (employee != null) {
            res.status(200).send({
                data: employee
            })
        } else {
            res.status(404).send({
                message: 'Employee not found'
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
        if (employees != null && employees.length > 0) {
            res.status(200).send({
                data: employees
            })
        } else {
            res.status(404).send({
                message: 'No employees found'
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
        let data = { ...req.body };
        let idUserFound = await usersTable.findOne({
            where: { id: data.idUsers },
            include: 'userEmployees'
        });
        if (idUserFound !== null) {
            //Name value from to idUserFound
            data = { ...req.body, name: idUserFound.firstname }
            const newEmployee = await employeesTable.create(data);
            if (newEmployee !== null) {
                res.status(200).send({
                    message: 'Employee created',
                    data: newEmployee
                })
            } else {
                res.status(400).send({
                    message: 'Employee was not created'
                })
            }
        } else {
            res.status(404).send({
                message: 'idUsers not found'
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
        let data = { ...req.body };
        const idEmployee = req.params.id;
        let idEmployeeFound = await employeesTable.findByPk(idEmployee)
        if (idEmployeeFound !== null) {
            let idUserFound = await usersTable.findOne({
                where: { id: data.idUsers },
                include: 'userEmployees'
            });
            if (idUserFound !== null) {
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
                    res.status(400).send({
                        message: 'Employee was not updated'
                    })
                }
            } else {
                res.status(404).send({
                    message: 'idUsers not found'
                })
            }
        } else {
            res.status(404).send({
                message: 'Employee not found'
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
        if (idEmployeeFound !== null) {
            const deletedEmployee = await employeesTable.destroy({
                where: { id: idEmployee }
            })
            if (deletedEmployee == 1) {
                res.status(200).send({
                    message: 'Employee deleted',
                    data: idEmployeeFound
                })
            } else {
                res.status(400).send({
                    message: 'Employee was not deleted'
                })
            }
        } else {
            res.status(404).send({
                message: 'Employee not found'
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