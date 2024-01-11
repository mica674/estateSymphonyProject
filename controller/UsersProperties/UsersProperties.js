const db = require('../../models/index.js');
const usersPropertiesTable = db['Users_Properties'];

const getUserProperty = async (req, res) => {
    try {
        const userProperty = await usersPropertiesTable.findByPk(req.params.id);

        res.status(200).send({
            message: `User-Property ID :  ${userProperty.id}`,
            data: userProperty
        })
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

        res.status(200).send({
            message: 'Select all of Users-Properties',
            data: usersProperties
        })

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
        const newUserProperty = await usersPropertiesTable.create(data);

        res.status(200).send({
            message: 'User-Property created',
            data: newUserProperty
        })
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
        const updateUserProperty = await usersPropertiesTable.update(
            newData,
            {
                where: {
                    id: idUserProperty
                }
            })
        if (updateUserProperty[0] == 1) {
            res.status(200).send({
                message: 'User-Property updated'
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
        const deletedUserProperty = await usersPropertiesTable.destroy({
            where: { id: idUserProperty }
        })
        console.log(deletedUserProperty);
        if (deletedUserProperty == 1) {
            res.status(200).send({
                message: 'User-Property deleted'
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