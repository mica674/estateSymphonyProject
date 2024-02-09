const db = require('../../models/index.js');
const usersPropertiesTable = db['Users_Properties'];
const usersTable = db['Users'];
const propertiesTable = db['Properties'];

const getUserProperty = async (req, res) => {
    try {
        const userProperty = await usersPropertiesTable.findByPk(req.params.id);
        if (userProperty) {
            res.status(200).send({
                data: userProperty
            })
        } else {
            res.status(422).send({
                message: 'User-Property pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const getUsersProperties = async (req, res) => {
    try {
        const usersProperties = await usersPropertiesTable.findAll();
        if (usersProperties && usersProperties.length !== 0) {
            res.status(200).send({
                data: usersProperties
            })
        } else {
            res.status(422).send({
                message: 'Pas de User-Property trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const createUserProperty = async (req, res) => {
    try {
        let data = { ...req.body };
        const idUser = data.idUsers;
        const idUserFound = await usersTable.findByPk(idUser);
        if (idUserFound) {
            const idProperty = data.idProperties;
            const idPropertyFound = await propertiesTable.findByPk(idProperty);
            if (idPropertyFound) {
                const newUserProperty = await usersPropertiesTable.create(data);
                if (newUserProperty[0] === 1) {
                    res.status(200).send({
                        message: 'User-Property créé',
                        data: newUserProperty
                    })
                } else {
                    res.status(422).send({
                        message: 'User-Property pas créé'
                    })
                }
            } else {
                res.status(422).send({
                    message: 'Propriété pas trouvée'
                })
            }
        } else {
            res.status(422).send({
                message: 'Utilisater pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const modifyUserProperty = async (req, res) => {
    try {
        const newData = { ...req.body };
        const idUserProperty = req.params.id;
        const idUserPropertyFound = await usersPropertiesTable.findByPk(idUserProperty);
        if (idUserPropertyFound) {
            const idUser = newData.idUsers;
            const idUserFound = await usersTable.findByPk(idUser);
            if (idUserFound) {
                const idProperty = newData.idProperties;
                const idPropertyFound = await propertiesTable.findByPk(idProperty);
                if (idPropertyFound) {
                    const updateUserProperty = await usersPropertiesTable.update(
                        newData,
                        {
                            where: { id: idUserProperty }
                        })
                    if (updateUserProperty[0] == 1) {
                        res.status(200).send({
                            message: 'User-Property modifié'
                        })
                    } else {
                        res.status(422).send({
                            message: 'User-Property pas modifié'
                        })
                    }
                } else {
                    res.status(422).send({
                        message: 'Propriété pas trouvée'
                    })
                }
            } else {
                res.status(422).send({
                    message: 'Utilisateur pas trouvé'
                })
            }
        } else {
            res.status(422).send({
                message: 'User-Property pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const deleteUserProperty = async (req, res) => {
    try {
        const idUserProperty = req.params.id;
        const idUserPropertyFound = await usersPropertiesTable.findByPk(idUserProperty);
        if (idUserPropertyFound) {
            const deletedUserProperty = await usersPropertiesTable.destroy({
                where: { id: idUserProperty }
            })
            if (deletedUserProperty === 1) {
                res.status(200).send({
                    message: 'User-Property supprimé'
                })
            } else {
                res.status(422).send({
                    message: 'User-Property pas supprimé'
                })
            }
        } else {
            res.status(422).send({
                message: 'User-Property pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

module.exports = { getUserProperty, getUsersProperties, createUserProperty, modifyUserProperty, deleteUserProperty }