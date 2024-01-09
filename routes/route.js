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
/**
 * @swagger
 * /roles/:id:
 *      get:
 *          summary: To find a 'Role' with his ID
 *          tags: [ROLE]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: id of Role
 *                  schema: schema
 *                  type: integer
 *                  required: true
 *          description: Obtenir tous les roles ajoutés dans la base de données
 *          responses: 
 *              200:
 *                  description: Role by ID
 *                  content:
 *                      application/json:
 *                          schema:
 *              400:
 *                  description: Role can't be found
 */
router.get('/roles/:id', roleController.getRole);
/**
 * @swagger
 * /Get All:
 *      get:
 *          summary: Récupérer tous les roles de la base de données
 *          tags: [ROLE]
 *          parameters:
 *              -   in : path
 *                  name: id
 *                  description: id of Role
 *                  schema:
 *                  type: integer
 *                  required: true
 *          description: Obtenir tous les roles ajoutés dans la base de données
 *          responses: 
 *              200:
 *                  description: Role by ID
 *                  content:
 *                      application/json:
 *                          schema:
 *              400:
 *                  description: Role can't be found
 */
router.get('/roles', roleController.getAllRoles);
router.post('/role', roleController.createRole);
router.put('/modifyRole/:id', roleController.modifyRole);
router.delete('/role/:id', roleController.deleteRole);

//------------------------------------- USER ROUTER ---------------------------------------
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
router.post('/user/create', UserController.createUser);

/**
 * @swagger
 * /user/id/:id:
 *  post:
 *      summary: Récupérer les informations d'un utilisateur
 *      parameters:
 *          -   in : path
 *              name: id
 *              required: true
 *              description: ID of User
 *              schema:
 *                  type: integer
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

router.get('/user/id/:id', UserController.getUserId);
/**
 * @swagger
 * /user/email/:email:
 *  post:
 *      summary: Créer un nouvel utilisateur
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

router.get('/user/email/:email', UserController.getUserEmail);
router.get('/users', UserController.getAllUser);
router.get('/users/:idRole', UserController.getAllUserByIdRole);
router.post('/login', UserController.loginUser);
router.put('/user/modifyPassword', UserController.middleWare, UserController.modifyPassword);
router.put('/user/modify', UserController.middleWare, UserController.modify);
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