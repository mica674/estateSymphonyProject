const db = require('../../models/index.js');
const clientFoldersTable = db['ClientFolders'];

const createClientFolders = async (req, res)  =>{

    try {

        const data = { ...req.body};
        const newClientFolders = await clientFoldersTable.create(data);

        res.status(200).send({
            message: 'Dossier client créé',
            data: newClientFolders
        })
        
    } catch (error) {

        console.log(error.message);

        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
        
    }
}
const modifyClientFolders = async (req, res) =>{

    try {

        const {name, pdf, userId} = req.body;
        const idClientFolders = req.params.id;
        const updateClientFolders = await clientFoldersTable.update(
            {name : name},
            {pdf : pdf},
            {userId : userId},
            {where :{
                    id : idClientFolders
                }
            })
        
            if(updateClientFolders[0] == 1){
                res.status(200).send({
                    message : 'Dossier client modifié'
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
const getClientFolder = async (req, res) => {

    try {
        
        const clientFolder = await clientFoldersTable.findByPk(req.params.id, {include: 'user'});
        
        res.status(200).send({
            message : ``, 
            data:clientFolder
        })

    } catch (error) {

        console.log(error);

        res.status(400).send({
            message : 'Erreur de synthaxe de la requête.',
            error : error.message
        })
    }
}
const getAllClientFolders = async (req, res) =>{
    try {
        //  Récupération de tous les utilisateurs
        const clientFolders = await clientFoldersTable.findAll();

        //  Envoie de tous les utilisateurs
        res.status(200).send({
            message : 'select',
            data : clientFolders
        })

    } catch (error) {
        console.log(error);

        res.status(400).send({
            message : 'Erreur de synthaxe de la requête.',
            error : error.message
        })
    }
}
const deleteClientFolder = async (req, res) =>{
    try {

        const deleteClientFolde = await clientFoldersTable.destroy({where :{id:req.params.id} });
        res.status(201).send({
            message : 'Deleted',
            data : deleteClientFolde
        })

    } catch (error) {
        console.log(error);

        res.status(400).send({
            message : 'Erreur de synthaxe de la requête.',
            error : error.message
        })
    }
}
module.exports = {createClientFolders, getClientFolder, getAllClientFolders, modifyClientFolders, deleteClientFolder};