//SWAGGER
//  USER
    //  CREATE
/**
 * @swagger
 * /user/create:
 *  post:
 *      summary: Créer un nouvel utilisateur
 *      tags: [USER]
 *      description: Crée un nouvel utilisateur dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              description: Email de l'utilisateur
 *                          password:
 *                              type: string
 *                              description: Mot de passe de l'utilisateur
 *      responses:
 *          200:
 *              description: Utilisateur créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Create
 *                          data: 
 *                              email: contact-amiens@lamanu.fr
 *                              password: $2b$12$FRE3BYhXhUyfeOI/ryIs3OG/ZomZJbO7QiPwslNAFEdDkBU8z1Mt
 *          400:
 *              description: Erreur lors de la création de l'utilisateur
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: L'adresse email existe déjà
 *                          error: Message de l'erreur spécifique le cas échéant
*/
    //  LOGIN
/**
 * @swagger
 * /login:
 *  post:
 *      summary: Connexion d'un nouvel utilisateur
 *      tags: [USER]
 *      description: Connecte un nouvel utilisateur
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              description: Email de l'utilisateur
 *                          password:
 *                              type: string
 *                              description: Mot de passe de l'utilisateur
 *      responses:
 *          200:
 *              description: Utilisateur connecté avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Login successed
 *                          data: 
 *                              token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkFsYmVydGxlYmVhdWdvc3NlQGdtYWlsLmNvbSIsImlhdCI6MTcwNDc5NTEyMCwiZXhwIjoxNzA0ODgxNTIwfQ.lBRfXtbc-TH8oPQv3kgb04D9xEqarU7IQF0qHNO2rz4
 *          400:
 *              description: Erreur lors de la connexion de l'utilisateur
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: La connexion a échouée
 *                          error: Message de l'erreur spécifique le cas échéant
*/
    //  GET BY ID
/**
 * @swagger
 * /user/id/{id}:
 *  get:
 *      summary: Récupérer les informations d'un utilisateur
 *      tags: [USER]
 *      parameters:
 *          -   in : path
 *              name: id
 *              required: true
 *              description: ID of User
 *              schema:
 *                  type: integer
 *                  required: true
 *      description: Récupère les informations d'un utilisateur dans la base de données à partir de son ID
 *      responses:
 *          200:
 *              description: Utilisateur trouvé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Bonjour firstname lastname
 *                          data: 
 *                              firstname: Mickaël
 *                              lastname: Fournier
 *          400:
 *              description: Erreur lors de la récupétion de l'utilisateur
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération d\'un utilisateur par son ID
 *                          error: Message de l'erreur spécifique le cas échéant
*/
    //  GET BY EMAIL
/**
 * @swagger
 * /user/email/{email}:
 *  get:
 *      summary: Récupérer les informations d'un utilisateur
 *      tags: [USER]
 *      parameters:
 *          -   in : path
 *              name: email
 *              required: true
 *              description: EMAIL of User
 *              schema:
 *                  type: string
 *      description: Récupère les informations d'un utilisateur dans la base de données à partir de son EMAIL
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                              description: Email de l'utilisateur
 *      responses:
 *          200:
 *              description: Utilisateurs trouvés avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Bonjour firstname lastname
 *                          data: 
 *                              firstname: Mickaël
 *                              lastname: Fournier
 *          400:
 *              description: Erreur lors de la récupétion de l'utilisateur
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération d\'un utilisateur par son EMAIL
 *                          error: Message de l'erreur spécifique le cas échéant
 */
    //  GET ALL
/**
 * @swagger
 * /users:
 *  get:
 *      summary: Récupérer les informations de tous les utilisateurs
 *      tags: [USER]
 *      description: Récupère les informations de tous les utilisateurs dans la base de données
 *      responses:
 *          200:
 *              description: Utilisateurs trouvés avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Select all
 *                          data: $users
 *          400:
 *              description: Erreur lors de la création de l'utilisateur
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération de tous les utilisateurs
 *                          error: Message de l'erreur spécifique le cas échéant
 */
    //  GET ALL BY ID ROLE
