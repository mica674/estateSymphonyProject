const db = require('../../models/index.js');
const commentsTable = db['Comments'];
const usersTable = db['Users'];

const getComment = async (req, res) => {
    try {
        const comment = await commentsTable.findByPk(req.params.id);
        if (comment) {
            res.status(200).send({
                data: comment
            })
        } else {
            res.status(422).send({
                message: 'Comment pas trouvé'
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
        if (comments && comments.length !== 0) {
            res.status(200).send({
                data: comments
            })
        } else {
            res.status(422).send({
                message: 'Pas de commentaire trouvé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}
const createComment = async (req, res) => {
    try {
        const data = { ...req.body };
        const idUser = data.idUsers;
        const idUserFound = await usersTable.findByPk(idUser)
        if (idUserFound) {
            const newComments = await commentsTable.create(data);
            if (newComments) {
                res.status(200).send({
                    message: 'Commentaire créé',
                    data: newComments
                })
            } else {
                res.status(422).send({
                    message: 'Commentaire pas créé'
                })
            }
        } else {
            res.status(422).send({
                message: 'Utilisateur pas trouvé'
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
        const idComment = req.params.id;
        const idCommentFound = await commentsTable.findByPk(idComment);
        if (idCommentFound) {
            const updateComments = await commentsTable.update(
                { comment: comment },
                {
                    where: { id: idComment }
                })
            if (updateComments[0] == 1) {
                res.status(200).send({
                    message: 'Commentaire modifié'
                });
            } else {
                res.status(422).send({
                    message: 'Commentaire pas modifié'
                })
            }
        } else {
            res.status(422).send({
                message: 'Commentaire pas trouvé'
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
        const idCommentFound = await commentsTable.findByPk(idComment);
        if (idCommentFound) {
            const deletedComment = await commentsTable.destroy({
                where: { id: idComment }
            })
            if (deletedComment == 1) {
                res.status(200).send({
                    message: 'Comment supprimé'
                })
            } else {
                res.status(422).send({
                    message: 'Comment pas supprimé'
                })
            }
        } else {
            res.status(422).send({
                message: 'Commentaire pas trouvé'
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