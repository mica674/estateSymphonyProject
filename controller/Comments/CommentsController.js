const db = require('../../models/index.js');
const commentsTable = db['Comments'];
const usersTable = db['Users'];

const getComment = async (req, res) => {
    try {
        const comment = await commentsTable.findByPk(req.params.id);
        if (comment !== null) {
            res.status(200).send({
                data: comment
            })
        } else {
            res.status(404).send({
                message: 'Comment was not found'
            })
        }

    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const getComments = async (req, res) => {
    try {
        const comments = await commentsTable.findAll();

        res.status(200).send({
            data: comments
        })

    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const createComment = async (req, res) => {
    try {
        let data = { ...req.body };
        let idUserFound = await usersTable.findOne({
            where: { id: data.idUsers }
        });
        if (idUserFound !== null) {
            const newComments = await commentsTable.create(data);
            if (newComments !== null) {
                res.status(200).send({
                    message: 'Comment created',
                    data: newComments
                })
            } else {
                res.status(400).send({
                    message: 'Comment was not created'
                })
            }
        } else {
            res.status(404).send({
                message: 'idUsers not existed'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const modifyComment = async (req, res) => {
    try {
        const { comment } = req.body;
        const idComments = req.params.id;
        const updateComments = await commentsTable.update(
            { comment: comment },
            {
                where: {
                    id: idComments
                }
            })
        if (updateComments[0] == 1) {
            res.status(200).send({
                message: 'Comment was updated'
            });
        }
        else {
            res.status(400).send({
                message: 'Comment was not updated'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const deleteComment = async (req, res) => {
    try {
        const idComment = req.params.id;
        const deletedComment = await commentsTable.destroy({
            where: { id: idComment }
        })
        console.log(deletedComment);
        if (deletedComment == 1) {
            res.status(200).send({
                message: 'Comment was deleted'
            })
        } else {
            res.status(400).send({
                message: 'Comment was not deleted'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

module.exports = { getComment, getComments, createComment, modifyComment, deleteComment }