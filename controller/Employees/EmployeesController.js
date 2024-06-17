const { EmployeeNoFound, SyntaxErrorMessage, NoEmployeeFound, EmployeeCreated, EmployeeNotCreated, UserNoFound, EmployeeUpdated, EmployeeNotUpdated, EmployeeDeleted, EmployeeNotDeleted, UserNotUpdatedInfos, EmployeeDistrictNotCreated } = require('../../config/Constants.js');
const db = require('../../models/index.js');
const employeesTable = db['Employees'];
const districtsTable = db['Districts'];
const usersTable = db['Users'];
const employeesDistrictsTable = db['Employees_Districts'];
const { sequelize } = require('../../models/index.js');

//#region FONCTIONS ANNEXES 
const createEmployeeDistrict = async (idEmployees, idDistricts, transaction) => {
    try {
        const data = { idEmployees, idDistricts };
        const idDistrictFound = await districtsTable.findByPk(idDistricts);
        if (idDistrictFound) {
            const newEmployeeDistrict = await employeesDistrictsTable.create(data, { transaction });
            if (newEmployeeDistrict) {
                return newEmployeeDistrict;
            } else {
                transaction.rollback();
                return null;
            }
        } else if (!idDistrictFound) {
            transaction.rollback();
            return null;
        } else if (idDistrictFound) {
            transaction.rollback();
            return null;
        } else {
            transaction.rollback();
            return null;
        }
    } catch (error) {
        transaction.rollback();
        console.log(error);
    }
}
//#endregion FONCTIONS ANNEXES

const getEmployee = async (req, res) => {
    try {
        const employee = await employeesTable.findByPk(req.params.id, { include: 'userEmployees' });
        if (employee) {
            res.status(200).send({
                data: employee
            })
        } else {
            res.status(422).send({
                message: EmployeeNoFound
            })
        }
    } catch (error) {
        res.status(422).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }
}
const getEmployees = async (req, res) => {
    try {
        const employees = await employeesTable.findAll({ include: 'userEmployees' });
        if (employees && employees.length > 0) {
            res.status(200).send({
                data: employees
            })
        } else {
            res.status(422).send({
                message: NoEmployeeFound
            })
        }
    } catch (error) {
        res.status(422).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }
}
const createEmployee = async (req, res) => {
    const transaction = await sequelize.transaction();
    try {
        const data = { ...req.body };
        const idUser = data.idUsers;
        const idRole = data.idRoles;
        const idUserFound = await usersTable.findOne({
            where: { id: idUser },
            transaction
        });
        if (idUserFound) {
            const newEmployee = await employeesTable.create(data,
                { transaction: transaction }
            );
            if (newEmployee) {
                const userRoleUpdated = await usersTable.update(
                    { idRoles: idRole },
                    { where: { id: idUser }, transaction: transaction }
                )
                const employeeDistrictCreated = await createEmployeeDistrict(
                    newEmployee.dataValues.id, data.idDistricts, transaction
                );
                if (userRoleUpdated && employeeDistrictCreated) {
                    await transaction.commit();
                    res.status(200).send({
                        message: EmployeeCreated,
                        data: newEmployee
                    })
                } else if (!userRoleUpdated) {
                    await transaction.rollback();
                    res.status(422).send({ message: EmployeeNotCreated, })
                } else if (!employeeDistrictCreated) {
                    await transaction.rollback();
                    res.status(422).send({ message: EmployeeDistrictNotCreated, })
                }
            } else {
                await transaction.rollback();
                res.status(422).send({ message: EmployeeNotCreated, })
            }
        } else {
            await transaction.rollback();
            res.status(422).send({
                message: UserNoFound
            })
        }
    } catch (error) {
        await transaction.rollback();
        res.status(422).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }
}
const modifyEmployee = async (req, res) => {
    const transaction = await db.sequelize.transaction();
    try {
        const data = { ...req.body };
        const idEmployee = req.params.id;
        const idUser = data.idUsers;
        const idEmployeeFound = await employeesTable.findByPk(idEmployee)
        if (idEmployeeFound) {
            const idUserFound = await usersTable.findOne({
                where: { id: data.idUsers },
                include: 'userEmployees'
            });
            if (idUserFound) {
                const updateEmployeeData = { descriptions: data.descriptions, name: data.name }
                const updateUserData = { firstname: data.firstname, lastname: data.lastname, email: data.email, phone: data.phone, idRoles: data.idRoles };
                //Name value from to idUserFound
                const updateEmployee = await employeesTable.update(
                    updateEmployeeData,
                    { where: { id: idEmployee } },
                    { transaction: transaction }
                )
                if (updateEmployee[0] == 1) {
                    const updateUser = await usersTable.update(
                        updateUserData,
                        { where: { id: idUser } },
                        { transaction: transaction }
                    )
                    if (updateUser[0] == 1) {
                        await transaction.commit();
                        res.status(200).send({
                            message: EmployeeUpdated,
                            data: data
                        })
                    } else {
                        await transaction.rollback();
                        res.status(422).send({
                            message: UserNotUpdatedInfos
                        })
                    }
                } else {
                    await transaction.rollback();
                    res.status(422).send({
                        message: EmployeeNotUpdated
                    })
                }
            } else {
                await transaction.rollback();
                res.status(422).send({
                    message: UserNoFound
                })
            }
        } else {
            await transaction.rollback();
            res.status(422).send({
                message: EmployeeNoFound
            })
        }
    } catch (error) {
        await transaction.rollback();
        res.status(422).send({
            message: SyntaxErrorMessage,
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
            if (deletedEmployee) {
                await usersTable.update({ idRoles: 4 }, { where: { id: idEmployeeFound.idUsers } })
                res.status(200).send({
                    message: EmployeeDeleted,
                    data: idEmployeeFound
                })
            } else {
                res.status(422).send({
                    message: EmployeeNotDeleted
                })
            }
        } else {
            res.status(422).send({
                message: EmployeeNoFound
            })
        }
    } catch (error) {
        res.status(422).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }
}

module.exports = { getEmployee, getEmployees, createEmployee, modifyEmployee, deleteEmployee }