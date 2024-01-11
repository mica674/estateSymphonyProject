const db = require('../../models/index.js');
const employeesDistrictsTable = db['EmployeesDistricts'];

const getEmployeeDistrict = async (req,res)=>{
    try {
        const employeeDistrict = await employeesDistrictsTable.findByPk(req.params.id);

        res.status(200).send({
            message: `Employee-District ID :  ${employeeDistrict.id}`,
            data:   employeeDistrict
        })
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })  
    }
}

const getEmployeesDistricts = async (req,res)=>{
    try {
        const employeesDistricts = await employeesDistrictsTable.findAll();

        res.status(200).send({
            message : 'select all of employees-districts',
            data:   employeesDistricts
        })

    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const createEmployeeDistrict = async (req,res)=>{
    try {
        let data = {...req.body};
        const newEmployeeDistrict = await employeesDistrictsTable.create(data);
        
        res.status(200).send({
            message : 'Employee-District created',
            data: newEmployeeDistrict
        })
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const modifyEmployeeDistrict = async (req,res)=>{
    try {
        const {idDistrict, idEmployees} = req.body;
        const idEmployeeDistrict = req.params.id;
        const updateEmployeeDistrict = await employeesDistrictsTable.update(
            {idDistrict : idDistrict},
            {idEmployees : idEmployees},
            {where :{
                    id : idEmployeeDistrict
                }
            })
            if(updateEmployeeDistrict[0] == 1){
                res.status(200).send({
                    message : 'Employee-District updated'
                })
            }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const deleteEmployeeDistrict =async (req, res)=>{
    try {
        const idEmployeeDistrict = req.params.id;
        const deletedEmployeeDistrict = await employeesDistrictsTable.destroy({
            where  : {id : idEmployeeDistrict}
        })
        console.log(deletedEmployeeDistrict);
        if (deletedEmployeeDistrict == 1) {
            res.status(200).send({
                message: 'Employee-District deleted'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

module.exports = {getEmployeeDistrict, getEmployeesDistricts, createEmployeeDistrict, modifyEmployeeDistrict, deleteEmployeeDistrict}