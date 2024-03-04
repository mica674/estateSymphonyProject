const db = require('../../models/index.js');
const districtsTable = db['Districts'];

const getDistrict = async (req, res) => {
    try {
        const district = await districtsTable.findByPk(req.params.id);
        if (district) {
            res.status(200).send({
                data: district
            })
        } else {
            res.status(422).send({
                message: 'District pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const getDistricts = async (req, res) => {
    try {
        const districts = await districtsTable.findAll();
        if (districts && districts.length > 0) {
            res.status(200).send({
                data: districts
            })
        } else {
            res.status(422).send({
                message: 'Pas de district trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const createDistrict = async (req, res) => {
    try {
        let data = { ...req.body };
        const newDistrict = await districtsTable.create(data);
        if (newDistrict) {
            res.status(200).send({
                message: 'District créé',
                data: newDistrict
            })
        } else {
            res.status(422).send({
                message: 'District pas créé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const modifyDistrict = async (req, res) => {
    try {
        let data = { ...req.body };
        const idDistrict = req.params.id;
        const idDistrictFound = await districtsTable.findByPk(idDistrict);
        if (idDistrictFound) {
            const updateDistrict = await districtsTable.update(
                data,
                {
                    where: { id: idDistrict }
                })
            if (updateDistrict[0] == 1) {
                res.status(200).send({
                    message: 'District modifié',
                    data: data
                })
            } else {
                res.status(422).send({
                    message: 'District pas modifié'
                })
            }
        } else {
            res.status(422).send({
                message: 'District pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const deleteDistrict = async (req, res) => {
    try {
        const idDistrict = req.params.id;
        const idDistrictFound = await districtsTable.findByPk(idDistrict);
        if (idDistrictFound) {
            const deletedDistrict = await districtsTable.destroy({
                where: { id: idDistrict }
            })
            if (deletedDistrict == 1) {
                res.status(200).send({
                    message: 'District supprimé',
                    data: idDistrictFound
                })
            } else {
                res.status(422).send({
                    message: 'District pas supprimé'
                })
            }
        } else {
            res.status(422).send({
                message: 'District pas trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

module.exports = { getDistrict, getDistricts, createDistrict, modifyDistrict, deleteDistrict }