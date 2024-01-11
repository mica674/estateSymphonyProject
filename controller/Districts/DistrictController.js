const db = require('../../models/index.js');
const districtsTable = db['Districts'];

const getDistrict = async (req,res)=>{
    try {
        const district = await districtsTable.findByPk(req.params.id);

        res.status(200).send({
            message: `District ID :  ${district.id}`,
            data:   district
        })
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })  
    }
}

const getDistricts = async (req,res)=>{
    try {
        const districts = await districtsTable.findAll();

        res.status(200).send({
            message : 'select all',
            data:   districts
        })

    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const createDistrict = async (req,res)=>{
    try {
        let data = {...req.body};
        const newDistrict = await districtsTable.create(data);
        
        res.status(200).send({
            message : 'District créé',
            data: newDistrict
        })
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const modifyDistrict = async (req,res)=>{
    try {
        const {name} = req.body;
        const idDistrict = req.params.id;
        const updateDistrict = await districtsTable.update(
            {name : name},
            {where :{
                    id : idDistrict
                }
            })
            if(updateDistrict[0] == 1){
                res.status(200).send({
                    message : 'District modifié'
                })
            }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const deleteDistrict =async (req, res)=>{
    try {
        const idDistrict = req.params.id;
        const deletedDistrict = await districtsTable.destroy({
            where  : {id : idDistrict}
        })
        console.log(deletedDistrict);
        if (deletedDistrict == 1) {
            res.status(200).send({
                message: 'District supprimé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

module.exports = {getDistrict, getDistricts, createDistrict, modifyDistrict, deleteDistrict}