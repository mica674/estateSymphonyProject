const { where } = require('sequelize');
const db = require('../../models/index.js');
const propertiesTable = db['Properties'];

const createProperties = async (req, res)  =>{

    try {

        const data = { ...req.body};
        const newProperties = await propertiesTable.create(data);

        res.status(200).send({
            message: 'Create',
            data: newProperties
        })
        
    } catch (error) {

        console.log(error.message);

        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })

        res.status(401).send({
            message: 'Vous n\'êtes pas autorisé.',
            error: error.message
        })

        res.status(403).send({
            message: 'Vous n\'avez pas les droits d\'accès.',
            error: error.message
        })

        res.status(404).send({
            message: 'Le serveur n\'a pas trouvé la source demandé.',
            error: error.message
        })

        res.status(500).send({
            message: 'Erreur serveur.',
            error: error.message
        })
        
    }
}
const modifyProperties = async (req, res) =>{

    try {

        const {price, location, surface, showerRoom, energising, typeEnergic, clicCount,description,
                heatingSystem, floor, balcony, parking, rooms, idStatus, idDistrict } = req.body;
        const idProperties = req.params.id;
        const updateProperties = await propertiesTable.update(
            {price : price},
            {location : location},
            {surface : surface},
            {showerRoom : showerRoom},
            {energising : energising},
            {typeEnergic : typeEnergic},
            {clicCount : clicCount},
            {description : description},
            {heatingSystem : heatingSystem},
            {floor : floor},
            {balcony : balcony},
            {parking : parking},
            {rooms : rooms},
            {idStatus : idStatus},
            {idDistrict  : idDistrict },
            {where :{
                    id : idProperties
                }
            })
            if(updateProperties[0] == 1){
                res.status(200).send({
                    message : 'Role modifié'
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
const getPropertie = async (req, res) => {

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

        res.status(401).send({
            message : 'Vous n\'êtes pas autorisé.',
            error : error.message
        })

        res.status(403).send({
            message : 'Vous n\'avez pas les droits d\'accès.',
            error : error.message
        })

        res.status(404).send({
            message : 'Le serveur n\'a pas trouvé la source demandé.',
            error : error.message
        })

        res.status(500).send({
            message : 'Erreur serveur.',
            error : error.message
        })
    }
}
const getAllProperties = async (req, res) =>{
    try {
        //  Récupération de tous les utilisateurs
        const properties = await propertiesTable.findAll();

        //  Envoie de tous les utilisateurs
        res.status(200).send({
            message : 'select',
            data : properties
        })

    } catch (error) {
        console.log(error);

        res.status(400).send({
            message : 'Erreur de synthaxe de la requête.',
            error : error.message
        })

        res.status(401).send({
            message : 'Vous n\'êtes pas autorisé.',
            error : error.message
        })

        res.status(403).send({
            message : 'Vous n\'avez pas les droits d\'accès.',
            error : error.message
        })

        res.status(404).send({
            message : 'Le serveur n\'a pas trouvé la source demandé.',
            error : error.message
        })

        res.status(500).send({
            message : 'Erreur serveur.',
            error : error.message
        })
    }
}
const deleteProperties = async (req, res) =>{
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
module.exports = {createProperties, getPropertie, getAllProperties, modifyProperties, deleteProperties };