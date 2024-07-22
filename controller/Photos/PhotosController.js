const { SyntaxErrorMessage, PropertyNoFound, PhotosNoFoundForProperty, PhotoDeleted, PhotoNotDeleted, PhotoNoFound } = require('../../config/Constants.js');
const db = require('../../models/index.js');
const photosTable = db['Photos'];
const propertiesTable = db['Properties'];
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');


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
const deletePhoto = async (req, res) => {
    try {
        const idPhoto = req.params.id;
        const idPhotoFound = await photosTable.findByPk(idPhoto);
        if (idPhotoFound) {
            console.log(idPhotoFound);
            const photoDeleted = await photosTable.destroy({ where: { id: idPhoto } })
            if (photoDeleted) {
                res.status(200).send({ message: PhotoDeleted })
            } else {
                res.status(422).send({ message: PhotoNotDeleted })
            }
        } else {
            res.status(422).send({ message: PhotoNoFound })
        }
    } catch (error) {
        res.status(422).send({
            message: SyntaxErrorMessage,
            error: error.message
        })
    }
}

module.exports = { getPhotosByProperty, deletePhoto }