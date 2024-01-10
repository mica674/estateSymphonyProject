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
const UserController = require('../controller/User/UserController')

//------------------------------------- PROPERTIES ----------------------------------
const {createProperties} = require ('../controller/Properties/PropertiesController');

//------------------------------------- ESTIMATIONS ----------------------------------
//------------------------------------- ROLE ---------------------------------------
const roleController = require('../controller/Roles/RolesController');

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

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
router.post('/user/create', UserController.createUser);//S
router.get('/user/id/:id', UserController.getUserId);//S
router.get('/user/email/:email', UserController.getUserEmail);//S
router.get('/users', UserController.getAllUser);//S
router.get('/users/:idRole', UserController.getAllUserByIdRole);//S
router.post('/login', UserController.loginUser);//S
router.put('/user/modifyPassword', UserController.middleWare, UserController.modifyPassword);//S
router.put('/user/modify', UserController.middleWare, UserController.modify);//S
// router.put('/user/modifyEmail', UserController.middleWare, UserController.modifyEmail);


//------------------------------------- PROPERTIES ROUTER ---------------------------------
router.post('/createProperties', createProperties);


//------------------------------------- ESTIMATIONS ROUTER ---------------------------------
/*router.post('/createEstimations', createEstimations);
router.put('/modifyEstimations', modifyEstimations);
router.get('/viewsEstimations', viewEstimations);
router.put('/delectedEstimations', delectedEstimations);*/

//router.get('/me', middleWare );




module.exports = router;