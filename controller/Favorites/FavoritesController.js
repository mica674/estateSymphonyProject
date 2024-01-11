const db = require('../../models/index.js');
const favorisTable = db['Favories'];

const getFavorite = async (req, res) => {
    try {
        const favori = await favorisTable.findByPk(req.params.id);

        res.status(200).send({
            message: `Favori ID :  ${favori.id}`,
            data: favori
        })
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

        res.status(200).send({
            message: 'Select all of favoris',
            data: favoris
        })

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
        const newFavori = await favorisTable.create(data);

        res.status(200).send({
            message: 'Favori created',
            data: newFavori
        })
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
        const updateFavori = await favorisTable.update(
            newData,
            {
                where: {
                    id: idFavori
                }
            })
        if (updateFavori[0] == 1) {
            res.status(200).send({
                message: 'Favori updated'
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
        const deletedFavori = await favorisTable.destroy({
            where: { id: idFavori }
        })
        console.log(deletedFavori);
        if (deletedFavori == 1) {
            res.status(200).send({
                message: 'Favori deleted'
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