/**
 * @swagger
 * /users/{idRole}:
 *  get:
 *      summary: Récupérer tous les utilisateurs qui ont un certains role
 *      tags: [USER]
 *      parameters:
 *          -   in : path
 *              name: idRole
 *              required: true
 *              description: ID ROLE of User
 *              schema:
 *                  type: integer
 *      description: Récupère tous les utilisateurs qui ont un role spécifique
 *      responses:
 *          200:
 *              description: Utilisateurs trouvés avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Select all by idRole
 *                          data: $users
 *          400:
 *              description: Erreur lors de la création de l'utilisateur
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération de tous les utilisateurs avec un role spécifique
 *                          error: Message de l'erreur spécifique le cas échéant
*/
    //  MODIFY PASSWORD
/**
 * @swagger
 * /user/modifyPassword:
 *  put:
 *      summary: Modifier le mot de passe d'un utilisateur
 *      tags: [USER]
 *      parameters:
 *          -   in: header
 *              name: Authorization
 *              required: true
 *              description: Token d'authentification de l'utilisateur
 *              schema:
 *                  type: string
 *      description: Modifie le mot de passe d'un utilisateur dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          password:
 *                              type: string
 *                              description: Mot de passe de l'utilisateur
 *      responses:
 *          200:
 *              description: Mot de passe utilisateur modifié avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Mot de passe modifié avec succès
 *                          data: newPassword
 *          400:
 *              description: Erreur lors de la modification de mot de passe de l'utilisateur
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification du mot de passe
 *                          error: Message de l'erreur spécifique le cas échéant
*/
    //  MODIFY 
/**
 * @swagger
 * /user/modify:
 *  put:
 *      summary: Modifier les informations d'un utilisateur
 *      tags: [USER]
 *      parameters:
 *          -   in: header
 *              name: Authorization
 *              required: true
 *              description: Token d'authentification de l'utilisateur
 *              schema:
 *                  type: string
 *                  requried: true
 *      description: Modifie les informations d'un utilisateur dans la base de données
 *      requestBody:
 *          required: false
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          firstname:
 *                              type: string
 *                              description: Prénom de l'utilisateur
 *                          lastname:
 *                              type: string
 *                              description: Nom de l'utilisateur
 *                          phone:
 *                              type: string
 *                              description: Numéro de téléphone de l'utilisateur
 *      responses:
 *          200:
 *              description: Informations de l'utilisateur modifiés avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Informations modifiés avec succès
 *                          data: 
 *                              firstname: Mickaël
 *                              lastname: Fournier
 *                              phone: "0612345678"
 *          400:
 *              description: Erreur lors de la modification des informations de l'utilisateur
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification des informations de l'utilisateur
 *                          error: Message de l'erreur spécifique le cas échéant
*/

//  ROLE
    //  GET BY ID
/**
 * @swagger
 * /roles/{id}:
 *      get:
 *          summary: To find a 'Role' with his ID
 *          tags: [ROLE]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID of Role
 *                  schema: 
 *                      type: integer
 *                      required: true
 *          description: Obtenir un role par son ID
 *          responses: 
 *              200:
 *                  description: Role by ID
 *                  content:
 *                  application/json:
 *                      example:
 *                          message: Role 2
 *                          data:
 *                              id: 2
 *                              createdAt: "2024-01-08T14:47:27.000Z"
 *                              updatedAt: "2024-01-09T14:52:34.000Z"
 *          400:
 *              description: Erreur lors de la récupétion du role
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Erreur survenue lors de la récupération d\'un role par son ID
 *                          error: Message de l'erreur spécifique le cas échéant
 */
    //  GET ALL
/**
 * @swagger
 * /roles:
 *      get:
 *          summary: Récupérer tous les roles de la base de données
 *          tags: [ROLE]
 *          description: Récupère tous les roles ajoutés dans la base de données
 *          responses: 
 *              200:
 *                  description: Role by ID
 *                  content:
 *                      application/json:
 *                        example:
 *                         message: select all
 *                         data: 
 *                             -   id: 1
 *                                 name: Admin
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: "2024-01-09T08:22:15.000Z"
 *                             -   id: 2
 *                                 name: Manager
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: null
 *                             -   id: 3
 *                                 name: Employee
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: null
 *                             -   id: 4
 *                                 name: User
 *                                 createdAt: "2024-01-08T14:47:27.000Z"
 *                                 updatedAt: null
 *              400:
 *                  description: Erreur lors de la récupétion du role
 *                  content: 
 *                      application/json:
 *                          example:
 *                              message: Erreur survenue lors de la récupération d\'un role par son ID
 *                              error: Message de l'erreur spécifique le cas échéant
 */
    //  CREATE
