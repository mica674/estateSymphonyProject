const db = require('../../models/index.js');
const employeesDistrictsTable = db['Employees_District'];
const employeesTable = db['Employees'];
const districtsTable = db['District'];

const getEmployeeDistrict = async (req, res) => {
    try {
        const employeeDistrict = await employeesDistrictsTable.findByPk(req.params.id);
        console.log("coucou");
        if (employeeDistrict !== null) {

            res.status(200).send({
                data: employeeDistrict
            })
        } else {
            res.status(404).send({
                message: 'Employee-district not found'
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
        console.log(employeesDistricts);
        if (employeesDistricts !== null && employeesDistricts.length > 0) {

            res.status(200).send({
                data: employeesDistricts
            })
        } else {
            res.status(404).send({
                message: 'No employees-district found'
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

        const idEmployeesFound = await employeesTable.findOne({
            where: { id: data.idEmployees }
        })
        const idDistrictFound = await districtsTable.findOne({
            where: { id: data.idDistrict }
        })
        if (idEmployeesFound !== null && idDistrictFound !== null) {
            const newEmployeeDistrict = await employeesDistrictsTable.create(data);
            if (newEmployeeDistrict !== null) {
                res.status(200).send({
                    message: 'Employee-District created',
                    data: newEmployeeDistrict
                })
            } else {
                res.status(400).send({
                    message: 'Employee-district not created'
                })
            }
        } else if (idDistrictFound === null && idEmployeesFound !== null) {
            res.status(404).send({
                message: 'IdDistrict not found'
            })
        } else if (idEmployeesFound === null && idDistrictFound !== null) {
            res.status(404).send({
                message: 'IdEmployees not found'
            })
        } else {
            res.status(404).send({
                message: 'IdDistrict AND idEmployees not found'
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
        if (idEmployeeDistrictFound !== null) {
            const idEmployeesFound = await employeesTable.findOne({
                where: { id: data.idEmployees }
            })
            const idDistrictFound = await districtsTable.findOne({
                where: { id: data.idDistrict }
            })
            if (idEmployeesFound !== null && idDistrictFound !== null) {
                const updateEmployeeDistrict = await employeesDistrictsTable.update(
                    data,
                    {
                        where: {
                            id: idEmployeeDistrict
                        }
                    })
                if (updateEmployeeDistrict[0] == 1) {
                    res.status(200).send({
                        message: 'Employee-District updated'
                    })
                } else {
                    res.status(400).send({
                        message: 'Employee-District not updated'
                    })
                }
            } else if (idDistrictFound === null && idEmployeesFound !== null) {
                res.status(404).send({
                    message: 'IdDistrict not found'
                })
            } else if (idEmployeesFound === null && idDistrictFound !== null) {
                res.status(404).send({
                    message: 'IdEmployees not found'
                })
            } else {
                res.status(404).send({
                    message: 'IdDistrict AND idEmployees not found'
                })
            }
        } else {
            res.status(404).send({
                message: 'Employee-District not found'
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
        const idEmployeeDistrictFound = await employeesDistrictsTable.findOne({
            where: { id: idEmployeeDistrict }
        })
        if (idEmployeeDistrictFound !== null) {
            const deletedEmployeeDistrict = await employeesDistrictsTable.destroy({
                where: { id: idEmployeeDistrict }
            })
            if (deletedEmployeeDistrict == 1) {
                res.status(200).send({
                    message: 'Employee-District deleted'
                })
            }
        } else {
            res.status(404).send({
                message: 'Employee-District not found'
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