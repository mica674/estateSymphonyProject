const db = require('../../models/index.js');
const favorisTable = db['Favories'];
const propertiesTable = db['Properties'];
const usersTable = db['Users'];

const getFavorite = async (req, res) => {
    try {
        const favori = await favorisTable.findByPk(req.params.id);
        if (favori) {
            res.status(200).send({
                data: favori
            })
        } else {
            res.status(422).send({
                message: 'Favori pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const getFavorites = async (req, res) => {
    try {
        const favoris = await favorisTable.findAll();
        if (favoris && favoris.length !== 0) {
            res.status(200).send({
                message: 'Select all of favoris',
                data: favoris
            })
        } else {
            res.status(422).send({
                message: 'Pas de favoris trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const createFavorite = async (req, res) => {
    try {
        let data = { ...req.body };
        const idUser = data.idUsers;
        const idUserFound = await usersTable.findByPk(idUser);
        if (idUserFound) {
            const idProperty = data.idProperties;
            const idPropertyFound = await propertiesTable.findByPk(idProperty);
            if (idPropertyFound) {
                const newFavori = await favorisTable.create(data);
                if (newFavori[0] === 1) {
                    res.status(200).send({
                        message: 'Favori créé',
                        data: newFavori
                    })
                } else {
                    res.status(422).send({
                        message: 'Favori pas créé'
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
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const modifyFavorite = async (req, res) => {
    try {
        const newData = { ...req.body };
        const idFavori = req.params.id;
        const idFavoriFound = await favorisTable.findByPk(idFavori);
        if (idFavoriFound) {
            const idUser = newData.idUsers;
            const idUserFound = await usersTable.findByPk(idUser);
            if (idUserFound) {
                const idProperty = newData.idProperties;
                const idPropertyFound = await usersTable.findByPk(idProperty);
                if (idPropertyFound) {
                    const updateFavori = await favorisTable.update(
                        newData,
                        {
                            where: { id: idFavori }
                        })
                    if (updateFavori[0] == 1) {
                        res.status(200).send({
                            message: 'Favori modifié'
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
                message: 'Favori pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const deleteFavorite = async (req, res) => {
    try {
        const idFavori = req.params.id;
        const idFavoriFound = await favorisTable.findByPk(idFavori);
        if (idFavoriFound) {
            const deletedFavori = await favorisTable.destroy({
                where: { id: idFavori }
            })
            if (deletedFavori == 1) {
                res.status(200).send({
                    message: 'Favori deleted',
                    data: deletedFavori
                })
            }
        } else {
            res.status(422).send({
                message: 'Favori pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

module.exports = { getFavorite, getFavorites, createFavorite, modifyFavorite, deleteFavorite }