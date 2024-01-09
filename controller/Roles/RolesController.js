const db = require('../../models/index.js');
const roleTable = db['Role'];

const getRole = async (req,res)=>{
    try {
        const role = await roleTable.findByPk(req.params.id);

        res.status(200).send({
            message: `Role ${role.id}`,
            data:role
        })
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })  
    }
}

const getAllRoles = async (req,res)=>{
    try {
        const roles = await roleTable.findAll();

        res.status(200).send({
            message : 'select all',
            data:roles
        })

    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const createRole = async (req,res)=>{
    try {
        let data = {...req.body};
        const newRole = await roleTable.create(data);
        
        res.status(200).send({
            message : 'Role créé',
            data: newRole
        })
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const modifyRole = async (req,res)=>{
    try {
        const {name} = req.body;
        const RoleId = req.params.id;
        const updateRole = await roleTable.update(
            {name : name},
            {where :{
                    id : RoleId
                }
            })
            if(updateRole[0] == 1){
                res.status(200).send({
                    message : 'Role modifié'
                })
            }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const deleteRole =async (req, res)=>{
    try {
        const RoleId = req.params.id;
        const deletedRole = await roleTable.destroy({
            where  : {id : RoleId}
        })
        console.log(deletedRole);
        if (deletedRole == 1) {
            res.status(200).send({
                message: 'Role supprimé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

module.exports = {getRole, getAllRoles, createRole, modifyRole, deleteRole}