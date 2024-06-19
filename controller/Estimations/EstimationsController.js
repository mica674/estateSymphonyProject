// const { where } = require('sequelize');
const db = require('../../models/index.js');
const estimationsTable = db['Estimations'];

const getEstimationID = async (req, res) => {
    try {
        //  Récupération de l'estimation avec son id passé en paramètre d'URL
        const estimation = await estimationsTable.findByPk(req.params.id);
        if (estimation) {
            res.status(200).send({
                data: estimation
            })
        } else {
            res.status(422).send({
                message: 'Estimation pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const getEstimations = async (req, res) => {
    try {
        //  Récupération de toutes les estimations
        const estimations = await estimationsTable.findAll();
        if (estimations && estimations.length !== 0) {
            //  Envoie de toutes les estimations
            res.status(200).send({
                data: estimations
            })
        } else {
            res.status(422).send({
                message: 'Pas d\'estimation trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const getEstimationsByOne = async (req, res) => {
    try {
        const idUser = req.params.id;
        //  Récupération de toutes les estimations d'un utilisateur
        const estimations = await estimationsTable.findAll({ where: { idUsers: idUser } });
        if (estimations && estimations.length !== 0) {
            //  Envoie de toutes les estimations
            res.status(200).send({
                data: estimations
            })
        } else {
            res.status(422).send({
                message: 'Pas d\'estimation trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const createEstimation = async (req, res) => {
    try {
        let data = { ...req.body };
        const newEstimation = await estimationsTable.create(data);
        if (newEstimation) {
            res.status(200).send({
                message: 'Estimation créée',
                data: newEstimation
            })
        } else {
            res.status(422).send({
                message: 'Estimation pas créée'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const modifyEstimation = async (req, res) => {
    try {
        const newData = { ...req.body };
        // const newData = { location: location, houseType: houseType, surface: surface, showerRoom: showerRoom, room: room, floor: floor, balcony: balcony, parking: parking };
        const idEstimations = req.params.id;
        let idEstimationsFound = await estimationsTable.findByPk(idEstimations);
        if (idEstimationsFound) {
            const updateEstimations = await estimationsTable.update(
                newData,
                {
                    where: { id: idEstimations }
                })
            if (updateEstimations[0] == 1) {
                res.status(200).send({
                    message: 'Estimation modifiée'
                })
            } else {
                res.status(422).send({
                    message: 'Estimation pas modifiée'
                })
            }
        } else {
            res.status(422).send({
                message: 'Estimation pas trouvée'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const deleteEstimation = async (req, res) => {
    try {
        const idEstimation = req.params.id;
        const idEstimationFound = await estimationsTable.findByPk(idEstimation);
        if (idEstimationFound) {
            let estimationDeleted = await estimationsTable.destroy({ where: { id: idEstimation } });
            if (estimationDeleted === 1) {
                res.status(200).send({
                    message: 'Estimation supprimée'
                })
            } else {
                res.status(422).send({
                    message: 'Estimation pas supprimée'
                })
            }
        } else {
            res.status(422).send({
                message: 'Estimation pas trouvée'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
module.exports = { createEstimation, getEstimationID, getEstimations, getEstimationsByOne, modifyEstimation, deleteEstimation };

