const db = require('../../models/index.js');
const agendasTable = db['Agendas'];

const createAgenda = async (req, res)  =>{

    try {

        const data = { ...req.body};
        const newAgendas = await agendasTable.create(data);

        res.status(200).send({
            message: 'Create',
            data: newAgendas
        })
        
    } catch (error) {

        console.log(error.message);

        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
        
    }
}
const modifyAgenda = async (req, res) =>{

    try {

        const {date, visitInformations, userId, idEmployee} = req.body;
        const idAgendas = req.params.id;
        const updateAgendas = await agendasTable.update(
            {date : date},
            {visitInformations : visitInformations},
            {userId : userId},
            {idEmployee : idEmployee},
            {where :{
                    id : idAgendas
                }
            })
        
            if(updateAgendas[0] == 1){
                res.status(200).send({
                    message : 'RDV modifié'
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
const getAgenda = async (req, res) => {

    try {
        
        const agenda = await agendasTable.findByPk(req.params.id, {include: 'roles'});
        
        res.status(200).send({
            message : ``, 
            data:agenda
        })

    } catch (error) {

        console.log(error);

        res.status(400).send({
            message : 'Erreur de synthaxe de la requête.',
            error : error.message
        })
    }
}
const getAgendas = async (req, res) =>{
    try {
        //  Récupération de tous les utilisateurs
        const agendas = await agendasTable.findAll();

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
    }
}
const deleteAgenda = async (req, res) =>{
    try {

        const deleteAgenda = await agendasTable.destroy({where :{id:req.params.id} });
        res.status(201).send({
            message : 'Deleted',
            data : deleteAgenda
        })

    } catch (error) {
        console.log(error);

        res.status(400).send({
            message : 'Erreur de synthaxe de la requête.',
            error : error.message
        })
    }
}
module.exports = {createAgenda, getAgenda, getAgendas, modifyAgenda, deleteAgenda };