/**
 * @swagger
 * /role/create:
 *  post:
 *      summary: Créer un nouveau role
 *      tags: [ROLE]
 *      description: Crée un nouveau role dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              description: Nom du role
 *      responses:
 *          200:
 *              description: Role créé avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Role créé
 *                          data: 
 *                              id: 25
 *                              name: SuperAdmin
 *                              updatedAt: "2024-01-09T08:43:54.003Z"
 *                              createdAt: "2024-01-09T08:43:54.003Z"
 *          400:
 *              description: Erreur lors de la création de l'utilisateur
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: L'adresse email existe déjà
 *                          error: Message de l'erreur spécifique le cas échéant
*/
    //  MODIFY 
/**
 * @swagger
 * /modifyRole/{id}:
 *  put:
 *      summary: Modifier le nom d'un role
 *      tags: [ROLE]
 *      parameters:
 *          -   in: path
 *              name: id
 *              required: true
 *              description: ID du role
 *              schema:
 *                  type: integer
 *                  required: true
 *      description: Modifie le nom d'un role dans la base de données
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                              type: string
 *                              description: Nom du role
 *      responses:
 *          200:
 *              description: Nom du role modifié avec succès
 *              content:
 *                  application/json:
 *                      example:
 *                          message: Role modifié avec succès
 *          400:
 *              description: Erreur lors de la modification du role
 *              content: 
 *                  application/json:
 *                      example:
 *                          message: Echec de la modification du nom du role
 *                          error: Message de l'erreur spécifique le cas échéant
*/
    //  DELETE
 /**
 * @swagger
 * /role/{id}:
 *      delete:
 *          summary: To delete a 'Role' with his ID
 *          tags: [ROLE]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: ID of Role
 *                  schema: 
 *                      type: integer
 *                      required: true
 *          description: Deleting a 'Role' in the database
 *          responses: 
 *              200:
 *                  description: Delete Role by ID
 *                  content:
 *                      application/json:
 *                          example:
 *                              message: Role supprimé
 *              400:
 *                description: Erreur lors de la suppression du role
 *                content: 
 *                    application/json:
 *                        example:
 *                            message: Erreur survenue lors de la suppression d\'un role par son ID
 *                            error: Message de l'erreur spécifique le cas échéant
 */
   



const express = require('express');
const {specs, swaggerUi} = require('../Swagger/swaggerConfig')
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
//------------------------------------- PHOTOS FOLDERS ------------------------------
const PhotosMiddleware = require('../middleware/Photos/PhotosMiddleware');

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'Bonjour'
    })
})


//------------------------------------- ROLE ROUTER ---------------------------------------

router.get('/roles/:id', roleController.getRole);//S
router.get('/roles', roleController.getAllRoles);//S
router.post('/role', roleController.createRole);//S
router.put('/modifyRole/:id', roleController.modifyRole);//S
router.delete('/role/:id', roleController.deleteRole);//S

//------------------------------------- USER ROUTER ---------------------------------------
router.post('/user/create', userController.createUser);//S
router.get('/user/id/:id', userController.getUserId);//S
router.get('/user/email/:email', userController.getUserEmail);//S
router.get('/users', userController.getAllUser);//S
router.get('/users/:idRole', userController.getAllUserByIdRole);//S
router.post('/login', userController.loginUser);//S
router.put('/user/modifyPassword', userController.middleWare, userController.modifyPassword);//S
router.put('/user/modify', userController.middleWare, userController.modify);//S
// router.put('/user/modifyEmail', UserController.middleWare, UserController.modifyEmail);

/*//------------------------------------- USER ROUTER ---------------------------------------
router.get('/users/:id', userController.getUser);
router.get('/users', userController.getAllUser);
router.post('/users', userController.createUser);
router.post('/login', userController.loginUser);
router.put('/modifyPassword', userController.middleWare, userController.modifyPassword);
router.put('/modifyEmail', userController.middleWare, userController.modifyEmail);*/

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




module.exports = router;