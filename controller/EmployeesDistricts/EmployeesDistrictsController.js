const db = require('../../models/index.js');
const employeesDistrictsTable = db['Employees_Districts'];
const employeesTable = db['Employees'];
const districtsTable = db['Districts'];

const getEmployeeDistrict = async (req, res) => {
    try {
        const employeeDistrict = await employeesDistrictsTable.findByPk(req.params.id);
        if (employeeDistrict) {
            res.status(200).send({
                data: employeeDistrict
            })
        } else {
            res.status(422).send({
                message: 'Employee-district pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
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
                message: 'Pas employees-district trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
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
            if (newEmployeeDistrict[0] === 1) {
                res.status(200).send({
                    message: 'Employee-District créé',
                    data: newEmployeeDistrict
                })
            } else {
                res.status(422).send({
                    message: 'Employee-district pas créé'
                })
            }
        } else if (!idDistrictFound && idEmployeesFound) {
            res.status(422).send({
                message: 'District pas trouvé'
            })
        } else if (!idEmployeesFound && idDistrictFound) {
            res.status(422).send({
                message: 'Employé pas trouvé'
            })
        } else {
            res.status(422).send({
                message: 'District ET employé n\'ont pas été trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const modifyEmployeeDistrict = async (req, res) => {
    try {
        const data = { ...req.body };
        const idEmployeeDistrict = req.params.id;
        const idEmployeeDistrictFound = await employeesDistrictsTable.findByPk(idEmployeeDistrict);
        if (idEmployeeDistrictFound) {
            const idEmployee = data.idEmployees;
            const idEmployeesFound = await employeesTable.findByPk(idEmployee);
            const idDistrict = data.idDistricts;
            const idDistrictFound = await districtsTable.findByPk(idDistrict);
            if (idEmployeesFound && idDistrictFound) {
                const updateEmployeeDistrict = await employeesDistrictsTable.update(
                    data,
                    {
                        where: { id: idEmployeeDistrict }
                    })
                if (updateEmployeeDistrict[0] == 1) {
                    res.status(200).send({
                        message: 'Employee-District modifié'
                    })
                } else {
                    res.status(422).send({
                        message: 'Employee-District pas modifié'
                    })
                }
            } else if (!idDistrictFound && idEmployeesFound) {
                res.status(422).send({
                    message: 'District pas trouvé'
                })
            } else if (!idEmployeesFound && idDistrictFound) {
                res.status(422).send({
                    message: 'Employé pas trouvé'
                })
            } else {
                res.status(422).send({
                    message: 'District ET Employé pas trouvé'
                })
            }
        } else {
            res.status(422).send({
                message: 'Employee-District pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
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
                    message: 'Employee-District supprimé'
                })
            }
        } else {
            res.status(422).send({
                message: 'Employee-District pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

module.exports = { getEmployeeDistrict, getEmployeesDistricts, createEmployeeDistrict, modifyEmployeeDistrict, deleteEmployeeDistrict }