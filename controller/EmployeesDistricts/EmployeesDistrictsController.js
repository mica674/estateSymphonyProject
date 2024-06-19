const { EmployeeDistrictNoFound, SyntaxErrorMessage, NoEmployeeDistrictFound, EmployeeDistrictCreated, EmployeeDistrictNotCreated, DistrictNoFound, EmployeeNoFound, EmployeeAndDistritNotFound, EmployeeDistrictUpdated, EmployeeDistrictNotUpdated, EmployeeDistrictDeleted, EmployeeDistrictNotDeleted, EmployeeOrDistrictAlreadyUsed } = require('../../config/Constants.js');
const db = require('../../models/index.js');
const employeesDistrictsTable = db['Employees_Districts'];
const employeesTable = db['Employees'];
const districtsTable = db['Districts'];
const { Op } = require('sequelize');


const getEmployeeDistrict = async (req, res) => {
    try {
        const employeeDistrict = await employeesDistrictsTable.findByPk(req.params.id);
        if (employeeDistrict) {
            res.status(200).send({
                data: employeeDistrict
            })
        } else {
            res.status(422).send({
                message: EmployeeDistrictNoFound
            })
        }
    } catch (error) {
        res.status(422).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }
}
const getEmpDisByIdEmployee = async (req, res) => {
    try {
        const idEmployee = req.params.id;
        const employeeFound = await employeesTable.findByPk(idEmployee);
        if (employeeFound) {
            const employeeDistrict = await employeesDistrictsTable.findOne({ where: { idEmployees: idEmployee } });
            if (employeeDistrict) {
                res.status(200).send({
                    data: employeeDistrict,
                })
            } else {
                res.status(422).send({
                    message: EmployeeDistrictNoFound
                })
            }
        } else {
            res.status(422).send({
                message: EmployeeNoFound,
            })
        }
    } catch (error) {
        res.status(422).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }
}
const getEmployeesDistricts = async (req, res) => {
    try {
        const employeesDistricts = await employeesDistrictsTable.findAll();
        if (employeesDistricts && employeesDistricts.length > 0) {
            res.status(200).send({
                data: employeesDistricts
            })
        } else {
            res.status(422).send({
                message: NoEmployeeDistrictFound
            })
        }
    } catch (error) {
        res.status(422).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }
}
const createEmployeeDistrict = async (req, res) => {
    try {
        let data = { ...req.body };
        const idEmployee = data.idEmployees;
        const idEmployeesFound = await employeesTable.findByPk(idEmployee);
        const idDistrict = data.idDistricts;
        const idDistrictFound = await districtsTable.findByPk(idDistrict);
        if (idEmployeesFound && idDistrictFound) {
            const newEmployeeDistrict = await employeesDistrictsTable.create(data);
            if (newEmployeeDistrict) {
                res.status(200).send({
                    message: EmployeeDistrictCreated,
                    data: newEmployeeDistrict
                })
            } else {
                res.status(422).send({
                    message: EmployeeDistrictNotCreated
                })
            }
        } else if (!idDistrictFound && idEmployeesFound) {
            res.status(422).send({
                message: DistrictNoFound
            })
        } else if (!idEmployeesFound && idDistrictFound) {
            res.status(422).send({
                message: EmployeeNoFound
            })
        } else {
            res.status(422).send({
                message: EmployeeAndDistritNotFound
            })
        }
    } catch (error) {
        res.status(422).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }
}
const modifyEmployeeDistrict = async (req, res) => {
    try {
        const data = { ...req.body };
        const idEmployeeDistrict = req.params.id;
        const idDistrict = data.idDistricts;
        const idEmployee = data.idEmployees;
        const idDistrictAlreadyUsed = await employeesDistrictsTable.findOne({
            where: {
                idDistricts: idDistrict,
                id: { [Op.ne]: idEmployeeDistrict }
            }
        })
        if (!idDistrictAlreadyUsed) {
            const idEmployeeDistrictFound = await employeesDistrictsTable.findByPk(idEmployeeDistrict);
            if (idEmployeeDistrictFound) {
                const idEmployeesFound = await employeesTable.findByPk(idEmployee);
                const idDistrictFound = await districtsTable.findByPk(idDistrict);
                if (idEmployeesFound && idDistrictFound) {
                    const updateEmployeeDistrict = await employeesDistrictsTable.update(
                        data,
                        {
                            where: { id: idEmployeeDistrict }
                        })
                    if (updateEmployeeDistrict) {
                        res.status(200).send({
                            message: EmployeeDistrictUpdated
                        })
                    } else {
                        res.status(422).send({
                            message: EmployeeDistrictNotUpdated
                        })
                    }
                } else if (!idDistrictFound && idEmployeesFound) {
                    res.status(422).send({
                        message: DistrictNoFound
                    })
                } else if (!idEmployeesFound && idDistrictFound) {
                    res.status(422).send({
                        message: EmployeeNoFound,
                    })
                } else {
                    res.status(422).send({
                        message: EmployeeAndDistritNotFound,
                    })
                }
            } else {
                res.status(422).send({
                    message: EmployeeDistrictNoFound,
                })
            }
        } else {
            res.status(422).send({
                message: EmployeeOrDistrictAlreadyUsed,
            })
        }
    } catch (error) {
        res.status(422).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }
}
const deleteEmployeeDistrict = async (req, res) => {
    try {
        const idEmployeeDistrict = req.params.id;
        const idEmployeeDistrictFound = await employeesDistrictsTable.findByPk(idEmployeeDistrict);
        if (idEmployeeDistrictFound) {
            const deletedEmployeeDistrict = await employeesDistrictsTable.destroy({
                where: { id: idEmployeeDistrict }
            })
            if (deletedEmployeeDistrict[0] === 1) {
                res.status(200).send({
                    message: EmployeeDistrictDeleted
                })
            }
        } else {
            res.status(422).send({
                message: EmployeeDistrictNotDeleted
            })
        }
    } catch (error) {
        res.status(422).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }
}

module.exports = { getEmployeeDistrict, getEmpDisByIdEmployee, getEmployeesDistricts, createEmployeeDistrict, modifyEmployeeDistrict, deleteEmployeeDistrict }