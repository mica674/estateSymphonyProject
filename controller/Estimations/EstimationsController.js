// const { where } = require('sequelize');
const db = require('../../models/index.js');
const estimationsTable = db['Estimations'];

const createEstimation = async (req, res) => {

    try {
        let data = { ...req.body };
        const newEstimation = await estimationsTable.create(data);
        if (newEstimation !== null) {
            res.status(201).send({
                message: 'Estimation created',
                data: newEstimation
            })
        } else {
            res.status(400).send({
                message: 'Estimation not created'
            })
        }

    } catch (error) {
        console.log(error.message);
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
        let idFound = await estimationsTable.findByPk(idEstimations);
        if (idFound !== null) {

            const updateEstimations = await estimationsTable.update(
                newData,
                {
                    where: {
                        id: idEstimations
                    }
                })

            if (updateEstimations[0] == 1) {
                res.status(200).send({
                    message: 'Estimation updated'
                })
            } else {
                res.status(400).send({
                    message: 'Estimation not updated'
                })
            }
        } else {
            res.status(404).send({
                message: 'Estimation not found'
            })
        }

    } catch (error) {

        console.log(error);

        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }

}
const getEstimationID = async (req, res) => {

    try {
        //  Récupération de l'estimation avec son id passé en paramètre d'URL
        const estimation = await estimationsTable.findByPk(req.params.id);
        if (estimation !== null) {
            res.status(200).send({
                message: `Estimation id = ${estimation.id}`,
                data: estimation
            })
        } else {
            res.status(404).send({
                message: 'Estimation not found'
            })
        }

    } catch (error) {

        console.log(error);

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

        //  Envoie de toutes les estimations
        res.status(200).send({
            message: 'select all',
            data: estimations
        })

    } catch (error) {
        console.log(error);

        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const deleteEstimation = async (req, res) => {
    try {

        let estimationDeleted = await estimationsTable.destroy({ where: { id: req.params.id } });
        if (estimationDeleted === 1) {
            res.status(200).send({
                message: 'Estimation deleted'
            })
        } else {
            res.status(404).send({
                message: 'Estimation not found'
            })
        }

    } catch (error) {
        console.log(error);

        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
module.exports = { createEstimation, getEstimationID, getEstimations, modifyEstimation, deleteEstimation };

