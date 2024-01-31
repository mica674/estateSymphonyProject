const db = require('../../models/index.js');
const districtsTable = db['District'];

const getDistrict = async (req, res) => {
    try {
        const district = await districtsTable.findByPk(req.params.id);
        if (district !== null) {
            res.status(200).send({
                data: district
            })
        } else {
            res.status(404).send({
                message: 'District not found'
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
        if (districts !== null && districts.length > 0) {
            res.status(200).send({
                data: districts
            })
        } else {
            res.status(404).send({
                message: 'No district found'
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
        if (newDistrict !== null) {
            res.status(200).send({
                message: 'District created',
                data: newDistrict
            })
        } else {
            res.status(400).send({
                message: 'District not created'
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
        const idDistrictFound = await districtsTable.findOne(idDistrict);
        if (idDistrictFound !== null) {
            const updateDistrict = await districtsTable.update(
                data,
                {
                    where: {
                        id: idDistrict
                    }
                })
            if (updateDistrict[0] == 1) {
                res.status(200).send({
                    message: 'District updated',
                    data: data
                })
            } else {
                res.status(400).send({
                    message: 'District was not updated'
                })
            }
        } else {
            res.status(404).send({
                message: 'District not found'
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
        if (idDistrictFound !== null) {
            const deletedDistrict = await districtsTable.destroy({
                where: { id: idDistrict }
            })
            if (deletedDistrict == 1) {
                res.status(200).send({
                    message: 'District deleted',
                    data: idDistrictFound
                })
            } else {
                res.status(400).send({
                    message: 'District not deleted'
                })
            }
        } else {
            res.status(404).send({
                message: 'District not found'
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