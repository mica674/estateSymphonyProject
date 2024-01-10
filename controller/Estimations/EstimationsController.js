// const { where } = require('sequelize');
const db = require('../../models/index.js');
const estimationsTable = db['Estimations'];

const createEstimation = async (req, res)  =>{

    try {

        let data = { ...req.body};
        const newEstimation = await estimationsTable.create(data);

        console.log(data);
        res.status(200).send({
            message: 'Estimation créée',
            data: newEstimation
        })
        
    } catch (error) {

        console.log(error.message);

        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const modifyEstimation = async (req, res) =>{
    try {
        const {location, houseType, surface, showerRoom, room, floor, balcony, parking} = req.body;
        // const newData = { location: location, houseType: houseType, surface: surface, showerRoom: showerRoom, room: room, floor: floor, balcony: balcony, parking: parking };
        const idEstimations = req.params.id;
        const updateEstimations = await estimationsTable.update(
            {location : location},
            {houseType : houseType},
            {surface : surface},
            {showerRoom: showerRoom},
            {room : room},	
            {floor : floor},	
            {balcony : balcony},	
            {parking : parking},	
            {where :{
                    id : idEstimations
                }
            })
        
            if(updateEstimations[0] == 1){
                res.status(200).send({
                    message : 'Estimation modifiée'
                })
            }

    } catch (error) {
        
        console.log(error);

        res.status(400).send({
            message : 'Erreur de synthaxe de la requête.',
            error : error.message
        })
    }

}
const getEstimationID = async (req, res) => {

    try {
        //  Récupération de l'estimation avec son id passé en paramètre d'URL
        const estimation = await estimationsTable.findByPk(req.params.id);
        
        res.status(200).send({
            message : `Estimation id = ${estimation.id}`, 
            data: estimation
        })

    } catch (error) {

        console.log(error);

        res.status(400).send({
            message : 'Erreur de synthaxe de la requête.',
            error : error.message
        })
    }
}
const getEstimations = async (req, res) =>{
    try {
        //  Récupération de toutes les estimations
        const estimations = await estimationsTable.findAll();

        //  Envoie de toutes les estimations
        res.status(200).send({
            message : 'select all',
            data : estimations
        })

    } catch (error) {
        console.log(error);

        res.status(400).send({
            message : 'Erreur de synthaxe de la requête.',
            error : error.message
        })
    }
}
const deleteEstimation = async (req, res) =>{
    try {

        await estimationsTable.destroy({where :{id:req.params.id} });
        res.status(201).send({
            message : 'Estimation deleted'
        })

    } catch (error) {
        console.log(error);

        res.status(400).send({
            message : 'Erreur de synthaxe de la requête.',
            error : error.message
        })
    }
}
module.exports = {createEstimation, getEstimationID, getEstimations, modifyEstimation, deleteEstimation };

