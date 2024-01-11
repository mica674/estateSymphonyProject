const db = require('../../models/index.js');
const employeesTable = db['Employees'];

const getEmployee = async (req,res)=>{
    try {
        const employee = await employeesTable.findByPk(req.params.id);

        res.status(200).send({
            message: `Employé ${employee.id}`,
            data:employee
        })
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })  
    }
}

const getEmployees = async (req,res)=>{
    try {
        const employees = await employeesTable.findAll();

        res.status(200).send({
            message : 'select all',
            data:   employees
        })

    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const createEmployee = async (req,res)=>{
    try {
        let data = {...req.body};
        const newEmployees = await employeesTable.create(data);
        
        res.status(200).send({
            message : 'Employé créé',
            data: newEmployees
        })
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const modifyEmployee = async (req,res)=>{
    try {
        const {employee} = req.body;
        const idEmployee = req.params.id;
        const updateEmployee = await employeesTable.update(
            {employee : employee},
            {where :{
                    id : idEmployee
                }
            })
            if(updateEmployee[0] == 1){
                res.status(200).send({
                    message : 'Employé modifié'
                })
            }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const deleteEmployee =async (req, res)=>{
    try {
        const idEmployee = req.params.id;
        const deletedEmployee = await employeesTable.destroy({
            where  : {id : idEmployee}
        })
        console.log(deletedEmployee);
        if (deletedEmployee == 1) {
            res.status(200).send({
                message: 'Employé supprimé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

module.exports = {getEmployee, getEmployees, createEmployee, modifyEmployee, deleteEmployee}