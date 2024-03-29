const db = require('../../models/index.js');
const commentsTable = db['Comments'];

const getComment = async (req,res)=>{
    try {
        const comment = await commentsTable.findByPk(req.params.id);

        res.status(200).send({
            message: `Commentaire ${comment.id}`,
            data:comment
        })
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })  
    }
}

const getComments = async (req,res)=>{
    try {
        const comments = await commentsTable.findAll();

        res.status(200).send({
            message : 'select all',
            data:comments
        })

    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const createComment = async (req,res)=>{
    try {
        let data = {...req.body};
        const newComments = await commentsTable.create(data);
        
        res.status(200).send({
            message : 'Commentaire créé',
            data: newComments
        })
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const modifyComment = async (req,res)=>{
    try {
        const {comment} = req.body;
        const idComments = req.params.id;
        const updateComments = await commentsTable.update(
            {comment : comment},
            {where :{
                    id : idComments
                }
            })
            if(updateComments[0] == 1){
                res.status(200).send({
                    message : 'Commentaire modifié'
                })
            }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

const deleteComment =async (req, res)=>{
    try {
        const idComment = req.params.id;
        const deletedComment = await commentsTable.destroy({
            where  : {id : idComment}
        })
        console.log(deletedComment);
        if (deletedComment == 1) {
            res.status(200).send({
                message: 'Commentaire supprimé'
            })
        }
    } catch (error) {
        res.status(400).send({
            message: 'Erreur de synthaxe de la requête.',
            error: error.message
        })
    }
}

module.exports = {getComment, getComments, createComment, modifyComment, deleteComment}