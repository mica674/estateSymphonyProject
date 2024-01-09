const { where } = require('sequelize');
const db = require('../../models/index.js');
const propertiesTable = db['Estimations'];

const createEstimations = async (req, res)  =>{

    try {

        const data = { ...req.body};
        const newEstimations = await estimationsTable.create(data);

        res.status(200).send({
            message: 'Create',
            data: newEstimations
        })
        
    } catch (error) {

        console.log(error.message);

        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const modifyEstimations = async (req, res) =>{

    try {

        const {location, houseType, surface, showerRoom, room, floor, balcony, parking} = req.body;
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
                    message : 'Estimations modifié'
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
const getEstimation = async (req, res) => {

    try {
        //  Récupération de l'utilisateur avec son id passé en paramètre d'URL
        const propertie = await propertiesTable.findByPk(req.params.id, {include: 'roles'});
        
        res.status(200).send({
            message : `Bonjour ${user.firstname} ${user.firstname}`, 
            data:propertie
        })

    } catch (error) {

        console.log(error);

        res.status(400).send({
            message : 'Erreur de synthaxe de la requête.',
            error : error.message
        })
    }
}
const getAllEstimations = async (req, res) =>{
    try {
        //  Récupération de tous les utilisateurs
        const estimations = await estimationsTable.findAll();

        //  Envoie de tous les utilisateurs
        res.status(200).send({
            message : 'select',
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
const deleteEstimations = async (req, res) =>{
    try {

        const deleteProperties = await propertiesTable.destroy({where :{id:req.params.id} });
        res.status(201).send({
            message : 'Deleted',
            data : deleteProperties
        })

    } catch (error) {
        console.log(error);

        res.status(400).send({
            message : 'Erreur de synthaxe de la requête.',
            error : error.message
        })
    }
}
module.exports = {createEstimations, getEstimation, getAllEstimations, modifyEstimations, deleteEstimations };

