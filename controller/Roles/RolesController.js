const db = require('../../models/index.js');
const roleTable = db['Role'];

const getRole = async (req, res) => {
    try {
        const role = await roleTable.findByPk(req.params.id);
        if (role !== null) {
            res.status(200).send({
                message: `Role ${role.id}`,
                data: role
            })
        } else {
            res.status(404).send({
                message: 'Role not found'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const getAllRoles = async (req, res) => {
    try {
        const roles = await roleTable.findAll();
        if (roles !== null) {
            res.status(200).send({
                data: roles
            })
        } else {
            res.status(404).send({
                message: 'No role found'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const createRole = async (req, res) => {
    try {
        let data = { ...req.body };
        const newRole = await roleTable.create(data);
        if (newRole !== null) {
            res.status(200).send({
                message: 'Role created',
                data: newRole
            })
        } else {
            res.status(404).send({
                message: 'Role not created'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const modifyRole = async (req, res) => {
    try {
        const { name } = req.body;
        const RoleId = req.params.id;
        const idRoleFound = await roleTable.findByPk(RoleId);
        if (idRoleFound !== null) {
            const updateRole = await roleTable.update(
                { name: name },
                {
                    where: {
                        id: RoleId
                    }
                })
            if (updateRole[0] == 1) {
                res.status(200).send({
                    message: 'Role updated'
                })
            } else {
                res.status(400).send({
                    message: 'Role was not updated'
                })
            }
        } else {
            res.status(404).send({
                message: 'Role not found'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const deleteRole = async (req, res) => {
    try {
        const RoleId = req.params.id;
        const idRoleFound = await roleTable.findByPk(RoleId);
        if (idRoleFound !== null) {
            const deletedRole = await roleTable.destroy({
                where: { id: RoleId }
            })
            if (deletedRole == 1) {
                res.status(200).send({
                    message: 'Role deleted'
                })
            }
            else {
                res.status(400).send({
                    message: 'Role not deleted'
                })
            }
        } else {
            res.status(404).send({
                message: 'Role not found'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

module.exports = { getRole, getAllRoles, createRole, modifyRole, deleteRole }