const { SyntaxErrorMessage, PropertyNoFound, PhotosNoFoundForProperty } = require('../../config/Constants.js');
const db = require('../../models/index.js');
const photosTable = db['Photos'];
const propertiesTable = db['Properties'];


const getPhotosByProperty = async (req, res) => {
    try {
        const idProperty = req.params.id;
        const idPropertyFound = await propertiesTable.findOne({ where: { id: idProperty } })
        if (idPropertyFound) {
            const photosFound = await photosTable.findAll({ where: { idProperties: idProperty } })
            if (photosFound) {
                res.status(200).send({
                    data: photosFound,
                })
            } else {
                res.status(422).send({
                    message: PhotosNoFoundForProperty
                })
            }
        } else {
            res.status(422).send({
                message: PropertyNoFound
            })
        }
    } catch (error) {
        res.status(422).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }
}

module.exports = { getPhotosByProperty }