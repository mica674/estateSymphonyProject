const express = require('express');
const router = express.Router();

//------------------------------------- USER ---------------------------------------
const userController = require('../controller/User/UserController');
//------------------------------------- ROLE ---------------------------------------
const roleController = require('../controller/Roles/RolesController');
//------------------------------------- PROPERTIES ----------------------------------
const propertieController= require ('../controller/Properties/PropertiesController');
//------------------------------------- ESTIMATIONS ---------------------------------
const estimationsController= require ('../controller/Estimations/EstimationsController');
//------------------------------------- AGENDAS -------------------------------------
const agendasController= require ('../controller/Agendas/AgendasController');
//------------------------------------- COMMENTS ------------------------------------
const commentsController= require ('../controller/Comments/CommentsController');
//------------------------------------- HISTORIES -----------------------------------
const historiesController= require ('../controller/Histories/HistoriesController');
//------------------------------------- FAVORIES ------------------------------------
const favoriesController= require ('../controller/Favories/FavoriesController');
//------------------------------------- MESSAGES ------------------------------------
const messagesController= require ('../controller/Messages/MessagesController');
//------------------------------------- PHOTOS --------------------------------------
const photosMiddleware= require ('../middleware/Photos/PhotosMiddleware');
//------------------------------------- CLIENT FOLDERS ------------------------------
const clientFolderController = require ('../controller/Client Folder/ClientFolderController');
const PhotosMiddleware = require('../middleware/Photos/PhotosMiddleware');

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Bonjour'
    })
})

//------------------------------------- ROLE ROUTER ---------------------------------------
router.get('/roles/:id', roleController.getRole);
router.get('/roles', roleController.getAllRoles);
router.post('/role', roleController.createRole);
router.put('/modifyRole/:id', roleController.modifyRole);
router.delete('/role/:id', roleController.deleteRole);

//------------------------------------- USER ROUTER ---------------------------------------
router.get('/users/:id', userController.getUser);
router.get('/users', userController.getAllUser);
router.post('/users', userController.createUser);
router.post('/login', userController.loginUser);
router.put('/modifyPassword', userController.middleWare, userController.modifyPassword);
router.put('/modifyEmail', userController.middleWare, userController.modifyEmail);

//------------------------------------- PROPERTIES ROUTER ---------------------------------
router.post('/createProperties', photosMiddleware.upload, propertieController.createProperties);
router.put('/modifyProperties', propertieController.modifyProperties);
router.delete('/deleteProperties', propertieController.deleteProperties);
router.get('/properties', propertieController.getAllProperties);
router.get('/propertie/:id', propertieController.getPropertie);

//------------------------------------- ESTIMATIONS ROUTER ---------------------------------
router.post('/createEstimations', estimationsController.createEstimations);
router.put('/modifyEstimations', estimationsController.modifyEstimations);
router.delete('/deleteEstimations', estimationsController.deleteEstimations);
router.get('/estimations', estimationsController.getAllEstimations);
router.get('/estimation/:id', estimationsController.getEstimation);

//------------------------------------- AGENDAS ROUTER ---------------------------------
router.post('/createAgendas', agendasController.createAgendas);
router.put('/modifyAgendas', agendasController.modifyAgendas);
router.delete('/deleteAgendas', agendasController.deleteAgenda);
router.get('/agendas', agendasController.getAllAgendas);
router.get('/agenda/:id', agendasController.getAgenda);

//------------------------------------- COMMENTS ROUTER ---------------------------------
router.post('/createComments', commentsController.createComments);
router.put('/modifyComments', commentsController.modifyComments);
router.delete('/deleteComments', commentsController.deleteComments);
router.get('/comments', commentsController.getAllComments);
router.get('/comment/:id', commentsController.getComment);

/*//------------------------------------- FAVORIES ROUTER ---------------------------------
router.post('/createFavories', favoriesController.createFavories);
router.put('/modifyFavories', favoriesController.modifyFavories);
router.delete('/deleteFavories', favoriesController.deleteFavories);
router.get('/favories', favoriesController.getAllFavories);
router.get('/favorie/:id', favoriesController.getFavorie);

//------------------------------------- HISTORIES ROUTER ---------------------------------
router.post('/createHistories', historiesController.createHistories);
router.put('/modifyHistories', historiesController.modifyHistories);
router.delete('/deleteHistories', historiesController.deleteHistories);
router.get('/histories', historiesController.getAllHistories);
router.get('/historie/:id', historiesController.getHistorie);*/

//------------------------------------- MESSAGES ROUTER ---------------------------------
router.post('/createMessages', messagesController.createMessages);
router.put('/modifyMessages', messagesController.modifyMessages);
router.delete('/deleteMessages', messagesController.deleteMessages);
router.get('/messages', messagesController.getAllMessages)
router.get('/message/:id', messagesController.getMessage);

//------------------------------------- CLIENTFOLDER ROUTER -----------------------------
router.post('/createClientFolder', clientFolderController.createClientFolders);
router.put('/modifyClientFolders', clientFolderController.modifyClientFolders);
router.delete('/deleteClientFolder', clientFolderController.deleteClientFolder);
router.get('/clientFolders', clientFolderController.getAllClientFolders)
router.get('/clientFolder/:id', clientFolderController.getClientFolder);

//------------------------------------- PHOTOS ROUTER -----------------------------
router.post('/photos', photosMiddleware.upload);




//router.get('/me', middleWare );



//test email
// require ('../NodeMailerTest.js');

module.exports = router;