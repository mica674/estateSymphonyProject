const db = require('../../models/index.js');
const rolesTable = db['Roles'];

const getRole = async (req, res) => {
    try {
        const role = await rolesTable.findByPk(req.params.id);
        if (role) {
            res.status(200).send({
                data: role
            })
        } else {
            res.status(422).send({
                message: 'Role pas trouvé'
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
        const roles = await rolesTable.findAll();
        if (roles && roles.length !== 0) {
            res.status(200).send({
                data: roles
            })
        } else {
            res.status(422).send({
                message: 'Pas de role trouvé'
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
        const newRole = await rolesTable.create(data);
        if (newRole[0] === 1) {
            res.status(200).send({
                message: 'Role créé',
                data: newRole
            })
        } else {
            res.status(422).send({
                message: 'Role pas créé'
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
        const idRoleFound = await rolesTable.findByPk(RoleId);
        if (idRoleFound) {
            const updateRole = await rolesTable.update(
                { name: name },
                {
                    where: { id: RoleId }
                })
            if (updateRole[0] == 1) {
                res.status(200).send({
                    message: 'Role modifié'
                })
            } else {
                res.status(422).send({
                    message: 'Role pas modifié'
                })
            }
        } else {
            res.status(422).send({
                message: 'Role pas trouvé'
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
        const idRoleFound = await rolesTable.findByPk(RoleId);
        if (idRoleFound) {
            const deletedRole = await rolesTable.destroy({
                where: { id: RoleId }
            })
            if (deletedRole === 1) {
                res.status(200).send({
                    message: 'Role supprimé'
                })
            }
            else {
                res.status(422).send({
                    message: 'Role pas supprimé'
                })
            }
        } else {
            res.status(422).send({
                message: 'Role pas trouvé'
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